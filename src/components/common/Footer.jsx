import React from "react";
import { FiPieChart, FiHome } from "react-icons/fi";
import { IoMapOutline } from "react-icons/io5";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// Link 스타일링을 위한 styled-components
const MenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  p {
    color: ${(props) => (props.active ? "#8367e1" : "gray")};
    margin-top: 5px;
    font-size: 10px;
  }

  &:hover {
    color: #8367e1;
  }
  //아이콘 부분 색상 바꾸기 위한 코드
  svg {
    color: ${(props) => (props.active ? "#8367e1" : "gray")};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 40px;
`;

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Container>
      <MenuItem to="/Stats" active={pathname === "/Stats"}>
        <FiPieChart size={20} />
        <p>통계</p>
      </MenuItem>
      <MenuItem to="/Home" active={pathname === "/Home"}>
        <FiHome size={20} />
        <p>홈</p>
      </MenuItem>
      <MenuItem to="/LibraryMap" active={pathname === "/LibraryMap"}>
        <IoMapOutline size={20} />
        <p>지도</p>
      </MenuItem>
    </Container>
  );
};

export default Footer;
