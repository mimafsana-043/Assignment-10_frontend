import { Link } from "react-router";

const SingleDetailPage = ({ d }) => {
    const { cafeName, description, image,priceBDT,discount,_id} = d;
    return (
        <div className="mt-2 mb-[-8px]">
            <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[480px]">
             <div className="w-11/12 h-48 sm:h-56 object-cover m-4 rounded-lg overflow-hidden">
                <img
                    className=""
                    src={image}
                    alt="Chicken Burger"
                />
            </div>

            <div className="p-4 sm:p-5">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">{cafeName}</h2>
                <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                    {description} 
                </p>

                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-base sm:text-lg font-bold text-emerald-600">Price : {priceBDT}</span>
                    <span className="text-xs sm:text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md font-medium">{discount}</span>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2">
                    <Link to={`/detail/${_id}`}>
                    <button className="btn btn-xs sm:btn-sm bg-emerald-500 hover:bg-emerald-600 text-white ext-emerald-900  hover:text-emerald-200 rounded-md">
                        View Details
                    </button>
                    </Link>
                    <button className="btn btn-xs sm:btn-sm border border-emerald-500 text-emerald-500 hover:bg-emerald-50 rounded-md">
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>

        </div>
    );
};

export default SingleDetailPage;