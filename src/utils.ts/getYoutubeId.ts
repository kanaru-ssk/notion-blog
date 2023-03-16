export const getYouTubeId = (url: string) => {
  // extract the video ID from the URL string using a regular expression
  var match = url.match(/(?:\?v=|&v=|youtu\.be\/)(.*?)(?:\?|&|$)/);
  if (match) {
    return match[1];
  } else if (url.includes("youtu.be/")) {
    // extract video ID from youtu.be URL format
    return url.split("youtu.be/")[1];
  } else {
    return null;
  }
};
