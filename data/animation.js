import styled, {keyframes} from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// actual animations idk

// Bath animation
export const bathAnimation = keyframes`
  0% {transform: translateY(20px);}
  50% {transform: translateY(-20px);}
  100% {transform: translateY(20px);}
`

// Knife bobbing animation
export const breatheAnimation = keyframes`
  0% {transform: scale(1);}
  50% {transform: scale(1.05);}
  100% {transform: scale(1);}
`

// Knife cutting animation
export const cutAnimation = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-20px, 60px);
  }
`

// CO2 shake 
export const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

// Blood gush from slitting throat
export const bloodGush = keyframes`
  100% {
    transform: translate(-50px, 0px);
    opacity: 0;
  }
`
export const bloodGush2 = keyframes`
  100% {
    transform: translate(50px, 0px);
    opacity: 0;
  }
`
export const bloodGushY = keyframes`
  100% {
    transform: translate(0px, -100px);
    opacity: 0;
  }
`

// Defeathering chicken
export const featherFly = keyframes `
  100% {
    transform: rotate(-120deg);
    transform-origin: top left;
    opacity: 0;
  }
`
export const featherFly2 = keyframes `
  100% {
    opacity: 0;
    transform: rotate(60deg);
    transform-origin: top left;
  }
`
export const featherFly3 = keyframes `
  100% {
    transform: rotate(-100deg);
    transform-origin: top left;
    opacity: 0;
  }
`
export const featherFly4 = keyframes `
  100% {
    transform: rotate(180deg);
    transform-origin: top left;
    opacity: 0;
  }
`

// Electric tongs pig
export const electricAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

// Cleaver
export const cleaverAnimation = keyframes`
  0% {
  }
  50% {
    transform-origin: 0% 0%;
    transform: translate(0px, 400px) rotate(-50deg);
  }
  100% {
  }
`

// Head
export const headAnimation = keyframes`
  99% {
    transform: translate(-200px, 50px) rotate(-60deg);
  }
  100% {
    opacity: 0;
  }
`

// Organs
export const intestineAnimation = keyframes`
  100% {
    transform: translate(-400px, 100px);
    opacity: 0
  }
`
export const kidneyAnimation = keyframes`
  100% {
    transform: translate(-400px, 400px);
    opacity: 0
  }
`
export const lungsAnimation = keyframes`
  100% {
    transform: translate(400px, -400px);
    opacity: 0
  }
`
export const heartAnimation = keyframes`
  100% {
    transform: translate(400px, 400px);
    opacity: 0
  }
`
export const liverAnimation = keyframes`
  100% {
    transform: translate(0px, 300px);
    opacity: 0
  }
`

// Pulsing red glow
export const glowAnimation = keyframes`
  50% {
    filter: drop-shadow(2px 2px 8px red);
  }
  100% {
  }
`