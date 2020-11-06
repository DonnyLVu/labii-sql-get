import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                HI IM THE HEADER
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/createpage">Create</Link>
                    </li>
                    <li>
                        <Link to="/rangerrender">render</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
