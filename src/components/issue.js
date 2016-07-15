import React from 'react';
const { PropTypes } = React;

function Issue(props) {
  return (
    <span className="pr-deetz-issue">
      <a href={props.url}>{props.title}</a>
    </span>
  );
}

Issue.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
};

export default Issue;
