import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TitleIcon({ icon, title }) {
  return (
    <Fragment>
      <FontAwesomeIcon icon={icon} fixedWidth size="lg" />
      <span> {title}</span>
    </Fragment>
  );
}

TitleIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string.isRequired
};
