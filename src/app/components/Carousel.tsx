'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css'; // Import the CSS module

// Import your corporate hub images
import corporatehub1 from '../assets/corporatehub1.jpg';
import corporatehub2 from '../assets/corporatehub2.jpg';
import corporatehub3 from '../assets/corporatehub3.jpg';

interface CarouselProps {
    images: any[];
    altPrefix?: string;
}

export default function Carousel({ images, altPrefix = 'Image' }: CarouselProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: '150px'
    };

    return (
        <div className={styles.carouselWrapper}>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx} className={styles.imageContainer}>
                        <Image
                            src={img}
                            alt={`${altPrefix} ${idx + 1}`}
                            fill
                            style={{
                                objectFit: 'cover',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
