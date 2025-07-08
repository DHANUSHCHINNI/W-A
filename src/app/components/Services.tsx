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
      {/* Silhouettes as background decorations */}
      <Silhouette1 className={undefined} style={{ position: 'absolute', left: 490, top: 120, width: 720, height: 620, opacity: 0.95, zIndex: 0 }} />

      <Silhouette6 className={undefined} style={{ position: 'absolute', left: -600, top: 200, width: 720, height: 620, opacity: 0.95, zIndex: 0 }} />
      <div style={{ marginTop: 100, width: '100%' }}>
        {/* Center logo */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        } as React.CSSProperties}>
          <Asset1 width={140} height={140} />
        </div>
        {/* Revolving Hubs */}
        <div className={styles.revolvingContainer}>
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
        {/* Services text at top left for services page */}
        <div
          style={{
            position: 'absolute',
            top: 100,
            left: -340,
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
      </div>
    </div>
  )
}