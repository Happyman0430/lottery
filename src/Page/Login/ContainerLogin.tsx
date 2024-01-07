import { FC, useEffect, useState } from "react";

import { Title } from "@Components/index";

import { useParams, useNavigate } from "react-router-dom";

import { SectionLogin } from "./StyledContainerLogin";

import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import ResetPassword from "./ResetPassword/ResetPassword";

const CotainerLogin: FC = () => {
  const [Pages, setPages] = useState(<></>);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    switch (params.page) {
      case "login":
        setPages(<Login />);
        break;
      case "registration":
        setPages(<Registration />);
        break;
      case "resetPassword":
        setPages(<ResetPassword />);
        break;
      default: {
        navigate("/notFound");
      }
    }
  }, [params, navigate]);
  return (
    <>
      <SectionLogin>
        <div>
          <div>
            <Title fontsize="65">The Greatest App</Title>
          </div>
          <button>For</button>
          <Title fontsize="83">LOTTERY</Title>
        </div>
        <div>{Pages}</div>
      </SectionLogin>
    </>
  );
};
export default CotainerLogin;
