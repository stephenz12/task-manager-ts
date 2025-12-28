import { useAuth0 } from "@auth0/auth0-react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Task Management App</h1>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>

          <TaskForm />
          <TaskList />
        </>
      )}
    </div>
  );
}

export default App;
