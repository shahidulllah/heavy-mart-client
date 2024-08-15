import { useEffect, useState } from "react";
import Card from "./Card";


const ProductSection = () => {
    const [products, setproduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setproduct(data))
    }, [])
    
    return (
        <div className="px-4 lg:mx-24">
            <div className="flex flex-col items-center justify-center p-16 pb-12 pt-16 space-y-5">
                <h1 className="text-4xl lg:text-5xl font-bold text-center">Our Exclusive Products</h1>
                <p className="text-center lg:w-4/12">Most interesting part to have the fresh mind by keeping our product. Art and Craft is the way to live and refresh your mind.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    products.map(product => <Card key={product._id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default ProductSection;