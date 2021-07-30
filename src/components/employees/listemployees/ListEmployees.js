import React, { Component } from 'react'
import { connect } from 'react-redux'

import Table from '../../custom/table/Table'
import AddEmployee from '../../employees/addemployee/AddEmployee'
import { fetchUsers } from '../../../redux/action/users/actions'
import { showLoader } from '../../../redux/action/settings/actions'
import { setActivePage } from '../../../redux/action/settings/actions'
import { setCountPerPage } from '../../../redux/action/settings/actions'
import { setPageCount } from '../../../redux/action/settings/actions'
import './ListEmployees.css'
import Pagination from "react-js-pagination";

class ListEmployees extends Component {
    handleShow = (flag) => this.setState({ show: flag })

    componentDidMount() {
        this.props.fetchUsers()
        this.props.setActivePage(1)
        this.props.setCountPerPage(2)
        this.props.setPageCount(Math.ceil(this.props.users_count / 2))
    }

    handlePageChange = (pageNumber) => {
        this.props.setActivePage(pageNumber)
    }

    render() {
        return (
            <div className="container p-0">
                <div className="table-wrapper">
                    <div className="table-title d-fllex">
                        <h3 className="d-inline">Employees Management</h3>
                        <AddEmployee />
                    </div>
                    <div style={{ minHeight: '600px' }}>
                        <Table
                            users={this.props.users}
                            activePage={this.props.active_page}
                            itemsCountPerPage={this.props.count_per_page}
                            searchText={this.props.searchText}
                        />
                    </div>
                    {this.props.showLoader(false)}
                    <div style={{ position: 'relative', left: '35%' }}>
                        <Pagination
                            activePage={this.props.active_page || 1}
                            itemsCountPerPage={this.props.count_per_page}
                            totalItemsCount={this.props.users_count}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        users_count: state.users.count,
        open_loader: state.settings.open_loader,
        active_page: state.settings.active_page,
        page_count: state.settings.page_count,
        count_per_page: state.settings.count_per_page,
        searchText: state.settings.searchText
    }
}

export default connect(mapStateToProps, { fetchUsers, showLoader, setActivePage, setCountPerPage, setPageCount })(ListEmployees)
