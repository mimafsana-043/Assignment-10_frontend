import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const slides = [
    { id: 1, title: 'Find Your Nearest Restaurent', src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80' },
    { id: 2, title: 'Good Food, Good Life', src: 'https://i.ibb.co.com/kV4W2zy4/food-2.jpg' },
    { id: 3, title: 'Enjoy your healthy life', src: 'https://i.ibb.co.com/7xCfgjcQ/food-3.jpg' },
];
const Banner = () => {
    return (

        <div className='flex flex-col md:flex-row items-center justify-around min-h-screen bg-gradient-to-r from-emerald-50 to-teal-100 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 sm:py-8 md:py-10 gap-6 sm:gap-8 md:gap-12 lg:gap-4'>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-4 sm:space-y-6 text-center md:text-left ">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-800 leading-tight">
                    Welcome to <br />
                    <span className="text-teal-600 font-extrabold">RUET Food Club 🍔</span>
                </h1>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-md px-2 sm:px-0">
                    Our student meal deals bring you tasty, halal, and budget-friendly food to keep you energized through your study days. 🍔✨ Enjoy exclusive discounts from partner cafés — because good food fuels smart minds!
                </p>       

            </div>


            <div className="w-full md:w-1/2 px-2 sm:px-0"> {/* left half on md+ */}
                <div className="h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                        style={{ borderRadius: 12, overflow: 'hidden' }}
                    >
                        {slides.map(s => (
                            <SwiperSlide key={s.id}>
                                <div style={{ position: 'relative', width: '100%', height: '280px', '@media (min-width: 640px)': { height: '350px' }, '@media (min-width: 768px)': { height: '420px' } }} className="h-[280px] sm:h-[350px] md:h-[420px]">
                                    <img
                                        src={s.src}
                                        alt={s.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                        onError={(e) => { e.currentTarget.src = '/fallback.jpg'; }}
                                    />

                                    {/* optional overlay text */}
                                    <div style={{
                                        position: 'absolute',
                                        left: 12,
                                        bottom: 12,
                                        color: 'white',
                                        background: 'rgba(0,0,0,0.35)',
                                        padding: '8px 12px',
                                        borderRadius: 8,
                                        maxWidth: '85%'
                                    }} className="sm:left-4 sm:bottom-4 sm:p-3">
                                        <h3 style={{ margin: 0, fontWeight: 700 }} className="text-sm sm:text-base md:text-lg">{s.title}</h3>
                                        <p style={{ margin: 0, opacity: 0.95 }} className="text-xs sm:text-sm hidden sm:block">A healthy outside starts from the inside. – Robert Urich</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>


    );
};

export default Banner;