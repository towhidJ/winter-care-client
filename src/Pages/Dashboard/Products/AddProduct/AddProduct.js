import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        await fetch(`https://radiant-castle-55741.herokuapp.com/product`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Product Add Successfully");
            });

        console.log(data);
        reset();
    };
    return (
        <div className="">
            <div className="container mt-5 mb-2">
                <div className="text-center">
                    <h1 className="search-text">
                        Add &nbsp;
                        <span className="search-heading-text">Product</span>
                    </h1>
                    <hr />
                </div>
            </div>
            <div
                className="container px-5 my-2 border-2 shadow-lg p-5  w-full "
                style={{ backgroundColor: "azure" }}
            >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            {...register("productName", { required: true })}
                            type="text"
                            placeholder="Enter Product Name"
                        />
                    </Form.Group>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Product Subtitle</Form.Label>
                        <Form.Control
                            {...register("subtitle", { required: true })}
                            type="text"
                            placeholder="Enter Product Subtitle"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control
                            {...register("description", { required: true })}
                            as="textarea"
                            placeholder="Product Description"
                            style={{ height: "180px" }}
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Rating Count</Form.Label>
                            <Form.Control
                                {...register("starCount", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                {...register("stock", { required: true })}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                custom
                                {...register("category", { required: true })}
                            >
                                <option value="">--Select Category--</option>
                                <option value="Winter Cream">
                                    Winter Cream
                                </option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                {...register("price", { required: true })}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control
                                {...register("brandName", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("img", { required: true })}
                            />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit" className="w-100">
                        Add Product
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;
