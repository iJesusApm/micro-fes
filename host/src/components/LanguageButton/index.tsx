import React from 'react';
import { useTranslation } from 'react-i18next';
import useSwitchLanguage from '../../hooks/useSwitchLanguage';
import { Button } from './styles';

interface LanguageSwitcherProps {
  message: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ message }) => {
  const { switchAllLanguages } = useSwitchLanguage();
  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    switchAllLanguages(newLanguage);
  };
  return (
    <Button data-testid="language-switcher" onClick={handleLanguageSwitch}>
      {t(message)}
    </Button>
  );
};

export default LanguageSwitcher;
