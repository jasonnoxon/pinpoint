import React from 'react';
import './StatusItem.css';

class StatusItem extends React.Component {
  state = { front: true };
  onStatusItemClick = () => {
    console.log('clicked');
  };
  getRandomDelay() {
    const times = ['slow', 'fast', 'faster'];
    const index = Math.floor(Math.random() * times.length);

    return `four wide column animated flipInX ${times[index]}`;
  }

  render() {
    return (
      <div
        className={`flip-card ${this.getRandomDelay()}`}
        onClick={this.onStatusItemClick}
      >
        <div className={`flip-card-inner ${this.props.status.status}`}>
          <div className="flip-card-front">
            <h3>
              {this.props.status.firstname} {this.props.status.lastname}
            </h3>
          </div>
          <div className="flip-card-back">
            <p>
              {this.props.status.status[0] === 'in'
                ? `${this.props.status.firstname} is currently in.`
                : this.props.status.notes}
            </p>
            <p>
              {this.props.status.returning === undefined
                ? ''
                : `${this.props.status.firstname} will be back on ${this.props.status.returning}`}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusItem;
