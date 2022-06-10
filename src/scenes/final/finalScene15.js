import Phaser from "phaser";

export default class FinalScene15 extends Phaser.Scene {
  constructor() {
    super("finalScene15");
  }

  preload() {
    this.load.image("beach_bgrnd", "assets/beach_bgrnd.webp");
    this.load.image("play", "assets/play_now_btn.webp");
    this.load.image("text", "assets/Paul_text2.webp");

    this.load.image("girl", "assets/girl_shorts_brown_handbag_neckchain.webp");
    this.load.image("guy", "assets/guy.webp");
  }

  create() {
    this.beach_bgrnd = this.add.image(310, 450, "beach_bgrnd");

    this.guyAppearance();
    this.girlAppearance();
    this.time.delayedCall(1500, () => {
      this.text = this.add.image(300, 500, "text").setScale(0.5);
    });

    this.time.delayedCall(3500, () => {
      this.text.destroy();
    });
    this.time.delayedCall(4000, () => {
      this.play = this.add.image(300, 800, "play").setInteractive();
      this.play.on("pointerdown", this.openExternalLink, this);
    });
  }
  update() {}

  girlAppearance() {
    this.girl = this.add.image(-500, 480, "girl");
    this.tweens.add({
      targets: this.girl,
      x: 150,
      duration: 500,
      ease: "Sine.easeIn",
    });
  }

  guyAppearance() {
    this.guy = this.add.image(1000, 480, "guy").setScale(0.93);
    this.tweens.add({
      targets: this.guy,
      x: 400,
      duration: 500,
      ease: "Sine.easeIn",
    });
  }

  openExternalLink() {
    var url = "https://apps.apple.com/us/app/id1491717191";

    var s = window.open(url, "_blank");

    if (s && s.focus) {
      s.focus();
    } else if (!s) {
      window.location.href = url;
    }
  }
}
