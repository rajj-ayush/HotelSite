import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import "./Banner.css";
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom';

let calendar = require("../assets/calendar.png");
let adult = require("../assets/adult.png");
let child = require("../assets/child.png");


function Banner() {
  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
    },
  ]);
  const [options, setOptions] = useState({  
    adult:1,
    children: 0,
  })
  const [showSearch, setShowSearch] = useState(false);

  const handleOption = (name, operation) => {
    setOptions((prev) =>{
      return{
        ...prev,
        [name]:operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handle = () => {
    navigate("/search");
  }
  return (
    <>
    <div className='banner'>
    <div className='banner__search'>
    {
      showSearch && <DateRange 
        editableDateInputs={true}
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className='date'
        minDate={new Date()}
      />
    }
      
    </div>
       <div className='banner__info'>
        <h4>
          Enjoy Your Vacation With LAZYSTAY
        </h4>
        <h1 style={{ marginTop: "0px" , color: "#EB8A04"}} >
              Let Us Plan you a Perfect Holiday
        </h1>
        <Button onClick={handle}> Explore Now</Button>
       </div>
    </div>
    <div className='booking__div'>
    <div className='booking'>
    <div style={{ display: "flex", alignItem: "center", flexDirection: "row", justifyContent: "center"}} >
      <div className='banner__main__div'>
      <div className='booking__header'>
        <img className='booking__vector' alt="" src={calendar} />
           <h4> Arrival Date </h4>
      <img className='booking__vector2' src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" alt="" onClick={() => setShowSearch(true)} />
      </div>
      <div className='booking__bof'>
        <h2>{`${format(date[0].startDate, "dd MMM")}`} </h2>
        <h4>{`${format(date[0].startDate, "EEEE")}`} </h4>
      </div>
      </div>

      <div className='banner__main__div'>
      <div className='booking__header'>
        <img className='booking__vector' alt="" src={calendar} />
           <h4> Check Out </h4>
      <img className='booking__vector2' src="https://img.icons8.com/ios-filled/24/000000/sort-down.png" alt="" onClick={() => setShowSearch(false)}/>
      </div>
      <div className='booking__bof'>
      <h2>{`${format(date[0].endDate, "dd MMM")}`} </h2>
        <h4>{`${format(date[0].endDate, "EEEE")}`} </h4>
      </div>
      </div>

      <div className='banner__main__div'>
      <div className='booking__header'>
        <img className='booking__vector' alt="" src={adult} />
           <h4> Adults </h4>
      </div>

      <div className='booking__bo'>
      <h2> {`${options.adult}`} </h2>
     <div className='booking__noooo'>
      <div onClick={() => handleOption("adult", "i")} >
        <img src='https://img.icons8.com/material/24/000000/sort-up--v2.png' alt="" style={{ height: "28px"}} />
      </div>
      <div>
      <button style={{ border: "none", background: "transparent"}} disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")} >
        <img src='https://img.icons8.com/ios-filled/24/000000/sort-down.png' alt="" style={{ height: "24px"}} />
        </button>
      </div>
      </div>
      </div>

      </div>


      <div className='banner__main__div'>
      <div className='booking__header'>
        <img className='booking__vector' alt="" src={child} />
           <h4> Children </h4>
      </div>

      <div className='booking__bo'>
      <h2> {`${options.children}`}</h2>
      <div className='booking__noooo'>
      <div onClick={() => handleOption("children", "i")}>
        <img src='https://img.icons8.com/material/24/000000/sort-up--v2.png' alt="" style={{ height: "28px"}} />
      </div>
      <div>
      <button style={{ border: "none", background: "transparent"}} disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>
        <img src='https://img.icons8.com/ios-filled/24/000000/sort-down.png' alt="" style={{ height: "24px"}} />
      </button>
        </div>
      </div>
      </div>
      </div>
      
      <div className='banner__main__div' style={{ paddingTop: "0px"}}>
        <h4 className='fadded__text'>
          Hope You Have A Nice Experience...
        </h4>
        <div className='booking__button'>
          <Button onClick={handle}>Check Availability</Button>
        </div>
      </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default Banner
