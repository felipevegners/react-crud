import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      business: []
    }
  }
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_DB_URL}/business`)
      .then(response => {
        this.setState({ business: response.data })
      })
      .catch(err => console.log(err))
  }
  tabRow() {
    return this.state.business.map((object, i) => <TableRow obj={object} key={i}/>)
  }
  
  render() {
    return (
      <div>
        <h5 align="center">Atendimentos</h5>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Empresa</th>
              <th>Contato</th>
              <th colSpan="2">Ação</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
    )
  }
}
