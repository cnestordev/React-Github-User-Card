import React from 'react';
import User from './User'
import Input from './Input'
import Followers from './Followers'

import axios from 'axios'

class App extends React.Component {
  state = {
    user: null,
    query: '',
    followers: []
  }

  componentDidMount() {
    console.log('app component mounted')
    const baseUrl = 'https://api.github.com/users'
    axios.get(`${baseUrl}/cnestordev`)
      .then(res => {
        // console.log(res.data)
        this.setState({ user: res.data })
        axios.get(`${baseUrl}/${res.data.login}/followers`)
          .then(res => {
            this.setState({ followers: res.data })
          })
      })
  }

  render() {
    if (this.state.user) {
      return (
        <div className="App">
          <header className="App-header">
            <Input />
            <User main={true} user={this.state.user} />
            <Followers followers={this.state.followers} />
          </header>
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default App;
