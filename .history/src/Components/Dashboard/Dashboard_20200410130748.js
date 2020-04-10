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
        this.deleteHouse = this.deleteHouse.bind(this)
        this.getHouses = this.getHouses.bind(this)
    }

    componentDidMount() {
        this.getHouses()
    }

    deleteHouse(id) {
        axios.delete(`/api/delete/${id}`)
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
            <House 
            houses={this.state.houses}
            delete={this.deleteHouse} />
        </div>
        )
    }
}