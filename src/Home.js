import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

                <div className="home__row">
                    <Product title="The learning startupWe have the expertise and experience in various business and IT services that help smooth running of daily operations." 
                    price={29.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating = {5}/>

                     <Product title="BANANASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS." 
                    price={70000}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating = {2}/>
                </div>

                <div className="home__row">
                    <Product title="MANGOESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS." 
                    price={50000.00}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating = {4}/>

                    <Product title="MANGOESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS." 
                    price={50000.00}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating = {4}/>

                     <Product title="KKKKKKKKKKKKKKMANGOESJHSHGDGDHJSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS." 
                    price={580000.00}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating = {1}/>
                </div>

                <div className="home__row">
                <Product title="NNNNNNNNNNNNNNNNNNNNNNMANGOESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS." 
                    price={100050000.00}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating = {4}/>
                </div>
            </div>

        </div>
    )
}
