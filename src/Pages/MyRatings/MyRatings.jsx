
const MyRatings = () => {
    return (
        <div className='mt-10 sm:mt-16 md:mt-20 mb-14 sm:mb-20 md:mb-28 flex flex-col items-center px-4'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-amber-800'>My Ratings</h1>
            <p className='text-base sm:text-lg md:text-xl text-center text-amber-600 mt-2'>No Rating Yet</p>
           
            <div className='mt-6 sm:mt-8 md:mt-10 w-full max-w-4xl'>
                {/* Rating cards will be displayed here */}

            </div>  
        </div>
    );
};

export default MyRatings;