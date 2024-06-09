import React from 'react';

const Slideshow = ({ images, placeholder }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slideshow-container" style={{ textAlign: 'center' }}>
            <div className="slideshow-image">
                <img
                    src={images.length > 0 ? images[currentIndex] : placeholder}
                    alt="Slideshow"
                    style={{ width: '80%', height: 'auto', maxHeight: '500px' }}
                />
            </div>
            <div className="slideshow-controls">
                <button onClick={prevSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
};

export default Slideshow;
