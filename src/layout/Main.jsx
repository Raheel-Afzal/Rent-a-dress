import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { logout } from '../store/actions/authAction'
import { useHistory } from 'react-router-dom'

const Main = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = () => {
        dispatch(logout())
        history.push('/auth')
    }
    return (
        <>

            <header>
                <Button color='danger' className='px-3 py-2' onClick={() => handleLogout()}>
                    Logout
                </Button>
            </header>
            {props.children}
            <footer></footer>
        </>
    )
}

export default Main
