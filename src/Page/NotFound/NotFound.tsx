import { FC } from "react";
import { useParams } from "react-router";

const NotFound: FC = () => {
  const params = useParams();
  console.log("home", params);

  return <>Pagina não encontrada!</>;
};
export default NotFound;
