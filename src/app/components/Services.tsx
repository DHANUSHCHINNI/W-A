import hubs3 from './Hubs3';
import hubs1 from './Hubs1';
import hubs2 from './Hubs2';
import ServiceHubButton from './ServiceHubButton';
import Asset2 from "./Asset2";
import Asset1 from './Asset1';
import styles from './Services.module.css';

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
              <ServiceHubButton label="Therapy Hub" href="/therapyhub" style={{}} BrushAsset={Asset2} />
            </div>
            <div className={styles.serviceButton} style={{ '--angle': '72deg' } as React.CSSProperties}>
              <ServiceHubButton label="Corporate Hub" href="/corporatehub" style={{}} BrushAsset={hubs1} customSize={{ width: 400, height: 130 }} />
            </div>
            <div className={styles.serviceButton} style={{ '--angle': '144deg' } as React.CSSProperties}>
              <ServiceHubButton label="Training Hub" href="/traininghub" style={{}} BrushAsset={Asset2} />
            </div>
            <div className={styles.serviceButton} style={{ '--angle': '216deg' } as React.CSSProperties}>
              <ServiceHubButton label="Innovation Lab" href="/innovationlab" style={{}} BrushAsset={hubs3} />
            </div>
            <div className={styles.serviceButton} style={{ '--angle': '288deg' } as React.CSSProperties}>
              <ServiceHubButton label="R&D Hub" href="/rnd" style={{}} BrushAsset={hubs2} customSize={{ width: 400, height: 130 }} />
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