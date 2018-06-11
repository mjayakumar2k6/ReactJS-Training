import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Header}  from './components/Header';
import {Home}  from './components/Home';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
ReactDom.render(<App/>, document.getElementById("root"));