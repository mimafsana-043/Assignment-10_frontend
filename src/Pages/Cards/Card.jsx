import { Link } from "react-router";

const Card = ({ d }) => {

    const { cafeName, description, image,priceBDT,discount, _id} = d;
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                className="w-full h-56 object-cover"
                src={image}
                alt="Chicken Burger"
            />

            <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{cafeName}</h2>
                <p className="text-gray-600 mb-3 text-sm">
                    {description} 
                </p>

                <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-emerald-600">Price : {priceBDT}</span>
                    <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md font-medium">{discount}</span>
                </div>

                <div className="flex items-center justify-between">
                    <Link to={`/detail/${_id}`}>
                    <button className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 text-white ext-emerald-900  hover:text-emerald-200 rounded-md">
                        View Details
                    </button>
                    </Link>
                    <button className="btn btn-sm border border-emerald-500 text-emerald-500 hover:bg-emerald-50 rounded-md">
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Card;