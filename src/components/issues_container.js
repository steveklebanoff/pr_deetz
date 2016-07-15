import React from 'react';
import Error from './error';
import Issue from './issue';

const { PropTypes } = React;

function IssuesContainer(props) {
  if (props.isLoading) {
    return (<div className="pr-deetz-container">Loading Issues&hellip;</div>);
  }

  if (props.errorMessage) {
    return <Error message={props.errorMessage} />;
  }

  if (props.issues && props.issues.length === 0) {
    return (<div className="pr-deetz-container">Not found in any issues.</div>);
  }

  return (
    <div className="pr-deetz-container">
      Seen In:
      {props.issues.map((i) => <Issue title={i.title} url={i.url} key={i.url} />)}
    </div>
  );
}

IssuesContainer.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  issues: React.PropTypes.array,
  errorMessage: React.PropTypes.string,
};

export default IssuesContainer;
