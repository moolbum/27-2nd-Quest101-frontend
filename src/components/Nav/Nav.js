import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';

const Nav = props => (
  <HeaderContainer>
    <Header>
      <Link to="/">
        <Logo>QUEST101</Logo>
      </Link>
      <TitleClass>클래스</TitleClass>
      <SearchContainer>
        <Input type="search" placeholder="찾으시는 취미가 있으신가요?" />
        <SearchIcon />
      </SearchContainer>
      <Link to="/">
        <DarkMode>다크모드</DarkMode>
      </Link>

      <Link to="/">
        <LogOut>로그아웃</LogOut>
      </Link>
      <Link to="/">
        <Likey />
      </Link>
      <Link to="/">
        <UserImage />
      </Link>
    </Header>
  </HeaderContainer>
);
export default Nav;

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${props => props.theme.mediumGray};
`;

const Header = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')};
  width: 1100px;
  margin: 0 auto;
  padding: 20px 0;
`;

const Logo = styled.h1`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.weightBold};
`;

const TitleClass = styled.h2`
  padding-right: 40px;
  color: ${props => props.theme.orange};
  font-size: 20px;
  font-weight: ${props => props.theme.weightBold};
`;

const SearchContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 520px;
  padding: 12px 52px 12px 16px;
  background-color: ${props => props.theme.lightGray};
  line-height: 20px;
  border-radius: 24px;
  text-align: left;
`;

const DarkMode = styled.button`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontRegular};
`;

const LogOut = styled.button`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontRegular};
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: relative;
  top: 8px;
  right: 40px;
  font-size: ${props => props.theme.fontLarge};
`;

const Likey = styled(HiOutlineHeart)`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontLarge};
`;

const UserImage = styled.img.attrs({
  src: '/images/default-user.png',
})`
  width: 36px;
`;
