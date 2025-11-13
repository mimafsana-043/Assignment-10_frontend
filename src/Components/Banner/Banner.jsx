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

        <div className='flex flex-col md:flex-row items-center justify-around min-h-screen bg-gradient-to-r from-emerald-50 to-teal-100 px-24 py-10 gap-12 lg:gap-4'>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6 text-center md:text-left ">
                <h1 className="text-6xl font-extrabold text-emerald-800 leading-tight">
                    Welcome to <br />
                    <span className="text-teal-600 font-extrabold">RUET Food Club 🍔</span>
                </h1>
                <p className="text-gray-500 text-md md:text-xl font-light max-w-md ">
                    Our student meal deals bring you tasty, halal, and budget-friendly food to keep you energized through your study days. 🍔✨ Enjoy exclusive discounts from partner cafés — because good food fuels smart minds!
                </p>       

            </div>


            <div className="w-full md:w-1/2 "> {/* left half on md+ */}
                <div className="h-full min-h-[320px]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                        style={{ borderRadius: 12, overflow: 'hidden' }}
                    >
                        {slides.map(s => (
                            <SwiperSlide key={s.id}>
                                <div style={{ position: 'relative', width: '100%', height: '420px' }}>
                                    <img
                                        src={s.src}
                                        alt={s.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                        onError={(e) => { e.currentTarget.src = '/fallback.jpg'; }}
                                    />

                                    {/* optional overlay text */}
                                    <div style={{
                                        position: 'absolute',
                                        left: 18,
                                        bottom: 18,
                                        color: 'white',
                                        background: 'rgba(0,0,0,0.35)',
                                        padding: '10px 14px',
                                        borderRadius: 8,
                                        maxWidth: '85%'
                                    }}>
                                        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{s.title}</h3>
                                        <p style={{ margin: 0, fontSize: 13, opacity: 0.95 }}>A healthy outside starts from the inside. – Robert Urich</p>
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