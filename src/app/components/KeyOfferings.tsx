import Rahaat from './Rahaat';
import Retreat from './Retreat';
import Sukoon from './Sukoon';
import Fillcup from './Fillcup';
import Link from 'next/link';

export default function KeyOfferings() {
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
        color: '#B1ABAB',
      } as React.CSSProperties}
    >
      {/* Heading absolutely positioned at top left of the website */}
      <div
        style={{
          position: 'absolute',
          top: 75, // adjust as needed
          left: 170, // adjust as needed
          fontFamily: 'Erstoria',
          fontSize: 40,
          fontWeight: 500,
          color: '#BAB1AB',
          letterSpacing: 1,
          textAlign: 'left',
          zIndex: 20,
        } as React.CSSProperties}
      >
        Key offerings
      </div>
      {/* The gray box with only the icons row */}
      <div
        style={{
          marginTop: 60,
          width: '100vw',
          maxWidth: '100vw',
          marginLeft: 0,
          marginRight: 0,
          background: '#B1ABAB',
          borderRadius: 0, // sharp corners
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '3.5rem 2.5rem 3.5rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        } as React.CSSProperties}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1000,
          gap: '2.5rem',
        }}>
          <Link href="/offerings/sukoon" style={{ textDecoration: 'none', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: 10,
                padding: '1.2rem 0.5rem',
                transition: 'background 0.2s, box-shadow 0.2s',
                background: '#B1ABAB',
              } as React.CSSProperties}
              onMouseOver={e => e.currentTarget.style.background = '#d1c1b2'}
              onMouseOut={e => e.currentTarget.style.background = '#B1ABAB'}
            >
              <Sukoon width={90} height={90} />
              <div style={{ marginTop: 18, fontFamily: 'Erstoria', fontSize: 20, color: '#83351b', fontWeight: 500, textAlign: 'center' }}>
                Sukoon Subscription
              </div>
            </div>
          </Link>
          <Link href="/offerings/rahaat" style={{ textDecoration: 'none', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: 10,
                padding: '1.2rem 0.5rem',
                transition: 'background 0.2s, box-shadow 0.2s',
                background: '#B1ABAB',
              } as React.CSSProperties}
              onMouseOver={e => e.currentTarget.style.background = '#d1c1b2'}
              onMouseOut={e => e.currentTarget.style.background = '#B1ABAB'}
            >
              <Rahaat width={90} height={90} />
              <div style={{ marginTop: 18, fontFamily: 'Erstoria', fontSize: 20, color: '#83351b', fontWeight: 500, textAlign: 'center' }}>
                Rahaat Subscription
              </div>
            </div>
          </Link>
          <Link href="/offerings/filling-your-cup" style={{ textDecoration: 'none', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: 10,
                padding: '1.2rem 0.5rem',
                transition: 'background 0.2s, box-shadow 0.2s',
                background: '#B1ABAB',
              } as React.CSSProperties}
              onMouseOver={e => e.currentTarget.style.background = '#d1c1b2'}
              onMouseOut={e => e.currentTarget.style.background = '#B1ABAB'}
            >
              <Fillcup width={90} height={90} />
              <div style={{ marginTop: 18, fontFamily: 'Erstoria', fontSize: 20, color: '#83351b', fontWeight: 500, textAlign: 'center' }}>
                Filling your cup
              </div>
            </div>
          </Link>
          <Link href="/offerings/retreats" style={{ textDecoration: 'none', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: 10,
                padding: '1.2rem 0.5rem',
                transition: 'background 0.2s, box-shadow 0.2s',
                background: '#B1ABAB',
              } as React.CSSProperties}
              onMouseOver={e => e.currentTarget.style.background = '#d1c1b2'}
              onMouseOut={e => e.currentTarget.style.background = '#B1ABAB'}
            >
              <Retreat width={90} height={90} />
              <div style={{ marginTop: 18, fontFamily: 'Erstoria', fontSize: 20, color: '#83351b', fontWeight: 500, textAlign: 'center' }}>
                Well-being Retreats
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}