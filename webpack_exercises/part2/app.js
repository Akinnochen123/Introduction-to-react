import Person from './components/person';
import React from 'react';
import { render } from 'react-dom'

class App extends React.Component {
    render() {
        
        return (
            <div>
                <Person name='Emmanuel Oderemi' age='28' hobbies={["Gaming", "Coding", "Loving"]} />
                <Person name='Tunde' age='27' hobbies={["Gaming", "Tech", "Squeezing face"]} />
                <Person name='Olamiji Badmus' age='20' hobbies={["Swimming", "Coding", "Inventing"]} />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));