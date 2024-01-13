import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
    const { user } = useAuth();
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };
    const handleAdminSubmit = (e) => {
        const adminMail = user.email;
        const userData = { email, adminMail };
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            });

        e.preventDefault();
    };
    return (
        <div
            className="container px-5 my-2 border-2 shadow-lg p-5  w-full "
            style={{ backgroundColor: "azure" }}
        >
            <h2 className="text-center">Make an Admin</h2>
            <Form onSubmit={handleAdminSubmit}>
                <Row className="mb-3 w-100">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className="text-center"
                            type="email"
                            placeholder="Enter Email"
                            onBlur={handleOnBlur}
                        />
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-center align-items-center">
                    <Button variant="primary" type="submit" className="w-50 ">
                        Make Admin
                    </Button>
                </div>
            </Form>
            <br />
            <div className="text-center d-flex justify-content-center">
                {success && (
                    <Alert severity="success">Made Admin successfully!</Alert>
                )}
            </div>
        </div>
    );
};

export default MakeAdmin;
