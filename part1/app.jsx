class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>My very First Component</h1>
            </div>
        )
    }
}

class SecondComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>My second Component</h2>
            </div>
        )
    }
}

class NamedComponent extends React.Component {
    render() {
        return (
            <div>
                <p>My name is {this.props.name}</p>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <FirstComponent />
                <SecondComponent />
                <NamedComponent name='Emmanuel' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));