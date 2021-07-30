interface imageUrl {
  src: string;
  media: string;
}

const generateUrl = (url: string, size: number) => {
  return `//images.weserv.nl/?url=${url}&w=${size}`;
};

const ImageUrl = {
  generateUrl: (url: string, size: number): string => generateUrl(url, size),

  generateCardSrcMedia: (url: string): imageUrl => {
    const size = 350;
    return {
      src: generateUrl(url, size),
      media: `(min-width: 0px)`,
    };
  },

  generateMobileSrcMedia: (url: string): imageUrl => {
    const size = 576;
    return {
      src: generateUrl(url, size),
      media: `(min-width: 0px)`,
    };
  },

  generateTabletSrcMedia: (url: string): imageUrl => {
    const size = 768;
    return {
      src: generateUrl(url, size),
      media: `(min-width: 768px)`,
    };
  },

  generateDesktopSrcMedia: (url: string): imageUrl => {
    const size = 992;
    return {
      src: generateUrl(url, size),
      media: `(min-width: 992px)`,
    };
  },
};

export { ImageUrl };
