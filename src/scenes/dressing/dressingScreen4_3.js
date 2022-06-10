import phaserJuice from "../../../phaser3-juice-plugin/dist/phaserJuice";
import Phaser from "phaser";

export default class DressingScreen4_3 extends Phaser.Scene {
  constructor() {
    super("dressingScreen4_3");
  }

  preload() {
    this.load.image("room", "assets/room.webp");

    this.load.image(
      "girl_pink_dress_brown_handbag_glasses",
      "assets/girl_pink_dress_brown_handbag_glasses.webp"
    );
    this.load.image("progressBar_4", "assets/progress_bar_4.webp");

    this.load.image("rectangle", "assets/rectangle.webp");
    this.load.image("hand", "assets/hand.webp");
    this.load.image("beach", "assets/beach_icon.webp");
    this.load.image("terrace", "assets/terrace_icon.webp");
  }

  create() {
    var juice = new phaserJuice(this);
    this.room = this.add.image(300, 450, "room");

    this.girl = this.add
      .image(300, 500, "girl_pink_dress_brown_handbag_glasses")
      .setScale(1.1);
    this.progressBar_4 = this.add.image(300, 40, "progressBar_4");

    this.rectangle = this.add.image(150, 700, "rectangle").setScale(0.85);
    this.rectangle1 = this.add.image(450, 700, "rectangle").setScale(0.85);

    this.glasses = this.add.image(150, 700, "beach");
    this.choker = this.add.image(450, 700, "terrace");
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
      this.scene.start("finalScene5");
    });

    this.rectangle1.setInteractive();
    this.rectangle1.on("pointerdown", () => {
      this.scene.start("finalScene6");
    });
  }
  update() {}
}
