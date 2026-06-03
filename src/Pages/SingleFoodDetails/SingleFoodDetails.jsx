import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";
const SingleFoodDetails = ({ foods }) => {

  const { _id } = foods;

  const handlDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    fetch(`https://assignment10-ten.vercel.app/Foods/${foods._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

    })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Property Deleted Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        // console.log(data);
      })
      .catch(err => {
        // console.log(err)
      })
  }

  return (

    <div>
      <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 px-4">
        <div className="card w-full max-w-sm bg-gradient-to-br from-emerald-50 to-teal-100 shadow-md rounded-2xl hover:shadow-lg transition duration-300">
          <figure>
            <img
              src={foods.image}
              alt={foods.cafeName}
              className="w-full h-48 sm:h-52 object-cover rounded-t-2xl"
            />
          </figure>
          <div className="card-body p-4 sm:p-6">
            <h2 className="card-title text-base sm:text-lg font-semibold text-emerald-700">
              {foods.cafeName}
            </h2>
            <p className="text-gray-700 font-medium text-sm sm:text-base">{foods.dealTitle}</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">{foods.description}</p>

            <div className="flex justify-between items-center mt-3 flex-wrap gap-2">
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-semibold">Type:</span> {foods.foodType}
              </p>
              <div className="flex items-center text-yellow-500 text-sm sm:text-base">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
                <span className="ml-1 text-gray-800 font-medium">
                  {foods.rating}
                </span>
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center flex-wrap gap-2">
              <p className="text-base sm:text-lg font-bold text-emerald-700">
                ৳{foods.priceBDT}
                <span className="text-xs sm:text-sm text-gray-500 font-normal ml-1">
                  ({foods.discount} off)
                </span>
              </p>
              <p className="text-xs text-gray-500">
                Valid till: {foods.validTill}
              </p>
            </div>

            <Link to={`/updateProp/${_id}`}>
              <button className="btn btn-xs sm:btn-sm bg-emerald-600 text-white mt-4 hover:bg-emerald-700 w-full rounded-xl">
                Update Food
              </button>

              <button onClick={handlDelete} className="btn btn-xs sm:btn-sm bg-emerald-600 text-white mt-4 hover:bg-emerald-700 w-full rounded-xl">
                Delete Food
              </button>

            </Link>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodDetails;