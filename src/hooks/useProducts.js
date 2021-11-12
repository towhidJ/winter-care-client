import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://radiant-castle-55741.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            });
    }, []);

    return { products, loading };
};

export default useProducts;
