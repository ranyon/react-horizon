import React from 'react'
import officeimg from '../../img/offics.jfif'
import './offices.css'

const Offices = () => {
    return (
      <div>
        <div className="container">
        <div className="row col-grid">
            <h1 className="text-center">PLANS</h1>
            <br/>
            <br/>
            <div className=" col-md-3">
              <div className="thumbnail">
                <img src={officeimg} alt="offices"/>
                <div className="caption">
                  <h3>Virtual offices</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, animi.</p>
                  
                </div>
              </div>
            </div>
            <div className=" col-md-3">
              <div className="thumbnail">
                <img src={officeimg} alt="offices"/>
                <div className="caption">
                  <h3>Virtual offices</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, animi.</p>
                  
                </div>
              </div>
            </div>
            <div className=" col-md-3">
              <div className="thumbnail">
                <img src={officeimg} alt="offices"/>
                <div className="caption">
                  <h3>Virtual offices</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, animi.</p>
                  
                </div>
              </div>
            </div>
            <div className=" col-md-3">
              <div className="thumbnail">
                <img src={officeimg} alt="offices"/>
                <div className="caption">
                  <h3>Virtual offices</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, animi.</p>
                  
                </div>
              </div>
            </div>
          </div>
    </div>
      </div>
    )
}

export default Offices ;
