import styles from "./styles/UserItem.module.css";
function UserItem({ user }) {
  return (
    <div className={styles.item_container}>
      <p>{user}</p>
    </div>
  );
}

export default UserItem;
