import React from 'react'
import Background1 from '../pics/animi pics/slide 1/slide-background.png'
import Slide1 from '../pics/animi pics/slide 1/slide-shoe1.png' 
import Background2 from '../pics/animi pics/slide 2/slide-background2.jpg'
import Slide2 from '../pics/animi pics/slide 2/slide-shoe2.png'
import Background3 from '../pics/animi pics/slide 3/slide-background3.png'
import Slide3 from '../pics/animi pics/slide 3/slide-shoe3.png'
import Background4 from '../pics/animi pics/slide 4/slide-background4.jpg'
import { Spring } from 'react-spring/renderprops'

export default function animi() {
    return (
        <div>
            <div className="slide-show-container">
                <div className="slide-show slide-1" id='1'>
                    <img className="slide-img-background" 
                        src= {Background1} 
                        alt="banner"
                    />	
                    <Spring
                            from={{transform: 'scale(0.4)', opacity: 0}}
                            to={{transform: 'scale(0.8)', opacity: 1}}>
                            {props => (
                                <div  className="slide-product"  style={props}>
                                    <img src= {Slide1} alt="slides"/>
                                </div> 
                            )}
                    </Spring>
                     <Spring
                        from={{transform: 'rotatey(90deg)', opacity: 0.1}}
                        to={{transform: 'rotatey(0deg)', opacity: 1}}>
                            {props => (
                                <div  className="info"  style={props}>
                                    <span>DISCOUNT<br/>FOR COMFORT</span>
                                    <span>Get your footwears at 20% off</span>
                                    <a href="mjndcuiHNDJUHUE">shop now</a>
                                </div>
                            )}      
                    </Spring>
                </div>	
                <div className="slide-show slide-2"  id='2' >
                    <img className="slide-img-background" 
                        src= {Background2}
                        alt="banner"
                    />
                     <Spring
                            from={{transform: 'scale(0.4)', opacity: 0}}
                            to={{transform: 'scale(0.8)', opacity: 1}}>
                            {props => (
                                    <div className="slide-product" style={props}>
                                        <img src= {Slide2} alt="slides"/>
                                    </div>
                            )}
                    </Spring>
                    <Spring
                        from={{transform: 'rotatey(90deg)', opacity: 0.1}}
                        to={{transform: 'rotatey(0deg)', opacity: 1}}>
                            {props => (
                                <div className="info" style={props}>
                                    <span>BESPOKE<br/>FOOTWEARS</span>
                                    <span>Your feet deserves the best</span>
                                    <a href="mnbhcjgUWKENFCJ">shop now</a>
                                </div>
                            )}      
                    </Spring>
                </div>
	
                <div className="slide-show slide-3" id='3' style={{display: 'none'}}>
                    <img className="slide-img-background" 
                        src= {Background3}
                        alt="banner"
                    />
                    <Spring
                            from={{transform: 'scale(0.4)', opacity: 0}}
                            to={{transform: 'scale(0.8)', opacity: 1}}>
                            {props => (
                                    <div className="slide-product" style={props}>
                                        <img src={Slide3} alt="slides"/>
                                    </div>
                            )}
                    </Spring>
                    <Spring
                        from={{transform: 'rotatey(90deg)', opacity: 0.1}}
                        to={{transform: 'rotatey(0deg)', opacity: 1}}>
                            {props => (
                                <div className="info" style={props}>
                                    <span>LOOK<br/>DIFFERENT</span>
                                    <span>The confidence you need to walk the world</span>
                                    <a href="jkdvuiscnkjd">shop now</a>
                                </div>
                            )}      
                    </Spring>
                </div>

                <div className="slide-show slide-4" id='4' style={{display: 'flex'}}>
                    <img className="slide-img-background" 
                        src={Background4}
                        alt="banner"
                    />
                </div>
            </div>
        </div>
    )
}
