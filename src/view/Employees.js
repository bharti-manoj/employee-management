import React, { Component } from 'react'

import Navbar from '../containers/Navbar'
import ListEmployees from 'src/components/employees/listemployees/ListEmployees'
import Loader from 'src/components/custom/loader/Loader'
import { connect } from 'react-redux'
import { showLoader } from '../redux/action/settings/actions'

class Employees extends Component {
    componentDidMount(){
        this.props.showLoader(true)
    }
    render() {
        return (
            <>
                {this.props.open_loader ? <Loader /> : ''}
                <Navbar />
                <ListEmployees />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        open_loader: state.settings.open_loader
    }
}

export default connect(mapStateToProps, { showLoader })(Employees)
