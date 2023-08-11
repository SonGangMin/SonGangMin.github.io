import NavLinks from "./NavLinks";
import logo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <LogoArea>
        <img className="logo" src={logo} alt="" onClick={() => goHome()} />
      </LogoArea>
      <NavLinks />
    </header>
  );
};

const LogoArea = styled.div`
  cursor: pointer;
`;

export default Header;
