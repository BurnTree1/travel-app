import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './AdminPanel.scss';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { addCountry } from '../../../store/actions/admin';

const validationSchema = yup.object({
  name: yup
    .string('Enter country name')
    .min(3, 'Country should be of minimum 3 characters length')
    .required('Country name is required'),
  capital: yup
    .string('Enter capital')
    .min(3, 'Capital should be of minimum 3 characters length')
    .required('Capital is required'),
  description: yup
    .string('Enter description')
    .min(10, 'Description should be of minimum 10 characters length')
    .required('Description is required'),
  imageUrl: yup
    .string('Enter image url')
    .min(5, 'Url should be of minimum 5 characters length')
    .required('Url is required'),
  videoUrl: yup
    .string('Enter video url')
    .min(5, 'Url should be of minimum 5 characters length')
    .required('Url is required'),
  flagImageUrl: yup
    .string('Enter flag url')
    .min(5, 'Url should be of minimum 5 characters length')
    .required('Url is required'),
  currency: yup
    .string('Enter currency ISO')
    .min(2, 'Currency should be of minimum 2 characters length')
    .required('Currency is required'),
  ISO: yup
    .string('Enter ISO')
    .min(2, 'ISO should be of minimum 2 characters length')
    .required('ISO is required'),
  timeZone: yup
    .string('Enter time zone')
    .min(1, 'Time zone should be of minimum 1 characters length')
    .max(3, 'Time zone should be of maximum 3 characters length')
    .required('Time zone is required'),
});

const AdminPanel = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      capital: '',
      description: '',
      imageUrl: '',
      videoUrl: '',
      ISO: '',
      flagImageUrl: '',
      currency: '',
      timeZone: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const submitedValues = {
        imageUrl: values.imageUrl,
        videoUrl: values.videoUrl,
        flagImageUrl: values.flagImageUrl,
        currency: values.currency,
        ISO: values.ISO,
        timeZone: values.timeZone,
        localizations: [
          {
            lang: 'en',
            name: values.name,
            capital: values.capital,
            description: values.description,
          },
          {
            lang: 'ru',
            name: values.name,
            capital: values.capital,
            description: values.description,
          },
          {
            lang: 'de',
            name: values.name,
            capital: values.capital,
            description: values.description,
          },
        ],
        custom: true,
      };
      dispatch(addCountry(submitedValues));
      resetForm();
    },
  });

  return (
        <div className="country__add">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label={intl.formatMessage({ id: 'header.search' })}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  fullWidth
                  id="capital"
                  name="capital"
                  label="Capital"
                  value={formik.values.capital}
                  onChange={formik.handleChange}
                  error={formik.touched.capital && Boolean(formik.errors.capital)}
                  helperText={formik.touched.capital && formik.errors.capital}
                />
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                />
                <TextField
                  fullWidth
                  id="imageUrl"
                  name="imageUrl"
                  label="URL of image for country"
                  value={formik.values.imageUrl}
                  onChange={formik.handleChange}
                  error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
                  helperText={formik.touched.imageUrl && formik.errors.imageUrl}
                />
                <TextField
                  fullWidth
                  id="videoUrl"
                  name="videoUrl"
                  label="URL of video for country"
                  value={formik.values.videoUrl}
                  onChange={formik.handleChange}
                  error={formik.touched.videoUrl && Boolean(formik.errors.videoUrl)}
                  helperText={formik.touched.videoUrl && formik.errors.videoUrl}
                />
                <TextField
                  fullWidth
                  id="flagImageUrl"
                  name="flagImageUrl"
                  label="URL of flag for country"
                  value={formik.values.flagImageUrl}
                  onChange={formik.handleChange}
                  error={formik.touched.flagImageUrl && Boolean(formik.errors.flagImageUrl)}
                  helperText={formik.touched.flagImageUrl && formik.errors.flagImageUrl}
                />
                <TextField
                  fullWidth
                  id="currency"
                  name="currency"
                  label="ISO of currency for country"
                  value={formik.values.currency}
                  onChange={formik.handleChange}
                  error={formik.touched.currency && Boolean(formik.errors.currency)}
                  helperText={formik.touched.currency && formik.errors.currency}
                />
                <TextField
                  fullWidth
                  id="ISO"
                  name="ISO"
                  label="ISO of country"
                  value={formik.values.ISO}
                  onChange={formik.handleChange}
                  error={formik.touched.ISO && Boolean(formik.errors.ISO)}
                  helperText={formik.touched.ISO && formik.errors.ISO}
                />
                <TextField
                  fullWidth
                  id="timeZone"
                  type="number"
                  name="timeZone"
                  label="Time zone of country (+/- number)"
                  value={formik.values.timeZone}
                  onChange={formik.handleChange}
                  error={formik.touched.timeZone && Boolean(formik.errors.timeZone)}
                  helperText={formik.touched.timeZone && formik.errors.timeZone}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
  );
};

export default AdminPanel;
