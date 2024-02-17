import React, { useState } from "react";
import styled from "styled-components";
import { AppColors } from "../../constants/colors";
import { MdDashboard, MdLogout } from "react-icons/md";
import { RiPassPendingFill } from "react-icons/ri";
import { MdSavings } from "react-icons/md";
import { SiPrecommit } from "react-icons/si";
import { store } from "../../app/store";
import { setSideNavState } from "../../app/slice/AppSlice";
import { useSelector } from "react-redux";
const IconSize = 25;
function NavigationPage() {
  const open = useSelector((state) => state.appReducer.sideNavState);
  return (
    <>
      <MainLayout open={open}>
        <CaptionTitleWrapper
        // onClick={() => store.dispatch(setSideNavState(false))}
        >
          <Title>FinSight</Title>
          <Caption>Your Financial Compass</Caption>
        </CaptionTitleWrapper>
        <Container>
          <ClickableTabs
            icon={<MdDashboard size={IconSize} />}
            title="Dashboard"
          />
          <ClickableTabs
            icon={<RiPassPendingFill size={IconSize} />}
            title="Spending"
          />
          <ClickableTabs icon={<MdSavings size={IconSize} />} title="Savings" />
          <ClickableTabs
            icon={<SiPrecommit size={IconSize} />}
            title="Investments"
          />
        </Container>
        <CardItemLogout>
          <MdLogout />
          <Label> Log Out</Label>
        </CardItemLogout>
      </MainLayout>
      <Wrapper>
        <Backdrop
          open={open}
          onClick={() => store.dispatch(setSideNavState(false))}
        />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
  }
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    display: block;
  }
`;
const Backdrop = styled.div`
  position: fixed;
  display: ${({ open }) => (open ? "block" : "none")};
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100dvh;
  z-index: 28;
`;
const ClickableTabs = ({ title, icon, ...props }) => (
  <CardItem {...props}>
    {icon}
    <Label> {title}</Label>
  </CardItem>
);
const Label = styled.label`
  flex-grow: 1;
  text-align: left;
  cursor: pointer;
`;

const Title = styled.label`
  font-size: 25px;
  font-weight: 800;
  cursor: pointer;
  line-height: 32px;
  color: ${AppColors.primary};
  text-align: center;
`;
const Caption = styled.label`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  color: ${AppColors.PrimaryTextColor};
  text-align: center;
`;
const CaptionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
`;
const MainLayout = styled.div`
  width: 250px;
  background: ${AppColors.secondary};
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 50px;
  padding: 3% 20px 0 20px;
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    position: fixed;
    z-index: 30;
    display: ${({ open }) => (open ? "block" : "none")};
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: 0.5s;
    gap: 70px;
  }
`;
const CardItem = styled.button`
  width: 100%;
  height: 50px;
  outline: none;
  gap: 30px;
  border: 0px;
  background: ${AppColors.white};
  border-radius: 10px;
  display: flex;
  color: ${AppColors.PrimaryTextColor};
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transform: scale(1.1);
  }
`;
const CardItemLogout = styled.button`
  width: 100%;
  height: 50px;
  outline: none;
  border: 0px;
  border-radius: 10px;
  display: flex;
  margin-top: 50%;
  gap: 30px;
  color: ${AppColors.PrimaryTextColor};
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    border: 1px solid ${AppColors.primary};
  }
`;
const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    margin-top: 10%;
  }
`;
export default NavigationPage;
