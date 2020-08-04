import React from 'react'

class Input extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="query" />
                <button>Search</button>
            </form>
        )
    }
}

export default Input