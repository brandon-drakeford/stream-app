import React from 'react'
import GoogleAuth from './GoogleAuth'
import { Link } from 'react-router-dom'

export default function Header () {

    return (<div className="ui container">
                <div class="ui secondary pointing menu">
                    <Link to="/" className="item">Streams</Link>

                    <div className="right menu">
                        <Link to="/" className="item">All Streams</Link>
                    </div>

                    <GoogleAuth />
                </div>
            </div>
    )

}