import jsonFetch from './json_fetch';

function parseIssuesResponse(githubResponse) {
  const items = githubResponse.items;
  if (items.length === 0) {
    return items;
  }
  return items.map((issue) => {
    return {
      title: issue.title,
      url: issue.html_url,
      username: issue.user.login,
    };
  });
}

function getIssues(repo, commitHash, authToken) {
  let fetchOptions = {};
  if (authToken !== '') {
    fetchOptions = { headers: { Authorization: `token ${authToken}` } };
  }

  return new Promise((fulfill, reject) => {
    const apiUrl = `https://api.github.com/search/issues?q=${commitHash}+repo:${repo}`;
    jsonFetch(apiUrl, fetchOptions)
      .then((r) => {
        return fulfill(parseIssuesResponse(r));
      })
      .catch(reject);
  });
}

export default getIssues;
