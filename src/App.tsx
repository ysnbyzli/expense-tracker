import { Route } from 'react-router-dom';
import SignUp from './component/SignUp';
import { Layout, Menu } from 'antd';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import Categories from './component/Categories';
const { Header, Content, Footer } = Layout;



function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '50px', marginTop: 64 }}>
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/categories" component={Categories} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Expense Tracker ©2021</Footer>
    </Layout>

  );
}

export default App;
