import React from 'react'
import { Link } from "react-router-dom";
import LogoImg from '../assets/logo.png';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import styled from 'styled-components';

const NavMenuStyles = styled.div`
	nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1rem 0;
	background: var(--green);
  ul {
    margin: 0 auto;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-green);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular', serif;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--black);
      outline: none;
    }
  }
  .header-right .search-bar{

  }
  }

`

export default function NavMenu() {  
  return (
    <NavMenuStyles>
      <nav>
        <div className='logo-site'>
          <Link to="/">
            <img src={LogoImg} alt="logo" />
          </Link>
        </div>
        <div className='menu-bar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </div>
        <div className='header-right'>
          <ul>
            <li>
              <Link to="/" >
                <FiSearch />
              </Link>
            </li>
            <li>
              <Link to="/" >
              <FiUser />
              </Link>
            </li>
            <li>
              <Link to="/" >
              <FiShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
        </nav>
    </NavMenuStyles>
  )
}
