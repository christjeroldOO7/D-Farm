import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card } from 'antd';
import Carousel1 from "../images/carousel1.png";
import Carousel2 from "../images/carousel2.png";
import Carousel3 from "../images/carousel3.png";
import Grapes from "../images/Grapes.png";
import Potato from "../images/Potato.png";
import Browntopmillet from "../images/Browntopmillet.png";
import GrowTurmeric from "../images/GrowTurmeric.png";
import Adventure from "../images/adventure.png";
import Dictionaries from "../images/dictionaries.png";
import Fantasy from "../images/fantasy.png";
import Horror from "../images/horror.png";

const carousel = [Carousel1,Carousel2,Carousel3];
const catCard = [Adventure, Fantasy,Horror,Dictionaries];
const Home = () => {

return(
  <>
  
  <div className="container">
    <Header/>
    <Carousel autoplay className="carousel">
    {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>;
    })}
    </Carousel>
    <div className="cards">  
      <Card className="card">
        <h1>Grapes</h1>
        <img src={Grapes} alt="Grapes" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Grapes"} className="link">
          Shop Now
        </Link>
      </Card>
      <Card className="card">
        <h1>Potato</h1>
        <img src={Potato} alt="Potato" className="card-content"></img>
        <br />
        <Link to="/" className="link">
          View Product
        </Link>
      </Card>
      <Card className="card">
        <h1>Browntop millet</h1>
        <img src={Browntopmillet} alt="Browntopmillet" className="card-content"></img>
        <br />
        <Link to="/" className="link">
          View Product
        </Link>
      </Card>
      <Card className="card">
        <h1>Grow Turmeric</h1>
        <img src={GrowTurmeric} alt="GrowTurmeric" className="card-content"></img>
        <br />
        <Link to="/" className="link">
          View Product
        </Link>
      </Card>

            <div className="popular-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>ABOUT</h2>
                                <h6>D - FARM</h6>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="naccs">
                                <div className="grid">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="menu">
                                                <div className="first-thumb active">
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="col-lg-9 align-self-center">
                                            <ul className="nacc">
                                                <li className="active">
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-5 align-self-center">
                                                                <div className="left-text">
                                                                    <h4>Revolutionizing Agriculture E-commerce with Web3 Technology </h4>
                                                                    <p>Web3 technology refers to the decentralized web, which uses blockchain technology to create a more secure and transparent online ecosystem. By using Web3 technology, agriculture e-commerce platforms can create more secure, transparent, and efficient online marketplaces for farmers and consumers.</p>
                                                                   
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-7 align-self-center">
                                                                <div className="right-image">
                                                                    <img src="../images/dictionaries.png" alt=""/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>  
                                                </li>
                                            </ul>        
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    </div>
  </div>
  </>
)
}

export default Home;
