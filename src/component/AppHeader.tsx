import { AppState } from '../store';
import { Layout, Menu } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '../store/actions/userActions';
import { Link, useLocation } from 'react-router-dom';
const { Header } = Layout;

const AppHeader = () => {

  const { data, loading, error } = useSelector((state: AppState) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isLoggedIn())
  }, [dispatch])

  const { pathname } = useLocation();

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
        {
          data.username ? (
            <>
              <Menu.Item key="/categories"><Link to="/categories">Categories</Link></Menu.Item>
              <Menu.Item key="/records"><Link to="/records">Records</Link></Menu.Item>
              <Menu.Item key="/logout"><Link to="/logout">Logout</Link></Menu.Item>
            </>
          ) : (
            loading ? null : (
              <>
                <Menu.Item key="/login"><Link to="/login">Login</Link></Menu.Item>
                <Menu.Item key="/register"><Link to="/register">Register</Link></Menu.Item>
              </>
            )
          )
        }
      </Menu>
    </Header>
  )
}

export default AppHeader
