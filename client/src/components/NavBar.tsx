import { Link, Outlet } from 'react-router-dom';

export function NavBar() {
  return (
    <>
      <div>
        <header>
          <div className="container">
            <div className="row">
              <h1>Code Journal</h1>
              <nav className="navbar column-full">
                <Link to="entries">Entries</Link>
              </nav>
            </div>
          </div>
        </header>
        <Outlet></Outlet>
      </div>
    </>
  );
}
