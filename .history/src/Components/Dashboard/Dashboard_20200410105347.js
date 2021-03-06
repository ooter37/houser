import React from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.getHouses()
    }

    async getHouses() {
        const response = await axios.get('/api/houses')
        console.log(response)
        this.setState({
            houses: response.data
        })
    }
    render() {
        const mappedHouses = this.state.houses.map(elem => {
            return (
            <House/>
            )
        })
        return (
        <div>
            <Link to='/wizard'>Add New Property</Link>
            {mappedHouses}
        </div>
        )
    }
}