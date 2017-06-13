
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import Row from './row'
import { range } from 'underscore'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const rows = this.props.rows.map((row) => {
      return <Row key={row} days={row} />
    })
    return (
      <div>
        {rows}
      </div>
    );
  }
}

function mapStateToProps (state) {
  var arr = range(1,7)
  var arrTwo = range(8,14)
  var arrThree = range(15,21)
  var arrFour = range(22,28)
  return {
    rows: [arr, arrTwo, arrThree, arrFour]
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, null)(HomePage);
