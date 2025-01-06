import { Link } from 'react-router-dom';

export function Entries() {
  console.log('Testing');
  return (
    <>
      <div className="black-text">
        <Link to="/entry-form">Testing</Link>
      </div>
    </>
  );
}
