import React from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

export default class Dashboard extends React.Component {
    render() {
        return (
        <div>
            Dashboard
            <Link to='/wizard'>Add New Property</Link>
            <House />
        </div>
        )
    }
}