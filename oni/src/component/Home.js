import React, { Component } from 'react'
import Data from './data'

class Home extends Component {
    state={
        data: Data
    }
    
    Format = () => {
        let items = ""
        let fullPath = window.location.href
        let pos = fullPath.lastIndexOf('/') + 1
        let category = fullPath.substr(pos)
        category = category.substring(0, category.indexOf('.'));

        if(category==='index'){
            return this.state.data
        }
            
            for ( let i = 0; i < this.state.data.length; i++) {
                items += `<div class ="items">
                <a href= "#?name=${this.state.data[i].name}">
                        <div class= "featured-image">
                            <img src= "${this.state.data[i].image}"/>
                        </div>
                        <div class = "info">
                            <span>${this.state.data[i].name}</span>
                            <span>\u20A6 ${this.state.data[i].price}</span>
                        </div>
                    </a>
            </div>`
         } 
            return items;
    }
    render() {
        const post= this.Format
        return(            
            <div className = "index-page ">
                <div className= "latest-title title">
                    <h3>LATEST</h3>
                </div>
                <div className = "latest-product product-wrapper">
                    { post }
                </div>
            </div>            
        ) 
    }
}

export default Home