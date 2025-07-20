import { useEffect, useState } from 'react';
import hubs3 from './Hubs3';
import hubs1 from './Hubs1';
import hubs2 from './Hubs2';
import ServiceHubButton from './ServiceHubButton';
import Asset2 from "./Asset2";
import Asset1 from './Asset1';
import styles from './Services.module.css';
import Silhouette1 from './Silhouette1';
import Silhouette2 from './Silhouette2';
import Silhouette6 from './Silhouette6';

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const serviceButtons = [
    { label: 'Therapy Hub', href: '/therapyhub', size: { width: 360, height: 120 } },
    { label: 'Corporate Hub', href: '/corporatehub', size: { width: 480, height: 160 } },
    { label: 'Training Hub', href: '/traininghub', size: { width: 360, height: 120 } },
    { label: 'Innovation Lab', href: '/innovationlab', size: { width: 360, height: 120 } },
    { label: 'R&D Hub', href: '/rnd', size: { width: 480, height: 160 } },
  ];

  return (
    <div
      style={{
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#fff',
      } as React.CSSProperties}
    >
      {/* Silhouettes as background decorations (desktop only) */}
      {!isMobile && (
        <>
          {/* Left silhouette */}
          <Silhouette6 className={undefined} style={{ position: 'absolute', left: 0, top: 180, width: 420, height: 520, opacity: 0.95, zIndex: 0 }} />
          {/* Right silhouette */}
          <Silhouette1 className={undefined} style={{ position: 'absolute', right: 0, top: 180, width: 420, height: 520, opacity: 0.95, zIndex: 0 }} />
        </>
      )}
      <div style={{ marginTop: 100, width: '100%', position: 'relative' }}>
        {/* Center logo (desktop only) */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '72%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          } as React.CSSProperties}>
            <Asset1 width={140} height={140} />
          </div>
        )}
        {/* Conditional rendering for mobile/desktop */}
        {isMobile ? (
          <>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                fontFamily: 'Erstoria',
                fontSize: 28,
                fontWeight: 600,
                color: '#BAB1AB',
                letterSpacing: 1,
                marginBottom: 24,
                marginTop: 0,
                zIndex: 10,
              }}
            >
              Services
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
              marginTop: 0,
              width: '100%',
              zIndex: 3,
            }}>
              {serviceButtons.map((btn, i) => (
                <ServiceHubButton
                  key={btn.label}
                  label={btn.label}
                  href={btn.href}
                  style={{ width: '90vw', maxWidth: 340, height: 70, fontSize: 18 }}
                  customSize={{ width: 340, height: 70 }}
                />
              ))}
            </div>
          </>
        ) : (
          <div className={styles.revolvingContainer} style={{ zIndex: 2, position: 'relative' }}>
            <div className={styles.revolvingButtons}>
              <div className={styles.serviceButton} style={{ '--angle': '0deg' } as React.CSSProperties}>
                <ServiceHubButton label="Therapy Hub" href="/therapyhub" style={{}} customSize={{ width: 360, height: 120 }} />
              </div>
              <div className={styles.serviceButton} style={{ '--angle': '72deg' } as React.CSSProperties}>
                <ServiceHubButton label="Corporate Hub" href="/corporatehub" style={{}} customSize={{ width: 480, height: 160 }} />
              </div>
              <div className={styles.serviceButton} style={{ '--angle': '144deg' } as React.CSSProperties}>
                <ServiceHubButton label="Training Hub" href="/traininghub" style={{}} customSize={{ width: 360, height: 120 }} />
              </div>
              <div className={styles.serviceButton} style={{ '--angle': '216deg' } as React.CSSProperties}>
                <ServiceHubButton label="Innovation Lab" href="/innovationlab" style={{}} customSize={{ width: 360, height: 120 }} />
              </div>
              <div className={styles.serviceButton} style={{ '--angle': '288deg' } as React.CSSProperties}>
                <ServiceHubButton label="R&D Hub" href="/rnd" style={{}} customSize={{ width: 480, height: 160 }} />
              </div>
            </div>
          </div>
        )}
        {/* Services text at top left for services page (desktop only) */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              top: -20,
              left: 80,
              zIndex: 10,
              color: '#BAB1AB',
              fontFamily: 'Erstoria',
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: 1,
            } as React.CSSProperties}
          >
            Services
          </div>
        )}
      </div>
    </div>
  )
}