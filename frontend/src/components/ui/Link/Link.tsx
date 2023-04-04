import { Link } from 'react-router-dom';
import styles from './Link.module.css';

interface ILinkProps {
  label: string;
  className?: string;
  href: string;
}

export default function CotumeLink({ label, className, href }: ILinkProps) {
  return (
    <Link to={href} className={[styles.link, className].join(' ')}>
      {label}
    </Link>
  );
}
