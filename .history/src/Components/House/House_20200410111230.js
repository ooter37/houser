import React from 'react'

export default class House extends React.Component {
    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {

        return (
        <div>
            <h1>Name: {props.mappedHouses.name}</h1>
        </div>
        )
    }
}