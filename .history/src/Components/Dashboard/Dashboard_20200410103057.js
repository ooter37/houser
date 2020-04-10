import React from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

export default class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }
    render() {
        this.state.houses.map(elem => {
            return (
            <House/>
            )
        })
        return (
        <div>
            <Link to='/wizard'>Add New Property</Link>
            <House />
        </div>
        )
    }
}