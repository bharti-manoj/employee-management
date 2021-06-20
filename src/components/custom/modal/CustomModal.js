import React, { Component } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { Formik, Form } from 'formik';
import { v4 as uuid } from 'uuid';
import TextField from '../textfield/TextField'

class CustomModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show_loader: false
        }
    }
    handleShow = () => this.props.openModal(true)

    handleClose = () => this.setState({ show_loader: false }, () => this.props.openModal(false))

    handleCreate = (values) => {
        this.setState({ show_loader: true }, () => {
            this.props.addEmployee(values)
            this.handleClose()
        })
    }
    handleUpdate = (values) => {
        this.setState({ show_loader: true }, () => {
            this.props.updateEmployee(values)
            this.handleClose()
        })
    }
    handleDelete = (e, id) => {
        e.preventDefault()
        this.setState({ show_loader: true }, () => {
            this.props.deleteEmployee(id)
            this.handleClose()
        })
    }
    render() {
        const { id, name, username, email, phone, website } = this.props.user
        if (this.props.title === "Delete Employee Details") {
            return (<Modal show={this.props.show} onHide={this.handleClose} style={{ width: '420px', left: '35%', top: '20%' }}>
                <Modal.Header closeButton style={{ height: '120px' }} className="px-4">
                    <Modal.Title style={{ alignSelf: 'center' }}><h5>Are you sure deleting employee details?</h5></Modal.Title>
                </Modal.Header>
                <Modal.Footer className="py-0">
                    <button className={`btn btn-danger text-light ${this.state.show_loader ? 'd-none' : 'd-block'}`} onClick={(e) => this.handleDelete(e, this.props.user.id)}>
                        <i className="fas fa-trash mr-2" />Delete
                    </button>
                    <a className={`btn btn-danger text-light ${this.state.show_loader ? 'd-block' : 'd-none'}`} onClick={(event) => event.preventDefault()} href="#!">
                        <Spinner as="span" animation="border" variant="light" size="sm" className='mr-1' />Deleting...
                    </a>
                    <a className="btn btn-secondary" onClick={this.handleClose} href="#!">
                        <i className="fas fa-times mr-2" />Close
                    </a>
                </Modal.Footer>
            </Modal>)
        } else {
            return (
                <Modal show={this.props.show} onHide={this.handleClose} style={{ width: '420px', left: '35%', top: '10%' }}>
                    <Modal.Header closeButton className="px-4">
                        <Modal.Title style={{ alignSelf: 'center' }}><h5>{this.props.title}</h5></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            initialValues={{ id, name, username, email, phone, website }}
                            validate={values => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = '*Required';
                                } else if (
                                    !/^[A-Za-z ]+$/i.test(values.name)
                                ) {
                                    errors.name = '*Invalid character';
                                }
                                if (!values.username) {
                                    errors.username = '*Required';
                                } else if (
                                    !/^[A-Za-z0-9_]+$/i.test(values.username)
                                ) {
                                    errors.username = '*Invalid character';
                                }
                                if (!values.email) {
                                    errors.email = '*Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = '*Invalid email address';
                                }
                                if (!values.phone) {
                                    errors.phone = '*Required';
                                } else if (
                                    !/^\+(?:[0-9]●?){6,14}[0-9]$/i.test(values.phone)
                                ) {
                                    errors.phone = '*Invalid phone number';
                                }
                                if (!values.website) {
                                    errors.website = '*Required';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    if (this.props.title === "Enter Employee Details") {
                                        values.id = uuid()
                                        this.handleCreate(values)
                                    } else if (this.props.title === "Update Employee Details") {
                                        this.handleUpdate(values)
                                    }
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <TextField label="Name" name="name" type="text" disabled={this.props.title === "Read Employee Details" ? true : false} />
                                    <TextField label="Username" name="username" type="text" disabled={this.props.title === "Read Employee Details" ? true : false} />
                                    <TextField label="Email" name="email" type="email" disabled={this.props.title === "Read Employee Details" ? true : false} />
                                    <TextField label="Phone Number" name="phone" type="text" disabled={this.props.title === "Read Employee Details" ? true : false} />
                                    <TextField label="Website" name="website" type="text" disabled={this.props.title === "Read Employee Details" ? true : false} />
                                    {this.props.title === "Read Employee Details" ? "" : <>
                                        <button type="submit" disabled={isSubmitting} className={`float-left btn btn-primary text-light m-0 mt-3 p-1 ${this.state.show_loader ? 'd-none' : 'd-block'}`}>
                                            <i className="fas fa-plus-circle fa-sm mr-2" ></i>
                                            {this.props.title === "Update Employee Details" ? "Update" : 'Create'}
                                        </button>
                                        <button disabled={true} className={`float-left btn btn-primary text-light  m-0 mt-3 ${this.state.show_loader ? 'd-block' : 'd-none'}`} onClick={(event) => event.preventDefault()}>
                                            <Spinner as="span" animation="border" variant="light" size="sm" className='mr-1' />
                                            {this.props.title === "Update Employee Details" ? "Updating..." : 'Creating...'}
                                        </button>
                                        <button type="reset" className="btn btn-danger float-right m-0 mt-3 p-1" onClick={this.handleClose}>
                                            <i className="fas fa-times mr-2" />Close
                                        </button>
                                    </>}
                                </Form>
                            )}
                        </Formik>
                    </Modal.Body>
                </Modal>
            )
        }
    }
}

export default CustomModal
