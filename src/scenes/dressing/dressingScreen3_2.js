import phaserJuice from "../../../phaser3-juice-plugin/dist/phaserJuice";
import Phaser from "phaser";

export default class DressingScreen3_2 extends Phaser.Scene {
  constructor() {
    super("dressingScreen3_2");
  }

  preload() {
    this.load.image("room", "assets/room.webp");

    this.load.image(
      "girl_pink_dress_brown_handbag",
      "assets/girl_pink_dress_brown_handbag.webp"
    );
    this.load.image("progressBar_3", "assets/progress_bar_3.webp");
    this.load.image("rectangle", "assets/rectangle.webp");
    this.load.image("hand", "assets/hand.webp");
    this.load.image("choker", "assets/choker.webp");
    this.load.image("glasses", "assets/glasses.webp");
  }

  create() {
    var juice = new phaserJuice(this);
    this.room = this.add.image(300, 450, "room");

    this.girl = this.add
      .image(300, 500, "girl_pink_dress_brown_handbag")
      .setScale(1.1);
    this.progressBar_3 = this.add.image(300, 40, "progressBar_3");

    this.rectangle = this.add.image(150, 700, "rectangle").setScale(0.85);
    this.rectangle1 = this.add.image(450, 700, "rectangle").setScale(0.85);

    this.glasses = this.add.image(150, 700, "glasses");
    this.choker = this.add.image(450, 700, "choker");
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
      this.scene.start("dressingScreen4_3");
    });

    this.rectangle1.setInteractive();
    this.rectangle1.on("pointerdown", () => {
      this.scene.start("dressingScreen4_4");
    });
  }
  update() {}
}
