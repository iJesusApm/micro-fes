import useSwitchAppBLanguage from 'rick_and_morty/hooks/useSwitchAppBLanguage';
import useSwitchAppCLanguage from 'harry_potter/hooks/useSwitchAppCLanguage';

import appInstance from '../i18n';

const useSwitchLanguage = () => {
  const switchAppBLanguageHook = useSwitchAppBLanguage();
  const switchAppCLanguageHook = useSwitchAppCLanguage();

  // Host
  const switchAppHostLanguage = (languageCode: string) =>
    appInstance.changeLanguage(languageCode);

  // Rick and morty
  const switchAppBLanguage = (languageCode: string) =>
    switchAppBLanguageHook(languageCode);

  // Harry Potter
  const switchAppCLanguage = (languageCode: string) =>
    switchAppCLanguageHook(languageCode);

  // All apps
  const switchAllLanguages = (languageCode: string) => {
    switchAppHostLanguage(languageCode);
    switchAppBLanguage(languageCode);
    switchAppCLanguage(languageCode);
  };

  return {
    switchAppHostLanguage,
    switchAppBLanguage,
    switchAppCLanguage,
    switchAllLanguages,
  };
};

export default useSwitchLanguage;
