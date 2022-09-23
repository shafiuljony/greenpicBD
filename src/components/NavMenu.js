import React from 'react'
import { Link, NavLink } from "react-router-dom";
import LogoImg from '../assets/images/logo128.png';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import styled from 'styled-components';

const NavMenuStyles = styled.div`
	nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
	position: fixed;
  z-index: 100;
	width: 100%;
	padding: 1rem 0;
	background: var(--gray-2);
  .logo-site{
    img{
      height: 7rem;
      width: 16rem;
    }
  }
  ul {
    margin: 0 auto;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--green);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular', serif;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--white);
      outline: none;
      text-transform: uppercase;
    }
  }
  .active{
    color: var(--green3);
  }
  }
  .navbar{
    margin-right: auto;
  margin-left: auto;
  padding-left: 5rem;
  padding-right: 5rem;
  }
`


export default function NavMenu() {  
  return (
    <NavMenuStyles>
      <div className='mobile-menu-icon'></div>
      <nav className='navbar'>
        <div className='logo-site'>
          <Link to="/">
            <img src={LogoImg} alt="logo" />
          </Link>
        </div>
        <div className='menu-bar'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
            <NavLink to='/about'>About</NavLink>
            </li>
            <li>
            <NavLink to='/product'>Product</NavLink>
            </li>
            <li>
            <NavLink to='/contact'>Contact</NavLink>
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
