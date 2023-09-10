const _0x3e64c3 = _0x48c7;
(function (_0x1e7ce8, _0x4c6b85) {
  const _0x510c00 = _0x48c7,
    _0x41c6eb = _0x1e7ce8();
  while (!![]) {
    try {
      const _0x44489c =
        -parseInt(_0x510c00(0x180)) / 0x1 +
        (-parseInt(_0x510c00(0x1bb)) / 0x2) *
          (-parseInt(_0x510c00(0x1a7)) / 0x3) +
        (-parseInt(_0x510c00(0x198)) / 0x4) *
          (-parseInt(_0x510c00(0x1a8)) / 0x5) +
        (-parseInt(_0x510c00(0x17e)) / 0x6) *
          (-parseInt(_0x510c00(0x1a6)) / 0x7) +
        -parseInt(_0x510c00(0x19d)) / 0x8 +
        -parseInt(_0x510c00(0x19f)) / 0x9 +
        parseInt(_0x510c00(0x18d)) / 0xa;
      if (_0x44489c === _0x4c6b85) break;
      else _0x41c6eb['push'](_0x41c6eb['shift']());
    } catch (_0x18e98b) {
      _0x41c6eb['push'](_0x41c6eb['shift']());
    }
  }
})(_0x2b26, 0x777bf);
class InteractiveChatbox {
  constructor() {
    const _0x2d297a = _0x48c7;
    (this[_0x2d297a(0x1b2)] = _0x2d297a(0x1ba)),
      (this[_0x2d297a(0x1ae)] = {
        openButton: document['querySelector'](_0x2d297a(0x18a)),
        chatbox: document['querySelector'](_0x2d297a(0x190)),
        sendButton: document['querySelector'](_0x2d297a(0x1aa)),
      }),
      (this[_0x2d297a(0x19c)] = {
        isClicked:
          '<svg\x20fill=\x22#2a2b4c\x22\x20height=\x2229px\x22\x20width=\x2229px\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20viewBox=\x22-6\x20-6\x2072.00\x2072.00\x22\x20xml:space=\x22preserve\x22\x20transform=\x22matrix(-1,\x200,\x200,\x201,\x200,\x200)\x22\x20stroke=\x22#9C1DE7\x22><g\x20id=\x22SVGRepo_bgCarrier\x22\x20stroke-width=\x220\x22></g><g\x20id=\x22SVGRepo_tracerCarrier\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke=\x22#CCCCCC\x22\x20stroke-width=\x220.96\x22></g><g\x20id=\x22SVGRepo_iconCarrier\x22>\x20<path\x20d=\x22M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689\x20c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01\x20c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z\x22></path>\x20</g></svg>',
        isNotClicked: _0x2d297a(0x192),
      }),
      (this[_0x2d297a(0x185)] = ![]),
      (this[_0x2d297a(0x18f)] = []);
  }
  async [_0x3e64c3(0x194)]() {
    const _0x2f18f0 = _0x3e64c3,
      {
        openButton: _0x17f94d,
        chatbox: _0x251779,
        sendButton: _0x42679b,
      } = this[_0x2f18f0(0x1ae)];
    this[_0x2f18f0(0x19e)](![], _0x17f94d),
      this[_0x2f18f0(0x17f)](_0x251779),
      _0x17f94d[_0x2f18f0(0x196)]('click', () =>
        this[_0x2f18f0(0x17f)](_0x251779),
      ),
      _0x42679b[_0x2f18f0(0x196)](_0x2f18f0(0x191), () =>
        this[_0x2f18f0(0x189)](_0x251779),
      );
    const _0x260cbc = _0x251779[_0x2f18f0(0x184)](_0x2f18f0(0x1b8));
    _0x260cbc[_0x2f18f0(0x196)](_0x2f18f0(0x1a5), ({ key: _0x3f68dc }) => {
      const _0x50c676 = _0x2f18f0;
      _0x3f68dc === _0x50c676(0x1ac) && this['onSendButton'](_0x251779);
    });
  }
  [_0x3e64c3(0x1a1)](_0x4530f2) {
    return new Promise((_0x5cc22f) => setTimeout(_0x5cc22f, _0x4530f2));
  }
  async [_0x3e64c3(0x189)](_0x3de496) {
    const _0x49aef8 = _0x3e64c3;
    let _0x4bf1cb = _0x3de496[_0x49aef8(0x184)](_0x49aef8(0x1b8)),
      _0x3b3f00 = _0x4bf1cb['value'];
    _0x4bf1cb[_0x49aef8(0x1b7)] = '';
    if (_0x3b3f00 === '') return;
    this['history'][_0x49aef8(0x1a9)]([_0x3b3f00, '']),
      this[_0x49aef8(0x1bf)]();
    let _0xe506b4 = new Headers();
    _0xe506b4['append'](_0x49aef8(0x1b5), _0x49aef8(0x1a3)),
      _0xe506b4[_0x49aef8(0x18e)](
        _0x49aef8(0x197),
        _0x49aef8(0x1b4) + window['chatbotConfig'][_0x49aef8(0x18b)],
      );
    const _0x1dae4d = {
      method: _0x49aef8(0x199),
      headers: _0xe506b4,
      body: JSON[_0x49aef8(0x188)]({
        message: _0x3b3f00,
        ...window[_0x49aef8(0x19a)],
      }),
    };
    try {
      const _0xa1842a = await fetch(this[_0x49aef8(0x1b2)], _0x1dae4d);
      if (!_0xa1842a['ok'])
        throw new Error(_0x49aef8(0x18c) + _0xa1842a[_0x49aef8(0x1ab)]);
      const _0x38852a = await _0xa1842a[_0x49aef8(0x1b3)],
        _0x2b2372 = _0x38852a[_0x49aef8(0x181)]();
      for await (const _0xae070f of this[_0x49aef8(0x1b1)](_0x2b2372)) {
      }
    } catch (_0x41e679) {
      console['error'](_0x49aef8(0x1b6), _0x41e679),
        (_0x4bf1cb[_0x49aef8(0x1b7)] = '');
    }
  }
  async *[_0x3e64c3(0x1b1)](_0x52a53b) {
    const _0x411b88 = _0x3e64c3,
      _0x506b7c = new TextDecoder();
    while (!![]) {
      const { done: _0x223d70, value: _0x1f3bd7 } =
        await _0x52a53b[_0x411b88(0x182)]();
      if (_0x223d70) return;
      const _0x53fe14 = _0x506b7c[_0x411b88(0x1be)](_0x1f3bd7);
      await this[_0x411b88(0x1a1)](0x32),
        (this[_0x411b88(0x18f)][_0x411b88(0x1a0)](-0x1)[0x0][0x1] += _0x53fe14),
        await this[_0x411b88(0x1bf)]();
    }
  }
  async [_0x3e64c3(0x1bf)]() {
    const _0x4045b0 = _0x3e64c3;
    let _0x5632f0 = document['querySelector'](_0x4045b0(0x1a2)),
      _0x1c126c = '';
    this[_0x4045b0(0x18f)]['forEach']((_0x438328, _0x1add42) => {
      const _0x5e1c1d = _0x4045b0;
      _0x1c126c += _0x5e1c1d(0x1b0) + _0x438328[0x0] + _0x5e1c1d(0x19b);
      if (_0x438328[0x1])
        _0x1c126c += _0x5e1c1d(0x1ad) + _0x438328[0x1] + '</div>';
      else _0x1c126c += _0x5e1c1d(0x195);
    }),
      (_0x5632f0[_0x4045b0(0x1bc)] = '<div>' + _0x1c126c + _0x4045b0(0x19b));
  }
  [_0x3e64c3(0x17f)](_0xb9f2dd) {
    const _0x554947 = _0x3e64c3;
    (this[_0x554947(0x185)] = !this[_0x554947(0x185)]),
      this['showOrHideChatBox'](_0xb9f2dd, this['args']['openButton']);
  }
  [_0x3e64c3(0x17d)](_0x55c49a, _0x2dd547) {
    const _0x16b4c3 = _0x3e64c3;
    _0x55c49a[_0x16b4c3(0x183)]['display'] =
      _0x55c49a[_0x16b4c3(0x183)][_0x16b4c3(0x194)] === 'none'
        ? ''
        : _0x16b4c3(0x187);
    if (this[_0x16b4c3(0x185)])
      _0x55c49a['classList'][_0x16b4c3(0x1bd)]('chatbox--active'),
        this[_0x16b4c3(0x19e)](!![], _0x2dd547);
    else !this['state'] && this['toggleIcon'](![], _0x2dd547);
  }
  [_0x3e64c3(0x19e)](_0x16f1c3, _0x27724d) {
    const _0x59da0e = _0x3e64c3,
      { isClicked: _0x5e34b7, isNotClicked: _0x194b96 } =
        this[_0x59da0e(0x19c)];
    let _0x43ab7b = _0x27724d['children'][0x0][_0x59da0e(0x1bc)];
    if (_0x16f1c3)
      _0x27724d[_0x59da0e(0x1a4)][0x0][_0x59da0e(0x1bc)] = _0x5e34b7;
    else
      !_0x16f1c3 &&
        (_0x27724d[_0x59da0e(0x1a4)][0x0][_0x59da0e(0x1bc)] = _0x194b96);
  }
}
function _0x48c7(_0x1f8b2c, _0xe6ec0c) {
  const _0x2b262a = _0x2b26();
  return (
    (_0x48c7 = function (_0x48c787, _0x495aa9) {
      _0x48c787 = _0x48c787 - 0x17d;
      let _0x4296c8 = _0x2b262a[_0x48c787];
      return _0x4296c8;
    }),
    _0x48c7(_0x1f8b2c, _0xe6ec0c)
  );
}
(document[_0x3e64c3(0x1b3)] = document[_0x3e64c3(0x193)]('body')),
  (document[_0x3e64c3(0x1af)][_0x3e64c3(0x1bc)] += _0x3e64c3(0x1b9));
const elemDiv = _0x3e64c3(0x186);
function _0x2b26() {
  const _0x5df5b0 = [
    '.chatbox__messages',
    'application/json',
    'children',
    'keyup',
    '187215OQDhTi',
    '12ubIXxo',
    '435uQCIPq',
    'push',
    '.chatbox__send--footer',
    'status',
    'Enter',
    '<div\x20class=\x22messages__item\x20messages__item--visitor\x22>',
    'args',
    'head',
    '<div\x20class=\x22messages__item\x20messages__item--operator\x22>',
    'asyncGenerator',
    'URL',
    'body',
    'Bearer\x20',
    'Content-Type',
    'Error:',
    'value',
    'input',
    '\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300&display=swap\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20rel=\x22stylesheet\x22>\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20.chatbox__header,.chatbox__support,.messages__item--operator,.messages__item--typing,.messages__item--visitor{border-top-left-radius:20px;border-top-right-radius:20px}.chatbox{position:fixed;z-index:100000;bottom:30px;right:30px}.chatbox__support{display:flex;flex-direction:column;z-index:-123456;opacity:0;transition:.5s\x20ease-in-out}.chatbox--active{transform:translateY(-10px);z-index:123456;opacity:1}.chatbox__button{text-align:right}.chatbox__header{position:sticky;top:0;background:orange}.chatbox__messages{margin-top:auto;display:flex;flex-direction:column;overflow-y:scroll;flex-direction:column-reverse}.messages__item{width:fit-content}.messages__item--visitor{margin-right:auto}*{box-sizing:border-box;margin:0;padding:0}*,html{--primaryGradient:linear-gradient(256deg,\x20#111055\x200%,\x20#1d1e33\x20100%);--secondaryGradient:#2a2b4c;--primaryBoxShadow:0px\x2010px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--secondaryBoxShadow:0px\x20-10px\x2015px\x20rgba(0,\x200,\x200,\x200.1);--light:300;--regular:400;--semiBold:600;--extraLight:300;--italic:300;--primary:#2A2B4C}body{font-family:Nunito,sans-serif;font-weight:400;font-size:100%;background:#f1f1f1}.chatbox__support{border-bottom-left-radius:20px;border-bottom-right-radius:20px;background:#f9f9f9;height:450px;width:350px;box-shadow:0\x200\x2015px\x20rgba(0,0,0,.1)}.chatbox__header{background:var(--primaryGradient);display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px\x2020px;box-shadow:var(--primaryBoxShadow)}.chatbox__image--header{margin-right:10px}.chatbox__heading--header{font-size:1.2rem;color:#fff}.chatbox__description--header{font-size:.9rem;color:#fff}.chatbox__messages{height:100%;padding:0\x2020px}.messages__item{margin-top:10px;background:#e0e0e0;padding:8px\x2012px;max-width:70%}.messages__item--typing,.messages__item--visitor{border-bottom-right-radius:20px}.messages__item--operator{margin-left:auto;border-bottom-left-radius:20px;background:var(--primary);color:#fff}.chatbox__footer{position:sticky;bottom:0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:20px;background:var(--secondaryGradient);box-shadow:var(--secondaryBoxShadow);border-bottom-right-radius:10px;border-bottom-left-radius:10px;margin-top:20px}.chatbox__footer\x20input{border:none;outline:0;padding:10px;border-radius:30px;text-align:left;width:80%;height:80%}.chatbox__send--footer{color:#fff;cursor:pointer}.chatbox__button\x20button,.chatbox__button\x20button:focus,.chatbox__button\x20button:visited{padding:10px;background:#fff;border:none;outline:0;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;box-shadow:0\x2010px\x2015px\x20rgba(0,0,0,.1);cursor:pointer}.messages__item--typing{will-change:transform;width:auto;border-top-right-radius:20px;border-top-left-radius:20px;border-bottom-right-radius:20px;padding:15px\x2020px;display:table;margin-right:auto;position:relative;animation:2s\x20ease-out\x20infinite\x20bulge}.messages__item--typing::after,.messages__item--typing::before{content:\x27\x27;position:absolute;bottom:-2px;left:-2px;height:10px;width:10px;border-radius:50%}.messages__item--typing::after{height:10px;width:10px;left:-10px;bottom:-10px}span.messages__dot{height:8px;width:8px;float:left;margin:0\x201px;background-color:#9e9ea1;display:block;border-radius:50%;opacity:.4;animation:1s\x20infinite\x20blink}@keyframes\x20blink{50%{opacity:1}}@keyframes\x20bulge{50%{transform:scale(1.05)}}\x0a\x20\x20\x20\x20</style>\x0a',
    'https://backend.dev.chatfly.co/api/chat/get-streaming-response',
    '16734NsHXme',
    'innerHTML',
    'add',
    'decode',
    'updateChatBox',
    'showOrHideChatBox',
    '114qLAmNp',
    'toggleState',
    '933679HuLxmM',
    'getReader',
    'read',
    'style',
    'querySelector',
    'state',
    '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__support\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20placeholder=\x22Write\x20a\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22chatbox__send--footer\x22>Send</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chatbox__button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button>button</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
    'none',
    'stringify',
    'onSendButton',
    '.chatbox__button',
    'token',
    'Request\x20failed\x20with\x20status:\x20',
    '22752150NaLofd',
    'append',
    'history',
    '.chatbox__support',
    'click',
    '<svg\x20fill=\x22#2a2b4c\x22\x20height=\x2229px\x22\x20width=\x2229px\x22\x20version=\x221.1\x22\x20id=\x22Capa_1\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20viewBox=\x22-6\x20-6\x2072.00\x2072.00\x22\x20xml:space=\x22preserve\x22\x20transform=\x22matrix(-1,\x200,\x200,\x201,\x200,\x200)\x22\x20stroke=\x22#9C1DE7\x22><g\x20id=\x22SVGRepo_bgCarrier\x22\x20stroke-width=\x220\x22></g><g\x20id=\x22SVGRepo_tracerCarrier\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke=\x22#CCCCCC\x22\x20stroke-width=\x220.96\x22></g><g\x20id=\x22SVGRepo_iconCarrier\x22>\x20<path\x20d=\x22M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689\x20c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01\x20c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z\x22></path>\x20</g></svg>',
    'createElement',
    'display',
    '<div\x20class=\x22messages__item\x20messages__item--typing\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22messages__dot\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    'addEventListener',
    'Authorization',
    '3084IcVITD',
    'POST',
    'chatbotConfig',
    '</div>',
    'icons',
    '4095184nflNoV',
    'toggleIcon',
    '8540379bOKXoP',
    'slice',
    'sleep',
  ];
  _0x2b26 = function () {
    return _0x5df5b0;
  };
  return _0x2b26();
}
document[_0x3e64c3(0x1b3)][_0x3e64c3(0x1bc)] += elemDiv;
const chatbox = new InteractiveChatbox();
chatbox[_0x3e64c3(0x194)]();
