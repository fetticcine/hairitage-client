export const getGoogleDriveHostUrl = shareUrl => {
    if (shareUrl.substring(0, 30) === "https://drive.google.com/file/") {
      const hostUrl = shareUrl.substring(0, shareUrl.lastIndexOf('/'));
      const fileId = hostUrl.substring(hostUrl.lastIndexOf('/')+1, shareUrl.length);
      return `https://drive.google.com/uc?id=${fileId}`;
    } else {
      return shareUrl;
    }
  }
  