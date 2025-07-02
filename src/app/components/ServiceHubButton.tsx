import Link from 'next/link';

function ServiceHubButton({
  label,
  href,
  style,
  BrushAsset,
  customSize
}: {
  label: string,
  href: string,
  style: React.CSSProperties,
  BrushAsset: React.ComponentType<any>,
  customSize?: { width: number, height: number }
}) {
  const width = customSize?.width || 300;
  const height = customSize?.height || 100;

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        width,
        height,
      }}>
        {/* Brush stroke as background */}
        <div style={{
          position: 'absolute',
          left: 0, top: 0, width: '100%', height: '100%',
          zIndex: 1,
        }}>
          <BrushAsset width={width} height={height} />
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