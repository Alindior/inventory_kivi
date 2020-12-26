import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './HeaderMenu.scss';
import { Dispatch } from 'redux';
import { AuthActions } from '../../../../redux/actions';

type Props = ReturnType<typeof mapDispatchToProps>;

const HeaderMenu: React.FC<Props> = ({ signOut }) => {
  const Main = (
    <Menu>
      <Menu.Item key="1">Administration</Menu.Item>
      <Menu.Item key="2" onClick={signOut}>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={Main} placement="bottomRight" trigger={['click']}>
      <div className="Test">
        <h1 className="title">Oleg</h1>
        <Avatar size={44} icon={<UserOutlined />} className="UserMenuAvatar" />
      </div>
    </Dropdown>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signOut: () => dispatch(AuthActions.signOut()),
});

export default connect(null, mapDispatchToProps)(HeaderMenu);
