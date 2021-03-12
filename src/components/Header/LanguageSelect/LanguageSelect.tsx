import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import styles from '../Header.module.css';
import '../Header.css';
import { changeLanguage } from '../../../store/actions';

const mapStateToProps = (state) => ({
  // ...state
  language: state.lang,
});

const mapDispatchToProps = { changeLanguage };

interface IProps {
  language: { lang: string };
  changeLanguage(val: string): void;
}

const LanguageSelect: FC<IProps> = (props: IProps) => {
  const { language } = props;
  const [lang, setLang] = React.useState<string>(language.lang);
  const handleChange = (event: React.ChangeEvent<any>) => {
    props.changeLanguage(event.target.value);
    setLang(event.target.value);
  };
  return (
        <div>
            <FormControl className={styles.formControl}>
                <Select
                  id="select"
                  value={lang}
                  onChange={handleChange}
                >
                    <MenuItem value="en">
                      <FormattedMessage id="language.en" />
                    </MenuItem>
                    <MenuItem value="ru">
                      <FormattedMessage id="language.ru" />
                    </MenuItem>
                    <MenuItem value="de">
                      <FormattedMessage id="language.de" />
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);
