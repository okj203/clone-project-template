import { connect } from 'react-redux';
import ProfileShow from './profile_show';

const mapStateToProps = ({ session, errors }) => {
  return {
    currentUser: session.currentUser,
    errors: errors.session
  };
};

export default connect(
  mapStateToProps, null)(ProfileShow);