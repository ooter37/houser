import React from 'react'

export default class House extends React.Component {
    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {
        const mappedHouses = this.props.houses.map(elem => {
            return (
                <div>
                    <h1>{elem.name}</h1>
                
                </div>
            )
        })
        return (
        <div>
            {mappedHouses}
        </div>
        )
    }
}