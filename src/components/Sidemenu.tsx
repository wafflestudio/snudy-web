import { Link, Outlet } from 'react-router-dom';

const Sidemenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">개요</Link>
        </li>
        <li>
          <Link to="/assignment">과제</Link>
        </li>
        <li>
          <Link to="/planner">플래너</Link>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidemenu;
