import React from "react";
import styled from "styled-components";
import NavigationPage from "../../dashboard/NavigationPage";
import DashboardBody from "../../dashboard/DashboardBody";

function DashboardPageLayout({ children }) {
  return (
    <Container>
      <NavigationPage />
      <DashboardBody />
    </Container>
  );
}

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  position: fixed;
  flex-direction: row;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default DashboardPageLayout;
