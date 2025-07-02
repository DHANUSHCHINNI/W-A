/* import hubs3 from './Hubs3';
import hubs1 from './Hubs1';
import hubs2 from './Hubs2';
import ServiceHubButton from './ServiceHubButton';
import Asset2 from "./Asset2";
import Asset1 from './Asset1';
import BlackGrungeBorder from './BlackGrungeBorder';
import React from 'react';

const HUBS = [
    { label: 'Therapy Hub', href: '/therapyhub', orbit: 0, angle: 270 },
    { label: 'R&D Hub', href: '/rnd', orbit: 1, angle: 126 },
    { label: 'Corporate Hub', href: '/corporatehub', orbit: 1, angle: 18 },
    { label: 'Innovation Lab', href: '/innovationlab', orbit: 2, angle: 198 },
    { label: 'Training Hub', href: '/traininghub', orbit: 2, angle: 342 },
];

const ORBIT_RADII = [150, 220, 300];
// CENTER is the middle of the SVG/canvas
const CENTER = 400;
const PLANET_SIZE = 140;

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
                overflow: 'hidden',
            } as React.CSSProperties}
        >
            <style>{`
        @keyframes orbit1 { 100% { transform: rotate(360deg); } }
        @keyframes orbit2 { 100% { transform: rotate(360deg); } }
        @keyframes orbit3 { 100% { transform: rotate(360deg); } }
      `}</style>
=            <div
                style={{
                    position: 'relative',
                    width: 800,
                    height: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                    boxShadow: 'none',
                    marginTop: 5,
                }}
            >
                // {/* SVG Orbits */ //}
/* <svg
     width={800}
     height={800}
     viewBox="0 0 800 800"
     style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, background: 'transparent' }}
 >
     <circle cx={CENTER} cy={CENTER} r={ORBIT_RADII[0]} stroke="#E0E0E0" strokeWidth={3} fill="none" />
     <circle cx={CENTER} cy={CENTER} r={ORBIT_RADII[1]} stroke="#E0E0E0" strokeWidth={3} fill="none" />
     <circle cx={CENTER} cy={CENTER} r={ORBIT_RADII[2]} stroke="#E0E0E0" strokeWidth={3} fill="none" />
 </svg>
 //{/* Sun/Logo in the center *///}
/*  <div
      style={{
          position: 'absolute',
          left: CENTER,
          top: CENTER,
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
      }}
  >
      <Asset1 width={140} height={140} />
  </div>
   //{/* Animated Hub Buttons *///}
{/* Therapy Hub - orbit 1, 0deg offset */ }
/* <div
     style={{
         position: 'absolute',
         left: CENTER,
         top: CENTER,
         width: 0,
         height: 0,
         zIndex: 3,
         transform: 'translate(-50%, -50%) rotate(0deg)',
         animation: 'orbit1 12s linear infinite',
         transformOrigin: '50% 50%',
     }}
 >
     <ServiceHubButton
         label="Therapy Hub"
         href="/therapyhub"
         BrushAsset={BlackGrungeBorder}
         customSize={{ width: PLANET_SIZE, height: PLANET_SIZE }}
         style={{
             position: 'absolute',
             left: 0,
             top: -ORBIT_RADII[0],
             transform: 'translate(-50%, -50%) rotate(0deg)',
             background: 'transparent',
         }}
     />
 </div>
//  {/* R&D Hub - orbit 2, 72deg offset *///}
/*  <div
      style={{
          position: 'absolute',
          left: CENTER,
          top: CENTER,
          width: 0,
          height: 0,
          zIndex: 3,
          transform: 'translate(-50%, -50%) rotate(72deg)',
          animation: 'orbit2 18s linear infinite',
          transformOrigin: '50% 50%',
      }}
  >
      <ServiceHubButton
          label="R&D Hub"
          href="/rnd"
          BrushAsset={BlackGrungeBorder}
          customSize={{ width: PLANET_SIZE, height: PLANET_SIZE }}
          style={{
              position: 'absolute',
              left: 0,
              top: -ORBIT_RADII[1],
              transform: 'translate(-50%, -50%) rotate(0deg)',
              background: 'transparent',
          }}
      />
  </div>
  //{/* Corporate Hub - orbit 2, 216deg offset *///}
/*   <div
       style={{
           position: 'absolute',
           left: CENTER,
           top: CENTER,
           width: 0,
           height: 0,
           zIndex: 3,
           transform: 'translate(-50%, -50%) rotate(216deg)',
           animation: 'orbit2 18s linear infinite',
           transformOrigin: '50% 50%',
       }}
   >
       <ServiceHubButton
           label="Corporate Hub"
           href="/corporatehub"
           BrushAsset={BlackGrungeBorder}
           customSize={{ width: PLANET_SIZE, height: PLANET_SIZE }}
           style={{
               position: 'absolute',
               left: 0,
               top: -ORBIT_RADII[1],
               transform: 'translate(-50%, -50%) rotate(0deg)',
               background: 'transparent',
           }}
       />
   </div>
   //{/* Innovation Lab - orbit 3, 144deg offset *///}
/*   <div
       style={{
           position: 'absolute',
           left: CENTER,
           top: CENTER,
           width: 0,
           height: 0,
           zIndex: 3,
           transform: 'translate(-50%, -50%) rotate(144deg)',
           animation: 'orbit3 24s linear infinite',
           transformOrigin: '50% 50%',
       }}
   >
       <ServiceHubButton
           label="Innovation Lab"
           href="/innovationlab"
           BrushAsset={BlackGrungeBorder}
           customSize={{ width: PLANET_SIZE, height: PLANET_SIZE }}
           style={{
               position: 'absolute',
               left: 0,
               top: -ORBIT_RADII[2],
               transform: 'translate(-50%, -50%) rotate(0deg)',
               background: 'transparent',
           }}
       />
   </div>
   //{/* Training Hub - orbit 3, 288deg offset *///}
/*    <div
        style={{
            position: 'absolute',
            left: CENTER,
            top: CENTER,
            width: 0,
            height: 0,
            zIndex: 3,
            transform: 'translate(-50%, -50%) rotate(288deg)',
            animation: 'orbit3 24s linear infinite',
            transformOrigin: '50% 50%',
        }}
    >
        <ServiceHubButton
            label="Training Hub"
            href="/traininghub"
            BrushAsset={BlackGrungeBorder}
            customSize={{ width: PLANET_SIZE, height: PLANET_SIZE }}
            style={{
                position: 'absolute',
                left: 0,
                top: -ORBIT_RADII[2],
                transform: 'translate(-50%, -50%) rotate(0deg)',
                background: 'transparent',
            }}
        />
    </div>
</div>
</div>
);
} */