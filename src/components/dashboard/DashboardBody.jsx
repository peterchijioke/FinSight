import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import styled from "styled-components";

function DashboardBody() {
  return (
    <Container>
      <DashboardHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  height: 100dvh;
  display: flex;
  width: 100dvw;
  background: pink;
  position: relative;
`;

const Main = styled.main`
  padding: 8% 15px 0px 15px;
  background: cyan;
  height: 100%;
  width: 100%;
  overflow: auto;
  @media screen and (max-width: 1000px) {
    height: 100%;
  }
`;
export default DashboardBody;
