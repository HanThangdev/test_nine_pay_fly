export function formatTimeAgo(utcTime: Date): string {
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - utcTime.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44); // Approximate average number of days in a month
  const years = Math.floor(months / 12);

  const urlParams = new URLSearchParams(window.location.search);
  const getLanguageFromURL = urlParams.get('language');
  const lang = getLanguageFromURL || localStorage.getItem('LANGUAGE') || 'en';

  let formattedTimeAgo: string;
  switch (true) {
    case years >= 1:
      formattedTimeAgo = `${years} ${
        lang === 'en' ? ' year' : lang === 'jp' ? '年' : ' năm'
      } ${years > 1 ? (lang === 'en' ? 's' : lang === 'jp' ? '間' : '') : ''}${
        lang === 'en' ? ' ago' : lang === 'jp' ? '前' : ' trước'
      }`;
      break;
    case months >= 1:
      formattedTimeAgo = `${months}  ${
        lang === 'en' ? ' month' : lang === 'jp' ? '月' : ' tháng'
      }${months > 1 ? (lang === 'en' ? 's' : lang === 'jp' ? '間' : '') : ''}${
        lang === 'en' ? ' ago' : lang === 'jp' ? '前' : ' trước'
      }`;
      break;
    case weeks >= 1:
      formattedTimeAgo = `${weeks} ${
        lang === 'en' ? ' week' : lang === 'jp' ? '週' : ' tuần'
      }${weeks > 1 ? (lang === 'en' ? 's' : lang === 'jp' ? '間' : '') : ''}${
        lang === 'en' ? ' ago' : lang === 'jp' ? '前' : ' trước'
      }`;
      break;
    case days >= 1:
      formattedTimeAgo = `${days} ${
        lang === 'en' ? ' day' : lang === 'jp' ? '日' : ' ngày'
      }${days > 1 ? (lang === 'en' ? 's' : lang === 'jp' ? '間' : '') : ''}${
        lang === 'en' ? ' ago' : lang === 'jp' ? '前' : ' trước'
      }`;
      break;
    case hours >= 2:
      formattedTimeAgo = `${hours} ${
        lang === 'en' ? ' hour' : lang === 'jp' ? '時' : 'giờ'
      }${hours > 1 ? (lang === 'en' ? 's' : lang === 'jp' ? '間' : '') : ''}${
        lang === 'en' ? ' ago' : lang === 'jp' ? '前' : ' trước'
      }`;
      break;
    case hours >= 1:
      formattedTimeAgo = `${
        lang === 'en'
          ? 'an hour ago'
          : lang === 'jp'
          ? '1時間前'
          : '1 giờ trước'
      }`;
      break;
    case minutes >= 2:
      formattedTimeAgo = `${minutes} ${
        lang === 'en' ? 'minute' : lang === 'jp' ? '分' : 'phút'
      }${minutes > 1 ? (lang === 'en' ? 's' : lang === 'jp' ? '間' : '') : ''}${
        lang === 'en' ? 'ago' : lang === 'jp' ? '前' : 'trước'
      }`;
      break;
    case minutes >= 1:
      formattedTimeAgo = `${
        lang === 'en'
          ? 'a minute ago'
          : lang === 'jp'
          ? '1分前'
          : '1 phút trước'
      }`;
      break;
    default:
      formattedTimeAgo = `${
        lang === 'en' ? 'just now' : lang === 'jp' ? '今' : 'ngay bây giờ'
      }`;
  }

  return formattedTimeAgo;
}

export function convertStringToParagraphs(inputString: string) {
  return inputString;
}

export function formatNumber(number: string | number) {
  number = Number(number).toFixed(0) + '';
  let x = number.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return x1 + x2;
}

export function truncateString(str: string, maxLength = 50) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + '...';
  }
}

export function trimStringValuesInArray<T>(array: T[]): T[] {
  return array.map((item) => {
    const trimmedItem: ObjectWithStringValues = {};
    for (const key in item) {
      if (typeof item[key] === 'string') {
        // Nếu giá trị là kiểu string, thực hiện trim
        trimmedItem[key] = item[key]?.toString().trim();
      } else {
        trimmedItem[key] = item[key]?.toString();
      }
    }
    return trimmedItem as T;
  });
}