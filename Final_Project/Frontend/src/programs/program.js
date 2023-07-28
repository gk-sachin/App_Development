import React from 'react'
import './program.css'
import {programsData} from "../data/programsData"
import RightArrow from "../rightArrow.png"
import { useNavigate } from 'react-router-dom'


const   Program = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <div className='programs' id='programs'>
        <div className='programs-header'>
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>On Fitness Tracker</span>
            </div>

            <div className='program-categories'>
                {programsData.map((program) => (
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details} </span>
                        <div className='join-now'>
                            <img src={RightArrow}/>
                            <button className='category-btn' onClick={()=>{navigate(program.navigate)}}>{program.button}</button>
                            
                        </div>
                    </div>))}
            </div>

            <div className='program-footer'>
              <h4>
              &copy; Copyright {year} @ Fitess Tracker
              </h4>
            </div>
    </div>
  )
}

export default Program
