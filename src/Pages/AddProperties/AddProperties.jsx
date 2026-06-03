import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddProperties = () => {
    const { user } = use(AuthContext)
    // console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {

            foodType: e.target.property_name.value,
            name: e.target.name.value,
            description: e.target.description.value,
            catagory: e.target.catagory.value,
            priceBDT: e.target.price.value,
            location: e.target.location.value,
            image: e.target.photo.value,
            email: e.target.email.value,
            created_at: new Date(),
            created_by: user.email

        }

        fetch('https://assignment10-ten.vercel.app/Foods', {
            method: "POST",
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
                    title: "Property Added Successfully",
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
        <div className="mb-8 sm:mb-12 md:mb-16 px-4">
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-emerald-50 to-teal-100 py-8">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-lg">
                    <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">Add Property</h2>

                    {/* Property Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Property Name</label>
                        <input
                            name="property_name"
                            type="text"
                            placeholder="Enter property name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            placeholder="Write a short description"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Category</label>
                        <select name="catagory"
                            className="select select-bordered w-full">
                            <option>Rent</option>
                            <option>Sale</option>
                            <option>Commercial</option>
                            <option>Land</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Price</label>
                        <input
                            name="price"
                            type="number"
                            placeholder="Enter price"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Location */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Location</label>
                        <input
                            name="location"
                            type="text"
                            placeholder="City, area, or address"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Image Link */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Image Link</label>
                        <input
                            name="photo"
                            type="url"
                            placeholder="Paste image link"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* User Email (Read-only) */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">User Email</label>
                        <input
                            name="email"
                            type="email"
                            value="user@example.com"
                            readOnly
                            className="input input-bordered w-full bg-gray-100"
                        />
                    </div>

                    {/* User Name (Read-only) */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-1">User Name</label>
                        <input
                            name="name"
                            type="text"
                            value="John Doe"
                            readOnly
                            className="input input-bordered w-full bg-gray-100"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                        Add Property
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProperties;