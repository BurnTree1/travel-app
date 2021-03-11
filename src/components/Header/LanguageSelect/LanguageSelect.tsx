import React, { FC } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import styles from '../Header.module.css';
import '../Header.css';

export const LanguageSelect: FC = () => {
  const [lang, setLang] = React.useState<string>('en');
  const handleChange = (event) => {
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
                    <MenuItem value="en">Eng</MenuItem>
                    <MenuItem value="ru">Ru</MenuItem>
                    <MenuItem value="de">De</MenuItem>
                </Select>
            </FormControl>
        </div>
  );
};
