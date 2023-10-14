const _0xdfc8c5 = _0x5d49;
(function (_0x3c0799, _0x5373a9) {
  const _0x2bdbb0 = _0x5d49,
    _0x5a71c1 = _0x3c0799();
  while (!![]) {
    try {
      const _0x3e54d7 =
        parseInt(_0x2bdbb0(0x186)) / 0x1 +
        (parseInt(_0x2bdbb0(0x167)) / 0x2) *
          (-parseInt(_0x2bdbb0(0x1b2)) / 0x3) +
        -parseInt(_0x2bdbb0(0x16a)) / 0x4 +
        parseInt(_0x2bdbb0(0x1a0)) / 0x5 +
        -parseInt(_0x2bdbb0(0x1f1)) / 0x6 +
        -parseInt(_0x2bdbb0(0x1f0)) / 0x7 +
        parseInt(_0x2bdbb0(0x229)) / 0x8;
      if (_0x3e54d7 === _0x5373a9) break;
      else _0x5a71c1['push'](_0x5a71c1['shift']());
    } catch (_0x55a472) {
      _0x5a71c1['push'](_0x5a71c1['shift']());
    }
  }
})(_0x21e0, 0xf361b);
class InteractiveChatbox {
  constructor() {
    const _0x299541 = _0x5d49;
    (this[_0x299541(0x192)] = _0x299541(0x208)),
      (this['getStreamingResponseUrl'] =
        this[_0x299541(0x192)] + _0x299541(0x17f)),
      (this[_0x299541(0x214)] = this[_0x299541(0x192)] + _0x299541(0x218)),
      (this[_0x299541(0x21c)] = this[_0x299541(0x192)] + _0x299541(0x211)),
      (this[_0x299541(0x1b7)] = this[_0x299541(0x192)] + _0x299541(0x1b4)),
      (this[_0x299541(0x18a)] = {
        openButton: document[_0x299541(0x22b)]('.chatbox__button'),
        chatbox: document[_0x299541(0x22b)](_0x299541(0x1d7)),
        sendButton: document[_0x299541(0x22b)](_0x299541(0x189)),
        header: document[_0x299541(0x22b)](_0x299541(0x1ac)),
        message_suggest: document[_0x299541(0x22b)](_0x299541(0x18d)),
        chatFlyContainer: document[_0x299541(0x22b)](_0x299541(0x176)),
        avartar: document[_0x299541(0x22b)](_0x299541(0x226)),
        formCollect: document[_0x299541(0x22b)](_0x299541(0x19d)),
      }),
      (this['icons'] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x299541(0x1af),
        iconRefresh:
          '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
      }),
      (this['state'] = ![]),
      (this['history'] = []),
      (this['session_id'] = this[_0x299541(0x1a3)]()),
      (this[_0x299541(0x1d5)] = ![]),
      (this[_0x299541(0x199)] = localStorage[_0x299541(0x200)](
        _0x299541(0x199),
      )),
      (this[_0x299541(0x18e)] = undefined),
      (this[_0x299541(0x1ba)] = undefined);
  }
  ['generateUUID']() {
    const _0x38ed5a = _0x5d49;
    var _0x453926 = new Date()[_0x38ed5a(0x21d)](),
      _0x4b1010 =
        (typeof performance !== _0x38ed5a(0x22c) &&
          performance[_0x38ed5a(0x1ca)] &&
          performance[_0x38ed5a(0x1ca)]() * 0x3e8) ||
        0x0;
    return _0x38ed5a(0x1a8)[_0x38ed5a(0x1d0)](/[xy]/g, function (_0x1e11d3) {
      const _0x50c020 = _0x38ed5a;
      var _0x5c9db4 = Math[_0x50c020(0x222)]() * 0x10;
      return (
        _0x453926 > 0x0
          ? ((_0x5c9db4 = (_0x453926 + _0x5c9db4) % 0x10 | 0x0),
            (_0x453926 = Math[_0x50c020(0x16d)](_0x453926 / 0x10)))
          : ((_0x5c9db4 = (_0x4b1010 + _0x5c9db4) % 0x10 | 0x0),
            (_0x4b1010 = Math['floor'](_0x4b1010 / 0x10))),
        (_0x1e11d3 === 'x' ? _0x5c9db4 : (_0x5c9db4 & 0x3) | 0x8)[
          _0x50c020(0x166)
        ](0x10)
      );
    });
  }
  async ['display']() {
    const _0x3fc2f9 = _0x5d49,
      {
        openButton: _0x319f64,
        chatbox: _0x1c6888,
        sendButton: _0x406a7e,
      } = this[_0x3fc2f9(0x18a)];
    await this[_0x3fc2f9(0x1d6)](), await this[_0x3fc2f9(0x1a5)]();
    const { iconSend: _0x3fb415 } = this['icons'];
    this['toggleIcon'](![], _0x319f64), this['toggleState'](_0x1c6888);
    window[_0x3fc2f9(0x1f4)][_0x3fc2f9(0x227)][_0x3fc2f9(0x21e)]('chatfly') &&
      this[_0x3fc2f9(0x1b5)](_0x1c6888);
    localStorage['removeItem'](_0x3fc2f9(0x219)),
      _0x319f64[_0x3fc2f9(0x1ab)](_0x3fc2f9(0x16b), () =>
        this[_0x3fc2f9(0x1b5)](_0x1c6888),
      ),
      _0x406a7e[_0x3fc2f9(0x1ab)](_0x3fc2f9(0x16b), () =>
        this['onSendButton'](_0x1c6888),
      ),
      (_0x406a7e['innerHTML'] =
        _0x3fc2f9(0x22a) + _0x3fb415 + _0x3fc2f9(0x1ce)),
      this[_0x3fc2f9(0x220)]();
    const _0xd0d165 = _0x1c6888[_0x3fc2f9(0x22b)]('.input_message');
    _0xd0d165[_0x3fc2f9(0x1ab)]('keyup', ({ key: _0x7b24b0 }) => {
      _0x7b24b0 === 'Enter' && this['onSendButton'](_0x1c6888);
    });
  }
  async ['showChat']() {
    const _0x1d488b = _0x5d49,
      { chatbox: _0x4d1c3a } = this[_0x1d488b(0x18a)];
    (_0x4d1c3a['style'][_0x1d488b(0x1c5)] = _0x1d488b(0x19b)),
      (_0x4d1c3a[_0x1d488b(0x1d1)][_0x1d488b(0x16c)] = 'visible'),
      setTimeout(() => {
        const _0x332e3b = _0x1d488b;
        _0x4d1c3a[_0x332e3b(0x1d1)][_0x332e3b(0x1f7)] = '1';
      }, 0xc8);
  }
  async [_0xdfc8c5(0x18b)]() {
    const _0x56d2e1 = _0xdfc8c5,
      { chatbox: _0x2e5182 } = this['args'];
    (_0x2e5182['style'][_0x56d2e1(0x1f7)] = '0'),
      setTimeout(() => {
        const _0x44c231 = _0x56d2e1;
        (_0x2e5182['style'][_0x44c231(0x1c5)] = _0x44c231(0x213)),
          (_0x2e5182[_0x44c231(0x1d1)][_0x44c231(0x16c)] = _0x44c231(0x1cc));
      }, 0xc8);
  }
  [_0xdfc8c5(0x220)]() {
    const _0x1299b9 = _0xdfc8c5,
      { openButton: _0x350114 } = this[_0x1299b9(0x18a)];
    (_0x350114['style'][_0x1299b9(0x1c5)] = 'block'),
      setTimeout(() => {
        const _0x5f24d9 = _0x1299b9;
        _0x350114[_0x5f24d9(0x1d1)][_0x5f24d9(0x1f7)] = '1';
      }, 0xc8);
  }
  ['showForm']() {
    const _0x51b5df = _0xdfc8c5,
      { formCollect: _0x463bf7 } = this[_0x51b5df(0x18a)];
    (_0x463bf7['style'][_0x51b5df(0x1c5)] = _0x51b5df(0x16f)),
      setTimeout(() => {
        const _0x119c01 = _0x51b5df;
        _0x463bf7[_0x119c01(0x1d1)][_0x119c01(0x1da)] = _0x119c01(0x1eb);
      }, 0xc8);
  }
  [_0xdfc8c5(0x1a4)]() {
    const _0x34a473 = _0xdfc8c5,
      { message_suggest: _0x428764 } = this[_0x34a473(0x18a)];
    (_0x428764[_0x34a473(0x1d1)]['transform'] = 'translateY(56px)'),
      setTimeout(() => {
        const _0x29caf6 = _0x34a473;
        _0x428764['style'][_0x29caf6(0x1c5)] = _0x29caf6(0x213);
      }, 0xc8);
  }
  async [_0xdfc8c5(0x17e)](_0x5a343c) {
    const _0x343aa3 = _0xdfc8c5;
    let _0x3aa15f = new Headers();
    _0x3aa15f[_0x343aa3(0x183)](_0x343aa3(0x19f), _0x343aa3(0x20b));
    const _0xcaa504 = {
      method: _0x343aa3(0x1e3),
      headers: _0x3aa15f,
      body: JSON[_0x343aa3(0x168)](_0x5a343c),
    };
    try {
      const _0x58f1ac = await fetch(
        this['sendInfoCollectUser'] +
          '?bot_id=' +
          window['chatbotConfig'][_0x343aa3(0x197)],
        _0xcaa504,
      );
      if (!_0x58f1ac['ok'])
        throw new Error(_0x343aa3(0x224) + _0x58f1ac['status']);
      localStorage[_0x343aa3(0x20f)](_0x343aa3(0x199), !![]);
    } catch (_0x56bcf5) {
      console['error'](_0x343aa3(0x190), _0x56bcf5);
    }
  }
  async [_0xdfc8c5(0x1a5)]() {
    const _0x44d7dc = _0xdfc8c5;
    let _0x1ba781 = new Headers();
    _0x1ba781[_0x44d7dc(0x183)](_0x44d7dc(0x19f), _0x44d7dc(0x20b));
    const _0x3bdfd2 = { method: _0x44d7dc(0x1df), headers: _0x1ba781 };
    try {
      const _0x1eb2ef = await fetch(
        this[_0x44d7dc(0x21c)] +
          _0x44d7dc(0x171) +
          window[_0x44d7dc(0x21f)][_0x44d7dc(0x197)],
        _0x3bdfd2,
      );
      if (!_0x1eb2ef['ok'])
        throw new Error(_0x44d7dc(0x224) + _0x1eb2ef['status']);
      const _0x404893 = document[_0x44d7dc(0x1aa)](_0x44d7dc(0x202)),
        _0x87cab = document[_0x44d7dc(0x21a)](_0x44d7dc(0x1e4));
      _0x87cab[_0x44d7dc(0x182)] = _0x44d7dc(0x174);
      const { data: _0x4f9ea4 } = await _0x1eb2ef[_0x44d7dc(0x177)](),
        { numberShowing: _0x490df7, ..._0x20aba1 } = _0x4f9ea4;
      this[_0x44d7dc(0x1ba)] = _0x4f9ea4;
      const _0x539f96 = document['createElement'](_0x44d7dc(0x1e4));
      _0x539f96['classList'][_0x44d7dc(0x16e)](_0x44d7dc(0x1cb)),
        (_0x539f96[_0x44d7dc(0x204)] = _0x44d7dc(0x1f9)),
        _0x404893[_0x44d7dc(0x17b)](_0x539f96);
      for (const _0x432622 in _0x20aba1) {
        if (_0x4f9ea4[_0x432622] == !![]) {
          const _0x52ee21 = document[_0x44d7dc(0x21a)]('label');
          _0x52ee21[_0x44d7dc(0x204)] = _0x432622;
          const _0x1865f6 = document['createElement'](_0x44d7dc(0x1c3));
          (_0x1865f6[_0x44d7dc(0x1e2)] =
            _0x432622 == _0x44d7dc(0x203)
              ? _0x44d7dc(0x203)
              : _0x44d7dc(0x1db)),
            (_0x1865f6[_0x44d7dc(0x1ff)] = _0x432622),
            _0x1865f6[_0x44d7dc(0x1ae)][_0x44d7dc(0x16e)](_0x44d7dc(0x17c)),
            (_0x1865f6[_0x44d7dc(0x1f8)] = !![]),
            _0x404893[_0x44d7dc(0x17b)](_0x52ee21),
            _0x404893['appendChild'](_0x1865f6);
        }
      }
      const _0x4d8569 = _0x44d7dc(0x1e9),
        _0x402982 = document[_0x44d7dc(0x21a)](_0x44d7dc(0x1e4));
      _0x402982[_0x44d7dc(0x1ae)][_0x44d7dc(0x16e)](_0x44d7dc(0x1e8)),
        (_0x402982[_0x44d7dc(0x1c4)] =
          _0x44d7dc(0x217) + _0x4d8569 + _0x44d7dc(0x228)),
        _0x404893[_0x44d7dc(0x17b)](_0x402982);
      const _0x2187b3 = this,
        _0x3f817c = (_0x4a833a) => {
          const _0x19e7f3 = _0x44d7dc;
          this[_0x19e7f3(0x17e)](_0x4a833a);
        },
        _0x48eba6 = document['createElement'](_0x44d7dc(0x1e1));
      _0x48eba6['classList'][_0x44d7dc(0x16e)](_0x44d7dc(0x1e5)),
        (_0x48eba6[_0x44d7dc(0x204)] = 'X');
      const { message_suggest: _0x363f6f } = this[_0x44d7dc(0x18a)];
      _0x48eba6[_0x44d7dc(0x1ab)](_0x44d7dc(0x16b), function () {
        const _0x289916 = _0x44d7dc;
        localStorage['setItem'](_0x289916(0x219), !![]),
          (_0x404893['style'][_0x289916(0x1da)] = _0x289916(0x1fb)),
          (_0x363f6f['style'][_0x289916(0x1c5)] = _0x289916(0x19b)),
          setTimeout(() => {
            const _0x32598d = _0x289916;
            (_0x404893[_0x32598d(0x1d1)][_0x32598d(0x1c5)] = _0x32598d(0x213)),
              (_0x363f6f[_0x32598d(0x1d1)][_0x32598d(0x1da)] =
                _0x32598d(0x207));
          }, 0xc8);
      });
      if (this[_0x44d7dc(0x18e)]) {
        const _0x4325fd = document[_0x44d7dc(0x22b)](_0x44d7dc(0x1c7));
        _0x4325fd[_0x44d7dc(0x1d1)]['background'] =
          this['chatStyle'][_0x44d7dc(0x1f3)];
      }
      return (
        _0x404893[_0x44d7dc(0x17b)](_0x48eba6),
        _0x404893[_0x44d7dc(0x1ab)]('submit', function (_0x4a2c02) {
          const _0x21b25c = _0x44d7dc;
          _0x4a2c02[_0x21b25c(0x181)]();
          try {
            const _0xe03cfe = {},
              _0x2f6919 = _0x404893['querySelectorAll'](_0x21b25c(0x1e6));
            _0x2f6919[_0x21b25c(0x1e0)](function (_0x3b4bb3) {
              const _0x2e5b73 = _0x21b25c;
              _0xe03cfe[_0x3b4bb3[_0x2e5b73(0x1ff)]] =
                _0x3b4bb3[_0x2e5b73(0x1dd)];
            }),
              (_0x404893['style'][_0x21b25c(0x1da)] = _0x21b25c(0x1fb)),
              (_0x363f6f[_0x21b25c(0x1d1)]['display'] = _0x21b25c(0x19b)),
              setTimeout(() => {
                const _0x2f27cd = _0x21b25c;
                (_0x404893[_0x2f27cd(0x1d1)][_0x2f27cd(0x1c5)] =
                  _0x2f27cd(0x213)),
                  (_0x363f6f[_0x2f27cd(0x1d1)][_0x2f27cd(0x1da)] =
                    _0x2f27cd(0x207));
              }, 0xc8);
            const _0x4bec16 = {
              bot_id: window[_0x21b25c(0x21f)][_0x21b25c(0x197)],
              session_id: _0x2187b3[_0x21b25c(0x180)],
              user_infor: _0xe03cfe,
            };
            _0x3f817c(_0x4bec16);
          } catch (_0x163f65) {
            console[_0x21b25c(0x1be)](_0x21b25c(0x190), _0x163f65);
          }
        }),
        _0x404893
      );
    } catch (_0x2b94fb) {
      console[_0x44d7dc(0x1be)]('Error:', _0x2b94fb);
    }
  }
  async [_0xdfc8c5(0x1d6)]() {
    const _0x300dc6 = _0xdfc8c5;
    let _0x56ee7b = new Headers();
    _0x56ee7b[_0x300dc6(0x183)](_0x300dc6(0x19f), _0x300dc6(0x20b));
    const _0x389aa0 = { method: _0x300dc6(0x1df), headers: _0x56ee7b };
    try {
      const _0x16fb95 = await fetch(
          this[_0x300dc6(0x214)] +
            _0x300dc6(0x171) +
            window[_0x300dc6(0x21f)][_0x300dc6(0x197)],
          _0x389aa0,
        ),
        { chatbox: _0x10da9a } = this[_0x300dc6(0x18a)];
      if (!_0x16fb95['ok'])
        throw new Error(
          'Request\x20failed\x20swith\x20status:\x20' +
            _0x16fb95[_0x300dc6(0x1f5)],
        );
      const _0xf484a4 = await _0x16fb95['json']();
      (this[_0x300dc6(0x18e)] = _0xf484a4),
        this[_0x300dc6(0x172)](_0xf484a4),
        this[_0x300dc6(0x1fa)](_0xf484a4),
        await this[_0x300dc6(0x194)](_0xf484a4),
        await this[_0x300dc6(0x21b)](_0xf484a4);
      const _0x2636b9 = document[_0x300dc6(0x169)]('.chatbot__suggest--item');
      _0x2636b9[_0x300dc6(0x1e0)]((_0x7df748) => {
        const _0x383a62 = _0x300dc6;
        _0x7df748?.['addEventListener'](_0x383a62(0x16b), (_0x33f971) =>
          this[_0x383a62(0x205)](_0x33f971, _0x10da9a),
        );
      }),
        this[_0x300dc6(0x195)](_0xf484a4);
    } catch (_0x9300eb) {
      console['error']('Error:', _0x9300eb);
    }
  }
  ['updateInitMessage'](_0x3ec9c9) {
    const _0x45d31f = _0xdfc8c5,
      { initial_message: _0x9299a0 } = _0x3ec9c9;
    _0x9299a0 &&
      (this[_0x45d31f(0x223)][_0x45d31f(0x175)]([
        { sender_type: _0x45d31f(0x20a), content: '' },
        { sender_type: _0x45d31f(0x210), content: _0x9299a0 },
      ]),
      this[_0x45d31f(0x1ea)]());
  }
  [_0xdfc8c5(0x195)](_0x5cf161) {
    const _0x2d8ff0 = _0xdfc8c5,
      { header: _0x5d6c5a } = this[_0x2d8ff0(0x18a)],
      { iconRefresh: _0x26d75a, iconClose: _0x19ae06 } = this[_0x2d8ff0(0x216)],
      _0x144b82 = document[_0x2d8ff0(0x21a)](_0x2d8ff0(0x1e4));
    _0x144b82['className'] = 'icon_header';
    if (_0x5cf161[_0x2d8ff0(0x1d4)]) {
      const _0x66c4a6 = document[_0x2d8ff0(0x21a)](_0x2d8ff0(0x1ec));
      (_0x66c4a6['src'] = _0x5cf161[_0x2d8ff0(0x1d4)]),
        (_0x66c4a6['className'] = _0x2d8ff0(0x1c1)),
        _0x144b82['appendChild'](_0x66c4a6);
    }
    _0x5cf161[_0x2d8ff0(0x1ad)] &&
      (_0x144b82['innerHTML'] += _0x5cf161[_0x2d8ff0(0x1ad)]),
      _0x5d6c5a[_0x2d8ff0(0x17b)](_0x144b82),
      (_0x5d6c5a['innerHTML'] +=
        _0x2d8ff0(0x1b1) + _0x26d75a + _0x19ae06 + _0x2d8ff0(0x1ce));
  }
  ['showMessageText'](_0x46a8e9, _0x5e6656) {
    const _0x4efdf3 = _0xdfc8c5,
      _0x5319e1 = _0x46a8e9[_0x4efdf3(0x1fd)][_0x4efdf3(0x204)];
    let _0x2201af = _0x5e6656[_0x4efdf3(0x22b)](_0x4efdf3(0x1b9));
    (_0x2201af[_0x4efdf3(0x1dd)] = _0x5319e1),
      this[_0x4efdf3(0x1e7)](_0x5e6656);
  }
  [_0xdfc8c5(0x21b)](_0x21ff1e) {
    const _0xe1b226 = _0xdfc8c5,
      { suggest_messages: _0x2e01d8 } = _0x21ff1e,
      { message_suggest: _0x41e207 } = this[_0xe1b226(0x18a)];
    (_0x2e01d8 ?? [])['forEach']((_0x2d0b7f) => {
      const _0x2af4bf = _0xe1b226,
        _0x4fddce = document['createElement']('div');
      (_0x4fddce[_0x2af4bf(0x182)] = _0x2af4bf(0x201)),
        (_0x4fddce[_0x2af4bf(0x204)] = _0x2d0b7f),
        _0x41e207[_0x2af4bf(0x17b)](_0x4fddce);
    });
  }
  async [_0xdfc8c5(0x194)](_0x8df160) {
    const _0x52bc36 = _0xdfc8c5;
    (this['icons']['isClicked'] = document['createElement']('img')),
      (this['icons'][_0x52bc36(0x1ee)] = document[_0x52bc36(0x21a)]('img')),
      (this[_0x52bc36(0x216)][_0x52bc36(0x20c)] =
        _0x52bc36(0x20e) +
        (_0x8df160[_0x52bc36(0x1f3)]
          ? '\x22' + _0x8df160[_0x52bc36(0x1f3)] + '\x22'
          : _0x52bc36(0x1a2)) +
        _0x52bc36(0x1fc));
    if (
      window[_0x52bc36(0x1f4)][_0x52bc36(0x227)][_0x52bc36(0x21e)](
        _0x52bc36(0x212),
      )
    ) {
      (this[_0x52bc36(0x216)][_0x52bc36(0x1c0)]['src'] = _0x52bc36(0x1d8)),
        (this[_0x52bc36(0x216)]['isClicked'][_0x52bc36(0x1d1)][
          _0x52bc36(0x187)
        ] = _0x52bc36(0x1d9)),
        (this[_0x52bc36(0x216)][_0x52bc36(0x1ee)][_0x52bc36(0x1a9)] =
          _0x52bc36(0x1d8)),
        (this['icons'][_0x52bc36(0x1ee)][_0x52bc36(0x1d1)][_0x52bc36(0x187)] =
          _0x52bc36(0x1d9));
      return;
    }
    _0x8df160['bot_avatar_url']
      ? ((this[_0x52bc36(0x216)][_0x52bc36(0x1c0)][_0x52bc36(0x1a9)] =
          _0x8df160[_0x52bc36(0x1d4)]),
        (this[_0x52bc36(0x216)][_0x52bc36(0x1c0)][_0x52bc36(0x1d1)][
          _0x52bc36(0x1c8)
        ] = _0x52bc36(0x1c6)),
        (this[_0x52bc36(0x216)][_0x52bc36(0x1ee)][_0x52bc36(0x1a9)] =
          _0x8df160[_0x52bc36(0x1d4)]),
        (this[_0x52bc36(0x216)]['isNotClicked'][_0x52bc36(0x1d1)][
          _0x52bc36(0x1c8)
        ] = '25px'))
      : ((this[_0x52bc36(0x216)]['isClicked'][_0x52bc36(0x1a9)] =
          _0x52bc36(0x184)),
        (this['icons'][_0x52bc36(0x1ee)]['src'] =
          'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg'));
  }
  [_0xdfc8c5(0x172)](_0x862236) {
    const _0x14bfb7 = _0xdfc8c5,
      {
        theme: _0x37c9f3,
        chat_bubble_button_color: _0x1ffdb5,
        align_chat_bubble_button: _0x56d486,
        chat_message_color: _0x4c83b8,
        suggest_messages: _0x10eae8,
      } = _0x862236,
      _0x353f36 = _0x14bfb7(0x18c),
      _0x22ec5c = _0x14bfb7(0x17d),
      _0x43d0f3 = window[_0x14bfb7(0x1f4)][_0x14bfb7(0x227)][_0x14bfb7(0x21e)](
        _0x14bfb7(0x212),
      )
        ? _0x22ec5c
        : _0x353f36,
      _0x102f38 = {
        chatButtonAlignment: _0x56d486 ?? _0x14bfb7(0x206),
        chatBoxAlignment: _0x56d486 ?? 'right',
        chatButtonDirection:
          _0x56d486 === _0x14bfb7(0x1bc) ? _0x14bfb7(0x206) : _0x14bfb7(0x1bc),
        chatButtonColor: _0x1ffdb5 ?? _0x14bfb7(0x185),
        chatBoxBackgroundColor:
          _0x37c9f3 === 'dark' ? _0x14bfb7(0x1b6) : _0x14bfb7(0x185),
        chatInputBorderColor:
          _0x37c9f3 === _0x14bfb7(0x1f2) ? _0x14bfb7(0x19a) : _0x14bfb7(0x1c2),
        chatBoxHeaderBorderColor:
          _0x37c9f3 === _0x14bfb7(0x1f2) ? _0x14bfb7(0x19a) : _0x14bfb7(0x1c2),
        chatInputColor:
          _0x37c9f3 === _0x14bfb7(0x1f2) ? _0x14bfb7(0x185) : _0x14bfb7(0x225),
        chatBoxDisplayNameColor:
          _0x37c9f3 === _0x14bfb7(0x1f2) ? _0x14bfb7(0x185) : _0x14bfb7(0x1d3),
        messageItemOperatorBackgroundColor: _0x4c83b8 ?? _0x14bfb7(0x19c),
        suggestedMessagesHeight: _0x10eae8?.[_0x14bfb7(0x215)]
          ? '60px'
          : _0x14bfb7(0x1cf),
      },
      _0x24ccaa = document[_0x14bfb7(0x21a)]('style');
    (_0x24ccaa['textContent'] = _0x43d0f3['replace'](
      /{{([^}]+)}}/g,
      (_0x32c71d, _0x5cdeaf) => _0x102f38[_0x5cdeaf],
    )),
      document[_0x14bfb7(0x1d2)][_0x14bfb7(0x183)](_0x24ccaa);
  }
  [_0xdfc8c5(0x178)](_0x4d51bd) {
    return new Promise((_0x5155c2) => setTimeout(_0x5155c2, _0x4d51bd));
  }
  async [_0xdfc8c5(0x1e7)](_0x385321) {
    const _0x10d74f = _0xdfc8c5;
    let _0x14c6f6 = _0x385321[_0x10d74f(0x22b)](_0x10d74f(0x1b9)),
      _0x5717b6 = _0x14c6f6[_0x10d74f(0x1dd)];
    if (!!this['loading']) return;
    _0x14c6f6['value'] = '';
    if (_0x5717b6 === '') return;
    this[_0x10d74f(0x1d5)] = !![];
    const { message_suggest: _0x40f9bf, formCollect: _0x1878c0 } = this['args'];
    (_0x40f9bf[_0x10d74f(0x1d1)][_0x10d74f(0x1c5)] = _0x10d74f(0x19b)),
      (_0x1878c0[_0x10d74f(0x1d1)][_0x10d74f(0x1c5)] = _0x10d74f(0x213)),
      this['history']['push']([
        { sender_type: 'user', content: _0x5717b6 },
        { sender_type: _0x10d74f(0x210), content: '' },
      ]),
      this[_0x10d74f(0x1ea)]();
    let _0x29278d = new Headers();
    _0x29278d[_0x10d74f(0x183)](_0x10d74f(0x19f), _0x10d74f(0x20b));
    const _0x2d88a5 = {
      method: _0x10d74f(0x1e3),
      headers: _0x29278d,
      body: JSON['stringify']({
        message: _0x5717b6,
        session_id: this[_0x10d74f(0x180)],
        ...window[_0x10d74f(0x21f)],
      }),
    };
    try {
      const _0x567ca = await fetch(this[_0x10d74f(0x1bf)], _0x2d88a5);
      if (!_0x567ca['ok'])
        throw new Error(_0x10d74f(0x209) + _0x567ca[_0x10d74f(0x1f5)]);
      const _0x372104 = await _0x567ca[_0x10d74f(0x198)],
        _0x46184c = _0x372104[_0x10d74f(0x1cd)]();
      for await (const _0x541511 of this[_0x10d74f(0x1b8)](_0x46184c)) {
      }
    } catch (_0x44f1ad) {
      (this[_0x10d74f(0x1d5)] = ![]),
        console[_0x10d74f(0x1be)](_0x10d74f(0x190), _0x44f1ad),
        (_0x14c6f6[_0x10d74f(0x1dd)] = '');
    }
  }
  ['isEmptyObject'](_0x161f77) {
    const _0x3d29aa = _0xdfc8c5;
    for (var _0x1df269 in _0x161f77) {
      if (_0x161f77[_0x3d29aa(0x193)](_0x1df269)) return ![];
    }
    return !![];
  }
  [_0xdfc8c5(0x221)]() {
    const _0x3e2d0b = _0xdfc8c5,
      _0x344554 = document[_0x3e2d0b(0x22b)]('.chatbox__messages');
    _0x344554[_0x3e2d0b(0x1f6)] = _0x344554[_0x3e2d0b(0x1b0)];
  }
  async *[_0xdfc8c5(0x1b8)](_0x1441c3) {
    const _0x4b6a06 = _0xdfc8c5,
      _0x5b981f = localStorage[_0x4b6a06(0x200)](_0x4b6a06(0x199)),
      _0x339351 = localStorage[_0x4b6a06(0x200)](_0x4b6a06(0x219)),
      { numberShowing: _0xcc4468, ..._0x20725c } = this[_0x4b6a06(0x1ba)],
      _0x84569a = new TextDecoder();
    while (!![]) {
      const { done: _0x521afb, value: _0x68283 } =
        await _0x1441c3[_0x4b6a06(0x1a1)]();
      if (_0x521afb) {
        const { message_suggest: _0x47f4e3, formCollect: _0x527b54 } =
          this['args'];
        this['history'][_0x4b6a06(0x215)] >= _0xcc4468 &&
        !_0x5b981f &&
        !_0x339351 &&
        !this[_0x4b6a06(0x1c9)](_0x20725c)
          ? (this[_0x4b6a06(0x1a4)](), this['showForm']())
          : ((_0x47f4e3[_0x4b6a06(0x1d1)]['display'] = 'flex'),
            (_0x527b54[_0x4b6a06(0x1d1)][_0x4b6a06(0x1c5)] = _0x4b6a06(0x213)));
        this[_0x4b6a06(0x1d5)] = ![];
        return;
      }
      const _0x2e33c7 = _0x84569a[_0x4b6a06(0x17a)](_0x68283);
      await this[_0x4b6a06(0x178)](0x32),
        (this[_0x4b6a06(0x223)][_0x4b6a06(0x1fe)](-0x1)[0x0][0x1]['content'] +=
          _0x2e33c7),
        await this['updateChatBox'](),
        this[_0x4b6a06(0x221)]();
    }
  }
  async [_0xdfc8c5(0x1ea)]() {
    const _0x139ddc = _0xdfc8c5;
    let _0x21c7ac = document['querySelector'](_0x139ddc(0x1bd)),
      _0x45e1c5 = '';
    this['history'][_0x139ddc(0x1e0)]((_0x2159f1, _0x333fd7) => {
      const _0x432e6d = _0x139ddc;
      !(
        _0x2159f1[0x0][_0x432e6d(0x1dc)] == _0x432e6d(0x20a) &&
        !_0x2159f1[0x0][_0x432e6d(0x1de)]
      ) &&
        (_0x45e1c5 +=
          '<div\x20class=\x22messages__item\x20messages__item--operator\x22>' +
          _0x2159f1[0x0][_0x432e6d(0x1de)] +
          '</div>');
      if (
        _0x2159f1[0x1][_0x432e6d(0x1dc)] == _0x432e6d(0x210) &&
        _0x2159f1[0x1][_0x432e6d(0x1de)]
      )
        _0x45e1c5 +=
          _0x432e6d(0x18f) +
          _0x2159f1[0x1][_0x432e6d(0x1de)] +
          _0x432e6d(0x1ce);
      else _0x45e1c5 += _0x432e6d(0x1b3);
    }),
      (_0x21c7ac[_0x139ddc(0x1c4)] =
        _0x139ddc(0x22a) + _0x45e1c5 + _0x139ddc(0x1ce)),
      this[_0x139ddc(0x221)]();
  }
  ['closeChatBox']() {
    const _0x3d20f8 = _0xdfc8c5,
      { chatbox: _0x5b7489 } = this[_0x3d20f8(0x18a)];
    (_0x5b7489[_0x3d20f8(0x1d1)][_0x3d20f8(0x1c5)] = _0x3d20f8(0x213)),
      (_0x5b7489[_0x3d20f8(0x1d1)][_0x3d20f8(0x1f7)] = '0');
  }
  [_0xdfc8c5(0x1a7)]() {
    const _0x4ec030 = _0xdfc8c5;
    (this[_0x4ec030(0x223)] = []),
      (this[_0x4ec030(0x180)] = this[_0x4ec030(0x1a3)]()),
      this[_0x4ec030(0x1ea)]();
  }
  [_0xdfc8c5(0x1b5)](_0x404a79) {
    const _0x55d5e3 = _0xdfc8c5;
    (this[_0x55d5e3(0x1ef)] = !this[_0x55d5e3(0x1ef)]),
      this[_0x55d5e3(0x188)](
        _0x404a79,
        this[_0x55d5e3(0x18a)][_0x55d5e3(0x165)],
      );
  }
  ['showOrHideChatBox'](_0x2545c2, _0x2b65fc) {
    const _0x31d395 = _0xdfc8c5;
    _0x2545c2[_0x31d395(0x1d1)][_0x31d395(0x1c5)] === _0x31d395(0x213)
      ? this[_0x31d395(0x179)]()
      : this[_0x31d395(0x18b)]();
    if (this[_0x31d395(0x1ef)])
      _0x2545c2[_0x31d395(0x1ae)][_0x31d395(0x16e)]('chatbox--active'),
        this['toggleIcon'](!![], _0x2b65fc);
    else !this[_0x31d395(0x1ef)] && this[_0x31d395(0x196)](![], _0x2b65fc);
  }
  ['toggleIcon'](_0x373051, _0xf53fc3) {
    const _0x5cabdd = _0xdfc8c5,
      { isClicked: _0x95a888, isNotClicked: _0x45efd8 } = this['icons'],
      _0x3451eb = document[_0x5cabdd(0x22b)](_0x5cabdd(0x1bb));
    _0x3451eb[_0x5cabdd(0x1ab)](_0x5cabdd(0x16b), () =>
      this[_0x5cabdd(0x18b)](),
    );
    const _0x198b5f = document['querySelector'](_0x5cabdd(0x1ed));
    _0x198b5f[_0x5cabdd(0x1ab)](_0x5cabdd(0x16b), () =>
      this[_0x5cabdd(0x1a7)](),
    );
    const _0x378ef9 = _0xf53fc3['firstElementChild'],
      _0xc7081b = _0x378ef9[_0x5cabdd(0x173)];
    _0x378ef9[_0x5cabdd(0x20d)](_0x373051 ? _0x95a888 : _0x45efd8, _0xc7081b);
  }
}
(document[_0xdfc8c5(0x198)] = document[_0xdfc8c5(0x21a)]('body')),
  (document[_0xdfc8c5(0x1d2)][_0xdfc8c5(0x1c4)] += _0xdfc8c5(0x170));
function _0x5d49(_0x3ffee6, _0x5e4be8) {
  const _0x21e09d = _0x21e0();
  return (
    (_0x5d49 = function (_0x5d49b9, _0xceee8b) {
      _0x5d49b9 = _0x5d49b9 - 0x165;
      let _0x25a28f = _0x21e09d[_0x5d49b9];
      return _0x25a28f;
    }),
    _0x5d49(_0x3ffee6, _0x5e4be8)
  );
}
const elemDiv =
  _0xdfc8c5(0x191) +
  (!window[_0xdfc8c5(0x1f4)][_0xdfc8c5(0x227)][_0xdfc8c5(0x21e)](
    _0xdfc8c5(0x212),
  )
    ? _0xdfc8c5(0x19e)
    : '') +
  _0xdfc8c5(0x1a6);
function _0x21e0() {
  const _0x40f37b = [
    'target',
    'slice',
    'name',
    'getItem',
    'chatbot__suggest--item',
    'collect-form',
    'email',
    'textContent',
    'showMessageText',
    'right',
    'translateY(0)',
    'https://backend.dev.chatfly.co/api',
    'Request\x20failed\x20with\x20status:\x20',
    'user',
    'application/json',
    'iconSend',
    'replaceChild',
    '<svg\x20fill=',
    'setItem',
    'assistant',
    '/bot/information/collect-customer-info',
    'chatfly',
    'none',
    'getBotWidgetSettingUrl',
    'length',
    'icons',
    '<button\x20class=\x22submit_button\x22\x20type=\x22submit\x22>',
    '/bot/bot-widget-setting',
    'closeFormCollectUser',
    'createElement',
    'updateSuggestedMessages',
    'getInfoCollectUser',
    'getTime',
    'includes',
    'chatbotConfig',
    'showBubleWhenGetStyleSuccess',
    'scrollToBottom',
    'random',
    'history',
    'Request\x20failed\x20swith\x20status:\x20',
    '#inherit',
    '.bot_avatar',
    'origin',
    '</button>',
    '18683008luIBNS',
    '<div>',
    'querySelector',
    'undefined',
    'openButton',
    'toString',
    '134080rIXQNJ',
    'stringify',
    'querySelectorAll',
    '1797736tCJCxA',
    'click',
    'visibility',
    'floor',
    'add',
    'block',
    '\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<style>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20::-webkit-scrollbar\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20width:\x2020px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20background-color:\x20transparent;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20background-color:\x20#d6dee1;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border-radius:\x2020px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20background-clip:\x20content-box;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20background-color:\x20#a8bbbf;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.init_message{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border-radius:\x2020px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20padding:\x2010px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20background-color:\x20white;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20margin-bottom:\x2010px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20@media\x20only\x20screen\x20and\x20(max-width:\x201024px)\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.chatbox__support\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20width:\x20350px\x20!important;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20height:\x2070vh\x20!important;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.chatbox\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20right:\x205px\x20!important;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20#collect-form\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20display:\x20none;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20margin:\x2010px\x205px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20max-width:\x2080%;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20padding:\x2010px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20background-color:\x20#f9f9f9;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20position:\x20relative;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border-radius:\x2010px;\x20\x20\x0a\x0a\x20\x0a\x0a\x20\x20\x20\x20transition:\x20transform\x200.5s\x20ease-in-out;\x20\x0a\x0a\x20\x0a\x0a\x20\x20\x20\x20transform:\x20translateX(200%);\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.intrucstion_title{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20padding-top:\x2010px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20padding-bottom:\x205px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20label\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20display:\x20block;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20margin-bottom:\x205px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20text-transform:\x20capitalize;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20input[type=\x22text\x22],\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20input[type=\x22email\x22]\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20width:\x20100%;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20padding:\x203px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20margin-bottom:\x2010px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ccc;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border-radius:\x204px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.submit_action\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20display:\x20flex;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20justify-content:\x20flex-end;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.submit_button\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20padding:\x205px\x2010px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20cursor:\x20pointer;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20background-color:\x20#000;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border-radius:\x204px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.close-button-form\x20{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20position:\x20absolute;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20top:\x205px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20right:\x2010px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border:\x20none;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20border-radius:\x2050%;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20width:\x2020px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20height:\x2020px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20font-size:\x2014px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20line-height:\x2018px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20text-align:\x20center;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20cursor:\x20pointer;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.powered_chatfly{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20height:20px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20white-space:\x20nowrap;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20text-align:\x20center;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20font-size:\x2012px;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x0a\x0a\x20\x20\x20\x20.chatbot__suggest{\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.5s\x20ease-in-out;\x20\x0a\x0a\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(0);\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20.chatbox__messages{\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20scroll-behavior:\x20smooth;\x20\x0a\x0a\x20\x20\x20\x20\x20}\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.input_message{\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-size-adjust:\x20none;\x20\x20\x0a\x0a\x20\x20\x20\x20}\x20\x20\x0a\x0a\x20\x0a\x0a\x20\x20\x20\x20.chatbox__support\x20{\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px\x20!important;\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Roboto\x27,\x20sans-serif;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200\x20;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.5s\x20ease;\x20\x0a\x0a\x20\x20\x20\x20}\x20\x0a\x0a\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.chatbox__button\x20{\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200\x20;\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.5s\x20ease-in-out;\x20\x0a\x0a\x20\x20\x20\x20}\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20</style>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20',
    '?bot_id=',
    'setStyle',
    'firstElementChild',
    'container-form',
    'push',
    '.chatbot',
    'json',
    'sleep',
    'showChat',
    'decode',
    'appendChild',
    'input-form',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{white-space:pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{background:#fff;height:70vh;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{white-space:pre-wrap;border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1.2rem}.chatbot__suggest--item{font-size:\x2012px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{background:white;position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header_action{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#4AC1FF;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    'fetchUserCollectInfor',
    '/chat/get-streaming-response',
    'session_id',
    'preventDefault',
    'className',
    'append',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    '#fff',
    '647878AeiqVM',
    'width',
    'showOrHideChatBox',
    '.chatbox__send--footer',
    'args',
    'hideChat',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;height:100%}.messages__item{width:fit-content;}.messages__item--visitor{white-space:\x20pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{background:{{chatBoxBackgroundColor}};height:70vh;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:0px\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:12px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{background:white;position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:0px\x2010px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.icon_header_action{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    '.chatbot__suggest',
    'chatStyle',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'Error:',
    '\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20</div>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20</div>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<form\x20id=\x22collect-form\x22></form>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20</div>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<input\x20class=\x22input_message\x22\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20</div>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22powered_chatfly\x22>',
    'baseUrl',
    'hasOwnProperty',
    'updateChatIcons',
    'updateHeader',
    'toggleIcon',
    'bot_id',
    'body',
    'isSubmitCollectForm',
    '#cdceed',
    'flex',
    '#3399FF',
    '#collect-form',
    'Powered\x20By\x20<strong><a\x20href=\x27https://chatfly.co\x27>ChatFly.co</a></strong>',
    'Content-Type',
    '2844385pWRooM',
    'read',
    '#000000',
    'generateUUID',
    'hideMessageSuggest',
    'syncInfoCollectUser',
    '</div>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20</div>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20</div>\x20\x20\x0a\x0a\x20\x20\x20\x20</div>\x20\x20\x0a\x0a\x20\x20\x20\x20</div>\x20\x20\x0a\x0a\x20\x20\x20\x20',
    'refreshHistory',
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    'src',
    'getElementById',
    'addEventListener',
    '.chatbot__header',
    'display_name',
    'classList',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    'scrollHeight',
    '<div\x20class=\x22icon_header_action\x22>',
    '24encWUi',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20</div>',
    '/chat/submit-information',
    'toggleState',
    '#111827',
    'sendInfoCollectUser',
    'asyncGenerator',
    '.input_message',
    'responseCollectUser',
    '.close__button',
    'left',
    '.chatbox__messages',
    'error',
    'getStreamingResponseUrl',
    'isClicked',
    'bot_avatar',
    '#0000004a',
    'input',
    'innerHTML',
    'display',
    '25px',
    '.submit_button',
    'height',
    'isEmptyObject',
    'now',
    'intrucstion_title',
    'hidden',
    'getReader',
    '</div>',
    '0px',
    'replace',
    'style',
    'head',
    'inherit',
    'bot_avatar_url',
    'loading',
    'syncChatWidgetStyling',
    '.chatbox__support',
    'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png',
    '80px',
    'transform',
    'text',
    'sender_type',
    'value',
    'content',
    'GET',
    'forEach',
    'button',
    'type',
    'POST',
    'div',
    'close-button-form',
    '.input-form',
    'onSendButton',
    'submit_action',
    '<svg\x20fill=\x22#ffff\x22\x20width=\x2215\x22\x20height=\x2215\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
    'updateChatBox',
    'translateX(0)',
    'img',
    '.refresh__button',
    'isNotClicked',
    'state',
    '5071332kbJYKp',
    '5070060IsyguA',
    'dark',
    'chat_message_color',
    'location',
    'status',
    'scrollTop',
    'opacity',
    'required',
    'Let\x20us\x20know\x20how\x20to\x20contact\x20you',
    'updateInitMessage',
    'translateX(200%)',
    '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>',
  ];
  _0x21e0 = function () {
    return _0x40f37b;
  };
  return _0x21e0();
}
document[_0xdfc8c5(0x198)][_0xdfc8c5(0x1c4)] += elemDiv;
const chatbox = new InteractiveChatbox();
chatbox[_0xdfc8c5(0x1c5)]();
