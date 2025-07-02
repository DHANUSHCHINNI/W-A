'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import defaultStyles from './Carousel.module.css'; // Default CSS module

// Import your corporate hub images
import corporatehub1 from '../assets/corporatehub1.jpg';
import corporatehub2 from '../assets/corporatehub2.jpg';
import corporatehub3 from '../assets/corporatehub3.jpg';

interface CarouselProps {
    images: any[];
    altPrefix?: string;
    styles?: { [key: string]: string };
}

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: 10, zIndex: 2 }}
            onClick={onClick}
        >
            <FaChevronRight size={32} color="#fff" />
        </div>
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: 10, zIndex: 2 }}
            onClick={onClick}
        >
            <FaChevronLeft size={32} color="#fff" />
        </div>
    );
}

export default function Carousel({ images, altPrefix = 'Image', styles = defaultStyles }: CarouselProps) {
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
        centerPadding: '300px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
