import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar';
import Video from './components/Video';

import store from "./store";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Video />
                    <Sidebar />
                </Provider>
            </div>
        );
    }
}

export default App;


// import React, { Component } from "react";

// class Exemplo extends Component {
//     render() {
//         return <h1>hello, {this.props.name}</h1>;
//     }

// }

// export default Exemplo;



// function Exemplo2 ({name, lestName}) {
//     return <h1> hello, {name} {lestName} </h1>
// }

// export const Exemplo3 = ({ name, lestName}) => {
//     return <h1> hello, {name} {lestName} </h1>
// }

// const Exemplo4  = ({name,lestName}) => {
//     const [useState, setUseState] = useState({
//         setUseState={
//             name:"md",
//             lestName: "mds"
//         }
//     })
//     return <h1> hello, {name} {lestName} </h1>
// }