import React from 'react';
import './StatusItem.css';

class StatusItem extends React.Component {
  getRandomDelay() {
    const times = ['slow', 'fast', 'faster'];
    const index = Math.floor(Math.random() * times.length);

    return `four wide column animated flipInX ${times[index]}`;
  }

  render() {
    return (
      <div
        className={`flip-card ${this.getRandomDelay()}`}
        onClick={() => {
          this.props.onPersonSelected(this.props.person);
        }}
      >
        <div className={`flip-card-inner ${this.props.person.status}`}>
          <div className="flip-card-front">
            <h3>
              {this.props.person.firstname} {this.props.person.lastname}
            </h3>
          </div>
          <div className="flip-card-back">
            <p>
              {this.props.person.status[0] === 'in'
                ? `${this.props.person.firstname} is currently in.`
                : this.props.person.notes}
            </p>
            <p>
              {this.props.person.returning === undefined
                ? ''
                : `${this.props.person.firstname} will be back on ${this.props.person.returning}`}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusItem;
