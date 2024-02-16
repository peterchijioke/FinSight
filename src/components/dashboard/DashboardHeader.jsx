import React from "react";
import styled from "styled-components";

function DashboardHeader() {
  return (
    <Container>
      <Nav>peter</Nav>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: red;
  position: fixed;
`;
const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default DashboardHeader;
