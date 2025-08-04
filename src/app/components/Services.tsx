import { useEffect, useState } from 'react';
import styles from './Services.module.css';
import buttonStyles2 from './buttons2.module.css';
import SukoonLogo from './SukoonLogo';
import Rahaat from './Rahaat';
import Fillcup from './Fillcup';
import Retreat from './Retreat';
import Link from 'next/link';
import React from 'react';

// Key Offerings data
const keyOfferings = [
  {
    href: '/sukoon',
    icon: <SukoonLogo width={62} height={62} />,
    label: 'Sukoon Subscription',
  },
  {
    href: '/rahaat',
    icon: <Rahaat width={62} height={62} />,
    label: 'Rahaat Subscription',
  },
  {
    href: '/offerings/fillingyourcup',
    icon: <Fillcup width={62} height={62} />,
    label: 'Filling your cup',
  },
  {
    href: '/wellbeingretreats',
    icon: <Retreat width={62} height={62} />,
    label: 'Well-being Retreats',
  },
];

// Services PlanButtons data with descriptions
const serviceButtons = [
  {
    href: '/therapyhub',
    title: 'Therapy Hub',
    button: 'Go to Therapy Hub →',
    description: 'Explore our therapy services for individuals and groups.',
  },
  {
    href: '/corporatehub',
    title: 'Corporate Hub',
    button: 'Go to Corporate Hub →',
    description: 'Well-being solutions for organizations and teams.',
  },
  {
    href: '/traininghub',
    title: 'Training Hub',
    button: 'Go to Training Hub →',
    description: 'Workshops and training for personal and professional growth.',
  },
  {
    href: '/innovationlab',
    title: 'Innovation Lab',
    button: 'Go to Innovation Lab →',
    description: 'Creative projects and research for well-being.',
  },
  {
    href: '/rnd',
    title: 'R&D Hub',
    button: 'Go to R&D Hub →',
    description: 'Research and development in well-being and arts.',
  },
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className={styles.servicesContainer}
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: isMobile
          ? "url('https://res.cloudinary.com/djspsll41/image/upload/v1754164365/servicesPhone_e1xszh.svg')"
          : "url('https://res.cloudinary.com/djspsll41/image/upload/v1754160938/scroll4orange_w1yjxk.svg') center center / cover no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 60,
      }}
    >
      {/* Heading */}
      <div className={styles.servicesHeading}>Services</div>

      {/* Key Offerings Bar */}
      {isMobile ? (
        <div className={styles.keyOfferingsGridMobile}>
          {keyOfferings.map((item, i) => (
            <Link href={item.href} key={i} style={{ textDecoration: 'none' }}>
              <div className={styles.keyOfferingsItem}>
                {item.icon}
                <div className={styles.keyOfferingsLabel}>{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.keyOfferingsBar}>
          {keyOfferings.map((item, i) => (
            <Link href={item.href} key={i} style={{ textDecoration: 'none' }}>
              <div className={styles.keyOfferingsItem}>
                {item.icon}
                <div className={styles.keyOfferingsLabel}>{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
      )}


      {/* Hubs Row */}
      {isMobile ? (
        // MOBILE VIEW: two rows of two cards, then center the fifth below
        <div style={{ width: '100%' }}>
          <div className={styles.hubCardsRowMobile}>
            {[0, 1].map((i) => (
              <Link
                href={serviceButtons[i].href}
                key={i}
                style={{ textDecoration: 'none', flex: 1 }}
              >
                <div className={styles.hubCard}>
                  <h3 className={styles.hubCardTitle}>{serviceButtons[i].title}</h3>
                  <div className={styles.hubCardDescription}>
                    {serviceButtons[i].description}
                  </div>
                  <div className={styles.hubCardButtonWrapper}>
                    <button
                      className={buttonStyles2.myButton2}
                      style={{
                        fontSize: '10px',
                        padding: '0.25rem 0.6rem',
                        minWidth: 'unset',
                        width: 'auto',
                        maxWidth: '100%',
                      }}
                    >
                      {serviceButtons[i].button}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.hubCardsRowMobile}>
            {[2, 3].map((i) => (
              <Link
                href={serviceButtons[i].href}
                key={i}
                style={{ textDecoration: 'none', flex: 1 }}
              >
                <div className={styles.hubCard}>
                  <h3 className={styles.hubCardTitle}>{serviceButtons[i].title}</h3>
                  <div className={styles.hubCardDescription}>
                    {serviceButtons[i].description}
                  </div>
                  <div className={styles.hubCardButtonWrapper}>
                    <button
                      className={buttonStyles2.myButton2}
                      style={{
                        fontSize: '10px',
                        padding: '0.25rem 0.6rem',
                        minWidth: 'unset',
                        width: 'auto',
                        maxWidth: '100%',
                      }}
                    >
                      {serviceButtons[i].button}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 8,
              marginBottom: 28
            }}
          >
            <Link
              href={serviceButtons[4].href}
              style={{ textDecoration: 'none', flex: 1, maxWidth: 200, minWidth: 0 }}
            >
              <div className={styles.hubCard}>
                <h3 className={styles.hubCardTitle}>
                  {serviceButtons[4].title}
                </h3>
                <div className={styles.hubCardDescription}>
                  {serviceButtons[4].description}
                </div>
                <div className={styles.hubCardButtonWrapper}>
                  <button
                    className={buttonStyles2.myButton2}
                    style={{
                      fontSize: '10px',
                      padding: '0.25rem 0.6rem',
                      minWidth: 'unset',
                      width: 'auto',
                      maxWidth: '100%',
                    }}
                  >
                    {serviceButtons[4].button}
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        // DESKTOP/WEB: original row layout
        <div className={styles.hubCardsRow}>
          {serviceButtons.map((item, idx) => (
            <Link href={item.href} key={idx} style={{ textDecoration: 'none', flex: 1 }}>
              <div className={styles.hubCard}>
                <h3 className={styles.hubCardTitle}>{item.title}</h3>
                <div className={styles.hubCardDescription}>{item.description}</div>
                <div className={styles.hubCardButtonWrapper}>
                  <button
                    className={buttonStyles2.myButton2}
                    style={{
                      fontSize: '16px',
                      padding: '0.32rem 0.8rem',
                      minWidth: 'unset',
                      width: 'auto',
                      maxWidth: '100%',
                    }}
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
}
