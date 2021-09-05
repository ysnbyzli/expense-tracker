import { Route } from 'react-router-dom';
import SignUp from './component/SignUp';
import { Layout } from 'antd';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import Categories from './component/Categories';
import Records from './component/Records';
import AppHeader from './component/AppHeader';
import Logout from './component/Logout';

const { Content, Footer } = Layout;



function App() {




  return (
    <Layout>
      <AppHeader />
      <Content className="site-layout" style={{ padding: '50px', marginTop: 64, height: "100vh" }}>
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/categories" component={Categories} />
        <PrivateRoute path="/records" component={Records} />
        <Route path="/logout" component={Logout} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Expense Tracker ©2021</Footer>
    </Layout>

  );
}

export default App;
