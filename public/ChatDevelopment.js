const _0x185daa = _0x485e;
(function (_0x182030, _0x268390) {
  const _0x2eb77e = _0x485e,
    _0x408cbb = _0x182030();
  while (!![]) {
    try {
      const _0x3694ff =
        (parseInt(_0x2eb77e(0x1de)) / 0x1) *
          (-parseInt(_0x2eb77e(0x22a)) / 0x2) +
        (-parseInt(_0x2eb77e(0x24a)) / 0x3) *
          (-parseInt(_0x2eb77e(0x216)) / 0x4) +
        (parseInt(_0x2eb77e(0x1db)) / 0x5) *
          (parseInt(_0x2eb77e(0x1d8)) / 0x6) +
        (parseInt(_0x2eb77e(0x21c)) / 0x7) *
          (-parseInt(_0x2eb77e(0x23d)) / 0x8) +
        -parseInt(_0x2eb77e(0x21e)) / 0x9 +
        -parseInt(_0x2eb77e(0x24b)) / 0xa +
        (-parseInt(_0x2eb77e(0x244)) / 0xb) *
          (-parseInt(_0x2eb77e(0x20d)) / 0xc);
      if (_0x3694ff === _0x268390) break;
      else _0x408cbb['push'](_0x408cbb['shift']());
    } catch (_0x36d193) {
      _0x408cbb['push'](_0x408cbb['shift']());
    }
  }
})(_0x26e0, 0x97a1d);
class InteractiveChatbox {
  constructor() {
    const _0xa735a7 = _0x485e;
    (this[_0xa735a7(0x204)] = 'https://backend.dev.chatfly.co/api'),
      (this[_0xa735a7(0x22c)] = this[_0xa735a7(0x204)] + _0xa735a7(0x1b1)),
      (this[_0xa735a7(0x24d)] =
        this[_0xa735a7(0x204)] + '/bot/bot-widget-setting'),
      (this[_0xa735a7(0x1a7)] = this[_0xa735a7(0x204)] + _0xa735a7(0x222)),
      (this[_0xa735a7(0x1ba)] = this['baseUrl'] + _0xa735a7(0x217)),
      (this[_0xa735a7(0x1ee)] = {
        openButton: document[_0xa735a7(0x1c7)](_0xa735a7(0x1ae)),
        chatbox: document['querySelector']('.chatbox__support'),
        sendButton: document['querySelector']('.chatbox__send--footer'),
        header: document[_0xa735a7(0x1c7)](_0xa735a7(0x1e6)),
        message_suggest: document[_0xa735a7(0x1c7)]('.chatbot__suggest'),
        chatFlyContainer: document[_0xa735a7(0x1c7)](_0xa735a7(0x1f6)),
        avartar: document['querySelector'](_0xa735a7(0x219)),
        formCollect: document[_0xa735a7(0x1c7)](_0xa735a7(0x241)),
      }),
      (this[_0xa735a7(0x1fd)] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0xa735a7(0x227),
        iconRefresh: _0xa735a7(0x21d),
      }),
      (this[_0xa735a7(0x1dd)] = ![]),
      (this['history'] = []),
      (this[_0xa735a7(0x1b4)] = this[_0xa735a7(0x1e2)]()),
      (this[_0xa735a7(0x240)] = ![]),
      (this[_0xa735a7(0x1af)] = localStorage['getItem'](_0xa735a7(0x1af))),
      (this[_0xa735a7(0x1df)] = undefined),
      (this['responseCollectUser'] = undefined);
  }
  ['generateUUID']() {
    const _0x4a3a41 = _0x485e;
    var _0x558613 = new Date()[_0x4a3a41(0x1f9)](),
      _0x4083f2 =
        (typeof performance !== _0x4a3a41(0x1ca) &&
          performance[_0x4a3a41(0x200)] &&
          performance[_0x4a3a41(0x200)]() * 0x3e8) ||
        0x0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'['replace'](
      /[xy]/g,
      function (_0x651bf9) {
        const _0x126ae7 = _0x4a3a41;
        var _0xa7a989 = Math[_0x126ae7(0x23c)]() * 0x10;
        return (
          _0x558613 > 0x0
            ? ((_0xa7a989 = (_0x558613 + _0xa7a989) % 0x10 | 0x0),
              (_0x558613 = Math[_0x126ae7(0x1a6)](_0x558613 / 0x10)))
            : ((_0xa7a989 = (_0x4083f2 + _0xa7a989) % 0x10 | 0x0),
              (_0x4083f2 = Math[_0x126ae7(0x1a6)](_0x4083f2 / 0x10))),
          (_0x651bf9 === 'x' ? _0xa7a989 : (_0xa7a989 & 0x3) | 0x8)['toString'](
            0x10,
          )
        );
      },
    );
  }
  async [_0x185daa(0x1c0)]() {
    const _0x3bee2b = _0x185daa,
      {
        openButton: _0x31d137,
        chatbox: _0x1cea7a,
        sendButton: _0x33a3bd,
      } = this['args'];
    await this[_0x3bee2b(0x20f)](), await this[_0x3bee2b(0x1d1)]();
    const { iconSend: _0x217d66 } = this[_0x3bee2b(0x1fd)];
    this['toggleIcon'](![], _0x31d137), this[_0x3bee2b(0x251)](_0x1cea7a);
    window['location'][_0x3bee2b(0x20b)]['includes'](_0x3bee2b(0x1ff)) &&
      this[_0x3bee2b(0x251)](_0x1cea7a);
    localStorage[_0x3bee2b(0x1bd)](_0x3bee2b(0x20c)),
      _0x31d137[_0x3bee2b(0x24c)]('click', () =>
        this[_0x3bee2b(0x251)](_0x1cea7a),
      ),
      _0x33a3bd[_0x3bee2b(0x24c)]('click', () =>
        this[_0x3bee2b(0x1f2)](_0x1cea7a),
      ),
      (_0x33a3bd[_0x3bee2b(0x1d7)] = _0x3bee2b(0x1bb) + _0x217d66 + '</div>');
    const _0x18b869 = _0x1cea7a['querySelector']('.input_message');
    _0x18b869[_0x3bee2b(0x24c)]('keyup', ({ key: _0xb2535b }) => {
      const _0x284caa = _0x3bee2b;
      _0xb2535b === _0x284caa(0x1e4) && this[_0x284caa(0x1f2)](_0x1cea7a);
    });
  }
  [_0x185daa(0x232)]() {
    const _0x43e961 = _0x185daa,
      { openButton: _0x3a5f2f, chatbox: _0x515a43 } = this[_0x43e961(0x1ee)];
    (_0x3a5f2f[_0x43e961(0x1bc)]['display'] = 'block'),
      (_0x515a43['style'][_0x43e961(0x1c0)] = _0x43e961(0x1eb)),
      (_0x515a43[_0x43e961(0x1bc)][_0x43e961(0x233)] = 'visible'),
      (_0x3a5f2f[_0x43e961(0x1bc)][_0x43e961(0x233)] = _0x43e961(0x23b));
  }
  async [_0x185daa(0x239)](_0x3f349c) {
    const _0x13bd2f = _0x185daa;
    let _0xa93b68 = new Headers();
    _0xa93b68[_0x13bd2f(0x1da)](_0x13bd2f(0x1c9), _0x13bd2f(0x1f1));
    const _0x4bd599 = {
      method: 'POST',
      headers: _0xa93b68,
      body: JSON[_0x13bd2f(0x1e8)](_0x3f349c),
    };
    try {
      const _0x5d73a5 = await fetch(
        this[_0x13bd2f(0x1ba)] +
          _0x13bd2f(0x1ed) +
          window[_0x13bd2f(0x247)][_0x13bd2f(0x1b7)],
        _0x4bd599,
      );
      if (!_0x5d73a5['ok'])
        throw new Error(_0x13bd2f(0x207) + _0x5d73a5[_0x13bd2f(0x1d2)]);
      localStorage[_0x13bd2f(0x238)](_0x13bd2f(0x1af), !![]);
    } catch (_0x33b915) {
      console[_0x13bd2f(0x1ef)]('Error:', _0x33b915);
    }
  }
  async [_0x185daa(0x1d1)]() {
    const _0x43260c = _0x185daa;
    let _0x27ed93 = new Headers();
    _0x27ed93[_0x43260c(0x1da)](_0x43260c(0x1c9), _0x43260c(0x1f1));
    const _0x35d0be = { method: 'GET', headers: _0x27ed93 };
    try {
      const _0x9f85b4 = await fetch(
        this[_0x43260c(0x1a7)] +
          _0x43260c(0x1ed) +
          window[_0x43260c(0x247)]['bot_id'],
        _0x35d0be,
      );
      if (!_0x9f85b4['ok']) {
        (openButton[_0x43260c(0x1bc)][_0x43260c(0x1c0)] = _0x43260c(0x1b9)),
          (chatbox[_0x43260c(0x1bc)][_0x43260c(0x1c0)] = _0x43260c(0x1b9));
        throw new Error(
          'Request\x20failed\x20swith\x20status:\x20' +
            _0x9f85b4[_0x43260c(0x1d2)],
        );
      }
      const _0x5d7e09 = document[_0x43260c(0x1f4)]('collect-form'),
        _0x3311ba = document['createElement'](_0x43260c(0x254));
      _0x3311ba[_0x43260c(0x225)] = _0x43260c(0x1cb);
      const { data: _0x2c99be } = await _0x9f85b4[_0x43260c(0x211)]();
      this[_0x43260c(0x24f)] = _0x2c99be;
      const _0x3739da = document[_0x43260c(0x208)](_0x43260c(0x254));
      _0x3739da[_0x43260c(0x220)][_0x43260c(0x246)](_0x43260c(0x1cd)),
        (_0x3739da[_0x43260c(0x1c2)] =
          'Let\x20us\x20know\x20how\x20to\x20contact\x20you'),
        _0x5d7e09['appendChild'](_0x3739da);
      for (const _0x1f6166 in _0x2c99be) {
        if (_0x2c99be[_0x1f6166] == !![]) {
          const _0x3ca80a = document[_0x43260c(0x208)](_0x43260c(0x1f3));
          _0x3ca80a[_0x43260c(0x1c2)] = _0x1f6166;
          const _0x10fc3d = document['createElement']('input');
          (_0x10fc3d[_0x43260c(0x1cf)] =
            _0x1f6166 == _0x43260c(0x1b8)
              ? _0x43260c(0x1b8)
              : _0x43260c(0x1e0)),
            (_0x10fc3d[_0x43260c(0x1aa)] = _0x1f6166),
            _0x10fc3d[_0x43260c(0x220)][_0x43260c(0x246)]('input-form'),
            (_0x10fc3d[_0x43260c(0x1fa)] = !![]),
            _0x5d7e09[_0x43260c(0x1dc)](_0x3ca80a),
            _0x5d7e09['appendChild'](_0x10fc3d);
        }
      }
      const _0x36b403 = _0x43260c(0x1b6),
        _0x543f27 = document[_0x43260c(0x208)](_0x43260c(0x254));
      _0x543f27[_0x43260c(0x220)][_0x43260c(0x246)](_0x43260c(0x212)),
        (_0x543f27[_0x43260c(0x1d7)] =
          '<button\x20class=\x22submit_button\x22>' +
          _0x36b403 +
          _0x43260c(0x226)),
        _0x5d7e09[_0x43260c(0x1dc)](_0x543f27);
      const _0x2feac0 = this,
        _0x1888f4 = (_0x3d3ca4) => {
          const _0x16cc80 = _0x43260c;
          this[_0x16cc80(0x239)](_0x3d3ca4);
        };
      _0x543f27['addEventListener'](_0x43260c(0x215), function (_0x42c05b) {
        const _0x3670bc = _0x43260c;
        _0x42c05b[_0x3670bc(0x1c8)]();
        try {
          const _0x40dd1d = {},
            _0x1fbe19 = _0x5d7e09[_0x3670bc(0x213)](_0x3670bc(0x252));
          _0x1fbe19['forEach'](function (_0x4516ee) {
            const _0x1f2bdc = _0x3670bc;
            _0x40dd1d[_0x4516ee[_0x1f2bdc(0x1aa)]] =
              _0x4516ee[_0x1f2bdc(0x1fc)];
          }),
            (_0x5d7e09[_0x3670bc(0x1bc)]['display'] = _0x3670bc(0x1b9)),
            (_0x4b04cc['style'][_0x3670bc(0x1c0)] = _0x3670bc(0x248));
          const _0x494f82 = {
            bot_id: window[_0x3670bc(0x247)][_0x3670bc(0x1b7)],
            session_id: _0x2feac0[_0x3670bc(0x1b4)],
            user_infor: _0x40dd1d,
          };
          _0x1888f4(_0x494f82);
        } catch (_0x3d8703) {
          console['error']('Error:', _0x3d8703);
        }
      });
      const _0x27332c = document[_0x43260c(0x208)](_0x43260c(0x206));
      _0x27332c[_0x43260c(0x220)][_0x43260c(0x246)](_0x43260c(0x1f8)),
        (_0x27332c[_0x43260c(0x1c2)] = 'X');
      const { message_suggest: _0x4b04cc } = this[_0x43260c(0x1ee)];
      _0x27332c['addEventListener']('click', function () {
        const _0x352da0 = _0x43260c;
        localStorage[_0x352da0(0x238)]('closeFormCollectUser', !![]),
          (_0x5d7e09[_0x352da0(0x1bc)][_0x352da0(0x1c0)] = 'none'),
          (_0x4b04cc[_0x352da0(0x1bc)]['display'] = _0x352da0(0x248));
      });
      if (this['chatStyle']) {
        const _0xa4503b = document[_0x43260c(0x1c7)](_0x43260c(0x22e));
        _0xa4503b['style'][_0x43260c(0x1f5)] =
          this[_0x43260c(0x1df)][_0x43260c(0x229)];
      }
      return _0x5d7e09[_0x43260c(0x1dc)](_0x27332c), _0x5d7e09;
    } catch (_0x42da9d) {
      console[_0x43260c(0x1ef)]('Error:', _0x42da9d);
    }
  }
  async [_0x185daa(0x20f)]() {
    const _0x464873 = _0x185daa;
    let _0x48b8d8 = new Headers();
    _0x48b8d8[_0x464873(0x1da)](_0x464873(0x1c9), _0x464873(0x1f1));
    const _0x190d8f = { method: _0x464873(0x1a9), headers: _0x48b8d8 };
    try {
      const _0x3a11c0 = await fetch(
          this['getBotWidgetSettingUrl'] +
            _0x464873(0x1ed) +
            window[_0x464873(0x247)]['bot_id'],
          _0x190d8f,
        ),
        { openButton: _0x29f3ad, chatbox: _0x325ea5 } = this[_0x464873(0x1ee)];
      if (!_0x3a11c0['ok']) {
        (_0x29f3ad['style']['display'] = _0x464873(0x1b9)),
          (_0x325ea5['style'][_0x464873(0x1c0)] = _0x464873(0x1b9));
        throw new Error(_0x464873(0x207) + _0x3a11c0[_0x464873(0x1d2)]);
      }
      this[_0x464873(0x232)]();
      const _0x33361a = await _0x3a11c0[_0x464873(0x211)]();
      (this[_0x464873(0x1df)] = _0x33361a),
        this['setStyle'](_0x33361a),
        this[_0x464873(0x245)](_0x33361a),
        await this[_0x464873(0x1fe)](_0x33361a),
        await this[_0x464873(0x209)](_0x33361a);
      const _0x173a13 = document[_0x464873(0x213)](_0x464873(0x21a));
      _0x173a13['forEach']((_0xbe1e54) => {
        const _0x1a8145 = _0x464873;
        _0xbe1e54?.[_0x1a8145(0x24c)](_0x1a8145(0x215), (_0x53ada1) =>
          this['showMessageText'](_0x53ada1, _0x325ea5),
        );
      }),
        this[_0x464873(0x24e)](_0x33361a);
    } catch (_0x3b3bf9) {
      console[_0x464873(0x1ef)]('Error:', _0x3b3bf9);
    }
  }
  [_0x185daa(0x245)](_0x3da0eb) {
    const _0x36d592 = _0x185daa,
      { initial_message: _0x2cf797 } = _0x3da0eb;
    _0x2cf797 &&
      (this[_0x36d592(0x1b5)][_0x36d592(0x1bf)]([
        { sender_type: _0x36d592(0x205), content: '' },
        { sender_type: 'assistant', content: _0x2cf797 },
      ]),
      this[_0x36d592(0x253)]());
  }
  ['updateHeader'](_0x444014) {
    const _0xe3cfc7 = _0x185daa,
      { header: _0x469e9c } = this[_0xe3cfc7(0x1ee)],
      { iconRefresh: _0x3c86be, iconClose: _0x50dfab } = this['icons'],
      _0x6181f0 = document['createElement']('div');
    _0x6181f0[_0xe3cfc7(0x225)] = _0xe3cfc7(0x230);
    if (_0x444014['bot_avatar_url']) {
      const _0xba2b48 = document[_0xe3cfc7(0x208)](_0xe3cfc7(0x1d9));
      (_0xba2b48['src'] = _0x444014['bot_avatar_url']),
        (_0xba2b48['className'] = 'bot_avatar'),
        _0x6181f0[_0xe3cfc7(0x1dc)](_0xba2b48);
    }
    _0x444014[_0xe3cfc7(0x1b2)] &&
      (_0x6181f0[_0xe3cfc7(0x1d7)] += _0x444014[_0xe3cfc7(0x1b2)]),
      _0x469e9c['appendChild'](_0x6181f0),
      (_0x469e9c[_0xe3cfc7(0x1d7)] +=
        _0xe3cfc7(0x1d5) + _0x3c86be + _0x50dfab + _0xe3cfc7(0x1ec));
  }
  [_0x185daa(0x1ce)](_0x314a1d, _0x5aa9eb) {
    const _0x46a8cc = _0x185daa,
      _0x5684a8 = _0x314a1d[_0x46a8cc(0x1ad)][_0x46a8cc(0x1c2)];
    let _0x5505f2 = _0x5aa9eb[_0x46a8cc(0x1c7)](_0x46a8cc(0x1d3));
    (_0x5505f2[_0x46a8cc(0x1fc)] = _0x5684a8),
      this[_0x46a8cc(0x1f2)](_0x5aa9eb);
  }
  [_0x185daa(0x209)](_0x1c64cc) {
    const _0x3244bd = _0x185daa,
      { suggest_messages: _0xf144d3 } = _0x1c64cc,
      { message_suggest: _0x49425e } = this[_0x3244bd(0x1ee)];
    (_0xf144d3 ?? [])['forEach']((_0x1af312) => {
      const _0x50e6cf = _0x3244bd,
        _0x27db28 = document[_0x50e6cf(0x208)](_0x50e6cf(0x254));
      (_0x27db28['className'] = _0x50e6cf(0x236)),
        (_0x27db28['textContent'] = _0x1af312),
        _0x49425e[_0x50e6cf(0x1dc)](_0x27db28);
    });
  }
  async [_0x185daa(0x1fe)](_0x141af3) {
    const _0x22dab5 = _0x185daa;
    (this[_0x22dab5(0x1fd)]['isClicked'] = document[_0x22dab5(0x208)](
      _0x22dab5(0x1d9),
    )),
      (this[_0x22dab5(0x1fd)][_0x22dab5(0x20a)] = document[_0x22dab5(0x208)](
        _0x22dab5(0x1d9),
      )),
      (this['icons'][_0x22dab5(0x1c1)] =
        _0x22dab5(0x1f7) +
        (_0x141af3['chat_message_color']
          ? '\x22' + _0x141af3[_0x22dab5(0x229)] + '\x22'
          : _0x22dab5(0x1b3)) +
        _0x22dab5(0x1d6));
    if (
      window[_0x22dab5(0x1be)][_0x22dab5(0x20b)][_0x22dab5(0x218)](
        _0x22dab5(0x1ff),
      )
    ) {
      (this[_0x22dab5(0x1fd)][_0x22dab5(0x224)][_0x22dab5(0x214)] =
        'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png'),
        (this[_0x22dab5(0x1fd)][_0x22dab5(0x224)]['style'][_0x22dab5(0x237)] =
          _0x22dab5(0x249)),
        (this[_0x22dab5(0x1fd)][_0x22dab5(0x20a)]['src'] =
          'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png'),
        (this[_0x22dab5(0x1fd)]['isNotClicked'][_0x22dab5(0x1bc)]['width'] =
          _0x22dab5(0x249));
      return;
    }
    _0x141af3['chat_icon_url']
      ? ((this[_0x22dab5(0x1fd)][_0x22dab5(0x224)]['src'] =
          _0x141af3['chat_icon_url']),
        (this[_0x22dab5(0x1fd)][_0x22dab5(0x20a)][_0x22dab5(0x214)] =
          _0x141af3[_0x22dab5(0x221)]))
      : ((this['icons'][_0x22dab5(0x224)][_0x22dab5(0x214)] = _0x22dab5(0x23a)),
        (this[_0x22dab5(0x1fd)][_0x22dab5(0x20a)]['src'] = _0x22dab5(0x23a)));
  }
  ['setStyle'](_0x2bd7d5) {
    const _0x11faee = _0x185daa,
      {
        theme: _0x5443bb,
        chat_bubble_button_color: _0x12d0e3,
        align_chat_bubble_button: _0xfced10,
        chat_message_color: _0x571fa8,
        suggest_messages: _0x50765d,
      } = _0x2bd7d5,
      _0x2c9891 = _0x11faee(0x1d4),
      _0x215a5e = _0x11faee(0x1d0),
      _0x2f6199 = window[_0x11faee(0x1be)][_0x11faee(0x20b)][_0x11faee(0x218)](
        _0x11faee(0x1ff),
      )
        ? _0x215a5e
        : _0x2c9891,
      _0x27de68 = {
        chatButtonAlignment: _0xfced10 ?? _0x11faee(0x1cc),
        chatBoxAlignment: _0xfced10 ?? 'right',
        chatButtonDirection:
          _0xfced10 === _0x11faee(0x250) ? _0x11faee(0x1cc) : 'left',
        chatButtonColor: _0x12d0e3 ?? _0x11faee(0x1c3),
        chatBoxBackgroundColor:
          _0x5443bb === _0x11faee(0x223) ? _0x11faee(0x1c5) : '#fff',
        chatInputBorderColor:
          _0x5443bb === _0x11faee(0x223) ? _0x11faee(0x242) : '#0000004a',
        chatBoxHeaderBorderColor:
          _0x5443bb === _0x11faee(0x223) ? _0x11faee(0x242) : '#0000004a',
        chatInputColor:
          _0x5443bb === _0x11faee(0x223) ? _0x11faee(0x1c3) : '#inherit',
        chatBoxDisplayNameColor:
          _0x5443bb === 'dark' ? '#fff' : _0x11faee(0x1ac),
        messageItemOperatorBackgroundColor: _0x571fa8 ?? _0x11faee(0x1ea),
        suggestedMessagesHeight: _0x50765d?.['length'] ? '60px' : '0px',
      },
      _0x1f69b0 = document['createElement']('style');
    (_0x1f69b0['textContent'] = _0x2f6199['replace'](
      /{{([^}]+)}}/g,
      (_0x5ecdb1, _0x3d6c8c) => _0x27de68[_0x3d6c8c],
    )),
      document[_0x11faee(0x202)][_0x11faee(0x1da)](_0x1f69b0);
  }
  ['sleep'](_0x22cf83) {
    return new Promise((_0x14cb6a) => setTimeout(_0x14cb6a, _0x22cf83));
  }
  async ['onSendButton'](_0x5d8df4) {
    const _0x37f9a2 = _0x185daa;
    let _0x13a7c0 = _0x5d8df4[_0x37f9a2(0x1c7)](_0x37f9a2(0x1d3)),
      _0x2e1488 = _0x13a7c0['value'];
    if (!!this[_0x37f9a2(0x240)]) return;
    _0x13a7c0[_0x37f9a2(0x1fc)] = '';
    if (_0x2e1488 === '') return;
    this['loading'] = !![];
    const { message_suggest: _0x2aa6ff, formCollect: _0x35edb4 } = this['args'];
    (_0x2aa6ff['style']['display'] = 'flex'),
      (_0x35edb4[_0x37f9a2(0x1bc)]['display'] = _0x37f9a2(0x1b9)),
      this['history'][_0x37f9a2(0x1bf)]([
        { sender_type: _0x37f9a2(0x205), content: _0x2e1488 },
        { sender_type: _0x37f9a2(0x1f0), content: '' },
      ]),
      this[_0x37f9a2(0x253)]();
    let _0x559de0 = new Headers();
    _0x559de0[_0x37f9a2(0x1da)](_0x37f9a2(0x1c9), _0x37f9a2(0x1f1));
    const _0x2d69a9 = {
      method: _0x37f9a2(0x21b),
      headers: _0x559de0,
      body: JSON[_0x37f9a2(0x1e8)]({
        message: _0x2e1488,
        session_id: this[_0x37f9a2(0x1b4)],
        ...window[_0x37f9a2(0x247)],
      }),
    };
    try {
      const _0x47a2e3 = await fetch(this[_0x37f9a2(0x22c)], _0x2d69a9);
      if (!_0x47a2e3['ok'])
        throw new Error(_0x37f9a2(0x1e3) + _0x47a2e3['status']);
      const _0x2cd914 = await _0x47a2e3[_0x37f9a2(0x1e5)],
        _0x4717a9 = _0x2cd914[_0x37f9a2(0x1b0)]();
      for await (const _0x3858d8 of this[_0x37f9a2(0x234)](_0x4717a9)) {
      }
    } catch (_0x54fb35) {
      (this[_0x37f9a2(0x240)] = ![]),
        console['error'](_0x37f9a2(0x1fb), _0x54fb35),
        (_0x13a7c0[_0x37f9a2(0x1fc)] = '');
    }
  }
  [_0x185daa(0x201)](_0x2ab8d5) {
    const _0x306d77 = _0x185daa;
    for (var _0x208d53 in _0x2ab8d5) {
      if (_0x2ab8d5[_0x306d77(0x1e7)](_0x208d53)) return ![];
    }
    return !![];
  }
  async *[_0x185daa(0x234)](_0x289ebe) {
    const _0x5e610a = _0x185daa,
      _0x462092 = localStorage[_0x5e610a(0x22f)](_0x5e610a(0x1af)),
      _0x4699b3 = localStorage[_0x5e610a(0x22f)]('closeFormCollectUser'),
      { numberShowing: _0x37d6e9, ..._0x59fab7 } = this[_0x5e610a(0x24f)],
      _0x3fd131 = new TextDecoder();
    while (!![]) {
      const { done: _0x57cd26, value: _0x2cfe1d } =
        await _0x289ebe[_0x5e610a(0x228)]();
      if (_0x57cd26) {
        const { message_suggest: _0x161732, formCollect: _0x33d861 } =
          this[_0x5e610a(0x1ee)];
        this[_0x5e610a(0x1b5)]['length'] >= _0x37d6e9 &&
        !_0x462092 &&
        !_0x4699b3 &&
        !this[_0x5e610a(0x201)](_0x59fab7)
          ? ((_0x161732['style']['display'] = _0x5e610a(0x1b9)),
            (_0x33d861[_0x5e610a(0x1bc)][_0x5e610a(0x1c0)] = _0x5e610a(0x1eb)))
          : ((_0x161732[_0x5e610a(0x1bc)]['display'] = _0x5e610a(0x248)),
            (_0x33d861[_0x5e610a(0x1bc)][_0x5e610a(0x1c0)] = _0x5e610a(0x1b9)));
        this[_0x5e610a(0x240)] = ![];
        return;
      }
      const _0x4a842c = _0x3fd131[_0x5e610a(0x243)](_0x2cfe1d);
      await this[_0x5e610a(0x1e9)](0x32),
        (this[_0x5e610a(0x1b5)][_0x5e610a(0x22b)](-0x1)[0x0][0x1][
          _0x5e610a(0x1c4)
        ] += _0x4a842c),
        await this['updateChatBox']();
    }
  }
  async [_0x185daa(0x253)]() {
    const _0x2af7c0 = _0x185daa;
    let _0x208ac8 = document[_0x2af7c0(0x1c7)](_0x2af7c0(0x1a5)),
      _0x1a6444 = '';
    this['history'][_0x2af7c0(0x210)]((_0x49d05c, _0x4d8f2e) => {
      const _0x223a55 = _0x2af7c0;
      !(
        _0x49d05c[0x0][_0x223a55(0x1e1)] == _0x223a55(0x205) &&
        !_0x49d05c[0x0][_0x223a55(0x1c4)]
      ) &&
        (_0x1a6444 +=
          '<div\x20class=\x22messages__item\x20messages__item--operator\x22>' +
          _0x49d05c[0x0][_0x223a55(0x1c4)] +
          _0x223a55(0x1ec));
      if (
        _0x49d05c[0x1][_0x223a55(0x1e1)] == _0x223a55(0x1f0) &&
        _0x49d05c[0x1][_0x223a55(0x1c4)]
      )
        _0x1a6444 +=
          _0x223a55(0x20e) + _0x49d05c[0x1]['content'] + _0x223a55(0x1ec);
      else _0x1a6444 += _0x223a55(0x1a8);
    }),
      (_0x208ac8[_0x2af7c0(0x1d7)] =
        _0x2af7c0(0x1bb) + _0x1a6444 + _0x2af7c0(0x1ec));
  }
  [_0x185daa(0x22d)]() {
    const _0xadd4a6 = _0x185daa,
      { chatbox: _0x4d55a1 } = this['args'];
    _0x4d55a1[_0xadd4a6(0x1bc)]['display'] = _0xadd4a6(0x1b9);
  }
  [_0x185daa(0x1ab)]() {
    const _0x5bbc06 = _0x185daa;
    (this[_0x5bbc06(0x1b5)] = []),
      (this['session_id'] = this[_0x5bbc06(0x1e2)]()),
      this[_0x5bbc06(0x253)]();
  }
  [_0x185daa(0x251)](_0x322a78) {
    const _0x1fd825 = _0x185daa;
    (this['state'] = !this[_0x1fd825(0x1dd)]),
      this[_0x1fd825(0x203)](
        _0x322a78,
        this[_0x1fd825(0x1ee)][_0x1fd825(0x231)],
      );
  }
  [_0x185daa(0x203)](_0x485240, _0x4f9476) {
    const _0x46a192 = _0x185daa;
    _0x485240[_0x46a192(0x1bc)][_0x46a192(0x1c0)] =
      _0x485240[_0x46a192(0x1bc)]['display'] === _0x46a192(0x1b9)
        ? ''
        : _0x46a192(0x1b9);
    if (this[_0x46a192(0x1dd)])
      _0x485240[_0x46a192(0x220)]['add'](_0x46a192(0x23e)),
        this[_0x46a192(0x23f)](!![], _0x4f9476);
    else !this[_0x46a192(0x1dd)] && this[_0x46a192(0x23f)](![], _0x4f9476);
  }
  [_0x185daa(0x23f)](_0x46f19e, _0x3c1632) {
    const _0x2599c5 = _0x185daa,
      { isClicked: _0x40d127, isNotClicked: _0x58e1e2 } =
        this[_0x2599c5(0x1fd)],
      _0x132a91 = document[_0x2599c5(0x1c7)](_0x2599c5(0x21f));
    _0x132a91[_0x2599c5(0x24c)](_0x2599c5(0x215), () =>
      this[_0x2599c5(0x22d)](),
    );
    const _0x54a7b2 = document[_0x2599c5(0x1c7)]('.refresh__button');
    _0x54a7b2[_0x2599c5(0x24c)](_0x2599c5(0x215), () =>
      this[_0x2599c5(0x1ab)](),
    );
    const _0x2e9119 = _0x3c1632[_0x2599c5(0x1c6)],
      _0x214879 = _0x2e9119[_0x2599c5(0x1c6)];
    _0x2e9119['replaceChild'](_0x46f19e ? _0x40d127 : _0x58e1e2, _0x214879);
  }
}
(document['body'] = document[_0x185daa(0x208)](_0x185daa(0x1e5))),
  (document[_0x185daa(0x202)]['innerHTML'] +=
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__button{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.init_message{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20@media\x20only\x20screen\x20and\x20(max-width:\x201024px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20350px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2060vh\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.chatbox\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20#collect-form\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x2010px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x2080%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f9f9f9;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.intrucstion_title{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20capitalize;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20input[type=\x22text\x22],\x0a\x20\x20\x20\x20\x20\x20input[type=\x22email\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.submit_action\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-end;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.submit_button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.close-button-form\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20');
const elemDiv = _0x185daa(0x235);
document[_0x185daa(0x1e5)][_0x185daa(0x1d7)] += elemDiv;
const chatbox = new InteractiveChatbox();
function _0x26e0() {
  const _0x945695 = [
    'responseCollectUser',
    'left',
    'toggleState',
    '.input-form',
    'updateChatBox',
    'div',
    '.chatbox__messages',
    'floor',
    'getInfoCollectUser',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    'GET',
    'name',
    'refreshHistory',
    'inherit',
    'target',
    '.chatbox__button',
    'isSubmitCollectForm',
    'getReader',
    '/chat/get-streaming-response',
    'display_name',
    '#000000',
    'session_id',
    'history',
    '<svg\x20fill=\x22#ffff\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    'bot_id',
    'email',
    'none',
    'sendInfoCollectUser',
    '<div>',
    'style',
    'removeItem',
    'location',
    'push',
    'display',
    'iconSend',
    'textContent',
    '#fff',
    'content',
    '#111827',
    'firstElementChild',
    'querySelector',
    'preventDefault',
    'Content-Type',
    'undefined',
    'container-form',
    'right',
    'intrucstion_title',
    'showMessageText',
    'type',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{white-space:pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:70vh;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{white-space:pre-wrap;border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1.2rem}.chatbot__suggest--item{font-size:\x2012px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header_action{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#4AC1FF;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'syncInfoCollectUser',
    'status',
    '.input_message',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{white-space:\x20pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:70vh;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:12px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.icon_header_action{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    '<div\x20class=\x22icon_header_action\x22>',
    '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    'innerHTML',
    '14550YncUUn',
    'img',
    'append',
    '475DcQtbQ',
    'appendChild',
    'state',
    '2664nYkDVU',
    'chatStyle',
    'text',
    'sender_type',
    'generateUUID',
    'Request\x20failed\x20with\x20status:\x20',
    'Enter',
    'body',
    '.chatbot__header',
    'hasOwnProperty',
    'stringify',
    'sleep',
    '#3399FF',
    'block',
    '</div>',
    '?bot_id=',
    'args',
    'error',
    'assistant',
    'application/json',
    'onSendButton',
    'label',
    'getElementById',
    'background',
    '.chatbot',
    '<svg\x20fill=',
    'close-button-form',
    'getTime',
    'required',
    'Error:',
    'value',
    'icons',
    'updateChatIcons',
    'chatfly',
    'now',
    'isEmptyObject',
    'head',
    'showOrHideChatBox',
    'baseUrl',
    'user',
    'button',
    'Request\x20failed\x20swith\x20status:\x20',
    'createElement',
    'updateSuggestedMessages',
    'isNotClicked',
    'origin',
    'closeFormCollectUser',
    '24TvaQiE',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'syncChatWidgetStyling',
    'forEach',
    'json',
    'submit_action',
    'querySelectorAll',
    'src',
    'click',
    '9772QUuBPv',
    '/chat/submit-information',
    'includes',
    '.bot_avatar',
    '.chatbot__suggest--item',
    'POST',
    '3274467oTwhlA',
    '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
    '10503234kYrtwk',
    '.close__button',
    'classList',
    'chat_icon_url',
    '/bot/information/collect-customer-info',
    'dark',
    'isClicked',
    'className',
    '</button>',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    'read',
    'chat_message_color',
    '382OrSvXe',
    'slice',
    'getStreamingResponseUrl',
    'closeChatBox',
    '.submit_button',
    'getItem',
    'icon_header',
    'openButton',
    'showChatWhenGetStyleSuccess',
    'visibility',
    'asyncGenerator',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<form\x20id=\x22collect-form\x22></form>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22input_message\x22\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'chatbot__suggest--item',
    'width',
    'setItem',
    'fetchUserCollectInfor',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'visible',
    'random',
    '16PajgkL',
    'chatbox--active',
    'toggleIcon',
    'loading',
    '#collect-form',
    '#cdceed',
    'decode',
    '19749972XkbigI',
    'updateInitMessage',
    'add',
    'chatbotConfig',
    'flex',
    '80px',
    '483EmXnxK',
    '9821050ulGlPG',
    'addEventListener',
    'getBotWidgetSettingUrl',
    'updateHeader',
  ];
  _0x26e0 = function () {
    return _0x945695;
  };
  return _0x26e0();
}
function _0x485e(_0x73d175, _0xb05588) {
  const _0x26e064 = _0x26e0();
  return (
    (_0x485e = function (_0x485e9d, _0x363e80) {
      _0x485e9d = _0x485e9d - 0x1a5;
      let _0x1a66fb = _0x26e064[_0x485e9d];
      return _0x1a66fb;
    }),
    _0x485e(_0x73d175, _0xb05588)
  );
}
chatbox[_0x185daa(0x1c0)]();
