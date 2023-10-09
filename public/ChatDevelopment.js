const _0x28d44f = _0xe500;
(function (_0x2f4da4, _0x2a1070) {
  const _0x5b8406 = _0xe500,
    _0x1e6d9c = _0x2f4da4();
  while (!![]) {
    try {
      const _0xbf0f0e =
        (parseInt(_0x5b8406(0x101)) / 0x1) *
          (-parseInt(_0x5b8406(0x184)) / 0x2) +
        (parseInt(_0x5b8406(0x15f)) / 0x3) *
          (-parseInt(_0x5b8406(0xe3)) / 0x4) +
        parseInt(_0x5b8406(0x183)) / 0x5 +
        (-parseInt(_0x5b8406(0x180)) / 0x6) *
          (parseInt(_0x5b8406(0xe0)) / 0x7) +
        -parseInt(_0x5b8406(0xf7)) / 0x8 +
        -parseInt(_0x5b8406(0x161)) / 0x9 +
        (parseInt(_0x5b8406(0x142)) / 0xa) * (parseInt(_0x5b8406(0x187)) / 0xb);
      if (_0xbf0f0e === _0x2a1070) break;
      else _0x1e6d9c['push'](_0x1e6d9c['shift']());
    } catch (_0x53c56a) {
      _0x1e6d9c['push'](_0x1e6d9c['shift']());
    }
  }
})(_0x322f, 0xd8eea);
class InteractiveChatbox {
  constructor() {
    const _0x5d1333 = _0xe500;
    (this[_0x5d1333(0x143)] = _0x5d1333(0xe6)),
      (this[_0x5d1333(0x129)] = this[_0x5d1333(0x143)] + _0x5d1333(0x130)),
      (this[_0x5d1333(0x10c)] = this['baseUrl'] + _0x5d1333(0xda)),
      (this[_0x5d1333(0x13a)] = this[_0x5d1333(0x143)] + _0x5d1333(0x111)),
      (this[_0x5d1333(0x116)] = this[_0x5d1333(0x143)] + _0x5d1333(0xde)),
      (this['args'] = {
        openButton: document[_0x5d1333(0xf1)](_0x5d1333(0xfa)),
        chatbox: document[_0x5d1333(0xf1)](_0x5d1333(0x11b)),
        sendButton: document['querySelector']('.chatbox__send--footer'),
        header: document[_0x5d1333(0xf1)](_0x5d1333(0x139)),
        message_suggest: document['querySelector'](_0x5d1333(0x11e)),
        chatFlyContainer: document[_0x5d1333(0xf1)](_0x5d1333(0x18a)),
        avartar: document[_0x5d1333(0xf1)](_0x5d1333(0x14c)),
        formCollect: document[_0x5d1333(0xf1)]('#collect-form'),
      }),
      (this[_0x5d1333(0x12e)] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x5d1333(0x126),
        iconRefresh:
          '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
      }),
      (this[_0x5d1333(0x103)] = ![]),
      (this[_0x5d1333(0xed)] = []),
      (this[_0x5d1333(0x146)] = this[_0x5d1333(0x136)]()),
      (this[_0x5d1333(0x155)] = ![]),
      (this[_0x5d1333(0x153)] = localStorage['getItem'](_0x5d1333(0x153))),
      (this['chatStyle'] = undefined),
      (this[_0x5d1333(0xfc)] = undefined);
  }
  [_0x28d44f(0x136)]() {
    const _0xf41dcf = _0x28d44f;
    var _0xfa8c2c = new Date()[_0xf41dcf(0x151)](),
      _0x335d5d =
        (typeof performance !== _0xf41dcf(0x16a) &&
          performance[_0xf41dcf(0x150)] &&
          performance[_0xf41dcf(0x150)]() * 0x3e8) ||
        0x0;
    return _0xf41dcf(0x158)[_0xf41dcf(0x182)](/[xy]/g, function (_0x584f57) {
      const _0x19ef8c = _0xf41dcf;
      var _0x4551b5 = Math[_0x19ef8c(0x114)]() * 0x10;
      return (
        _0xfa8c2c > 0x0
          ? ((_0x4551b5 = (_0xfa8c2c + _0x4551b5) % 0x10 | 0x0),
            (_0xfa8c2c = Math['floor'](_0xfa8c2c / 0x10)))
          : ((_0x4551b5 = (_0x335d5d + _0x4551b5) % 0x10 | 0x0),
            (_0x335d5d = Math[_0x19ef8c(0x144)](_0x335d5d / 0x10))),
        (_0x584f57 === 'x' ? _0x4551b5 : (_0x4551b5 & 0x3) | 0x8)[
          _0x19ef8c(0x123)
        ](0x10)
      );
    });
  }
  async [_0x28d44f(0x12c)]() {
    const _0x3a98eb = _0x28d44f,
      {
        openButton: _0x35dcec,
        chatbox: _0x4642b3,
        sendButton: _0x42d7f5,
      } = this[_0x3a98eb(0xea)];
    await this[_0x3a98eb(0xfe)](), await this['syncInfoCollectUser']();
    const { iconSend: _0x23cd74 } = this[_0x3a98eb(0x12e)];
    this[_0x3a98eb(0x160)](![], _0x35dcec), this['toggleState'](_0x4642b3);
    window[_0x3a98eb(0x174)][_0x3a98eb(0xdf)][_0x3a98eb(0xf6)]('chatfly') &&
      this[_0x3a98eb(0x173)](_0x4642b3);
    localStorage[_0x3a98eb(0x16f)]('closeFormCollectUser'),
      _0x35dcec[_0x3a98eb(0x171)](_0x3a98eb(0x186), () =>
        this[_0x3a98eb(0x173)](_0x4642b3),
      ),
      _0x42d7f5[_0x3a98eb(0x171)](_0x3a98eb(0x186), () =>
        this[_0x3a98eb(0x14a)](_0x4642b3),
      ),
      (_0x42d7f5['innerHTML'] = '<div>' + _0x23cd74 + '</div>');
    const _0xb3558f = _0x4642b3['querySelector']('.input_message');
    _0xb3558f[_0x3a98eb(0x171)]('keyup', ({ key: _0x2fa6a5 }) => {
      const _0x3fa612 = _0x3a98eb;
      _0x2fa6a5 === _0x3fa612(0xdd) && this[_0x3fa612(0x14a)](_0x4642b3);
    });
  }
  [_0x28d44f(0x110)]() {
    const _0x1cdd5a = _0x28d44f,
      { openButton: _0x2f6847, chatbox: _0x3cb839 } = this[_0x1cdd5a(0xea)];
    (_0x2f6847[_0x1cdd5a(0x112)][_0x1cdd5a(0x12c)] = _0x1cdd5a(0xeb)),
      (_0x3cb839[_0x1cdd5a(0x112)]['display'] = _0x1cdd5a(0xeb)),
      (_0x3cb839['style']['visibility'] = _0x1cdd5a(0x107)),
      (_0x2f6847[_0x1cdd5a(0x112)][_0x1cdd5a(0x177)] = _0x1cdd5a(0x107));
  }
  async [_0x28d44f(0x185)](_0x52ec37) {
    const _0x3e974d = _0x28d44f;
    let _0xb86991 = new Headers();
    _0xb86991[_0x3e974d(0x140)](_0x3e974d(0x121), _0x3e974d(0x156));
    const _0x454eab = {
      method: _0x3e974d(0x164),
      headers: _0xb86991,
      body: JSON[_0x3e974d(0x11f)](_0x52ec37),
    };
    try {
      const _0x1ac4db = await fetch(
        this[_0x3e974d(0x116)] +
          '?bot_id=' +
          window[_0x3e974d(0x166)][_0x3e974d(0xd6)],
        _0x454eab,
      );
      if (!_0x1ac4db['ok'])
        throw new Error(
          'Request\x20failed\x20swith\x20status:\x20' +
            _0x1ac4db[_0x3e974d(0x15d)],
        );
      localStorage['setItem']('isSubmitCollectForm', !![]);
    } catch (_0x7c9946) {
      console[_0x3e974d(0x137)](_0x3e974d(0x17a), _0x7c9946);
    }
  }
  async [_0x28d44f(0xe7)]() {
    const _0x4f61f7 = _0x28d44f;
    let _0x489ae7 = new Headers();
    _0x489ae7[_0x4f61f7(0x140)](_0x4f61f7(0x121), _0x4f61f7(0x156));
    const _0x5553ff = { method: _0x4f61f7(0x149), headers: _0x489ae7 };
    try {
      const _0x56cf6c = await fetch(
        this['getInfoCollectUser'] +
          _0x4f61f7(0x162) +
          window[_0x4f61f7(0x166)]['bot_id'],
        _0x5553ff,
      );
      if (!_0x56cf6c['ok']) {
        (openButton[_0x4f61f7(0x112)][_0x4f61f7(0x12c)] = _0x4f61f7(0xf3)),
          (chatbox[_0x4f61f7(0x112)][_0x4f61f7(0x12c)] = 'none');
        throw new Error(_0x4f61f7(0x13e) + _0x56cf6c[_0x4f61f7(0x15d)]);
      }
      const _0x17ee98 = document[_0x4f61f7(0x15e)](_0x4f61f7(0x157)),
        _0x165ed5 = document[_0x4f61f7(0x167)](_0x4f61f7(0x108));
      _0x165ed5[_0x4f61f7(0x141)] = _0x4f61f7(0x11c);
      const { data: _0x36b3b7 } = await _0x56cf6c[_0x4f61f7(0x10d)](),
        { numberShowing: _0x2fdcb2, ..._0x5a1917 } = _0x36b3b7;
      this[_0x4f61f7(0xfc)] = _0x36b3b7;
      const _0x4d5391 = document[_0x4f61f7(0x167)](_0x4f61f7(0x108));
      _0x4d5391[_0x4f61f7(0x189)][_0x4f61f7(0x175)](_0x4f61f7(0x14b)),
        (_0x4d5391[_0x4f61f7(0x11a)] = _0x4f61f7(0x154)),
        _0x17ee98[_0x4f61f7(0x102)](_0x4d5391);
      for (const _0x3fc0e3 in _0x5a1917) {
        if (_0x36b3b7[_0x3fc0e3] == !![]) {
          const _0x57d1af = document['createElement'](_0x4f61f7(0xe5));
          _0x57d1af[_0x4f61f7(0x11a)] = _0x3fc0e3;
          const _0x20e6ec = document['createElement'](_0x4f61f7(0x138));
          (_0x20e6ec[_0x4f61f7(0x10e)] =
            _0x3fc0e3 == _0x4f61f7(0xf4) ? _0x4f61f7(0xf4) : _0x4f61f7(0x128)),
            (_0x20e6ec[_0x4f61f7(0x16d)] = _0x3fc0e3),
            _0x20e6ec[_0x4f61f7(0x189)][_0x4f61f7(0x175)](_0x4f61f7(0x165)),
            (_0x20e6ec[_0x4f61f7(0xf0)] = !![]),
            _0x17ee98['appendChild'](_0x57d1af),
            _0x17ee98[_0x4f61f7(0x102)](_0x20e6ec);
        }
      }
      const _0xefb509 = _0x4f61f7(0xee),
        _0x44d38b = document['createElement']('div');
      _0x44d38b[_0x4f61f7(0x189)][_0x4f61f7(0x175)](_0x4f61f7(0x168)),
        (_0x44d38b[_0x4f61f7(0x117)] =
          _0x4f61f7(0x188) + _0xefb509 + _0x4f61f7(0x115)),
        _0x17ee98[_0x4f61f7(0x102)](_0x44d38b);
      const _0x2a6460 = this,
        _0x286f93 = (_0x15b032) => {
          const _0x1f2f42 = _0x4f61f7;
          this[_0x1f2f42(0x185)](_0x15b032);
        };
      _0x44d38b[_0x4f61f7(0x171)]('click', function (_0x5c9bb9) {
        const _0x25342f = _0x4f61f7;
        _0x5c9bb9[_0x25342f(0xd8)]();
        try {
          const _0x27669b = {},
            _0xa23dfc = _0x17ee98[_0x25342f(0x10f)]('.input-form');
          _0xa23dfc['forEach'](function (_0x35910d) {
            const _0x104f96 = _0x25342f;
            _0x27669b[_0x35910d[_0x104f96(0x16d)]] =
              _0x35910d[_0x104f96(0x14d)];
          }),
            (_0x17ee98[_0x25342f(0x112)][_0x25342f(0x12c)] = _0x25342f(0xf3)),
            (_0x79cc74[_0x25342f(0x112)][_0x25342f(0x12c)] = 'flex');
          const _0x344991 = {
            bot_id: window[_0x25342f(0x166)]['bot_id'],
            session_id: _0x2a6460['session_id'],
            user_infor: _0x27669b,
          };
          _0x286f93(_0x344991);
        } catch (_0x1bf7d8) {
          console[_0x25342f(0x137)]('Error:', _0x1bf7d8);
        }
      });
      const _0x4d43f2 = document[_0x4f61f7(0x167)](_0x4f61f7(0x119));
      _0x4d43f2[_0x4f61f7(0x189)][_0x4f61f7(0x175)]('close-button-form'),
        (_0x4d43f2[_0x4f61f7(0x11a)] = 'X');
      const { message_suggest: _0x79cc74 } = this[_0x4f61f7(0xea)];
      _0x4d43f2['addEventListener'](_0x4f61f7(0x186), function () {
        const _0x568a90 = _0x4f61f7;
        localStorage[_0x568a90(0x18b)]('closeFormCollectUser', !![]),
          (_0x17ee98[_0x568a90(0x112)]['display'] = _0x568a90(0xf3)),
          (_0x79cc74[_0x568a90(0x112)][_0x568a90(0x12c)] = 'flex');
      });
      if (this[_0x4f61f7(0x16e)]) {
        const _0x37a7cd = document['querySelector'](_0x4f61f7(0x15c));
        _0x37a7cd[_0x4f61f7(0x112)][_0x4f61f7(0x17e)] =
          this['chatStyle'][_0x4f61f7(0x127)];
      }
      return _0x17ee98[_0x4f61f7(0x102)](_0x4d43f2), _0x17ee98;
    } catch (_0xa6f24a) {
      console[_0x4f61f7(0x137)](_0x4f61f7(0x17a), _0xa6f24a);
    }
  }
  async [_0x28d44f(0xfe)]() {
    const _0x4e387b = _0x28d44f;
    let _0x350ec2 = new Headers();
    _0x350ec2[_0x4e387b(0x140)](_0x4e387b(0x121), _0x4e387b(0x156));
    const _0x190334 = { method: _0x4e387b(0x149), headers: _0x350ec2 };
    try {
      const _0x3f4e1c = await fetch(
          this[_0x4e387b(0x10c)] +
            _0x4e387b(0x162) +
            window[_0x4e387b(0x166)]['bot_id'],
          _0x190334,
        ),
        { openButton: _0x52f01d, chatbox: _0x4fec94 } = this[_0x4e387b(0xea)];
      if (!_0x3f4e1c['ok']) {
        (_0x52f01d['style']['display'] = _0x4e387b(0xf3)),
          (_0x4fec94[_0x4e387b(0x112)]['display'] = _0x4e387b(0xf3));
        throw new Error(_0x4e387b(0x13e) + _0x3f4e1c[_0x4e387b(0x15d)]);
      }
      this[_0x4e387b(0x110)]();
      const _0x37e19f = await _0x3f4e1c[_0x4e387b(0x10d)]();
      (this['chatStyle'] = _0x37e19f),
        this[_0x4e387b(0x106)](_0x37e19f),
        this[_0x4e387b(0xf2)](_0x37e19f),
        await this[_0x4e387b(0x10a)](_0x37e19f),
        await this['updateSuggestedMessages'](_0x37e19f);
      const _0x491501 = document['querySelectorAll'](_0x4e387b(0x172));
      _0x491501[_0x4e387b(0x10b)]((_0x18060d) => {
        const _0x41d8ef = _0x4e387b;
        _0x18060d?.['addEventListener'](_0x41d8ef(0x186), (_0x5d8764) =>
          this[_0x41d8ef(0x15b)](_0x5d8764, _0x4fec94),
        );
      }),
        this['updateHeader'](_0x37e19f);
    } catch (_0x48234e) {
      console['error'](_0x4e387b(0x17a), _0x48234e);
    }
  }
  ['updateInitMessage'](_0x2e577b) {
    const _0x2df24d = _0x28d44f,
      { initial_message: _0x39e4a2 } = _0x2e577b;
    _0x39e4a2 &&
      (this[_0x2df24d(0xed)]['push']([
        { sender_type: _0x2df24d(0xd7), content: '' },
        { sender_type: _0x2df24d(0x11d), content: _0x39e4a2 },
      ]),
      this[_0x2df24d(0x13d)]());
  }
  ['updateHeader'](_0x3d686b) {
    const _0x138ba4 = _0x28d44f,
      { header: _0x5aff04 } = this['args'],
      { iconRefresh: _0x49d783, iconClose: _0x2235cb } = this[_0x138ba4(0x12e)],
      _0x12f6ac = document[_0x138ba4(0x167)](_0x138ba4(0x108));
    _0x12f6ac[_0x138ba4(0x141)] = 'icon_header';
    if (_0x3d686b[_0x138ba4(0x17d)]) {
      const _0x11e23d = document[_0x138ba4(0x167)](_0x138ba4(0x125));
      (_0x11e23d[_0x138ba4(0xef)] = _0x3d686b['bot_avatar_url']),
        (_0x11e23d[_0x138ba4(0x141)] = _0x138ba4(0x181)),
        _0x12f6ac['appendChild'](_0x11e23d);
    }
    _0x3d686b[_0x138ba4(0x16c)] &&
      (_0x12f6ac[_0x138ba4(0x117)] += _0x3d686b['display_name']),
      _0x5aff04[_0x138ba4(0x102)](_0x12f6ac),
      (_0x5aff04['innerHTML'] +=
        _0x138ba4(0x14e) + _0x49d783 + _0x2235cb + '</div>');
  }
  [_0x28d44f(0x15b)](_0x555dcb, _0x206023) {
    const _0x3a25de = _0x28d44f,
      _0x2e9670 = _0x555dcb[_0x3a25de(0x133)][_0x3a25de(0x11a)];
    let _0x3f0454 = _0x206023['querySelector'](_0x3a25de(0xf5));
    (_0x3f0454[_0x3a25de(0x14d)] = _0x2e9670),
      this[_0x3a25de(0x14a)](_0x206023);
  }
  ['updateSuggestedMessages'](_0x3fcdd6) {
    const _0x2b2035 = _0x28d44f,
      { suggest_messages: _0x371061 } = _0x3fcdd6,
      { message_suggest: _0x339df7 } = this[_0x2b2035(0xea)];
    (_0x371061 ?? [])['forEach']((_0x5c5664) => {
      const _0x3e79c5 = _0x2b2035,
        _0x30a3dc = document['createElement']('div');
      (_0x30a3dc[_0x3e79c5(0x141)] = _0x3e79c5(0x178)),
        (_0x30a3dc[_0x3e79c5(0x11a)] = _0x5c5664),
        _0x339df7[_0x3e79c5(0x102)](_0x30a3dc);
    });
  }
  async [_0x28d44f(0x10a)](_0x5a55a8) {
    const _0x1c70a1 = _0x28d44f;
    (this[_0x1c70a1(0x12e)]['isClicked'] = document['createElement'](
      _0x1c70a1(0x125),
    )),
      (this[_0x1c70a1(0x12e)][_0x1c70a1(0x13c)] = document[_0x1c70a1(0x167)](
        _0x1c70a1(0x125),
      )),
      (this[_0x1c70a1(0x12e)][_0x1c70a1(0xfd)] =
        '<svg\x20fill=' +
        (_0x5a55a8[_0x1c70a1(0x127)]
          ? '\x22' + _0x5a55a8[_0x1c70a1(0x127)] + '\x22'
          : _0x1c70a1(0x100)) +
        _0x1c70a1(0xf8));
    if (
      window[_0x1c70a1(0x174)][_0x1c70a1(0xdf)][_0x1c70a1(0xf6)](
        _0x1c70a1(0xe9),
      )
    ) {
      (this[_0x1c70a1(0x12e)][_0x1c70a1(0xd4)][_0x1c70a1(0xef)] =
        'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png'),
        (this['icons'][_0x1c70a1(0xd4)]['style']['width'] = _0x1c70a1(0xe2)),
        (this[_0x1c70a1(0x12e)]['isNotClicked'][_0x1c70a1(0xef)] =
          _0x1c70a1(0xd5)),
        (this[_0x1c70a1(0x12e)][_0x1c70a1(0x13c)][_0x1c70a1(0x112)][
          _0x1c70a1(0x135)
        ] = _0x1c70a1(0xe2));
      return;
    }
    _0x5a55a8[_0x1c70a1(0x12f)]
      ? ((this[_0x1c70a1(0x12e)][_0x1c70a1(0xd4)]['src'] =
          _0x5a55a8['chat_icon_url']),
        (this[_0x1c70a1(0x12e)][_0x1c70a1(0x13c)]['src'] =
          _0x5a55a8['chat_icon_url']))
      : ((this[_0x1c70a1(0x12e)][_0x1c70a1(0xd4)][_0x1c70a1(0xef)] =
          'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg'),
        (this[_0x1c70a1(0x12e)][_0x1c70a1(0x13c)][_0x1c70a1(0xef)] =
          _0x1c70a1(0x109)));
  }
  [_0x28d44f(0x106)](_0x4dfaa8) {
    const _0x12ef6a = _0x28d44f,
      {
        theme: _0x212325,
        chat_bubble_button_color: _0xef77a5,
        align_chat_bubble_button: _0x180cba,
        chat_message_color: _0x284653,
        suggest_messages: _0x37df7c,
      } = _0x4dfaa8,
      _0x44c98d =
        '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{white-space:\x20pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:70vh;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:12px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.icon_header_action{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
      _0x5feb43 =
        '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{white-space:pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:70vh;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{white-space:pre-wrap;border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1.2rem}.chatbot__suggest--item{font-size:\x2012px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header_action{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#4AC1FF;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
      _0x598beb = window['location'][_0x12ef6a(0xdf)]['includes'](
        _0x12ef6a(0xe9),
      )
        ? _0x5feb43
        : _0x44c98d,
      _0x5c001e = {
        chatButtonAlignment: _0x180cba ?? _0x12ef6a(0x12a),
        chatBoxAlignment: _0x180cba ?? _0x12ef6a(0x12a),
        chatButtonDirection:
          _0x180cba === _0x12ef6a(0x104) ? _0x12ef6a(0x12a) : _0x12ef6a(0x104),
        chatButtonColor: _0xef77a5 ?? '#fff',
        chatBoxBackgroundColor:
          _0x212325 === 'dark' ? _0x12ef6a(0x148) : _0x12ef6a(0x113),
        chatInputBorderColor: _0x212325 === 'dark' ? '#cdceed' : '#0000004a',
        chatBoxHeaderBorderColor:
          _0x212325 === 'dark' ? _0x12ef6a(0x163) : _0x12ef6a(0x131),
        chatInputColor:
          _0x212325 === 'dark' ? _0x12ef6a(0x113) : _0x12ef6a(0xff),
        chatBoxDisplayNameColor:
          _0x212325 === _0x12ef6a(0x124) ? _0x12ef6a(0x113) : _0x12ef6a(0x134),
        messageItemOperatorBackgroundColor: _0x284653 ?? _0x12ef6a(0x13b),
        suggestedMessagesHeight: _0x37df7c?.[_0x12ef6a(0x17c)]
          ? '60px'
          : _0x12ef6a(0xe4),
      },
      _0x1ba61f = document['createElement'](_0x12ef6a(0x112));
    (_0x1ba61f[_0x12ef6a(0x11a)] = _0x598beb[_0x12ef6a(0x182)](
      /{{([^}]+)}}/g,
      (_0x4b6fcc, _0x3d7ecd) => _0x5c001e[_0x3d7ecd],
    )),
      document[_0x12ef6a(0x122)]['append'](_0x1ba61f);
  }
  [_0x28d44f(0x159)](_0x31efc7) {
    return new Promise((_0x2c065a) => setTimeout(_0x2c065a, _0x31efc7));
  }
  async ['onSendButton'](_0x328bab) {
    const _0xd86743 = _0x28d44f;
    let _0x41589e = _0x328bab[_0xd86743(0xf1)]('.input_message'),
      _0x298215 = _0x41589e[_0xd86743(0x14d)];
    if (!!this[_0xd86743(0x155)]) return;
    _0x41589e[_0xd86743(0x14d)] = '';
    if (_0x298215 === '') return;
    this['loading'] = !![];
    const { message_suggest: _0x29e031, formCollect: _0x1639c4 } = this['args'];
    (_0x29e031[_0xd86743(0x112)][_0xd86743(0x12c)] = _0xd86743(0x16b)),
      (_0x1639c4[_0xd86743(0x112)][_0xd86743(0x12c)] = _0xd86743(0xf3)),
      this['history'][_0xd86743(0xdb)]([
        { sender_type: _0xd86743(0xd7), content: _0x298215 },
        { sender_type: _0xd86743(0x11d), content: '' },
      ]),
      this[_0xd86743(0x13d)]();
    let _0x42ed5b = new Headers();
    _0x42ed5b[_0xd86743(0x140)](_0xd86743(0x121), _0xd86743(0x156));
    const _0x50f5d2 = {
      method: _0xd86743(0x164),
      headers: _0x42ed5b,
      body: JSON[_0xd86743(0x11f)]({
        message: _0x298215,
        session_id: this[_0xd86743(0x146)],
        ...window['chatbotConfig'],
      }),
    };
    try {
      const _0x5aa1be = await fetch(this[_0xd86743(0x129)], _0x50f5d2);
      if (!_0x5aa1be['ok'])
        throw new Error(_0xd86743(0x152) + _0x5aa1be[_0xd86743(0x15d)]);
      const _0x286dfb = await _0x5aa1be[_0xd86743(0x120)],
        _0x5600ae = _0x286dfb[_0xd86743(0x147)]();
      for await (const _0xc5b5cb of this['asyncGenerator'](_0x5600ae)) {
      }
    } catch (_0x3112ff) {
      (this['loading'] = ![]),
        console[_0xd86743(0x137)]('Error:', _0x3112ff),
        (_0x41589e[_0xd86743(0x14d)] = '');
    }
  }
  [_0x28d44f(0xec)](_0x3b74a8) {
    const _0xa3ea1a = _0x28d44f;
    for (var _0x184a8e in _0x3b74a8) {
      if (_0x3b74a8[_0xa3ea1a(0x118)](_0x184a8e)) return ![];
    }
    return !![];
  }
  async *['asyncGenerator'](_0x298724) {
    const _0x31dd8b = _0x28d44f,
      _0x1dee55 = localStorage[_0x31dd8b(0x12d)]('isSubmitCollectForm'),
      _0x585f85 = localStorage[_0x31dd8b(0x12d)](_0x31dd8b(0x17b)),
      { numberShowing: _0x443429, ..._0x4e5b9b } = this[_0x31dd8b(0xfc)],
      _0x5bb07c = new TextDecoder();
    while (!![]) {
      const { done: _0x36edca, value: _0x663589 } =
        await _0x298724[_0x31dd8b(0x145)]();
      if (_0x36edca) {
        const { message_suggest: _0x4d73e1, formCollect: _0x42a5c7 } =
          this[_0x31dd8b(0xea)];
        this[_0x31dd8b(0xed)][_0x31dd8b(0x17c)] >= _0x443429 &&
        !_0x1dee55 &&
        !_0x585f85 &&
        !this[_0x31dd8b(0xec)](_0x4e5b9b)
          ? ((_0x4d73e1[_0x31dd8b(0x112)]['display'] = _0x31dd8b(0xf3)),
            (_0x42a5c7[_0x31dd8b(0x112)][_0x31dd8b(0x12c)] = _0x31dd8b(0xeb)))
          : ((_0x4d73e1[_0x31dd8b(0x112)][_0x31dd8b(0x12c)] = _0x31dd8b(0x16b)),
            (_0x42a5c7[_0x31dd8b(0x112)][_0x31dd8b(0x12c)] = _0x31dd8b(0xf3)));
        this[_0x31dd8b(0x155)] = ![];
        return;
      }
      const _0x8e6a4 = _0x5bb07c[_0x31dd8b(0x13f)](_0x663589);
      await this[_0x31dd8b(0x159)](0x32),
        (this[_0x31dd8b(0xed)][_0x31dd8b(0x176)](-0x1)[0x0][0x1][
          _0x31dd8b(0x170)
        ] += _0x8e6a4),
        await this[_0x31dd8b(0x13d)]();
    }
  }
  async [_0x28d44f(0x13d)]() {
    const _0x12967c = _0x28d44f;
    let _0x1faa5f = document['querySelector'](_0x12967c(0xdc)),
      _0x1f67f1 = '';
    this['history'][_0x12967c(0x10b)]((_0x2c806f, _0x57b78c) => {
      const _0x4fd7d6 = _0x12967c;
      !(
        _0x2c806f[0x0]['sender_type'] == _0x4fd7d6(0xd7) &&
        !_0x2c806f[0x0][_0x4fd7d6(0x170)]
      ) &&
        (_0x1f67f1 +=
          '<div\x20class=\x22messages__item\x20messages__item--operator\x22>' +
          _0x2c806f[0x0][_0x4fd7d6(0x170)] +
          _0x4fd7d6(0xfb));
      if (
        _0x2c806f[0x1][_0x4fd7d6(0x179)] == 'assistant' &&
        _0x2c806f[0x1][_0x4fd7d6(0x170)]
      )
        _0x1f67f1 +=
          '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>' +
          _0x2c806f[0x1][_0x4fd7d6(0x170)] +
          _0x4fd7d6(0xfb);
      else _0x1f67f1 += _0x4fd7d6(0xe1);
    }),
      (_0x1faa5f[_0x12967c(0x117)] = _0x12967c(0xf9) + _0x1f67f1 + '</div>');
  }
  [_0x28d44f(0xd9)]() {
    const _0xcbb7e4 = _0x28d44f,
      { chatbox: _0x38d058 } = this[_0xcbb7e4(0xea)];
    _0x38d058[_0xcbb7e4(0x112)][_0xcbb7e4(0x12c)] = 'none';
  }
  [_0x28d44f(0x14f)]() {
    const _0x1f20a3 = _0x28d44f;
    (this[_0x1f20a3(0xed)] = []),
      (this[_0x1f20a3(0x146)] = this['generateUUID']()),
      this[_0x1f20a3(0x13d)]();
  }
  [_0x28d44f(0x173)](_0x2114a0) {
    const _0x4c66c7 = _0x28d44f;
    (this[_0x4c66c7(0x103)] = !this['state']),
      this[_0x4c66c7(0x132)](_0x2114a0, this[_0x4c66c7(0xea)]['openButton']);
  }
  [_0x28d44f(0x132)](_0x4097a2, _0x132ba7) {
    const _0x5293c6 = _0x28d44f;
    _0x4097a2[_0x5293c6(0x112)][_0x5293c6(0x12c)] =
      _0x4097a2['style'][_0x5293c6(0x12c)] === _0x5293c6(0xf3) ? '' : 'none';
    if (this['state'])
      _0x4097a2['classList']['add'](_0x5293c6(0x12b)),
        this[_0x5293c6(0x160)](!![], _0x132ba7);
    else !this[_0x5293c6(0x103)] && this[_0x5293c6(0x160)](![], _0x132ba7);
  }
  [_0x28d44f(0x160)](_0x7bc84e, _0x26b56b) {
    const _0x45424d = _0x28d44f,
      { isClicked: _0x4a4bfc, isNotClicked: _0x1747f0 } =
        this[_0x45424d(0x12e)],
      _0x534d41 = document[_0x45424d(0xf1)](_0x45424d(0xd3));
    _0x534d41['addEventListener'](_0x45424d(0x186), () =>
      this[_0x45424d(0xd9)](),
    );
    const _0x3c4557 = document[_0x45424d(0xf1)](_0x45424d(0x17f));
    _0x3c4557[_0x45424d(0x171)](_0x45424d(0x186), () =>
      this['refreshHistory'](),
    );
    const _0x2ab7e5 = _0x26b56b[_0x45424d(0x105)],
      _0x368bab = _0x2ab7e5[_0x45424d(0x105)];
    _0x2ab7e5[_0x45424d(0x15a)](_0x7bc84e ? _0x4a4bfc : _0x1747f0, _0x368bab);
  }
}
function _0xe500(_0x3700c8, _0x3726d7) {
  const _0x322f51 = _0x322f();
  return (
    (_0xe500 = function (_0xe5005c, _0x4d9547) {
      _0xe5005c = _0xe5005c - 0xd3;
      let _0x16b8bd = _0x322f51[_0xe5005c];
      return _0x16b8bd;
    }),
    _0xe500(_0x3700c8, _0x3726d7)
  );
}
(document[_0x28d44f(0x120)] = document[_0x28d44f(0x167)](_0x28d44f(0x120))),
  (document[_0x28d44f(0x122)][_0x28d44f(0x117)] += _0x28d44f(0x169));
const elemDiv = _0x28d44f(0xe8);
document[_0x28d44f(0x120)][_0x28d44f(0x117)] += elemDiv;
const chatbox = new InteractiveChatbox();
function _0x322f() {
  const _0x57ee0e = [
    'getItem',
    'icons',
    'chat_icon_url',
    '/chat/get-streaming-response',
    '#0000004a',
    'showOrHideChatBox',
    'target',
    'inherit',
    'width',
    'generateUUID',
    'error',
    'input',
    '.chatbot__header',
    'getInfoCollectUser',
    '#3399FF',
    'isNotClicked',
    'updateChatBox',
    'Request\x20failed\x20swith\x20status:\x20',
    'decode',
    'append',
    'className',
    '10MhNBTD',
    'baseUrl',
    'floor',
    'read',
    'session_id',
    'getReader',
    '#111827',
    'GET',
    'onSendButton',
    'intrucstion_title',
    '.bot_avatar',
    'value',
    '<div\x20class=\x22icon_header_action\x22>',
    'refreshHistory',
    'now',
    'getTime',
    'Request\x20failed\x20with\x20status:\x20',
    'isSubmitCollectForm',
    'Let\x20us\x20know\x20how\x20to\x20contact\x20you',
    'loading',
    'application/json',
    'collect-form',
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    'sleep',
    'replaceChild',
    'showMessageText',
    '.submit_button',
    'status',
    'getElementById',
    '15gZZrep',
    'toggleIcon',
    '5528790yTrZGr',
    '?bot_id=',
    '#cdceed',
    'POST',
    'input-form',
    'chatbotConfig',
    'createElement',
    'submit_action',
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__button{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.init_message{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20@media\x20only\x20screen\x20and\x20(max-width:\x201024px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20350px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2060vh\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.chatbox\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20#collect-form\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x2010px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x2080%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f9f9f9;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.intrucstion_title{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20capitalize;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20input[type=\x22text\x22],\x0a\x20\x20\x20\x20\x20\x20input[type=\x22email\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.submit_action\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20flex-end;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.submit_button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20.close-button-form\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20',
    'undefined',
    'flex',
    'display_name',
    'name',
    'chatStyle',
    'removeItem',
    'content',
    'addEventListener',
    '.chatbot__suggest--item',
    'toggleState',
    'location',
    'add',
    'slice',
    'visibility',
    'chatbot__suggest--item',
    'sender_type',
    'Error:',
    'closeFormCollectUser',
    'length',
    'bot_avatar_url',
    'background',
    '.refresh__button',
    '6CDRLTJ',
    'bot_avatar',
    'replace',
    '2206535kqpABY',
    '7674yYUWwA',
    'fetchUserCollectInfor',
    'click',
    '41739599MMCtHo',
    '<button\x20class=\x22submit_button\x22>',
    'classList',
    '.chatbot',
    'setItem',
    '.close__button',
    'isClicked',
    'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png',
    'bot_id',
    'user',
    'preventDefault',
    'closeChatBox',
    '/bot/bot-widget-setting',
    'push',
    '.chatbox__messages',
    'Enter',
    '/chat/submit-information',
    'origin',
    '11339293foTwUE',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    '80px',
    '463460DKPKSl',
    '0px',
    'label',
    'https://backend.dev.chatfly.co/api',
    'syncInfoCollectUser',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<form\x20id=\x22collect-form\x22></form>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22input_message\x22\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'chatfly',
    'args',
    'block',
    'isEmptyObject',
    'history',
    '<svg\x20fill=\x22#ffff\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    'src',
    'required',
    'querySelector',
    'updateInitMessage',
    'none',
    'email',
    '.input_message',
    'includes',
    '3256856oFiAiQ',
    '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    '<div>',
    '.chatbox__button',
    '</div>',
    'responseCollectUser',
    'iconSend',
    'syncChatWidgetStyling',
    '#inherit',
    '#000000',
    '33KYOhfP',
    'appendChild',
    'state',
    'left',
    'firstElementChild',
    'setStyle',
    'visible',
    'div',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    'updateChatIcons',
    'forEach',
    'getBotWidgetSettingUrl',
    'json',
    'type',
    'querySelectorAll',
    'showChatWhenGetStyleSuccess',
    '/bot/information/collect-customer-info',
    'style',
    '#fff',
    'random',
    '</button>',
    'sendInfoCollectUser',
    'innerHTML',
    'hasOwnProperty',
    'button',
    'textContent',
    '.chatbox__support',
    'container-form',
    'assistant',
    '.chatbot__suggest',
    'stringify',
    'body',
    'Content-Type',
    'head',
    'toString',
    'dark',
    'img',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    'chat_message_color',
    'text',
    'getStreamingResponseUrl',
    'right',
    'chatbox--active',
    'display',
  ];
  _0x322f = function () {
    return _0x57ee0e;
  };
  return _0x322f();
}
chatbox[_0x28d44f(0x12c)]();
