import * as React from 'react';
import { Link } from 'react-router-dom';
import { skype } from '../../assets/img/';
import './_style.scss';

type Props = {
  links: {
    call: string,
    skip: string
  },
  name: string
}

class Skype extends React.Component<Props>  {

    render() {
      const { name, links } = this.props;
      const { call, skip } = links;

      return (
        <div className='enter-layout'>
            <div className="skype-call">
                <div className="skype-avatar">
                    <svg className="avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.323 513.323">
                        <path d="M256.661 257.323c-135.275 0-245.333 110.059-245.333 245.333 0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.667-10.667c0-123.52 100.48-224 224-224s224 100.48 224 224c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.667-10.667c-.001-135.296-110.06-245.333-245.335-245.333zM256.661 0c-64.683 0-117.333 52.629-117.333 117.333s52.651 117.333 117.333 117.333 117.333-52.629 117.333-117.333S321.344 0 256.661 0zm0 213.333c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96-43.072 96-96 96z"/>
                    </svg>
                </div>
                <p className="skype-name">{name}</p>
                <p className="skype-call-label">Входящий звонок...</p>
                <div className="skype-controll-holder">
                    <Link
                        to={call}
                        className="skype-btn success">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	                        <path d="M506.688 86.763a10.709 10.709 0 0 0-10.645-.021l-133.376 76.203v-45.611c0-17.643-14.357-32-32-32H55.275C17.301 85.333 0 173.803 0 256s17.301 170.667 55.275 170.667h275.392c17.643 0 32-14.357 32-32v-45.611l133.376 76.203a10.68 10.68 0 0 0 5.291 1.408c1.856 0 3.691-.469 5.355-1.429a10.713 10.713 0 0 0 5.312-9.237V96a10.689 10.689 0 0 0-5.313-9.237zm-16.021 310.848l-133.376-76.203a10.66 10.66 0 0 0-10.645.021 10.713 10.713 0 0 0-5.312 9.237v64c0 5.888-4.779 10.667-10.667 10.667H55.275c-10.155 0-33.941-50.795-33.941-149.333S45.12 106.667 55.275 106.667h275.392c5.888 0 10.667 4.779 10.667 10.667v64c0 3.819 2.027 7.317 5.312 9.237a10.709 10.709 0 0 0 10.645.021l133.376-76.203v283.222z"/>
                        </svg>
                    </Link>
                    <Link
                        to={call}
                        className="skype-btn success">
                        <svg viewBox="0 0 405.333 405.333">
	                        <path d="M373.333 266.88c-25.003 0-49.493-3.904-72.725-11.584-11.328-3.904-24.171-.896-31.637 6.699l-46.016 34.752c-52.779-28.16-86.571-61.931-114.389-114.368l33.813-44.928c8.512-8.533 11.563-20.971 7.915-32.64C142.592 81.472 138.667 56.96 138.667 32c0-17.643-14.357-32-32-32H32C14.357 0 0 14.357 0 32c0 205.845 167.488 373.333 373.333 373.333 17.643 0 32-14.357 32-32V298.88c0-17.643-14.357-32-32-32zM384 373.333c0 5.888-4.8 10.667-10.667 10.667-194.091 0-352-157.909-352-352 0-5.888 4.8-10.667 10.667-10.667h74.667c5.867 0 10.667 4.779 10.667 10.667 0 27.243 4.267 53.995 12.629 79.36 1.237 3.989.235 8.107-3.669 12.16l-38.827 51.413a10.665 10.665 0 0 0-.981 11.264c31.637 62.144 70.059 100.587 132.651 132.651 3.605 1.877 8.021 1.493 11.285-.981l52.523-39.808a10.7 10.7 0 0 1 10.859-2.539c25.515 8.427 52.267 12.693 79.531 12.693 5.867 0 10.667 4.779 10.667 10.667v74.453z"/>
                        </svg>
                    </Link>
                    <Link
                        to={skip}
                        className="skype-btn error skip">
                        <svg viewBox="0 0 405.333 405.333">
	                        <path d="M373.333 266.88c-25.003 0-49.493-3.904-72.725-11.584-11.328-3.904-24.171-.896-31.637 6.699l-46.016 34.752c-52.779-28.16-86.571-61.931-114.389-114.368l33.813-44.928c8.512-8.533 11.563-20.971 7.915-32.64C142.592 81.472 138.667 56.96 138.667 32c0-17.643-14.357-32-32-32H32C14.357 0 0 14.357 0 32c0 205.845 167.488 373.333 373.333 373.333 17.643 0 32-14.357 32-32V298.88c0-17.643-14.357-32-32-32zM384 373.333c0 5.888-4.8 10.667-10.667 10.667-194.091 0-352-157.909-352-352 0-5.888 4.8-10.667 10.667-10.667h74.667c5.867 0 10.667 4.779 10.667 10.667 0 27.243 4.267 53.995 12.629 79.36 1.237 3.989.235 8.107-3.669 12.16l-38.827 51.413a10.665 10.665 0 0 0-.981 11.264c31.637 62.144 70.059 100.587 132.651 132.651 3.605 1.877 8.021 1.493 11.285-.981l52.523-39.808a10.7 10.7 0 0 1 10.859-2.539c25.515 8.427 52.267 12.693 79.531 12.693 5.867 0 10.667 4.779 10.667 10.667v74.453z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
      )
    }
}

export { Skype };
