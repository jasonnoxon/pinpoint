import axios from 'axios';

export default axios.create({
  baseUrl: `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE}/?view=Grid%20view`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
});
