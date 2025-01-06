// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Outlet } from "react-router-dom";

export function NavBar(){
  console.log('This is a test.');
  return(
  <div>
    <header>
    <div className="container">
      <nav className="navbar column-full">Test</nav>
    </div>
    </header>
    <Outlet></Outlet>
  </div>
  )
}
