import React, {Component} from 'react';
import './oni.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Shoes from './component/shoes'
import Sandal from './component/sandal'
import Slipper from './component/slipper'
import About from './components/About'
import Contact from './components/Contact'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shoes' component={Shoes} />
            <Route path='/sandal' component={Sandal} />
            <Route path='/slipper' component={Slipper} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
