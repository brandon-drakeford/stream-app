import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

function GoogleAuth (props) {

    const [authMethod, setAuthMethod] = useState (null)

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: '1068486064245-b6gc1pjkgm8bjeqpe7324d44g9de3j8n.apps.googleusercontent.com',
                scope: 'email' 
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                onAuthChange(auth.isSignedIn.get(), auth.currentUser.get().getId())
                setAuthMethod(window.gapi.auth2)

                auth.isSignedIn.listen(onAuthChange)
            });
        });
     });

    function onAuthChange (isSignedIn, userId) {
        if (isSignedIn) {
            props.signIn(userId)
        } else {
            props.signOut()
        }
    }

    function onSignIn () {
        const signInMethod = authMethod.getAuthInstance()
        return signInMethod.signIn()
    }

    function onSignOut () {
        const signOutMethod = authMethod.getAuthInstance()
        return signOutMethod.signOut()
    }

    function renderAuthButton () {
        if (props.isSignedIn === null){
            return null
        } else if (props.isSignedIn) {
            return (
                <button onClick={onSignOut} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>)
        } else {
            return (
                <button onClick={onSignIn} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In with Google
                </button>)
        }
    }
 
    return <div>{renderAuthButton()}</div>
}

const mapStateToProps = (state) => {
   return {
       isSignedIn: state.auth.isSignedIn
   }    
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)