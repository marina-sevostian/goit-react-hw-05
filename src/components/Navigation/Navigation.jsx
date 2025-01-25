import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.box}>
          <div className={s.logo}>MovieWave</div>
          <ul className={s.nav}>
            <li>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={buildLinkClass}>
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
