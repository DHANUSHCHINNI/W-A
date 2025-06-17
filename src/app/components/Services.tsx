import hubs3 from './hubs3';
import hubs1 from './hubs1';
import hubs2 from './hubs2';
import ServiceHubButton from './ServiceHubButton';
import Asset2 from "./Asset2";
import Asset1 from './Asset1';
export default function Services(){
    return(
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
                {/* Hubs */}
                <div style={{
                  width: '100%',
                  maxWidth: 900,
                  height: 500,
                  position: 'relative',
                  margin: '0 auto',
                }}>
                  {/* Top center */}
                  <ServiceHubButton
                    label="Therapy Hub"
                    href="/services/therapy"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '5%',
                      transform: 'translate(-50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={Asset2}
                  />
                  {/* Top left */}
                  <ServiceHubButton
                    label="R&D Hub"
                    href="/services/rd"
                    style={{
                      position: 'absolute',
                      left: '-55%',
                      top: '20%',
                      transform: 'translate(-50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={hubs2}
                  />
                  {/* Top right */}
                  <ServiceHubButton
                    label="Corporate Hub"
                    href="/services/corporate"
                    style={{
                      position: 'absolute',
                      right: '-65%',
                      top: '10%',
                      transform: 'translate(50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={hubs1}
                  />
                  {/* Bottom left */}
                  <ServiceHubButton
                    label="Innovation Lab"
                    href="/services/innovation"
                    style={{
                      position: 'absolute',
                      left: '-15%',
                      bottom: '-30%',
                      transform: 'translate(-50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={hubs3}
                  />
                  {/* Bottom right */}
                  <ServiceHubButton
                    label="Training Hub"
                    href="/services/training"
                    style={{
                      position: 'absolute',
                      right: '-15%',
                      bottom: '-20%',
                      transform: 'translate(50%, 0)',
                    } as React.CSSProperties}
                    BrushAsset={Asset2}
                  />
                </div>
                {/* Services text at top left for services page */}
                <div
                  style={{
                    position: 'absolute',
                    top: 80,
                    left: -500,
                    zIndex: 10,
                    color: '#d1c1b2',
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