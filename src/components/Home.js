import React from 'react'
import Banner from './Banner';
import Card from './Card';
import Categories from './Categories';
import "./Home.css";
import Footer from './Footer';

let p1 = require("../assets/baba.jpg");
let p2 = require("../assets/krishna.jpg");
let p3 = require("../assets/kkrishna.jpg");
let p4 = require("../assets/p4.jpg");


function Home() {
  return (
    <div className='home'>
    <Banner />
    <div className="home__categories">
      <div style={{display:'flex', alignItems: "flex-end",justifyContent:"center",flexDirection:"column",marginTop:"180px", marginBottom:"90px", height:"15vh"}}>
        <div style={{background: "gold", height:"170px", width:'50%', zIndex: '-1' , position: 'absolute'}}>
        </div>
        <div style={{ display: "flex", alignItems: 'center', flexDirection:"column", justifyContent:'center', background:'transparent', zIndex:'1', marginRight:'480px'}}>
          <h1 style={{ color: 'blue', marginBottom: "0px",}} className='quote__h1'> Full Service, at your disposal</h1>
          <h4 style={{ display: 'flex', alignItems:'center', justifyContent:'center', color:'gray', marginTop:"0px"} }className='quote__h4'>
             More than you Imagine.
          </h4>
        </div>
      </div>

      <Categories />

      <div style={{display:'', alignItems: "center",justifyContent:"center",flexDirection:"column",marginTop:"60px", marginBottom:"120px", height:"15vh"}}>
        <div style={{background: "gold", height:"170px", width:'50%', zIndex: '-1' , position: 'absolute'}}>
        </div>
        <div style={{ display: "flex", alignItems: 'center', flexDirection:"column", justifyContent:'center', background:'transparent', zIndex:'1', marginRight:'480px'}}>
          <h1 style={{ color: 'blue', marginBottom: "0px",}} className='quote__h1'> Choose What's Best For You.</h1>
          <h4 style={{ display: 'flex', alignItems:'center', justifyContent:'center', color:'gray', marginTop:"0px"} }className='quote__h4'>
             Make Your Vacation Memorable.
          </h4>
        </div>
      </div>
    </div>
    <div className='home__section'>
    <Card src={p1} title="Rambagh Palace" description=" Rambagh, Jaipur is a boutique hotel with a camping vibe, complete with outdoor S’mores fire pits, trail maps, and even an indoor camping tent. The website for the hotel plays up this theme and increases guest anticipation for an exciting trip." />
    <Card src={p2} title="Eros Hotel" description=" Eros Hotel, Mumbai is a boutique hotel with a camping vibe, complete with outdoor S’mores fire pits, trail maps, and even an indoor camping tent. The website for the hotel plays up this theme and increases guest anticipation for an exciting trip." />
    <Card src={p3} title="The Lalit" description="The Lalit, Delhi is a boutique hotel with a camping vibe, complete with outdoor S’mores fire pits, trail maps, and even an indoor camping tent. The website for the hotel plays up this theme and increases guest anticipation for an exciting trip." />
    </div>

    <div>
      <h1 className='quotes__card__'>
        It is a true paragon of world class hospitality and have some
        of the best luxury hotel and resorts in India, Book handpicked hotels with Certified Quality.   
         </h1>
    </div>
    <div>
    <div style={{display:'flex', alignItems: "flex-end",justifyContent:"center",flexDirection:"column",marginTop:"60px", marginBottom:"120px", height:"15vh"}}>
        <div style={{background: "gold", height:"170px", width:'50%', zIndex: '-1' , position: 'absolute'}}>
        </div>
        <div style={{ display: "flex", alignItems: 'center', flexDirection:"column", justifyContent:'center', background:'transparent', zIndex:'1', marginRight:'480px'}}>
          <h1 style={{ color: 'blue', marginBottom: "0px",}} className='quote__h1'> Luxury Redefined.</h1>
          <h4 style={{ display: 'flex', alignItems:'center', justifyContent:'center', color:'gray', marginTop:"0px"} }className='quote__h4'>
             Luxury is Personal.
          </h4>
        </div>
      </div>
    </div>

    <div className='some__quotes'>
      <h4>
      The bigger your operation, the more you need some system of record and you need some tools to be able to scale your operations. Being able to streamline the guest experience means making sure you have the right balance between human connection and tools to make the whole stay a seamless process. It’s about creating a welcoming space with staff who are able to go above and beyond to make each guest feel special.
      </h4>
    </div>
    <Footer />
    </div>
  )
}

export default Home
