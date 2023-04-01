import { Link } from 'react-router-dom';
// import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to='/'>
          Trave<span>log</span>
        </Link>
      </li>
      <li>
        <Link to='/packages'>Packages</Link>
      </li>
      <li>
        <Link to='/plan_a_trip'>Plan a trip</Link>
      </li>
      <li>
        <Link to='/community'>Travellers community</Link>
      </li>
      <li>
        <Link to='/sign_out'>Sign out</Link>
      </li>
      <li>
        <Link to='/cart'>cart</Link>
      </li>
    </ul>
  );
}
