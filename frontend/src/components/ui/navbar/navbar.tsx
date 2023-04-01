import { Link, useLocation } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import styles from './navbar.module.css';

export default function NavBar() {
  const location = useLocation();
  const routes = {
    Packages: '/packages',
    Plan_a_trip: '/plan_a_trip',
    Travelers_community: '/community',
    Sign_in: '/sign_in',
  };
  return (
    <ul className={styles.navbar_container}>
      <span>
        <li>
          <Link className={styles.navbar_item} to='/'>
            Trave<span className={styles.title_log}>Log</span>
          </Link>
        </li>
      </span>
      <span className={styles.navbar_pages}>
        {Object.entries(routes).map((val) => (
          <li key={`route_${val[0]}`}>
            <Link to={val[1]} className={`${styles.navbar_item} ${location.pathname === val[1] ? styles.selected_nav : ''}`}>
              {val[0].replace(/_/g, ' ')}
            </Link>
          </li>
        ))}
        <li>
          <Link to='/cart' className={styles.navbar_item}>
            <BsCart2 />
          </Link>
        </li>
      </span>
    </ul>
  );
}
