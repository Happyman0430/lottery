import { Route, Routes, Navigate } from "react-router-dom";

import PrivateRouters from "./PrivateRouters";

import { Home, ContainerLogin, NewBet, Account, NotFound } from "@page/index";
function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<ContainerLogin />}>
          <Route path="/:page" element={<ContainerLogin />} />
        </Route>

        <Route
          path="/home"
          element={
            <PrivateRouters>
              <Home />
            </PrivateRouters>
          }
        />
        <Route
          path="/newbet"
          element={
            <PrivateRouters>
              <NewBet />
            </PrivateRouters>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRouters>
              <Account />
            </PrivateRouters>
          }
        />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/notFound" />} />
      </Routes>
    </>
  );
}

export default Routers;
