import React from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            houses: [],
            redirect: false
        }
    }

    componentDidMount() {
        this.getHouses()
    }

    async getHouses() {
        const response = await axios.get('/api/houses')
        this.setState({
            houses: response.data
        })
        }
        
    
    render() {
        return (
        <div>
            <Link to='/wizard'>Add New Property</Link>
            <House houses={this.state.houses} />
        </div>
        )
    }
}