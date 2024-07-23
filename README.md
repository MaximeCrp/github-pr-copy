# GitHub copy PR

Simplify copying GitHub PRs title and link to send for review in internal communication channels.

## Copy Markdown Title

Minified JS script that copies the current URL and formats it as a markdown link. For the label, the script looks for the `js-issue-title` class that should be the PR title if the window is a PR window.

Minified with: https://minify-js.com/

### How to use

1. Copy the .min.js raw content
2. Navigate to a GitHub PR
3. Open the dev tools console
4. Paste into the console and press Enter
5. Click back into the PR window
6. Markdown has been copied into your clipboard, paste into anything

Tips: After pasting into Slack, press Cmd + Shift + F (on macOS) to correctly format the markdown message. It is also possible to always use Markdown formatting in Slack settings, but this removes the text formatting toolbar in the composer.
