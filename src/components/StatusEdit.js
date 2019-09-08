import React from 'react';

class StatusEdit extends React.Component {
  render() {
    if (!this.props.person) {
      return <div className="ui segment">Select a user by clicking</div>;
    }

    return (
      <div className="ui segment">
        <div className="ui action input">
          <input
            type="text"
            value={this.props.person.fields.firstname}
            onChange={e => {
              this.props.person.fields.firstname = e.target.value;
            }}
          />
          <input
            type="text"
            value={this.props.person.fields.lastname}
            onChange={e => {
              this.props.person.fields.lastname = e.target.value;
            }}
          />
          <select
            className="ui compact selection dropdown"
            value={this.props.person.fields.status[0]}
            onChange={e => {
              this.props.person.fields.status[0] = e.target.value;
            }}
          >
            <option value="in">In</option>
            <option value="out">Out</option>
            <option value="Busy">Busy</option>
          </select>
          <input
            type="text"
            value={this.props.person.fields.notes}
            onChange={e => {
              this.props.person.fields.notes = e.target.value;
            }}
          />
          <div
            className="ui button"
            onClick={() => {
              this.props.onPersonSaved(this.props.person);
            }}
          >
            Save
          </div>
        </div>
      </div>
    );
  }
}

export default StatusEdit;
