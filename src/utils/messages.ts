import messages from 'messages';
import { get } from 'lodash';

type Locale = 'ru';
let locale: Locale = 'ru';


function changeLocale(newLocale: Locale) {
  locale = newLocale;
}

function t(key: string): string {
  const message = get(messages[locale], key);
  return message;
}

export { t, changeLocale }
