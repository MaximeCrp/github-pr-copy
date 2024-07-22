async function copyMarkdownUrl() {
  await navigator.clipboard.writeText(
    `[${document.getElementsByClassName("js-issue-title")[0].innerText}](${
      window.location.href
    })`
  );
}

function callWhenFocused(callback) {
  return new Promise((resolve, reject) => {
    const _asyncCallFn = async () => {
      try {
        await callback();
        resolve();
      } catch (e) {
        reject(e);
      }
      window.removeEventListener("focus", _asyncCallFn);
    };

    window.addEventListener("focus", _asyncCallFn);
    console.info("Click back into the window to proceed.");
  });
}

callWhenFocused(copyMarkdownUrl);
