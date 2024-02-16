import React from "react";
import styled from "styled-components";
import { AppColors } from "../../constants/colors";

function NavigationPage() {
  return (
    <MainLayout>
      <Container></Container>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  width: 250px;
  background: ${AppColors.secondary};
  height: 100%;
  padding: 5% 10px 0px 10px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default NavigationPage;
