const _0x11209e = _0x4d7a;
(function (_0x9cdd14, _0x38704b) {
  const _0x263dcf = _0x4d7a,
    _0x2de613 = _0x9cdd14();
  while (!![]) {
    try {
      const _0x534648 =
        parseInt(_0x263dcf(0x106)) / 0x1 +
        parseInt(_0x263dcf(0xcc)) / 0x2 +
        -parseInt(_0x263dcf(0x117)) / 0x3 +
        -parseInt(_0x263dcf(0xda)) / 0x4 +
        -parseInt(_0x263dcf(0xd5)) / 0x5 +
        parseInt(_0x263dcf(0xbf)) / 0x6 +
        (parseInt(_0x263dcf(0xfb)) / 0x7) * (parseInt(_0x263dcf(0xc4)) / 0x8);
      if (_0x534648 === _0x38704b) break;
      else _0x2de613['push'](_0x2de613['shift']());
    } catch (_0x21236d) {
      _0x2de613['push'](_0x2de613['shift']());
    }
  }
})(_0x3657, 0x353bb);
class InteractiveChatbox {
  constructor() {
    const _0x2e4dee = _0x4d7a;
    (this[_0x2e4dee(0xae)] = _0x2e4dee(0xfc)),
      (this[_0x2e4dee(0xac)] = this[_0x2e4dee(0xae)] + _0x2e4dee(0xd3)),
      (this[_0x2e4dee(0xe2)] = this[_0x2e4dee(0xae)] + _0x2e4dee(0xfd)),
      (this[_0x2e4dee(0x111)] = {
        openButton: document[_0x2e4dee(0x116)]('.chatbox__button'),
        chatbox: document[_0x2e4dee(0x116)]('.chatbox__support'),
        sendButton: document[_0x2e4dee(0x116)](_0x2e4dee(0x112)),
        header: document[_0x2e4dee(0x116)](_0x2e4dee(0xdd)),
        message_suggest: document[_0x2e4dee(0x116)](_0x2e4dee(0xb0)),
      }),
      (this[_0x2e4dee(0xd2)] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x2e4dee(0xe9),
        iconRefresh: _0x2e4dee(0xc1),
      }),
      (this['state'] = ![]),
      (this['history'] = []),
      (this[_0x2e4dee(0x10d)] = this[_0x2e4dee(0x10c)]());
  }
  [_0x11209e(0x10c)]() {
    const _0x7b1ea9 = _0x11209e;
    var _0x3bf5a6 = new Date()[_0x7b1ea9(0xed)](),
      _0x48473d =
        (typeof performance !== _0x7b1ea9(0xec) &&
          performance[_0x7b1ea9(0xbe)] &&
          performance[_0x7b1ea9(0xbe)]() * 0x3e8) ||
        0x0;
    return _0x7b1ea9(0xf7)[_0x7b1ea9(0x100)](/[xy]/g, function (_0x10fe30) {
      const _0x1d24c5 = _0x7b1ea9;
      var _0xcbbd3e = Math[_0x1d24c5(0xc6)]() * 0x10;
      return (
        _0x3bf5a6 > 0x0
          ? ((_0xcbbd3e = (_0x3bf5a6 + _0xcbbd3e) % 0x10 | 0x0),
            (_0x3bf5a6 = Math[_0x1d24c5(0xa9)](_0x3bf5a6 / 0x10)))
          : ((_0xcbbd3e = (_0x48473d + _0xcbbd3e) % 0x10 | 0x0),
            (_0x48473d = Math[_0x1d24c5(0xa9)](_0x48473d / 0x10))),
        (_0x10fe30 === 'x' ? _0xcbbd3e : (_0xcbbd3e & 0x3) | 0x8)['toString'](
          0x10,
        )
      );
    });
  }
  async ['display']() {
    const _0x21eeed = _0x11209e,
      {
        openButton: _0x72e1cc,
        chatbox: _0x721df7,
        sendButton: _0x20e3c2,
      } = this['args'];
    await this[_0x21eeed(0x110)](_0x721df7);
    const { iconSend: _0x4349ff } = this['icons'];
    this['toggleIcon'](![], _0x72e1cc),
      this[_0x21eeed(0xd1)](_0x721df7),
      _0x72e1cc[_0x21eeed(0x10a)]('click', () =>
        this['toggleState'](_0x721df7),
      ),
      _0x20e3c2['addEventListener'](_0x21eeed(0x119), () =>
        this[_0x21eeed(0xe7)](_0x721df7),
      ),
      (_0x20e3c2['innerHTML'] = '<div>' + _0x4349ff + _0x21eeed(0x103));
    const _0x548abf = _0x721df7[_0x21eeed(0x116)](_0x21eeed(0xaf));
    _0x548abf[_0x21eeed(0x10a)](_0x21eeed(0x11b), ({ key: _0x1306ab }) => {
      const _0x37f7c9 = _0x21eeed;
      _0x1306ab === _0x37f7c9(0xf1) && this[_0x37f7c9(0xe7)](_0x721df7);
    });
  }
  async [_0x11209e(0x110)](_0x140424) {
    const _0x27cead = _0x11209e;
    let _0x2ac1b9 = new Headers();
    _0x2ac1b9[_0x27cead(0xb4)]('Content-Type', 'application/json');
    const _0x222292 = { method: 'GET', headers: _0x2ac1b9 };
    try {
      const _0x228e5b = await fetch(
        this[_0x27cead(0xe2)] +
          _0x27cead(0xbb) +
          window[_0x27cead(0xe0)][_0x27cead(0xba)],
        _0x222292,
      );
      if (!_0x228e5b['ok'])
        throw new Error(_0x27cead(0xc9) + _0x228e5b[_0x27cead(0xc3)]);
      const _0x37a8c9 = await _0x228e5b[_0x27cead(0xca)]();
      this[_0x27cead(0xde)](_0x37a8c9),
        this[_0x27cead(0xeb)](_0x37a8c9),
        await this[_0x27cead(0xe1)](_0x37a8c9),
        await this[_0x27cead(0xa6)](_0x37a8c9);
      const _0x595661 = document[_0x27cead(0xd0)]('.chatbot__suggest--item');
      _0x595661[_0x27cead(0x105)]((_0x39f47e) => {
        const _0x433f17 = _0x27cead;
        _0x39f47e?.[_0x433f17(0x10a)](_0x433f17(0x119), (_0x246ea7) =>
          this[_0x433f17(0xf3)](_0x246ea7, _0x140424),
        );
      }),
        this[_0x27cead(0xd8)](_0x37a8c9);
    } catch (_0xf81d4c) {
      console[_0x27cead(0xf8)](_0x27cead(0x101), _0xf81d4c);
    }
  }
  [_0x11209e(0xeb)](_0x2fcdfa) {
    const _0x2eb37f = _0x11209e,
      { initial_message: _0x3e5f2b } = _0x2fcdfa;
    _0x3e5f2b &&
      (this[_0x2eb37f(0x122)][_0x2eb37f(0xf5)]([
        { sender_type: _0x2eb37f(0xa5), content: '' },
        { sender_type: _0x2eb37f(0xe4), content: _0x3e5f2b },
      ]),
      this[_0x2eb37f(0xc7)]());
  }
  [_0x11209e(0xd8)](_0x43d469) {
    const _0x21066b = _0x11209e,
      { header: _0xbac1bc } = this['args'],
      { iconRefresh: _0x54aa75, iconClose: _0xd7c259 } = this['icons'],
      _0x1800e5 = document[_0x21066b(0xea)](_0x21066b(0xb6));
    _0x1800e5[_0x21066b(0x107)] = _0x21066b(0xad);
    if (_0x43d469['bot_avatar_url']) {
      const _0x1f4db3 = document['createElement']('img');
      (_0x1f4db3[_0x21066b(0xf0)] = _0x43d469[_0x21066b(0xcb)]),
        (_0x1f4db3[_0x21066b(0x107)] = _0x21066b(0x113)),
        _0x1800e5[_0x21066b(0xb2)](_0x1f4db3);
    }
    _0x43d469[_0x21066b(0xdc)] &&
      (_0x1800e5[_0x21066b(0xdf)] += _0x43d469[_0x21066b(0xdc)]),
      _0xbac1bc[_0x21066b(0xb2)](_0x1800e5),
      (_0xbac1bc['innerHTML'] +=
        _0x21066b(0xcd) + _0x54aa75 + _0xd7c259 + _0x21066b(0x103));
  }
  [_0x11209e(0xf3)](_0x318410, _0x511793) {
    const _0x2b7f09 = _0x11209e,
      _0x517791 = _0x318410[_0x2b7f09(0x10f)]['textContent'];
    let _0x3deac5 = _0x511793[_0x2b7f09(0x116)](_0x2b7f09(0xaf));
    (_0x3deac5[_0x2b7f09(0xff)] = _0x517791), this[_0x2b7f09(0xe7)](_0x511793);
  }
  [_0x11209e(0xa6)](_0x99a1b1) {
    const _0x4c8e78 = _0x11209e,
      { suggest_messages: _0x2f35ba } = _0x99a1b1,
      { message_suggest: _0x4a43c9 } = this[_0x4c8e78(0x111)];
    (_0x2f35ba ?? [])[_0x4c8e78(0x105)]((_0x35cb3e) => {
      const _0x24e094 = _0x4c8e78,
        _0x5f2c1d = document[_0x24e094(0xea)](_0x24e094(0xb6));
      (_0x5f2c1d[_0x24e094(0x107)] = _0x24e094(0xee)),
        (_0x5f2c1d[_0x24e094(0x115)] = _0x35cb3e),
        _0x4a43c9[_0x24e094(0xb2)](_0x5f2c1d);
    });
  }
  async [_0x11209e(0xe1)](_0x5a1d4b) {
    const _0x164372 = _0x11209e;
    (this[_0x164372(0xd2)][_0x164372(0xc5)] = document[_0x164372(0xea)](
      _0x164372(0x11f),
    )),
      (this['icons'][_0x164372(0xab)] = document['createElement'](
        _0x164372(0x11f),
      )),
      (this[_0x164372(0xd2)]['iconSend'] =
        _0x164372(0xf4) +
        (_0x5a1d4b['chat_message_color']
          ? '\x22' + _0x5a1d4b[_0x164372(0xf6)] + '\x22'
          : '#000000') +
        _0x164372(0xa3)),
      _0x5a1d4b[_0x164372(0xc8)]
        ? ((this[_0x164372(0xd2)]['isClicked'][_0x164372(0xf0)] =
            _0x5a1d4b[_0x164372(0xc8)]),
          (this['icons'][_0x164372(0xab)]['src'] = _0x5a1d4b[_0x164372(0xc8)]))
        : ((this[_0x164372(0xd2)][_0x164372(0xc5)][_0x164372(0xf0)] =
            'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg'),
          (this[_0x164372(0xd2)][_0x164372(0xab)]['src'] = _0x164372(0xa8)));
  }
  [_0x11209e(0xde)](_0x536b91) {
    const _0x2b6c6e = _0x11209e,
      {
        theme: _0x4dc2cb,
        chat_bubble_button_color: _0x459594,
        align_chat_bubble_button: _0x56b522,
        chat_message_color: _0x3862ac,
        suggest_messages: _0x505f53,
      } = _0x536b91,
      _0x9d5135 = _0x2b6c6e(0xaa),
      _0x29960d = {
        chatButtonAlignment: _0x56b522 ?? 'right',
        chatBoxAlignment: _0x56b522 ?? _0x2b6c6e(0x11d),
        chatButtonDirection:
          _0x56b522 === _0x2b6c6e(0xef) ? _0x2b6c6e(0x11d) : _0x2b6c6e(0xef),
        chatButtonColor: _0x459594 ?? _0x2b6c6e(0x121),
        chatBoxBackgroundColor:
          _0x4dc2cb === 'dark' ? _0x2b6c6e(0x10b) : '#fff',
        chatInputBorderColor:
          _0x4dc2cb === _0x2b6c6e(0xd6) ? '#cdceed' : _0x2b6c6e(0x104),
        chatBoxHeaderBorderColor:
          _0x4dc2cb === _0x2b6c6e(0xd6) ? '#cdceed' : _0x2b6c6e(0x104),
        chatInputColor:
          _0x4dc2cb === _0x2b6c6e(0xd6) ? _0x2b6c6e(0x121) : '#inherit',
        chatBoxDisplayNameColor:
          _0x4dc2cb === 'dark' ? _0x2b6c6e(0x121) : _0x2b6c6e(0xe5),
        messageItemOperatorBackgroundColor: _0x3862ac ?? _0x2b6c6e(0xd4),
        suggestedMessagesHeight: _0x505f53?.[_0x2b6c6e(0xbd)]
          ? _0x2b6c6e(0xce)
          : '0px',
      },
      _0x2369df = document[_0x2b6c6e(0xea)]('style');
    (_0x2369df[_0x2b6c6e(0x115)] = _0x9d5135[_0x2b6c6e(0x100)](
      /{{([^}]+)}}/g,
      (_0x3a7928, _0x5c0f9a) => _0x29960d[_0x5c0f9a],
    )),
      document[_0x2b6c6e(0xe8)][_0x2b6c6e(0xb4)](_0x2369df);
  }
  [_0x11209e(0xd7)](_0x40fad9) {
    return new Promise((_0x5d1765) => setTimeout(_0x5d1765, _0x40fad9));
  }
  async ['onSendButton'](_0x40e0da) {
    const _0x2e2472 = _0x11209e;
    let _0x1a01fe = _0x40e0da['querySelector'](_0x2e2472(0xaf)),
      _0x43fcfc = _0x1a01fe[_0x2e2472(0xff)];
    _0x1a01fe[_0x2e2472(0xff)] = '';
    if (_0x43fcfc === '') return;
    this[_0x2e2472(0x122)][_0x2e2472(0xf5)]([
      { sender_type: _0x2e2472(0xa5), content: _0x43fcfc },
      { sender_type: _0x2e2472(0xe4), content: '' },
    ]),
      this['updateChatBox']();
    let _0x369f82 = new Headers();
    _0x369f82[_0x2e2472(0xb4)](_0x2e2472(0xf2), 'application/json');
    const _0x226874 = {
      method: _0x2e2472(0x108),
      headers: _0x369f82,
      body: JSON[_0x2e2472(0xd9)]({
        message: _0x43fcfc,
        session_id: this[_0x2e2472(0x10d)],
        ...window['chatbotConfig'],
      }),
    };
    try {
      const _0x2e5035 = await fetch(this[_0x2e2472(0xac)], _0x226874);
      if (!_0x2e5035['ok'])
        throw new Error(_0x2e2472(0xc9) + _0x2e5035[_0x2e2472(0xc3)]);
      const _0x3a907d = await _0x2e5035[_0x2e2472(0xe6)],
        _0x57a13a = _0x3a907d[_0x2e2472(0xb8)]();
      for await (const _0x2b5085 of this[_0x2e2472(0x11c)](_0x57a13a)) {
      }
    } catch (_0x4e924c) {
      console[_0x2e2472(0xf8)](_0x2e2472(0x101), _0x4e924c),
        (_0x1a01fe[_0x2e2472(0xff)] = '');
    }
  }
  async *[_0x11209e(0x11c)](_0x580ff6) {
    const _0x5dbb56 = _0x11209e,
      _0x2a96c3 = new TextDecoder();
    while (!![]) {
      const { done: _0x4e4ed6, value: _0x410cd5 } =
        await _0x580ff6[_0x5dbb56(0x11a)]();
      if (_0x4e4ed6) return;
      const _0x7eb687 = _0x2a96c3['decode'](_0x410cd5);
      await this[_0x5dbb56(0xd7)](0x32),
        (this[_0x5dbb56(0x122)][_0x5dbb56(0xfe)](-0x1)[0x0][0x1]['content'] +=
          _0x7eb687),
        await this[_0x5dbb56(0xc7)]();
    }
  }
  async [_0x11209e(0xc7)]() {
    const _0x4b105f = _0x11209e;
    let _0xd66b15 = document['querySelector']('.chatbox__messages'),
      _0x1a4a9a = '';
    this[_0x4b105f(0x122)]['forEach']((_0x5a6026, _0x567fa5) => {
      const _0x27b460 = _0x4b105f;
      !(
        _0x5a6026[0x0][_0x27b460(0xb9)] == _0x27b460(0xa5) &&
        !_0x5a6026[0x0][_0x27b460(0xf9)]
      ) &&
        (_0x1a4a9a +=
          _0x27b460(0xb7) + _0x5a6026[0x0][_0x27b460(0xf9)] + '</div>');
      if (
        _0x5a6026[0x1]['sender_type'] == 'assistant' &&
        _0x5a6026[0x1][_0x27b460(0xf9)]
      )
        _0x1a4a9a += _0x27b460(0xb3) + _0x5a6026[0x1]['content'] + '</div>';
      else _0x1a4a9a += _0x27b460(0xc0);
    }),
      (_0xd66b15[_0x4b105f(0xdf)] = _0x4b105f(0x11e) + _0x1a4a9a + '</div>');
  }
  ['closeChatBox']() {
    const _0x24af6a = _0x11209e,
      { chatbox: _0x3d0ac5 } = this[_0x24af6a(0x111)];
    _0x3d0ac5[_0x24af6a(0xc2)][_0x24af6a(0xa4)] = _0x24af6a(0xa7);
  }
  [_0x11209e(0xe3)]() {
    const _0x586c67 = _0x11209e;
    (this[_0x586c67(0x122)] = []),
      (this[_0x586c67(0x10d)] = this['generateUUID']()),
      this[_0x586c67(0xc7)]();
  }
  ['toggleState'](_0x2bb345) {
    const _0x23e6cc = _0x11209e;
    (this[_0x23e6cc(0x109)] = !this[_0x23e6cc(0x109)]),
      this[_0x23e6cc(0xcf)](_0x2bb345, this[_0x23e6cc(0x111)][_0x23e6cc(0xbc)]);
  }
  [_0x11209e(0xcf)](_0x1feb67, _0x4cf285) {
    const _0x14eb65 = _0x11209e;
    _0x1feb67[_0x14eb65(0xc2)]['display'] =
      _0x1feb67[_0x14eb65(0xc2)][_0x14eb65(0xa4)] === _0x14eb65(0xa7)
        ? ''
        : _0x14eb65(0xa7);
    if (this[_0x14eb65(0x109)])
      _0x1feb67[_0x14eb65(0x114)][_0x14eb65(0x102)](_0x14eb65(0x120)),
        this[_0x14eb65(0xfa)](!![], _0x4cf285);
    else !this[_0x14eb65(0x109)] && this[_0x14eb65(0xfa)](![], _0x4cf285);
  }
  [_0x11209e(0xfa)](_0x3cbef6, _0x2b177e) {
    const _0x34f391 = _0x11209e,
      { isClicked: _0x525e6d, isNotClicked: _0x1b2334 } = this[_0x34f391(0xd2)],
      _0x516b3e = document[_0x34f391(0x116)](_0x34f391(0x10e));
    _0x516b3e[_0x34f391(0x10a)](_0x34f391(0x119), () => this['closeChatBox']());
    const _0x1052d2 = document[_0x34f391(0x116)](_0x34f391(0x118));
    _0x1052d2[_0x34f391(0x10a)](_0x34f391(0x119), () =>
      this[_0x34f391(0xe3)](),
    );
    const _0x573705 = _0x2b177e[_0x34f391(0xb1)],
      _0x2dd6f9 = _0x573705[_0x34f391(0xb1)];
    _0x573705[_0x34f391(0xdb)](_0x3cbef6 ? _0x525e6d : _0x1b2334, _0x2dd6f9);
  }
}
(document[_0x11209e(0xe6)] = document[_0x11209e(0xea)](_0x11209e(0xe6))),
  (document[_0x11209e(0xe8)]['innerHTML'] += _0x11209e(0xb5));
const elemDiv =
  '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
document[_0x11209e(0xe6)]['innerHTML'] += elemDiv;
const chatbox = new InteractiveChatbox();
function _0x4d7a(_0x485e7b, _0x596244) {
  const _0x3657ad = _0x3657();
  return (
    (_0x4d7a = function (_0x4d7a42, _0x383e74) {
      _0x4d7a42 = _0x4d7a42 - 0xa3;
      let _0xeb2eb6 = _0x3657ad[_0x4d7a42];
      return _0xeb2eb6;
    }),
    _0x4d7a(_0x485e7b, _0x596244)
  );
}
chatbox[_0x11209e(0xa4)]();
function _0x3657() {
  const _0x5989c3 = [
    'onSendButton',
    'head',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    'createElement',
    'updateInitMessage',
    'undefined',
    'getTime',
    'chatbot__suggest--item',
    'left',
    'src',
    'Enter',
    'Content-Type',
    'showMessageText',
    '<svg\x20fill=',
    'push',
    'chat_message_color',
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    'error',
    'content',
    'toggleIcon',
    '4935QqLtVJ',
    'https://backend.chatfly.co/api',
    '/bot/bot-widget-setting',
    'slice',
    'value',
    'replace',
    'Error:',
    'add',
    '</div>',
    '#0000004a',
    'forEach',
    '89104auJmqV',
    'className',
    'POST',
    'state',
    'addEventListener',
    '#111827',
    'generateUUID',
    'session_id',
    '.close__button',
    'target',
    'syncChatWidgetStyling',
    'args',
    '.chatbox__send--footer',
    'bot_avatar',
    'classList',
    'textContent',
    'querySelector',
    '1228440wIHpPA',
    '.refresh__button',
    'click',
    'read',
    'keyup',
    'asyncGenerator',
    'right',
    '<div>',
    'img',
    'chatbox--active',
    '#fff',
    'history',
    '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    'display',
    'user',
    'updateSuggestedMessages',
    'none',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'floor',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:500px;width:350px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{height:{{suggestedMessagesHeight}};white-space:\x20nowrap;display:flex;overflow-x:auto;column-gap:10px;padding:10px\x2010px\x200}.chatbot__suggest--item{height:100%;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'isNotClicked',
    'getStreamingResponseUrl',
    'icon_header',
    'baseUrl',
    'input',
    '.chatbot__suggest',
    'firstElementChild',
    'appendChild',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'append',
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20',
    'div',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    'getReader',
    'sender_type',
    'bot_id',
    '?bot_id=',
    'openButton',
    'length',
    'now',
    '563898NYIdSI',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
    'style',
    'status',
    '6504fYOMoM',
    'isClicked',
    'random',
    'updateChatBox',
    'chat_icon_url',
    'Request\x20failed\x20with\x20status:\x20',
    'json',
    'bot_avatar_url',
    '576606TctLmG',
    '<div\x20class=\x22icon_header\x22>',
    '60px',
    'showOrHideChatBox',
    'querySelectorAll',
    'toggleState',
    'icons',
    '/chat/get-streaming-response',
    '#3399FF',
    '2010995JwqNyq',
    'dark',
    'sleep',
    'updateHeader',
    'stringify',
    '59332vjPWuZ',
    'replaceChild',
    'display_name',
    '.chatbot__header',
    'setStyle',
    'innerHTML',
    'chatbotConfig',
    'updateChatIcons',
    'getBotWidgetSettingUrl',
    'refreshHistory',
    'assistant',
    'inherit',
    'body',
  ];
  _0x3657 = function () {
    return _0x5989c3;
  };
  return _0x3657();
}
