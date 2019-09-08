import React from 'react';
import StatusItem from './StatusItem';

class StatusList extends React.Component {
  render;
  render() {
    const renderedList = this.props.people.map(person => {
      return (
        <StatusItem
          key={person.id}
          person={person}
          onPersonSelected={this.props.onPersonSelected}
        />
      );
    });
    return <div className="ui grid">{renderedList}</div>;
  }
}

export default StatusList;
