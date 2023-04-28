function isMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
    //      /Windows/i
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span');
  for (let i = 0; i < textElements.length; i++) {
    const element = textElements[i];

    element.classList.add('loading-font');

    const font = new FontFace('Poppins', 'url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2)', {
      style: "normal",
      weight: "400",
      display: "swap",
    });
    font.load().then(() => {

      document.fonts.add(font);

      element.classList.remove('loading-font');
      element.classList.add('white');
    }).catch((error) => {
      console.error(`Failed to load font: ${error}`);
    });
  }

  if (isMobile()) {
    document.querySelector('.error-inside').style.display = "flex";
  }
});