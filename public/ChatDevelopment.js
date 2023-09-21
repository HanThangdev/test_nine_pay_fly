const _0x305236 = _0x1f1a;
(function (_0x559e3, _0x25ea0d) {
  const _0x4c01eb = _0x1f1a,
    _0x5741d4 = _0x559e3();
  while (!![]) {
    try {
      const _0x1d66e2 =
        (parseInt(_0x4c01eb(0x22a)) / 0x1) *
          (-parseInt(_0x4c01eb(0x225)) / 0x2) +
        -parseInt(_0x4c01eb(0x1d4)) / 0x3 +
        (-parseInt(_0x4c01eb(0x1dd)) / 0x4) *
          (-parseInt(_0x4c01eb(0x1fc)) / 0x5) +
        -parseInt(_0x4c01eb(0x1f6)) / 0x6 +
        (parseInt(_0x4c01eb(0x1ce)) / 0x7) *
          (parseInt(_0x4c01eb(0x212)) / 0x8) +
        (-parseInt(_0x4c01eb(0x1c3)) / 0x9) *
          (parseInt(_0x4c01eb(0x21c)) / 0xa) +
        (-parseInt(_0x4c01eb(0x1f5)) / 0xb) *
          (-parseInt(_0x4c01eb(0x1fd)) / 0xc);
      if (_0x1d66e2 === _0x25ea0d) break;
      else _0x5741d4['push'](_0x5741d4['shift']());
    } catch (_0x1865d7) {
      _0x5741d4['push'](_0x5741d4['shift']());
    }
  }
})(_0x2fb3, 0x59662);
function _0x1f1a(_0x560af5, _0x184d3a) {
  const _0x2fb318 = _0x2fb3();
  return (
    (_0x1f1a = function (_0x1f1a88, _0x546c38) {
      _0x1f1a88 = _0x1f1a88 - 0x1bb;
      let _0x416608 = _0x2fb318[_0x1f1a88];
      return _0x416608;
    }),
    _0x1f1a(_0x560af5, _0x184d3a)
  );
}
class InteractiveChatbox {
  constructor() {
    const _0x331ad8 = _0x1f1a;
    (this[_0x331ad8(0x23b)] = _0x331ad8(0x233)),
      (this[_0x331ad8(0x1e9)] = this['baseUrl'] + _0x331ad8(0x228)),
      (this[_0x331ad8(0x23c)] = this['baseUrl'] + _0x331ad8(0x1c9)),
      (this[_0x331ad8(0x1c7)] = {
        openButton: document['querySelector'](_0x331ad8(0x1cc)),
        chatbox: document[_0x331ad8(0x22e)](_0x331ad8(0x1c6)),
        sendButton: document[_0x331ad8(0x22e)]('.chatbox__send--footer'),
        header: document[_0x331ad8(0x22e)](_0x331ad8(0x1e1)),
        message_suggest: document[_0x331ad8(0x22e)]('.chatbot__suggest'),
      }),
      (this[_0x331ad8(0x208)] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x331ad8(0x1f8),
        iconRefresh: _0x331ad8(0x1d0),
      }),
      (this[_0x331ad8(0x1ef)] = ![]),
      (this['history'] = []),
      (this[_0x331ad8(0x231)] = this[_0x331ad8(0x1f3)]());
  }
  [_0x305236(0x1f3)]() {
    const _0x205891 = _0x305236;
    var _0x47cf88 = new Date()[_0x205891(0x1d2)](),
      _0xd19c98 =
        (typeof performance !== _0x205891(0x1f0) &&
          performance[_0x205891(0x1c4)] &&
          performance[_0x205891(0x1c4)]() * 0x3e8) ||
        0x0;
    return _0x205891(0x23a)['replace'](/[xy]/g, function (_0xcc799c) {
      const _0x11e975 = _0x205891;
      var _0x398b78 = Math['random']() * 0x10;
      return (
        _0x47cf88 > 0x0
          ? ((_0x398b78 = (_0x47cf88 + _0x398b78) % 0x10 | 0x0),
            (_0x47cf88 = Math[_0x11e975(0x217)](_0x47cf88 / 0x10)))
          : ((_0x398b78 = (_0xd19c98 + _0x398b78) % 0x10 | 0x0),
            (_0xd19c98 = Math[_0x11e975(0x217)](_0xd19c98 / 0x10))),
        (_0xcc799c === 'x' ? _0x398b78 : (_0x398b78 & 0x3) | 0x8)['toString'](
          0x10,
        )
      );
    });
  }
  async [_0x305236(0x203)]() {
    const _0x24e9dc = _0x305236,
      {
        openButton: _0x2b9eb0,
        chatbox: _0x121ff1,
        sendButton: _0x24575a,
      } = this['args'];
    await this[_0x24e9dc(0x207)](_0x121ff1);
    const { iconSend: _0x41b803 } = this[_0x24e9dc(0x208)];
    this[_0x24e9dc(0x1d9)](![], _0x2b9eb0),
      this[_0x24e9dc(0x1bd)](_0x121ff1),
      _0x2b9eb0[_0x24e9dc(0x1e5)]('click', () =>
        this[_0x24e9dc(0x1bd)](_0x121ff1),
      ),
      _0x24575a[_0x24e9dc(0x1e5)](_0x24e9dc(0x1bb), () =>
        this['onSendButton'](_0x121ff1),
      ),
      (_0x24575a['innerHTML'] =
        _0x24e9dc(0x1fb) + _0x41b803 + _0x24e9dc(0x213));
    const _0x71dd17 = _0x121ff1[_0x24e9dc(0x22e)](_0x24e9dc(0x22d));
    _0x71dd17[_0x24e9dc(0x1e5)]('keyup', ({ key: _0x1318d3 }) => {
      const _0x102c40 = _0x24e9dc;
      _0x1318d3 === _0x102c40(0x1de) && this[_0x102c40(0x1e2)](_0x121ff1);
    });
  }
  async [_0x305236(0x207)](_0x4c9540) {
    const _0x4580ac = _0x305236;
    let _0xfb8d87 = new Headers();
    _0xfb8d87[_0x4580ac(0x218)](_0x4580ac(0x204), _0x4580ac(0x1bf));
    const _0x2365eb = { method: 'GET', headers: _0xfb8d87 };
    try {
      const _0x2caa8f = await fetch(
        this['getBotWidgetSettingUrl'] +
          _0x4580ac(0x206) +
          window[_0x4580ac(0x216)]['bot_id'],
        _0x2365eb,
      );
      if (!_0x2caa8f['ok'])
        throw new Error(_0x4580ac(0x1c1) + _0x2caa8f[_0x4580ac(0x20d)]);
      const _0x24a038 = await _0x2caa8f[_0x4580ac(0x1e0)]();
      this['setStyle'](_0x24a038),
        this[_0x4580ac(0x21b)](_0x24a038),
        await this[_0x4580ac(0x1c5)](_0x24a038),
        await this['updateSuggestedMessages'](_0x24a038);
      const _0x22682e = document['querySelectorAll'](_0x4580ac(0x200));
      _0x22682e[_0x4580ac(0x1d7)]((_0x51e3cf) => {
        const _0xd9e24c = _0x4580ac;
        _0x51e3cf?.[_0xd9e24c(0x1e5)](_0xd9e24c(0x1bb), (_0x314382) =>
          this[_0xd9e24c(0x220)](_0x314382, _0x4c9540),
        );
      }),
        this[_0x4580ac(0x1be)](_0x24a038);
    } catch (_0x193147) {
      console[_0x4580ac(0x234)](_0x4580ac(0x1f4), _0x193147);
    }
  }
  ['updateInitMessage'](_0x41335d) {
    const _0x3f64cc = _0x305236,
      { initial_message: _0x2df007 } = _0x41335d;
    _0x2df007 &&
      (this[_0x3f64cc(0x202)][_0x3f64cc(0x229)]([
        { sender_type: 'user', content: '' },
        { sender_type: 'assistant', content: _0x2df007 },
      ]),
      this[_0x3f64cc(0x1f2)]());
  }
  [_0x305236(0x1be)](_0x5f018b) {
    const _0x2e1627 = _0x305236,
      { header: _0x3c4f5a } = this[_0x2e1627(0x1c7)],
      { iconRefresh: _0x1b26d6, iconClose: _0x2b53a5 } = this['icons'],
      _0x285e00 = document['createElement']('div');
    _0x285e00['className'] = _0x2e1627(0x1f1);
    if (_0x5f018b[_0x2e1627(0x1df)]) {
      const _0x4626fe = document[_0x2e1627(0x1f7)](_0x2e1627(0x239));
      (_0x4626fe[_0x2e1627(0x1db)] = _0x5f018b[_0x2e1627(0x1df)]),
        (_0x4626fe[_0x2e1627(0x20b)] = _0x2e1627(0x1e6)),
        _0x285e00[_0x2e1627(0x1ee)](_0x4626fe);
    }
    _0x5f018b[_0x2e1627(0x23d)] &&
      (_0x285e00[_0x2e1627(0x1d8)] += _0x5f018b[_0x2e1627(0x23d)]),
      _0x3c4f5a[_0x2e1627(0x1ee)](_0x285e00),
      (_0x3c4f5a[_0x2e1627(0x1d8)] +=
        _0x2e1627(0x1ea) + _0x1b26d6 + _0x2b53a5 + _0x2e1627(0x213));
  }
  [_0x305236(0x220)](_0x11d09a, _0x5b9990) {
    const _0x40fd33 = _0x305236,
      _0x2efc64 = _0x11d09a['target']['textContent'];
    let _0x4ba5f7 = _0x5b9990[_0x40fd33(0x22e)]('input');
    (_0x4ba5f7[_0x40fd33(0x1fa)] = _0x2efc64),
      this[_0x40fd33(0x1e2)](_0x5b9990);
  }
  [_0x305236(0x237)](_0x537c0e) {
    const _0xaf515b = _0x305236,
      { suggest_messages: _0x12cb71 } = _0x537c0e,
      { message_suggest: _0x5b4e10 } = this['args'];
    (_0x12cb71 ?? [])[_0xaf515b(0x1d7)]((_0x2bd37c) => {
      const _0x5374d3 = _0xaf515b,
        _0x35a89e = document['createElement'](_0x5374d3(0x21e));
      (_0x35a89e[_0x5374d3(0x20b)] = 'chatbot__suggest--item'),
        (_0x35a89e['textContent'] = _0x2bd37c),
        _0x5b4e10[_0x5374d3(0x1ee)](_0x35a89e);
    });
  }
  async [_0x305236(0x1c5)](_0x2457c1) {
    const _0x4621a8 = _0x305236;
    (this[_0x4621a8(0x208)][_0x4621a8(0x205)] = document['createElement'](
      _0x4621a8(0x239),
    )),
      (this['icons']['isNotClicked'] = document[_0x4621a8(0x1f7)](
        _0x4621a8(0x239),
      )),
      (this['icons']['iconSend'] =
        _0x4621a8(0x1d6) +
        (_0x2457c1[_0x4621a8(0x20e)]
          ? '\x22' + _0x2457c1[_0x4621a8(0x20e)] + '\x22'
          : _0x4621a8(0x224)) +
        _0x4621a8(0x22f)),
      _0x2457c1[_0x4621a8(0x1c2)]
        ? ((this[_0x4621a8(0x208)]['isClicked'][_0x4621a8(0x1db)] =
            _0x2457c1['chat_icon_url']),
          (this['icons'][_0x4621a8(0x1dc)][_0x4621a8(0x1db)] =
            _0x2457c1[_0x4621a8(0x1c2)]))
        : ((this['icons'][_0x4621a8(0x205)][_0x4621a8(0x1db)] =
            _0x4621a8(0x230)),
          (this[_0x4621a8(0x208)]['isNotClicked'][_0x4621a8(0x1db)] =
            _0x4621a8(0x230)));
  }
  [_0x305236(0x1e7)](_0x2e2143) {
    const _0x3e7944 = _0x305236,
      {
        theme: _0x2d1d50,
        chat_bubble_button_color: _0x5699ba,
        align_chat_bubble_button: _0x1a5d1e,
        chat_message_color: _0xccf3b0,
        suggest_messages: _0x1683c8,
      } = _0x2e2143,
      _0x47793c = window['location'][_0x3e7944(0x1cb)][_0x3e7944(0x226)](
        _0x3e7944(0x20f),
      )
        ? _0x3e7944(0x1d5)
        : _0x3e7944(0x227),
      _0xfd60df = {
        chatButtonAlignment: _0x1a5d1e ?? _0x3e7944(0x21f),
        chatBoxAlignment: _0x1a5d1e ?? _0x3e7944(0x21f),
        chatButtonDirection:
          _0x1a5d1e === _0x3e7944(0x232) ? _0x3e7944(0x21f) : _0x3e7944(0x232),
        chatButtonColor: _0x5699ba ?? _0x3e7944(0x1cd),
        chatBoxBackgroundColor:
          _0x2d1d50 === _0x3e7944(0x21d) ? _0x3e7944(0x209) : _0x3e7944(0x1cd),
        chatInputBorderColor:
          _0x2d1d50 === _0x3e7944(0x21d) ? _0x3e7944(0x1d3) : _0x3e7944(0x1ff),
        chatBoxHeaderBorderColor:
          _0x2d1d50 === _0x3e7944(0x21d) ? '#cdceed' : _0x3e7944(0x1ff),
        chatInputColor: _0x2d1d50 === _0x3e7944(0x21d) ? '#fff' : '#inherit',
        chatBoxDisplayNameColor:
          _0x2d1d50 === 'dark' ? _0x3e7944(0x1cd) : _0x3e7944(0x1ec),
        messageItemOperatorBackgroundColor: _0xccf3b0 ?? _0x3e7944(0x22c),
        suggestedMessagesHeight: _0x1683c8?.[_0x3e7944(0x21a)]
          ? _0x3e7944(0x20a)
          : '0px',
      },
      _0x2f9976 = document[_0x3e7944(0x1f7)](_0x3e7944(0x235));
    (_0x2f9976['textContent'] = _0x47793c[_0x3e7944(0x1d1)](
      /{{([^}]+)}}/g,
      (_0x388748, _0xf09449) => _0xfd60df[_0xf09449],
    )),
      document['head']['append'](_0x2f9976);
  }
  [_0x305236(0x221)](_0x8c2f3c) {
    return new Promise((_0x5f7372) => setTimeout(_0x5f7372, _0x8c2f3c));
  }
  async [_0x305236(0x1e2)](_0x1bda61) {
    const _0x143cd6 = _0x305236;
    let _0x1e831e = _0x1bda61['querySelector'](_0x143cd6(0x22d)),
      _0x182b47 = _0x1e831e['value'];
    _0x1e831e['value'] = '';
    if (_0x182b47 === '') return;
    this[_0x143cd6(0x202)][_0x143cd6(0x229)]([
      { sender_type: _0x143cd6(0x236), content: _0x182b47 },
      { sender_type: _0x143cd6(0x1ed), content: '' },
    ]),
      this[_0x143cd6(0x1f2)]();
    let _0x2e9a72 = new Headers();
    _0x2e9a72[_0x143cd6(0x218)]('Content-Type', 'application/json');
    const _0x32e2dc = {
      method: 'POST',
      headers: _0x2e9a72,
      body: JSON[_0x143cd6(0x1cf)]({
        message: _0x182b47,
        session_id: this[_0x143cd6(0x231)],
        ...window[_0x143cd6(0x216)],
      }),
    };
    try {
      const _0x509600 = await fetch(this[_0x143cd6(0x1e9)], _0x32e2dc);
      if (!_0x509600['ok'])
        throw new Error(_0x143cd6(0x1c1) + _0x509600[_0x143cd6(0x20d)]);
      const _0x29963f = await _0x509600[_0x143cd6(0x1bc)],
        _0x2b5aa9 = _0x29963f[_0x143cd6(0x1ca)]();
      for await (const _0x23622d of this[_0x143cd6(0x1f9)](_0x2b5aa9)) {
      }
    } catch (_0x4f40ef) {
      console['error']('Error:', _0x4f40ef), (_0x1e831e[_0x143cd6(0x1fa)] = '');
    }
  }
  async *['asyncGenerator'](_0x477a70) {
    const _0x5b9069 = _0x305236,
      _0x414dae = new TextDecoder();
    while (!![]) {
      const { done: _0x2a801f, value: _0xf15b9e } =
        await _0x477a70[_0x5b9069(0x1da)]();
      if (_0x2a801f) return;
      const _0x210982 = _0x414dae[_0x5b9069(0x1e4)](_0xf15b9e);
      await this[_0x5b9069(0x221)](0x32),
        (this[_0x5b9069(0x202)]['slice'](-0x1)[0x0][0x1][_0x5b9069(0x1e8)] +=
          _0x210982),
        await this['updateChatBox']();
    }
  }
  async ['updateChatBox']() {
    const _0x2980ea = _0x305236;
    let _0x595352 = document[_0x2980ea(0x22e)](_0x2980ea(0x214)),
      _0x4e4cac = '';
    this[_0x2980ea(0x202)]['forEach']((_0x4691e4, _0x27ea4e) => {
      const _0x30f90b = _0x2980ea;
      !(
        _0x4691e4[0x0][_0x30f90b(0x210)] == _0x30f90b(0x236) &&
        !_0x4691e4[0x0][_0x30f90b(0x1e8)]
      ) &&
        (_0x4e4cac +=
          _0x30f90b(0x222) + _0x4691e4[0x0][_0x30f90b(0x1e8)] + '</div>');
      if (
        _0x4691e4[0x1][_0x30f90b(0x210)] == _0x30f90b(0x1ed) &&
        _0x4691e4[0x1][_0x30f90b(0x1e8)]
      )
        _0x4e4cac +=
          '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>' +
          _0x4691e4[0x1]['content'] +
          _0x30f90b(0x213);
      else _0x4e4cac += _0x30f90b(0x1c8);
    }),
      (_0x595352[_0x2980ea(0x1d8)] =
        _0x2980ea(0x1fb) + _0x4e4cac + _0x2980ea(0x213));
  }
  ['closeChatBox']() {
    const _0x19a51b = _0x305236,
      { chatbox: _0x52314f } = this[_0x19a51b(0x1c7)];
    _0x52314f[_0x19a51b(0x235)][_0x19a51b(0x203)] = 'none';
  }
  [_0x305236(0x20c)]() {
    const _0x3db1b3 = _0x305236;
    (this[_0x3db1b3(0x202)] = []),
      (this['session_id'] = this[_0x3db1b3(0x1f3)]()),
      this[_0x3db1b3(0x1f2)]();
  }
  ['toggleState'](_0x45f1f1) {
    const _0x220bff = _0x305236;
    (this[_0x220bff(0x1ef)] = !this[_0x220bff(0x1ef)]),
      this[_0x220bff(0x223)](
        _0x45f1f1,
        this[_0x220bff(0x1c7)][_0x220bff(0x219)],
      );
  }
  ['showOrHideChatBox'](_0x3ab63a, _0x355c3b) {
    const _0x5e9013 = _0x305236;
    _0x3ab63a['style'][_0x5e9013(0x203)] =
      _0x3ab63a[_0x5e9013(0x235)]['display'] === _0x5e9013(0x238)
        ? ''
        : _0x5e9013(0x238);
    if (this[_0x5e9013(0x1ef)])
      _0x3ab63a[_0x5e9013(0x1eb)][_0x5e9013(0x215)](_0x5e9013(0x211)),
        this['toggleIcon'](!![], _0x355c3b);
    else !this[_0x5e9013(0x1ef)] && this[_0x5e9013(0x1d9)](![], _0x355c3b);
  }
  [_0x305236(0x1d9)](_0x5a6d97, _0x1f8914) {
    const _0x50a025 = _0x305236,
      { isClicked: _0x4204a9, isNotClicked: _0x3b22b0 } =
        this[_0x50a025(0x208)],
      _0x4a25dd = document[_0x50a025(0x22e)](_0x50a025(0x1e3));
    _0x4a25dd[_0x50a025(0x1e5)]('click', () => this[_0x50a025(0x201)]());
    const _0x23b301 = document['querySelector']('.refresh__button');
    _0x23b301[_0x50a025(0x1e5)]('click', () => this[_0x50a025(0x20c)]());
    const _0x12d21e = _0x1f8914['firstElementChild'],
      _0x2bc60c = _0x12d21e[_0x50a025(0x22b)];
    _0x12d21e[_0x50a025(0x1fe)](_0x5a6d97 ? _0x4204a9 : _0x3b22b0, _0x2bc60c);
  }
}
(document[_0x305236(0x1bc)] = document[_0x305236(0x1f7)]('body')),
  (document[_0x305236(0x1c0)][_0x305236(0x1d8)] +=
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20');
const elemDiv =
  '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
document[_0x305236(0x1bc)][_0x305236(0x1d8)] += elemDiv;
const chatbox = new InteractiveChatbox();
chatbox[_0x305236(0x203)]();
function _0x2fb3() {
  const _0x4f4dc1 = [
    '#111827',
    '60px',
    'className',
    'refreshHistory',
    'status',
    'chat_message_color',
    'chatfly',
    'sender_type',
    'chatbox--active',
    '156760IDmCKq',
    '</div>',
    '.chatbox__messages',
    'add',
    'chatbotConfig',
    'floor',
    'append',
    'openButton',
    'length',
    'updateInitMessage',
    '50eezmnT',
    'dark',
    'div',
    'right',
    'showMessageText',
    'sleep',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    'showOrHideChatBox',
    '#000000',
    '2LUfNGk',
    'includes',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:12px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    '/chat/get-streaming-response',
    'push',
    '352973cIJXUQ',
    'firstElementChild',
    '#3399FF',
    'input',
    'querySelector',
    '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'session_id',
    'left',
    'https://backend.dev.chatfly.co/api',
    'error',
    'style',
    'user',
    'updateSuggestedMessages',
    'none',
    'img',
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    'baseUrl',
    'getBotWidgetSettingUrl',
    'display_name',
    'click',
    'body',
    'toggleState',
    'updateHeader',
    'application/json',
    'head',
    'Request\x20failed\x20with\x20status:\x20',
    'chat_icon_url',
    '478773dhYQTv',
    'now',
    'updateChatIcons',
    '.chatbox__support',
    'args',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    '/bot/bot-widget-setting',
    'getReader',
    'origin',
    '.chatbox__button',
    '#fff',
    '259oScJGB',
    'stringify',
    '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
    'replace',
    'getTime',
    '#cdceed',
    '326607SIEGRy',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:\x2012px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#fff;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    '<svg\x20fill=',
    'forEach',
    'innerHTML',
    'toggleIcon',
    'read',
    'src',
    'isNotClicked',
    '8PoKIlw',
    'Enter',
    'bot_avatar_url',
    'json',
    '.chatbot__header',
    'onSendButton',
    '.close__button',
    'decode',
    'addEventListener',
    'bot_avatar',
    'setStyle',
    'content',
    'getStreamingResponseUrl',
    '<div\x20class=\x22icon_header\x22>',
    'classList',
    'inherit',
    'assistant',
    'appendChild',
    'state',
    'undefined',
    'icon_header',
    'updateChatBox',
    'generateUUID',
    'Error:',
    '362714KLVAXk',
    '3555312ZbOtie',
    'createElement',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    'asyncGenerator',
    'value',
    '<div>',
    '755155nbNZAN',
    '240LrYCjD',
    'replaceChild',
    '#0000004a',
    '.chatbot__suggest--item',
    'closeChatBox',
    'history',
    'display',
    'Content-Type',
    'isClicked',
    '?bot_id=',
    'syncChatWidgetStyling',
    'icons',
  ];
  _0x2fb3 = function () {
    return _0x4f4dc1;
  };
  return _0x2fb3();
}
