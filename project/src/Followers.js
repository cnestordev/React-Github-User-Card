import React from 'react'
import User from './User'

class Followers extends React.Component {
    render() {

        if (this.props.followers.length === 0) {
            return <h2>Loading</h2>
        }

        const followerArr = this.props.followers.map(follower => <User user={follower} />)

        return (
            <div>
                {followerArr}
            </div>
        )
    }
}

export default Followers