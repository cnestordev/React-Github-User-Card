import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    padding: 1%;
    text-align: center;
`

const InputField = styled.input`
    background: #191919;
    border: 1px solid #000;
    border-radius: 3px;
    font-size: 1rem;
    color: #949494;
    padding: 1% 2%;

    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    background: transparent;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 1.2%;
    color: #656565;
    margin: 0 1%;
`

class Input extends React.Component {
    render() {
        return (
            <Form onSubmit={this.props.submit} autoComplete="off">
                <InputField onChange={this.props.change} value={this.props.value} type="text" name="query" />
                <Button>Search</Button>
                {this.props.error ? <h6>Error: {this.props.error}</h6> : null}
            </Form>
        )
    }
}

export default Input