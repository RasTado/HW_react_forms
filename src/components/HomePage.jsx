import "../App.css";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <nav className="taskCont">
      <div>
        <Link className="taskContL" to="/Task1">
          TASK 1 Hex2rgb
        </Link>
        <Link className="taskContL" to="/Task2">
          TASK 2 Steps
        </Link>
        <Link className="taskContL" to="/Task3">
          TASK 3
        </Link>
      </div>
    </nav>
  );
}

export function Backe() {
  return (
    <nav className="taskCont">
      <Link className="taskContL" to="/">
        BACK
      </Link>
    </nav>
  );
}
