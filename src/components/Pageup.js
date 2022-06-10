import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
// import {FaArrowCircleUp} from 'react-icons/fa';
import '../App.css';
import './pageup.css'


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        // <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        
        <Button className='fas fa-chevron-circle-up pageup scrollTop' onClick={scrollTop} variant='outline-dark' > </Button>
  );
}

export default ScrollArrow;
