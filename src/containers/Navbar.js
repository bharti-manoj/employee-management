import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchText } from '../redux/action/settings/actions'

class Navbar extends Component {
    searchEmployees = (e) => {
        this.props.setSearchText(e.target.value)
    }
    componentDidMount() {
        this.props.setSearchText('')
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-right navbar-dark bg-dark px-1 px-lg-5">
                <a href="#!" className="btn nav-item nav-link active text-white mx-3">
                    <i className="fa fa-home"></i> Home
                </a>
                <button type="button" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        {/* <a href="#!" className="btn nav-item nav-link text-white mx-3">
                        <i className="fa fa-user"></i> Profile
                    </a> */}
                    </div>
                    <form className="form-inline ml-auto">
                        <input type="search" name="search-box" className="form-control mx-2 text-center" placeholder="Search Employees" onKeyUp={this.searchEmployees} />
                    </form>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchText: state.settings.searchText
    }
}

export default connect(mapStateToProps, { setSearchText })(Navbar)
