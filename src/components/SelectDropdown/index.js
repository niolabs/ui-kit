import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './styles.css';

export default class ThemedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: false, dropdownOpen: false };
    this.handleClick = this.handleClick.bind(this);
    this.setValue = this.setValue.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  /* eslint-disable react/no-did-mount-set-state */
  componentDidMount() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      const valueArray = !defaultValue.length ? [defaultValue] : defaultValue;
      valueArray.map((v) => this.setValue(v.value));
    }
  }

  setValue(v) {
    const value = v;
    this.setState({ value });
    this.props.onChange(value);
  }

  toggle() {
    const { dropdownOpen } = this.state;

    this.setState({
      dropdownOpen: !dropdownOpen,
    });
  }

  handleClick(v) {
    this.setValue(v);
  }

  render() {
    const { placeholder = 'Please Choose', options, defaultValue, inverse, ...rest } = this.props;
    const { value, dropdownOpen } = this.state;
    const optionsArray = !options.length ? [options] : options;

    return (
      <Dropdown {...rest} className={inverse ? 'select-dropdown inverse' : 'select-dropdown'} isOpen={dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {value !== false ? value : placeholder}
        </DropdownToggle>
        <DropdownMenu>
          { optionsArray && optionsArray.map((option) => (
            <DropdownItem key={option.value} onClick={() => this.handleClick(option.value)}>
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
