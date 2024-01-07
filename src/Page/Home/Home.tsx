import { FC, useCallback, useEffect, useState } from "react";
import {
  Layout,
  CardGame,
  SubTitle,
  Title,
  Button,
  Container,
} from "@Components/index";

import { FetchBet } from "@store/Bet";
import { FetchListGames } from "@store/Games";
import { RootState } from "@store/index";

import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home: FC = () => {
  const navigate = useNavigate();
  const bet = useSelector((state: RootState) => state.games.games);
  const { types } = useSelector((state: RootState) => state.ListGames.list);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState<string[]>([]);

  const handleNewGame = () => {
    navigate("/newbet");
  };

  const ListCarts = useCallback(() => {
    return bet.map((cur: any) => {
      const color = types.filter((t) => t.id === cur.game_id)[0].color;
      return (
        <CardGame
          key={cur.id}
          id={cur.id}
          color={color}
          numbers={cur.choosen_numbers
            .replace(/,/g, "")
            .split("")
            .map((cur: string) => Number(cur))}
          price={cur.price}
          name={cur.type.type}
          isHome
        />
      );
    });
  }, [bet, types]);
  const handlerFilter = useCallback(
    (type: string) => {
      let newFilter = filters;
      const idx = newFilter.indexOf(type);
      idx > -1 ? newFilter.splice(idx, 1) : newFilter.push(type);
      setFilters(newFilter);
      dispatch(FetchBet(newFilter));
    },
    [filters, dispatch]
  );
  const ButtonsList = useCallback(() => {
    return types.map((game) => {
      const isActive = filters.indexOf(game.type) >= 0;
      return (
        <Button
          key={game.type}
          typeStyle="litle"
          color={game.color}
          onClick={handlerFilter.bind(null, game.type)}
          active={isActive}
        >
          {game.type}
        </Button>
      );
    });
  }, [types, filters, handlerFilter]);

  useEffect(() => {
    dispatch(FetchBet());
    dispatch(FetchListGames());
  }, [dispatch]);
  return (
    <Layout>
      <section>
        <Container type="filter">
          <Title fontsize="24">Recent Games</Title>
          <SubTitle>Filters</SubTitle>
          {types && ButtonsList()}
        </Container>

        <Container type="cardGame" isHome>
          {bet.length <= 0 && filters.length <= 0 ? (
            <h1>Você não possui jogo feito </h1>
          ) : null}
          {bet.length <= 0 && filters.length > 0 ? (
            <h1>
              Você não possui jogo para o(s) filtro(s) {filters.join(", ")}.{" "}
            </h1>
          ) : null}
          {bet.length > 0 && types.length > 0 ? ListCarts() : null}
        </Container>
      </section>
      <section>
        <Button typeStyle="large" color="green" onClick={handleNewGame}>
          New Bet
          <AiOutlineArrowRight />
        </Button>
      </section>
    </Layout>
  );
};
export default Home;
