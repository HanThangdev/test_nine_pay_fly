const _0x1bc5f0 = _0x879b;
(function (_0x4e4e01, _0x1c7d11) {
  const _0x4d1e79 = _0x879b,
    _0x2d6ea4 = _0x4e4e01();
  while (!![]) {
    try {
      const _0x31cbd8 =
        parseInt(_0x4d1e79(0x1c6)) / 0x1 +
        -parseInt(_0x4d1e79(0x1a7)) / 0x2 +
        -parseInt(_0x4d1e79(0x1a9)) / 0x3 +
        parseInt(_0x4d1e79(0x1ab)) / 0x4 +
        (parseInt(_0x4d1e79(0x1d3)) / 0x5) *
          (-parseInt(_0x4d1e79(0x1cb)) / 0x6) +
        (parseInt(_0x4d1e79(0x1b4)) / 0x7) *
          (-parseInt(_0x4d1e79(0x1c5)) / 0x8) +
        (-parseInt(_0x4d1e79(0x1d1)) / 0x9) *
          (-parseInt(_0x4d1e79(0x1e5)) / 0xa);
      if (_0x31cbd8 === _0x1c7d11) break;
      else _0x2d6ea4['push'](_0x2d6ea4['shift']());
    } catch (_0x1cd826) {
      _0x2d6ea4['push'](_0x2d6ea4['shift']());
    }
  }
})(_0x57de, 0xe90f2);
class InteractiveChatbox {
  constructor() {
    const _0x341884 = _0x879b;
    (this[_0x341884(0x17b)] = _0x341884(0x1a2)),
      (this[_0x341884(0x19d)] = this[_0x341884(0x17b)] + _0x341884(0x1f9)),
      (this[_0x341884(0x18e)] = this[_0x341884(0x17b)] + _0x341884(0x1d7)),
      (this[_0x341884(0x177)] = {
        openButton: document[_0x341884(0x1a0)]('.chatbox__button'),
        chatbox: document[_0x341884(0x1a0)]('.chatbox__support'),
        sendButton: document[_0x341884(0x1a0)](_0x341884(0x1b7)),
        header: document['querySelector'](_0x341884(0x1ba)),
        message_suggest: document[_0x341884(0x1a0)](_0x341884(0x1e3)),
        chatFlyContainer: document['querySelector'](_0x341884(0x193)),
      }),
      (this['icons'] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose:
          '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
        iconRefresh: _0x341884(0x203),
      }),
      (this[_0x341884(0x182)] = ![]),
      (this[_0x341884(0x180)] = []),
      (this['session_id'] = this[_0x341884(0x1ae)]()),
      (this[_0x341884(0x1d9)] = ![]);
  }
  [_0x1bc5f0(0x1ae)]() {
    const _0xf2bc39 = _0x1bc5f0;
    var _0xf9abc2 = new Date()[_0xf2bc39(0x19e)](),
      _0x18821e =
        (typeof performance !== _0xf2bc39(0x1c8) &&
          performance[_0xf2bc39(0x1cf)] &&
          performance['now']() * 0x3e8) ||
        0x0;
    return _0xf2bc39(0x1da)['replace'](/[xy]/g, function (_0x57c25a) {
      const _0x30952c = _0xf2bc39;
      var _0x45bdd0 = Math['random']() * 0x10;
      return (
        _0xf9abc2 > 0x0
          ? ((_0x45bdd0 = (_0xf9abc2 + _0x45bdd0) % 0x10 | 0x0),
            (_0xf9abc2 = Math['floor'](_0xf9abc2 / 0x10)))
          : ((_0x45bdd0 = (_0x18821e + _0x45bdd0) % 0x10 | 0x0),
            (_0x18821e = Math[_0x30952c(0x17c)](_0x18821e / 0x10))),
        (_0x57c25a === 'x' ? _0x45bdd0 : (_0x45bdd0 & 0x3) | 0x8)[
          _0x30952c(0x1e1)
        ](0x10)
      );
    });
  }
  async ['display']() {
    const _0x10c8af = _0x1bc5f0,
      {
        openButton: _0x52ea45,
        chatbox: _0x39fe71,
        sendButton: _0x3ce9c6,
      } = this[_0x10c8af(0x177)];
    await this[_0x10c8af(0x194)](_0x39fe71);
    const { iconSend: _0x59b9c8 } = this[_0x10c8af(0x1df)];
    this[_0x10c8af(0x1f3)](![], _0x52ea45), this[_0x10c8af(0x1d4)](_0x39fe71);
    window[_0x10c8af(0x206)][_0x10c8af(0x196)]['includes'](_0x10c8af(0x1f1)) &&
      this['toggleState'](_0x39fe71);
    _0x52ea45[_0x10c8af(0x190)](_0x10c8af(0x1a3), () =>
      this['toggleState'](_0x39fe71),
    ),
      _0x3ce9c6[_0x10c8af(0x190)]('click', () =>
        this[_0x10c8af(0x1b0)](_0x39fe71),
      ),
      (_0x3ce9c6['innerHTML'] = '<div>' + _0x59b9c8 + '</div>');
    const _0x23a837 = _0x39fe71['querySelector'](_0x10c8af(0x186));
    _0x23a837[_0x10c8af(0x190)](_0x10c8af(0x1c7), ({ key: _0x2dcb88 }) => {
      const _0x166884 = _0x10c8af;
      _0x2dcb88 === _0x166884(0x1bd) && this[_0x166884(0x1b0)](_0x39fe71);
    });
  }
  [_0x1bc5f0(0x18f)]() {
    const _0x2f5e7b = _0x1bc5f0,
      { openButton: _0x257e33, chatbox: _0x12877a } = this[_0x2f5e7b(0x177)];
    (_0x257e33[_0x2f5e7b(0x1b5)][_0x2f5e7b(0x1c3)] = _0x2f5e7b(0x181)),
      (_0x12877a['style'][_0x2f5e7b(0x1c3)] = _0x2f5e7b(0x181)),
      (_0x12877a[_0x2f5e7b(0x1b5)][_0x2f5e7b(0x201)] = _0x2f5e7b(0x1ac)),
      (_0x257e33['style']['visibility'] = _0x2f5e7b(0x1ac));
  }
  async [_0x1bc5f0(0x194)](_0x47b2c2) {
    const _0x3b3b21 = _0x1bc5f0;
    let _0x53f0fd = new Headers();
    _0x53f0fd['append'](_0x3b3b21(0x1bc), _0x3b3b21(0x1be));
    const _0x3844aa = { method: _0x3b3b21(0x1e7), headers: _0x53f0fd };
    try {
      const _0xdb4054 = await fetch(
          this[_0x3b3b21(0x18e)] +
            _0x3b3b21(0x1dd) +
            window[_0x3b3b21(0x200)][_0x3b3b21(0x205)],
          _0x3844aa,
        ),
        { openButton: _0x19ac94, chatbox: _0x596379 } = this[_0x3b3b21(0x177)];
      if (!_0xdb4054['ok']) {
        (_0x19ac94['style'][_0x3b3b21(0x1c3)] = _0x3b3b21(0x1d8)),
          (_0x596379[_0x3b3b21(0x1b5)][_0x3b3b21(0x1c3)] = _0x3b3b21(0x1d8));
        throw new Error(_0x3b3b21(0x1c2) + _0xdb4054[_0x3b3b21(0x1f5)]);
      }
      this[_0x3b3b21(0x18f)]();
      const _0x6dbae2 = await _0xdb4054[_0x3b3b21(0x1a4)]();
      this['setStyle'](_0x6dbae2),
        this[_0x3b3b21(0x19a)](_0x6dbae2),
        await this[_0x3b3b21(0x184)](_0x6dbae2),
        await this[_0x3b3b21(0x1e0)](_0x6dbae2);
      const _0x250848 = document[_0x3b3b21(0x202)](_0x3b3b21(0x1cc));
      _0x250848[_0x3b3b21(0x18d)]((_0x325405) => {
        const _0x5e7ce3 = _0x3b3b21;
        _0x325405?.[_0x5e7ce3(0x190)](_0x5e7ce3(0x1a3), (_0x32f6ef) =>
          this['showMessageText'](_0x32f6ef, _0x596379),
        );
      }),
        this['updateHeader'](_0x6dbae2);
    } catch (_0x775cb9) {
      console['error'](_0x3b3b21(0x1dc), _0x775cb9);
    }
  }
  [_0x1bc5f0(0x19a)](_0x6c24f3) {
    const _0x2c0581 = _0x1bc5f0,
      { initial_message: _0x4b504a } = _0x6c24f3;
    _0x4b504a &&
      (this[_0x2c0581(0x180)][_0x2c0581(0x1fa)]([
        { sender_type: _0x2c0581(0x1c1), content: '' },
        { sender_type: 'assistant', content: _0x4b504a },
      ]),
      this[_0x2c0581(0x1ad)]());
  }
  [_0x1bc5f0(0x1eb)](_0x563988) {
    const _0x2c905b = _0x1bc5f0,
      { header: _0x450b87 } = this['args'],
      { iconRefresh: _0xf7c3b3, iconClose: _0x492ab1 } = this[_0x2c905b(0x1df)],
      _0x502410 = document['createElement'](_0x2c905b(0x1fb));
    _0x502410['className'] = _0x2c905b(0x1bf);
    if (_0x563988[_0x2c905b(0x1ea)]) {
      const _0x246de9 = document[_0x2c905b(0x1ed)](_0x2c905b(0x1b9));
      (_0x246de9[_0x2c905b(0x1f6)] = _0x563988[_0x2c905b(0x1ea)]),
        (_0x246de9[_0x2c905b(0x19b)] = _0x2c905b(0x199)),
        _0x502410[_0x2c905b(0x1a8)](_0x246de9);
    }
    _0x563988[_0x2c905b(0x1ec)] &&
      (_0x502410[_0x2c905b(0x191)] += _0x563988[_0x2c905b(0x1ec)]),
      _0x450b87['appendChild'](_0x502410),
      (_0x450b87[_0x2c905b(0x191)] +=
        _0x2c905b(0x17d) + _0xf7c3b3 + _0x492ab1 + _0x2c905b(0x1d6));
  }
  [_0x1bc5f0(0x18a)](_0x4fc543, _0x280d04) {
    const _0x16072f = _0x1bc5f0,
      _0x19098b = _0x4fc543[_0x16072f(0x1aa)][_0x16072f(0x1c4)];
    let _0x4b83dc = _0x280d04[_0x16072f(0x1a0)]('input');
    (_0x4b83dc[_0x16072f(0x192)] = _0x19098b),
      this[_0x16072f(0x1b0)](_0x280d04);
  }
  ['updateSuggestedMessages'](_0x32af08) {
    const _0x326dc9 = _0x1bc5f0,
      { suggest_messages: _0x4eaeca } = _0x32af08,
      { message_suggest: _0x485b5d } = this[_0x326dc9(0x177)];
    (_0x4eaeca ?? [])['forEach']((_0x59a90b) => {
      const _0xef8571 = _0x326dc9,
        _0x527945 = document[_0xef8571(0x1ed)](_0xef8571(0x1fb));
      (_0x527945[_0xef8571(0x19b)] = _0xef8571(0x185)),
        (_0x527945['textContent'] = _0x59a90b),
        _0x485b5d['appendChild'](_0x527945);
    });
  }
  async ['updateChatIcons'](_0x44e12b) {
    const _0x1a2d86 = _0x1bc5f0;
    (this[_0x1a2d86(0x1df)]['isClicked'] = document['createElement'](
      _0x1a2d86(0x1b9),
    )),
      (this['icons'][_0x1a2d86(0x1b8)] = document[_0x1a2d86(0x1ed)](
        _0x1a2d86(0x1b9),
      )),
      (this[_0x1a2d86(0x1df)][_0x1a2d86(0x1b6)] =
        _0x1a2d86(0x1fe) +
        (_0x44e12b['chat_message_color']
          ? '\x22' + _0x44e12b['chat_message_color'] + '\x22'
          : _0x1a2d86(0x1e2)) +
        '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>');
    if (
      window[_0x1a2d86(0x206)][_0x1a2d86(0x196)][_0x1a2d86(0x1d5)](
        _0x1a2d86(0x1f1),
      )
    ) {
      (this[_0x1a2d86(0x1df)][_0x1a2d86(0x1af)][_0x1a2d86(0x1f6)] =
        _0x1a2d86(0x1f4)),
        (this[_0x1a2d86(0x1df)][_0x1a2d86(0x1af)][_0x1a2d86(0x1b5)][
          _0x1a2d86(0x1f2)
        ] = _0x1a2d86(0x19f)),
        (this['icons']['isNotClicked'][_0x1a2d86(0x1f6)] =
          'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png'),
        (this[_0x1a2d86(0x1df)][_0x1a2d86(0x1b8)][_0x1a2d86(0x1b5)][
          _0x1a2d86(0x1f2)
        ] = '80px');
      return;
    }
    _0x44e12b[_0x1a2d86(0x1fc)]
      ? ((this['icons'][_0x1a2d86(0x1af)][_0x1a2d86(0x1f6)] =
          _0x44e12b[_0x1a2d86(0x1fc)]),
        (this['icons'][_0x1a2d86(0x1b8)][_0x1a2d86(0x1f6)] =
          _0x44e12b[_0x1a2d86(0x1fc)]))
      : ((this[_0x1a2d86(0x1df)][_0x1a2d86(0x1af)]['src'] =
          'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg'),
        (this[_0x1a2d86(0x1df)][_0x1a2d86(0x1b8)][_0x1a2d86(0x1f6)] =
          _0x1a2d86(0x1c0)));
  }
  ['setStyle'](_0x5abf84) {
    const _0x25a003 = _0x1bc5f0,
      {
        theme: _0x1f2b7c,
        chat_bubble_button_color: _0x9df0a6,
        align_chat_bubble_button: _0x1a33f5,
        chat_message_color: _0x12d558,
        suggest_messages: _0x35b805,
      } = _0x5abf84,
      _0x2aee1a =
        '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{white-space:\x20pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:12px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
      _0x181262 = _0x25a003(0x1cd),
      _0x5004ad = window[_0x25a003(0x206)][_0x25a003(0x196)]['includes'](
        'chatfly',
      )
        ? _0x181262
        : _0x2aee1a,
      _0xbc0a18 = {
        chatButtonAlignment: _0x1a33f5 ?? _0x25a003(0x1a6),
        chatBoxAlignment: _0x1a33f5 ?? _0x25a003(0x1a6),
        chatButtonDirection:
          _0x1a33f5 === _0x25a003(0x1b3) ? 'right' : _0x25a003(0x1b3),
        chatButtonColor: _0x9df0a6 ?? _0x25a003(0x1c9),
        chatBoxBackgroundColor: _0x1f2b7c === 'dark' ? '#111827' : '#fff',
        chatInputBorderColor:
          _0x1f2b7c === _0x25a003(0x1f0) ? '#cdceed' : '#0000004a',
        chatBoxHeaderBorderColor:
          _0x1f2b7c === _0x25a003(0x1f0) ? '#cdceed' : _0x25a003(0x187),
        chatInputColor: _0x1f2b7c === 'dark' ? _0x25a003(0x1c9) : '#inherit',
        chatBoxDisplayNameColor:
          _0x1f2b7c === _0x25a003(0x1f0) ? _0x25a003(0x1c9) : 'inherit',
        messageItemOperatorBackgroundColor: _0x12d558 ?? _0x25a003(0x1a1),
        suggestedMessagesHeight: _0x35b805?.[_0x25a003(0x1ee)]
          ? _0x25a003(0x1f8)
          : '0px',
      },
      _0x2a56fb = document[_0x25a003(0x1ed)]('style');
    (_0x2a56fb[_0x25a003(0x1c4)] = _0x5004ad[_0x25a003(0x1e9)](
      /{{([^}]+)}}/g,
      (_0x3f4224, _0x18b547) => _0xbc0a18[_0x18b547],
    )),
      document[_0x25a003(0x1e8)][_0x25a003(0x17a)](_0x2a56fb);
  }
  [_0x1bc5f0(0x17e)](_0x2cfd30) {
    return new Promise((_0x2971b1) => setTimeout(_0x2971b1, _0x2cfd30));
  }
  async [_0x1bc5f0(0x1b0)](_0x2eaebb) {
    const _0x59ced9 = _0x1bc5f0;
    let _0x467903 = _0x2eaebb[_0x59ced9(0x1a0)](_0x59ced9(0x186)),
      _0x5da4be = _0x467903[_0x59ced9(0x192)];
    if (!!this['loading']) return;
    _0x467903[_0x59ced9(0x192)] = '';
    if (_0x5da4be === '') return;
    (this['loading'] = !![]),
      this[_0x59ced9(0x180)][_0x59ced9(0x1fa)]([
        { sender_type: _0x59ced9(0x1c1), content: _0x5da4be },
        { sender_type: _0x59ced9(0x195), content: '' },
      ]),
      this['updateChatBox']();
    let _0x578e47 = new Headers();
    _0x578e47[_0x59ced9(0x17a)]('Content-Type', _0x59ced9(0x1be));
    const _0xc346ff = {
      method: _0x59ced9(0x197),
      headers: _0x578e47,
      body: JSON[_0x59ced9(0x1ef)]({
        message: _0x5da4be,
        session_id: this[_0x59ced9(0x1e6)],
        ...window[_0x59ced9(0x200)],
      }),
    };
    try {
      const _0x47243e = await fetch(this[_0x59ced9(0x19d)], _0xc346ff);
      if (!_0x47243e['ok'])
        throw new Error(_0x59ced9(0x1de) + _0x47243e[_0x59ced9(0x1f5)]);
      const _0x3b6340 = await _0x47243e['body'],
        _0x5a5051 = _0x3b6340[_0x59ced9(0x198)]();
      for await (const _0x3fbed1 of this[_0x59ced9(0x1db)](_0x5a5051)) {
      }
    } catch (_0x2529a2) {
      (this[_0x59ced9(0x1d9)] = ![]),
        console['error'](_0x59ced9(0x1dc), _0x2529a2),
        (_0x467903[_0x59ced9(0x192)] = '');
    }
  }
  async *['asyncGenerator'](_0x13f59c) {
    const _0x466cfc = _0x1bc5f0,
      _0x397341 = new TextDecoder();
    while (!![]) {
      const { done: _0x336de3, value: _0x2170c8 } =
        await _0x13f59c[_0x466cfc(0x1d2)]();
      if (_0x336de3) {
        this[_0x466cfc(0x1d9)] = ![];
        return;
      }
      const _0x18a3aa = _0x397341[_0x466cfc(0x1fd)](_0x2170c8);
      await this[_0x466cfc(0x17e)](0x32),
        (this['history']['slice'](-0x1)[0x0][0x1][_0x466cfc(0x1ca)] +=
          _0x18a3aa),
        await this[_0x466cfc(0x1ad)]();
    }
  }
  async [_0x1bc5f0(0x1ad)]() {
    const _0x4362fd = _0x1bc5f0;
    let _0x525d7b = document[_0x4362fd(0x1a0)](_0x4362fd(0x1d0)),
      _0x5eeda3 = '';
    this[_0x4362fd(0x180)][_0x4362fd(0x18d)]((_0x15745a, _0x2b2af2) => {
      const _0x29d587 = _0x4362fd;
      !(
        _0x15745a[0x0]['sender_type'] == _0x29d587(0x1c1) &&
        !_0x15745a[0x0]['content']
      ) &&
        (_0x5eeda3 +=
          _0x29d587(0x1e4) +
          _0x15745a[0x0][_0x29d587(0x1ca)] +
          _0x29d587(0x1d6));
      if (
        _0x15745a[0x1][_0x29d587(0x1ce)] == _0x29d587(0x195) &&
        _0x15745a[0x1][_0x29d587(0x1ca)]
      )
        _0x5eeda3 +=
          _0x29d587(0x204) +
          _0x15745a[0x1][_0x29d587(0x1ca)] +
          _0x29d587(0x1d6);
      else
        _0x5eeda3 +=
          '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    }),
      (_0x525d7b[_0x4362fd(0x191)] =
        _0x4362fd(0x18b) + _0x5eeda3 + _0x4362fd(0x1d6));
  }
  [_0x1bc5f0(0x1bb)]() {
    const _0x35d45c = _0x1bc5f0,
      { chatbox: _0x2cbc1b } = this[_0x35d45c(0x177)];
    _0x2cbc1b[_0x35d45c(0x1b5)][_0x35d45c(0x1c3)] = _0x35d45c(0x1d8);
  }
  [_0x1bc5f0(0x1b1)]() {
    const _0x30f091 = _0x1bc5f0;
    (this[_0x30f091(0x180)] = []),
      (this[_0x30f091(0x1e6)] = this[_0x30f091(0x1ae)]()),
      this['updateChatBox']();
  }
  [_0x1bc5f0(0x1d4)](_0x5ce2a9) {
    const _0x4f2c74 = _0x1bc5f0;
    (this[_0x4f2c74(0x182)] = !this[_0x4f2c74(0x182)]),
      this['showOrHideChatBox'](
        _0x5ce2a9,
        this[_0x4f2c74(0x177)][_0x4f2c74(0x1a5)],
      );
  }
  [_0x1bc5f0(0x1b2)](_0x1697b2, _0x1c16a6) {
    const _0x1d6f26 = _0x1bc5f0;
    _0x1697b2['style'][_0x1d6f26(0x1c3)] =
      _0x1697b2['style'][_0x1d6f26(0x1c3)] === _0x1d6f26(0x1d8)
        ? ''
        : _0x1d6f26(0x1d8);
    if (this[_0x1d6f26(0x182)])
      _0x1697b2[_0x1d6f26(0x17f)][_0x1d6f26(0x188)](_0x1d6f26(0x179)),
        this[_0x1d6f26(0x1f3)](!![], _0x1c16a6);
    else !this['state'] && this[_0x1d6f26(0x1f3)](![], _0x1c16a6);
  }
  ['toggleIcon'](_0x22d3a8, _0x129ccc) {
    const _0x503fda = _0x1bc5f0,
      { isClicked: _0x2bbb70, isNotClicked: _0x10d84d } = this['icons'],
      _0x107225 = document['querySelector'](_0x503fda(0x1f7));
    _0x107225[_0x503fda(0x190)](_0x503fda(0x1a3), () =>
      this[_0x503fda(0x1bb)](),
    );
    const _0x5eb095 = document[_0x503fda(0x1a0)](_0x503fda(0x178));
    _0x5eb095[_0x503fda(0x190)](_0x503fda(0x1a3), () =>
      this[_0x503fda(0x1b1)](),
    );
    const _0x2cc7ac = _0x129ccc[_0x503fda(0x189)],
      _0x3e2dc3 = _0x2cc7ac[_0x503fda(0x189)];
    _0x2cc7ac[_0x503fda(0x183)](_0x22d3a8 ? _0x2bbb70 : _0x10d84d, _0x3e2dc3);
  }
}
(document['body'] = document[_0x1bc5f0(0x1ed)](_0x1bc5f0(0x18c))),
  (document[_0x1bc5f0(0x1e8)][_0x1bc5f0(0x191)] += _0x1bc5f0(0x1ff));
const elemDiv = _0x1bc5f0(0x19c);
function _0x879b(_0x500325, _0x42ceda) {
  const _0x57de1b = _0x57de();
  return (
    (_0x879b = function (_0x879bab, _0x4c1f0e) {
      _0x879bab = _0x879bab - 0x177;
      let _0x53d333 = _0x57de1b[_0x879bab];
      return _0x53d333;
    }),
    _0x879b(_0x500325, _0x42ceda)
  );
}
document['body']['innerHTML'] += elemDiv;
const chatbox = new InteractiveChatbox();
function _0x57de() {
  const _0x385c87 = [
    'decode',
    '<svg\x20fill=',
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__button{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20',
    'chatbotConfig',
    'visibility',
    'querySelectorAll',
    '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'bot_id',
    'location',
    'args',
    '.refresh__button',
    'chatbox--active',
    'append',
    'baseUrl',
    'floor',
    '<div\x20class=\x22icon_header\x22>',
    'sleep',
    'classList',
    'history',
    'block',
    'state',
    'replaceChild',
    'updateChatIcons',
    'chatbot__suggest--item',
    'input',
    '#0000004a',
    'add',
    'firstElementChild',
    'showMessageText',
    '<div>',
    'body',
    'forEach',
    'getBotWidgetSettingUrl',
    'showChatWhenGetStyleSuccess',
    'addEventListener',
    'innerHTML',
    'value',
    '.chatbot',
    'syncChatWidgetStyling',
    'assistant',
    'origin',
    'POST',
    'getReader',
    'bot_avatar',
    'updateInitMessage',
    'className',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'getStreamingResponseUrl',
    'getTime',
    '80px',
    'querySelector',
    '#3399FF',
    'https://backend.dev.chatfly.co/api',
    'click',
    'json',
    'openButton',
    'right',
    '3072006Ywnjtn',
    'appendChild',
    '2727645cCbVnN',
    'target',
    '3683744LZzkrk',
    'visible',
    'updateChatBox',
    'generateUUID',
    'isClicked',
    'onSendButton',
    'refreshHistory',
    'showOrHideChatBox',
    'left',
    '424382AuZpYd',
    'style',
    'iconSend',
    '.chatbox__send--footer',
    'isNotClicked',
    'img',
    '.chatbot__header',
    'closeChatBox',
    'Content-Type',
    'Enter',
    'application/json',
    'icon_header',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'user',
    'Request\x20failed\x20swith\x20status:\x20',
    'display',
    'textContent',
    '208ehbBIj',
    '1344140PlZaGv',
    'keyup',
    'undefined',
    '#fff',
    'content',
    '15954GuVZsN',
    '.chatbot__suggest--item',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{white-space:pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{white-space:pre-wrap;border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:\x2012px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#4AC1FF;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'sender_type',
    'now',
    '.chatbox__messages',
    '531LXdYVu',
    'read',
    '2240bmjqPb',
    'toggleState',
    'includes',
    '</div>',
    '/bot/bot-widget-setting',
    'none',
    'loading',
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    'asyncGenerator',
    'Error:',
    '?bot_id=',
    'Request\x20failed\x20with\x20status:\x20',
    'icons',
    'updateSuggestedMessages',
    'toString',
    '#000000',
    '.chatbot__suggest',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    '661400mzTGYz',
    'session_id',
    'GET',
    'head',
    'replace',
    'bot_avatar_url',
    'updateHeader',
    'display_name',
    'createElement',
    'length',
    'stringify',
    'dark',
    'chatfly',
    'width',
    'toggleIcon',
    'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png',
    'status',
    'src',
    '.close__button',
    '60px',
    '/chat/get-streaming-response',
    'push',
    'div',
    'chat_icon_url',
  ];
  _0x57de = function () {
    return _0x385c87;
  };
  return _0x57de();
}
chatbox[_0x1bc5f0(0x1c3)]();
