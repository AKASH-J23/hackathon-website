import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
       
      <h1>ALTRUIX</h1>
      <p>National-level Technical Symposium</p>
      <br/>
     <h2>
        Organized by 
        </h2>
        <h2> 
        Department of Artificial Intelligence and Data Science
      </h2>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED Hello
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
// <video src='/videos/pexels-soumya-11041434 (1080p).mp4' autoPlay loop muted />