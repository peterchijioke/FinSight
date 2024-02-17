import React, { useEffect } from "react";
import styled from "styled-components";
import { AppColors } from "../../constants/colors";
import BalanceCard from "./BalanceCard";
import BillCard from "./BillCard";
import SavingsGraph from "./ChatSection";
import { store } from "../../app/store";
import { setTotalBill } from "../../app/slice/AppSlice";

function HomePageLayout() {
  const bills = store.getState().appReducer?.bills;
  const accounts = store.getState().appReducer?.accounts;

  useEffect(() => {
    if (bills) {
      const totalBillAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
      store.dispatch(setTotalBill(totalBillAmount));
    }
  }, [bills]);
  return (
    <Container>
      <TopCardsWrapper>
        {accounts?.map((account) => (
          <BalanceCard key={account.type} {...account} />
        ))}
      </TopCardsWrapper>
      <TopCardsWrapper>
        {bills?.map((bill) => (
          <BillCard key={bill.dueDate} {...bill} />
        ))}
      </TopCardsWrapper>
      <SavingsGraph />
    </Container>
  );
}

export default HomePageLayout;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`;

const TopCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
`;
