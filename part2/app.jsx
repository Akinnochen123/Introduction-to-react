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
                <Tweet username='EmmyM_ighty' name='Manny' dateOfTweet='1/12/2020'>This is my first Tweet in a while!!</Tweet>
                <Tweet username='Temi_George' name='Temie' dateOfTweet='10/11/2020'>This is going to be really fun!</Tweet>
                <Tweet username='Ope_Bantale' name='Opeyemi' dateOfTweet='11/1/2021'>This is a tweet for the future..</Tweet>
                <Tweet username='Tunene' name='Tunde' dateOfTweet='11/2/2020'>This is my what i love to do best!</Tweet>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));