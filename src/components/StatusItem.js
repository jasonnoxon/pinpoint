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
        <div className={`flip-card-inner ${this.props.person.fields.status}`}>
          <div className="flip-card-front">
            <h3>
              {this.props.person.fields.firstname}{' '}
              {this.props.person.fields.lastname}
            </h3>
          </div>
          <div className="flip-card-back">
            <p>
              {this.props.person.fields.status[0] === 'in'
                ? `${this.props.person.fields.firstname} is currently in.`
                : this.props.person.fields.notes}
            </p>
            <p>
              {this.props.person.fields.returning === undefined
                ? ''
                : `${this.props.person.fields.firstname} will be back on ${this.props.person.fields.returning}`}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusItem;
