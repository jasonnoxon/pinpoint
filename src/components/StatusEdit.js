import React from 'react';

class StatusEdit extends React.Component {
  render() {
    if (!this.props.person) {
      return <div className="ui segment">Select a user by clicking</div>;
    }

    return (
      <div className="ui segment">
        <div class="ui action input">
          <input type="text" value={this.props.person.firstname} />
          <input type="text" value={this.props.person.lastname} />
          <select
            class="ui compact selection dropdown"
            defaultValue={this.props.person.status}
          >
            <option value="in">In</option>
            <option value="out">Out</option>
            <option value="Busy">Busy</option>
          </select>
          <input type="text" value={this.props.person.notes} />
          <div
            class="ui button"
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
