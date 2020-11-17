import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import Animation from '../animation/animi';
import Footer from './footer';
import { PaystackButton } from 'react-paystack'

class payment extends Component{
   
    getUserDetails = () => {
        const name = document.querySelector('.name input').value
        const phone = document.querySelector('.phone input').value
        const email = document.querySelector('.email input').value
        const house = document.querySelector('.house input').value
        const size = document.getElementById('size').innerText
        const amount = document.getElementById('price').innerText
        return {name, phone, email, house, size, amount}
    }
    submitForm = () => {
        this.validateFields()
        const errorMessages = [];
        if (!errorMessages.length) {
            const { email, phone, amount,name } = this.getUserDetails
    
            this.payWithPaystack(email,amount,phone,name)
        }
    }
    validateFields = () => {
        const {name, phone} = this.getUserDetails
        const errorMessages = [];
        if (name.length < 3){
            errorMessages.push('Incomplete name entererd')
        }
        if (isNaN(phone)){
            errorMessages.push('Invalid phone number entered')
        }
    
        if(errorMessages.length) {
            let el = ''
            errorMessages.forEach(err => {
                el += `<p>${err}</p>`
            })
            return document.getElementById('error').innerHTML = el
        }
    }
    
    clearError = ()  => {
        let elements = document.getElementById('field')
        const errorMessages = [];
        elements.forEach(el => {
            if(errorMessages.length){
                errorMessages = []
                document.getElementById('error').innerHTML = ''
            }
        })
    }
    payWithPaystack = (name,email,amount,phone,) => {
        const publicKey = "pk_test_82ce23694563611af6015b7bdfc1dd4a1f044acf"
        const price = amount+'00'
        
        const componentProps = {
            email,
            price,
            metadata: {
              name,
              phone,
            },
            publicKey,
            text: "Pay Now",
            onSuccess: () =>
              alert("Thanks for doing business with us! Come back soon!!"),
            onClose: () => alert("Wait! You need this oil, don't go!!!!"),
          }
    }
    
    render() {
        const show = this.props.info;
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
        const search = this.props.location.search;
        const foo = new URLSearchParams(search);
        const params = foo.get('name');
        const life = this.props.data;
        let itemSize
        
        const lifeList = life.filter(items =>items.name === params).map(item =>{
            
                item.size.filter(team => team.name === params).map(pure =>{
                    return ( itemSize +=
                            (<option key={pure.id}>{pure.size}</option>)             
                    )
                }) 
            
            return (
                <div class="products-items" key={item.id}>
                        <div class="product-single">
                            <div class="featured-image">
                                <img src={item.image} alt='the pics'/>
                            </div>
                        </div>
    
                        <div class="content">
                            <div class="info">
                                <span>Product: {item.name}</span> 
                                <br/>
                                <span>vendor: Tetrax magnificent</span> 
                                <br/>
                                <span>price: <span id='price'>{item.price}</span></span> 
                                <br/>
                            </div>
                            <p></p>
                            <div class="pay-bitch">
                                <div id="error"></div>
                                <p class="name">
                                    <input type="text" id='field' onInput={this.clearError} placeholder="Full Name" />
                                </p>
                                <p class="phone">
                                    <input type="text" id='field' onInput={this.clearError} placeholder="Phone Number" />
                                </p>
                                <p class="email">
                                    <input type="email" onInput={this.clearError}  placeholder="Email Address" />
                                </p>
                                <p class="house">
                                    <input type="text" id='field' onInput={this.clearError}  placeholder="Residential Address" />
                                </p>
                                <p class="size">
                                    <select id="size" name="size" >
                                        <option>Select shoe size</option>
                                            {itemSize}
                                    </select>
                                </p>
                                <PaystackButton  {...this.submitForm}/>
                            </div>
                        </div>
                    </div>    
            )
        })

        return(
            <div className = "hide-toggle-menu">
                <Animation />
                <div className = "index-page  product-page">
                    <div className="single-product-wrapper">
                        { lifeList }
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
        info: state.info,
        data: state.data
    }
}

export default connect(mapStateToProps)(payment)