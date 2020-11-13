import React, { Component } from 'react'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'
import Footer from './footer'
import Animation from '../animation/animate'

class Product extends Component {
    render() {
        console.log(this.props)
        const show = this.props.info
        const showList = show.length ? (
            show.map(post =>{
                const dry = post.name
                const chair = '/product?name=' + dry
                return(
                    <div className ="items" key={post.id}>
                        <NavLink to={chair} >
                            <div className= "featured-image">
                                <img src= {post.image} alt='pics' />
                            </div>
                            <div className = "info">
                                <span>{post.name}</span>
                                <span>{'\u20A6'} {post.price}</span>
                            </div>
                        </NavLink>
                     </div>
                )
            })
        ) : (
            <div className="center">Loading post...</div>
        )
        return (
            <div className = "hide-toggle-menu">
                <Animation />
                <div className = "index-page  product-page">
                    <div className="single-product-wrapper">
                        <div className="products-items">

                        </div>
                    </div>

                    <div className= "latest-title title">
                        <h3>other product</h3>
                    </div>
                    <div className= "latest-product product-wrapper">
                        { showList }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        info: state.info
    }
}


export default connect(mapStateToProps)(Product)