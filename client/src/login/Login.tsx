import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { block } from 'bem-cn';

import './Login.scss';
import { SignIn } from '../types/auth';
import LoginForm from './components/LoginForm';
import { AuthActions } from '../redux/actions';

type Props = ReturnType<typeof mapDispatchToProps>;

const Login: React.FC<Props> = ({ signIn }) => {
  const cn = block('Login');

  return (
    <div className={cn()}>
      <LoginForm signIn={signIn} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: (payload: SignIn) => dispatch(AuthActions.signIn(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
