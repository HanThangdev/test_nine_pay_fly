const _0x7af586 = _0x2a73;
(function (_0x966310, _0x322f83) {
  const _0x1c17f3 = _0x2a73,
    _0x3e2da0 = _0x966310();
  while (!![]) {
    try {
      const _0x146e0c =
        parseInt(_0x1c17f3(0x1a0)) / 0x1 +
        parseInt(_0x1c17f3(0x1c6)) / 0x2 +
        (parseInt(_0x1c17f3(0x1ca)) / 0x3) *
          (-parseInt(_0x1c17f3(0x1fa)) / 0x4) +
        -parseInt(_0x1c17f3(0x186)) / 0x5 +
        -parseInt(_0x1c17f3(0x187)) / 0x6 +
        (parseInt(_0x1c17f3(0x1d6)) / 0x7) *
          (-parseInt(_0x1c17f3(0x1d0)) / 0x8) +
        parseInt(_0x1c17f3(0x1d7)) / 0x9;
      if (_0x146e0c === _0x322f83) break;
      else _0x3e2da0['push'](_0x3e2da0['shift']());
    } catch (_0x3399c4) {
      _0x3e2da0['push'](_0x3e2da0['shift']());
    }
  }
})(_0x3d36, 0xd3394);
class InteractiveChatbox {
  constructor() {
    const _0x4d24e2 = _0x2a73;
    (this[_0x4d24e2(0x1be)] = 'https://backend.dev.chatfly.co/api'),
      (this[_0x4d24e2(0x1f5)] =
        this[_0x4d24e2(0x1be)] + '/chat/get-streaming-response'),
      (this[_0x4d24e2(0x1a7)] =
        this[_0x4d24e2(0x1be)] + '/bot/bot-widget-setting'),
      (this[_0x4d24e2(0x1b2)] = {
        openButton: document[_0x4d24e2(0x1c2)](_0x4d24e2(0x1a5)),
        chatbox: document[_0x4d24e2(0x1c2)](_0x4d24e2(0x1aa)),
        sendButton: document[_0x4d24e2(0x1c2)](_0x4d24e2(0x1cf)),
        header: document['querySelector'](_0x4d24e2(0x1d8)),
        message_suggest: document[_0x4d24e2(0x1c2)]('.chatbot__suggest'),
      }),
      (this['icons'] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x4d24e2(0x19f),
        iconRefresh: _0x4d24e2(0x1ab),
      }),
      (this[_0x4d24e2(0x19a)] = ![]),
      (this['history'] = []),
      (this['session_id'] = this[_0x4d24e2(0x1d2)]());
  }
  [_0x7af586(0x1d2)]() {
    const _0x404304 = _0x7af586;
    var _0x5db584 = new Date()[_0x404304(0x1f2)](),
      _0x2a4675 =
        (typeof performance !== 'undefined' &&
          performance[_0x404304(0x201)] &&
          performance[_0x404304(0x201)]() * 0x3e8) ||
        0x0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[_0x404304(0x1af)](
      /[xy]/g,
      function (_0x12594b) {
        const _0x4814bc = _0x404304;
        var _0x19bfe4 = Math[_0x4814bc(0x1f8)]() * 0x10;
        return (
          _0x5db584 > 0x0
            ? ((_0x19bfe4 = (_0x5db584 + _0x19bfe4) % 0x10 | 0x0),
              (_0x5db584 = Math[_0x4814bc(0x1c9)](_0x5db584 / 0x10)))
            : ((_0x19bfe4 = (_0x2a4675 + _0x19bfe4) % 0x10 | 0x0),
              (_0x2a4675 = Math['floor'](_0x2a4675 / 0x10))),
          (_0x12594b === 'x' ? _0x19bfe4 : (_0x19bfe4 & 0x3) | 0x8)['toString'](
            0x10,
          )
        );
      },
    );
  }
  async [_0x7af586(0x188)]() {
    const _0x1f0522 = _0x7af586,
      {
        openButton: _0x1a4475,
        chatbox: _0x11f03d,
        sendButton: _0x5ade78,
      } = this[_0x1f0522(0x1b2)];
    await this['syncChatWidgetStyling'](_0x11f03d);
    const { iconSend: _0x20577b } = this[_0x1f0522(0x1b6)];
    this[_0x1f0522(0x1ff)](![], _0x1a4475),
      this[_0x1f0522(0x1b4)](_0x11f03d),
      _0x1a4475[_0x1f0522(0x1de)]('click', () =>
        this[_0x1f0522(0x1b4)](_0x11f03d),
      ),
      _0x5ade78[_0x1f0522(0x1de)]('click', () =>
        this[_0x1f0522(0x1bf)](_0x11f03d),
      ),
      (_0x5ade78['innerHTML'] = _0x1f0522(0x1d4) + _0x20577b + '</div>');
    const _0x17a2ec = _0x11f03d['querySelector'](_0x1f0522(0x1fc));
    _0x17a2ec[_0x1f0522(0x1de)](_0x1f0522(0x1b1), ({ key: _0x2b44e5 }) => {
      const _0x4d1825 = _0x1f0522;
      _0x2b44e5 === _0x4d1825(0x1bd) && this[_0x4d1825(0x1bf)](_0x11f03d);
    });
  }
  async [_0x7af586(0x1f6)](_0x55a9a7) {
    const _0x488b94 = _0x7af586;
    let _0x21d3b1 = new Headers();
    _0x21d3b1[_0x488b94(0x1ee)]('Content-Type', _0x488b94(0x203)),
      _0x21d3b1[_0x488b94(0x1ee)](
        _0x488b94(0x1dc),
        _0x488b94(0x1ef) + window[_0x488b94(0x1f9)]['token'],
      );
    const _0x3eb72a = { method: _0x488b94(0x1c4), headers: _0x21d3b1 };
    try {
      const _0x5f0364 = await fetch(
        this[_0x488b94(0x1a7)] +
          '?bot_id=' +
          window[_0x488b94(0x1f9)][_0x488b94(0x1c8)],
        _0x3eb72a,
      );
      if (!_0x5f0364['ok'])
        throw new Error(_0x488b94(0x197) + _0x5f0364[_0x488b94(0x1df)]);
      const _0x3c7b2f = await _0x5f0364[_0x488b94(0x1a3)]();
      this[_0x488b94(0x1b3)](_0x3c7b2f),
        this['updateInitMessage'](_0x3c7b2f),
        await this[_0x488b94(0x1f1)](_0x3c7b2f),
        await this[_0x488b94(0x1e9)](_0x3c7b2f);
      const _0x519cd7 = document[_0x488b94(0x1db)](_0x488b94(0x1d5));
      _0x519cd7['forEach']((_0x55db8b) => {
        const _0x44c2b3 = _0x488b94;
        _0x55db8b?.['addEventListener']('click', (_0x3f1bb3) =>
          this[_0x44c2b3(0x1bc)](_0x3f1bb3, _0x55a9a7),
        );
      }),
        this[_0x488b94(0x1a2)](_0x3c7b2f);
    } catch (_0xbfd893) {
      console[_0x488b94(0x18b)](_0x488b94(0x1a1), _0xbfd893);
    }
  }
  [_0x7af586(0x1f0)](_0x56e1f) {
    const _0x3e4bdc = _0x7af586,
      { initial_message: _0x56cfa2 } = _0x56e1f;
    _0x56cfa2 &&
      (this[_0x3e4bdc(0x1da)][_0x3e4bdc(0x1c3)]([
        { sender_type: 'user', content: '' },
        { sender_type: _0x3e4bdc(0x18d), content: _0x56cfa2 },
      ]),
      this[_0x3e4bdc(0x1ec)]());
  }
  [_0x7af586(0x1a2)](_0x114585) {
    const _0x3d8dbf = _0x7af586,
      { header: _0x1d12b3 } = this[_0x3d8dbf(0x1b2)],
      { iconRefresh: _0x52ef8b, iconClose: _0xb77428 } = this['icons'],
      _0x1be91b = document[_0x3d8dbf(0x1a9)](_0x3d8dbf(0x1b7));
    _0x1be91b[_0x3d8dbf(0x1b5)] = _0x3d8dbf(0x1ad);
    if (_0x114585[_0x3d8dbf(0x1ba)]) {
      const _0x3a54c8 = document[_0x3d8dbf(0x1a9)](_0x3d8dbf(0x1f4));
      (_0x3a54c8['src'] = _0x114585[_0x3d8dbf(0x1ba)]),
        (_0x3a54c8[_0x3d8dbf(0x1b5)] = _0x3d8dbf(0x1e7)),
        _0x1be91b[_0x3d8dbf(0x204)](_0x3a54c8);
    }
    _0x114585[_0x3d8dbf(0x18f)] &&
      (_0x1be91b[_0x3d8dbf(0x206)] += _0x114585['display_name']),
      _0x1d12b3[_0x3d8dbf(0x204)](_0x1be91b),
      (_0x1d12b3[_0x3d8dbf(0x206)] +=
        _0x3d8dbf(0x202) + _0x52ef8b + _0xb77428 + _0x3d8dbf(0x1cb));
  }
  [_0x7af586(0x1bc)](_0x4403ab, _0x586070) {
    const _0x499fd4 = _0x7af586,
      _0x4d5209 = _0x4403ab[_0x499fd4(0x1c1)]['textContent'];
    let _0xd57586 = _0x586070[_0x499fd4(0x1c2)](_0x499fd4(0x1fc));
    (_0xd57586[_0x499fd4(0x19e)] = _0x4d5209),
      this[_0x499fd4(0x1bf)](_0x586070);
  }
  ['updateSuggestedMessages'](_0x2d1cb2) {
    const _0x26f265 = _0x7af586,
      { suggest_messages: _0x22167f } = _0x2d1cb2,
      { message_suggest: _0x317d2b } = this[_0x26f265(0x1b2)];
    (_0x22167f ?? [])[_0x26f265(0x1b9)]((_0x3b6ab7) => {
      const _0x5038ba = _0x26f265,
        _0x42e878 = document['createElement'](_0x5038ba(0x1b7));
      (_0x42e878[_0x5038ba(0x1b5)] = _0x5038ba(0x189)),
        (_0x42e878['textContent'] = _0x3b6ab7),
        _0x317d2b[_0x5038ba(0x204)](_0x42e878);
    });
  }
  async [_0x7af586(0x1f1)](_0x5b0d05) {
    const _0x8da4f6 = _0x7af586;
    (this[_0x8da4f6(0x1b6)][_0x8da4f6(0x1cc)] = document['createElement'](
      _0x8da4f6(0x1f4),
    )),
      (this[_0x8da4f6(0x1b6)][_0x8da4f6(0x1ea)] =
        document[_0x8da4f6(0x1a9)]('img')),
      (this['icons'][_0x8da4f6(0x1e2)] =
        _0x8da4f6(0x193) +
        (_0x5b0d05[_0x8da4f6(0x208)]
          ? '\x22' + _0x5b0d05['chat_message_color'] + '\x22'
          : _0x8da4f6(0x1a8)) +
        _0x8da4f6(0x1e6)),
      _0x5b0d05[_0x8da4f6(0x18a)]
        ? ((this[_0x8da4f6(0x1b6)][_0x8da4f6(0x1cc)]['src'] =
            _0x5b0d05[_0x8da4f6(0x18a)]),
          (this[_0x8da4f6(0x1b6)][_0x8da4f6(0x1ea)]['src'] =
            _0x5b0d05[_0x8da4f6(0x18a)]))
        : ((this['icons']['isClicked'][_0x8da4f6(0x1c0)] = _0x8da4f6(0x207)),
          (this[_0x8da4f6(0x1b6)][_0x8da4f6(0x1ea)][_0x8da4f6(0x1c0)] =
            _0x8da4f6(0x207)));
  }
  [_0x7af586(0x1b3)](_0x583a41) {
    const _0x2342ff = _0x7af586,
      {
        theme: _0xe9453,
        chat_bubble_button_color: _0x1236ac,
        align_chat_bubble_button: _0x315874,
        chat_message_color: _0x3d5d43,
        suggest_messages: _0x484a72,
      } = _0x583a41,
      _0x3f9617 = _0x2342ff(0x1d3),
      _0x23da0b = {
        chatButtonAlignment: _0x315874 ?? 'right',
        chatBoxAlignment: _0x315874 ?? 'right',
        chatButtonDirection:
          _0x315874 === _0x2342ff(0x1d1) ? 'right' : _0x2342ff(0x1d1),
        chatButtonColor: _0x1236ac ?? _0x2342ff(0x19b),
        chatBoxBackgroundColor:
          _0xe9453 === _0x2342ff(0x1c7) ? '#111827' : '#fff',
        chatInputBorderColor:
          _0xe9453 === _0x2342ff(0x1c7) ? _0x2342ff(0x1e8) : '#0000004a',
        chatBoxHeaderBorderColor:
          _0xe9453 === _0x2342ff(0x1c7) ? _0x2342ff(0x1e8) : _0x2342ff(0x1ed),
        chatInputColor: _0xe9453 === 'dark' ? '#fff' : _0x2342ff(0x198),
        chatBoxDisplayNameColor:
          _0xe9453 === _0x2342ff(0x1c7) ? '#fff' : _0x2342ff(0x191),
        messageItemOperatorBackgroundColor: _0x3d5d43 ?? _0x2342ff(0x194),
        suggestedMessagesHeight: _0x484a72?.[_0x2342ff(0x1dd)]
          ? _0x2342ff(0x1ac)
          : '0px',
      },
      _0x5808b6 = document['createElement'](_0x2342ff(0x1e0));
    (_0x5808b6['textContent'] = _0x3f9617[_0x2342ff(0x1af)](
      /{{([^}]+)}}/g,
      (_0x303b4e, _0x1468bb) => _0x23da0b[_0x1468bb],
    )),
      document[_0x2342ff(0x19d)][_0x2342ff(0x1ee)](_0x5808b6);
  }
  [_0x7af586(0x1b0)](_0x49f078) {
    return new Promise((_0x298898) => setTimeout(_0x298898, _0x49f078));
  }
  async [_0x7af586(0x1bf)](_0x592d38) {
    const _0x1e1f44 = _0x7af586;
    let _0x44d463 = _0x592d38[_0x1e1f44(0x1c2)](_0x1e1f44(0x1fc)),
      _0x3e1801 = _0x44d463[_0x1e1f44(0x19e)];
    _0x44d463[_0x1e1f44(0x19e)] = '';
    if (_0x3e1801 === '') return;
    this[_0x1e1f44(0x1da)][_0x1e1f44(0x1c3)]([
      { sender_type: _0x1e1f44(0x1fd), content: _0x3e1801 },
      { sender_type: _0x1e1f44(0x18d), content: '' },
    ]),
      this[_0x1e1f44(0x1ec)]();
    let _0xd80bdc = new Headers();
    _0xd80bdc[_0x1e1f44(0x1ee)](_0x1e1f44(0x1e1), _0x1e1f44(0x203)),
      _0xd80bdc[_0x1e1f44(0x1ee)](
        _0x1e1f44(0x1dc),
        _0x1e1f44(0x1ef) + window[_0x1e1f44(0x1f9)][_0x1e1f44(0x1cd)],
      );
    const _0x2cbbaf = {
      method: _0x1e1f44(0x1a4),
      headers: _0xd80bdc,
      body: JSON[_0x1e1f44(0x199)]({
        message: _0x3e1801,
        session_id: this[_0x1e1f44(0x205)],
        ...window[_0x1e1f44(0x1f9)],
      }),
    };
    try {
      const _0x5cf95d = await fetch(this[_0x1e1f44(0x1f5)], _0x2cbbaf);
      if (!_0x5cf95d['ok'])
        throw new Error(_0x1e1f44(0x197) + _0x5cf95d[_0x1e1f44(0x1df)]);
      const _0x3a4a1a = await _0x5cf95d[_0x1e1f44(0x1e3)],
        _0xddb4ba = _0x3a4a1a[_0x1e1f44(0x1c5)]();
      for await (const _0x43881d of this[_0x1e1f44(0x192)](_0xddb4ba)) {
      }
    } catch (_0x8707ab) {
      console[_0x1e1f44(0x18b)](_0x1e1f44(0x1a1), _0x8707ab),
        (_0x44d463[_0x1e1f44(0x19e)] = '');
    }
  }
  async *[_0x7af586(0x192)](_0x353f89) {
    const _0x29a441 = _0x7af586,
      _0x5524c4 = new TextDecoder();
    while (!![]) {
      const { done: _0x49ba4f, value: _0x243093 } =
        await _0x353f89[_0x29a441(0x1bb)]();
      if (_0x49ba4f) return;
      const _0x40ee03 = _0x5524c4[_0x29a441(0x1e4)](_0x243093);
      await this[_0x29a441(0x1b0)](0x32),
        (this[_0x29a441(0x1da)]['slice'](-0x1)[0x0][0x1]['content'] +=
          _0x40ee03),
        await this[_0x29a441(0x1ec)]();
    }
  }
  async ['updateChatBox']() {
    const _0x3569f9 = _0x7af586;
    let _0x8198f2 = document['querySelector'](_0x3569f9(0x1ae)),
      _0x2a4f70 = '';
    this[_0x3569f9(0x1da)][_0x3569f9(0x1b9)]((_0x2583c4, _0x539ce9) => {
      const _0x36cf78 = _0x3569f9;
      !(
        _0x2583c4[0x0]['sender_type'] == _0x36cf78(0x1fd) &&
        !_0x2583c4[0x0][_0x36cf78(0x1f7)]
      ) &&
        (_0x2a4f70 +=
          _0x36cf78(0x195) +
          _0x2583c4[0x0][_0x36cf78(0x1f7)] +
          _0x36cf78(0x1cb));
      if (
        _0x2583c4[0x1][_0x36cf78(0x1e5)] == _0x36cf78(0x18d) &&
        _0x2583c4[0x1]['content']
      )
        _0x2a4f70 +=
          _0x36cf78(0x18c) +
          _0x2583c4[0x1][_0x36cf78(0x1f7)] +
          _0x36cf78(0x1cb);
      else _0x2a4f70 += _0x36cf78(0x1fb);
    }),
      (_0x8198f2[_0x3569f9(0x206)] =
        _0x3569f9(0x1d4) + _0x2a4f70 + _0x3569f9(0x1cb));
  }
  [_0x7af586(0x196)]() {
    const _0x2f158e = _0x7af586,
      { chatbox: _0xf84b3b } = this[_0x2f158e(0x1b2)];
    _0xf84b3b[_0x2f158e(0x1e0)][_0x2f158e(0x188)] = 'none';
  }
  ['refreshHistory']() {
    const _0x706299 = _0x7af586;
    (this[_0x706299(0x1da)] = []),
      (this[_0x706299(0x205)] = this[_0x706299(0x1d2)]()),
      this[_0x706299(0x1ec)]();
  }
  [_0x7af586(0x1b4)](_0x1861ca) {
    const _0x3363ae = _0x7af586;
    (this[_0x3363ae(0x19a)] = !this[_0x3363ae(0x19a)]),
      this[_0x3363ae(0x1f3)](
        _0x1861ca,
        this[_0x3363ae(0x1b2)][_0x3363ae(0x1fe)],
      );
  }
  [_0x7af586(0x1f3)](_0x583001, _0x304b76) {
    const _0x47ee65 = _0x7af586;
    _0x583001[_0x47ee65(0x1e0)][_0x47ee65(0x188)] =
      _0x583001[_0x47ee65(0x1e0)]['display'] === 'none' ? '' : _0x47ee65(0x1a6);
    if (this['state'])
      _0x583001[_0x47ee65(0x1b8)][_0x47ee65(0x18e)](_0x47ee65(0x190)),
        this[_0x47ee65(0x1ff)](!![], _0x304b76);
    else !this[_0x47ee65(0x19a)] && this[_0x47ee65(0x1ff)](![], _0x304b76);
  }
  [_0x7af586(0x1ff)](_0x29e9ea, _0x5d0074) {
    const _0x14c701 = _0x7af586,
      { isClicked: _0x2ada77, isNotClicked: _0x5cd49a } =
        this[_0x14c701(0x1b6)],
      _0x2db0b2 = document[_0x14c701(0x1c2)]('.close__button');
    _0x2db0b2[_0x14c701(0x1de)]('click', () => this['closeChatBox']());
    const _0x1986cb = document[_0x14c701(0x1c2)](_0x14c701(0x1d9));
    _0x1986cb[_0x14c701(0x1de)]('click', () => this[_0x14c701(0x1eb)]());
    const _0x339872 = _0x5d0074[_0x14c701(0x200)],
      _0x4eabd3 = _0x339872[_0x14c701(0x200)];
    _0x339872[_0x14c701(0x1ce)](_0x29e9ea ? _0x2ada77 : _0x5cd49a, _0x4eabd3);
  }
}
function _0x3d36() {
  const _0x50300c = [
    'json',
    'POST',
    '.chatbox__button',
    'none',
    'getBotWidgetSettingUrl',
    '#000000',
    'createElement',
    '.chatbox__support',
    '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
    '60px',
    'icon_header',
    '.chatbox__messages',
    'replace',
    'sleep',
    'keyup',
    'args',
    'setStyle',
    'toggleState',
    'className',
    'icons',
    'div',
    'classList',
    'forEach',
    'bot_avatar_url',
    'read',
    'showMessageText',
    'Enter',
    'baseUrl',
    'onSendButton',
    'src',
    'target',
    'querySelector',
    'push',
    'GET',
    'getReader',
    '1640478QDbutT',
    'dark',
    'bot_id',
    'floor',
    '27tTidNU',
    '</div>',
    'isClicked',
    'token',
    'replaceChild',
    '.chatbox__send--footer',
    '464vCsabG',
    'left',
    'generateUUID',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:500px;width:350px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{height:{{suggestedMessagesHeight}};white-space:\x20nowrap;display:flex;overflow-x:auto;column-gap:10px;padding:10px\x2010px\x200}.chatbot__suggest--item{height:100%;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    '<div>',
    '.chatbot__suggest--item',
    '200137mJKjqN',
    '10463985itfAKS',
    '.chatbot__header',
    '.refresh__button',
    'history',
    'querySelectorAll',
    'Authorization',
    'length',
    'addEventListener',
    'status',
    'style',
    'Content-Type',
    'iconSend',
    'body',
    'decode',
    'sender_type',
    '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    'bot_avatar',
    '#cdceed',
    'updateSuggestedMessages',
    'isNotClicked',
    'refreshHistory',
    'updateChatBox',
    '#0000004a',
    'append',
    'Bearer\x20',
    'updateInitMessage',
    'updateChatIcons',
    'getTime',
    'showOrHideChatBox',
    'img',
    'getStreamingResponseUrl',
    'syncChatWidgetStyling',
    'content',
    'random',
    'chatbotConfig',
    '223916rxIfXo',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    'input',
    'user',
    'openButton',
    'toggleIcon',
    'firstElementChild',
    'now',
    '<div\x20class=\x22icon_header\x22>',
    'application/json',
    'appendChild',
    'session_id',
    'innerHTML',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'chat_message_color',
    '373850cxWFfP',
    '3211746ZRQwTB',
    'display',
    'chatbot__suggest--item',
    'chat_icon_url',
    'error',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'assistant',
    'add',
    'display_name',
    'chatbox--active',
    'inherit',
    'asyncGenerator',
    '<svg\x20fill=',
    '#3399FF',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    'closeChatBox',
    'Request\x20failed\x20with\x20status:\x20',
    '#inherit',
    'stringify',
    'state',
    '#fff',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'head',
    'value',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    '1654418rIUZdi',
    'Error:',
    'updateHeader',
  ];
  _0x3d36 = function () {
    return _0x50300c;
  };
  return _0x3d36();
}
function _0x2a73(_0x4a52ad, _0x2b97fa) {
  const _0x3d36fc = _0x3d36();
  return (
    (_0x2a73 = function (_0x2a730e, _0x487666) {
      _0x2a730e = _0x2a730e - 0x186;
      let _0x23b897 = _0x3d36fc[_0x2a730e];
      return _0x23b897;
    }),
    _0x2a73(_0x4a52ad, _0x2b97fa)
  );
}
(document[_0x7af586(0x1e3)] = document[_0x7af586(0x1a9)](_0x7af586(0x1e3))),
  (document[_0x7af586(0x19d)][_0x7af586(0x206)] +=
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20');
const elemDiv = _0x7af586(0x19c);
document['body'][_0x7af586(0x206)] += elemDiv;
const chatbox = new InteractiveChatbox();
chatbox[_0x7af586(0x188)]();
