import CardIU from '../components/CardIU'
import Button from '../components/Button'
// import useAuthStore from '../../store/authStore'
import { NavLink, useNavigate } from 'react-router'
import { useCallback } from 'react'
import { useAuthStore } from '../../store/authStore'

type SignProps = {
    onAction?: () => void;
};


const SignIn = ({ onAction }: SignProps) => {

    const { loginGoogleWithPopUp, logout, userLooged } = useAuthStore()
    const navigate = useNavigate()

    const handleLogin = useCallback(() => {
        loginGoogleWithPopUp()
            .then(() => {
                if (onAction) onAction()
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
                        <div className='flex gap-4' >
                            <Button onClick={handleLogout} label="Cerrar Sesion" color="red" />
                            <Button  label="Ir Perfil" onClick={() => navigate('/perfil')}  color="green" />
                           
                        </div>
                    )
                }
            </div>
        </CardIU>
    )
}

export default SignIn