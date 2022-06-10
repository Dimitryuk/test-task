import Phaser from "phaser";
import phaserJuice from "../../phaser3-juice-plugin/dist/phaserJuice";

export default class Intro extends Phaser.Scene {
  constructor() {
    super("intro");
  }
  preload() {
    this.load.image("room", "assets/room.webp");
    this.load.image("overlay", "assets/overlay.webp");
    this.load.image("girl_intro", "assets/girl_intro.webp");

    this.load.image("guy", "assets/guy.webp");
    this.load.image("Paul_text", "assets/Paul_text.webp");
    this.load.image("Paul_text2", "assets/Paul_text2.webp");
    this.load.image("Lexi_text", "assets/Lexi_text.webp");
    // this.load.audio("music", "[game_music.mp3]");
  }

  create() {
    // this.sound.add("music", { loop: false });
    this.room = this.add.image(300, 450, "room");
    this.overlay = this.add.image(300, 450, "overlay");
    this.guyAppearance();

    this.time.delayedCall(2600, () => {
      this.girlAppearance();
    });
  }
  update() {}

  guyAppearance() {
    var juice = new phaserJuice(this);
    this.guy = this.add.image(300, 450, "guy");
    this.tweens.add({
      targets: this.guy,
      scaleX: 0.99,
      scaleY: 1.01,
      yoyo: true,
      repeat: -1,
      ease: "Quad.easeOut",
    });

    this.time.delayedCall(2000, () => {
      this.tweens.add({
        targets: this.guy,
        x: 1000,
        duration: 1000,
        ease: "Sine.easeOut",
      });
    });
    this.time.delayedCall(500, () => {
      this.guyText = this.add.image(300, 550, "Paul_text").setScale(0.4);
    });
    juice.fadeOut(this.guyText);

    this.time.delayedCall(2500, () => {
      this.itemDestroy(this.guy, this.guyText);
    });
  }

  girlAppearance() {
    this.girl = this.add.image(-500, 450, "girl_intro");
    this.tweens.add({
      targets: this.girl,
      x: 350,
      duration: 500,
      ease: "Sine.easeIn",
    });
    this.tweens.add({
      targets: this.girl,
      scaleX: 0.99,
      scaleY: 1.01,
      yoyo: true,
      repeat: -1,
      ease: "Quad.easeOut",
    });
    this.time.delayedCall(1000, () => {
      this.girlText = this.add.image(300, 550, "Lexi_text");
    });

    this.time.delayedCall(2500, () => {
      this.itemDestroy(this.girl, this.girlText);
      this.scene.start("dressingScreen1");
    });
  }

  itemDestroy(char, text) {
    char.destroy();
    text.destroy();
  }
}
