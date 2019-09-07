import React from 'react';
import StatusList from './StatusList';
import airtable from 'airtable';

class App extends React.Component {
  state = { people: [], loading: true };

  componentDidMount = async () => {
    airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.REACT_APP_API_KEY
    });
    const base = airtable.base(process.env.REACT_APP_BASE_ID);
    let result = [];

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

    console.log(result);
  };
  render() {
    return <StatusList people={this.state.people} />;
  }
}

export default App;
