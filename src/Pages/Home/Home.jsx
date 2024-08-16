



import { useEffect, useState } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";


const Home = () => {
    const [products, setProduct] = useState([]);
    const [display, setDisplay] = useState(products)

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    // Filter Section
    const handleFilter = e => {
        const category = e.target.value;

         if (category === "Accessories") {
            const Accessories = products.filter(a => a.category === "Accessories");
            setDisplay(Accessories);
        }
        else if (category === "Electronics") {
            const Electronics = products.filter(a => a.category === "Electronics");
            setDisplay(Electronics);
        }
        else if (category === "Personal Care") {
            const PersonalCare = products.filter(a => a.category === "Personal Care");
            setDisplay(PersonalCare);
        }
        else if (category === "Footwear") {
            const Footwear = products.filter(a => a.category === "Footwear");
            setDisplay(Footwear);
        }
        else if (category === "Furniture") {
            const Furniture = products.filter(a => a.category === "Furniture");
            setDisplay(Furniture);
        }
        else if (category === "Home Appliances") {
            const HomeAppliances = products.filter(a => a.category === "Home Appliances");
            setDisplay(HomeAppliances);
        }
        
    }
    return (
        <div>
            <Banner></Banner>
            <div className="px-4 lg:mx-24 mb-16">
                <div className="flex flex-col items-center justify-center p-16 pb-12 pt-16 space-y-5">
                    <h1 className="text-3xl lg:text-4xl font-bold text-center">Our Exclusive Products</h1>
                    <p className="text-center lg:w-4/12">Most interesting part to have the fresh mind by keeping our product. Art and Craft is the way to live and refresh your mind.</p>
                </div>
                 {/* sm */}
            <div className="flex justify-end pb-7">
                <select onChange={handleFilter} className="select select-bordered select-sm w-full max-w-xs">
                    
                    <option disabled selected>Filter Products by Category</option>
                    <option value='Accessories'>Accessories</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Furniture'>Furniture</option>
                    <option value='Home Appliances'>Home Appliances</option>
                    <option value='Personal Care'>Personal Care</option>
                    <option value='Footwear'>Footwear</option>
                </select>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {
                        display.map(product => <div key={product._id} className="max-w-full rounded-md shadow-2xl shadow-violet-400 bg-gray-700 text-gray-100">
                            <img src={product?.image} alt="" className=" object-center w-full rounded-t-md h-72 bg-gray-500 p-3" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl font-semibold tracking-wide">{product?.productName}</h2>
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