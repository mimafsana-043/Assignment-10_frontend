import { Suspense } from "react";
import { useLoaderData } from "react-router";
import SingleDetailPage from "../SingleDetails/SingleDetailPage";

const AboutUs = () => {
     const data = useLoaderData();
    //  console.log(data);
    return (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-100 pb-10">
            <h1 className="text-center bg-gradient-to-r from-emerald-100 to-teal-200 p-8 text-green-900 text-xl font-semibold ">"Eat of what is lawful and wholesome on the earth" (2:168)</h1>

            <div className="text-center bg-gradient-to-r from-emerald-100 to-teal-200 pt-2 pb-4 text-green-900">
                <h2 className="text-4xl font-extrabold text-emerald-700 mb-2 tracking-wide">
                    <span className="text-orange-500">Delicious</span> Deals Just for You
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                    Treat yourself to irresistible meals and exclusive café offers — because good food makes every study break better 🍟💚
                </p>

                <div className="flex justify-center mt-4">
                    <div className="w-24 h-1 bg-orange-400 rounded-full"></div>
                </div>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 m-20">

                <Suspense fallback={
                    <span className="loading loading-spinner loading-xl"></span>}>
                    {
                        data.map((d) => <SingleDetailPage key={d._id} d={d}></SingleDetailPage>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default AboutUs;