import { Title, SubTitle } from "@Components/index";

import { CardGamesStyle } from "./CardGameStyle";
import { IoTrashOutline } from "react-icons/io5";
import { convertToReal } from "src/shared/helpers/convertToReal";

const CardGame = (props: {
  color?: string;
  isHome?: boolean;
  numbers: number[];
  price: number;
  name?: string;
  id: number;
  onDelete?: (id: number, price: number) => void;
}) => {
  const { color, isHome, numbers, price, name, onDelete, id } = props;
  const formattedNumbers = numbers.map((n) => (n < 10 ? `0${n}` : `${n}`));

  return (
    <CardGamesStyle color={color} isHome={isHome}>
      {!isHome ? (
        <IoTrashOutline
          onClick={() => (onDelete ? onDelete(id, price) : () => {})}
        />
      ) : null}
      <div>
        <Title fontsize={`${isHome ? "20" : "15"}`}>
          {formattedNumbers.join(" ")}
        </Title>
        {isHome ? <SubTitle>{`20/01/2022 - (${"R$ 2,50"})`}</SubTitle> : null}
        <Title fontsize={`${isHome ? "20" : "17"}`} color={color}>
          {name}
          {!isHome ? <SubTitle>{convertToReal(price)}</SubTitle> : null}
        </Title>
      </div>
    </CardGamesStyle>
  );
};
export default CardGame;
