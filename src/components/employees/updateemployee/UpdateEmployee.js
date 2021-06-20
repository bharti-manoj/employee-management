import React, { Component } from 'react'
import CustomModal from '../../custom/modal/CustomModal'
import { updateUser } from '../../../redux/action/users/actions'
import { connect } from 'react-redux'

class UpdateEmployee extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    openModal = (flag) => this.setState({ show: flag })

    updateEmployee = (values) => this.props.updateUser(values)

    render() {
        return (
            <>
                <button
                    className="btn btn-sm btn-primary mr-2"
                    onClick={() => this.openModal(true)}
                >
                    <i className="fas fa-edit mr-1"></i>Edit
                </button>
                <CustomModal
                    show={this.state.show}
                    openModal={this.openModal}
                    title={"Update Employee Details"}
                    user={this.props.user}
                    updateEmployee={this.updateEmployee}
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

export default connect(mapStateToProps, { updateUser })(UpdateEmployee)
