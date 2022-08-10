import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

const PricingCards = () => {
  return (
    <section className="pricing">
      <section className="card-container">
        <section className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to={"/contact"} className="btn">
            Book
          </Link>
        </section>
        <section className="card">
          <h3>- Suite -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 10 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to={"/contact"} className="btn">
            Book
          </Link>
        </section>
        <section className="card">
          <h3>- Executive -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 30 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to={"/contact"} className="btn">
            Book
          </Link>
        </section>
      </section>
    </section>
  );
};

export default PricingCards;
