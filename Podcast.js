import React from 'react'
import "./Podcast.css"
import logo from "./image/logo.png"
import MenuIcon from "@material-ui/icons/Menu";
import pix from "./image/gem.svg"

function Podcast() {
  return (
    <div className="Container">

      <div className="header">
        <div className="headerwrapper">

          <img className="logo" src={logo} alt="boy.png" />

          {/* <div className="headerText">
            <div className="headertextitem">Home</div>
            <div className="headertextitem">About the podcast</div>
            <div className="headertextitem">Episode</div>
          </div> */}

          <div className="mobileHeader">
            <MenuIcon style={{ color: "black" }} />
          </div>
        </div>

        <div className="bodyWrapper">
          <div className="img">
            <img src={pix} />
          </div>
          <div className="bodyWrappertext">
            <h1>welcome to <p> my channel</p></h1>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Podcast
