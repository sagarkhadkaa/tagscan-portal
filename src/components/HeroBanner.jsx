import React from "react";

function HeroBanner() {
    return (
        <section id="home">
            <div className="container">
                <div className="home-text">
                    <div className="section-text__subtitle">
                        World's Number 1 affiliates Marketing Portal
                    </div>
                    <div className="section-text__title-big">
                        Let the affiliate links do the talking
                    </div>
                    <div className="section-text__body">
                        The easiest way to make money online. Promote links, get
                        paid. You can get the best commission rates in our
                        platform. Make money now or never.
                    </div>
                    <a href="#download" className="download-btn">
                        Download App
                    </a>
                </div>

                <div className="section-image">
                    <img src="./images/hero_right.webp" alt="app preview" />
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
