import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { currentUser } from "./store/actions/userActions";
import { getUserPrompts } from "./store/actions/promptActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    dispatch(getUserPrompts());
  }, []);

  return (
    <div>
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
