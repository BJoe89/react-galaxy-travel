import React from 'react'
import { Link } from 'react-router-dom'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'
import './Training.css'

const h1 = () => {
  return (
    <div className="training">

        <div className='left'>
            <h1>Képzés</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem ab optio odit accusamus dolorum eius explicabo dicta vitae adipisci, dolorem eaque, nesciunt cupiditate qui assumenda ducimus quod iusto magnam expedita quae architecto! Ullam praesentium obcaecati perspiciatis, saepe exercitationem, culpa libero est pariatur quae consequatur ipsa. Sed soluta ea molestias!</p>
            <Link to="/contact" className='btn'>Kapcsolat</Link>
        </div>

        <div className="right">
            <div className="image-container">
                <div className="image-stack top">
                    <img src={Moon} alt={Moon} />
                </div>
                <div className="image-stack bottom">
                    <img src={Pod} alt={Pod} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default h1