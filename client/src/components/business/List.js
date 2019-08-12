import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import TableRow from './TableRow'


class List extends Component {
  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
  }
  constructor(props) {
    super(props)
    this.state = {
      business: []
    }
  }
  componentDidMount() {
    // axios.get(`${process.env.REACT_APP_DB_URL}/business`)
    axios.get('/business')
      .then(response => {
        this.setState({ business: response.data })
      })
      .catch(err => console.log(err))
  }
  tabRow() {
    return this.state.business.map((object, i) => <TableRow obj={object} key={i}/>)
  }
  
  render() {
    const { user } = this.props.auth
    return (
      <div>
        <b>Hey there,</b> {user.name.split(" ")[0]}
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
        logout
        </button>        
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
List.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(
  mapStateToProps,
  { logoutUser }
)(List)
