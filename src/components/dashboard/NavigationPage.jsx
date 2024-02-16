import React from "react";
import styles from "./css/navigationPage.module.scss";
import styled from "styled-components";

function NavigationPage() {
  return (
    <div className={styles.container}>
      <Container></Container>
    </div>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default NavigationPage;
