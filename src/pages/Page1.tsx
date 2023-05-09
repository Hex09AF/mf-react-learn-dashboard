import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "shell/ShellIndex";
import { Link } from "react-router-dom";
import exampleReducer, {
  decrement,
  increment,
  selectCount,
} from "../features/example/slice";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";

function Test() {
  const count = useSelector(selectCount);

  return count;
}

export default function Page1() {
  const store = useStore();
  const dispatch = useAppDispatch();

  const [fin, setFin] = useState(false);

  useEffect(() => {
    store.injectReducer("exampleDashboard", exampleReducer);
    setFin(true);
  }, []);

  if (!fin) return;

  return (
    <React.Fragment>
      <Test />
      <button onClick={() => dispatch(increment())} type="button">
        Inc
      </button>
      <button onClick={() => dispatch(decrement())} type="button">
        Dev
      </button>

      <div>Page 1 from App1</div>
      <Link to="/page-2">Go to Page 2</Link>
    </React.Fragment>
  );
}
