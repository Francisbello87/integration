import React, { useEffect } from 'react'
import { gsap } from 'gsap'
// import {SplitText} from '../../utils/Split3.min.js'
import SplitText from '../../../gsap-bonus/package/SplitText'
gsap.registerPlugin(SplitText)

const Header = () => {
  
useEffect(() =>{
  const split = new SplitText('#header-text', {
    type: 'lines',
    linesClass: 'lineChildren'
  })
  const splitParent = new SplitText('#header-text', {
    type: 'lines',
    linesClass: 'lineParent'
  })

  gsap.to(split.lines, {
    duration: 1,
    y:0,
    opacity:1,
    stagger: 0.1,
    ease:' power2'
  })
},[])

  return (
    <section className='header-container font-Montserrat mb-12' data-scroll-section>
        <h1 className=' text-[10vw] uppercase text-center font-bold mb-14 ' id='header-text'>Welcome to Greenify</h1>
    </section>
  )
}

export default Header