import React from 'react'
import GoogleAuth from './GoogleAuth'
import { Link } from 'react-router-dom'

export default function Header () {

    return (       
            <div style={{borderRadius: '0'}} className="ui blue inverted pointing top segment menu">
                <div className="ui container">
                    <Link to="/" className="header item"><h3><i class="video large icon"></i> Streams.tv</h3></Link>

                    <div className="right menu">
                        <GoogleAuth />
                    </div>
                </div>
            </div>
    )

}