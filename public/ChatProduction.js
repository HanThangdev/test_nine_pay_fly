const _0xdb736f = _0x209a;
(function (_0x37038e, _0x6f7e0e) {
  const _0x437027 = _0x209a,
    _0x3ba298 = _0x37038e();
  while (!![]) {
    try {
      const _0x2c453e =
        (-parseInt(_0x437027(0x86)) / 0x1) * (parseInt(_0x437027(0xc8)) / 0x2) +
        -parseInt(_0x437027(0xdc)) / 0x3 +
        parseInt(_0x437027(0xee)) / 0x4 +
        parseInt(_0x437027(0xf7)) / 0x5 +
        parseInt(_0x437027(0x94)) / 0x6 +
        parseInt(_0x437027(0xd8)) / 0x7 +
        -parseInt(_0x437027(0xce)) / 0x8;
      if (_0x2c453e === _0x6f7e0e) break;
      else _0x3ba298['push'](_0x3ba298['shift']());
    } catch (_0xfc9ea6) {
      _0x3ba298['push'](_0x3ba298['shift']());
    }
  }
})(_0xae50, 0xd6731);
class InteractiveChatbox {
  constructor() {
    const _0x17990e = _0x209a;
    (this[_0x17990e(0xcf)] = 'https://backend.chatfly.co/api'),
      (this['getStreamingResponseUrl'] =
        this[_0x17990e(0xcf)] + '/chat/get-streaming-response'),
      (this[_0x17990e(0xed)] = this[_0x17990e(0xcf)] + _0x17990e(0xc0)),
      (this[_0x17990e(0x9c)] = {
        openButton: document['querySelector'](_0x17990e(0xeb)),
        chatbox: document['querySelector'](_0x17990e(0xc9)),
        sendButton: document[_0x17990e(0xa1)](_0x17990e(0x93)),
        header: document[_0x17990e(0xa1)](_0x17990e(0x80)),
        message_suggest: document[_0x17990e(0xa1)](_0x17990e(0xac)),
        chatFlyContainer: document[_0x17990e(0xa1)](_0x17990e(0xc2)),
      }),
      (this[_0x17990e(0xca)] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x17990e(0xa6),
        iconRefresh: _0x17990e(0xf6),
      }),
      (this[_0x17990e(0xf3)] = ![]),
      (this['history'] = []),
      (this['session_id'] = this[_0x17990e(0xae)]()),
      (this[_0x17990e(0x7d)] = ![]);
  }
  [_0xdb736f(0xae)]() {
    const _0x218c13 = _0xdb736f;
    var _0x20fa83 = new Date()['getTime'](),
      _0x38170a =
        (typeof performance !== _0x218c13(0xf4) &&
          performance['now'] &&
          performance['now']() * 0x3e8) ||
        0x0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[_0x218c13(0xaf)](
      /[xy]/g,
      function (_0x38b566) {
        const _0x599150 = _0x218c13;
        var _0x4211ee = Math[_0x599150(0xf0)]() * 0x10;
        return (
          _0x20fa83 > 0x0
            ? ((_0x4211ee = (_0x20fa83 + _0x4211ee) % 0x10 | 0x0),
              (_0x20fa83 = Math['floor'](_0x20fa83 / 0x10)))
            : ((_0x4211ee = (_0x38170a + _0x4211ee) % 0x10 | 0x0),
              (_0x38170a = Math[_0x599150(0x7b)](_0x38170a / 0x10))),
          (_0x38b566 === 'x' ? _0x4211ee : (_0x4211ee & 0x3) | 0x8)[
            _0x599150(0xe6)
          ](0x10)
        );
      },
    );
  }
  async ['display']() {
    const _0xf61023 = _0xdb736f,
      {
        openButton: _0x177184,
        chatbox: _0x27e16f,
        sendButton: _0x192488,
      } = this[_0xf61023(0x9c)];
    await this[_0xf61023(0xfe)](_0x27e16f);
    const { iconSend: _0x1dd03f } = this[_0xf61023(0xca)];
    this[_0xf61023(0xbf)](![], _0x177184), this['toggleState'](_0x27e16f);
    window['location']['origin']['includes'](_0xf61023(0xfd)) &&
      this[_0xf61023(0xef)](_0x27e16f);
    _0x177184[_0xf61023(0xa0)](_0xf61023(0xa8), () =>
      this[_0xf61023(0xef)](_0x27e16f),
    ),
      _0x192488[_0xf61023(0xa0)](_0xf61023(0xa8), () =>
        this[_0xf61023(0xc7)](_0x27e16f),
      ),
      (_0x192488[_0xf61023(0xb8)] =
        _0xf61023(0x101) + _0x1dd03f + _0xf61023(0xe5));
    const _0x34f731 = _0x27e16f[_0xf61023(0xa1)]('input');
    _0x34f731[_0xf61023(0xa0)](_0xf61023(0xa5), ({ key: _0x3cd46d }) => {
      const _0x5b6f8b = _0xf61023;
      _0x3cd46d === _0x5b6f8b(0xdf) && this[_0x5b6f8b(0xc7)](_0x27e16f);
    });
  }
  [_0xdb736f(0x9a)]() {
    const _0x1c9460 = _0xdb736f,
      { openButton: _0x37794a, chatbox: _0xf6f619 } = this['args'];
    (_0x37794a['style'][_0x1c9460(0xb3)] = 'block'),
      (_0xf6f619[_0x1c9460(0xe7)][_0x1c9460(0xb3)] = _0x1c9460(0xd9)),
      (_0xf6f619[_0x1c9460(0xe7)][_0x1c9460(0xb2)] = _0x1c9460(0xe1)),
      (_0x37794a[_0x1c9460(0xe7)]['visibility'] = 'visible');
  }
  async [_0xdb736f(0xfe)](_0x46abb6) {
    const _0x4cf444 = _0xdb736f;
    let _0x53bea0 = new Headers();
    _0x53bea0['append']('Content-Type', _0x4cf444(0x84));
    const _0x5ae98e = { method: 'GET', headers: _0x53bea0 };
    try {
      const _0x2738ee = await fetch(
          this[_0x4cf444(0xed)] +
            '?bot_id=' +
            window['chatbotConfig']['bot_id'],
          _0x5ae98e,
        ),
        { openButton: _0x2c7a96, chatbox: _0x52604b } = this[_0x4cf444(0x9c)];
      if (!_0x2738ee['ok']) {
        (_0x2c7a96[_0x4cf444(0xe7)][_0x4cf444(0xb3)] = _0x4cf444(0xbc)),
          (_0x52604b[_0x4cf444(0xe7)][_0x4cf444(0xb3)] = _0x4cf444(0xbc));
        throw new Error(_0x4cf444(0xfc) + _0x2738ee[_0x4cf444(0x8d)]);
      }
      this[_0x4cf444(0x9a)]();
      const _0x22b37d = await _0x2738ee['json']();
      this[_0x4cf444(0xb5)](_0x22b37d),
        this['updateInitMessage'](_0x22b37d),
        await this[_0x4cf444(0xe9)](_0x22b37d),
        await this[_0x4cf444(0xaa)](_0x22b37d);
      const _0x358c12 = document[_0x4cf444(0x85)](_0x4cf444(0xf9));
      _0x358c12[_0x4cf444(0xe3)]((_0x462347) => {
        const _0x5463c7 = _0x4cf444;
        _0x462347?.[_0x5463c7(0xa0)]('click', (_0x3b16c1) =>
          this['showMessageText'](_0x3b16c1, _0x52604b),
        );
      }),
        this[_0x4cf444(0xdb)](_0x22b37d);
    } catch (_0x59f14a) {
      console['error']('Error:', _0x59f14a);
    }
  }
  [_0xdb736f(0x79)](_0x26d313) {
    const _0x4f52dc = _0xdb736f,
      { initial_message: _0x1b402b } = _0x26d313;
    _0x1b402b &&
      (this['history'][_0x4f52dc(0xb1)]([
        { sender_type: _0x4f52dc(0xc3), content: '' },
        { sender_type: _0x4f52dc(0x88), content: _0x1b402b },
      ]),
      this['updateChatBox']());
  }
  ['updateHeader'](_0x4e86b7) {
    const _0x4de70b = _0xdb736f,
      { header: _0x588a81 } = this[_0x4de70b(0x9c)],
      { iconRefresh: _0x1fcc49, iconClose: _0x1f54db } = this[_0x4de70b(0xca)],
      _0x23790f = document[_0x4de70b(0x97)](_0x4de70b(0xc6));
    _0x23790f[_0x4de70b(0xc5)] = _0x4de70b(0xa3);
    if (_0x4e86b7[_0x4de70b(0xd0)]) {
      const _0x35baf9 = document[_0x4de70b(0x97)](_0x4de70b(0x83));
      (_0x35baf9['src'] = _0x4e86b7['bot_avatar_url']),
        (_0x35baf9[_0x4de70b(0xc5)] = _0x4de70b(0x7c)),
        _0x23790f['appendChild'](_0x35baf9);
    }
    _0x4e86b7[_0x4de70b(0xfa)] &&
      (_0x23790f['innerHTML'] += _0x4e86b7[_0x4de70b(0xfa)]),
      _0x588a81[_0x4de70b(0x8a)](_0x23790f),
      (_0x588a81[_0x4de70b(0xb8)] +=
        _0x4de70b(0xfb) + _0x1fcc49 + _0x1f54db + _0x4de70b(0xe5));
  }
  [_0xdb736f(0xda)](_0x30f259, _0x3eecc9) {
    const _0x1ef0b6 = _0xdb736f,
      _0x4109fc = _0x30f259[_0x1ef0b6(0xb9)][_0x1ef0b6(0x82)];
    let _0x1c4bc9 = _0x3eecc9[_0x1ef0b6(0xa1)](_0x1ef0b6(0xb7));
    (_0x1c4bc9['value'] = _0x4109fc), this['onSendButton'](_0x3eecc9);
  }
  ['updateSuggestedMessages'](_0x49e4ca) {
    const _0xa1a5a9 = _0xdb736f,
      { suggest_messages: _0x1d8b4e } = _0x49e4ca,
      { message_suggest: _0x393ef7 } = this['args'];
    (_0x1d8b4e ?? [])[_0xa1a5a9(0xe3)]((_0x1a57d9) => {
      const _0xd33ae6 = _0xa1a5a9,
        _0x33937c = document['createElement'](_0xd33ae6(0xc6));
      (_0x33937c[_0xd33ae6(0xc5)] = 'chatbot__suggest--item'),
        (_0x33937c[_0xd33ae6(0x82)] = _0x1a57d9),
        _0x393ef7[_0xd33ae6(0x8a)](_0x33937c);
    });
  }
  async [_0xdb736f(0xe9)](_0x2f874a) {
    const _0x334b8d = _0xdb736f;
    (this[_0x334b8d(0xca)][_0x334b8d(0xbb)] = document[_0x334b8d(0x97)](
      _0x334b8d(0x83),
    )),
      (this[_0x334b8d(0xca)][_0x334b8d(0x8e)] = document[_0x334b8d(0x97)](
        _0x334b8d(0x83),
      )),
      (this[_0x334b8d(0xca)]['iconSend'] =
        _0x334b8d(0xe0) +
        (_0x2f874a['chat_message_color']
          ? '\x22' + _0x2f874a[_0x334b8d(0x8c)] + '\x22'
          : '#000000') +
        '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>');
    if (window[_0x334b8d(0xd5)]['origin'][_0x334b8d(0xbd)]('chatfly')) {
      (this[_0x334b8d(0xca)][_0x334b8d(0xbb)][_0x334b8d(0xb0)] =
        _0x334b8d(0xa4)),
        (this[_0x334b8d(0xca)]['isClicked'][_0x334b8d(0xe7)][_0x334b8d(0x90)] =
          _0x334b8d(0xd2)),
        (this[_0x334b8d(0xca)]['isNotClicked'][_0x334b8d(0xb0)] =
          _0x334b8d(0xa4)),
        (this['icons']['isNotClicked'][_0x334b8d(0xe7)][_0x334b8d(0x90)] =
          _0x334b8d(0xd2));
      return;
    }
    _0x2f874a[_0x334b8d(0x100)]
      ? ((this[_0x334b8d(0xca)][_0x334b8d(0xbb)][_0x334b8d(0xb0)] =
          _0x2f874a[_0x334b8d(0x100)]),
        (this[_0x334b8d(0xca)]['isNotClicked']['src'] =
          _0x2f874a[_0x334b8d(0x100)]))
      : ((this['icons'][_0x334b8d(0xbb)][_0x334b8d(0xb0)] = _0x334b8d(0xa2)),
        (this[_0x334b8d(0xca)]['isNotClicked'][_0x334b8d(0xb0)] =
          _0x334b8d(0xa2)));
  }
  ['setStyle'](_0x339729) {
    const _0xbc8415 = _0xdb736f,
      {
        theme: _0x532f3a,
        chat_bubble_button_color: _0x3c159e,
        align_chat_bubble_button: _0x4979e2,
        chat_message_color: _0x3062d3,
        suggest_messages: _0x32f225,
      } = _0x339729,
      _0x4c653e = _0xbc8415(0x8f),
      _0x56d813 = _0xbc8415(0xec),
      _0x39e09e = window[_0xbc8415(0xd5)][_0xbc8415(0x87)][_0xbc8415(0xbd)](
        _0xbc8415(0xfd),
      )
        ? _0x56d813
        : _0x4c653e,
      _0x5b43d5 = {
        chatButtonAlignment: _0x4979e2 ?? 'right',
        chatBoxAlignment: _0x4979e2 ?? _0xbc8415(0xf2),
        chatButtonDirection: _0x4979e2 === _0xbc8415(0xd7) ? 'right' : 'left',
        chatButtonColor: _0x3c159e ?? _0xbc8415(0xa9),
        chatBoxBackgroundColor:
          _0x532f3a === _0xbc8415(0xde) ? _0xbc8415(0xab) : _0xbc8415(0xa9),
        chatInputBorderColor:
          _0x532f3a === _0xbc8415(0xde) ? _0xbc8415(0x99) : '#0000004a',
        chatBoxHeaderBorderColor:
          _0x532f3a === 'dark' ? '#cdceed' : _0xbc8415(0xad),
        chatInputColor:
          _0x532f3a === _0xbc8415(0xde) ? _0xbc8415(0xa9) : _0xbc8415(0xcd),
        chatBoxDisplayNameColor:
          _0x532f3a === _0xbc8415(0xde) ? '#fff' : _0xbc8415(0x89),
        messageItemOperatorBackgroundColor: _0x3062d3 ?? '#3399FF',
        suggestedMessagesHeight: _0x32f225?.[_0xbc8415(0xe4)]
          ? '60px'
          : _0xbc8415(0xf1),
      },
      _0x342f28 = document[_0xbc8415(0x97)](_0xbc8415(0xe7));
    (_0x342f28[_0xbc8415(0x82)] = _0x39e09e[_0xbc8415(0xaf)](
      /{{([^}]+)}}/g,
      (_0x205dc2, _0x199578) => _0x5b43d5[_0x199578],
    )),
      document['head'][_0xbc8415(0x9f)](_0x342f28);
  }
  [_0xdb736f(0xd3)](_0x35aadc) {
    return new Promise((_0x5b008f) => setTimeout(_0x5b008f, _0x35aadc));
  }
  async [_0xdb736f(0xc7)](_0xfb6371) {
    const _0x5467ee = _0xdb736f;
    let _0x340f4f = _0xfb6371[_0x5467ee(0xa1)](_0x5467ee(0xb7)),
      _0x5c0929 = _0x340f4f[_0x5467ee(0xff)];
    if (!!this[_0x5467ee(0x7d)]) return;
    _0x340f4f[_0x5467ee(0xff)] = '';
    if (_0x5c0929 === '') return;
    (this['loading'] = !![]),
      this[_0x5467ee(0xdd)][_0x5467ee(0xb1)]([
        { sender_type: _0x5467ee(0xc3), content: _0x5c0929 },
        { sender_type: 'assistant', content: '' },
      ]),
      this['updateChatBox']();
    let _0x1b09de = new Headers();
    _0x1b09de['append'](_0x5467ee(0x95), 'application/json');
    const _0x1ea103 = {
      method: _0x5467ee(0xcc),
      headers: _0x1b09de,
      body: JSON[_0x5467ee(0xb6)]({
        message: _0x5c0929,
        session_id: this['session_id'],
        ...window[_0x5467ee(0xa7)],
      }),
    };
    try {
      const _0x19e5a9 = await fetch(this[_0x5467ee(0xbe)], _0x1ea103);
      if (!_0x19e5a9['ok'])
        throw new Error(_0x5467ee(0x8b) + _0x19e5a9['status']);
      const _0x28931a = await _0x19e5a9[_0x5467ee(0xb4)],
        _0x16656d = _0x28931a[_0x5467ee(0x96)]();
      for await (const _0x393db5 of this['asyncGenerator'](_0x16656d)) {
      }
    } catch (_0x1bab22) {
      (this[_0x5467ee(0x7d)] = ![]),
        console[_0x5467ee(0xcb)]('Error:', _0x1bab22),
        (_0x340f4f[_0x5467ee(0xff)] = '');
    }
  }
  async *[_0xdb736f(0x7a)](_0x9c915a) {
    const _0x3c1937 = _0xdb736f,
      _0x252dfb = new TextDecoder();
    while (!![]) {
      const { done: _0x5eb7d4, value: _0x2f458b } =
        await _0x9c915a[_0x3c1937(0x7e)]();
      if (_0x5eb7d4) {
        this[_0x3c1937(0x7d)] = ![];
        return;
      }
      const _0x1c3045 = _0x252dfb[_0x3c1937(0x98)](_0x2f458b);
      await this[_0x3c1937(0xd3)](0x32),
        (this[_0x3c1937(0xdd)][_0x3c1937(0xf8)](-0x1)[0x0][0x1][
          _0x3c1937(0x9d)
        ] += _0x1c3045),
        await this[_0x3c1937(0xe8)]();
    }
  }
  async [_0xdb736f(0xe8)]() {
    const _0x25681a = _0xdb736f;
    let _0xd5a836 = document[_0x25681a(0xa1)]('.chatbox__messages'),
      _0x579d66 = '';
    this['history']['forEach']((_0x7c330, _0x55cdaf) => {
      const _0x590776 = _0x25681a;
      !(
        _0x7c330[0x0][_0x590776(0xea)] == _0x590776(0xc3) &&
        !_0x7c330[0x0][_0x590776(0x9d)]
      ) &&
        (_0x579d66 +=
          '<div\x20class=\x22messages__item\x20messages__item--operator\x22>' +
          _0x7c330[0x0][_0x590776(0x9d)] +
          '</div>');
      if (
        _0x7c330[0x1][_0x590776(0xea)] == _0x590776(0x88) &&
        _0x7c330[0x1][_0x590776(0x9d)]
      )
        _0x579d66 +=
          _0x590776(0x9e) + _0x7c330[0x1][_0x590776(0x9d)] + _0x590776(0xe5);
      else
        _0x579d66 +=
          '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';
    }),
      (_0xd5a836[_0x25681a(0xb8)] =
        _0x25681a(0x101) + _0x579d66 + _0x25681a(0xe5));
  }
  [_0xdb736f(0x92)]() {
    const _0x21e539 = _0xdb736f,
      { chatbox: _0x19760a } = this[_0x21e539(0x9c)];
    _0x19760a['style'][_0x21e539(0xb3)] = _0x21e539(0xbc);
  }
  [_0xdb736f(0xba)]() {
    const _0x138951 = _0xdb736f;
    (this[_0x138951(0xdd)] = []),
      (this[_0x138951(0xd1)] = this['generateUUID']()),
      this[_0x138951(0xe8)]();
  }
  [_0xdb736f(0xef)](_0x25b3b7) {
    const _0x31df86 = _0xdb736f;
    (this[_0x31df86(0xf3)] = !this[_0x31df86(0xf3)]),
      this[_0x31df86(0x9b)](_0x25b3b7, this[_0x31df86(0x9c)][_0x31df86(0x81)]);
  }
  [_0xdb736f(0x9b)](_0x53fd4e, _0x5d73b4) {
    const _0x567bda = _0xdb736f;
    _0x53fd4e[_0x567bda(0xe7)][_0x567bda(0xb3)] =
      _0x53fd4e['style']['display'] === _0x567bda(0xbc) ? '' : _0x567bda(0xbc);
    if (this[_0x567bda(0xf3)])
      _0x53fd4e[_0x567bda(0xe2)][_0x567bda(0x7f)](_0x567bda(0xc1)),
        this[_0x567bda(0xbf)](!![], _0x5d73b4);
    else !this[_0x567bda(0xf3)] && this[_0x567bda(0xbf)](![], _0x5d73b4);
  }
  ['toggleIcon'](_0x226b89, _0x7932a7) {
    const _0x310792 = _0xdb736f,
      { isClicked: _0x46984d, isNotClicked: _0x5a0707 } = this['icons'],
      _0x54782e = document[_0x310792(0xa1)](_0x310792(0xc4));
    _0x54782e[_0x310792(0xa0)](_0x310792(0xa8), () => this[_0x310792(0x92)]());
    const _0x21a218 = document[_0x310792(0xa1)]('.refresh__button');
    _0x21a218['addEventListener'](_0x310792(0xa8), () =>
      this[_0x310792(0xba)](),
    );
    const _0x31d1a9 = _0x7932a7['firstElementChild'],
      _0x417ae7 = _0x31d1a9['firstElementChild'];
    _0x31d1a9[_0x310792(0xf5)](_0x226b89 ? _0x46984d : _0x5a0707, _0x417ae7);
  }
}
(document['body'] = document[_0xdb736f(0x97)](_0xdb736f(0xb4))),
  (document[_0xdb736f(0x91)][_0xdb736f(0xb8)] += _0xdb736f(0xd4));
const elemDiv = _0xdb736f(0xd6);
function _0x209a(_0x13acc0, _0x3e9ea8) {
  const _0xae5092 = _0xae50();
  return (
    (_0x209a = function (_0x209a99, _0x1a8af2) {
      _0x209a99 = _0x209a99 - 0x79;
      let _0x5715cc = _0xae5092[_0x209a99];
      return _0x5715cc;
    }),
    _0x209a(_0x13acc0, _0x3e9ea8)
  );
}
function _0xae50() {
  const _0x1ba8ab = [
    '4eIlppc',
    '.chatbox__support',
    'icons',
    'error',
    'POST',
    '#inherit',
    '29588128FgDnxW',
    'baseUrl',
    'bot_avatar_url',
    'session_id',
    '80px',
    'sleep',
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__button{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.init_message{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20@media\x20only\x20screen\x20and\x20(max-width:\x201024px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20350px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2060vh\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.chatbox\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20',
    'location',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'left',
    '5621560uahsnD',
    'block',
    'showMessageText',
    'updateHeader',
    '615339VeJrkl',
    'history',
    'dark',
    'Enter',
    '<svg\x20fill=',
    'visible',
    'classList',
    'forEach',
    'length',
    '</div>',
    'toString',
    'style',
    'updateChatBox',
    'updateChatIcons',
    'sender_type',
    '.chatbox__button',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{white-space:pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:70vh;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{white-space:pre-wrap;border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1.2rem}.chatbot__suggest--item{font-size:\x2012px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#4AC1FF;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'getBotWidgetSettingUrl',
    '5222176QahYgD',
    'toggleState',
    'random',
    '0px',
    'right',
    'state',
    'undefined',
    'replaceChild',
    '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
    '6249400uuMAnC',
    'slice',
    '.chatbot__suggest--item',
    'display_name',
    '<div\x20class=\x22icon_header\x22>',
    'Request\x20failed\x20swith\x20status:\x20',
    'chatfly',
    'syncChatWidgetStyling',
    'value',
    'chat_icon_url',
    '<div>',
    'updateInitMessage',
    'asyncGenerator',
    'floor',
    'bot_avatar',
    'loading',
    'read',
    'add',
    '.chatbot__header',
    'openButton',
    'textContent',
    'img',
    'application/json',
    'querySelectorAll',
    '27091wTcCfO',
    'origin',
    'assistant',
    'inherit',
    'appendChild',
    'Request\x20failed\x20with\x20status:\x20',
    'chat_message_color',
    'status',
    'isNotClicked',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{white-space:\x20pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:70vh;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:12px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'width',
    'head',
    'closeChatBox',
    '.chatbox__send--footer',
    '8866152yyDnSS',
    'Content-Type',
    'getReader',
    'createElement',
    'decode',
    '#cdceed',
    'showChatWhenGetStyleSuccess',
    'showOrHideChatBox',
    'args',
    'content',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'append',
    'addEventListener',
    'querySelector',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'icon_header',
    'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png',
    'keyup',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    'chatbotConfig',
    'click',
    '#fff',
    'updateSuggestedMessages',
    '#111827',
    '.chatbot__suggest',
    '#0000004a',
    'generateUUID',
    'replace',
    'src',
    'push',
    'visibility',
    'display',
    'body',
    'setStyle',
    'stringify',
    'input',
    'innerHTML',
    'target',
    'refreshHistory',
    'isClicked',
    'none',
    'includes',
    'getStreamingResponseUrl',
    'toggleIcon',
    '/bot/bot-widget-setting',
    'chatbox--active',
    '.chatbot',
    'user',
    '.close__button',
    'className',
    'div',
    'onSendButton',
  ];
  _0xae50 = function () {
    return _0x1ba8ab;
  };
  return _0xae50();
}
document['body']['innerHTML'] += elemDiv;
const chatbox = new InteractiveChatbox();
chatbox[_0xdb736f(0xb3)]();
