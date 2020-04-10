import React from 'react'

export default class House extends React.Component {
    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {
        const mappedHouses = this.props.houses.map(elem => {
            return (
                <div>House Name {elem.name}</div>
            )
        })
        return (
        <div>
            {mappedHouses}
        </div>
        )
    }
}