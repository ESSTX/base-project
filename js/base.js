function currentBrowser() {
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

function isNotDesktop() {
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

function wBInChrome() {
  if (currentBrowser() != "Chrome") {
    const warnbrowser = document.createElement("span");
    warnbrowser.classList.add('fixed');
    warnbrowser.classList.add('top1');
    warnbrowser.classList.add('white');
    warnbrowser.appendChild(document.createTextNode("Works better in Chrome"));
    document.body.appendChild(warnbrowser);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span');
  for (let i = 0; i < textElements.length; i++) { textElements[i].classList.add('loading-font'); }
  const font = new FontFace('Poppins', 'url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2)', {
    style: "normal",
    weight: "400",
    display: "swap",
  });
  font.load().then(() => {
    wBInChrome();
    document.fonts.add(font);
    for (let i = 0; i < textElements.length; i++) {
      const element = textElements[i];
      element.classList.remove('loading-font');
      element.classList.add('white');
    }
  }).catch((error) => {
    console.error(`Failed to load font: ${error}`);
  });

  if (isNotDesktop()) {
    document.querySelector('.warn-device-inside').style.display = "flex";
  }
});