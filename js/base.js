const currentBrowser = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  let browser;
  
  switch (true) {
    case /edge/i.test(userAgent):
      browser = 'Edge';
      break;
    case /chrome/i.test(userAgent):
      browser = 'Chrome';
      break;
    case /firefox/i.test(userAgent):
      browser = 'Firefox';
      break;
    case /safari/i.test(userAgent):
      browser = 'Safari';
      break;
    case /opera|opr/i.test(userAgent):
      browser = 'Opera';
      break;
    case /yabrowser/i.test(userAgent):
      browser = 'Yandex';
      break;
    case /vivaldi/i.test(userAgent):
      browser = 'Vivaldi';
      break;
    case /brave/i.test(userAgent):
      browser = 'Brave';
      break;
    case /chromium/i.test(userAgent):
      browser = 'Chromium';
      break;
    case /maxthon/i.test(userAgent):
      browser = 'Maxthon';
      break;
    case /palemoon/i.test(userAgent):
      browser = 'Pale Moon';
      break;
    case /seamonkey/i.test(userAgent):
      browser = 'SeaMonkey';
      break;
    case /ucbrowser/i.test(userAgent):
      browser = 'UC Browser';
      break;
    case /vivaldi/i.test(userAgent):
      browser = 'Vivaldi';
      break;
    default:
      browser = 'Unknown';
      break;
  }

  return browser;
}

const isNotDesktop = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
    /Tablet/i,
    /Mobile/i,
    /Opera Mini/i,
    /IEMobile/i,
    /Kindle/i,
    /PlayBook/i,
    /Nintendo DSi/i,
    /Nintendo 3DS/i,
    /Nintendo Switch/i,
    /PlayStation Vita/i,
    /PlayStation Portable/i,
    /Xbox One/i,
    /Xbox Series X/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

const wBInChrome = () => {
  if (currentBrowser() != "Chrome") {
    const warnbrowser = document.createElement("span");
    warnbrowser.classList.add('fixed');
    warnbrowser.classList.add('top1');
    warnbrowser.classList.add('white');
    warnbrowser.appendChild(document.createTextNode("Works better in Chrome"));
    document.body.appendChild(warnbrowser);
  }
}

const initPage = () => {
  let textElements = $('h1, h2, h3, h4, h5, h6, p, span');
  const font = new FontFace('Poppins', 'url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2)', {
    style: "normal",
    weight: "400",
    display: "swap",
  });
  font.load().then(() => {
    wBInChrome();
    document.fonts.add(font);
    _.forEach(textElements, (element) => {
      element.classList.remove('loading-font');
      element.classList.add('white');
    });
    textElements = [];
  }).catch((error) => {
    console.error(`Failed to load font: ${error}`);
  });
  if (isNotDesktop()) {
    $('.warn-device-inside').css('display', 'flex');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span');
  for (let i = 0; i < textElements.length; i++) {
    textElements[i].classList.add('loading-font');
  }
  textElements = [];

  let libs = [
    "https://code.jquery.com/jquery-3.6.4.min.js",
    "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
  ];

  let scriptElements = [];
  let downloadedCount = 0;

  for (let i = 0; i < libs.length; i++) {
    var scr = document.createElement("script");
    scr.setAttribute("src", libs[i]);
    scr.setAttribute("async", true);
    document.head.appendChild(scr);
    scriptElements.push(scr);

    scr.addEventListener('load', () => {
      downloadedCount++;
      if (downloadedCount === libs.length) {
        initPage();
      }
    });
  }
});