import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid transparent;
    border-radius: 10px;
    background: #1f1f1f;
    display: flex;
    margin: 2% auto;
    padding: 1%;
    width: 50%;
`

const Image = styled.img`
    border-radius: 8px;
    width: 25%;
`

const Info = styled.div`
    flex-basis: 50%;
    text-align: center;

    h3 {
        font-size: 2rem;
        font-weight: 700;
    }

    h4 {
        font-size: 1.4rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.5;
    }
`

function User(props) {
    const { followers, location, login, bio, name, public_repos, avatar_url } = props.user

    return (
        <Container onClick={() => props.click(login)}>
            <Image src={avatar_url} alt="user" />
            <Info>
                <h3>{name}</h3>
                {name === undefined ? <h4 className="follower-name">{login}</h4> : <h4>{login}</h4>}
                <p>Location: {location || "N/A"}</p>
                <p>Followers: {followers}</p>
                <p>Bio: {bio || 'No bio available for this user'}</p>
            </Info>
        </Container>
    )
}

User.defaultProps = {
    click: function () {
        console.log("function not available for main user")
    },
}

export default User