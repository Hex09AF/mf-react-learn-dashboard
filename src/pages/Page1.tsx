import React from "react";
import { useAppDispatch } from "shell/ShellIndex";
import { Link } from "react-router-dom";
// import { useAppSelector } from "../../../shell/src/app/hooks";
// import { increment, selectCount } from "../features/example/slice";

export default function Page1() {
  const dispatch = useAppDispatch();
  // const count = useAppSelector(selectCount);
  return (
    <React.Fragment>
      {/* {count} */}
      {/* <button onClick={() => dispatch(increment())} type="button">
        Inc
      </button>
      <button onClick={() => dispatch(decrement())} type="button">
        Dev
      </button> */}

      <div>Page 1 from App1</div>
      <Link to="/page-2">Go to Page 2</Link>
    </React.Fragment>
  );
}
