import React from "react";
import styled from "styled-components";
import { AppColors } from "../../constants/colors";
import { RxHamburgerMenu } from "react-icons/rx";
import { store } from "../../app/store";
import { setSideNavState } from "../../app/slice/AppSlice";
import { useDispatch } from "react-redux";

function DashboardHeader() {
  return (
    <Container>
      <Nav>
        <Hamburger onClick={() => store.dispatch(setSideNavState(true))}>
          <RxHamburgerMenu size={32} color={AppColors.primary} />
        </Hamburger>
        <SearchField placeholder="Search..." />
        <ProfileImageWrapper>
          <ProfileImage src="https://placehold.co/400" alt="" />
        </ProfileImageWrapper>
      </Nav>
    </Container>
  );
}

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  background: ${AppColors.primary};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Hamburger = styled.button`
  display: none;
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    display: block;
    outline: none;
    border: 0;
    background: transparent;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  /* border-bottom: 2px solid ${AppColors.primary}; */
  background: ${AppColors.secondary};
  position: fixed;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 20;
`;
const ProfileImageWrapper = styled.div`
  width: 300px;
  display: flex;
  position: absolute;
  right: 0;
  padding-right: 10px;
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    align-items: flex-end;
    flex-direction: row;
    justify-content: end;
  }
`;
const SearchField = styled.input`
  border-radius: 10px;
  width: 200px;
  transition: width 0.4s ease-in-out;
  outline: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: none;
  padding: 10px;
  background: ${AppColors.white};
  color: ${AppColors.PrimaryTextColor};
  &:hover {
    width: 350px;
  }
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    display: none;
  }
`;
const Nav = styled.header`
  width: 100%;
  height: 100%;
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default DashboardHeader;
