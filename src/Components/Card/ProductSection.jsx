import { useEffect, useState } from "react";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";


const ProductSection = () => {
    const [products, setProduct] = useState([]);
    const [productPerPage, setProductPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const { count } = useLoaderData();
   

    const numberOfPages = Math.ceil(count / productPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&size=${productPerPage}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)

            })
    }, [currentPage, productPerPage])




    const handleProductPerPage = e => {
        const intPage = parseInt(e.target.value);
        setProductPerPage(intPage);
        setCurrentPage(0);
    }
    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < numberOfPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    }
    // =====================================
    // ====================================


    return (
        <div className="px-4 lg:mx-24">
            <div className="flex flex-col items-center justify-center p-16 pb-12 pt-16 space-y-5">
                <h1 className="text-3xl lg:text-4xl font-bold text-center">All Products</h1>
                <p className="text-center lg:w-4/12">Most interesting part to have the fresh mind by keeping our product. Art and Craft is the way to live and refresh your mind.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    products.map(product => <Card key={product._id} product={product}></Card>)
                }
            </div>

            {/* Pagination */}
            <div className="flex justify-center p-12">

                <button onClick={handlePreviousPage} className="px-5 m-2 btn">Previous</button>
                {
                    pages.map(page => <button onClick={() => setCurrentPage(page)} className={`${currentPage === page && 'bg-purple-400 hover:bg-purple-500'} px-5 m-2 btn`} key={page}>{page + 1}</button>)
                }
                <button onClick={handleNextPage} className="px-5 m-2 btn">Next</button>
                <select onChange={handleProductPerPage} value={productPerPage} className="px- border" name="" id="">
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default ProductSection;