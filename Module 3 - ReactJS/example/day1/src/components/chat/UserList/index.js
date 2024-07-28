import UserCard from "../UserCard";

function UserList() {
    // life cyles
    const listUser = [
        {
            "name": "Koss",
            "age": 35,
            "avatar": "https://loremflickr.com/640/480?lock=280288521355264",
            "online": "false"
        },
        {
            "name": "Kling",
            "age": 22,
            "avatar": "https://picsum.photos/seed/KxK6V/640/480",
            "online": "true"
        },
        {
            "name": "Wintheiser",
            "age": 36,
            "avatar": "https://picsum.photos/seed/Q6JM4qiHL/640/480",
            "online": "true"
        },
        {
            "name": "Goldner-Rodriguez",
            "age": 37,
            "avatar": "https://picsum.photos/seed/DGSpzgh/640/480",
            "online": "true"
        },
        {
            "name": "Robel",
            "age": 28,
            "avatar": "https://loremflickr.com/640/480?lock=6145994322345984",
            "online": "true"
        }
    ]

    return <div className="sidebar">
        {listUser.map(({ name, age, online, avatar }, index) => {
            return <UserCard key={`user_card_${index}`} name={name} age={age} online={online} avatar={avatar} />
        })}
    </div>
}
export default UserList