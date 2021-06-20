import React, { Component } from 'react'
import CustomModal from '../../custom/modal/CustomModal'

class GetEmployee extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    openModal = (flag) => this.setState({ show: flag })

    render() {
        return (
            <>
                <button
                    className="btn btn-sm btn-info mr-2"
                    onClick={() => this.openModal(true)}
                >
                    <i className="fas fa-eye mr-1"></i>Read
                </button>
                <CustomModal
                    show={this.state.show}
                    openModal={this.openModal}
                    title={"Read Employee Details"}
                    user={this.props.user}
                />
            </>
        )
    }
}

export default GetEmployee
