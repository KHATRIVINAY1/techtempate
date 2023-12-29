


function scrollleftSection() {
    const section = document.querySelector('.scroller-section');
    section.scrollBy({
        left: -25 * parseFloat(getComputedStyle(document.documentElement).fontSize), // 25 REM converted to pixels
        behavior: 'smooth' // Smooth scrolling behavior
      });
    }

function scrollrightSection() {
    const section = document.querySelector('.scroller-section');
    section.scrollBy({
        left: 25 * parseFloat(getComputedStyle(document.documentElement).fontSize), // 25 REM converted to pixels
        behavior: 'smooth' // Smooth scrolling behavior
      });
  }