import React, { Component } from 'react'
import CustomModal from '../../custom/modal/CustomModal'
import { deleteUser } from '../../../redux/action/users/actions'
import { connect } from 'react-redux'

class DeleteEmployee extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    openModal = (flag) => this.setState({ show: flag })

    deleteEmployee = (id) => this.props.deleteUser(id)

    render() {
        return (
            <>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.openModal(true)}
                >
                    <i className="fas fa-times mr-1"></i>Delete
                </button>
                <CustomModal
                    show={this.state.show}
                    openModal={this.openModal}
                    title={"Delete Employee Details"}
                    user={this.props.user}
                    deleteEmployee={this.deleteEmployee}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps, { deleteUser })(DeleteEmployee)
