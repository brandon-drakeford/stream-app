import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../history'
import { fetchStream } from '../actions'

function BreadCrumb (props) {

    useEffect(() => {
        let url = history.location.pathname

        url = url.split('/')

        if (url.length === 4) {
            props.fetchStream(url[3])
        }

    }, [])

    const crumbs = []

    function renderCrumbs() {
        let breadCrumb, url = ''

        url = history.location.pathname

        breadCrumb = url !== '/' ? <Link to={`/`} className="section">Home</Link> : <div class="active section">Home</div>
        
        crumbs.push(breadCrumb)

        url = url.split('/')
 
        url.map((location, index) => {
            
            if (location !== "") {
                if (index <= 2) {
                    crumbs.push(
                        <React.Fragment>
                                <div class="divider"> / </div>
                                <div class={location === 'new' ? 'section active' : 'section'} style={{ textTransform: 'capitalize' }}>{location}</div>
                        </React.Fragment>)
                } else {
                    if (props.stream !== null) {
                        crumbs.push(
                            <React.Fragment>
                                    <div class="divider"> / </div>
                                    <div class="section active">{props.stream.title}</div>
                            </React.Fragment>)
                    }   
                }
            } 
        }) 

        return crumbs;
    }

    return (
        <div style={{margin: '20px 0'}} class="ui breadcrumb">
            {renderCrumbs()}
        </div>
    )
}

const mapStateToProps = (state) => {
    let url = history.location.pathname
    url = url.split('/')

    return {
        stream: state.streams[url[3]]
    }
}

export default connect (mapStateToProps, {fetchStream})(BreadCrumb)