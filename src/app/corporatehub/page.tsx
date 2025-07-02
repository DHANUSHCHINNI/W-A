import React from 'react';
import Navbar from '../components/navbar';
import styles from './corporate.module.css';
import { corporateTextHeading, corporateTextBody } from './corporateText';
import Carousel from '../components/Carousel';
import Carousel2Styles from '../components/Carousel2.module.css';
import corporatehub1 from '../assets/corporatehub1.jpg';
import corporatehub2 from '../assets/corporatehub2.jpg';
import corporatehub3 from '../assets/corporatehub3.jpg';
import corporatehub7 from '../assets/CorporateHub7.jpg';

const images = [corporatehub1, corporatehub2, corporatehub3, corporatehub7];

export default function CorporateHubPage() {
    return (
        <div className={styles.rndBackground}>
            <Navbar show={true} />
            {/* Video header section */}
            <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' } as React.CSSProperties}>
                <video
                    src="/painting.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    background: 'rgba(46, 26, 19, 0.3)'
                } as React.CSSProperties}>
                    <h1 className={styles.rndHeading}>Corporate Hub</h1>
                </div>
            </div>
            <div className={styles.rndContainer}>
                <div className={styles.contentWrapper}>
                    <div style={{ fontFamily: 'Erstoria, serif', fontSize: '2.3rem', color: '#BAB1AB', marginBottom: '3.5rem', marginTop: '3rem', fontWeight: 350 }}>
                        {corporateTextHeading}
                    </div>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <Carousel images={images} altPrefix="Corporate Hub Image" styles={Carousel2Styles} />
                    </div>
                    <div style={{ fontFamily: 'PT Serif, serif', fontSize: '1.7rem', color: '#BAB1AB' }}>
                        {corporateTextBody}
                    </div>
                </div>
            </div>
        </div>
    );
} 