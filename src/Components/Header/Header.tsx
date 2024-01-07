import { FC } from "react";

import { Title } from "@Components/index";

import { HeaderStyle } from "./HeaderStyle";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useNavigate, NavLink } from "react-router-dom";

import { destroySession } from "@helpers/localStorage";
import Swal from "sweetalert2";

const Header: FC<{ showHome?: boolean }> = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Encerrar sessão!",
      text: "Você deseja sair do sistema?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#27C383",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!",
      cancelButtonText: "Não!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Swal.fire({
          icon: "success",
          title: "Volte Sempre!",
          showConfirmButton: false,
          timer: 1500,
        });
        await destroySession();
        await navigate("/");
      }
    });
  };

  return (
    <HeaderStyle>
      <div>
        <div>
          <Title className="logo" fontsize="44">
            TGL
          </Title>
          {props.showHome && (
            <NavLink
              to={"/home"}
              className={`linkMenu ${(navData: any) =>
                navData.isActive ? "active" : null}`}
            >
              Home
            </NavLink>
          )}
        </div>
        <div>
          <NavLink
            to={"/account"}
            className={`linkMenu ${(navData: any) =>
              navData.isActive ? "active" : null}`}
          >
            Account
          </NavLink>
          <Title className="linkMenu" onClick={handleLogout}>
            Log out <AiOutlineArrowRight />
          </Title>
        </div>
      </div>
    </HeaderStyle>
  );
};
export default Header;
