class InteractiveChatbox {
  constructor() {
    this.baseUrl = 'https://backend.chatfly.co/api';
    this.getStreamingResponseUrl = `${this.baseUrl}/chat/get-streaming-response`;
    this.getBotWidgetSettingUrl = `${this.baseUrl}/bot/bot-widget-setting`;
    this.args = {
      openButton: document.querySelector('.chatbox__button'),
      chatbox: document.querySelector('.chatbox__support'),
      sendButton: document.querySelector('.chatbox__send--footer'),
      header: document.querySelector('.chatbot__header'),
      message_suggest: document.querySelector('.chatbot__suggest'),
    };
    this.icons = {
      isClicked: undefined, // Fill on updateChatIcons
      isNotClicked: undefined, // Fill on updateChatIcons
      iconSend: undefined, // Fill on updateChatIcons
      iconClose:
        '<svg fill="#E04F5F" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"/> </g> </svg>',
      iconRefresh:
        '<svg fill="#2274DD" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1C3.91015 1 1 3.91015 1 7.5H0C0 3.35786 3.35786 0 7.5 0C9.6733 0 11.6308 0.924852 13 2.40095V0H14V4L10 4V3L12.1905 3C11.007 1.76671 9.34315 1 7.5 1ZM7.5 14C11.0899 14 14 11.0899 14 7.5H15C15 11.6421 11.6421 15 7.5 15C5.3267 15 3.36918 14.0751 2 12.599V15H1V11H5V12H2.80955C3.993 13.2333 5.65685 14 7.5 14Z" fill="#2274DD"/> </svg>',
    };
    this.state = false;
    this.history = [];
  }

  async display() {
    await this.syncChatWidgetStyling();
    const { openButton, chatbox, sendButton } = this.args;
    const { iconSend } = this.icons;
    this.toggleIcon(false, openButton);
    this.toggleState(chatbox);
    openButton.addEventListener('click', () => this.toggleState(chatbox));
    sendButton.addEventListener('click', () => this.onSendButton(chatbox));
    sendButton.innerHTML = '<div>' + iconSend + '</div>';

    const node = chatbox.querySelector('input');
    node.addEventListener('keyup', ({ key }) => {
      if (key === 'Enter') {
        this.onSendButton(chatbox);
      }
    });
  }

  async syncChatWidgetStyling() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer ' + window.chatbotConfig['token'],
    );
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    try {
      const response = await fetch(
        `${this.getBotWidgetSettingUrl}?bot_id=${window.chatbotConfig.bot_id}`,
        requestOptions,
      );
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      this.setStyle(data);
      await this.updateChatIcons(data);
      this.updateSuggestedMessages(data);
      this.updateHeader(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  updateHeader(data) {
    const { header } = this.args;
    const { iconRefresh, iconClose } = this.icons;
    const leftSlot = document.createElement('div');
    leftSlot.className = 'icon_header';
    if (data.bot_avatar_url) {
      const botAvatar = document.createElement('img');
      botAvatar.src = data.bot_avatar_url;
      botAvatar.className = 'bot_avatar';
      leftSlot.appendChild(botAvatar);
    }
    if (data.display_name) {
      leftSlot.innerHTML += data.display_name;
    }
    header.appendChild(leftSlot);
    header.innerHTML +=
      '<div class="icon_header">' + iconRefresh + iconClose + '</div>';
  }

  updateSuggestedMessages(data) {
    const { suggest_messages } = data;
    const { message_suggest } = this.args;
    (suggest_messages ?? []).forEach((message) => {
      const messageElement = document.createElement('div');
      messageElement.className = 'chatbot__suggest--item';
      messageElement.textContent = message;
      message_suggest.appendChild(messageElement);
    });
  }

  async updateChatIcons(data) {
    this.icons.isClicked = document.createElement('img');
    this.icons.isNotClicked = document.createElement('img');
    this.icons.iconSend = `<svg fill=${
      data.chat_message_color ? `"${data.chat_message_color}"` : '#000000'
    } width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="22" height="22" fill="none"/><path d="M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z"/></svg>`;
    if (data.chat_icon_url) {
      this.icons.isClicked.src = data.chat_icon_url;
      this.icons.isNotClicked.src = data.chat_icon_url;
    } else {
      this.icons.isClicked.src = `https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg`;
      this.icons.isNotClicked.src = `https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg`;
    }
  }

  /**
   * Replace placeholders in template with by pattern {{placeholder}}
   * Example:
   * const template = `.button {text-align: {{textAlignment}}}`
   * const value = {textAlignment: left}
   * @param data
   */
  setStyle(data) {
    const {
      theme,
      chat_bubble_button_color,
      align_chat_bubble_button,
      chat_message_color,
      suggest_messages,
    } = data;
    const template = `.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg, #581B98 0.52%, #9C1DE7 100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px 10px 15px rgba(0, 0, 0, 0.1);--secondaryBoxShadow:0px -10px 15px rgba(0, 0, 0, 0.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;background:{{chatBoxBackgroundColor}};height:500px;width:350px;box-shadow:0 0 15px rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px 20px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{height:100%;padding:0 10px}.messages__item{margin-top:10px;padding:8px 12px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items: end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{height:{{suggestedMessagesHeight}};display:flex;overflow-x:auto;column-gap:10px;padding:10px 10px 0}.chatbot__suggest--item{height:100%;padding:0 15px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px 10px 15px;border:1px solid {{chatInputBorderColor}};border-radius:5px;}.chatbox__footer input{background-color: inherit;color: {{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px solid {{chatBoxHeaderBorderColor}};padding-top:5px;margin:0 20px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit: cover}.icon_header{display:flex;align-items:center;cursor: pointer;column-gap:10px;}.chatbox__footer input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button button,.chatbox__button button:focus,.chatbox__button button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0 10px 15px rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px 20px;display:table;margin-right:auto;position:relative;animation:2s ease-out infinite bulge}.messages__item--typing::after,.messages__item--typing::before{content:'';position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0 1px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s infinite blink}@keyframes blink{50%{opacity:1}}@keyframes bulge{50%{transform:scale(1.05)}}`;
    const value = {
      chatButtonAlignment: align_chat_bubble_button ?? 'right',
      chatBoxAlignment: align_chat_bubble_button ?? 'right',
      chatButtonDirection:
        align_chat_bubble_button === 'left' ? 'right' : 'left',
      chatButtonColor: chat_bubble_button_color ?? '#fff',
      chatBoxBackgroundColor: theme === 'dark' ? '#111827' : '#fff',
      chatInputBorderColor: theme === 'dark' ? '#cdceed' : '#0000004a',
      chatBoxHeaderBorderColor: theme === 'dark' ? '#cdceed' : '#0000004a',
      chatInputColor: theme === 'dark' ? '#fff' : '#inherit',
      chatBoxDisplayNameColor: theme === 'dark' ? '#fff' : 'inherit',
      messageItemOperatorBackgroundColor: chat_message_color ?? '#3399FF',
      suggestedMessagesHeight: suggest_messages?.length ? '60px' : '0px',
    };
    const style = document.createElement('style');
    style.textContent = template.replace(
      /{{([^}]+)}}/g,
      (match, key) => value[key],
    );
    document.head.append(style);
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
      const response = await fetch(
        this.getStreamingResponseUrl,
        requestOptions,
      );
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
    const buttonElement = button.firstElementChild;
    const buttonIcon = buttonElement.firstElementChild;
    buttonElement.replaceChild(state ? isClicked : isNotClicked, buttonIcon);
  }
}
document.body = document.createElement('body');
document.head.innerHTML += `
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap"
        rel="stylesheet">
  `;
const elemDiv = `
    <div class="container">
        <div class="chatbox">
            <div class="chatbox__support">
                <div class="chatbot__header">
                </div>
                <div class="chatbox__messages">
                </div>
                <div class="chatbot__suggest">
                </div>
                <div class="chatbox__footer">
                    <input type="text" placeholder="Type your message...">
                    <p class="chatbox__send--footer">Send</p>
                </div>
            </div>
            <div class="chatbox__button">
                <button><img src='' alt='button icon'></button>
            </div>
        </div>
    </div>
    `;
document.body.innerHTML += elemDiv;
const chatbox = new InteractiveChatbox();
chatbox.display();
