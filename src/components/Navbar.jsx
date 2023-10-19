import React from "react"
import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <div id="navbar">{
            <div>
              <Link to='/'>Home</Link>
              <br/>
              <Link to='/blue'>Blue</Link>
              <br/>
              <Link to='/red'>Red</Link>
              <br/>
              <Link to='/asdf'>asdf</Link>
            </div>
          }</div>
    )
}

