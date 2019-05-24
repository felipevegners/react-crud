import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axiosService from '../utils/axios_service'
class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
      axios.get('/business/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))

        document.location.reload(true)
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.business_name}
          </td>
          <td>
            {this.props.obj.business_gst_number}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    )
  }
}

export default TableRow