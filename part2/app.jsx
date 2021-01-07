class Tweet extends React.Component {
    render() {
        return (
            <div className='tweet'>
                <h2>User Name: <span className='user'>{this.props.username}</span></h2>
                <h4>Name: <span className='user'>{this.props.name}</span></h4>
                <h4>Date: <span className='user'>{this.props.dateOfTweet}</span></h4>
                <p className='text'>{this.props.children}</p>
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Tweet username='Akinnochen' name='Akinwumi' dateOfTweet='01/01/21'>Hi there, I am a software developer!!</Tweet>
                <Tweet username='Tufair' name='Tunde' dateOfTweet='02/01/21'>Hi there, I am an Architect!!!</Tweet>
                <Tweet username='maas' name='Samuel' dateOfTweet='03/01/21'>Hi there, I am a professional photographer!!..</Tweet>
                <Tweet username='BHB' name='Babajide' dateOfTweet='11/02/21'>Hi there, I am an electrical electronics engineer!!!</Tweet>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
