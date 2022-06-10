import Phaser from "phaser";

import Intro from "./scenes/Intro";
import DressingScreen1 from "./scenes/dressing/dressingScreen1";
import DressingScreen2_1 from "./scenes/dressing/dressingScreen2_1";
import DressingScreen2_2 from "./scenes/dressing/dressingScreen2_2";
import DressingScreen3_2 from "./scenes/dressing/dressingScreen3_2";
import DressingScreen3_3 from "./scenes/dressing/dressingScreen3_3";
import DressingScreen3_4 from "./scenes/dressing/dressingScreen3_4";
import DressingScreen3_1 from "./scenes/dressing/dressingScreen3_1";
import DressingScreen4_1 from "./scenes/dressing/dressingScreen4_1";
import DressingScreen4_2 from "./scenes/dressing/dressingScreen4_2";
import DressingScreen4_3 from "./scenes/dressing/dressingScreen4_3";
import DressingScreen4_4 from "./scenes/dressing/dressingScreen4_4";
import DressingScreen4_5 from "./scenes/dressing/dressingScreen4_5";
import DressingScreen4_6 from "./scenes/dressing/dressingScreen4_6";
import DressingScreen4_7 from "./scenes/dressing/dressingScreen4_7";
import DressingScreen4_8 from "./scenes/dressing/dressingScreen4_8";
import FinalScene1 from "./scenes/final/finalScene1";
import FinalScene2 from "./scenes/final/finalScene2";
import FinalScene3 from "./scenes/final/finalScene3";
import FinalScene4 from "./scenes/final/finalScene4";
import FinalScene5 from "./scenes/final/finalScene5";
import FinalScene6 from "./scenes/final/finalScene6";
import FinalScene7 from "./scenes/final/finalScene7";
import FinalScene8 from "./scenes/final/finalScene8";
import FinalScene9 from "./scenes/final/finalScene9";
import FinalScene10 from "./scenes/final/finalScene10";
import FinalScene11 from "./scenes/final/finalScene11";
import FinalScene12 from "./scenes/final/finalScene12";
import FinalScene13 from "./scenes/final/finalScene13";
import FinalScene14 from "./scenes/final/finalScene14";
import FinalScene15 from "./scenes/final/finalScene15";
import FinalScene16 from "./scenes/final/finalScene16";

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 900,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },

  scene: [
    Intro,
    DressingScreen1,
    DressingScreen2_1,
    DressingScreen2_2,
    DressingScreen3_1,
    DressingScreen3_2,
    DressingScreen3_3,
    DressingScreen3_4,
    DressingScreen4_1,
    DressingScreen4_2,
    DressingScreen4_3,
    DressingScreen4_4,
    DressingScreen4_5,
    DressingScreen4_6,
    DressingScreen4_7,
    DressingScreen4_8,
    FinalScene1,
    FinalScene2,
    FinalScene3,
    FinalScene4,
    FinalScene5,
    FinalScene6,
    FinalScene7,
    FinalScene8,
    FinalScene9,
    FinalScene10,
    FinalScene11,
    FinalScene12,
    FinalScene13,
    FinalScene14,
    FinalScene15,
    FinalScene16,
  ],
};

export default new Phaser.Game(config);
