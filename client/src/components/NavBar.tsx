import { Link, Outlet } from 'react-router-dom';

export function NavBar() {
  return (
    <>
      <div>
        <header>
          <div className="container">
            <nav className="navbar column-full">
              <Link to="entries">Entries</Link>
            </nav>
          </div>
        </header>
        <Outlet></Outlet>
      </div>
    </>
  );
}
