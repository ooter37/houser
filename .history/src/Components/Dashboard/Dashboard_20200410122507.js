import React from 'react'
import House from '../House/House'
import {Link, Redirect} from 'react-router-dom'
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
            houses: response.data,
            redirect: true
        })
        
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/'/>
        }
        return (
        <div>
            <Link to='/wizard'>Add New Property</Link>
            <House houses={this.state.houses} />
        </div>
        )
    }
}