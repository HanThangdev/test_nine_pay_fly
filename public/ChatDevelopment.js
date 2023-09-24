const _0x75ebf4 = _0xb4df;
(function (_0x2f6666, _0x3cf716) {
  const _0x3e3333 = _0xb4df,
    _0x49de41 = _0x2f6666();
  while (!![]) {
    try {
      const _0x37e1d7 =
        (parseInt(_0x3e3333(0x14d)) / 0x1) *
          (-parseInt(_0x3e3333(0x187)) / 0x2) +
        (-parseInt(_0x3e3333(0x10a)) / 0x3) *
          (parseInt(_0x3e3333(0x10c)) / 0x4) +
        (-parseInt(_0x3e3333(0x13b)) / 0x5) *
          (parseInt(_0x3e3333(0x158)) / 0x6) +
        -parseInt(_0x3e3333(0x14e)) / 0x7 +
        parseInt(_0x3e3333(0x181)) / 0x8 +
        (parseInt(_0x3e3333(0x120)) / 0x9) *
          (-parseInt(_0x3e3333(0x17d)) / 0xa) +
        parseInt(_0x3e3333(0x117)) / 0xb;
      if (_0x37e1d7 === _0x3cf716) break;
      else _0x49de41['push'](_0x49de41['shift']());
    } catch (_0x25bc96) {
      _0x49de41['push'](_0x49de41['shift']());
    }
  }
})(_0x2d89, 0x5416f);
class InteractiveChatbox {
  constructor() {
    const _0x15969f = _0xb4df;
    (this[_0x15969f(0x108)] = 'https://backend.dev.chatfly.co/api'),
      (this['getStreamingResponseUrl'] =
        this[_0x15969f(0x108)] + '/chat/get-streaming-response'),
      (this[_0x15969f(0x104)] =
        this[_0x15969f(0x108)] + '/bot/bot-widget-setting'),
      (this[_0x15969f(0x15e)] = {
        openButton: document[_0x15969f(0x151)](_0x15969f(0x169)),
        chatbox: document[_0x15969f(0x151)](_0x15969f(0x137)),
        sendButton: document[_0x15969f(0x151)]('.chatbox__send--footer'),
        header: document[_0x15969f(0x151)](_0x15969f(0x165)),
        message_suggest: document[_0x15969f(0x151)](_0x15969f(0x152)),
        chatFlyContainer: document[_0x15969f(0x151)](_0x15969f(0x171)),
      }),
      (this[_0x15969f(0x155)] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x15969f(0x123),
        iconRefresh:
          '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
      }),
      (this[_0x15969f(0x177)] = ![]),
      (this[_0x15969f(0x106)] = []),
      (this[_0x15969f(0x186)] = this[_0x15969f(0x16a)]()),
      (this[_0x15969f(0x183)] = ![]);
  }
  ['generateUUID']() {
    const _0x2841f9 = _0xb4df;
    var _0x326889 = new Date()[_0x2841f9(0x11a)](),
      _0xd582e2 =
        (typeof performance !== _0x2841f9(0x168) &&
          performance[_0x2841f9(0x136)] &&
          performance[_0x2841f9(0x136)]() * 0x3e8) ||
        0x0;
    return _0x2841f9(0x15b)['replace'](/[xy]/g, function (_0x2f8d68) {
      const _0x34c2c5 = _0x2841f9;
      var _0x233e83 = Math[_0x34c2c5(0x11f)]() * 0x10;
      return (
        _0x326889 > 0x0
          ? ((_0x233e83 = (_0x326889 + _0x233e83) % 0x10 | 0x0),
            (_0x326889 = Math[_0x34c2c5(0x143)](_0x326889 / 0x10)))
          : ((_0x233e83 = (_0xd582e2 + _0x233e83) % 0x10 | 0x0),
            (_0xd582e2 = Math[_0x34c2c5(0x143)](_0xd582e2 / 0x10))),
        (_0x2f8d68 === 'x' ? _0x233e83 : (_0x233e83 & 0x3) | 0x8)[
          _0x34c2c5(0x15d)
        ](0x10)
      );
    });
  }
  async [_0x75ebf4(0x144)]() {
    const _0x432bb4 = _0x75ebf4,
      {
        openButton: _0xfddc20,
        chatbox: _0x20074d,
        sendButton: _0x4926a2,
      } = this[_0x432bb4(0x15e)];
    await this[_0x432bb4(0x15c)](_0x20074d);
    const { iconSend: _0x35680f } = this[_0x432bb4(0x155)];
    this[_0x432bb4(0x17e)](![], _0xfddc20),
      this['toggleState'](_0x20074d),
      _0xfddc20[_0x432bb4(0x102)](_0x432bb4(0x11e), () =>
        this[_0x432bb4(0x153)](_0x20074d),
      ),
      _0x4926a2[_0x432bb4(0x102)](_0x432bb4(0x11e), () =>
        this[_0x432bb4(0x122)](_0x20074d),
      ),
      (_0x4926a2[_0x432bb4(0x13d)] = '<div>' + _0x35680f + _0x432bb4(0x128));
    const _0x2da176 = _0x20074d['querySelector'](_0x432bb4(0x127));
    _0x2da176[_0x432bb4(0x102)](_0x432bb4(0x188), ({ key: _0x143125 }) => {
      const _0x417803 = _0x432bb4;
      _0x143125 === _0x417803(0x113) && this['onSendButton'](_0x20074d);
    });
  }
  async [_0x75ebf4(0x15c)](_0x3558de) {
    const _0x11052e = _0x75ebf4;
    let _0x9fc02d = new Headers();
    _0x9fc02d[_0x11052e(0x154)]('Content-Type', 'application/json');
    const _0x5054f9 = { method: _0x11052e(0x101), headers: _0x9fc02d };
    try {
      const _0x7dafb0 = await fetch(
          this[_0x11052e(0x104)] +
            _0x11052e(0x176) +
            window[_0x11052e(0x17a)][_0x11052e(0x118)],
          _0x5054f9,
        ),
        { openButton: _0x44de6f, chatbox: _0x5de7d7 } = this[_0x11052e(0x15e)];
      if (!_0x7dafb0['ok']) {
        (_0x44de6f[_0x11052e(0x173)]['display'] = _0x11052e(0x180)),
          (_0x5de7d7['style'][_0x11052e(0x144)] = _0x11052e(0x180));
        throw new Error(
          'Request\x20failed\x20swith\x20status:\x20' +
            _0x7dafb0[_0x11052e(0x126)],
        );
      }
      (_0x44de6f[_0x11052e(0x173)][_0x11052e(0x144)] = _0x11052e(0x184)),
        (_0x5de7d7['style'][_0x11052e(0x144)] = _0x11052e(0x184));
      const _0x4dbbbc = await _0x7dafb0[_0x11052e(0x13f)]();
      this[_0x11052e(0x114)](_0x4dbbbc),
        this[_0x11052e(0x100)](_0x4dbbbc),
        await this['updateChatIcons'](_0x4dbbbc),
        await this[_0x11052e(0x148)](_0x4dbbbc);
      const _0x54bb72 = document['querySelectorAll'](_0x11052e(0x140));
      _0x54bb72[_0x11052e(0x156)]((_0x23a782) => {
        const _0x262e9a = _0x11052e;
        _0x23a782?.['addEventListener']('click', (_0x3edb66) =>
          this[_0x262e9a(0x146)](_0x3edb66, _0x5de7d7),
        );
      }),
        this[_0x11052e(0x185)](_0x4dbbbc);
    } catch (_0x4b6718) {
      console['error'](_0x11052e(0x14a), _0x4b6718);
    }
  }
  [_0x75ebf4(0x100)](_0x1a9952) {
    const _0x3ea71e = _0x75ebf4,
      { initial_message: _0x42ce8b } = _0x1a9952;
    _0x42ce8b &&
      (this['history']['push']([
        { sender_type: 'user', content: '' },
        { sender_type: _0x3ea71e(0x116), content: _0x42ce8b },
      ]),
      this[_0x3ea71e(0x147)]());
  }
  [_0x75ebf4(0x185)](_0x39edf0) {
    const _0x5b6ed3 = _0x75ebf4,
      { header: _0x43bcbd } = this['args'],
      { iconRefresh: _0x486b53, iconClose: _0x3a01d2 } = this[_0x5b6ed3(0x155)],
      _0x52315d = document[_0x5b6ed3(0x10f)](_0x5b6ed3(0x109));
    _0x52315d['className'] = _0x5b6ed3(0x160);
    if (_0x39edf0[_0x5b6ed3(0x10e)]) {
      const _0x2a9c0c = document[_0x5b6ed3(0x10f)](_0x5b6ed3(0x145));
      (_0x2a9c0c[_0x5b6ed3(0x135)] = _0x39edf0['bot_avatar_url']),
        (_0x2a9c0c['className'] = 'bot_avatar'),
        _0x52315d[_0x5b6ed3(0x162)](_0x2a9c0c);
    }
    _0x39edf0[_0x5b6ed3(0x16d)] &&
      (_0x52315d['innerHTML'] += _0x39edf0['display_name']),
      _0x43bcbd[_0x5b6ed3(0x162)](_0x52315d),
      (_0x43bcbd[_0x5b6ed3(0x13d)] +=
        '<div\x20class=\x22icon_header\x22>' +
        _0x486b53 +
        _0x3a01d2 +
        _0x5b6ed3(0x128));
  }
  ['showMessageText'](_0x58a3b9, _0x477f83) {
    const _0x8b42e4 = _0x75ebf4,
      _0x11c395 = _0x58a3b9[_0x8b42e4(0x11c)][_0x8b42e4(0x110)];
    let _0x27b5d4 = _0x477f83[_0x8b42e4(0x151)](_0x8b42e4(0x127));
    (_0x27b5d4[_0x8b42e4(0x12b)] = _0x11c395),
      this[_0x8b42e4(0x122)](_0x477f83);
  }
  ['updateSuggestedMessages'](_0x16436b) {
    const _0x48a8bd = _0x75ebf4,
      { suggest_messages: _0x5480c9 } = _0x16436b,
      { message_suggest: _0xcdddca } = this[_0x48a8bd(0x15e)];
    (_0x5480c9 ?? [])['forEach']((_0x332c21) => {
      const _0x3db009 = _0x48a8bd,
        _0x1d499e = document['createElement'](_0x3db009(0x109));
      (_0x1d499e[_0x3db009(0x164)] = _0x3db009(0x179)),
        (_0x1d499e[_0x3db009(0x110)] = _0x332c21),
        _0xcdddca[_0x3db009(0x162)](_0x1d499e);
    });
  }
  async ['updateChatIcons'](_0x3e1d2a) {
    const _0x316af3 = _0x75ebf4;
    (this[_0x316af3(0x155)][_0x316af3(0x15f)] = document[_0x316af3(0x10f)](
      _0x316af3(0x145),
    )),
      (this['icons']['isNotClicked'] = document['createElement'](
        _0x316af3(0x145),
      )),
      (this[_0x316af3(0x155)][_0x316af3(0x142)] =
        '<svg\x20fill=' +
        (_0x3e1d2a[_0x316af3(0x16c)]
          ? '\x22' + _0x3e1d2a['chat_message_color'] + '\x22'
          : _0x316af3(0x132)) +
        '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>');
    if (window[_0x316af3(0x119)]['origin']['includes'](_0x316af3(0x130))) {
      (this[_0x316af3(0x155)][_0x316af3(0x15f)][_0x316af3(0x135)] =
        _0x316af3(0x172)),
        (this[_0x316af3(0x155)][_0x316af3(0x15f)][_0x316af3(0x173)][
          _0x316af3(0x16e)
        ] = _0x316af3(0x129)),
        (this['icons'][_0x316af3(0x103)][_0x316af3(0x135)] = _0x316af3(0x172)),
        (this[_0x316af3(0x155)][_0x316af3(0x103)][_0x316af3(0x173)][
          _0x316af3(0x16e)
        ] = _0x316af3(0x129));
      return;
    }
    _0x3e1d2a['chat_icon_url']
      ? ((this[_0x316af3(0x155)]['isClicked'][_0x316af3(0x135)] =
          _0x3e1d2a[_0x316af3(0x157)]),
        (this[_0x316af3(0x155)][_0x316af3(0x103)][_0x316af3(0x135)] =
          _0x3e1d2a[_0x316af3(0x157)]))
      : ((this[_0x316af3(0x155)][_0x316af3(0x15f)]['src'] = _0x316af3(0x11b)),
        (this[_0x316af3(0x155)]['isNotClicked'][_0x316af3(0x135)] =
          'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg'));
  }
  [_0x75ebf4(0x114)](_0x2d1602) {
    const _0x586aa1 = _0x75ebf4,
      {
        theme: _0x30dc69,
        chat_bubble_button_color: _0x35c357,
        align_chat_bubble_button: _0x4cbd6b,
        chat_message_color: _0x232006,
        suggest_messages: _0x9ccfca,
      } = _0x2d1602,
      _0x4fc8c3 = _0x586aa1(0x170),
      _0x1c6fbe = _0x586aa1(0x12a),
      _0x55d0b8 = window[_0x586aa1(0x119)][_0x586aa1(0x13a)][_0x586aa1(0x115)](
        _0x586aa1(0x130),
      )
        ? _0x1c6fbe
        : _0x4fc8c3,
      _0x59a14b = {
        chatButtonAlignment: _0x4cbd6b ?? _0x586aa1(0x111),
        chatBoxAlignment: _0x4cbd6b ?? 'right',
        chatButtonDirection:
          _0x4cbd6b === 'left' ? _0x586aa1(0x111) : _0x586aa1(0x138),
        chatButtonColor: _0x35c357 ?? _0x586aa1(0x16b),
        chatBoxBackgroundColor:
          _0x30dc69 === 'dark' ? _0x586aa1(0x131) : _0x586aa1(0x16b),
        chatInputBorderColor:
          _0x30dc69 === _0x586aa1(0x121) ? _0x586aa1(0x12c) : _0x586aa1(0x124),
        chatBoxHeaderBorderColor:
          _0x30dc69 === _0x586aa1(0x121) ? _0x586aa1(0x12c) : _0x586aa1(0x124),
        chatInputColor:
          _0x30dc69 === _0x586aa1(0x121) ? _0x586aa1(0x16b) : _0x586aa1(0x12e),
        chatBoxDisplayNameColor:
          _0x30dc69 === 'dark' ? _0x586aa1(0x16b) : _0x586aa1(0x175),
        messageItemOperatorBackgroundColor: _0x232006 ?? _0x586aa1(0x159),
        suggestedMessagesHeight: _0x9ccfca?.[_0x586aa1(0x141)]
          ? '60px'
          : _0x586aa1(0x134),
      },
      _0x30a47e = document[_0x586aa1(0x10f)](_0x586aa1(0x173));
    (_0x30a47e[_0x586aa1(0x110)] = _0x55d0b8['replace'](
      /{{([^}]+)}}/g,
      (_0x7dc76b, _0x15b154) => _0x59a14b[_0x15b154],
    )),
      document[_0x586aa1(0x11d)][_0x586aa1(0x154)](_0x30a47e);
  }
  [_0x75ebf4(0x174)](_0x50a6ed) {
    return new Promise((_0x46e856) => setTimeout(_0x46e856, _0x50a6ed));
  }
  async [_0x75ebf4(0x122)](_0x135631) {
    const _0x76e17f = _0x75ebf4;
    let _0xd7094f = _0x135631['querySelector'](_0x76e17f(0x127)),
      _0x5ebabf = _0xd7094f['value'];
    if (!!this[_0x76e17f(0x183)]) return;
    _0xd7094f[_0x76e17f(0x12b)] = '';
    if (_0x5ebabf === '') return;
    (this['loading'] = !![]),
      this[_0x76e17f(0x106)]['push']([
        { sender_type: 'user', content: _0x5ebabf },
        { sender_type: _0x76e17f(0x116), content: '' },
      ]),
      this[_0x76e17f(0x147)]();
    let _0x37f011 = new Headers();
    _0x37f011[_0x76e17f(0x154)](_0x76e17f(0x139), _0x76e17f(0x14c));
    const _0x38a95c = {
      method: _0x76e17f(0x12d),
      headers: _0x37f011,
      body: JSON[_0x76e17f(0x13c)]({
        message: _0x5ebabf,
        session_id: this[_0x76e17f(0x186)],
        ...window[_0x76e17f(0x17a)],
      }),
    };
    try {
      const _0x31276f = await fetch(this[_0x76e17f(0x10d)], _0x38a95c);
      if (!_0x31276f['ok'])
        throw new Error(
          'Request\x20failed\x20with\x20status:\x20' +
            _0x31276f[_0x76e17f(0x126)],
        );
      const _0x3e5e44 = await _0x31276f[_0x76e17f(0x167)],
        _0x421ac2 = _0x3e5e44[_0x76e17f(0x12f)]();
      for await (const _0x461a6 of this['asyncGenerator'](_0x421ac2)) {
      }
    } catch (_0x4960f6) {
      (this[_0x76e17f(0x183)] = ![]),
        console[_0x76e17f(0x107)](_0x76e17f(0x14a), _0x4960f6),
        (_0xd7094f[_0x76e17f(0x12b)] = '');
    }
  }
  async *['asyncGenerator'](_0x454984) {
    const _0x35381b = _0x75ebf4,
      _0x42214d = new TextDecoder();
    while (!![]) {
      const { done: _0x3196fd, value: _0x43e54d } =
        await _0x454984[_0x35381b(0x149)]();
      if (_0x3196fd) {
        this[_0x35381b(0x183)] = ![];
        return;
      }
      const _0x4423d4 = _0x42214d[_0x35381b(0x161)](_0x43e54d);
      await this[_0x35381b(0x174)](0x32),
        (this[_0x35381b(0x106)]['slice'](-0x1)[0x0][0x1][_0x35381b(0x182)] +=
          _0x4423d4),
        await this[_0x35381b(0x147)]();
    }
  }
  async [_0x75ebf4(0x147)]() {
    const _0x221223 = _0x75ebf4;
    let _0x8c60cc = document[_0x221223(0x151)](_0x221223(0x17b)),
      _0x36c38c = '';
    this[_0x221223(0x106)]['forEach']((_0x5d69b8, _0x3f1a91) => {
      const _0x9a4184 = _0x221223;
      !(
        _0x5d69b8[0x0]['sender_type'] == _0x9a4184(0x17f) &&
        !_0x5d69b8[0x0][_0x9a4184(0x182)]
      ) &&
        (_0x36c38c +=
          _0x9a4184(0x13e) +
          _0x5d69b8[0x0][_0x9a4184(0x182)] +
          _0x9a4184(0x128));
      if (
        _0x5d69b8[0x1][_0x9a4184(0x166)] == _0x9a4184(0x116) &&
        _0x5d69b8[0x1][_0x9a4184(0x182)]
      )
        _0x36c38c +=
          _0x9a4184(0x15a) + _0x5d69b8[0x1][_0x9a4184(0x182)] + '</div>';
      else _0x36c38c += _0x9a4184(0x178);
    }),
      (_0x8c60cc[_0x221223(0x13d)] = '<div>' + _0x36c38c + _0x221223(0x128));
  }
  ['closeChatBox']() {
    const _0x2401a5 = _0x75ebf4,
      { chatbox: _0x4cabe4 } = this[_0x2401a5(0x15e)];
    _0x4cabe4[_0x2401a5(0x173)][_0x2401a5(0x144)] = _0x2401a5(0x180);
  }
  ['refreshHistory']() {
    const _0x4d9d9c = _0x75ebf4;
    (this[_0x4d9d9c(0x106)] = []),
      (this[_0x4d9d9c(0x186)] = this[_0x4d9d9c(0x16a)]()),
      this['updateChatBox']();
  }
  ['toggleState'](_0x1fbafa) {
    const _0x2e166b = _0x75ebf4;
    (this[_0x2e166b(0x177)] = !this['state']),
      this[_0x2e166b(0x10b)](_0x1fbafa, this['args'][_0x2e166b(0x133)]);
  }
  ['showOrHideChatBox'](_0x13e06f, _0x5bbbe0) {
    const _0x5237f5 = _0x75ebf4;
    _0x13e06f[_0x5237f5(0x173)][_0x5237f5(0x144)] =
      _0x13e06f[_0x5237f5(0x173)][_0x5237f5(0x144)] === 'none'
        ? ''
        : _0x5237f5(0x180);
    if (this[_0x5237f5(0x177)])
      _0x13e06f[_0x5237f5(0x14f)][_0x5237f5(0x105)]('chatbox--active'),
        this[_0x5237f5(0x17e)](!![], _0x5bbbe0);
    else !this[_0x5237f5(0x177)] && this['toggleIcon'](![], _0x5bbbe0);
  }
  ['toggleIcon'](_0x54fec9, _0x1ee24a) {
    const _0x261741 = _0x75ebf4,
      { isClicked: _0x3d7e6d, isNotClicked: _0x5c5d62 } = this['icons'],
      _0x2ab86f = document['querySelector']('.close__button');
    _0x2ab86f[_0x261741(0x102)](_0x261741(0x11e), () =>
      this[_0x261741(0x17c)](),
    );
    const _0x33e6f1 = document['querySelector'](_0x261741(0x125));
    _0x33e6f1[_0x261741(0x102)](_0x261741(0x11e), () =>
      this[_0x261741(0x112)](),
    );
    const _0x13e0e9 = _0x1ee24a[_0x261741(0x16f)],
      _0x526ff8 = _0x13e0e9[_0x261741(0x16f)];
    _0x13e0e9[_0x261741(0x163)](_0x54fec9 ? _0x3d7e6d : _0x5c5d62, _0x526ff8);
  }
}
(document[_0x75ebf4(0x167)] = document[_0x75ebf4(0x10f)](_0x75ebf4(0x167))),
  (document[_0x75ebf4(0x11d)][_0x75ebf4(0x13d)] += _0x75ebf4(0x150));
function _0x2d89() {
  const _0x8106db = [
    'onSendButton',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    '#0000004a',
    '.refresh__button',
    'status',
    'input',
    '</div>',
    '80px',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{white-space:pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{white-space:pre-wrap;border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:\x2012px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#4AC1FF;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'value',
    '#cdceed',
    'POST',
    '#inherit',
    'getReader',
    'chatfly',
    '#111827',
    '#000000',
    'openButton',
    '0px',
    'src',
    'now',
    '.chatbox__support',
    'left',
    'Content-Type',
    'origin',
    '1787755rZFAcN',
    'stringify',
    'innerHTML',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    'json',
    '.chatbot__suggest--item',
    'length',
    'iconSend',
    'floor',
    'display',
    'img',
    'showMessageText',
    'updateChatBox',
    'updateSuggestedMessages',
    'read',
    'Error:',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'application/json',
    '114567xlDPAH',
    '4632558FpsAbk',
    'classList',
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__button{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20',
    'querySelector',
    '.chatbot__suggest',
    'toggleState',
    'append',
    'icons',
    'forEach',
    'chat_icon_url',
    '6TlSifW',
    '#3399FF',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    'syncChatWidgetStyling',
    'toString',
    'args',
    'isClicked',
    'icon_header',
    'decode',
    'appendChild',
    'replaceChild',
    'className',
    '.chatbot__header',
    'sender_type',
    'body',
    'undefined',
    '.chatbox__button',
    'generateUUID',
    '#fff',
    'chat_message_color',
    'display_name',
    'width',
    'firstElementChild',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{white-space:\x20pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:12px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    '.chatbot',
    'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png',
    'style',
    'sleep',
    'inherit',
    '?bot_id=',
    'state',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    'chatbot__suggest--item',
    'chatbotConfig',
    '.chatbox__messages',
    'closeChatBox',
    '1491470LmCeMN',
    'toggleIcon',
    'user',
    'none',
    '5159920BOcZTi',
    'content',
    'loading',
    'block',
    'updateHeader',
    'session_id',
    '10NjOfJO',
    'keyup',
    'updateInitMessage',
    'GET',
    'addEventListener',
    'isNotClicked',
    'getBotWidgetSettingUrl',
    'add',
    'history',
    'error',
    'baseUrl',
    'div',
    '1878cbCqBE',
    'showOrHideChatBox',
    '3364JTBMsC',
    'getStreamingResponseUrl',
    'bot_avatar_url',
    'createElement',
    'textContent',
    'right',
    'refreshHistory',
    'Enter',
    'setStyle',
    'includes',
    'assistant',
    '24920808nKiyAQ',
    'bot_id',
    'location',
    'getTime',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'target',
    'head',
    'click',
    'random',
    '27bvuelr',
    'dark',
  ];
  _0x2d89 = function () {
    return _0x8106db;
  };
  return _0x2d89();
}
function _0xb4df(_0x504b6b, _0x293fa8) {
  const _0x2d891f = _0x2d89();
  return (
    (_0xb4df = function (_0xb4df29, _0x8518d8) {
      _0xb4df29 = _0xb4df29 - 0x100;
      let _0x12dc52 = _0x2d891f[_0xb4df29];
      return _0x12dc52;
    }),
    _0xb4df(_0x504b6b, _0x293fa8)
  );
}
const elemDiv = _0x75ebf4(0x14b);
document[_0x75ebf4(0x167)]['innerHTML'] += elemDiv;
const chatbox = new InteractiveChatbox();
chatbox[_0x75ebf4(0x144)]();
