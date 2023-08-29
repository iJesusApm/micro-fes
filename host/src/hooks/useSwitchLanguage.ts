import useSwitchAppBLanguage from 'rick_and_morty/hooks/useSwitchAppBLanguage';
import appInstance from '../i18n';

const useSwitchLanguage = () => {
  console.log('se llamo');
  const switchAppBLanguageHook = useSwitchAppBLanguage();

  // App A
  const switchAppHostLanguage = (languageCode: string) =>
    appInstance.changeLanguage(languageCode);
  // App B
  const switchAppBLanguage = (languageCode: string) =>
    switchAppBLanguageHook(languageCode);
  // All apps
  const switchAllLanguages = (languageCode: string) => {
    switchAppHostLanguage(languageCode);
    switchAppBLanguage(languageCode);
  };

  return {
    switchAppHostLanguage,
    switchAppBLanguage,
    switchAllLanguages,
  };
};

export default useSwitchLanguage;
