import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        const logout = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    localStorage.removeItem('token')
                    navigate('/captainlogin')
                }
            } catch (error) {
                console.error("Logout failed", error);
            }
        }

        logout();
    }, [navigate]);

    return (
        <div>UserLogout</div>
    )
}


export default CaptainLogout