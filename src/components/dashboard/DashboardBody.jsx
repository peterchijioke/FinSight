import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import styled from "styled-components";

function DashboardBody() {
  return (
    <Container>
      <DashboardHeader />
      <Main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Main>
    </Container>
  );
}

const Wrapper = styled.div`
  width: 95%;
  height: auto;
  margin-top: 10%;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 25%;
  }
`;

const Container = styled.div`
  height: 100dvh;
  display: flex;
  width: 100dvw;
  margin-bottom: 50px;
`;

const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
  overflow-y: auto;
  @media screen and (max-width: 1000px) {
    height: 100%;
    position: fixed;
  }
`;
export default DashboardBody;
