import React from 'react'

let one = require("../assets/one.jpg");
let two = require("../assets/two.jpg");
let three = require("../assets/three.png");
let four = require("../assets/four.jpg");
let five = require("../assets/five.jpg");

const items =[
    {
        image:one,
        text:"Pick-Up"
    },
    {
        image:two,
        text:"Soft Drinks"
    },
    {
        image:three,
        text:"Bakery Items"
    },
    {
        image:four,
        text:"Fast Food"
    },
    {
        image:five,
        text:"Parking"
    },
]


function Categories() {
  return (
    <div style={{ display: 'flex', justifyContent:'center', marginTop:"5px",padding:'15px', backgroundColor:'#fff', marginBottom:"10px"}} >
      {items.map((item,index) => (
        <div key={index} style={{ alignItems: 'center',marginRight: '150px'}}>
           <img src={items[index].image} alt=""  style={{ width: '50px', height:'50px' , resizeMode: "contain"}} />
           <h5 style={{ fontFamily: "inherit", fontSize: '16px', fontWeight: '400', lineHeight:'20px', letterSpacing:'0.05em', textAlign:'center'}}> {items[index].text}</h5>
        </div>
      ))}
    </div>
  )
}

export default Categories
