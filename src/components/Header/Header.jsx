import './Header.scss'

import {Link, NavLink} from 'react-router-dom'
import search from '../../assets/svg/search.svg'
import heart from '../../assets/svg/heart.svg'
import shop from '../../assets/svg/shop.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="top-header">
        <ul>
          <li>Summer Sale For All Swim Suits And Free Express Delivery - OFF
            50%! <Link to="/" style={{
              marginLeft: '7px',
              color: '#FAFAFA',
              fontWeight: 'bold'
            }}>ShopNow</Link></li>
          <div>
            <li>English</li>
            <select style={{
              marginLeft: '1px',
              outline: 'none',
              border: 'none',
              backgroundColor: 'black',
              color: 'white',
              cursor: 'pointer'
            }}>
              <option value="kg">KGZ</option>
              <option value="en">ENG</option>
              <option value="ru">RUS</option>
            </select>
          </div>
        </ul>
      </div>


      <div className="main-header container">
        <div className="header-left">
          <h2>Exclusive</h2>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({isActive}) => (isActive ? 'Link active' : 'Link')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({isActive}) => (isActive ? 'Link active' : 'Link')}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({isActive}) => (isActive ? 'Link active' : 'Link')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({isActive}) => (isActive ? 'Link active' : 'Link')}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="header-right">
          <div className="search">
            <input placeholder='What are you looking for?' type="text"/>
            <img src={search} alt=""/>
          </div>
          <div className="icons">
            <img src={heart} alt=""/>
            <img src={shop} alt=""/>
          </div>
        </div>
      </div>
      <div style={{
        width: '1440px',
        height: '1px',
        backgroundColor: 'black',
        opacity: '30%',
        marginTop: '15px'
      }}>
      </div>


    </header>
  )
}

