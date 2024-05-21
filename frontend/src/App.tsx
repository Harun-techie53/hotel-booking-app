import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateHotel from "./pages/CreateHotel";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout isSearchbarShow={true}>
                <p>Home Page</p>
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout isSearchbarShow={true}>
                <Search />
              </Layout>
            }
          />
          <Route
            path="/create-hotel"
            element={
              <Layout isHeroShow={false}>
                <CreateHotel />
              </Layout>
            }
          />
          <Route
            path="/my-hotels"
            element={
              <Layout isHeroShow={false}>
                <MyHotels />
              </Layout>
            }
          />
          <Route
            path="/edit-hotel/:hotelId"
            element={
              <Layout isHeroShow={false}>
                <EditHotel />
              </Layout>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Layout isHeroShow={false}>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Layout isHeroShow={false}>
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
