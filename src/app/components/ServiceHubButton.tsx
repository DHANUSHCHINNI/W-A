import Link from 'next/link';


function ServiceHubButton({ label, href, style, BrushAsset }: { label: string, href: string, style: React.CSSProperties, BrushAsset: React.ComponentType<any> }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        width: 200,
        height: 70,
      }}>
        {/* Brush stroke as background */}
        <div style={{
          position: 'absolute',
          left: 0, top: 0, width: '100%', height: '100%',
          zIndex: 1,
        }}>
          <BrushAsset width={200} height={70} />
        </div>
        <span style={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          fontFamily: 'Erstoria',
          fontSize: 24,
          fontWeight: 500,
          textAlign: 'center',
          width: '100%',
        }}>
          {label}
        </span>
      </div>
    </Link>
  );
}
export default ServiceHubButton;