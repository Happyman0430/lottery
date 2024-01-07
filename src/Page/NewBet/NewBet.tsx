import { FC, useCallback, useEffect, useState } from "react";

import {
  Layout,
  CardGame,
  SubTitle,
  Title,
  Button,
  Container,
  Ball,
} from "@Components/index";

import { convertToReal } from "@helpers/convertToReal";
import { RootState } from "@store/index";
import { PostBet } from "@store/Bet";

import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { FetchListGames, ListGameActions } from "@store/Games";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
type GameType = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};
type cartGame = {
  id: number;
  game_id: number;
  numbers: number[];
};
const NewBet: FC = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<cartGame[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [totalValueCart, setTotalValueCart] = useState(0);
  const { types: games, min_cart_value: minCartValue } = useSelector(
    (state: RootState) => state.ListGames.list
  );
  const currentGame = useSelector(
    (state: RootState) => state.ListGames.currentGame
  );

  const dispatch = useDispatch();
  const redirect = () => {
    navigate("/home");
  };
  const handleSave = async () => {
    if (totalValueCart < minCartValue) {
      toast.info(
        `Valor minimo para compra é de: ${convertToReal(
          minCartValue
        )}. Falta ${convertToReal(minCartValue - totalValueCart)}`
      );
      return;
    } else {
      const value = cart.map((c: any) => ({
        game_id: c.game_id,
        numbers: c.numbers,
      }));
      const newGame = { games: value };
      try {
        await dispatch(PostBet(newGame));
        await redirect();
      } catch (error) {}
    }
  };

  useEffect(() => {
    const searchGame = async () => {
      dispatch(FetchListGames());
    };

    searchGame();
  }, [dispatch]);

  const handleGame = (id: number) => {
    const newGame = games.filter((g: any) => g.id === id);
    dispatch(ListGameActions.setCurrentGame(newGame[0]));
    handlerClear();
  };
  const ListButonsFilter = () =>
    games.map((game: { id: number; color: string; type: string }) => (
      <Button
        typeStyle="litle"
        key={game.id}
        color={game.color}
        onClick={handleGame.bind(null, game.id)}
        active={game.id === currentGame.id}
      >
        {game.type}
      </Button>
    ));
  const ListNumbersGame = () => {
    const numbers = Array(currentGame.range).fill(0);
    return numbers.map((n, c) => {
      const itemIsSelected = !!selectedNumbers.find(
        (element: number) => element === c + 1
      );
      return (
        <Ball
          key={c}
          color={itemIsSelected ? currentGame.color : undefined}
          onClick={handlerSelectNumber.bind(null, c + 1)}
          content={c + 1 < 10 ? `0${c + 1}` : `${c + 1}`}
        />
      );
    });
  };

  const handleComplete = () => {
    let currentNumberSelected: number[] = [...selectedNumbers];
    if (currentNumberSelected.length === currentGame["max_number"]) {
      toast.info("Não é possivel mais adicionar números");
    }
    for (
      let index = 0;
      currentNumberSelected.length < currentGame["max_number"];
      index++
    ) {
      const aleatorio = Math.ceil(Math.random() * currentGame.range);
      if (currentNumberSelected.length <= 0) {
        currentNumberSelected.push(aleatorio);
      }
      if (!currentNumberSelected.some((element) => element === aleatorio)) {
        currentNumberSelected.push(aleatorio);
      }
    }
    setSelectedNumbers(currentNumberSelected);
  };

  const handlerSelectNumber = (number: number) => {
    let currentNumberSelected: number[] = [...selectedNumbers];

    if (currentNumberSelected.some((element: number) => element === number)) {
      currentNumberSelected.splice(currentNumberSelected.indexOf(number), 1);
    } else if (currentNumberSelected.length >= currentGame["max_number"]) {
      toast.info("Não é possivel mais adicionar números ");
    } else if (
      !currentNumberSelected.some((element: number) => element === number)
    ) {
      currentNumberSelected.push(number);
    }
    setSelectedNumbers(currentNumberSelected);
  };

  const handlerClear = () => {
    setSelectedNumbers([]);
  };
  const handlerAddToCar = () => {
    if (selectedNumbers.length < currentGame["max_number"]) {
      const missingItem = currentGame["max_number"] - selectedNumbers.length;
      toast.info(
        `Selecione mais ${missingItem} ${missingItem === 1 ? "item" : "items"}.`
      );
      return;
    }
    const itemCard = {
      id: Date.now(),
      game_id: currentGame.id,
      numbers: selectedNumbers.sort((a: number, b: number) => a - b),
    };
    setTotalValueCart((prevState) => prevState + currentGame.price);
    setCart((prevStatus: cartGame[]) => [itemCard, ...prevStatus]);
    handlerClear();
  };

  const handlerDeleteToCar = useCallback(
    (id: number, price: number) => {
      Swal.fire({
        title: "Atenção!!!",
        text: "Você deseja excluir item do carrinho?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#27C383",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim!",
        cancelButtonText: "Não!",
      }).then((result) => {
        if (result.isConfirmed) {
          setTotalValueCart((prevState) => prevState - price);
          setCart(cart.filter((current: cartGame) => current.id !== id));
        }
      });
    },
    [cart]
  );

  const ListCart = useCallback(() => {
    return cart.map((cur: cartGame) => {
      const gameCurrent: GameType[] = games.filter(
        (game: any) => game.id === cur.game_id
      );
      const propGame: GameType = gameCurrent[0];
      return (
        <CardGame
          key={cur.id}
          id={cur.id}
          color={propGame.color}
          numbers={cur.numbers}
          price={propGame.price}
          name={propGame.type}
          onDelete={() => handlerDeleteToCar(cur.id, propGame.price)}
        />
      );
    });
  }, [cart, games, handlerDeleteToCar]);

  return (
    <Layout showHome>
      <section>
        <Title fontsize="24">
          NEW BET <span> FOR {currentGame.type.toLocaleUpperCase()}</span>
        </Title>
        <SubTitle>Choose a Game</SubTitle>
        <Container type="filter">{games ? ListButonsFilter() : null}</Container>
        <Title fontsize="17">Fill your bet</Title>
        <SubTitle>{currentGame.description}</SubTitle>
        <Container type="numberGame">
          {currentGame ? ListNumbersGame() : null}
        </Container>
        <Container type="filter" newGame>
          <div>
            <Button typeStyle="actionGame" onClick={handleComplete}>
              Complete game
            </Button>
            <Button typeStyle="actionGame" onClick={handlerClear}>
              Clear game
            </Button>
          </div>
          <div>
            <Button typeStyle="actionGame" onClick={handlerAddToCar} addToCar>
              <HiOutlineShoppingCart />
              Add to cart
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <Container type="car">
          <Title fontsize="24">CART</Title>
          <Container type="cardGame">
            {cart.length <= 0 ? <h1>carrinho vazio!!!</h1> : ListCart()}
          </Container>

          <Title>
            CART{" "}
            <span>
              TOTAL:{" "}
              {cart.length <= 0
                ? "R$ 0,00"
                : `${convertToReal(totalValueCart)}`}
            </span>
          </Title>
          <Button typeStyle="large" onClick={handleSave}>
            Save
            <AiOutlineArrowRight />
          </Button>
        </Container>
      </section>
    </Layout>
  );
};
export default NewBet;
