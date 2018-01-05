import React from 'react'
import { Link } from 'react-router-dom'

export function Error404 (props){

    return (
        <div className="card">
           <div className="card-content blue-grey lighten-3">
                <Link to={`/`} className="card-title white-text" style={{width:'100%'}} >
                    <h3>Error 404</h3>
                </Link>          
            </div>
            <div className="card-stacked">
                <div className="card-content blue-grey lighten-4">
                    <p>Post does not exist. Please, go <Link to={`/`}> back home</Link>.</p>
                </div>
               </div>
       </div>
    )
}