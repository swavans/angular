/**
 * Documentation Link Plugin
 *
 * Parse the each section and look for documentation links data
 * attributes.
 *
 * ```html
 * <section data-documentation-link="http://mywebsite.com/doc">
 * </section>
 * ```
 */
var RevealDocLinks = (function() {
  let config = {}
  const DOC_ATTR = "documentationLink";
  const STYLING = `
    .reveal > .documentation-link {
      position: absolute;
      bottom: 10px;
      left: 10px;
      width: 30px;
      opacity: 0.5;
    }

    .reveal > .documentation-link:hover {
      opacity: 1;
    }
  `;
  let anchor;
  const revealElement = document.querySelector(".reveal");

  function detectDocumentationLink(event) {
    const currentSlide = event.currentSlide;
    const groupSection = currentSlide.parentElement;
    const docLink = currentSlide.dataset[DOC_ATTR]
      || (groupSection && groupSection.dataset[DOC_ATTR]);

    if (docLink) {
      anchor.href = docLink;
      revealElement.appendChild(anchor);
    } else {
      if (anchor.parentElement === revealElement) {
        revealElement.removeChild(anchor);
      }
    }
  }

  Reveal.addEventListener("slidechanged", detectDocumentationLink);

  return {
    init(config) {
      anchor = document.createElement("a");
      anchor.setAttribute("target", "_blank");
      anchor.classList.add("documentation-link", "image");
      anchor.title = "Documentation Link";
      anchor.innerHTML = `
        <img
          class="nobackground"
          src="${config.image}" />
      `;

      const styles = document.createElement("style");
      styles.setAttribute("type", "text/css");
      styles.textContent = STYLING;
      document.head.appendChild(styles);
    }
  }
})();
