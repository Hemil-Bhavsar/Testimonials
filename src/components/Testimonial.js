import React, { useState } from "react";
import Card from "./Card";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import {FiChevronLeft,FiChevronRight } from "react-icons/fi";


const Testimonial=(props)=>{

    let reviews=props.reviews;
    const[index,setIndex]=useState(0);

    const leftShiftHandler=()=>{
        if(index-1<0){
            setIndex(0);
        }
        else{
            setIndex(index-1);
        }
    }

    const rightShiftHandler=()=>{

        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    const surpriseHandler=async()=>{
        let randomIndex= Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className="w-[85vw] rounded-md md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-lg">
            <Card review={reviews[index]} />
            <div className="flex text-3xl mt-7 gap-3 text-violet-400 font-bold">
                <button
                onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronLeft/>
                </button>

                <button
                onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-6">
                <button
                onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprise me
                </button>
            </div>
        </div>
    )
}

export default Testimonial;
