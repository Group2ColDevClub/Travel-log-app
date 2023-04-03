import { Link, useLocation } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import styles from './navbar.module.css';

export default function NavBar() {
  const location = useLocation();
  const routes = [
    { title: 'Packages', path: '/packages' },
    { title: 'Plan a trip', path: '/plan_a_trip' },
    { title: 'Travelers community', path: '/community' },
    { title: 'Sign in', path: '/sign_in' },
    { title: <BsCart2 />, path: '/cart' },
  ];
  return (
    <nav>
      <div className={styles.navbar_container}>
        <span>
          <div>
            <Link className={styles.navbar_item} to='/'>
              Trave<span className={styles.title_log}>Log</span>
            </Link>
          </div>
        </span>
        <span className={styles.navbar_pages}>
          {routes.map(({ title, path }) => (
            <div key={`route_${title}`}>
              <Link to={path} className={`${styles.navbar_item} ${location.pathname === path ? styles.selected_nav : ''}`}>
                {title}
              </Link>
            </div>
          ))}
        </span>
      </div>
    </nav>
  );
}
