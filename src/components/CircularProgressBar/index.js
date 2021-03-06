import React from 'react';
import './styles.css';

const MIN_PERCENTAGE = 0;
const MAX_PERCENTAGE = 100;
const MAX_X = 100;
const MAX_Y = 100;
const FULL_RADIUS = 50;
const CENTER_X = 50;
const CENTER_Y = 50;

class CircularProgressbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: props.initialAnimation ? 0 : props.percentage,
    };
  }

  componentDidMount() {
    if (this.props.initialAnimation) {
      this.initialTimeout = setTimeout(() => {
        this.requestAnimationFrame = window.requestAnimationFrame(() => {
          this.setState({
            percentage: this.props.percentage,
          });
        });
      }, 0);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.percentage !== this.props.percentage) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        percentage: this.props.percentage,
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.initialTimeout);
    window.cancelAnimationFrame(this.requestAnimationFrame);
  }

  getPathDescription() {
    const radius = this.getPathRadius();
    const rotation = this.props.counterClockwise ? 1 : 0;

    return `
      M ${CENTER_X},${CENTER_Y}
      m 0,-${radius}
      a ${radius},${radius} ${rotation} 1 1 0,${2 * radius}
      a ${radius},${radius} ${rotation} 1 1 0,-${2 * radius}
    `;
  }

  getPathStyles() {
    const diameter = Math.PI * 2 * this.getPathRadius();
    const truncatedPercentage = Math.min(Math.max(this.state.percentage, MIN_PERCENTAGE), MAX_PERCENTAGE);
    const dashoffset = ((100 - truncatedPercentage) / 100) * diameter;

    return {
      strokeDasharray: `${diameter}px ${diameter}px`,
      strokeDashoffset: `${this.props.counterClockwise ? -dashoffset : dashoffset}px`,
    };
  }

  getPathRadius() {
    return FULL_RADIUS - (this.props.strokeWidth / 2);
  }

  render() {
    const { percentage, textForPercentage, label, color, strokeWidth } = this.props;
    const pathDescription = this.getPathDescription();
    const text = textForPercentage ? textForPercentage(percentage) : null;

    return (
      <svg className={`circular-progressbar ${color}`} viewBox={`0 0 ${MAX_X} ${MAX_Y}`}>
        <path
          className="trail"
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
        />
        <path
          className="path"
          d={pathDescription}
          strokeWidth={strokeWidth}
          fillOpacity={0}
          style={this.getPathStyles()}
        />
        {
          text ? (
            <text
              className="text"
              x={CENTER_X}
              y={CENTER_Y}
            >
              {text}
            </text>
          ) : null
        }
        {
          label ? (
            <text
              className="label"
              x={CENTER_X}
              y={CENTER_Y + 14}
            >
              {label}
            </text>
          ) : null
        }
      </svg>
    );
  }
}

CircularProgressbar.defaultProps = {
  strokeWidth: 6,
  label: '',
  color: 'primary',
  initialAnimation: true,
  counterClockwise: false,
  textForPercentage: (percentage) => `${percentage}%`,
};

export default CircularProgressbar;
