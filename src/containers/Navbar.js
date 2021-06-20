import React from 'react'

function Navbar() {
    function searchEmployees(e) {
        console.log(e.target.value)
    }
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
                    <input type="search" name="search-box" className="form-control mx-2 text-center" placeholder="Search Employees" onKeyUp={searchEmployees} />
                </form>
            </div>
        </nav>
    )
}

export default Navbar
