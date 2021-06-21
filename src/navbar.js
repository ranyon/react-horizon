import React from 'react'
import logo from './img/logo.png'

const Navbar = () => {
    return (
        <div>
              {/* <!-- NAVBAR --> */}
    
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src={logo} alt="" width="210px" /></a>
            </div>

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">ABOUT US</a></li>
              
              
              </ul>
            </div>
          </div>
        </nav>
            

            {/* // <!-- NAVBAR CLOSE --> */}
        </div>
        
      
    )
}

export default Navbar
