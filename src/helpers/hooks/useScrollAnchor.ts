import { useLayoutEffect } from "react"

export default function useScrollAnchor() {
  useLayoutEffect(() => {
    const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

    for (let anchor = 0; anchor < smoothScrollAnchor.length; anchor++) {
      const element = smoothScrollAnchor[anchor];

      element.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href && href.startsWith('#')) { // Check if href is a string and starts with '#'
          const targetElement = document.querySelector(href);
          if (targetElement !== null) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    }

    return () => { };
  })
}
