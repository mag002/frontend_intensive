function User(props) {
    // Props
    return <div>
        <h5>
            User name: {0}
        </h5>
        <p>Status: {props.status}</p>
    </div>
}
export default User

// UserCard - name, age, avatar, status
/**
 * <div>
*   <img src={avatar}
    *   <h4>Name: [name] - [age] </h4>
    *   <p>Status: online/offline</p>
 * </div>
 */