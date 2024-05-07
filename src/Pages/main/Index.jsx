import React from 'react'
import './index.css';
import img1 from "../../Components/Assets/img1.png";
import img2 from "../../Components/Assets/img2.png"

import img3 from "../../Components/Assets/img3.png"
import Searchbar from '../../Components/searchBar/Searchbar';
import { Link } from 'react-router-dom';
export default function Index() {
  return (
   
    <div className="container-fluid main">
      <div className="container">
        {/* slogan */}
        <p className="slogan">Unveiling the Past, Securing the Future, Hadith Authentication for Generations</p>
        {/* search bar */}
      <Searchbar/>
      <section>
      <div className="container-fluid card-container ">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card card-border" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={img2}
            
          />
          <div className="card-body ">
            <h5 className="card-title">Sahih al-Bukhari</h5>
            <p className="card-text">
              Sahih al-Bukhari is a collection of hadith compiled by Abu
              Abdullah Muhammad Ibn Ismail al-Bukhari(rahimahullah).
            </p>
            <Link to="/hadiths" className="btn view">View Collection</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={img1}
            
          />
          <div className="card-body">
            <h5 className="card-title">Sahih Muslim</h5>
            <p className="card-text">
              Sahih Muslim is a collection of hadith compiled by Imam Muslim ibn
              al-Hajjaj al-Naysaburi (rahimahullah).
            </p>
            <Link to="/hadiths" className="btn view">View Collection</Link>
           
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={img3}
     
          />
          <div className="card-body">
            <h5 className="card-title">Sunan Abi Dawud</h5>
            <p className="card-text">
              Letter from Imam Abu Dawud to the people of Makkah explaining his
              book, terms he uses, and his methodology.
            </p>
            <Link to="/hadiths" className="btn view">View Collection</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
      </div>
      
      </div>
 
  )
}
