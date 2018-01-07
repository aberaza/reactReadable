import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { serverGetCategories, setCategory } from '../actions/categories'

import { Error404 } from './Error404'

function NavigationMenu({onChangeSorting, categories}){
    return(
        <ul id="nav-mobile" className="right">
            <li><a className="dropdown-button" href="#!" data-activates="dropdownCat">Categories <i className="material-icons right">arrow_drop_down</i></a>
                <ul id="dropdownCat" className="dropdown-content">
                    <li><Link to="/" onClick={()=>this.props.setCategory("")}>ALL</Link></li>
                    <li className="divider"></li>
                    {categories.map(cat => <li key={cat.name}><Link onClick={()=>this.props.setCategory(cat.path)} to={`/${cat.path}`}>{cat.name}</Link></li>)}
                </ul>
    
            </li>
            <li><a className="dropdown-button" href="#!" data-activates="dropdownSort"><i className="material-icons">filter_list</i></a>
                <ul id="dropdownSort" className="dropdown-content">
                    <li key="sortScore"><a onClick={()=>onChangeSorting("voteScore")} >Score</a></li>
                    <li key="sortDate"><a onClick={()=>onChangeSorting("timestamp")} >Date</a></li>
                    <li key="sortPopularity"><a onClick={()=>onChangeSorting("commentCount")} >Popularity</a></li>
                </ul>
            </li>
        </ul>
    )
}

class NavHeader extends React.Component {
    componentDidMount() {
           this.props.getCategories()
    }

    render() {
        const {categories, onChangeSorting} = this.props;

        return (
        <div className="navbar-fixed">
            <nav className="nav-extended">
                <div className="nav-wrapper deep-orange">
                    <Link to="/" className="brand-logo"><i className="material-icons">chat_bubble_outline</i>Readable</Link>
                    <Switch>
                        <Route exact path="/404" component={Error404}></Route>
                        <Route render={_=>(<NavigationMenu categories={categories} onChangeSorting={onChangeSorting} />)}></Route>
                    </Switch>
                </div>
                <div className="nav-content">
                </div>
            </nav>
        </div>
        );
    }
}

NavHeader.propTypes = {
    categories : PropTypes.array.isRequired,
    onChangeSorting : PropTypes.func.isRequired
}

const mapStateToProps = ({categories}) => ({ categories })

const  mapDispatchToProps = { 
    getCategories : serverGetCategories, 
    setCategory 
};
   
export let AppHeader = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavHeader));