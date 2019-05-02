import * as React from 'react';
import Popup from 'reactjs-popup';
import { isEmpty } from 'lodash';
import { INTERVIEW_DECISIONS } from 'constants/index';
import { interview } from 'state';

type Props = {
  onSubmit: Function,
  isOpen: boolean,
  onChange: (value: boolean) => void
};

type State = {
  gender: string,
  skill: string,
  errors: { gender: string, skill: string },
  [key: string]: any
}

class Registration extends React.Component<Props, State> {

  state = {
    gender: '',
    skill: '',
    errors: { gender: '', skill: '' },
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!this.validate()) {
      return;
    }

    interview.events.addDecision(this.state.skill);
    this.props.onSubmit();
  }

  validate(): boolean {
    const { skill, gender } = this.state;

    let errors = {};

    if (!skill) {
       errors = { ...errors,  skill: 'Cannot be blank' } 
    }

    if (!gender) {
       errors = { ...errors,  gender: 'Cannot be blank' } 
    }

    if (!isEmpty(errors)) {
      this.setState({ errors: { ...this.state.errors, ...errors } });
      return false;
    }

    return true;
  }

  onClose = () => {
    this.props.onChange(false);
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.name, e.currentTarget.value);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  render() {
    const { isOpen } = this.props;
    const { errors, skill, gender } = this.state;
    return (
      <Popup open={isOpen} onClose={this.onClose} position={'top center'}>
        <div className="registration-main">
          <form onSubmit={this.onSubmit} className="reigstration">
            <p className="form-control-legend">Ваш пол:</p>
            <div className="form-control">
              <input
                id="gender-male"
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={this.onChange}
              />
              <label htmlFor="gender-male">Мужской</label>

              <input
                id="gender-female"
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={this.onChange}
              />
                <label htmlFor="gender-female">Женский</label>
              </div>
              <div className="error">{errors.gender}</div>

            <p className="form-control-legend">Профессиональные навыки:</p>
            <div className="form-control">
              <input
                id="skill-0"
                type="radio"
                name="skill"
                value={INTERVIEW_DECISIONS.canWork}
                checked={skill === INTERVIEW_DECISIONS.canWork}
                onChange={this.onChange}
              />
              <label htmlFor="skill-0">Могу работать</label>

              <input
                id="skill-1"
                type="radio"
                name="skill"
                value={INTERVIEW_DECISIONS.cannotWork}
                checked={skill === INTERVIEW_DECISIONS.cannotWork}
                onChange={this.onChange}
              />
              <label htmlFor="skill-1">Могу не работать</label>
            </div>
            <div className="error">{errors.skill}</div>
            <button>Далее</button>
          </form>
        </div>
      </Popup>
    );
  }
}

export { Registration };
