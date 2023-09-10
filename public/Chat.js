class InteractiveChatbox {
    constructor() {
        this.URL = `https://backend.dev.chatfly.co/api/chat/get-streaming-response`;
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatbox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.chatbox__send--footer'),
        };
        this.icons = {
            isClicked:
                '<svg fill="#9C1DE7" height="29px" width="29px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-6 -6 72.00 72.00" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#9C1DE7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.96"></g><g id="SVGRepo_iconCarrier"> <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z"></path> </g></svg>',
            isNotClicked:
                '<svg fill="#9C1DE7" height="29px" width="29px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-6 -6 72.00 72.00" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#9C1DE7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.96"></g><g id="SVGRepo_iconCarrier"> <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z"></path> </g></svg>',
        };
        this.state = false;
        this.history = [];
    }
    
    async display() {
        const { openButton, chatbox, sendButton } = this.args;

        this.toggleIcon(false, openButton);
        this.toggleState(chatbox);

        openButton.addEventListener('click', () => this.toggleState(chatbox));
        sendButton.addEventListener('click', () => this.onSendButton(chatbox));

        const node = chatbox.querySelector('input');
        node.addEventListener('keyup', ({ key }) => {
            if (key === 'Enter') {
                this.onSendButton(chatbox);
            }
        });
    }

    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async onSendButton(chatbox) {
        let textField = chatbox.querySelector('input');
        let inputText = textField.value;
        textField.value = '';
        if (inputText === '') {
            return;
        }
        this.history.push([inputText, '']);
        this.updateChatBox();

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append(
            'Authorization',
            'Bearer ' + window.chatbotConfig['token'],
        );

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                message: inputText,
                ...window.chatbotConfig,
            }),
        };
        try {
            const response = await fetch(this.URL, requestOptions);

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            const stream = await response.body;
            const reader = stream.getReader();

            for await (const _ of this.asyncGenerator(reader)) {
                // This loop is just for consuming the generator, no need for actual value here.
            }
        } catch (error) {
            console.error('Error:', error);
            textField.value = '';
        }
    }

    async *asyncGenerator(reader) {
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();

            if (done) {
                return;
            }
            const decodedValue = decoder.decode(value);
            await this.sleep(50);
            this.history.slice(-1)[0][1] += decodedValue;
            await this.updateChatBox();
        }
    }

    async updateChatBox() {
        let chat_content = document.querySelector('.chatbox__messages');
        let html = '';
        this.history.forEach((item, idx) => {
            html +=
                '<div class="messages__item messages__item--operator">' +
                item[0] +
                '</div>';
            if (item[1])
                html +=
                    '<div class="messages__item messages__item--visitor">' +
                    item[1] +
                    '</div>';
            else
                html += `<div class="messages__item messages__item--typing">
                        <span class="messages__dot"></span>
                        <span class="messages__dot"></span>
                        <span class="messages__dot"></span>
                    </div>`;
        });
        chat_content.innerHTML = '<div>' + html + '</div>';
    }

    toggleState(chatbox) {
        this.state = !this.state;
        this.showOrHideChatBox(chatbox, this.args.openButton);
    }

    showOrHideChatBox(chatbox, button) {
        chatbox.style.display = chatbox.style.display === 'none' ? '' : 'none';
        if (this.state) {
            chatbox.classList.add('chatbox--active');
            this.toggleIcon(true, button);
        } else if (!this.state) {
            this.toggleIcon(false, button);
        }
    }

    toggleIcon(state, button) {
        const { isClicked, isNotClicked } = this.icons;
        let b = button.children[0].innerHTML;

        if (state) {
            button.children[0].innerHTML = isClicked;
        } else if (!state) {
            button.children[0].innerHTML = isNotClicked;
        }
    }
}

document.body = document.createElement("body");

document.head.innerHTML += `
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap"
        rel="stylesheet">
    <style>
    .chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:absolute;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-top:auto;display:flex;flex-direction:column;overflow-y:scroll;flex-direction:column-reverse}.messages__item{width:fit-content}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg, #581B98 0.52%, #9C1DE7 100%);--secondaryGradient:linear-gradient(268.91deg, #581B98 -2.14%, #9C1DE7 99.69%);--primaryBoxShadow:0px 10px 15px rgba(0, 0, 0, 0.1);--secondaryBoxShadow:0px -10px 15px rgba(0, 0, 0, 0.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.chatbox__support{background:#f9f9f9;height:450px;width:350px;box-shadow:0 0 15px rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px 20px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{height:100%;padding:0 20px}.messages__item{margin-top:10px;background:#e0e0e0;padding:8px 12px;max-width:70%}.messages__item--typing,.messages__item--visitor{border-bottom-right-radius:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:var(--primary);color:#fff}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:20px;background:var(--secondaryGradient);box-shadow:var(--secondaryBoxShadow);border-bottom-right-radius:10px;border-bottom-left-radius:10px;margin-top:20px}.chatbox__footer input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:80%;height:80%}.chatbox__send--footer{color:#fff;cursor:pointer}.chatbox__button button,.chatbox__button button:focus,.chatbox__button button:visited{padding:10px;background:#fff;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0 10px 15px rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px 20px;display:table;margin-right:auto;position:relative;animation:2s ease-out infinite bulge}.messages__item--typing::after,.messages__item--typing::before{content:'';position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0 1px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s infinite blink}@keyframes blink{50%{opacity:1}}@keyframes bulge{50%{transform:scale(1.05)}}
    </style>
`;

const elemDiv = `
    <div class="container">
        <div class="chatbox">
            <div class="chatbox__support">
                <div class="chatbox__messages">
                </div>
                <div class="chatbox__footer">
                    <input type="text" placeholder="Write a message...">
                    <p class="chatbox__send--footer">Send</p>
                </div>
            </div>
            <div class="chatbox__button">
                <button>button</button>
            </div>
        </div>
    </div>
    `;
document.body.innerHTML += elemDiv;

const chatbox = new InteractiveChatbox();
chatbox.display();
