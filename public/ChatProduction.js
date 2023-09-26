const _0x5f42e5 = _0x2ed7;
(function (_0x39dcdf, _0x5c1101) {
  const _0x3a44d0 = _0x2ed7,
    _0x292b38 = _0x39dcdf();
  while (!![]) {
    try {
      const _0x297234 =
        -parseInt(_0x3a44d0(0xe4)) / 0x1 +
        parseInt(_0x3a44d0(0x11e)) / 0x2 +
        parseInt(_0x3a44d0(0x10f)) / 0x3 +
        (parseInt(_0x3a44d0(0x144)) / 0x4) *
          (-parseInt(_0x3a44d0(0x13a)) / 0x5) +
        -parseInt(_0x3a44d0(0x129)) / 0x6 +
        parseInt(_0x3a44d0(0x131)) / 0x7 +
        (parseInt(_0x3a44d0(0xde)) / 0x8) * (parseInt(_0x3a44d0(0x152)) / 0x9);
      if (_0x297234 === _0x5c1101) break;
      else _0x292b38['push'](_0x292b38['shift']());
    } catch (_0x2db2ae) {
      _0x292b38['push'](_0x292b38['shift']());
    }
  }
})(_0x29d2, 0x2f22d);
function _0x2ed7(_0x4345e3, _0x466b54) {
  const _0x29d290 = _0x29d2();
  return (
    (_0x2ed7 = function (_0x2ed73a, _0x81548d) {
      _0x2ed73a = _0x2ed73a - 0xca;
      let _0x4a0b21 = _0x29d290[_0x2ed73a];
      return _0x4a0b21;
    }),
    _0x2ed7(_0x4345e3, _0x466b54)
  );
}
class InteractiveChatbox {
  constructor() {
    const _0x52b874 = _0x2ed7;
    (this['baseUrl'] = _0x52b874(0x146)),
      (this[_0x52b874(0x100)] = this[_0x52b874(0xec)] + _0x52b874(0xee)),
      (this[_0x52b874(0xd1)] = this[_0x52b874(0xec)] + _0x52b874(0x10c)),
      (this[_0x52b874(0x137)] = {
        openButton: document[_0x52b874(0xdf)](_0x52b874(0x110)),
        chatbox: document[_0x52b874(0xdf)](_0x52b874(0xcb)),
        sendButton: document[_0x52b874(0xdf)](_0x52b874(0xd4)),
        header: document[_0x52b874(0xdf)](_0x52b874(0xe2)),
        message_suggest: document[_0x52b874(0xdf)](_0x52b874(0x11f)),
        chatFlyContainer: document['querySelector'](_0x52b874(0x14b)),
      }),
      (this[_0x52b874(0xd9)] = {
        isClicked: undefined,
        isNotClicked: undefined,
        iconSend: undefined,
        iconClose: _0x52b874(0xfe),
        iconRefresh: _0x52b874(0xdd),
      }),
      (this[_0x52b874(0xf2)] = ![]),
      (this['history'] = []),
      (this['session_id'] = this[_0x52b874(0xf7)]()),
      (this[_0x52b874(0x134)] = ![]);
  }
  [_0x5f42e5(0xf7)]() {
    const _0x3e41b7 = _0x5f42e5;
    var _0x206ea2 = new Date()[_0x3e41b7(0x12d)](),
      _0x1c2258 =
        (typeof performance !== 'undefined' &&
          performance[_0x3e41b7(0x136)] &&
          performance['now']() * 0x3e8) ||
        0x0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[_0x3e41b7(0x154)](
      /[xy]/g,
      function (_0x14f37a) {
        const _0x75342d = _0x3e41b7;
        var _0x563335 = Math[_0x75342d(0xe0)]() * 0x10;
        return (
          _0x206ea2 > 0x0
            ? ((_0x563335 = (_0x206ea2 + _0x563335) % 0x10 | 0x0),
              (_0x206ea2 = Math['floor'](_0x206ea2 / 0x10)))
            : ((_0x563335 = (_0x1c2258 + _0x563335) % 0x10 | 0x0),
              (_0x1c2258 = Math[_0x75342d(0xd2)](_0x1c2258 / 0x10))),
          (_0x14f37a === 'x' ? _0x563335 : (_0x563335 & 0x3) | 0x8)[
            _0x75342d(0x10a)
          ](0x10)
        );
      },
    );
  }
  async [_0x5f42e5(0xd7)]() {
    const _0x1e630c = _0x5f42e5,
      {
        openButton: _0x262b82,
        chatbox: _0x1ff340,
        sendButton: _0x422f4f,
      } = this['args'];
    await this[_0x1e630c(0x14a)](_0x1ff340);
    const { iconSend: _0x3761ed } = this['icons'];
    this[_0x1e630c(0xfc)](![], _0x262b82), this[_0x1e630c(0xcc)](_0x1ff340);
    window['location'][_0x1e630c(0x117)]['includes'](_0x1e630c(0xf3)) &&
      this[_0x1e630c(0xcc)](_0x1ff340);
    _0x262b82[_0x1e630c(0x11a)](_0x1e630c(0x112), () =>
      this[_0x1e630c(0xcc)](_0x1ff340),
    ),
      _0x422f4f[_0x1e630c(0x11a)](_0x1e630c(0x112), () =>
        this['onSendButton'](_0x1ff340),
      ),
      (_0x422f4f[_0x1e630c(0x119)] =
        _0x1e630c(0x128) + _0x3761ed + _0x1e630c(0x135));
    const _0x421373 = _0x1ff340[_0x1e630c(0xdf)](_0x1e630c(0xd5));
    _0x421373[_0x1e630c(0x11a)](_0x1e630c(0xce), ({ key: _0x45bc15 }) => {
      const _0x5d7256 = _0x1e630c;
      _0x45bc15 === 'Enter' && this[_0x5d7256(0x121)](_0x1ff340);
    });
  }
  [_0x5f42e5(0x102)]() {
    const _0x23a9b8 = _0x5f42e5,
      { openButton: _0x216eca, chatbox: _0x387ba0 } = this['args'];
    (_0x216eca['style'][_0x23a9b8(0xd7)] = _0x23a9b8(0x13e)),
      (_0x387ba0[_0x23a9b8(0xe3)]['display'] = _0x23a9b8(0x13e)),
      (_0x387ba0[_0x23a9b8(0xe3)]['visibility'] = _0x23a9b8(0xe5)),
      (_0x216eca['style'][_0x23a9b8(0x122)] = _0x23a9b8(0xe5));
  }
  async [_0x5f42e5(0x14a)](_0x5451a6) {
    const _0x2e1f67 = _0x5f42e5;
    let _0x3b458f = new Headers();
    _0x3b458f[_0x2e1f67(0x10e)](_0x2e1f67(0x11c), _0x2e1f67(0x143));
    const _0x222b0f = { method: _0x2e1f67(0x12a), headers: _0x3b458f };
    try {
      const _0x5dc936 = await fetch(
          this[_0x2e1f67(0xd1)] +
            _0x2e1f67(0x13b) +
            window[_0x2e1f67(0x130)][_0x2e1f67(0x14e)],
          _0x222b0f,
        ),
        { openButton: _0x36d3ce, chatbox: _0x2946dc } = this[_0x2e1f67(0x137)];
      if (!_0x5dc936['ok']) {
        (_0x36d3ce['style'][_0x2e1f67(0xd7)] = _0x2e1f67(0xdc)),
          (_0x2946dc[_0x2e1f67(0xe3)][_0x2e1f67(0xd7)] = _0x2e1f67(0xdc));
        throw new Error(_0x2e1f67(0xdb) + _0x5dc936[_0x2e1f67(0x12c)]);
      }
      this['showChatWhenGetStyleSuccess']();
      const _0x3b9980 = await _0x5dc936[_0x2e1f67(0x159)]();
      this[_0x2e1f67(0x150)](_0x3b9980),
        this[_0x2e1f67(0x106)](_0x3b9980),
        await this[_0x2e1f67(0xf6)](_0x3b9980),
        await this[_0x2e1f67(0xf8)](_0x3b9980);
      const _0x3b3da4 = document[_0x2e1f67(0xfa)]('.chatbot__suggest--item');
      _0x3b3da4[_0x2e1f67(0x120)]((_0x386289) => {
        const _0x559712 = _0x2e1f67;
        _0x386289?.[_0x559712(0x11a)]('click', (_0x4e95ac) =>
          this[_0x559712(0x149)](_0x4e95ac, _0x2946dc),
        );
      }),
        this[_0x2e1f67(0x132)](_0x3b9980);
    } catch (_0x20aa0f) {
      console[_0x2e1f67(0x13f)](_0x2e1f67(0x11d), _0x20aa0f);
    }
  }
  [_0x5f42e5(0x106)](_0x50f102) {
    const _0x5cbcf8 = _0x5f42e5,
      { initial_message: _0x5e0dc9 } = _0x50f102;
    _0x5e0dc9 &&
      (this[_0x5cbcf8(0x10b)]['push']([
        { sender_type: _0x5cbcf8(0x147), content: '' },
        { sender_type: _0x5cbcf8(0x101), content: _0x5e0dc9 },
      ]),
      this[_0x5cbcf8(0xed)]());
  }
  ['updateHeader'](_0x899d44) {
    const _0x48f1cc = _0x5f42e5,
      { header: _0x4a1dbd } = this[_0x48f1cc(0x137)],
      { iconRefresh: _0x5bca99, iconClose: _0x490b12 } = this[_0x48f1cc(0xd9)],
      _0x448401 = document[_0x48f1cc(0xff)](_0x48f1cc(0x123));
    _0x448401[_0x48f1cc(0xeb)] = _0x48f1cc(0x13c);
    if (_0x899d44[_0x48f1cc(0xd0)]) {
      const _0x1780aa = document[_0x48f1cc(0xff)](_0x48f1cc(0xe7));
      (_0x1780aa[_0x48f1cc(0x104)] = _0x899d44['bot_avatar_url']),
        (_0x1780aa[_0x48f1cc(0xeb)] = _0x48f1cc(0x158)),
        _0x448401[_0x48f1cc(0xca)](_0x1780aa);
    }
    _0x899d44['display_name'] &&
      (_0x448401[_0x48f1cc(0x119)] += _0x899d44['display_name']),
      _0x4a1dbd[_0x48f1cc(0xca)](_0x448401),
      (_0x4a1dbd['innerHTML'] +=
        _0x48f1cc(0x114) + _0x5bca99 + _0x490b12 + _0x48f1cc(0x135));
  }
  ['showMessageText'](_0x506562, _0x5609ac) {
    const _0x4f05e4 = _0x5f42e5,
      _0x635808 = _0x506562[_0x4f05e4(0x138)]['textContent'];
    let _0x5bb129 = _0x5609ac['querySelector'](_0x4f05e4(0xd5));
    (_0x5bb129[_0x4f05e4(0xd3)] = _0x635808), this[_0x4f05e4(0x121)](_0x5609ac);
  }
  [_0x5f42e5(0xf8)](_0x488cad) {
    const _0x4c337f = _0x5f42e5,
      { suggest_messages: _0x43a1e4 } = _0x488cad,
      { message_suggest: _0x1c6eb1 } = this[_0x4c337f(0x137)];
    (_0x43a1e4 ?? [])['forEach']((_0x1d4026) => {
      const _0x20c939 = _0x4c337f,
        _0x50bc3d = document[_0x20c939(0xff)]('div');
      (_0x50bc3d[_0x20c939(0xeb)] = _0x20c939(0x11b)),
        (_0x50bc3d[_0x20c939(0xef)] = _0x1d4026),
        _0x1c6eb1[_0x20c939(0xca)](_0x50bc3d);
    });
  }
  async [_0x5f42e5(0xf6)](_0x154a19) {
    const _0x567b93 = _0x5f42e5;
    (this[_0x567b93(0xd9)][_0x567b93(0xf9)] = document['createElement'](
      _0x567b93(0xe7),
    )),
      (this[_0x567b93(0xd9)][_0x567b93(0x12f)] = document[_0x567b93(0xff)](
        _0x567b93(0xe7),
      )),
      (this[_0x567b93(0xd9)][_0x567b93(0x103)] =
        _0x567b93(0xf1) +
        (_0x154a19[_0x567b93(0xe1)]
          ? '\x22' + _0x154a19[_0x567b93(0xe1)] + '\x22'
          : _0x567b93(0x14d)) +
        '\x20width=\x2222\x22\x20height=\x2222\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20256\x20256\x22><rect\x20width=\x2222\x22\x20height=\x2222\x22\x20fill=\x22none\x22/><path\x20d=\x22M223.4,114,54.9,19.7a16.3,16.3,0,0,0-18.2,1.2,15.9,15.9,0,0,0-5.1,17.9l28.1,78.5a4.1,4.1,0,0,0,3.8,2.7h72.2a8.2,8.2,0,0,1,8.3,7.5,8,8,0,0,1-8,8.5H63.5a4.1,4.1,0,0,0-3.8,2.7L31.6,217.2a16.1,16.1,0,0,0,15.1,21.4,16.5,16.5,0,0,0,7.8-2L223.4,142a16.1,16.1,0,0,0,0-28Z\x22/></svg>');
    if (window[_0x567b93(0xe8)]['origin'][_0x567b93(0x109)](_0x567b93(0xf3))) {
      (this[_0x567b93(0xd9)]['isClicked'][_0x567b93(0x104)] = _0x567b93(0x151)),
        (this['icons'][_0x567b93(0xf9)]['style'][_0x567b93(0xda)] =
          _0x567b93(0x140)),
        (this[_0x567b93(0xd9)][_0x567b93(0x12f)][_0x567b93(0x104)] =
          _0x567b93(0x151)),
        (this[_0x567b93(0xd9)][_0x567b93(0x12f)]['style'][_0x567b93(0xda)] =
          '80px');
      return;
    }
    _0x154a19[_0x567b93(0x145)]
      ? ((this[_0x567b93(0xd9)]['isClicked'][_0x567b93(0x104)] =
          _0x154a19[_0x567b93(0x145)]),
        (this[_0x567b93(0xd9)][_0x567b93(0x12f)][_0x567b93(0x104)] =
          _0x154a19['chat_icon_url']))
      : ((this['icons'][_0x567b93(0xf9)]['src'] = _0x567b93(0x15a)),
        (this[_0x567b93(0xd9)][_0x567b93(0x12f)][_0x567b93(0x104)] =
          _0x567b93(0x15a)));
  }
  [_0x5f42e5(0x150)](_0x102ae9) {
    const _0x55a291 = _0x5f42e5,
      {
        theme: _0xb3fb25,
        chat_bubble_button_color: _0x40a94a,
        align_chat_bubble_button: _0x26cb62,
        chat_message_color: _0x2514c9,
        suggest_messages: _0x48140d,
      } = _0x102ae9,
      _0x44ef55 =
        '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-radius:10px;background:#EDEDED}.chatbox{position:fixed;z-index:100000;bottom:30px;{{chatBoxAlignment}}:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:{{chatButtonAlignment}}}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:20px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;}.messages__item--visitor{white-space:\x20pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:{{chatBoxBackgroundColor}};height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:20px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.messages__item--operator{margin-left:auto;background:{{messageItemOperatorBackgroundColor}};color:#fff}.chatbot__suggest{overflow-y:hidden;margin:10px\x2010px\x200\x2010px;white-space:\x20nowrap;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1rem}.chatbot__suggest--item{font-size:12px;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:10px;align-items:center;background:#EDEDED}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20{{chatInputBorderColor}};border-radius:5px;}.chatbox__footer\x20input{background-color:\x20inherit;color:\x20{{chatInputColor}}}.chatbot__header{color:{{chatBoxDisplayNameColor}};height:65px;border-bottom:1px\x20solid\x20{{chatBoxHeaderBorderColor}};padding-top:5px;margin:0\x2020px;text-align:center;align-items:center;display:flex;justify-content:space-between}.bot_avatar{height:25px;width:25px;object-fit:\x20cover}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:{{chatButtonColor}};border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-{{chatButtonDirection}}-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
      _0x208469 = _0x55a291(0x125),
      _0x2269fd = window['location'][_0x55a291(0x117)][_0x55a291(0x109)](
        _0x55a291(0xf3),
      )
        ? _0x208469
        : _0x44ef55,
      _0x2bbb4f = {
        chatButtonAlignment: _0x26cb62 ?? _0x55a291(0x12e),
        chatBoxAlignment: _0x26cb62 ?? 'right',
        chatButtonDirection:
          _0x26cb62 === _0x55a291(0x141) ? 'right' : _0x55a291(0x141),
        chatButtonColor: _0x40a94a ?? _0x55a291(0x113),
        chatBoxBackgroundColor:
          _0xb3fb25 === _0x55a291(0xe9) ? _0x55a291(0x127) : _0x55a291(0x113),
        chatInputBorderColor:
          _0xb3fb25 === _0x55a291(0xe9) ? '#cdceed' : _0x55a291(0x13d),
        chatBoxHeaderBorderColor:
          _0xb3fb25 === 'dark' ? _0x55a291(0x15b) : _0x55a291(0x13d),
        chatInputColor:
          _0xb3fb25 === _0x55a291(0xe9) ? _0x55a291(0x113) : '#inherit',
        chatBoxDisplayNameColor:
          _0xb3fb25 === _0x55a291(0xe9) ? _0x55a291(0x113) : _0x55a291(0x118),
        messageItemOperatorBackgroundColor: _0x2514c9 ?? '#3399FF',
        suggestedMessagesHeight: _0x48140d?.[_0x55a291(0xe6)]
          ? '60px'
          : _0x55a291(0x15c),
      },
      _0x13419a = document[_0x55a291(0xff)](_0x55a291(0xe3));
    (_0x13419a[_0x55a291(0xef)] = _0x2269fd[_0x55a291(0x154)](
      /{{([^}]+)}}/g,
      (_0x2a0ea0, _0x2af6f2) => _0x2bbb4f[_0x2af6f2],
    )),
      document[_0x55a291(0x116)][_0x55a291(0x10e)](_0x13419a);
  }
  [_0x5f42e5(0x157)](_0x5fe39) {
    return new Promise((_0x552024) => setTimeout(_0x552024, _0x5fe39));
  }
  async [_0x5f42e5(0x121)](_0x5dfdaf) {
    const _0x1ffb44 = _0x5f42e5;
    let _0x198ad2 = _0x5dfdaf[_0x1ffb44(0xdf)](_0x1ffb44(0xd5)),
      _0x46a6d1 = _0x198ad2['value'];
    if (!!this[_0x1ffb44(0x134)]) return;
    _0x198ad2['value'] = '';
    if (_0x46a6d1 === '') return;
    (this[_0x1ffb44(0x134)] = !![]),
      this[_0x1ffb44(0x10b)][_0x1ffb44(0xf4)]([
        { sender_type: _0x1ffb44(0x147), content: _0x46a6d1 },
        { sender_type: _0x1ffb44(0x101), content: '' },
      ]),
      this[_0x1ffb44(0xed)]();
    let _0x3bcf53 = new Headers();
    _0x3bcf53['append'](_0x1ffb44(0x11c), _0x1ffb44(0x143));
    const _0xa214a2 = {
      method: _0x1ffb44(0xd8),
      headers: _0x3bcf53,
      body: JSON[_0x1ffb44(0xcf)]({
        message: _0x46a6d1,
        session_id: this[_0x1ffb44(0x108)],
        ...window['chatbotConfig'],
      }),
    };
    try {
      const _0x34a8f0 = await fetch(this[_0x1ffb44(0x100)], _0xa214a2);
      if (!_0x34a8f0['ok'])
        throw new Error(_0x1ffb44(0x10d) + _0x34a8f0[_0x1ffb44(0x12c)]);
      const _0xfd99ab = await _0x34a8f0['body'],
        _0x534254 = _0xfd99ab[_0x1ffb44(0x107)]();
      for await (const _0x2974d0 of this[_0x1ffb44(0x124)](_0x534254)) {
      }
    } catch (_0x1d517c) {
      (this['loading'] = ![]),
        console[_0x1ffb44(0x13f)](_0x1ffb44(0x11d), _0x1d517c),
        (_0x198ad2[_0x1ffb44(0xd3)] = '');
    }
  }
  async *[_0x5f42e5(0x124)](_0x1695b6) {
    const _0x2d61c5 = _0x5f42e5,
      _0x5c6612 = new TextDecoder();
    while (!![]) {
      const { done: _0x24093c, value: _0x13704b } =
        await _0x1695b6[_0x2d61c5(0x142)]();
      if (_0x24093c) {
        this[_0x2d61c5(0x134)] = ![];
        return;
      }
      const _0x3d35a9 = _0x5c6612[_0x2d61c5(0xf0)](_0x13704b);
      await this['sleep'](0x32),
        (this[_0x2d61c5(0x10b)]['slice'](-0x1)[0x0][0x1][_0x2d61c5(0x12b)] +=
          _0x3d35a9),
        await this['updateChatBox']();
    }
  }
  async [_0x5f42e5(0xed)]() {
    const _0x1a6c32 = _0x5f42e5;
    let _0x4ee572 = document['querySelector'](_0x1a6c32(0x126)),
      _0x4884f3 = '';
    this['history'][_0x1a6c32(0x120)]((_0x3362d6, _0x5e76fd) => {
      const _0x3a50eb = _0x1a6c32;
      !(
        _0x3362d6[0x0][_0x3a50eb(0x148)] == _0x3a50eb(0x147) &&
        !_0x3362d6[0x0][_0x3a50eb(0x12b)]
      ) &&
        (_0x4884f3 +=
          _0x3a50eb(0x115) +
          _0x3362d6[0x0][_0x3a50eb(0x12b)] +
          _0x3a50eb(0x135));
      if (
        _0x3362d6[0x1][_0x3a50eb(0x148)] == 'assistant' &&
        _0x3362d6[0x1][_0x3a50eb(0x12b)]
      )
        _0x4884f3 +=
          _0x3a50eb(0x139) +
          _0x3362d6[0x1][_0x3a50eb(0x12b)] +
          _0x3a50eb(0x135);
      else _0x4884f3 += _0x3a50eb(0xd6);
    }),
      (_0x4ee572[_0x1a6c32(0x119)] =
        _0x1a6c32(0x128) + _0x4884f3 + _0x1a6c32(0x135));
  }
  [_0x5f42e5(0xf5)]() {
    const _0x162b22 = _0x5f42e5,
      { chatbox: _0x503e4f } = this[_0x162b22(0x137)];
    _0x503e4f[_0x162b22(0xe3)][_0x162b22(0xd7)] = _0x162b22(0xdc);
  }
  [_0x5f42e5(0xcd)]() {
    const _0x14e657 = _0x5f42e5;
    (this[_0x14e657(0x10b)] = []),
      (this[_0x14e657(0x108)] = this[_0x14e657(0xf7)]()),
      this[_0x14e657(0xed)]();
  }
  [_0x5f42e5(0xcc)](_0x4a3ef3) {
    const _0x4b4086 = _0x5f42e5;
    (this[_0x4b4086(0xf2)] = !this[_0x4b4086(0xf2)]),
      this[_0x4b4086(0x156)](
        _0x4a3ef3,
        this[_0x4b4086(0x137)][_0x4b4086(0x105)],
      );
  }
  [_0x5f42e5(0x156)](_0x2a411a, _0x462859) {
    const _0x3eac32 = _0x5f42e5;
    _0x2a411a['style'][_0x3eac32(0xd7)] =
      _0x2a411a['style'][_0x3eac32(0xd7)] === _0x3eac32(0xdc) ? '' : 'none';
    if (this[_0x3eac32(0xf2)])
      _0x2a411a[_0x3eac32(0x155)][_0x3eac32(0x111)](_0x3eac32(0x14f)),
        this['toggleIcon'](!![], _0x462859);
    else !this['state'] && this[_0x3eac32(0xfc)](![], _0x462859);
  }
  [_0x5f42e5(0xfc)](_0x127ea7, _0x2f29bd) {
    const _0xa15c3d = _0x5f42e5,
      { isClicked: _0x32faa2, isNotClicked: _0x4c694b } = this[_0xa15c3d(0xd9)],
      _0xfa299 = document['querySelector'](_0xa15c3d(0x14c));
    _0xfa299['addEventListener'](_0xa15c3d(0x112), () =>
      this[_0xa15c3d(0xf5)](),
    );
    const _0x207aa7 = document[_0xa15c3d(0xdf)](_0xa15c3d(0xfb));
    _0x207aa7['addEventListener'](_0xa15c3d(0x112), () =>
      this['refreshHistory'](),
    );
    const _0x2fc401 = _0x2f29bd[_0xa15c3d(0x153)],
      _0x8956be = _0x2fc401[_0xa15c3d(0x153)];
    _0x2fc401['replaceChild'](_0x127ea7 ? _0x32faa2 : _0x4c694b, _0x8956be);
  }
}
(document[_0x5f42e5(0x133)] = document[_0x5f42e5(0xff)]('body')),
  (document[_0x5f42e5(0x116)][_0x5f42e5(0x119)] += _0x5f42e5(0xfd));
const elemDiv = _0x5f42e5(0xea);
function _0x29d2() {
  const _0x373c53 = [
    '/bot/bot-widget-setting',
    'Request\x20failed\x20with\x20status:\x20',
    'append',
    '413295PVIdJo',
    '.chatbox__button',
    'add',
    'click',
    '#fff',
    '<div\x20class=\x22icon_header\x22>',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    'head',
    'origin',
    'inherit',
    'innerHTML',
    'addEventListener',
    'chatbot__suggest--item',
    'Content-Type',
    'Error:',
    '90174aoJaZT',
    '.chatbot__suggest',
    'forEach',
    'onSendButton',
    'visibility',
    'div',
    'asyncGenerator',
    '.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{white-space:\x20pre-wrap;border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-bottom:\x2020px;margin-top:auto;display:flex;flex-direction:column;overflow-y:auto;flex-direction:column-reverse}.messages__item{width:fit-content;border:1px\x20solid\x20#0000004a;}.messages__item--visitor{white-space:pre-wrap;margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(93.12deg,\x20#581B98\x200.52%,\x20#9C1DE7\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#581B98}.message_avatar{width:40px;height:40px;border-radius:50px;backend:#0B1152;margin-right:5px}.chatbox__support{border-bottom-left-radius:\x2020px;border-bottom-right-radius:\x2020px;background:#fff;height:700px;width:450px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{margin-bottom:\x2020px;height:100%;padding:0\x2010px}.messages__item{margin-top:10px;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{white-space:pre-wrap;border-bottom-right-radius:20px}.message__bot{display:flex;column-gap:5px;align-items:\x20end;}.chatbot__avatar{background:#0B1152;width:35px;height:35px;border-radius:50px;display:flex;align-items:center;justify-content:center;}.avatar{width:20px;height:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:#0b1152;color:#fff}.chatbot__suggest{overflow-y:hidden;display:flex;overflow-x:auto;scrollbar-gutter:\x20stable;column-gap:10px;padding-bottom:1.2rem}.chatbot__suggest--item{font-size:\x2012px;white-space:\x20nowrap;height:35px;padding:0\x2015px;display:flex;cursor:pointer;border-radius:20px;align-items:center;border:1px\x20solid\x20#0000004a}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin:10px\x2010px\x2015px;border:1px\x20solid\x20#0000004a;border-radius:5px}.chatbot__header{height:80px;background:#0B1152;border-radius:20px;margin-top:-1px;padding:20px;text-align:center;display:flex;justify-content:space-between}.bot_avatar{height:25px}.icon_header{font-size:18px;font-weight:700;display:flex;align-items:center;cursor:\x20pointer;column-gap:10px;color:white}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:86%;height:80%;font-size:14px}.chatbox__send--footer{color:#fff;cursor:pointer;margin-right:10px}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#4AC1FF;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}',
    '.chatbox__messages',
    '#111827',
    '<div>',
    '718506CDRWCS',
    'GET',
    'content',
    'status',
    'getTime',
    'right',
    'isNotClicked',
    'chatbotConfig',
    '2182257RUKFQg',
    'updateHeader',
    'body',
    'loading',
    '</div>',
    'now',
    'args',
    'target',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    '695qSvYXq',
    '?bot_id=',
    'icon_header',
    '#0000004a',
    'block',
    'error',
    '80px',
    'left',
    'read',
    'application/json',
    '452sWyUWb',
    'chat_icon_url',
    'https://backend.chatfly.co/api',
    'user',
    'sender_type',
    'showMessageText',
    'syncChatWidgetStyling',
    '.chatbot',
    '.close__button',
    '#000000',
    'bot_id',
    'chatbox--active',
    'setStyle',
    'https://chatfly.co/static/media/logo.ece8dfcb2b9f337ddd55.png',
    '19287IItaJL',
    'firstElementChild',
    'replace',
    'classList',
    'showOrHideChatBox',
    'sleep',
    'bot_avatar',
    'json',
    'https://app.gpt-trainer.com/img/widget-images/widget-button-open-state/default-chat.svg',
    '#cdceed',
    '0px',
    'appendChild',
    '.chatbox__support',
    'toggleState',
    'refreshHistory',
    'keyup',
    'stringify',
    'bot_avatar_url',
    'getBotWidgetSettingUrl',
    'floor',
    'value',
    '.chatbox__send--footer',
    'input',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    'display',
    'POST',
    'icons',
    'width',
    'Request\x20failed\x20swith\x20status:\x20',
    'none',
    '<div\x20class=\x22refresh__button\x22><svg\x20fill=\x22#2274DD\x22\x20width=\x2220\x22\x20height=\x2220\x22\x20viewBox=\x220\x200\x2015\x2015\x22\x20fill=\x22none\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x20<path\x20fill-rule=\x22evenodd\x22\x20clip-rule=\x22evenodd\x22\x20d=\x22M7.5\x201C3.91015\x201\x201\x203.91015\x201\x207.5H0C0\x203.35786\x203.35786\x200\x207.5\x200C9.6733\x200\x2011.6308\x200.924852\x2013\x202.40095V0H14V4L10\x204V3L12.1905\x203C11.007\x201.76671\x209.34315\x201\x207.5\x201ZM7.5\x2014C11.0899\x2014\x2014\x2011.0899\x2014\x207.5H15C15\x2011.6421\x2011.6421\x2015\x207.5\x2015C5.3267\x2015\x203.36918\x2014.0751\x202\x2012.599V15H1V11H5V12H2.80955C3.993\x2013.2333\x205.65685\x2014\x207.5\x2014Z\x22\x20fill=\x22#2274DD\x22/>\x20</svg></div>',
    '712dOkuqw',
    'querySelector',
    'random',
    'chat_message_color',
    '.chatbot__header',
    'style',
    '356803UcWOGE',
    'visible',
    'length',
    'img',
    'location',
    'dark',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbot__suggest\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button><img\x20src=\x27\x27\x20alt=\x27button\x20icon\x27></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'className',
    'baseUrl',
    'updateChatBox',
    '/chat/get-streaming-response',
    'textContent',
    'decode',
    '<svg\x20fill=',
    'state',
    'chatfly',
    'push',
    'closeChatBox',
    'updateChatIcons',
    'generateUUID',
    'updateSuggestedMessages',
    'isClicked',
    'querySelectorAll',
    '.refresh__button',
    'toggleIcon',
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#d6dee1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x206px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-clip:\x20content-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#a8bbbf;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__button{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.init_message{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20@media\x20only\x20screen\x20and\x20(max-width:\x201024px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.chatbox__support\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20350px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20550px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.chatbox\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a</style>\x0a\x20\x20',
    '<div\x20class=\x22close__button\x22><svg\x20fill=\x22#E04F5F\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2226\x22\x20height=\x2226\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x20<g>\x20<path\x20fill=\x22none\x22\x20d=\x22M0\x200h24v24H0z\x22/>\x20<path\x20d=\x22M12\x2022C6.477\x2022\x202\x2017.523\x202\x2012S6.477\x202\x2012\x202s10\x204.477\x2010\x2010-4.477\x2010-10\x2010zm0-11.414L9.172\x207.757\x207.757\x209.172\x2010.586\x2012l-2.829\x202.828\x201.415\x201.415L12\x2013.414l2.828\x202.829\x201.415-1.415L13.414\x2012l2.829-2.828-1.415-1.415L12\x2010.586z\x22/>\x20</g>\x20</svg></div>',
    'createElement',
    'getStreamingResponseUrl',
    'assistant',
    'showChatWhenGetStyleSuccess',
    'iconSend',
    'src',
    'openButton',
    'updateInitMessage',
    'getReader',
    'session_id',
    'includes',
    'toString',
    'history',
  ];
  _0x29d2 = function () {
    return _0x373c53;
  };
  return _0x29d2();
}
document[_0x5f42e5(0x133)][_0x5f42e5(0x119)] += elemDiv;
const chatbox = new InteractiveChatbox();
chatbox[_0x5f42e5(0xd7)]();
