// from http://stackoverflow.com/a/34787336
function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function jsonFetch(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then((r) => r.json());
}
