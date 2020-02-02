import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TitleIcon extends Component {
  static propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string.isRequired
  };

  render() {
    const { icon, title } = this.props;

    return (
      <Fragment>
        <FontAwesomeIcon icon={icon} fixedWidth size="lg" />
        <span> {title}</span>
      </Fragment>
    );
  }
}
