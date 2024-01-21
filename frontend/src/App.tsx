import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Layout from './layouts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <div>HOME PAGE</div>
            </Layout>
          }
        />
        <Route
          path='/search'
          element={
            <Layout>
              <div>search Page</div>
            </Layout>
          }
        />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default App;
