import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

function StreamList (props) {

    useEffect(() => {
        props.fetchStreams()
    }, [])

    function renderAdminPanel (stream) {
        if (stream.userId === props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    function renderCreate () {
        if (props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    function renderList () {
        if (props.streams.length === 0) {
            return (
                <div className="ui placeholder segment">
                    <h1 className="ui icon header">
                       <i className="desktop icon"></i>
                       <div className="content">Currently there are no streams available. Login to create your own channel!</div>
                    </h1>
                </div>
            )
        }

        return props.streams.map(stream => {
            if (!stream.userId === props.currentUserId) {
                return null
            }

            return (
                <div className="item" key={stream.id}>
                    {renderAdminPanel(stream)}

                    <i className="icon play circle red large" />
                    <div className="content">
                        <Link to={`/streams/show/${stream.id}`} className="header">{stream.title}</Link>

                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div class="ui grid">
            <div class="sixteen wide column">
                <h2>Streams</h2>
            
                <div className="ui celled list">{renderList()}</div>
                
                {renderCreate()}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)

