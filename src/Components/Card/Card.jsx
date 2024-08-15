import { Link } from "react-router-dom";


const Card = () => {
    return (
        <div>
            <div className="max-w-sm rounded-md shadow-2xl shadow-violet-400 bg-gray-700 text-gray-100 my-16">
                <img src="https://i.ibb.co/qNwm3wK/Backpack.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-semibold tracking-wide">Backpack</h2>
                        <h4>Price: <span>$</span> 25</h4>
                        </div>
                        <p className="text-gray-100">Spacious backpack with multiple compartments for organization.</p>
                    </div>
                   <Link to='/details'> <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;