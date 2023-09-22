const _0x57eafa = _0xef04;
(function (_0x2dc9b3, _0x212219) {
  const _0x338401 = _0xef04,
    _0xb5348d = _0x2dc9b3();
  while (!![]) {
    try {
      const _0x323333 =
        -parseInt(_0x338401(0x1fe)) / 0x1 +
        parseInt(_0x338401(0x1d3)) / 0x2 +
        -parseInt(_0x338401(0x204)) / 0x3 +
        (parseInt(_0x338401(0x1b5)) / 0x4) *
          (-parseInt(_0x338401(0x1e0)) / 0x5) +
        (parseInt(_0x338401(0x195)) / 0x6) *
          (parseInt(_0x338401(0x1c0)) / 0x7) +
        -parseInt(_0x338401(0x1f6)) / 0x8 +
        (-parseInt(_0x338401(0x1bf)) / 0x9) *
          (-parseInt(_0x338401(0x1f8)) / 0xa);
      if (_0x323333 === _0x212219) break;
      else _0xb5348d['push'](_0xb5348d['shift']());
    } catch (_0x2d1f50) {
      _0xb5348d['push'](_0xb5348d['shift']());
    }
  }
})(_0xb78c, 0xc5659);
function _0xef04(_0x591cc6, _0x81312d) {
  const _0xb78cb2 = _0xb78c();
  return (
    (_0xef04 = function (_0xef04f5, _0x533537) {
      _0xef04f5 = _0xef04f5 - 0x18f;
      let _0x16a9e0 = _0xb78cb2[_0xef04f5];
      return _0x16a9e0;
    }),
    _0xef04(_0x591cc6, _0x81312d)
  );
}
class InteractiveChatbox {
  constructor() {
    const _0x1deacf = _0xef04;
    (this['baseUrl'] = _0x1deacf(0x1a1)),
      (this[_0x1deacf(0x20e)] =
        this[_0x1deacf(0x211)] + '/chat/get-streaming-response'),
      (this['getBotWidgetSettingUrl'] = this['baseUrl'] + _0x1deacf(0x1b8)),
      (this[_0x1deacf(0x202)] = {
        openButton: document[_0x1deacf(0x20d)](_0x1deacf(0x207)),
        chatbox: document[_0x1deacf(0x20d)](_0x1deacf(0x1bc)),
        sendButton: document[_0x1deacf(0x20d)](_0x1deacf(0x19a)),
        header: document[_0x1deacf(0x20d)](_0x1deacf(0x190)),
        message_suggest: document[_0x1deacf(0x20d)]('.chatbot__suggest'),
      }),
      (this['icons'] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x1deacf(0x1fb),
        iconRefresh:
          '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
      }),
      (this[_0x1deacf(0x1ff)] = ![]),
      (this[_0x1deacf(0x1ce)] = []),
      (this[_0x1deacf(0x194)] = this[_0x1deacf(0x1a6)]());
  }
  ['generateUUID']() {
    const _0x3c3d50 = _0xef04;
    var _0xabead = new Date()[_0x3c3d50(0x1de)](),
      _0x5714af =
        (typeof performance !== _0x3c3d50(0x210) &&
          performance[_0x3c3d50(0x1ec)] &&
          performance['now']() * 0x3e8) ||
        0x0;
    return _0x3c3d50(0x1d7)[_0x3c3d50(0x1da)](/[xy]/g, function (_0x3e4f52) {
      const _0x4195cc = _0x3c3d50;
      var _0x4d8df0 = Math[_0x4195cc(0x20a)]() * 0x10;
      return (
        _0xabead > 0x0
          ? ((_0x4d8df0 = (_0xabead + _0x4d8df0) % 0x10 | 0x0),
            (_0xabead = Math[_0x4195cc(0x21b)](_0xabead / 0x10)))
          : ((_0x4d8df0 = (_0x5714af + _0x4d8df0) % 0x10 | 0x0),
            (_0x5714af = Math[_0x4195cc(0x21b)](_0x5714af / 0x10))),
        (_0x3e4f52 === 'x' ? _0x4d8df0 : (_0x4d8df0 & 0x3) | 0x8)[
          _0x4195cc(0x1b9)
        ](0x10)
      );
    });
  }
  async [_0x57eafa(0x19b)]() {
    const _0x5c76be = _0x57eafa,
      {
        openButton: _0x56c6f0,
        chatbox: _0x1bb4d4,
        sendButton: _0x438c9e,
      } = this['args'];
    await this[_0x5c76be(0x1ab)](_0x1bb4d4);
    const { iconSend: _0x2bd2ca } = this[_0x5c76be(0x1c6)];
    this[_0x5c76be(0x1bb)](![], _0x56c6f0),
      this[_0x5c76be(0x208)](_0x1bb4d4),
      _0x56c6f0[_0x5c76be(0x1e1)](_0x5c76be(0x19f), () =>
        this[_0x5c76be(0x208)](_0x1bb4d4),
      ),
      _0x438c9e['addEventListener']('click', () =>
        this[_0x5c76be(0x1ba)](_0x1bb4d4),
      ),
      (_0x438c9e['innerHTML'] =
        _0x5c76be(0x1f1) + _0x2bd2ca + _0x5c76be(0x1f7));
    const _0xb5ac82 = _0x1bb4d4[_0x5c76be(0x20d)]('input');
    _0xb5ac82[_0x5c76be(0x1e1)](_0x5c76be(0x1d6), ({ key: _0x3889a0 }) => {
      const _0x3de38e = _0x5c76be;
      _0x3889a0 === 'Enter' && this[_0x3de38e(0x1ba)](_0x1bb4d4);
    });
  }
  async ['syncChatWidgetStyling'](_0x272a1f) {
    const _0x548d39 = _0x57eafa;
    let _0x7c2a2a = new Headers();
    _0x7c2a2a['append']('Content-Type', _0x548d39(0x198));
    const _0x59d8b5 = { method: _0x548d39(0x1c8), headers: _0x7c2a2a };
    try {
      const _0x2cbfd8 = await fetch(
        this['getBotWidgetSettingUrl'] +
          _0x548d39(0x1c9) +
          window['chatbotConfig'][_0x548d39(0x1fc)],
        _0x59d8b5,
      );
      if (!_0x2cbfd8['ok'])
        throw new Error(_0x548d39(0x20f) + _0x2cbfd8[_0x548d39(0x1e4)]);
      const _0x535f63 = await _0x2cbfd8[_0x548d39(0x1fd)]();
      this[_0x548d39(0x1f4)](_0x535f63),
        this[_0x548d39(0x1d4)](_0x535f63),
        await this['updateChatIcons'](_0x535f63),
        await this[_0x548d39(0x1aa)](_0x535f63);
      const _0x19053c = document[_0x548d39(0x1b1)](_0x548d39(0x192));
      _0x19053c[_0x548d39(0x1a9)]((_0x4fc1a7) => {
        const _0x292fbe = _0x548d39;
        _0x4fc1a7?.[_0x292fbe(0x1e1)](_0x292fbe(0x19f), (_0x2164d3) =>
          this[_0x292fbe(0x1a5)](_0x2164d3, _0x272a1f),
        );
      }),
        this[_0x548d39(0x1fa)](_0x535f63);
    } catch (_0x568e2b) {
      console[_0x548d39(0x1af)](_0x548d39(0x191), _0x568e2b);
    }
  }
  [_0x57eafa(0x1d4)](_0x1f4ed3) {
    const _0x5b0266 = _0x57eafa,
      { initial_message: _0x94a717 } = _0x1f4ed3;
    _0x94a717 &&
      (this[_0x5b0266(0x1ce)][_0x5b0266(0x1b4)]([
        { sender_type: _0x5b0266(0x1cf), content: '' },
        { sender_type: 'assistant', content: _0x94a717 },
      ]),
      this['updateChatBox']());
  }
  [_0x57eafa(0x1fa)](_0x158a61) {
    const _0x3c7a31 = _0x57eafa,
      { header: _0x55ae44 } = this[_0x3c7a31(0x202)],
      { iconRefresh: _0x100f7b, iconClose: _0x118e5d } = this[_0x3c7a31(0x1c6)],
      _0x3ee775 = document[_0x3c7a31(0x1ea)](_0x3c7a31(0x21c));
    _0x3ee775[_0x3c7a31(0x1be)] = _0x3c7a31(0x1c2);
    if (_0x158a61[_0x3c7a31(0x1e5)]) {
      const _0x15649f = document['createElement'](_0x3c7a31(0x1eb));
      (_0x15649f[_0x3c7a31(0x1ad)] = _0x158a61[_0x3c7a31(0x1e5)]),
        (_0x15649f[_0x3c7a31(0x1be)] = _0x3c7a31(0x209)),
        _0x3ee775[_0x3c7a31(0x1f5)](_0x15649f);
    }
    _0x158a61['display_name'] &&
      (_0x3ee775[_0x3c7a31(0x20c)] += _0x158a61[_0x3c7a31(0x1a3)]),
      _0x55ae44['appendChild'](_0x3ee775),
      (_0x55ae44[_0x3c7a31(0x20c)] +=
        _0x3c7a31(0x203) + _0x100f7b + _0x118e5d + _0x3c7a31(0x1f7));
  }
  [_0x57eafa(0x1a5)](_0x57a06c, _0x43226c) {
    const _0xa8ad59 = _0x57eafa,
      _0x232028 = _0x57a06c[_0xa8ad59(0x1ef)][_0xa8ad59(0x1ac)];
    let _0x48c7ee = _0x43226c[_0xa8ad59(0x20d)]('input');
    (_0x48c7ee[_0xa8ad59(0x217)] = _0x232028), this['onSendButton'](_0x43226c);
  }
  [_0x57eafa(0x1aa)](_0x41b8b7) {
    const { suggest_messages: _0xfdb842 } = _0x41b8b7,
      { message_suggest: _0x243c90 } = this['args'];
    (_0xfdb842 ?? [])['forEach']((_0x4abde0) => {
      const _0x1f41e5 = _0xef04,
        _0x4cbf9d = document[_0x1f41e5(0x1ea)](_0x1f41e5(0x21c));
      (_0x4cbf9d[_0x1f41e5(0x1be)] = _0x1f41e5(0x1e6)),
        (_0x4cbf9d[_0x1f41e5(0x1ac)] = _0x4abde0),
        _0x243c90[_0x1f41e5(0x1f5)](_0x4cbf9d);
    });
  }
  async [_0x57eafa(0x1db)](_0xa7a437) {
    const _0x49b304 = _0x57eafa;
    (this[_0x49b304(0x1c6)][_0x49b304(0x219)] = document[_0x49b304(0x1ea)](
      _0x49b304(0x1eb),
    )),
      (this['icons'][_0x49b304(0x1d1)] = document[_0x49b304(0x1ea)](
        _0x49b304(0x1eb),
      )),
      (this[_0x49b304(0x1c6)][_0x49b304(0x21a)] =
        _0x49b304(0x18f) +
        (_0xa7a437[_0x49b304(0x1d5)]
          ? '\x22' + _0xa7a437[_0x49b304(0x1d5)] + '\x22'
          : _0x49b304(0x1b6)) +
        '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>');
    if (
      window[_0x49b304(0x1b2)][_0x49b304(0x1c5)][_0x49b304(0x1e2)](
        _0x49b304(0x1ee),
      )
    ) {
      (this[_0x49b304(0x1c6)]['isClicked']['src'] = _0x49b304(0x1a8)),
        (this[_0x49b304(0x1c6)][_0x49b304(0x219)][_0x49b304(0x1d9)]['width'] =
          _0x49b304(0x1df)),
        (this[_0x49b304(0x1c6)][_0x49b304(0x1d1)][_0x49b304(0x1ad)] =
          _0x49b304(0x1a8)),
        (this['icons'][_0x49b304(0x1d1)][_0x49b304(0x1d9)][_0x49b304(0x1f9)] =
          _0x49b304(0x1df));
      return;
    }
    _0xa7a437[_0x49b304(0x196)]
      ? ((this['icons'][_0x49b304(0x219)][_0x49b304(0x1ad)] =
          _0xa7a437[_0x49b304(0x196)]),
        (this[_0x49b304(0x1c6)][_0x49b304(0x1d1)][_0x49b304(0x1ad)] =
          _0xa7a437['chat_icon_url']))
      : ((this['icons']['isClicked']['src'] = _0x49b304(0x1cb)),
        (this['icons'][_0x49b304(0x1d1)]['src'] =
          'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg'));
  }
  [_0x57eafa(0x1f4)](_0x52b5c4) {
    const _0x11a89e = _0x57eafa,
      {
        theme: _0x2b6766,
        chat_bubble_button_color: _0x98ad3f,
        align_chat_bubble_button: _0x319a3f,
        chat_message_color: _0x368b2d,
        suggest_messages: _0xa6f791,
      } = _0x52b5c4,
      _0x19bd40 = window[_0x11a89e(0x1b2)]['origin'][_0x11a89e(0x1e2)](
        'chatfly',
      )
        ? _0x11a89e(0x193)
        : _0x11a89e(0x1ca),
      _0x2e4202 = {
        chatButtonAlignment: _0x319a3f ?? _0x11a89e(0x1d0),
        chatBoxAlignment: _0x319a3f ?? _0x11a89e(0x1d0),
        chatButtonDirection:
          _0x319a3f === _0x11a89e(0x1ae) ? _0x11a89e(0x1d0) : _0x11a89e(0x1ae),
        chatButtonColor: _0x98ad3f ?? '#fff',
        chatBoxBackgroundColor:
          _0x2b6766 === _0x11a89e(0x1b3) ? _0x11a89e(0x1f2) : _0x11a89e(0x201),
        chatInputBorderColor:
          _0x2b6766 === _0x11a89e(0x1b3) ? '#cdceed' : _0x11a89e(0x1c1),
        chatBoxHeaderBorderColor:
          _0x2b6766 === _0x11a89e(0x1b3) ? _0x11a89e(0x213) : '#0000004a',
        chatInputColor:
          _0x2b6766 === _0x11a89e(0x1b3) ? _0x11a89e(0x201) : _0x11a89e(0x1a0),
        chatBoxDisplayNameColor:
          _0x2b6766 === 'dark' ? _0x11a89e(0x201) : _0x11a89e(0x20b),
        messageItemOperatorBackgroundColor: _0x368b2d ?? '#3399FF',
        suggestedMessagesHeight: _0xa6f791?.[_0x11a89e(0x1ed)]
          ? _0x11a89e(0x1cc)
          : _0x11a89e(0x1dd),
      },
      _0x39ff24 = document[_0x11a89e(0x1ea)](_0x11a89e(0x1d9));
    (_0x39ff24['textContent'] = _0x19bd40['replace'](
      /{{([^}]+)}}/g,
      (_0x308d50, _0x5f1b73) => _0x2e4202[_0x5f1b73],
    )),
      document[_0x11a89e(0x1e9)][_0x11a89e(0x218)](_0x39ff24);
  }
  [_0x57eafa(0x1d8)](_0xf8fe0e) {
    return new Promise((_0x4b52d4) => setTimeout(_0x4b52d4, _0xf8fe0e));
  }
  async [_0x57eafa(0x1ba)](_0x110ef4) {
    const _0x560169 = _0x57eafa;
    let _0x5b70fa = _0x110ef4['querySelector']('input'),
      _0x320db8 = _0x5b70fa[_0x560169(0x217)];
    _0x5b70fa[_0x560169(0x217)] = '';
    if (_0x320db8 === '') return;
    this[_0x560169(0x1ce)][_0x560169(0x1b4)]([
      { sender_type: 'user', content: _0x320db8 },
      { sender_type: _0x560169(0x1cd), content: '' },
    ]),
      this[_0x560169(0x199)]();
    let _0x20dc8c = new Headers();
    _0x20dc8c[_0x560169(0x218)](_0x560169(0x197), _0x560169(0x198));
    const _0x27c02e = {
      method: _0x560169(0x212),
      headers: _0x20dc8c,
      body: JSON[_0x560169(0x1d2)]({
        message: _0x320db8,
        session_id: this[_0x560169(0x194)],
        ...window[_0x560169(0x19e)],
      }),
    };
    try {
      const _0x39b3ac = await fetch(this[_0x560169(0x20e)], _0x27c02e);
      if (!_0x39b3ac['ok'])
        throw new Error(_0x560169(0x20f) + _0x39b3ac[_0x560169(0x1e4)]);
      const _0x13804f = await _0x39b3ac['body'],
        _0x2c19fc = _0x13804f[_0x560169(0x1dc)]();
      for await (const _0x5c52fc of this[_0x560169(0x1f3)](_0x2c19fc)) {
      }
    } catch (_0x2e3333) {
      console[_0x560169(0x1af)](_0x560169(0x191), _0x2e3333),
        (_0x5b70fa[_0x560169(0x217)] = '');
    }
  }
  async *['asyncGenerator'](_0x324cd0) {
    const _0xd53c35 = _0x57eafa,
      _0x1bc589 = new TextDecoder();
    while (!![]) {
      const { done: _0x5b77f6, value: _0x3cb09c } =
        await _0x324cd0[_0xd53c35(0x205)]();
      if (_0x5b77f6) return;
      const _0x67cf33 = _0x1bc589[_0xd53c35(0x1c3)](_0x3cb09c);
      await this[_0xd53c35(0x1d8)](0x32),
        (this[_0xd53c35(0x1ce)][_0xd53c35(0x1e8)](-0x1)[0x0][0x1]['content'] +=
          _0x67cf33),
        await this[_0xd53c35(0x199)]();
    }
  }
  async [_0x57eafa(0x199)]() {
    const _0x308e1d = _0x57eafa;
    let _0x2eb74f = document[_0x308e1d(0x20d)](_0x308e1d(0x1c4)),
      _0x13e123 = '';
    this[_0x308e1d(0x1ce)][_0x308e1d(0x1a9)]((_0x285f26, _0x89051c) => {
      const _0x439080 = _0x308e1d;
      !(
        _0x285f26[0x0][_0x439080(0x19d)] == _0x439080(0x1cf) &&
        !_0x285f26[0x0][_0x439080(0x1c7)]
      ) &&
        (_0x13e123 +=
          _0x439080(0x216) + _0x285f26[0x0][_0x439080(0x1c7)] + '</div>');
      if (
        _0x285f26[0x1][_0x439080(0x19d)] == 'assistant' &&
        _0x285f26[0x1][_0x439080(0x1c7)]
      )
        _0x13e123 +=
          _0x439080(0x1e7) +
          _0x285f26[0x1][_0x439080(0x1c7)] +
          _0x439080(0x1f7);
      else _0x13e123 += _0x439080(0x1a4);
    }),
      (_0x2eb74f['innerHTML'] =
        _0x308e1d(0x1f1) + _0x13e123 + _0x308e1d(0x1f7));
  }
  [_0x57eafa(0x1a7)]() {
    const _0x9af4ef = _0x57eafa,
      { chatbox: _0x229fdf } = this[_0x9af4ef(0x202)];
    _0x229fdf[_0x9af4ef(0x1d9)][_0x9af4ef(0x19b)] = _0x9af4ef(0x1bd);
  }
  [_0x57eafa(0x1b0)]() {
    const _0x55f0c9 = _0x57eafa;
    (this[_0x55f0c9(0x1ce)] = []),
      (this[_0x55f0c9(0x194)] = this[_0x55f0c9(0x1a6)]()),
      this[_0x55f0c9(0x199)]();
  }
  [_0x57eafa(0x208)](_0x47ebb8) {
    const _0x4162f8 = _0x57eafa;
    (this[_0x4162f8(0x1ff)] = !this[_0x4162f8(0x1ff)]),
      this['showOrHideChatBox'](
        _0x47ebb8,
        this[_0x4162f8(0x202)][_0x4162f8(0x214)],
      );
  }
  [_0x57eafa(0x1b7)](_0x1c3e83, _0x2846a9) {
    const _0x51d252 = _0x57eafa;
    _0x1c3e83[_0x51d252(0x1d9)][_0x51d252(0x19b)] =
      _0x1c3e83[_0x51d252(0x1d9)][_0x51d252(0x19b)] === _0x51d252(0x1bd)
        ? ''
        : _0x51d252(0x1bd);
    if (this['state'])
      _0x1c3e83[_0x51d252(0x21d)][_0x51d252(0x1a2)](_0x51d252(0x19c)),
        this['toggleIcon'](!![], _0x2846a9);
    else !this[_0x51d252(0x1ff)] && this[_0x51d252(0x1bb)](![], _0x2846a9);
  }
  [_0x57eafa(0x1bb)](_0x58cafe, _0x5ced63) {
    const _0x59aa5f = _0x57eafa,
      { isClicked: _0x29dd95, isNotClicked: _0x4dea09 } =
        this[_0x59aa5f(0x1c6)],
      _0x16d219 = document[_0x59aa5f(0x20d)](_0x59aa5f(0x200));
    _0x16d219[_0x59aa5f(0x1e1)](_0x59aa5f(0x19f), () =>
      this[_0x59aa5f(0x1a7)](),
    );
    const _0x49301e = document['querySelector']('.refresh__button');
    _0x49301e[_0x59aa5f(0x1e1)](_0x59aa5f(0x19f), () =>
      this[_0x59aa5f(0x1b0)](),
    );
    const _0x2178bc = _0x5ced63[_0x59aa5f(0x1f0)],
      _0x43c4ca = _0x2178bc[_0x59aa5f(0x1f0)];
    _0x2178bc['replaceChild'](_0x58cafe ? _0x29dd95 : _0x4dea09, _0x43c4ca);
  }
}
(document['body'] = document[_0x57eafa(0x1ea)]('body')),
  (document[_0x57eafa(0x1e9)]['innerHTML'] += _0x57eafa(0x215));
function _0xb78c() {
  const _0x52fddc = [
    'syncChatWidgetStyling',
    'textContent',
    'src',
    'left',
    'error',
    'refreshHistory',
    'querySelectorAll',
    'location',
    'dark',
    'push',
    '49828tutNSS',
    '#000000',
    'showOrHideChatBox',
    '/bot/bot-widget-setting',
    'toString',
    'onSendButton',
    'toggleIcon',
    '.chatbox__support',
    'none',
    'className',
    '99kxkxHy',
    '7hiKUDm',
    '#0000004a',
    'icon_header',
    'decode',
    '.chatbox__messages',
    'origin',
    'icons',
    'content',
    'GET',
    '?bot_id=',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{white-space:\x20pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:12px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    '60px',
    'assistant',
    'history',
    'user',
    'right',
    'isNotClicked',
    'stringify',
    '1535278lvbYFY',
    'updateInitMessage',
    'chat_message_color',
    'keyup',
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    'sleep',
    'style',
    'replace',
    'updateChatIcons',
    'getReader',
    '0px',
    'getTime',
    '80px',
    '445cfKVfO',
    'addEventListener',
    'includes',
    'body',
    'status',
    'bot_avatar_url',
    'chatbot__suggest--item',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'slice',
    'head',
    'createElement',
    'img',
    'now',
    'length',
    'chatfly',
    'target',
    'firstElementChild',
    '<div>',
    '#111827',
    'asyncGenerator',
    'setStyle',
    'appendChild',
    '12406200GpXuTj',
    '</div>',
    '3038790ZzBmkY',
    'width',
    'updateHeader',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    'bot_id',
    'json',
    '1096019NvNqEv',
    'state',
    '.close__button',
    '#fff',
    'args',
    '<div\x20class=\x22icon_header\x22>',
    '2091252aglLML',
    'read',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    '.chatbox__button',
    'toggleState',
    'bot_avatar',
    'random',
    'inherit',
    'innerHTML',
    'querySelector',
    'getStreamingResponseUrl',
    'Request\x20failed\x20with\x20status:\x20',
    'undefined',
    'baseUrl',
    'POST',
    '#cdceed',
    'openButton',
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    'value',
    'append',
    'isClicked',
    'iconSend',
    'floor',
    'div',
    'classList',
    '<svg\x20fill=',
    '.chatbot__header',
    'Error:',
    '.chatbot__suggest--item',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{white-space:pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{white-space:pre-wrap;border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:\x2012px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#fff;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'session_id',
    '6904680JIYtdq',
    'chat_icon_url',
    'Content-Type',
    'application/json',
    'updateChatBox',
    '.chatbox__send--footer',
    'display',
    'chatbox--active',
    'sender_type',
    'chatbotConfig',
    'click',
    '#inherit',
    'https://backend.dev.chatfly.co/api',
    'add',
    'display_name',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    'showMessageText',
    'generateUUID',
    'closeChatBox',
    'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png',
    'forEach',
    'updateSuggestedMessages',
  ];
  _0xb78c = function () {
    return _0x52fddc;
  };
  return _0xb78c();
}
const elemDiv = _0x57eafa(0x206);
document[_0x57eafa(0x1e3)][_0x57eafa(0x20c)] += elemDiv;
const chatbox = new InteractiveChatbox();
chatbox[_0x57eafa(0x19b)]();
