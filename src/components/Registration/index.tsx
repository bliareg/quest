import * as React from 'react';
import Popup from 'reactjs-popup';

type Props = {
  onSubmit: Function,
  isOpen: boolean,
  onChange: (value: boolean) => void
};

class Registration extends React.Component<Props> {

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit();
  }

  onClose = () => {
    this.props.onChange(false);
  }

  render() {
    const { isOpen } = this.props;
    return (
      <Popup open={isOpen} onClose={this.onClose} position={'top center'}>
        <div className="registration-main">
          <form onSubmit={this.onSubmit} className="reigstration">
            <p className="form-control-legend">Ваш пол:</p>
            <div className="form-control">
              <input id="gender-male" type="radio" name="gender" value="male" />
              <label htmlFor="gender-male">Мужской</label>

              <input id="gender-female" type="radio" name="gender" value="male" />
              <label htmlFor="gender-female">Женский</label>
            </div>

            <p className="form-control-legend">Профессиональные навыки:</p>
            <div className="form-control">
              <input id="skill-0" type="radio" name="skill" value="0" />
              <label htmlFor="skill-0">Могу работать</label>

              <input id="skill-1" type="radio" name="skill" value="1" />
              <label htmlFor="skill-1">Могу не работать</label>
            </div>
          </form>
        </div>
      </Popup>
    );
  }
}

export { Registration };
