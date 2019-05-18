import * as React from 'react';
import { translate } from 'utils';

type Props = {
  firstName: string,
  lastName: string,
  accessCode: string,
  error: string,
  onChange: (params: { name: string, value: string }) => void,
  onSubmit: Function
}

const t = (key: string) => {
  return translate(`components.LoginForm.${key}`);
}

class LoginForm extends React.Component<Props>  {

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      this.props.onSubmit();
    }

    onChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      this.props.onChange({ name, value });
    }

    render() {
      const { firstName, lastName, accessCode, error } = this.props;

      return (
        <div className="registration-main">
          {error}
          <form onSubmit={this.onSubmit} className="sign-in">
            <div className="form-control">
              <label>{t('firstName')}</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.onChange}
              />
              <div className="error"></div>
            </div>

            <div className="form-control">
              <label>{t('lastName')}</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.onChange}
              />
              <div className="error"></div>
            </div>

            <div className="form-control">
              <label>{t('accessCode')}</label>
              <input
                type="text"
                name="accessCode"
                value={accessCode}
                onChange={this.onChange}
              />
              <div className="error"></div>
            </div>
            <button>{t('submit')}</button>
          </form>
        </div>
      )
    }
}

export { LoginForm };
