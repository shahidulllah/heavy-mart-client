



import { useEffect, useState } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";


const Home = () => {
    const [products, setproduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const fewData = data.slice(0, 6);
                console.log(fewData);
                setproduct(fewData)
            })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className="px-4 lg:mx-24 mb-16">
                <div className="flex flex-col items-center justify-center p-16 pb-12 pt-16 space-y-5">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center">Our Exclusive Products</h1>
                    <p className="text-center lg:w-4/12">Most interesting part to have the fresh mind by keeping our product. Art and Craft is the way to live and refresh your mind.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {
                        products.map(product => <div key={product._id} className="max-w-full rounded-md shadow-2xl shadow-violet-400 bg-gray-700 text-gray-100">
                            <img src={product?.image} alt="" className=" object-center w-full rounded-t-md h-72 bg-gray-500 p-3" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-semibold tracking-wide">{product?.productName}</h2>
                                        <h4>Price: <span>$</span> {product?.price}</h4>
                                    </div>
                                    <p className="text-gray-100">{product?.description}</p>
                                </div>
                                <Link to={`/details/${product?._id}`}> <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Details</button></Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className="pb-12  flex justify-center">
                <Link to='/product'><button className="btn text-purple-600 bg-slate-300 font-semibold text-lg font-roboto">See All Products...</button></Link>
            </div>
        </div>
    );
};

export default Home;