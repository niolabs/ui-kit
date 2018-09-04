import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ThemedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleClick = this.handleClick.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  /* eslint-disable react/no-did-mount-set-state */
  componentDidMount() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      const valueArray = !defaultValue.length ? [defaultValue] : defaultValue;
      valueArray.map(v => this.setValue(v.value));
    }
  }

  setValue(v) {
    let { value } = this.state;
    const isRadio = this.props.type === 'radio';

    if (value.indexOf(v) === -1 && isRadio) {
      value = [v];
    } else if (value.indexOf(v) === -1) {
      value.push(v);
    } else if (isRadio) {
      value = [];
    } else {
      value.splice(value.indexOf(v), 1);
    }

    this.setState({ value });
    this.props.onChange(!this.props.options.length || isRadio ? value[0] : value);
  }

  handleClick(v) {
    this.setValue(v);
  }

  render() {
    const { options, type, ...rest } = this.props;
    const optionsArray = !options.length ? [options] : options;

    return (
      <div {...rest}>
        { optionsArray && optionsArray.map(option => (
          <div key={`${type}${option.value}`} onClick={() => this.handleClick(option.value)}>
            <div className={`radio-checkbox ${(this.state.value.indexOf(option.value) !== -1) ? 'show' : 'hidden'}`}>
              { type === 'checkbox' ? <div className="nio nio-check-mark" /> : <div className="dot" /> }
            </div>
            <div className="radio-checkbox-label">{option.label}</div>
          </div>
        ))}
      </div>
    );
  }
}

ThemedComponent.propTypes = {
  type: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
};

export default ThemedComponent;
