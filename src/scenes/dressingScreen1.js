import phaserJuice from "../../phaser3-juice-plugin/dist/phaserJuice";
import Phaser from "phaser";
// import Hand from "../ui/handFunction";

export default class DressingScreen1 extends Phaser.Scene {
  constructor() {
    super("dressingScreen1");
  }

  preload() {
    this.load.image("room", "assets/room.webp");
    this.load.image("overlay", "assets/overlay.webp");
    this.load.image("girl_main", "assets/girl_main.webp");
    this.load.image("progressBar", "assets/progressbar_start.webp");
    this.load.image("pinkDress", "assets/pink_dress.webp");
    this.load.image("shorts", "assets/shorts.webp");
    this.load.image("rectangle", "assets/rectangle.webp");
    this.load.image("hand", "assets/hand.webp");
  }

  create() {
    var juice = new phaserJuice(this);
    this.room = this.add.image(300, 450, "room");
    this.overlay = this.add.image(300, 450, "overlay");
    this.girl = this.add.image(300, 500, "girl_main").setScale(1.1);
    this.progressBar = this.add.image(300, 40, "progressBar");

    this.rectangle = this.add.image(150, 700, "rectangle").setScale(0.85);
    this.rectangle1 = this.add.image(450, 700, "rectangle").setScale(0.85);
    this.pinkDress = this.add.image(150, 700, "pinkDress");
    this.shorts = this.add.image(450, 700, "shorts");
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
      this.scene.start("dressingScreen2_1");
    });

    this.rectangle1.setInteractive();
    this.rectangle1.on("pointerdown", () => {
      this.scene.start("dressingScreen2_2");
    });
  }

  update() {}
}
