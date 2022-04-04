import React from 'react';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser } = this.props
    return(
      <div className="profile-show">
        <h1 className="profile-header"> Personal info</h1>
        <li> <div>Full Name</div>
          <p>{currentUser.fname + " " + currentUser.lname}</p>
        </li>
        <li> <div>Username</div>
          <p>{currentUser.username}</p>
        </li>
        <li> <div>Email</div>
          <p>{currentUser.email}</p>
        </li>
        <li> <div>Birthday</div>
          <p>{currentUser.birthday}</p>
        </li>
      </div>
    )
  }
}

export default ProfileShow