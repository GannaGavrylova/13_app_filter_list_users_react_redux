import { connect } from "react-redux";
import UserItem from "./UserItem";
import styles from "./styles/UserList.module.css";

function UserList({ users }) {
  return (
    <div className={styles.list_container}>
      {users.length > 0 ? (
        users.map((user, index) => <UserItem key={index} user={user} />)
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const filteredUsers = state.user.filter((u) =>
    u.toLowerCase().includes(state.filter.toLowerCase())
  );
  return {
    users: filteredUsers,
  };
};
export default connect(mapStateToProps)(UserList);
