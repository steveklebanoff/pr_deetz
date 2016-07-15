// TODO: would be nice to put this config stuff
// in a seperate module and not expose this stuff on window
const statusEl = document.getElementById('save-status');
const authTokenEl = document.getElementById('auth-token');
const authFormEl = document.getElementById('auth-form');
const loadingEl = document.getElementById('auth-form-loading');

function saveOptions() {
  loadingEl.style.display = 'block';
  authFormEl.style.display = 'none';

  const authToken = authTokenEl.value;
  chrome.storage.sync.set({ authToken }, () => {
    // Update status to let user know options were saved.
    statusEl.textContent = 'Options saved.';

    loadingEl.style.display = 'none';
    authFormEl.style.display = 'block';
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({ authToken: '' }, (config) => {
    authTokenEl.value = config.authToken;

    loadingEl.style.display = 'none';
    authFormEl.style.display = 'block';
  });
}

restoreOptions();
document.getElementById('save').addEventListener('click', saveOptions);
