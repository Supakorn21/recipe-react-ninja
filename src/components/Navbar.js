import './Navbar.css'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useTheme } from '../hooks/useTheme'


export default function NavBar() {
    const {color} = useTheme()

    return (
        <div className='navbar' style={{background: 'blue'}} >
            <nav>
                <Link to='/' className='brand'>
                <h1>Cooking Ninja</h1>
                </Link>
                <SearchBar/>
                <Link to='/create'>Create Recipe</Link>
            </nav>
        </div>
    )
}
