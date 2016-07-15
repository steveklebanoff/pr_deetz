export default (urlPath) => {
  const urlParts = urlPath.split('/');
  if (urlParts.length !== 5) {
    throw new Error(`Unexpected URL Parts Length of ${urlParts.length}`);
  }
  if (urlParts[0] !== '' || urlParts[3] !== 'commit') {
    throw new Error(`Unexpected urlParts ${urlParts}`);
  }
  return {
    repo: `${urlParts[1]}/${urlParts[2]}`,
    commit: urlParts[4],
  };
};
