import React from 'react';
import StatusItem from './StatusItem';

class StatusList extends React.Component {
  render;
  render() {
    const renderedList = this.props.people.map(person => {
      return (
        <StatusItem key={person.id} status={person.fields} />
      );
    });
    return <div className="ui grid">{renderedList}</div>;
  }
}

export default StatusList;
