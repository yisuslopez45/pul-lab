import CardIU from '../components/CardIU'
import Button from '../components/Button'
// import useAuthStore from '../../store/authStore'
import { useNavigate } from 'react-router'
import { useCallback } from 'react'
import { useAuthStore } from '../../store/authStore'

const SignIn = () => {

    const { loginGoogleWithPopUp, logout, userLooged } = useAuthStore()
    const navigate = useNavigate()

    const handleLogin = useCallback(() => {
        loginGoogleWithPopUp()
            .then(() => {
                console.log(userLooged);
                navigate('/perfil')
            })
            .catch(() => navigate('/'))

    }, [loginGoogleWithPopUp, navigate])

    const handleLogout = useCallback(() => {
        logout()
    }, [logout])

    return (
        <CardIU title="Iniciar Sesion">
            <img
                src="/images/Google.png"
                className="w-52 h-52 m-auto"
            ></img>
            <div className="mt-6 flex justify-center">
                {!userLooged
                    ? (
                        <Button onClick={handleLogin} label="Iniciar con Goolge" color="amber" />
                    )
                    : (
                        <Button onClick={handleLogout} label="Cerrar Sesion" color="red" />
                    )
                }
            </div>
        </CardIU>
    )
}

export default SignIn