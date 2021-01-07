import Person from './components/person';
import React from 'react';
import { render } from 'react-dom'

class App extends React.Component {
    render() {
        
        return (
            <div>
                <Person name='Ogunmola Akinwumi' age='26' hobbies={["football", "music", "coding"]} />
                <Person name='Alabi Babatunde' age='26' hobbies={["football", "drawing", "politics"]} />
                <Person name='Adedoyin Samuel' age='26' hobbies={["football", "photography", "Inventing"]} />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
