import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from 'constants/index';
import { history } from 'utils';
import { LoginForm } from 'components/LoginForm/index';

type RouteProps = RouteComponentProps<{}>;
type Props = {} & RouteProps;
type State = {
  firstName: string,
  lastName: string,
  accessCode: string,
  error: string,
  [key: string]: any
}

const AUTH_CREDENTIAL: { [key: string]: string } = {
  firstName: 'name',
  lasName: 'lastname',
  accessCode: 'code'
}

const FIELDS = [
  'firstName',
  'lastName',
  'accessCode',
];

class Login extends React.Component<Props, State> {
  state = {
    firstName: '',
    lastName: '',
    accessCode: '',
    error: ''
  }

  onChange = ({ name, value }: { name: any, value: string }) => {
    this.setState({ [name]: value }, () => this.error('hide'));
  }

  onSubmit = () => {
    if (!this.isValid()) {
      this.error('show');
    } else {
      history.push(ROUTES.finalSuccess1)
    }
  }

  isValid = (): boolean => {
    const state: { [key: string]: string } = this.state;

    return FIELDS.every(field => (
      AUTH_CREDENTIAL[field] === state[field]
    ));
  }

  error(action: 'show' | 'hide') {
    if (action === 'show') {
      this.setState({ error: 'Вход не авторизирован' });
    }

    if (action === 'hide') {
      this.setState({ error: '' });
    }
  }

  render() {
    return (
      <LoginForm
        {...this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const LoginScreen = withRouter(Login);

export { LoginScreen };
