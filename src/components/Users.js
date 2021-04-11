import React, { Component } from 'react';
import { connect} from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => 
    <ul key={index}>
      <li>Username: {user.username}, Hometown: {user.hometown}</li>
    </ul>
    )
    return (
      <div>
        <ul>
          User count: 
          {this.props.userCount}
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  return { 
    users: state.users,
    userCount: state.users.length
  }
}
export default connect(mapStateToProps)(Users)
