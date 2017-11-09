import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function NavHeader({categories, onChangeSorting }){
    return (
        <div className="navbar-fixed">
        <nav className="nav-extended">
            <div className="nav-wrapper">
                <a href="" className="brand-logo"><i className="material-icons">chat_bubble_outline</i>Readable</a>

                <ul id="nav-mobile" className="right">
                    <li><a className="dropdown-button" href="#!" data-activates="dropdownCat">Categories <i className="material-icons right">arrow_drop_down</i></a>
                        <ul id="dropdownCat" className="dropdown-content">
                            <li><Link to="/">ALL</Link></li>
                            <li className="divider"></li>
                            {categories.map(cat => <li key={cat}><Link to={`/${cat}`}>{cat}</Link></li>)}
                        </ul>

                    </li>
                    <li><a className="dropdown-button" href="#!" data-activates="dropdownSort"><i className="material-icons">filter_list</i></a>
                        <ul id="dropdownSort" className="dropdown-content">
                            <li><a onClick={()=>onChangeSorting("voteScore")} >Score</a></li>
                            <li><a onClick={()=>onChangeSorting("timestamp")} >Date</a></li>
                            <li><a onClick={()=>onChangeSorting("commentCount")} >Popularity</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="nav-content">

            </div>
        </nav>
        </div>
    )
}

const mapStateToProps = ({categories}) => ({ categories })

const  mapDispatchToProps = (dispatch) => ({})
   
export let AppHeader = connect(mapStateToProps, mapDispatchToProps)(NavHeader);