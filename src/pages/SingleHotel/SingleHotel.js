import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {  Navbar,HotelImages } from "../../components";
export const SingleHotel=()=>{

    const {id}=useParams();
    const [singleHotel,setSingleHotel]=useState();
    useEffect(()=>{
        (async()=>{
            try{
                const {data}=await axios.get(
                 `http://localhost:3500/api/hotels/${id}`
                );
                console.log(data);
               //setSingleHotel(data);
            }catch(err){
                console.log(err);
            }
        })();
    },[id]);
    return (
        <>
        <Navbar/>
        <main className="single-hotel-page">
          <HotelImages singleHotel={singleHotel}/>
        </main>
        </>
    )
};