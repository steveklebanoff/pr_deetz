import React from 'react';

const { PropTypes } = React;

class Error extends React.Component {
  clickSettings() {
    window.open(chrome.runtime.getURL('settings/settings.html'));
  }
  render() {
    return (
      <div className="pr-deetz-error">
        <p className="pr-deetz-error-message">
          <span className="pr-deetz-error-highlight">
            Error fetching issues
          </span>: {this.props.message}.
        </p>
        <p className="pr-deetz-error-suggestion">
          If this is a private repo, you need to configure an auth token in
          <a className="pr-deetz-error-suggestion-link" onClick={this.clickSettings} href="#">
            settings
          </a>.
        </p>
      </div>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
