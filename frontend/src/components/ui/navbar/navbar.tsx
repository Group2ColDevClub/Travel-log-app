import { Link, useLocation } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { logout } from '../../../service/Requests/logout.ts';
import { useAuth } from '../../../hooks/useAuth.tsx';
import styles from './navbar.module.css';

export default function NavBar() {
  const location = useLocation();
  const { auth, autheticate } = useAuth();
  const routes = [
    { title: 'Packages', path: '/packages' },
    { title: 'Plan a trip', path: '/plan_a_trip' },
    { title: 'Travelers community', path: '/community' },
    {
      title: auth ? 'Sign out' : 'Sign in',
      path: '/sign_in',
      onClick: async () => {
        await logout();
        await autheticate();
      },
    },
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
          {routes.map(({ title, path, onClick }) => (
            <div key={`route_${title}`}>
              <Link
                to={path}
                className={`${styles.navbar_item} ${location.pathname === path ? styles.selected_nav : ''}`}
                onClick={onClick}
              >
                {title}
              </Link>
            </div>
          ))}
        </span>
      </div>
    </nav>
  );
}
