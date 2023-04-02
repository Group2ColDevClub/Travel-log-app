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
        {Object.entries(routes).map(([title, route]) => (
          <li key={`route_${title}`}>
            <Link to={route} className={`${styles.navbar_item} ${location.pathname === route ? styles.selected_nav : ''}`}>
              {title.replace(/_/g, ' ')}
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
