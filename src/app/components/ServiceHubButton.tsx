import Link from 'next/link';
import BlackGrungeBorder from './BlackGrungeBorder';

function ServiceHubButton({
  label,
  href,
  style,
  customSize
}: {
  label: string,
  href: string,
  style?: React.CSSProperties, // make optional
  customSize?: { width: number, height: number }
}) {
  // Remove fixed width/height
  return (
    <Link href={href} style={{ textDecoration: 'none', width: '100%', height: '100%' }}>
      <div style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
        {/* Black grunge border as background */}
        <div style={{
          position: 'absolute',
          left: 0, top: 0,
          width: '100%', height: '100%',
          zIndex: 1,
        }}>
          <BlackGrungeBorder width="100%" height="100%" />
        </div>
        <span style={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          fontFamily: 'Erstoria',
          fontSize: 28,
          fontWeight: 500,
          textAlign: 'center',
          width: '100%',
          whiteSpace: 'nowrap',
        }}>
          {label}
        </span>
      </div>
    </Link>
  );
}
export default ServiceHubButton;
