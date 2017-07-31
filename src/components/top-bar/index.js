import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { SCREEN_SIZES, SCREEN_SIZE_SMALL, TOP_BAR_POSITIONS } from '../../util/constants/index';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const TopBarItem = ({
  className,
  position,
  ...restProps
}) => {
  const classNames =
    cx(className, cxStyles({ [`top-bar-${position}`]: includes(TOP_BAR_POSITIONS, position) }));

  return <div {...restProps} className={classNames} />;
};

TopBarItem.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(TOP_BAR_POSITIONS).isRequired,
};

export const TopBarTitle = ({
  className,
  ...restProps
}) => {
  const classNames = cx(className, cxStyles('top-bar-title'));

  return <div {...restProps} className={classNames} />;
};

TopBarTitle.propTypes = {
  className: PropTypes.string,
};

export const TopBar = ({
  className,
  stack,
  ...restProps
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        'top-bar',
        {
          [`stacked-for-${stack}`]: includes(SCREEN_SIZES, stack),
        }
      )
    );

  return <div {...restProps} className={classNames} />;
};

TopBar.propTypes = {
  className: PropTypes.string,
  stack: PropTypes.oneOf(SCREEN_SIZES),
};
TopBar.defaultProps = {
  stack: SCREEN_SIZE_SMALL,
};

TopBar.Item = TopBarItem;
TopBar.Title = TopBarTitle;

export default TopBar;
