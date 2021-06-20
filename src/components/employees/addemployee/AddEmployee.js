import React, { Component } from 'react'
import CustomModal from '../../custom/modal/CustomModal'
import { addUser } from '../../../redux/action/users/actions'
import { connect } from 'react-redux'
import { showLoader } from '../../../redux/action/settings/actions'

class AddEmployee extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
            user: { name: '', username: '', email: '', phone: '', website: '', company: '' }
        }
    }

    openModal = (flag) => this.setState({ show: flag })

    addEmployee = (values) => this.props.addUser(values)

    render() {
        return (
            <>
                <button
                    className="btn btn-success float-right px-2"
                    onClick={() => this.openModal(true)}
                >
                    <i className="fas fa-plus-circle fa-sm mr-1"></i>
                    <span style={{ fontSize: '0.875rem' }}>Add an Employee</span>
                </button>
                <CustomModal
                    show={this.state.show}
                    openModal={this.openModal}
                    title="Enter Employee Details"
                    user={this.state.user}
                    addEmployee={this.addEmployee}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        open_loader: state.settings.open_loader
    }
}

export default connect(mapStateToProps, { addUser, showLoader })(AddEmployee)
