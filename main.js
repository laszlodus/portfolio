
// main page background picture load

window.onload = function () {
    const message = document.querySelector('.head-message');
    new HeadMessage(message);
};


// Header message

class HeadMessage {
    constructor(messageElement) {
        this.message = messageElement;
        this.text = "Hello, I'm Laszlo Dus";
        this.index = 0;
        this.init();
    }

    init() {
        this.interval = setInterval(() => {
            if (this.index < this.text.length) {
                this.message.innerHTML += this.text[this.index];
                this.index++;
            } else {
                clearInterval(this.interval);
                
                setTimeout(() => {
                    document.querySelector('.new-background').style.transform = "translateY(0)";
                }, 1200);
            }
        }, 50);
    }
}

// Nav menu

class Menu {
    constructor(navBtn, navMenu) {
        this.navBtn = navBtn;
        this.navMenu = navMenu;
        this.navLinks = navLinks;
        this.activeClass = 'active';
        this.init();
    }

    init() {
        this.navBtn.addEventListener('click',() =>  this.toggleMenu());
        this.navLinks.forEach(links => {
            links.addEventListener('click',() => this.closeMenu());
        });
    }

    toggleMenu() {
        this.navMenu.classList.toggle(this.activeClass);
        this.updateNavBtn();
    }

    closeMenu() {
        this.navMenu.classList.remove(this.activeClass);
        this.updateNavBtn();
    }

    updateNavBtn() {
        if (this.navMenu.classList.contains(this.activeClass)) {
            this.navBtn.innerHTML = '&#10006';
        } else {
            this.navBtn.innerHTML = '&#9776;';
        }
    }
};

const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const menu = new Menu(navBtn, navMenu);






