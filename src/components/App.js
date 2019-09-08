import React from 'react';
import StatusList from './StatusList';
import StatusEdit from './StatusEdit';
import airtable from 'airtable';

class App extends React.Component {
  state = { people: [], selectedPerson: null, loading: true };

  componentDidMount = async () => {
    airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.REACT_APP_API_KEY
    });
    const base = airtable.base(process.env.REACT_APP_BASE_ID);

    await base('status')
      .select({
        view: 'Grid view'
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        this.setState({ people: records, loading: false });
      });
  };

  onPersonSelected = person => {
    this.setState({ selectedPerson: person });
  };

  onPersonSaved = person => {
    this.setState({ selectedPerson: null });
    console.log(person);
  };

  render() {
    return (
      <div>
        <p>
          Pinpoint allows people to update their status at work to see who is
          available and who isn't! Mouse-over each square to get additional
          information.
        </p>

        <StatusList
          people={this.state.people}
          onPersonSelected={this.onPersonSelected}
        />
        <StatusEdit
          person={this.state.selectedPerson}
          onPersonSaved={this.onPersonSaved}
        />
      </div>
    );
  }
}

export default App;
