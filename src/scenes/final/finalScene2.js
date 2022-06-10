import Phaser from "phaser";

export default class FinalScene2 extends Phaser.Scene {
  constructor() {
    super("finalScene2");
  }

  preload() {
    this.load.image("terrace_bgrnd", "assets/terrace_bgrnd.webp");
    this.load.image("play", "assets/play_now_btn.webp");
    this.load.image("text", "assets/Paul_text2.webp");

    this.load.image("girl", "assets/girl_pink_dress_blue_handbag_glasses.webp");
    this.load.image("guy", "assets/guy.webp");
  }

  create() {
    this.beach = this.add.image(310, 450, "terrace_bgrnd");

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
