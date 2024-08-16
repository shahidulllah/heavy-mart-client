/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Card = ({product}) => {
    return (
        <div>
            <div className="max-w-full rounded-md shadow-2xl shadow-violet-400 bg-gray-700 text-gray-100">
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
            </div>
        </div>
    );
};

export default Card;