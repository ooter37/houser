import React from 'react'

export default class House extends React.Component {
    // eslint-disable-next-line 
    constructor(props) {
        super(props)
    }
    render() {
        const mappedHouses = this.props.houses.map(elem => {
            return (
                <div key={elem.id}>
                    <h1>{elem.name}</h1>
                    <span>{elem.address}</span>
                    <span>{elem.city}</span>
                    <span>{elem.state}</span>
                    <span>{elem.zip}</span>
                    {/* <img alt='house' src={elem.img}/>
                    <span>{elem.mortgage}</span>
                    <span>{elem.rent}</span> */}
                    <button onClick={() => {this.props.delete(elem.id)}}>Delete</button>
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