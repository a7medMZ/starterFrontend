import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://initi-loadb-1yuwzvza322a-1463299058.eu-central-1.elb.amazonaws.com:8080/welcome`)
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