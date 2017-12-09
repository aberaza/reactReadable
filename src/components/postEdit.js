import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UUID from 'uuid'
import { AppPost } from './post'

import { timestamp2String } from '../utils/helpers'


class PostNew extends React.Component {

    render () {
        const id = UUID.v1()
        return (
            <div className="posts">
                <div className="row">
                    <div className="col s12">
                        <AppPost editing={true} new={true} id={id}/>
                    </div>
                </div>
            </div>
        )
    }
}

export let AppPostEdit = connect(undefined,undefined)(PostNew)
