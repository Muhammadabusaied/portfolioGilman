import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg max-h-[80vh]">
            <div className="relative flex items-center">
                <button
                    onClick={goToPrevious}
                    className="absolute left-0 z-10 p-2 m-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                >
                    &#10094;
                </button>

                <div
                    className="flex w-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={goToNext}
                    className="absolute right-0 z-10 p-2 m-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                >
                    &#10095;
                </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
