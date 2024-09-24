import Header from '../../components/Header'
import './styles.css'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}