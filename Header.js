import React from 'react'
import { Link } from 'react-router-dom'
import Cards from "../Card/Cards"
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
  return (
    <div className="parentDiv">
      <div className="subParentDiv">


        <div className="theHeader">

          <div className="logoDiv"><img src={""} alt="Logo" /></div>

          <div className="navDiv">
            <Link to="/" className="link"><p className="nav">Home</p></Link>
            <Link to="/about" className="link"> <p className="nav">About Podcast</p></Link>
            <Link to="/episode" className="link"><p className="nav">Episode</p></Link>
            <Link to="/contact" className="link"><p className="nav">Contact</p></Link>
            <div className="MenuIcon">
              <MenuIcon style={{ color: "white", }} />
            </div>
          </div>


        </div>

        <div className="osas">
          <p className="ppp">Osazie's<br /> Podcast</p>
        </div>


      </div>
      <Cards />
    </div>
  )
}

export default Header

