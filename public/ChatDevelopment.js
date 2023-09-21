const _0x61690 = _0x5bb0;
(function (_0x141e2b, _0x32fdaf) {
  const _0x19f444 = _0x5bb0,
    _0x453d1b = _0x141e2b();
  while (!![]) {
    try {
      const _0x4767ec =
        (-parseInt(_0x19f444(0x118)) / 0x1) *
          (parseInt(_0x19f444(0x14a)) / 0x2) +
        -parseInt(_0x19f444(0x140)) / 0x3 +
        parseInt(_0x19f444(0x18a)) / 0x4 +
        -parseInt(_0x19f444(0x172)) / 0x5 +
        (-parseInt(_0x19f444(0x187)) / 0x6) *
          (parseInt(_0x19f444(0x182)) / 0x7) +
        (-parseInt(_0x19f444(0x163)) / 0x8) *
          (-parseInt(_0x19f444(0x144)) / 0x9) +
        parseInt(_0x19f444(0x14e)) / 0xa;
      if (_0x4767ec === _0x32fdaf) break;
      else _0x453d1b['push'](_0x453d1b['shift']());
    } catch (_0x29ff66) {
      _0x453d1b['push'](_0x453d1b['shift']());
    }
  }
})(_0x128f, 0x82126);
class InteractiveChatbox {
  constructor() {
    const _0x18caf9 = _0x5bb0;
    (this[_0x18caf9(0x122)] = 'https://backend.dev.chatfly.co/api'),
      (this['getStreamingResponseUrl'] =
        this[_0x18caf9(0x122)] + _0x18caf9(0x171)),
      (this[_0x18caf9(0x151)] = this[_0x18caf9(0x122)] + _0x18caf9(0x155)),
      (this[_0x18caf9(0x150)] = {
        openButton: document[_0x18caf9(0x190)](_0x18caf9(0x15d)),
        chatbox: document['querySelector'](_0x18caf9(0x11d)),
        sendButton: document[_0x18caf9(0x190)](_0x18caf9(0x147)),
        header: document['querySelector'](_0x18caf9(0x188)),
        message_suggest: document[_0x18caf9(0x190)](_0x18caf9(0x16c)),
      }),
      (this[_0x18caf9(0x14c)] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose:
          '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
        iconRefresh: _0x18caf9(0x186),
      }),
      (this[_0x18caf9(0x12f)] = ![]),
      (this['history'] = []),
      (this[_0x18caf9(0x16b)] = this[_0x18caf9(0x15a)]());
  }
  ['generateUUID']() {
    const _0x4abec5 = _0x5bb0;
    var _0x5e0029 = new Date()['getTime'](),
      _0x2ac6e6 =
        (typeof performance !== _0x4abec5(0x17f) &&
          performance['now'] &&
          performance[_0x4abec5(0x180)]() * 0x3e8) ||
        0x0;
    return _0x4abec5(0x11b)[_0x4abec5(0x169)](/[xy]/g, function (_0x4771d9) {
      const _0x32a3a7 = _0x4abec5;
      var _0x5e37e6 = Math[_0x32a3a7(0x175)]() * 0x10;
      return (
        _0x5e0029 > 0x0
          ? ((_0x5e37e6 = (_0x5e0029 + _0x5e37e6) % 0x10 | 0x0),
            (_0x5e0029 = Math[_0x32a3a7(0x15f)](_0x5e0029 / 0x10)))
          : ((_0x5e37e6 = (_0x2ac6e6 + _0x5e37e6) % 0x10 | 0x0),
            (_0x2ac6e6 = Math[_0x32a3a7(0x15f)](_0x2ac6e6 / 0x10))),
        (_0x4771d9 === 'x' ? _0x5e37e6 : (_0x5e37e6 & 0x3) | 0x8)[
          _0x32a3a7(0x110)
        ](0x10)
      );
    });
  }
  async [_0x61690(0x12c)]() {
    const _0x2c6bcb = _0x61690,
      {
        openButton: _0x21ed62,
        chatbox: _0x11a8ac,
        sendButton: _0x4c8131,
      } = this[_0x2c6bcb(0x150)];
    await this[_0x2c6bcb(0x143)](_0x11a8ac);
    const { iconSend: _0x44e617 } = this[_0x2c6bcb(0x14c)];
    this[_0x2c6bcb(0x17e)](![], _0x21ed62),
      this['toggleState'](_0x11a8ac),
      _0x21ed62[_0x2c6bcb(0x119)](_0x2c6bcb(0x138), () =>
        this[_0x2c6bcb(0x13a)](_0x11a8ac),
      ),
      _0x4c8131['addEventListener']('click', () =>
        this[_0x2c6bcb(0x195)](_0x11a8ac),
      ),
      (_0x4c8131[_0x2c6bcb(0x18e)] =
        _0x2c6bcb(0x189) + _0x44e617 + _0x2c6bcb(0x168));
    const _0x27fb2a = _0x11a8ac[_0x2c6bcb(0x190)](_0x2c6bcb(0x170));
    _0x27fb2a[_0x2c6bcb(0x119)](_0x2c6bcb(0x12b), ({ key: _0x200ada }) => {
      const _0x25725b = _0x2c6bcb;
      _0x200ada === _0x25725b(0x115) && this[_0x25725b(0x195)](_0x11a8ac);
    });
  }
  async ['syncChatWidgetStyling'](_0x3a08f8) {
    const _0x312cf9 = _0x61690;
    let _0x1fd050 = new Headers();
    _0x1fd050[_0x312cf9(0x131)](_0x312cf9(0x179), _0x312cf9(0x126));
    const _0x2ec70c = { method: _0x312cf9(0x129), headers: _0x1fd050 };
    try {
      const _0x4488aa = await fetch(
        this[_0x312cf9(0x151)] +
          _0x312cf9(0x15e) +
          window[_0x312cf9(0x153)][_0x312cf9(0x12d)],
        _0x2ec70c,
      );
      if (!_0x4488aa['ok'])
        throw new Error(_0x312cf9(0x139) + _0x4488aa[_0x312cf9(0x142)]);
      const _0x382e29 = await _0x4488aa[_0x312cf9(0x113)]();
      this[_0x312cf9(0x13c)](_0x382e29),
        this['updateInitMessage'](_0x382e29),
        await this[_0x312cf9(0x145)](_0x382e29),
        await this['updateSuggestedMessages'](_0x382e29);
      const _0x5edd53 = document['querySelectorAll'](_0x312cf9(0x132));
      _0x5edd53[_0x312cf9(0x161)]((_0x4f26cc) => {
        const _0x9b4737 = _0x312cf9;
        _0x4f26cc?.[_0x9b4737(0x119)](_0x9b4737(0x138), (_0x174495) =>
          this[_0x9b4737(0x114)](_0x174495, _0x3a08f8),
        );
      }),
        this['updateHeader'](_0x382e29);
    } catch (_0x68019d) {
      console[_0x312cf9(0x193)](_0x312cf9(0x154), _0x68019d);
    }
  }
  [_0x61690(0x173)](_0x474cc0) {
    const _0x6545f = _0x61690,
      { initial_message: _0x22f1b1 } = _0x474cc0;
    _0x22f1b1 &&
      (this['history']['push']([
        { sender_type: 'user', content: '' },
        { sender_type: _0x6545f(0x11f), content: _0x22f1b1 },
      ]),
      this['updateChatBox']());
  }
  [_0x61690(0x11c)](_0x31d9cf) {
    const _0x3ff413 = _0x61690,
      { header: _0x2b95e6 } = this['args'],
      { iconRefresh: _0x4ecd67, iconClose: _0x47169b } = this['icons'],
      _0x450f87 = document[_0x3ff413(0x148)](_0x3ff413(0x136));
    _0x450f87[_0x3ff413(0x194)] = _0x3ff413(0x125);
    if (_0x31d9cf[_0x3ff413(0x135)]) {
      const _0x4c7b80 = document[_0x3ff413(0x148)](_0x3ff413(0x121));
      (_0x4c7b80[_0x3ff413(0x13f)] = _0x31d9cf[_0x3ff413(0x135)]),
        (_0x4c7b80[_0x3ff413(0x194)] = _0x3ff413(0x18f)),
        _0x450f87[_0x3ff413(0x18c)](_0x4c7b80);
    }
    _0x31d9cf[_0x3ff413(0x14f)] &&
      (_0x450f87['innerHTML'] += _0x31d9cf[_0x3ff413(0x14f)]),
      _0x2b95e6[_0x3ff413(0x18c)](_0x450f87),
      (_0x2b95e6[_0x3ff413(0x18e)] +=
        _0x3ff413(0x116) + _0x4ecd67 + _0x47169b + _0x3ff413(0x168));
  }
  ['showMessageText'](_0x33b59a, _0x319632) {
    const _0x4184d1 = _0x61690,
      _0xc6c131 = _0x33b59a[_0x4184d1(0x16d)][_0x4184d1(0x157)];
    let _0x382e2a = _0x319632[_0x4184d1(0x190)](_0x4184d1(0x170));
    (_0x382e2a[_0x4184d1(0x13d)] = _0xc6c131), this['onSendButton'](_0x319632);
  }
  [_0x61690(0x120)](_0x535d10) {
    const _0xf01b3e = _0x61690,
      { suggest_messages: _0x1f857b } = _0x535d10,
      { message_suggest: _0x3e736f } = this['args'];
    (_0x1f857b ?? [])[_0xf01b3e(0x161)]((_0x5eac15) => {
      const _0x52829f = _0xf01b3e,
        _0xa1f00a = document[_0x52829f(0x148)]('div');
      (_0xa1f00a[_0x52829f(0x194)] = _0x52829f(0x11a)),
        (_0xa1f00a[_0x52829f(0x157)] = _0x5eac15),
        _0x3e736f[_0x52829f(0x18c)](_0xa1f00a);
    });
  }
  async [_0x61690(0x145)](_0xd06b97) {
    const _0x51461f = _0x61690;
    (this[_0x51461f(0x14c)][_0x51461f(0x130)] = document[_0x51461f(0x148)](
      _0x51461f(0x121),
    )),
      (this[_0x51461f(0x14c)][_0x51461f(0x181)] =
        document[_0x51461f(0x148)]('img')),
      (this[_0x51461f(0x14c)][_0x51461f(0x14d)] =
        _0x51461f(0x178) +
        (_0xd06b97[_0x51461f(0x124)]
          ? '\x22' + _0xd06b97[_0x51461f(0x124)] + '\x22'
          : '#000000') +
        _0x51461f(0x192)),
      _0xd06b97[_0x51461f(0x141)]
        ? ((this[_0x51461f(0x14c)][_0x51461f(0x130)][_0x51461f(0x13f)] =
            _0xd06b97['chat_icon_url']),
          (this[_0x51461f(0x14c)]['isNotClicked'][_0x51461f(0x13f)] =
            _0xd06b97[_0x51461f(0x141)]))
        : ((this[_0x51461f(0x14c)][_0x51461f(0x130)][_0x51461f(0x13f)] =
            _0x51461f(0x17c)),
          (this['icons'][_0x51461f(0x181)][_0x51461f(0x13f)] =
            _0x51461f(0x17c)));
  }
  ['setStyle'](_0x43375b) {
    const _0x235448 = _0x61690,
      {
        theme: _0x57a6ae,
        chat_bubble_button_color: _0x2e943f,
        align_chat_bubble_button: _0x3af4e6,
        chat_message_color: _0x23a837,
        suggest_messages: _0x12c405,
      } = _0x43375b,
      _0x2f5835 = window[_0x235448(0x159)][_0x235448(0x17b)][_0x235448(0x158)](
        'chatfly',
      )
        ? _0x235448(0x167)
        : _0x235448(0x112),
      _0x57fce6 = {
        chatButtonAlignment: _0x3af4e6 ?? _0x235448(0x152),
        chatBoxAlignment: _0x3af4e6 ?? _0x235448(0x152),
        chatButtonDirection:
          _0x3af4e6 === 'left' ? _0x235448(0x152) : _0x235448(0x166),
        chatButtonColor: _0x2e943f ?? _0x235448(0x191),
        chatBoxBackgroundColor:
          _0x57a6ae === _0x235448(0x174) ? _0x235448(0x134) : _0x235448(0x191),
        chatInputBorderColor:
          _0x57a6ae === 'dark' ? _0x235448(0x128) : _0x235448(0x117),
        chatBoxHeaderBorderColor:
          _0x57a6ae === _0x235448(0x174) ? '#cdceed' : _0x235448(0x117),
        chatInputColor:
          _0x57a6ae === _0x235448(0x174) ? _0x235448(0x191) : _0x235448(0x18d),
        chatBoxDisplayNameColor:
          _0x57a6ae === _0x235448(0x174) ? _0x235448(0x191) : _0x235448(0x12e),
        messageItemOperatorBackgroundColor: _0x23a837 ?? _0x235448(0x13e),
        suggestedMessagesHeight: _0x12c405?.[_0x235448(0x162)] ? '60px' : '0px',
      },
      _0x338815 = document[_0x235448(0x148)]('style');
    (_0x338815[_0x235448(0x157)] = _0x2f5835[_0x235448(0x169)](
      /{{([^}]+)}}/g,
      (_0x1248fe, _0x55c11d) => _0x57fce6[_0x55c11d],
    )),
      document[_0x235448(0x160)]['append'](_0x338815);
  }
  [_0x61690(0x146)](_0x73c204) {
    return new Promise((_0x21716b) => setTimeout(_0x21716b, _0x73c204));
  }
  async [_0x61690(0x195)](_0x45a1a7) {
    const _0x403680 = _0x61690;
    let _0x315773 = _0x45a1a7[_0x403680(0x190)](_0x403680(0x170)),
      _0xf78ca6 = _0x315773[_0x403680(0x13d)];
    _0x315773[_0x403680(0x13d)] = '';
    if (_0xf78ca6 === '') return;
    this[_0x403680(0x17a)][_0x403680(0x149)]([
      { sender_type: 'user', content: _0xf78ca6 },
      { sender_type: _0x403680(0x11f), content: '' },
    ]),
      this[_0x403680(0x18b)]();
    let _0x1db465 = new Headers();
    _0x1db465[_0x403680(0x131)](_0x403680(0x179), _0x403680(0x126));
    const _0xdb2958 = {
      method: _0x403680(0x123),
      headers: _0x1db465,
      body: JSON[_0x403680(0x111)]({
        message: _0xf78ca6,
        session_id: this[_0x403680(0x16b)],
        ...window[_0x403680(0x153)],
      }),
    };
    try {
      const _0x4fdad1 = await fetch(this[_0x403680(0x176)], _0xdb2958);
      if (!_0x4fdad1['ok'])
        throw new Error(
          'Request\x20failed\x20with\x20status:\x20' +
            _0x4fdad1[_0x403680(0x142)],
        );
      const _0xdecb44 = await _0x4fdad1[_0x403680(0x15b)],
        _0x2c3685 = _0xdecb44[_0x403680(0x133)]();
      for await (const _0xd71217 of this['asyncGenerator'](_0x2c3685)) {
      }
    } catch (_0x7c7e3e) {
      console[_0x403680(0x193)](_0x403680(0x154), _0x7c7e3e),
        (_0x315773['value'] = '');
    }
  }
  async *['asyncGenerator'](_0x299255) {
    const _0x2e42d5 = _0x61690,
      _0x5ac2d1 = new TextDecoder();
    while (!![]) {
      const { done: _0x55d513, value: _0x2ee816 } =
        await _0x299255[_0x2e42d5(0x14b)]();
      if (_0x55d513) return;
      const _0x47662f = _0x5ac2d1['decode'](_0x2ee816);
      await this[_0x2e42d5(0x146)](0x32),
        (this['history'][_0x2e42d5(0x185)](-0x1)[0x0][0x1][_0x2e42d5(0x15c)] +=
          _0x47662f),
        await this['updateChatBox']();
    }
  }
  async [_0x61690(0x18b)]() {
    const _0x19492e = _0x61690;
    let _0x4ef482 = document[_0x19492e(0x190)]('.chatbox__messages'),
      _0x5615e9 = '';
    this[_0x19492e(0x17a)][_0x19492e(0x161)]((_0x2a0a6d, _0x2d1f4e) => {
      const _0xf662 = _0x19492e;
      !(
        _0x2a0a6d[0x0][_0xf662(0x177)] == 'user' && !_0x2a0a6d[0x0]['content']
      ) &&
        (_0x5615e9 +=
          _0xf662(0x164) + _0x2a0a6d[0x0][_0xf662(0x15c)] + '</div>');
      if (
        _0x2a0a6d[0x1][_0xf662(0x177)] == _0xf662(0x11f) &&
        _0x2a0a6d[0x1]['content']
      )
        _0x5615e9 += _0xf662(0x16a) + _0x2a0a6d[0x1][_0xf662(0x15c)] + '</div>';
      else
        _0x5615e9 +=
          '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    }),
      (_0x4ef482['innerHTML'] =
        _0x19492e(0x189) + _0x5615e9 + _0x19492e(0x168));
  }
  [_0x61690(0x183)]() {
    const _0x12ed63 = _0x61690,
      { chatbox: _0x205629 } = this[_0x12ed63(0x150)];
    _0x205629[_0x12ed63(0x184)][_0x12ed63(0x12c)] = _0x12ed63(0x13b);
  }
  ['refreshHistory']() {
    const _0x46213f = _0x61690;
    (this['history'] = []),
      (this[_0x46213f(0x16b)] = this[_0x46213f(0x15a)]()),
      this[_0x46213f(0x18b)]();
  }
  [_0x61690(0x13a)](_0x1e7cc5) {
    const _0x1a537d = _0x61690;
    (this[_0x1a537d(0x12f)] = !this[_0x1a537d(0x12f)]),
      this[_0x1a537d(0x137)](
        _0x1e7cc5,
        this[_0x1a537d(0x150)][_0x1a537d(0x127)],
      );
  }
  [_0x61690(0x137)](_0x12527f, _0x243088) {
    const _0x3120fa = _0x61690;
    _0x12527f[_0x3120fa(0x184)][_0x3120fa(0x12c)] =
      _0x12527f[_0x3120fa(0x184)][_0x3120fa(0x12c)] === _0x3120fa(0x13b)
        ? ''
        : 'none';
    if (this[_0x3120fa(0x12f)])
      _0x12527f[_0x3120fa(0x17d)][_0x3120fa(0x156)](_0x3120fa(0x12a)),
        this[_0x3120fa(0x17e)](!![], _0x243088);
    else !this[_0x3120fa(0x12f)] && this[_0x3120fa(0x17e)](![], _0x243088);
  }
  [_0x61690(0x17e)](_0x1283ad, _0x405954) {
    const _0x4234c4 = _0x61690,
      { isClicked: _0xa685bd, isNotClicked: _0x3cab8c } = this['icons'],
      _0x3eec6d = document[_0x4234c4(0x190)]('.close__button');
    _0x3eec6d[_0x4234c4(0x119)](_0x4234c4(0x138), () =>
      this[_0x4234c4(0x183)](),
    );
    const _0x215c2a = document[_0x4234c4(0x190)](_0x4234c4(0x16f));
    _0x215c2a[_0x4234c4(0x119)]('click', () => this['refreshHistory']());
    const _0x5bd856 = _0x405954[_0x4234c4(0x11e)],
      _0x53a303 = _0x5bd856['firstElementChild'];
    _0x5bd856['replaceChild'](_0x1283ad ? _0xa685bd : _0x3cab8c, _0x53a303);
  }
}
function _0x128f() {
  const _0x124c28 = [
    '4213108mJmxdw',
    'updateChatBox',
    'appendChild',
    '#inherit',
    'innerHTML',
    'bot_avatar',
    'querySelector',
    '#fff',
    '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    'error',
    'className',
    'onSendButton',
    'toString',
    'stringify',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:14px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'json',
    'showMessageText',
    'Enter',
    '<div\x20class=\x22icon_header\x22>',
    '#0000004a',
    '339fnCAwu',
    'addEventListener',
    'chatbot__suggest--item',
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    'updateHeader',
    '.chatbox__support',
    'firstElementChild',
    'assistant',
    'updateSuggestedMessages',
    'img',
    'baseUrl',
    'POST',
    'chat_message_color',
    'icon_header',
    'application/json',
    'openButton',
    '#cdceed',
    'GET',
    'chatbox--active',
    'keyup',
    'display',
    'bot_id',
    'inherit',
    'state',
    'isClicked',
    'append',
    '.chatbot__suggest--item',
    'getReader',
    '#111827',
    'bot_avatar_url',
    'div',
    'showOrHideChatBox',
    'click',
    'Request\x20failed\x20with\x20status:\x20',
    'toggleState',
    'none',
    'setStyle',
    'value',
    '#3399FF',
    'src',
    '1947261MvlovL',
    'chat_icon_url',
    'status',
    'syncChatWidgetStyling',
    '3258PbfSEF',
    'updateChatIcons',
    'sleep',
    '.chatbox__send--footer',
    'createElement',
    'push',
    '1874wprTdX',
    'read',
    'icons',
    'iconSend',
    '12887910omtTwD',
    'display_name',
    'args',
    'getBotWidgetSettingUrl',
    'right',
    'chatbotConfig',
    'Error:',
    '/bot/bot-widget-setting',
    'add',
    'textContent',
    'includes',
    'location',
    'generateUUID',
    'body',
    'content',
    '.chatbox__button',
    '?bot_id=',
    'floor',
    'head',
    'forEach',
    'length',
    '3552atghCc',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20',
    'left',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:\x2014px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#fff;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    '</div>',
    'replace',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'session_id',
    '.chatbot__suggest',
    'target',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    '.refresh__button',
    'input',
    '/chat/get-streaming-response',
    '3189100dPDQUC',
    'updateInitMessage',
    'dark',
    'random',
    'getStreamingResponseUrl',
    'sender_type',
    '<svg\x20fill=',
    'Content-Type',
    'history',
    'origin',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'classList',
    'toggleIcon',
    'undefined',
    'now',
    'isNotClicked',
    '21LDECYL',
    'closeChatBox',
    'style',
    'slice',
    '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
    '730944frbVyV',
    '.chatbot__header',
    '<div>',
  ];
  _0x128f = function () {
    return _0x124c28;
  };
  return _0x128f();
}
(document[_0x61690(0x15b)] = document['createElement'](_0x61690(0x15b))),
  (document[_0x61690(0x160)][_0x61690(0x18e)] += _0x61690(0x165));
const elemDiv = _0x61690(0x16e);
document[_0x61690(0x15b)][_0x61690(0x18e)] += elemDiv;
function _0x5bb0(_0x3ae1ae, _0x48cb28) {
  const _0x128fd4 = _0x128f();
  return (
    (_0x5bb0 = function (_0x5bb047, _0xb846c1) {
      _0x5bb047 = _0x5bb047 - 0x110;
      let _0xada6c1 = _0x128fd4[_0x5bb047];
      return _0xada6c1;
    }),
    _0x5bb0(_0x3ae1ae, _0x48cb28)
  );
}
const chatbox = new InteractiveChatbox();
chatbox[_0x61690(0x12c)]();
