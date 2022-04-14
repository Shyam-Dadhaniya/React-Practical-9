import "./App.css";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "./store/user-slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(userAction.login(user));
    }
  }, [dispatch]);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
