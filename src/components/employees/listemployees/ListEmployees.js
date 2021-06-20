import React, { Component } from 'react'
import { connect } from 'react-redux'

import Table from '../../custom/table/Table'
import AddEmployee from '../../employees/addemployee/AddEmployee'
import { fetchUsers } from '../../../redux/action/users/actions'
import { showLoader } from '../../../redux/action/settings/actions'
import './ListEmployees.css'
import { Pagination } from 'react-bootstrap'

class ListEmployees extends Component {

    handleShow = (flag) => this.setState({ show: flag })

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div className="container p-0">
                <div className="table-wrapper">
                    <div className="table-title d-fllex">
                        <h3 className="d-inline">Employees Management</h3>
                        <AddEmployee />
                    </div>
                    <Table users={this.props.users} />
                    {this.props.showLoader(false)}
                    <Pagination size="sm">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        open_loader: state.settings.open_loader
    }
}

export default connect(mapStateToProps, { fetchUsers, showLoader })(ListEmployees)
