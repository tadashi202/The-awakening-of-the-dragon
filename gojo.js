// Blue Lock Gojo-Style Move Set
const gojoStyleMoves = {
  // 1. Infinity Dribble
  infinityDribble: {
    description: "A dribbling technique that creates the illusion of infinite space between the ball and the opponent, making it nearly impossible to steal.",
    execution: () => {
      console.log("The ball seems untouchable as you weave through defenders!");
    },
  },

  // 2. Limitless Shot
  limitlessShot: {
    description: "A powerful and precise shot that curves unpredictably, making it difficult for goalkeepers to anticipate.",
    execution: (power, accuracy) => {
      console.log(`You unleash a shot with ${power}% power and ${accuracy}% accuracy, leaving the goalkeeper stunned!`);
    },
  },

  // 3. Six Eyes Vision
  sixEyesVision: {
    description: "Enhanced spatial awareness that allows you to predict opponents' movements and intercept passes with ease.",
    execution: () => {
      console.log("You read the field perfectly, intercepting the ball and setting up a counterattack!");
    },
  },

  // 4. Hollow Domain Play
  hollowDomainPlay: {
    description: "A high-risk, high-reward play where you dominate a specific area of the field, overwhelming opponents with skill and control.",
    execution: () => {
      console.log("You take control of the field, leaving opponents unable to keep up with your pace and precision!");
    },
  },

  // 5. Cursed Energy Pass
  cursedEnergyPass: {
    description: "A pass imbued with deceptive spin and speed, making it difficult for defenders to intercept.",
    execution: (spin, speed) => {
      console.log(`You deliver a pass with ${spin} spin and ${speed} speed, perfectly setting up your teammate!`);
    },
  },
};

// Example Usage
gojoStyleMoves.infinityDribble.execution();
gojoStyleMoves.limitlessShot.execution(95, 90);
gojoStyleMoves.sixEyesVision.execution();
gojoStyleMoves.hollowDomainPlay.execution();
gojoStyleMoves.cursedEnergyPass.execution(80, 85);