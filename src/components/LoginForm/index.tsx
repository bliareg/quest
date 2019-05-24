import * as React from 'react';
import { translate } from 'utils';
import './_style.scss';

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
};

class LoginForm extends React.Component<Props>  {

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      this.props.onSubmit();
    };

    onChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      this.props.onChange({ name, value });
    };

    render() {
      const { firstName, lastName, accessCode, error } = this.props;

      return (
        <div className="login-main">
          <form onSubmit={this.onSubmit} className="form login">
            <h2 className="form-head registration-head">{t('title')}</h2>
            <div className="form-body">
              <div className="form-control">
                <label className="form-control-title">{t('firstName')}</label>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.onChange}
                />
                <div className="error"/>
              </div>
              <div className="form-control">
                <label className="form-control-title">{t('lastName')}</label>
                <input
                    placeholder={t('secondNamePlaceholder')}
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.onChange}
                />
                <div className="error"/>
              </div>
              <div className="form-control">
                <label className="form-control-title">{t('accessCode')}</label>
                <input
                    type="text"
                    name="accessCode"
                    value={accessCode}
                    onChange={this.onChange}
                />
                <div className="error"/>
              </div>
              <p className="main-error">{error}</p>
            </div>
            <div className="form-footer">
              <button  className="btn success">{t('submit')}</button>
            </div>

          </form>
        </div>
      )
    }
}

export { LoginForm };
