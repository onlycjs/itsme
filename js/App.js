class App {
    constructor() {
        let list = document.querySelectorAll(".card");

        this.cardList = [];

        list.forEach(x => {
            let p = x.dataset.percent;
            let c = x.querySelector("canvas");
            this.cardList.push(new Card(c, p));
        });

        this.isDrawed = false;
        this.p = document.querySelector("#infographic");
        window.addEventListener("scroll", this.scrollHandle.bind(this));
    }

    scrollHandle(e) {
        if (window.scrollY + window.innerHeight >= this.p.offsetTop && !this.isDrawed) {
            this.draw();
            this.isDrawed = true;
        }
    }

    draw() {
        this.cardList.forEach(x => x.start());
    }
}

window.addEventListener("load", function() {
    let app = new App();
    console.log("앱 스타팅");
});