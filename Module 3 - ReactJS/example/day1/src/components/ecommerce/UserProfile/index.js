import { useEffect } from "react"
import { fetchProtectedData, fetchUserData } from "../../../services/authServices"

function UserProfile() {
    useEffect(() => {
        fetchProtectedData('/me');
    }, [])
    return <h1>User Profile</h1>
}

export default UserProfile