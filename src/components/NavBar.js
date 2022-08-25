import logo from '../logo.svg'

const NavBar = () => {
    return (
    <div className='NavBar-container'>
        <a href='/'>
        <img src={logo} className="NavBar-logo" alt="logo"/>
        </a>
        <div className='NavBar-navLinks'>
            <ul>
                <li>
                    <a href='/'>home</a>
                </li>
                <li>
                    <a href=''>cars</a>
                </li>
                <li>
                    <a href=''>rockets</a>
                </li>
            </ul>
        </div>
        <button className='NavBar-login'>login</button>
    </div>
    );
};

export default NavBar;