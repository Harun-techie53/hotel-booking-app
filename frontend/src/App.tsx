import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <p>Home Page</p>
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <p>Search Page</p>
              </Layout>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Layout isAuth={true}>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Layout isAuth={true}>
                <Login />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;