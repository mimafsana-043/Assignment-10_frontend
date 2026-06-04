import { Suspense, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Pages/Cards/Card";

const Home = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"))
    const data = useLoaderData();

    useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

    function handleToggle() {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
console.log(theme);
    // console.log(data);
    return (
        <div className={theme === "dark"? "bg-white": `bg-gradient-to-r from-emerald-50 to-teal-100`}>
            <h1 className="text-center bg-gradient-to-r from-emerald-100 to-teal-200 p-4 sm:p-6 md:p-8 text-green-900 text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-4">"Eat of what is lawful and wholesome on the earth" (2:168)</h1>

            <div className="text-center bg-gradient-to-r from-emerald-100 to-teal-200 pt-2 pb-4 text-green-900 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-700 mb-2 tracking-wide">
                    <span className="text-orange-500">Delicious</span> Deals Just for You
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-sm md:text-base px-4">
                    Treat yourself to irresistible meals and exclusive café offers — because good food makes every study break better 🍟💚
                </p>

                <div className="flex justify-center mt-4">
                    <div className="w-24 h-1 bg-orange-400 rounded-full"></div>
                </div>
            </div>
            <Banner className="top-[-32px]"></Banner>

            <h1 className="text-teal-800 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-6 sm:mt-8 mb-6 sm:mb-8 px-4">Our <span className="text-orange-500">Items</span> for you</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 m-4 sm:m-8 md:m-12 lg:m-16 xl:m-20">
                <Suspense fallback={
                    <span className="loading loading-spinner loading-xl"></span>}>
                    {
                        data.map((d) => <Card key={d._id} d={d}></Card>)
                    }
                </Suspense>
            </div>
            <div className="flex justify-center items-center mt-2 px-4">
                <Link to={'/about'}>

                    <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-base sm:text-lg font-semibold hover:opacity-90 transition">
                        Enjoy All Items →
                    </button>

                </Link>
            </div>

            <div className="flex items-center justify-center mt-4 px-4">

                <button onClick={handleToggle} className="btn btn-sm sm:btn-md rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white">change your Theme</button>
            </div>


            <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-16 pb-4 sm:pb-8 px-4">
                <div className="card w-full max-w-4xl bg-base-100 shadow-md bg-gradient-to-r from-yellow-50 to-orange-100">
                    <div className="card-body p-4 sm:p-6 md:p-8 ">
                        <h2 className="card-title text-xl sm:text-2xl md:text-3xl">About Meal Deals for Students</h2>
                        <p className="text-sm sm:text-base">
                            Welcome to <span className="font-semibold">Meal Deals for Students</span> — a platform made to help students eat better on a budget! 🍱
                            We know campus life can be stressful, and sometimes meals get skipped just to save money.
                            That’s why we connect you with <span className="font-semibold">partner cafés, restaurants, and food stalls</span> that offer exclusive student discounts!
                            <br /><br />
                            From “Buy 1 Get 1” burger offers 🍔 to healthy salad combos 🥗,
                            our goal is to keep you full, happy, and energized during study sessions.
                            <br /><br />
                            You can browse <span className="font-semibold">Top Rated Cafes</span>, compare <span className="font-semibold">prices per meal (in BDT)</span>,
                            and even filter by distance to find the nearest affordable spot.
                            <br /><br />
                            Because good food shouldn’t be expensive — it should be smart! 💸
                        </p>
                        <div className="justify-start card-actions">
                            <button className="btn btn-primary btn-sm sm:btn-md">Find Deals Near You</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;