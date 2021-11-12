import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import useAuth from "./../../../../hooks/useAuth";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(true);
    const { user } = useAuth();
    const [st, setSt] = useState(0);

    useEffect(() => {
        setLoadProducts(true);
        fetch("https://radiant-castle-55741.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoadProducts(false);
                setSt(0);
            });
    }, [st]);

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            {
                fetch(
                    `https://radiant-castle-55741.herokuapp.com/products/${id}`,
                    {
                        method: "Delete",
                        headers: { "Content-Type": "application/json" },
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        setSt(1);

                        toast.error("Product Delete Success!");
                    });
            }
        }
    };

    return (
        <div className="">
            <div className="container mt-5 mb-2">
                <div className="text-center">
                    <h1 className="search-text">
                        Manage
                        <span className="search-heading-text"> Products</span>
                    </h1>
                    <hr />
                </div>
            </div>
            <div className="container table-responsive mx-auto px-5">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand Name</th>

                            <th scope="col">Stock</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    {loadProducts ? (
                        <div className=" d-flex justify-content-center align-items-center">
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id}>
                                    <th scope="row">{product._id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brandName}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.price}</td>

                                    <td>
                                        <button
                                            onClick={() =>
                                                deleteHandler(product._id)
                                            }
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
