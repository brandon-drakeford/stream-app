import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'

function StreamDelete (props) {
    
    useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, [])

    const id = props.match.params.id

    const actions = (
        
        <React.Fragment>
            <button onClick={() => props.deleteStream(id)} className="ui positive right labeled icon button">Delete <i class="checkmark icon"></i></button>
            <Link to={'/'} className="ui button negative">Cancel</Link>
        </React.Fragment>
    )


    function renderContent () {
        if (!props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return <p>Are you sure you want to delete <strong>{props.stream.title}</strong> stream?</p>
    }

    return (
        <React.Fragment>
            <Modal 
                title="Delete Stream" 
                content={renderContent()} 
                actions={actions} 
                onDismiss={() => history.push('/')} />
        </React.Fragment>
    )

}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect (mapStateToProps, { fetchStream, deleteStream })(StreamDelete)