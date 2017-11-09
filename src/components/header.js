import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function NavHeader(props){
    return (
        <div className="navbar-fixed">
        <nav className="nav-extended">
            <div className="nav-wrapper">
                <a href="" className="brand-logo"><i className="material-icons">chat_bubble_outline</i>Readable</a>

                <ul id="nav-mobile" className="right">
                    <li><a className="dropdown-button" href="#!" data-activates="dropdownCat">Categories <i className="material-icons right">arrow_drop_down</i>
                        <ul id="dropdownCat" className="dropdown-content">
                            <li><Link to="/">ALL</Link></li>
                            <li className="divider"></li>
                            {props.categories.map(cat => <li><Link to={`/category/${cat}`}>{cat}</Link></li>)}
                        </ul>

                    </a></li>
                    <li><a className="dropdown-button" href="#!" data-activates="dropdownSort"><i className="material-icons">filter_list</i></a>
                        <ul id="dropdownSort" className="dropdown-content">
                            <li><a href="">Score</a></li>
                            <li><a href="">Date</a></li>
                            <li><a href="">Comments</a></li>
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