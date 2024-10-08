



import { useEffect, useState } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";


const Home = () => {
    const [products, setProduct] = useState([]);
    const [display, setDisplay] = useState([]);
    const [search, setSearch] = useState('');
    const [sortOption, setSortOption] = useState('');
    console.log(sortOption);


    useEffect(() => {
        fetch('https://heavy-mart-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                const fewData = data.slice(0, 9);
                setDisplay(fewData)
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


     // Sorting Section
     const handleSort = e => {
        const option = e.target.value;
        setSortOption(option);

        const sortedProducts = [...display];

        if (option === "price-low-high") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (option === "price-high-low") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (option === "date-newest") {
            sortedProducts.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
        }

        setDisplay(sortedProducts);
    };
    return (
        <div>
            <Banner></Banner>
            <div className="px-4 lg:mx-24 mb-16">
                <div className="flex flex-col items-center justify-center p-16 pb-12 pt-16 space-y-5">
                    <h1 className="text-3xl lg:text-4xl font-bold text-center">Our Exclusive Products</h1>
                    <p className="text-center lg:w-4/12">Most interesting part to have the fresh mind by keeping our product. Art and Craft is the way to live and refresh your mind.</p>
                </div>
                {/* sm */}
                <div className="grid grid-cols-1 lg:flex lg:justify-around gap-2  pb-7">
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search Products" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    <div>
                        <select onChange={handleSort} className="select select-bordered select-xl w-full max-w-xs">
                            <option disabled selected>Sort Products</option>
                            <option value='price-low-high'>Price: Low to High</option>
                            <option value='price-high-low'>Price: High to Low</option>
                            <option value='date-newest'>Date Added: Newest First</option>
                        </select>
                    </div>
                    <div>
                        <select onChange={handleFilter} className="select select-bordered select-xl w-full max-w-xs">
                            <option disabled selected>Filter Products by Category</option>
                            <option value='Accessories'>Accessories</option>
                            <option value='Electronics'>Electronics</option>
                            <option value='Furniture'>Furniture</option>
                            <option value='Home Appliances'>Home Appliances</option>
                            <option value='Personal Care'>Personal Care</option>
                            <option value='Footwear'>Footwear</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {
                        display.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.productName.toLowerCase().includes(search)
                        }).map(product => <div key={product._id} className="max-w-full rounded-md shadow-2xl shadow-violet-400 bg-gray-700 text-gray-100">
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