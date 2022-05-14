import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://initi-loadb-9ou3765pa8ig-966396263.eu-central-1.elb.amazonaws.com:8080/welcome`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <h1>{this.state.persons}</h1>
    )
  }
}