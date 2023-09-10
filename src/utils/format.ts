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

  let formattedTimeAgo: string;
  switch (true) {
    case years >= 1:
      formattedTimeAgo = `${years} year${years > 1 ? 's' : ''} ago`;
      break;
    case months >= 1:
      formattedTimeAgo = `${months} month${months > 1 ? 's' : ''} ago`;
      break;
    case weeks >= 1:
      formattedTimeAgo = `${weeks} week${weeks > 1 ? 's' : ''} ago`;
      break;
    case days >= 1:
      formattedTimeAgo = `${days} day${days > 1 ? 's' : ''} ago`;
      break;
    case hours >= 2:
      formattedTimeAgo = `${hours} hour${hours > 1 ? 's' : ''} ago`;
      break;
    case hours >= 1:
      formattedTimeAgo = 'an hour ago';
      break;
    case minutes >= 2:
      formattedTimeAgo = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      break;
    case minutes >= 1:
      formattedTimeAgo = 'a minute ago';
      break;
    default:
      formattedTimeAgo = 'just now';
  }

  return formattedTimeAgo;
}


export function convertStringToParagraphs(inputString: string) {
  const paragraphs = inputString.split(/\n|\r\n/);

  const cleanedParagraphs = paragraphs.map((paragraph) => paragraph.trim());

  const result = cleanedParagraphs.join('\n\n');

  return result;
}