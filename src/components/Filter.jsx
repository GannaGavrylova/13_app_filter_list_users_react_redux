import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "./styles/Filter.module.css";

function Filter({ setFilterUser }) {
  return (
    <div className={styles.filter_container}>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Filter users"
        onChange={(e) => setFilterUser(e.target.value)}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterUser: (filter) => dispatch(setFilter(filter)),
  };
};
export default connect(null, mapDispatchToProps)(Filter);
