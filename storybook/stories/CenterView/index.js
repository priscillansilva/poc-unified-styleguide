import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

export default function CenterView({children}) {
  return <div style={style.main}>{children}</div>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
