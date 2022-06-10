import phaserJuice from "../../phaser3-juice-plugin/dist/phaserJuice";
import Phaser from "phaser";

export default class DressingScreen2_1 extends Phaser.Scene {
  constructor() {
    super("dressingScreen2_1");
  }

  preload() {
    this.load.image("room", "assets/room.webp");
    this.load.image("girl_pink_dress", "assets/girl_pink_dress.webp");
    this.load.image("progressBar_2", "assets/progress_bar_2.webp");
    this.load.image("rectangle", "assets/rectangle.webp");
    this.load.image("hand", "assets/hand.webp");
    this.load.image("blue_handbag", "assets/blue_handbag.webp");
    this.load.image("brown_handbag", "assets/brown_handbag.webp");
  }

  create() {
    var juice = new phaserJuice(this);
    this.room = this.add.image(300, 450, "room");

    this.girl = this.add.image(300, 500, "girl_pink_dress").setScale(1.1);
    this.progressBar_2 = this.add.image(300, 40, "progressBar_2");

    this.rectangle = this.add.image(150, 700, "rectangle").setScale(0.85);
    this.rectangle1 = this.add.image(450, 700, "rectangle").setScale(0.85);

    this.blue_handbag = this.add.image(150, 700, "blue_handbag");
    this.brown_handbag = this.add.image(450, 700, "brown_handbag");
    this.hand = this.add.image(500, 700, "hand");
    this.tweens.add({
      targets: this.hand,
      x: 200,
      duration: 1000,
      ease: "Sine.easeInOut",
      loop: 3,
      yoyo: true,
    });

    this.time.delayedCall(4000, () => {
      this.hand.destroy();
    });
    juice.pulse(this.rectangle);
    juice.pulse(this.rectangle1);

    this.rectangle.setInteractive();
    this.rectangle.on("pointerdown", () => {
      this.scene.start("dressingScreen3_1");
    });

    this.rectangle1.setInteractive();
    this.rectangle1.on("pointerdown", () => {
      this.scene.start("dressingScreen3_2");
    });
  }
  update() {}
}
