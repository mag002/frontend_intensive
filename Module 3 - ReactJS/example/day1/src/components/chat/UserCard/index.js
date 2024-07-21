function UserCard({ name, age, avatar, online }) {
    return <div className="user-item">
        <img src={avatar} alt={`${name}-avatar`} className="avatar" />
        <div className="user-info">
            <div className="user-name">{name} - {age}</div>
            <div className="user-status">{online ? "Online" : "Offline"}</div>
            {/*  online/offline */}
        </div>
    </div>
}
export default UserCard
