import commitFromUrl from './support/commit_from_url';
import getIssues from './support/get_issues';
import IssuesContainer from './components/issues_container';
import React from 'react';
import ReactDOM from 'react-dom';

import './css/github_pr.css';

function setup() {
  const reactDiv = document.createElement('div');
  const commitDiv = document.getElementsByClassName('commit-meta')[0];
  commitDiv.parentNode.insertBefore(reactDiv, commitDiv);

  ReactDOM.render(<IssuesContainer isLoading={true}/>, reactDiv);

  chrome.storage.sync.get({ authToken: '' }, (config) => {
    const repoInfo = commitFromUrl(window.location.pathname);
    getIssues(repoInfo.repo, repoInfo.commit, config.authToken).then((issues) => {
      ReactDOM.render(
        <IssuesContainer isLoading={false} issues={issues} />, reactDiv
      );
    }).catch((e) => {
      ReactDOM.render(
        <IssuesContainer isLoading={false} errorMessage={e.message} />, reactDiv
      );
    });
  });
}

if (document.readyState === 'interactive' ||
    document.readyState === 'complete') {
  setup();
} else {
  document.addEventListener('DOMContentLoaded', setup);
}
