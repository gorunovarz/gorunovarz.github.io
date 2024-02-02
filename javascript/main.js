const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }

        document.getElementById("btn-section2").onclick = (e) => {
            e.preventDefault();

            document.getElementById("section2").scrollIntoView();
        };

        document.getElementById("btn-section3").onclick = (e) => {
            e.preventDefault();

            document.getElementById("section3").scrollIntoView();
        };

        document.getElementById("btn-section4").onclick = (e) => {
            e.preventDefault();

            document.getElementById("section4").scrollIntoView();
        };

        document.getElementById("btn-section5").onclick = (e) => {
            e.preventDefault();

            document.getElementById("section5").scrollIntoView();
        };
    }
}

btnUp.addEventListener();

function addWelcomeFiles() {
    let links = ["https://fedorsarafanov.github.io/", "https://rf-slf-4x1.github.io", "https://korzhimanov.ru/", ""];
    let welcomeFiles = document.getElementsByClassName("welcome-file");
    if (links.length != welcomeFiles.length)
        throw new Error("Links length not equals welcome files length");

    for (let i = 0; i < links.length; i++) {
        let file = welcomeFiles[i];
        let link = links[i];
        if (link.length == 0)
            continue;

        file.onclick = () => {
            window.open(link);
        };
    }
}

addWelcomeFiles();