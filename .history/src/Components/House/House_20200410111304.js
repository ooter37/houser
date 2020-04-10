import React from 'react'

export default class House extends React.Component {
    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {
console.log(this.props.mappedHouses)
        return (
        <div>
            <h1>Name: {this.props.mappedHouses.name}</h1>
        </div>
        )
    }
}