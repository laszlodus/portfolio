
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
        const interval = setInterval(() => {
            if (this.index < this.text.length) {
                this.message.textContent += this.text[this.index];
                this.index++;
            } else {
                clearInterval(interval);
                
                setTimeout(() => {
                    document.querySelector('.new-background').style.transform = "translateY(0)";
                    this.setColour();
                }, 200);
                
            }
        }, 50);
    }

    setColour() {
        this.message.classList.add('new-color');
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
        this.navBtn.addEventListener('click',() => this.toggleMenu());
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


class Form {
    constructor(textarea, remainCharacter, btn) {
        this.text = textarea;
        this.character = textarea.maxLength;
        this.remain = remainCharacter;
        this.btn = btn;
        
        this.text.addEventListener('input', this.init.bind(this));
    }

    init() {
        const remainC = this.character - this.text.value.length;
        this.remain.textContent = `${remainC} character left!`;
    }
}

const textarea = document.getElementById('message');
const remainCharacter = document.querySelector('.character-number');
const btn = document.querySelector('.btn-send');

const form = new Form(textarea, remainCharacter, btn);


class SendForm {
    constructor(formContainer) {
        this.formCont = formContainer;

        this.formCont.addEventListener('submit', this.init.bind(this));
    }

    async init(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://formspree.io/f/mjvqdqql', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                this.formCont.reset();
                alert('Your message has been sent.');
            } else {
                alert('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error(error.message);
        }
    } 
}

const formContainer = document.querySelector('.form-container');
if (formContainer) new SendForm(formContainer); 

