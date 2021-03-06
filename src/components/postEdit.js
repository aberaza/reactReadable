import React from 'react'
import { connect } from 'react-redux'

import { getUUID } from '../utils/helpers'

import { AppPost } from './post'

class PostNew extends React.Component {

    render () {
        return (
            <div className="posts">
                <div className="row">
                    <div className="col s12">
                        <AppPost editing={true} isNew={true} id={getUUID()}/>
                    </div>
                </div>
            </div>
        )
    }
}

export let AppPostEdit = connect(undefined,undefined)(PostNew)
