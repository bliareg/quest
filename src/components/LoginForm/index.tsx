import * as React from 'react';

type Props = {
  firstName: string,
  lastName: string,
  accessCode: string,
  error: string,
  onChange: (params: { name: string, value: string }) => void,
  onSubmit: Function
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
              <label>Имя пользователя</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.onChange}
              />
              <div className="error"></div>
            </div>

            <div className="form-control">
              <label>Фамилия пользователя</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.onChange}
              />
              <div className="error"></div>
            </div>

            <div className="form-control">
              <label>Код доступа</label>
              <input
                type="text"
                name="accessCode"
                value={accessCode}
                onChange={this.onChange}
              />
              <div className="error"></div>
            </div>
            <button>Login</button>
          </form>
        </div>
      )
    }
}

export { LoginForm };
