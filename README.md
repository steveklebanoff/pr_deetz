# PR Deetz

When viewing a commit, it can be super useful to know what pull request the commit was introduced in.

This is possible through github for PRs that have been merged. On the commit page, next to the branch names, there is a link to a pull request number.  This extension expands on this functionality by:
- Shows pull requests that haven't been merged yet
- Shows actual names of the Pull Requests
- Shows any issues that reference the commit

![new way](https://www.evernote.com/shard/s318/sh/6fd2522f-28fd-470e-b7ba-898794734bab/85172cae3102dc657f6045b7d71ea073/deep/0/Screenshot%207/15/16,%2012:27%20PM.jpg)

# Installation

Install from the [Chrome Store](https://chrome.google.com/webstore/detail/prdeetz/mjljchhaghlgdbpmnangcifkfdccomjc). 

If you'd like to develop the extension, see instructions below

## How to run development environment

Boilerplate from https://github.com/schovi/webpack-chrome-extension

First, run `npm install`.

Now, you should do this before editing any code to see how it works:

1. run `npm start` (or `npm run dev`) which will start webpack-dev-server
2. in Chrome open `chrome://extensions/`
3. check `Developer mode`
4. click on `Load unpacked extension`
5. add REPOSITORY_DIRECTORY/build
6. Navigate to a commit on github and you should now see issue information appear.

## How to build extension

1. run `npm run build`
2. It will compile scripts, styles and other assets into release/build/
3. It will make chrome extension into release/build.crx with certificate release/build.pem

## Troubleshooting

1. Everything looks fine, but scripts from webpack arent loading.
  - Probably problem with development ssl certificates. Open any script (i.e. https://localhost:3001/background/index.js) in separate tab and allow chrome to load it anyway. Then reload extension.
