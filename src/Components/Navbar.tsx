



import { Link } from 'react-router-dom';

const Navbar = (props: any) => {
    return (
        <nav className = 'indigo'>
            <div>
                <span> Navbar </span>
                <ul className = 'right'>
                    <li><Link to = '/'> Home </Link> </li>
                    <li><Link to = '/appointments'> Appointments </Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;