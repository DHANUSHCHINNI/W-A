'use client';
import React from 'react';
import Slider from 'react-slick';
import Image, { StaticImageData } from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import defaultStyles from './Carousel.module.css'; // Default CSS module


interface CarouselProps {
    images: (string | StaticImageData)[];
    altPrefix?: string;
    styles?: { [key: string]: string };
}

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function NextArrow(props: ArrowProps) {
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

function PrevArrow(props: ArrowProps) {
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
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
                                objectFit: 'contain',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
