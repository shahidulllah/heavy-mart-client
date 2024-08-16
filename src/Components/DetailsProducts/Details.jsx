import { VscDebugBreakpointData } from "react-icons/vsc";
import { useLoaderData } from "react-router-dom";


const Details = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-5 lg:pt-16">
                <h1 className="text-3xl lg:text-4xl font-bold text-center"><u>Products Details</u></h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000" className="flex justify-center  p-4 rounded-xl lg:mx-24 lg:p-12">
                <div className="9/12 ">

                    {/* image */}
                    <div className="flex flex-col lg:flex lg:flex-row border items-center justify-center gap-6 shadow-2xl p-4 rounded-lg lg:p-9"><img className="  rounded-lg h-[40vh]" src={product.image} alt="" />
                        <div className="">
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                <div className="bg-purple-10 p-5 mb-6 rounded-xl">
                                    <p className=" text-purple-800 text-3xl font-bold">{product.productName}</p>
                                </div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Category name: </p></div>
                                <div><p>{product.category}</p></div>
                            </div>
                            <div className="text-start flex flex-wrap ml-12 gap-3 mt-3 items-center">
                                <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Description: </p></div>
                                <div><p>{product.description}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Price: </p></div>
                                <div><p>$ {product.price}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Rating: </p></div>
                                <div><p> {product.ratings}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Brand: </p></div>
                                <div><p>{product.brand}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Creation Date: </p></div>
                                <div><p>{product.creationDate}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                <button type="button" className="flex items-center justify-center w-8/12 p-3 font-bold tracking-wide rounded-md bg-violet-400 text-gray-900 hover:bg-violet-500 mt-5">Buy Now</button>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;