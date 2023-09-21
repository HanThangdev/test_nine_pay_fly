const _0x5bebe8 = _0x4d6a;
(function (_0x1eaa71, _0x34dfd0) {
  const _0x3ec8cd = _0x4d6a,
    _0x44575f = _0x1eaa71();
  while (!![]) {
    try {
      const _0x1693e4 =
        (parseInt(_0x3ec8cd(0x9f)) / 0x1) * (-parseInt(_0x3ec8cd(0xec)) / 0x2) +
        (-parseInt(_0x3ec8cd(0xb5)) / 0x3) * (parseInt(_0x3ec8cd(0xbe)) / 0x4) +
        -parseInt(_0x3ec8cd(0xd2)) / 0x5 +
        (-parseInt(_0x3ec8cd(0x89)) / 0x6) *
          (-parseInt(_0x3ec8cd(0xb6)) / 0x7) +
        parseInt(_0x3ec8cd(0x76)) / 0x8 +
        -parseInt(_0x3ec8cd(0x98)) / 0x9 +
        parseInt(_0x3ec8cd(0xa7)) / 0xa;
      if (_0x1693e4 === _0x34dfd0) break;
      else _0x44575f['push'](_0x44575f['shift']());
    } catch (_0x294690) {
      _0x44575f['push'](_0x44575f['shift']());
    }
  }
})(_0x869f, 0x23a50);
class InteractiveChatbox {
  constructor() {
    const _0x4cb855 = _0x4d6a;
    (this[_0x4cb855(0x69)] = _0x4cb855(0xdd)),
      (this[_0x4cb855(0x7b)] = this[_0x4cb855(0x69)] + _0x4cb855(0x91)),
      (this[_0x4cb855(0xa8)] = this[_0x4cb855(0x69)] + _0x4cb855(0xd0)),
      (this[_0x4cb855(0xd1)] = {
        openButton: document[_0x4cb855(0xbd)](_0x4cb855(0x6c)),
        chatbox: document[_0x4cb855(0xbd)](_0x4cb855(0xa2)),
        sendButton: document[_0x4cb855(0xbd)](_0x4cb855(0xb1)),
        header: document[_0x4cb855(0xbd)]('.chatbot__header'),
        message_suggest: document[_0x4cb855(0xbd)]('.chatbot__suggest'),
      }),
      (this['icons'] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x4cb855(0x97),
        iconRefresh: _0x4cb855(0xba),
      }),
      (this[_0x4cb855(0x7c)] = ![]),
      (this[_0x4cb855(0xd5)] = []),
      (this['session_id'] = this[_0x4cb855(0x8e)]());
  }
  [_0x5bebe8(0x8e)]() {
    const _0x55cddb = _0x5bebe8;
    var _0x574960 = new Date()[_0x55cddb(0xc8)](),
      _0x571951 =
        (typeof performance !== _0x55cddb(0x95) &&
          performance[_0x55cddb(0xe8)] &&
          performance[_0x55cddb(0xe8)]() * 0x3e8) ||
        0x0;
    return _0x55cddb(0x96)['replace'](/[xy]/g, function (_0x48ae68) {
      const _0x5e5fea = _0x55cddb;
      var _0x3615a5 = Math[_0x5e5fea(0xb4)]() * 0x10;
      return (
        _0x574960 > 0x0
          ? ((_0x3615a5 = (_0x574960 + _0x3615a5) % 0x10 | 0x0),
            (_0x574960 = Math[_0x5e5fea(0x77)](_0x574960 / 0x10)))
          : ((_0x3615a5 = (_0x571951 + _0x3615a5) % 0x10 | 0x0),
            (_0x571951 = Math[_0x5e5fea(0x77)](_0x571951 / 0x10))),
        (_0x48ae68 === 'x' ? _0x3615a5 : (_0x3615a5 & 0x3) | 0x8)[
          _0x5e5fea(0xdf)
        ](0x10)
      );
    });
  }
  async [_0x5bebe8(0xbb)]() {
    const _0x12e10e = _0x5bebe8,
      {
        openButton: _0x2650a1,
        chatbox: _0xc00ec5,
        sendButton: _0x4ca134,
      } = this[_0x12e10e(0xd1)];
    await this['syncChatWidgetStyling'](_0xc00ec5);
    const { iconSend: _0x132c4f } = this[_0x12e10e(0xcf)];
    this[_0x12e10e(0x6b)](![], _0x2650a1),
      this[_0x12e10e(0xc1)](_0xc00ec5),
      _0x2650a1[_0x12e10e(0x79)]('click', () =>
        this[_0x12e10e(0xc1)](_0xc00ec5),
      ),
      _0x4ca134[_0x12e10e(0x79)](_0x12e10e(0xde), () =>
        this[_0x12e10e(0x75)](_0xc00ec5),
      ),
      (_0x4ca134[_0x12e10e(0xe6)] = '<div>' + _0x132c4f + _0x12e10e(0xcb));
    const _0x3f8cc2 = _0xc00ec5['querySelector'](_0x12e10e(0x92));
    _0x3f8cc2['addEventListener'](_0x12e10e(0xd4), ({ key: _0x3f22dc }) => {
      const _0x44a0f7 = _0x12e10e;
      _0x3f22dc === _0x44a0f7(0xc3) && this[_0x44a0f7(0x75)](_0xc00ec5);
    });
  }
  async [_0x5bebe8(0xc4)](_0x335f47) {
    const _0x5a7dba = _0x5bebe8;
    let _0x427a97 = new Headers();
    _0x427a97[_0x5a7dba(0x7d)]('Content-Type', _0x5a7dba(0xa4));
    const _0x25f4cd = { method: _0x5a7dba(0x78), headers: _0x427a97 };
    try {
      const _0x37a1c0 = await fetch(
        this['getBotWidgetSettingUrl'] +
          '?bot_id=' +
          window[_0x5a7dba(0xa9)][_0x5a7dba(0xc2)],
        _0x25f4cd,
      );
      if (!_0x37a1c0['ok'])
        throw new Error(_0x5a7dba(0x7f) + _0x37a1c0['status']);
      const _0x343d75 = await _0x37a1c0['json']();
      this['setStyle'](_0x343d75),
        this['updateInitMessage'](_0x343d75),
        await this[_0x5a7dba(0xdc)](_0x343d75),
        await this[_0x5a7dba(0xe1)](_0x343d75);
      const _0x31999f = document['querySelectorAll'](_0x5a7dba(0x99));
      _0x31999f[_0x5a7dba(0xd3)]((_0x159947) => {
        const _0x426789 = _0x5a7dba;
        _0x159947?.['addEventListener'](_0x426789(0xde), (_0x15b6b5) =>
          this['showMessageText'](_0x15b6b5, _0x335f47),
        );
      }),
        this[_0x5a7dba(0x73)](_0x343d75);
    } catch (_0x494dd1) {
      console[_0x5a7dba(0xca)]('Error:', _0x494dd1);
    }
  }
  [_0x5bebe8(0x6f)](_0x2b56f0) {
    const _0x5b6dd1 = _0x5bebe8,
      { initial_message: _0x44cc97 } = _0x2b56f0;
    _0x44cc97 &&
      (this[_0x5b6dd1(0xd5)]['push']([
        { sender_type: _0x5b6dd1(0xb2), content: '' },
        { sender_type: _0x5b6dd1(0x9d), content: _0x44cc97 },
      ]),
      this[_0x5b6dd1(0xdb)]());
  }
  ['updateHeader'](_0x17cad7) {
    const _0x260536 = _0x5bebe8,
      { header: _0x5b6d9d } = this[_0x260536(0xd1)],
      { iconRefresh: _0x1a033e, iconClose: _0x24fba0 } = this[_0x260536(0xcf)],
      _0x35da08 = document['createElement'](_0x260536(0xcd));
    _0x35da08['className'] = _0x260536(0x82);
    if (_0x17cad7[_0x260536(0xbc)]) {
      const _0x572235 = document[_0x260536(0x84)]('img');
      (_0x572235[_0x260536(0xe9)] = _0x17cad7['bot_avatar_url']),
        (_0x572235[_0x260536(0xb0)] = _0x260536(0x8d)),
        _0x35da08[_0x260536(0xb9)](_0x572235);
    }
    _0x17cad7[_0x260536(0x6a)] &&
      (_0x35da08[_0x260536(0xe6)] += _0x17cad7[_0x260536(0x6a)]),
      _0x5b6d9d['appendChild'](_0x35da08),
      (_0x5b6d9d['innerHTML'] +=
        '<div\x20class=\x22icon_header\x22>' +
        _0x1a033e +
        _0x24fba0 +
        _0x260536(0xcb));
  }
  [_0x5bebe8(0xab)](_0x790b00, _0x2a76ba) {
    const _0xcee1ea = _0x5bebe8,
      _0x153d61 = _0x790b00[_0xcee1ea(0x88)][_0xcee1ea(0xa3)];
    let _0x3715e7 = _0x2a76ba['querySelector'](_0xcee1ea(0x92));
    (_0x3715e7[_0xcee1ea(0xe7)] = _0x153d61), this[_0xcee1ea(0x75)](_0x2a76ba);
  }
  ['updateSuggestedMessages'](_0x2b7346) {
    const _0xf9b50f = _0x5bebe8,
      { suggest_messages: _0x41ba36 } = _0x2b7346,
      { message_suggest: _0x565050 } = this['args'];
    (_0x41ba36 ?? [])[_0xf9b50f(0xd3)]((_0x283584) => {
      const _0x17e800 = _0xf9b50f,
        _0x3b6357 = document['createElement'](_0x17e800(0xcd));
      (_0x3b6357['className'] = _0x17e800(0x6e)),
        (_0x3b6357[_0x17e800(0xa3)] = _0x283584),
        _0x565050[_0x17e800(0xb9)](_0x3b6357);
    });
  }
  async [_0x5bebe8(0xdc)](_0x48ec3f) {
    const _0x199627 = _0x5bebe8;
    (this[_0x199627(0xcf)][_0x199627(0xa0)] = document[_0x199627(0x84)](
      _0x199627(0xeb),
    )),
      (this[_0x199627(0xcf)][_0x199627(0xac)] = document[_0x199627(0x84)](
        _0x199627(0xeb),
      )),
      (this[_0x199627(0xcf)][_0x199627(0xcc)] =
        _0x199627(0x70) +
        (_0x48ec3f['chat_message_color']
          ? '\x22' + _0x48ec3f[_0x199627(0xea)] + '\x22'
          : _0x199627(0x83)) +
        _0x199627(0x9e)),
      _0x48ec3f[_0x199627(0xe5)]
        ? ((this[_0x199627(0xcf)]['isClicked']['src'] =
            _0x48ec3f[_0x199627(0xe5)]),
          (this[_0x199627(0xcf)]['isNotClicked'][_0x199627(0xe9)] =
            _0x48ec3f[_0x199627(0xe5)]))
        : ((this[_0x199627(0xcf)][_0x199627(0xa0)]['src'] = _0x199627(0xed)),
          (this[_0x199627(0xcf)]['isNotClicked']['src'] = _0x199627(0xed)));
  }
  [_0x5bebe8(0x9c)](_0x2825bc) {
    const _0x2fa073 = _0x5bebe8,
      {
        theme: _0x4e70e3,
        chat_bubble_button_color: _0x1ffa8f,
        align_chat_bubble_button: _0x38bd58,
        chat_message_color: _0x19c48a,
        suggest_messages: _0x8bdf3d,
      } = _0x2825bc,
      _0x2bc8de = window['location'][_0x2fa073(0x9a)]['includes']('chatfly')
        ? '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{white-space:\x20nowrap;height:40px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header{display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#fff;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}'
        : _0x2fa073(0x81),
      _0x1d4d98 = {
        chatButtonAlignment: _0x38bd58 ?? _0x2fa073(0xa6),
        chatBoxAlignment: _0x38bd58 ?? _0x2fa073(0xa6),
        chatButtonDirection: _0x38bd58 === 'left' ? _0x2fa073(0xa6) : 'left',
        chatButtonColor: _0x1ffa8f ?? _0x2fa073(0xaa),
        chatBoxBackgroundColor:
          _0x4e70e3 === _0x2fa073(0xe0) ? _0x2fa073(0xa1) : _0x2fa073(0xaa),
        chatInputBorderColor:
          _0x4e70e3 === _0x2fa073(0xe0) ? '#cdceed' : _0x2fa073(0xc5),
        chatBoxHeaderBorderColor:
          _0x4e70e3 === _0x2fa073(0xe0) ? _0x2fa073(0xc0) : '#0000004a',
        chatInputColor: _0x4e70e3 === 'dark' ? _0x2fa073(0xaa) : '#inherit',
        chatBoxDisplayNameColor:
          _0x4e70e3 === _0x2fa073(0xe0) ? _0x2fa073(0xaa) : _0x2fa073(0xd7),
        messageItemOperatorBackgroundColor: _0x19c48a ?? _0x2fa073(0x93),
        suggestedMessagesHeight: _0x8bdf3d?.[_0x2fa073(0xe3)]
          ? _0x2fa073(0xe2)
          : '0px',
      },
      _0x24b90a = document['createElement']('style');
    (_0x24b90a[_0x2fa073(0xa3)] = _0x2bc8de['replace'](
      /{{([^}]+)}}/g,
      (_0x29f94b, _0x221b61) => _0x1d4d98[_0x221b61],
    )),
      document['head']['append'](_0x24b90a);
  }
  [_0x5bebe8(0xce)](_0x48c9f8) {
    return new Promise((_0x1d0830) => setTimeout(_0x1d0830, _0x48c9f8));
  }
  async [_0x5bebe8(0x75)](_0x31a2b2) {
    const _0x19797c = _0x5bebe8;
    let _0x23d3f5 = _0x31a2b2['querySelector']('input'),
      _0x384673 = _0x23d3f5['value'];
    _0x23d3f5[_0x19797c(0xe7)] = '';
    if (_0x384673 === '') return;
    this[_0x19797c(0xd5)][_0x19797c(0x6d)]([
      { sender_type: 'user', content: _0x384673 },
      { sender_type: _0x19797c(0x9d), content: '' },
    ]),
      this['updateChatBox']();
    let _0x118379 = new Headers();
    _0x118379[_0x19797c(0x7d)](_0x19797c(0x8a), _0x19797c(0xa4));
    const _0x2842d1 = {
      method: _0x19797c(0x94),
      headers: _0x118379,
      body: JSON[_0x19797c(0xb3)]({
        message: _0x384673,
        session_id: this['session_id'],
        ...window['chatbotConfig'],
      }),
    };
    try {
      const _0x4f525c = await fetch(this['getStreamingResponseUrl'], _0x2842d1);
      if (!_0x4f525c['ok'])
        throw new Error(
          'Request\x20failed\x20with\x20status:\x20' +
            _0x4f525c[_0x19797c(0xd8)],
        );
      const _0x50a513 = await _0x4f525c[_0x19797c(0x74)],
        _0x28d1e5 = _0x50a513[_0x19797c(0xd6)]();
      for await (const _0x3faaf0 of this[_0x19797c(0x7e)](_0x28d1e5)) {
      }
    } catch (_0x441aea) {
      console[_0x19797c(0xca)](_0x19797c(0x87), _0x441aea),
        (_0x23d3f5['value'] = '');
    }
  }
  async *[_0x5bebe8(0x7e)](_0x3fe770) {
    const _0x214454 = _0x5bebe8,
      _0x5d66e1 = new TextDecoder();
    while (!![]) {
      const { done: _0x3b0a96, value: _0x4990a6 } =
        await _0x3fe770[_0x214454(0xe4)]();
      if (_0x3b0a96) return;
      const _0x55f5fb = _0x5d66e1[_0x214454(0x9b)](_0x4990a6);
      await this[_0x214454(0xce)](0x32),
        (this[_0x214454(0xd5)][_0x214454(0xae)](-0x1)[0x0][0x1][
          _0x214454(0x72)
        ] += _0x55f5fb),
        await this['updateChatBox']();
    }
  }
  async [_0x5bebe8(0xdb)]() {
    const _0x2de969 = _0x5bebe8;
    let _0x6d1e34 = document[_0x2de969(0xbd)](_0x2de969(0xc9)),
      _0x4a4384 = '';
    this['history'][_0x2de969(0xd3)]((_0x72027b, _0x1557a2) => {
      const _0x13ea58 = _0x2de969;
      !(
        _0x72027b[0x0]['sender_type'] == _0x13ea58(0xb2) &&
        !_0x72027b[0x0][_0x13ea58(0x72)]
      ) &&
        (_0x4a4384 +=
          _0x13ea58(0x8c) + _0x72027b[0x0][_0x13ea58(0x72)] + _0x13ea58(0xcb));
      if (
        _0x72027b[0x1][_0x13ea58(0xb8)] == _0x13ea58(0x9d) &&
        _0x72027b[0x1]['content']
      )
        _0x4a4384 +=
          _0x13ea58(0xb7) + _0x72027b[0x1][_0x13ea58(0x72)] + _0x13ea58(0xcb);
      else _0x4a4384 += _0x13ea58(0xbf);
    }),
      (_0x6d1e34[_0x2de969(0xe6)] = _0x2de969(0x8b) + _0x4a4384 + '</div>');
  }
  [_0x5bebe8(0x85)]() {
    const _0x3fe161 = _0x5bebe8,
      { chatbox: _0x18686e } = this[_0x3fe161(0xd1)];
    _0x18686e['style'][_0x3fe161(0xbb)] = _0x3fe161(0xc6);
  }
  [_0x5bebe8(0x86)]() {
    const _0x56b626 = _0x5bebe8;
    (this['history'] = []),
      (this[_0x56b626(0x80)] = this['generateUUID']()),
      this[_0x56b626(0xdb)]();
  }
  ['toggleState'](_0x4369fe) {
    const _0x5744f0 = _0x5bebe8;
    (this['state'] = !this[_0x5744f0(0x7c)]),
      this[_0x5744f0(0x8f)](_0x4369fe, this[_0x5744f0(0xd1)][_0x5744f0(0xa5)]);
  }
  [_0x5bebe8(0x8f)](_0x5ba13e, _0x40070f) {
    const _0x1d6bc8 = _0x5bebe8;
    _0x5ba13e[_0x1d6bc8(0xd9)][_0x1d6bc8(0xbb)] =
      _0x5ba13e[_0x1d6bc8(0xd9)]['display'] === _0x1d6bc8(0xc6) ? '' : 'none';
    if (this[_0x1d6bc8(0x7c)])
      _0x5ba13e[_0x1d6bc8(0xda)][_0x1d6bc8(0x71)]('chatbox--active'),
        this['toggleIcon'](!![], _0x40070f);
    else !this['state'] && this[_0x1d6bc8(0x6b)](![], _0x40070f);
  }
  [_0x5bebe8(0x6b)](_0x299ad6, _0x31a281) {
    const _0x33c25a = _0x5bebe8,
      { isClicked: _0x4401f7, isNotClicked: _0x4315a3 } = this[_0x33c25a(0xcf)],
      _0x33430a = document['querySelector']('.close__button');
    _0x33430a[_0x33c25a(0x79)](_0x33c25a(0xde), () => this['closeChatBox']());
    const _0x2fc545 = document['querySelector'](_0x33c25a(0xaf));
    _0x2fc545['addEventListener'](_0x33c25a(0xde), () =>
      this[_0x33c25a(0x86)](),
    );
    const _0x41959e = _0x31a281[_0x33c25a(0xc7)],
      _0x595838 = _0x41959e[_0x33c25a(0xc7)];
    _0x41959e[_0x33c25a(0x7a)](_0x299ad6 ? _0x4401f7 : _0x4315a3, _0x595838);
  }
}
(document[_0x5bebe8(0x74)] = document[_0x5bebe8(0x84)](_0x5bebe8(0x74))),
  (document[_0x5bebe8(0x90)]['innerHTML'] +=
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20');
function _0x4d6a(_0x4bc5b8, _0x426a6e) {
  const _0x869f16 = _0x869f();
  return (
    (_0x4d6a = function (_0x4d6a2a, _0x54c89e) {
      _0x4d6a2a = _0x4d6a2a - 0x69;
      let _0x41fbd3 = _0x869f16[_0x4d6a2a];
      return _0x41fbd3;
    }),
    _0x4d6a(_0x4bc5b8, _0x426a6e)
  );
}
const elemDiv = _0x5bebe8(0xad);
document['body'][_0x5bebe8(0xe6)] += elemDiv;
function _0x869f() {
  const _0x2f3b3b = [
    'toString',
    'dark',
    'updateSuggestedMessages',
    '60px',
    'length',
    'read',
    'chat_icon_url',
    'innerHTML',
    'value',
    'now',
    'src',
    'chat_message_color',
    'img',
    '556EJylpE',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'baseUrl',
    'display_name',
    'toggleIcon',
    '.chatbox__button',
    'push',
    'chatbot__suggest--item',
    'updateInitMessage',
    '<svg\x20fill=',
    'add',
    'content',
    'updateHeader',
    'body',
    'onSendButton',
    '266672FoFzXP',
    'floor',
    'GET',
    'addEventListener',
    'replaceChild',
    'getStreamingResponseUrl',
    'state',
    'append',
    'asyncGenerator',
    'Request\x20failed\x20with\x20status:\x20',
    'session_id',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{height:40px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'icon_header',
    '#000000',
    'createElement',
    'closeChatBox',
    'refreshHistory',
    'Error:',
    'target',
    '870BOEZSB',
    'Content-Type',
    '<div>',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    'bot_avatar',
    'generateUUID',
    'showOrHideChatBox',
    'head',
    '/chat/get-streaming-response',
    'input',
    '#3399FF',
    'POST',
    'undefined',
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    '2537433npuyBA',
    '.chatbot__suggest--item',
    'origin',
    'decode',
    'setStyle',
    'assistant',
    '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    '487JIkHuc',
    'isClicked',
    '#111827',
    '.chatbox__support',
    'textContent',
    'application/json',
    'openButton',
    'right',
    '8467700gSOIWl',
    'getBotWidgetSettingUrl',
    'chatbotConfig',
    '#fff',
    'showMessageText',
    'isNotClicked',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'slice',
    '.refresh__button',
    'className',
    '.chatbox__send--footer',
    'user',
    'stringify',
    'random',
    '1233qHxrQz',
    '1169gEgwVC',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'sender_type',
    'appendChild',
    '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
    'display',
    'bot_avatar_url',
    'querySelector',
    '2068HOlvKP',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    '#cdceed',
    'toggleState',
    'bot_id',
    'Enter',
    'syncChatWidgetStyling',
    '#0000004a',
    'none',
    'firstElementChild',
    'getTime',
    '.chatbox__messages',
    'error',
    '</div>',
    'iconSend',
    'div',
    'sleep',
    'icons',
    '/bot/bot-widget-setting',
    'args',
    '642545ULGLoQ',
    'forEach',
    'keyup',
    'history',
    'getReader',
    'inherit',
    'status',
    'style',
    'classList',
    'updateChatBox',
    'updateChatIcons',
    'https://backend.dev.chatfly.co/api',
    'click',
  ];
  _0x869f = function () {
    return _0x2f3b3b;
  };
  return _0x869f();
}
const chatbox = new InteractiveChatbox();
chatbox[_0x5bebe8(0xbb)]();
