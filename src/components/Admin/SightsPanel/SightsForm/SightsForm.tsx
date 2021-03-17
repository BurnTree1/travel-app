import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addCountry } from '../../../../store/actions/admin';

const validationSchema = yup.object({
  name: yup
    .string('Enter country name')
    .min(3, 'Country should be of minimum 3 characters length')
    .required('Country name is required'),
  ru_name: yup
    .string('Enter country name')
    .min(3, 'Country should be of minimum 3 characters length')
    .required('Country name is required'),
  ge_name: yup
    .string('Enter country name')
    .min(3, 'Country should be of minimum 3 characters length')
    .required('Country name is required'),
  capital: yup
    .string('Enter capital')
    .min(3, 'Capital should be of minimum 3 characters length')
    .required('Capital is required'),
  ru_capital: yup
    .string('Enter capital')
    .min(3, 'Capital should be of minimum 3 characters length')
    .required('Capital is required'),
  ge_capital: yup
    .string('Enter capital')
    .min(3, 'Capital should be of minimum 3 characters length')
    .required('Capital is required'),
  description: yup
    .string('Enter description')
    .min(10, 'Description should be of minimum 10 characters length')
    .required('Description is required'),
  ru_description: yup
    .string('Enter description')
    .min(10, 'Description should be of minimum 10 characters length')
    .required('Description is required'),
  ge_description: yup
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
  longitude: yup
    .string('Enter longitude')
    .min(1, 'Longitude should be of minimum 1 characters length')
    .required('Longitude is required'),
  latitude: yup
    .string('Enter latitude')
    .min(1, 'Latitude  should be of minimum 1 characters length')
    .required('Latitude  is required'),
});

type propsType = {
  id: string
};
const SightsForm: FC<propsType> = ({ id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      ru_name: '',
      ge_name: '',
      capital: '',
      ru_capital: '',
      ge_capital: '',
      description: '',
      ru_description: '',
      ge_description: '',
      imageUrl: '',
      videoUrl: '',
      ISO: '',
      flagImageUrl: '',
      currency: '',
      timeZone: '',
      longitude: '',
      latitude: '',
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
            name: values.ru_name,
            capital: values.ru_capital,
            description: values.ru_description,
          },
          {
            lang: 'de',
            name: values.ge_name,
            capital: values.ge_capital,
            description: values.ge_description,
          },
        ],
        custom: true,
        mapPoint: { coordinates: [values.longitude, values.latitude] },
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
              label="Country name (English)"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="ru_name"
              name="ru_name"
              label="Country name (Russian)"
              value={formik.values.ru_name}
              onChange={formik.handleChange}
              error={formik.touched.ru_name && Boolean(formik.errors.ru_name)}
              helperText={formik.touched.ru_name && formik.errors.ru_name}
            />
            <TextField
              fullWidth
              id="ge_name"
              name="ge_name"
              label="Country name (Germany)"
              value={formik.values.ge_name}
              onChange={formik.handleChange}
              error={formik.touched.ge_name && Boolean(formik.errors.ge_name)}
              helperText={formik.touched.ge_name && formik.errors.ge_name}
            />
            <TextField
              fullWidth
              id="capital"
              name="capital"
              label="Capital (English)"
              value={formik.values.capital}
              onChange={formik.handleChange}
              error={formik.touched.capital && Boolean(formik.errors.capital)}
              helperText={formik.touched.capital && formik.errors.capital}
            />
            <TextField
              fullWidth
              id="ru_capital"
              name="ru_capital"
              label="Capital (Russian)"
              value={formik.values.ru_capital}
              onChange={formik.handleChange}
              error={formik.touched.ru_capital && Boolean(formik.errors.ru_capital)}
              helperText={formik.touched.ru_capital && formik.errors.ru_capital}
            />
            <TextField
              fullWidth
              id="ge_capital"
              name="ge_capital"
              label="Capital (Germany)"
              value={formik.values.ge_capital}
              onChange={formik.handleChange}
              error={formik.touched.ge_capital && Boolean(formik.errors.ge_capital)}
              helperText={formik.touched.ge_capital && formik.errors.ge_capital}
            />
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description (English)"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
            <TextField
              fullWidth
              id="ru_description"
              name="ru_description"
              label="Description (Russian)"
              value={formik.values.ru_description}
              onChange={formik.handleChange}
              error={formik.touched.ru_description && Boolean(formik.errors.ru_description)}
              helperText={formik.touched.ru_description && formik.errors.ru_description}
            />
            <TextField
              fullWidth
              id="ge_description"
              name="ge_description"
              label="Description (Germany)"
              value={formik.values.ge_description}
              onChange={formik.handleChange}
              error={formik.touched.ge_description && Boolean(formik.errors.ge_description)}
              helperText={formik.touched.ge_description && formik.errors.ge_description}
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
            <TextField
              fullWidth
              id="longitude"
              type="number"
              name="longitude"
              label="Longitude of capital(for map)"
              value={formik.values.longitude}
              onChange={formik.handleChange}
              error={formik.touched.longitude && Boolean(formik.errors.longitude)}
              helperText={formik.touched.longitude && formik.errors.longitude}
            />
            <TextField
              fullWidth
              id="latitude"
              type="number"
              name="latitude"
              label="Latitude of capital(for map)"
              value={formik.values.latitude}
              onChange={formik.handleChange}
              error={formik.touched.latitude && Boolean(formik.errors.latitude)}
              helperText={formik.touched.latitude && formik.errors.latitude}
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
                Submit
            </Button>
        </form>
    </div>
  );
};

export default SightsForm;
