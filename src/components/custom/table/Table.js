import React from 'react'
import DeleteEmployee from 'src/components/employees/deleteemployee/DeleteEmployee'
import GetEmployee from 'src/components/employees/getemployee/GetEmployee'
import UpdateEmployee from 'src/components/employees/updateemployee/UpdateEmployee'

import './Table.css'

function Table({ users, activePage, itemsCountPerPage, searchText }) {
    // const [newUsers, setNewUsers] = useState(users)
    // useEffect(() => {
    //     if (searchText !== "") {
    //         const newUsersList = users.filter(user => {
    //             return Object.values(user).join(' ').toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    //         })
    //         setNewUsers(newUsersList)
    //     } else {
    //         setNewUsers(users)
    //     }

    // }, [searchText])
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        <span className="custom-checkbox">
                            <input type="checkbox" name="select_all" />
                            <label htmlFor="select_all"></label>
                        </span>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Manage</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    index >= activePage * itemsCountPerPage - itemsCountPerPage && index < activePage * itemsCountPerPage ?
                        <tr key={user.id}>
                            <td>
                                <span className="custom-checkbox">
                                    <input type="checkbox" name="checkbox1" value="" />
                                    <label htmlFor="checkbox1"></label>
                                </span>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <GetEmployee user={user} />
                                <UpdateEmployee user={user} />
                                <DeleteEmployee user={user} />
                            </td>
                        </tr>
                        : ""
                ))}
            </tbody>
        </table>
    )
}

export default Table
