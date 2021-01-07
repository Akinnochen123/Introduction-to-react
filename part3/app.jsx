class Person extends React.Component {
    render () {
        let name = this.props.name;
        let age = this.props.age;
        let hobbies = this.props.hobbies;

        if (name.length > 8) {
            name = name.substring(0, 6);
        }

        var myHobby = hobbies.map((hobby, index) => {
            return <li key={index}>{hobby}</li>
        })
        return (
            <div>
                <h2>{name}</h2>
                <p>Learn some information about this person.</p>
                {age > 21 ? (<h3>Have a drink</h3>)
                : (<h3>You must be 21</h3>)}
                
                {myHobby}
            </div>
        )
    }
}

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

ReactDOM.render(<App />, document.getElementById('app'));