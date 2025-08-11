document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero h1");

  if (heroTitle) {
    const text = heroTitle.textContent.trim();

    // Estimate how many characters fit in half the page
    const avgCharWidth = 10; // adjust based on font size/style
    const halfPageChars = Math.floor(window.innerWidth / 2 / avgCharWidth);

    // If text length exceeds estimated half-page characters
    if (text.length > halfPageChars) {
      // Find nearest space in middle to insert line break
      let middleIndex = Math.floor(text.length / 2);
      let spaceBefore = text.lastIndexOf(" ", middleIndex);
      let spaceAfter = text.indexOf(" ", middleIndex);

      let breakIndex = (middleIndex - spaceBefore) < (spaceAfter - middleIndex)
        ? spaceBefore
        : spaceAfter;

      if (breakIndex !== -1) {
        heroTitle.innerHTML = text.slice(0, breakIndex) + "<br>" + text.slice(breakIndex + 1);
      }
    }
  }
});
