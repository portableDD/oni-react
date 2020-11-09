import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Footer from './footer'

class Sandal extends Component {
   render(){
            const view = this.props.data;
            const post = view.length ? (
                view.map(pod => {
                    return (
                        <div className ="items" key={pod.id}>
                            <NavLink to= "product.html?name={pod.name}">
                                <div className= "featured-image">
                                    <img src= {pod.image} alt='pics'/>
                                </div>
                                <div className = "info">
                                    <span>{pod.name}</span>
                                    <span>{'\u20A6'} {pod.price}</span>
                                </div>
                            </NavLink>                  
                        </div>
                ) 
            })
            ) : (
                <div className="center">Loading post...</div>
            )
        
        return(            
            <main class = "hide-toggle-menu">
                <div className = "index-page ">
                    <div className= "latest-title title">
                        <h3>LATEST</h3>
                    </div>
                    <div className = "latest-product product-wrapper">
                        { post }
                    </div>
                </div> 
                <Footer />
            </main>           
        ) 
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.data.filter(item => {
            return item.category === 'sandal'
        })
    }
}
   


export default connect(mapStateToProps)(Sandal)