import React from 'react'
import { connect } from 'react-redux'

function NavHeader(props){
    return (
        <div className="navbar-fixed">
        <nav className="nav-extended">
            <div className="nav-wrapper">
                <a href="" className="brand-logo"><i className="material-icons">chat_bubble_outline</i>Readable</a>

                <ul id="nav-mobile" className="right">
                    <li><a className="dropdown-button" href="#!" data-activates="dropdownCat">Categories <i className="material-icons right">arrow_drop_down</i>
                        <ul id="dropdownCat" className="dropdown-content">
                            {props.categories.map(cat => <li><a href="">{cat}</a></li>)}
                        </ul>

                    </a></li>
                    <li><a className="dropdown-button" href="#!" data-activates="dropdownSort"><i className="material-icons">filter_list</i></a>
                        <ul id="dropdownSort" className="dropdown-content">
                            <li><a href="">Sort 1</a></li>
                            <li><a href="">Sort 2</a></li>
                            <li><a href="">Sort 3</a></li>
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

function mapStateToProps (state) {
    return {
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export let AppHeader = connect(mapStateToProps, mapDispatchToProps)(NavHeader)
/*
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className="dropdown-button" href="#!" data-activates="dropdown1">
                                        <i className="material-icons">filter_list</i>
                                    </a></li>
                </ul>
                    */
