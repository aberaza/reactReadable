import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UUID from 'uuid'
import { AppPost } from './post'

import { timestamp2String } from '../utils/helpers'


class PostNew extends React.Component {

    render () {
        return (
            <div className="posts">
                <div className="row">
                    <div className="col s12">
                        <AppPost editing={true} new={true} id={UUID.v1()}/>
                    </div>
                </div>
            </div>
        )
    }
}

export let AppPostEdit = connect(undefined,undefined)(PostNew)
