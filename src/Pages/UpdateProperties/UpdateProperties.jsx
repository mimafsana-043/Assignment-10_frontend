import { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
const UpdateProperties = () => {

const data = useLoaderData();
const food = data?.result ?? data ?? null;;
// console.log(food);

 const { _id } = food;

const { user } = use(AuthContext)
    // console.log(user);


const navigate = useNavigate();

const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            foodType: e.target.property_name.value,
            name: e.target.name.value,
            description: e.target.description.value,
            catagory: e.target.catagory.value,
            priceBDT: e.target.priceBDT.value,
            location: e.target.location.value,
            image: e.target.photo.value,  
        }

        fetch(`https://assignment10-ten.vercel.app/updateProp/${food._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Property Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                // console.log(data);
                navigate("/about");

            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <div className="flex justify-center mt-8 mb-16 pb-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Update Property
        </h2>

        {/* Property Name */}
        <div>
          <label className="block text-gray-700 mb-1">Property Name</label>
          <input
          name="property_name"
            type="text"
            defaultValue={food?.property_name}
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
          name="description"
         defaultValue={food?.description}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 mb-1">Category</label>
          <select name="catagory"
           className="select select-bordered w-full">
            <option>Rent</option>
            <option>Sale</option>
            <option>Commercial</option>
            <option>Land</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 mb-1">Price</label>
          <input
          name="priceBDT"
           defaultValue={food?.price}
            type="number"
            className="input input-bordered w-full"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 mb-1">Location</label>
          <input
          name="location"
           defaultValue={food?.location}
            type="text"
            className="input input-bordered w-full"
          />
        </div>

        {/* Image Link */}
        <div>
          <label className="block text-gray-700 mb-1">Image Link</label>
          <input
          name="photo"
           defaultValue={food?.image}
            type="text"
            className="input input-bordered w-full"
          />
        </div>

        {/* Read-only fields */}
        <div>
          <label className="block text-gray-700 mb-1">User Name</label>
          <input
            type="text"
            value="Mim"
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">User Email</label>
          <input
            type="email"
            value="mim@example.com"
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="btn btn-success w-full text-white mt-4"
        >
          Update Property
        </button>
      </form>
    </div>
        </div>
    );
};

export default UpdateProperties;