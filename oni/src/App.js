import React, {Component} from 'react';
import Navbar from './component/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Home'
import Shoe from './component/shoes'
import Sandal from './component/sandal'
import Slipper from './component/slipper'
import About from './component/About'
import Contact from './component/Contact'
import Product from './component/product'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />  
          <Route exact path='/' component={Home} />
          <Route path='/shoes' component={Shoe} />
          <Route path='/sandal' component={Sandal} />
          <Route path='/slipper' component={Slipper} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/product' component={Product} />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default  App;
