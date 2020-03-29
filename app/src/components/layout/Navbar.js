import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Fragment>
      <NavbarStyled>
        <Link to="/home" className="brand">
          Redux App
        </Link>
        <ul>
          <li>
            <Link to="/home" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </NavbarStyled>
    </Fragment>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #fff;
  background: red;
  padding: 1%;

  .link {
    text-decoration: none;
    color: #fff;
  }

  .brand {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      padding: 5px;
    }
  }
`;

export default Navbar;
