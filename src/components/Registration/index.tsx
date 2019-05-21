import * as React from 'react';
import Popup from 'reactjs-popup';
import { isEmpty } from 'lodash';
import { translate } from 'utils';
import { INTERVIEW_DECISIONS } from 'constants/index';
import { interview } from 'state';
import './_style.scss';

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

const t = (key: string) => {
  return translate(`components.Registration.${key}`)
};

class Registration extends React.Component<Props, State> {

  state = {
    gender: '',
    skill: '',
    errors: { gender: '', skill: '' },
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!this.validate()) {
      return;
    }

    interview.events.addDecision(this.state.skill);
    this.props.onSubmit();
  };

  validate(): boolean {
    const { skill, gender } = this.state;

    let errors = {};

    if (!skill) {
       errors = { ...errors,  skill: t('validation.empty')};
    }

    if (!gender) {
       errors = { ...errors,  gender: t('validation.empty')};
    }

    if (!isEmpty(errors)) {
      this.setState({ errors: { ...this.state.errors, ...errors } });
      return false;
    }

    return true;
  }

  onClose = () => {
    this.props.onChange(false);
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  render() {
    const { isOpen } = this.props;
    const { errors, skill, gender } = this.state;

    return (
      <Popup
          open={isOpen}
          onClose={this.onClose}
          position={'top center'}
      >
        <div className="registration-main">
          <form onSubmit={this.onSubmit} className="form registration">
            <h2 className="form-head registration-head">{t('title')}</h2>
            <div className="form-body registration-body">
              <legend className="form-control-legend">{t('gender.legend')}</legend>
              <div className="form-control">
                <input
                    id="gender-male"
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={this.onChange}
                />
                <label className="form-control-label" htmlFor="gender-male">{t('gender.male')}</label>

                <input
                    id="gender-female"
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={this.onChange}
                />
                <label htmlFor="gender-female">{t('gender.female')}</label>
                <div className="form-error">{errors.gender}</div>
              </div>
              <p className="form-control-legend">{t('skill.legend')}</p>
              <div className="form-control">
                <input
                    id="skill-0"
                    type="radio"
                    name="skill"
                    value={INTERVIEW_DECISIONS.canWork}
                    checked={skill === INTERVIEW_DECISIONS.canWork}
                    onChange={this.onChange}
                />
                <label className="form-control-legend" htmlFor="skill-0">{t('skill.canWork')}</label>

                <input
                    id="skill-1"
                    type="radio"
                    name="skill"
                    value={INTERVIEW_DECISIONS.cannotWork}
                    checked={skill === INTERVIEW_DECISIONS.cannotWork}
                    onChange={this.onChange}
                />
                <label className="form-control-legend" htmlFor="skill-1">{t('skill.cannotWork')}</label>
                <div className="form-error">{errors.skill}</div>
              </div>
            </div>
            <div className="form-footer registration-footer">
              <button className="btn success">{t('submit')}</button>
            </div>
          </form>
        </div>
      </Popup>
    );
  }
}

export { Registration };
