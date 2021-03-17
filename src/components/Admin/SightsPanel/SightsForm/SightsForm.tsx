import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addSight } from '../../../../store/actions/admin';
import './SightsForm.scss';

const validationSchema = yup.object({
  name: yup
    .string('Enter sight name')
    .min(3, 'sight should be of minimum 3 characters length')
    .required('sight name is required'),
  ru_name: yup
    .string('Enter sight name')
    .min(3, 'sight should be of minimum 3 characters length')
    .required('sight name is required'),
  ge_name: yup
    .string('Enter sight name')
    .min(3, 'sight should be of minimum 3 characters length')
    .required('sight name is required'),
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
});

type propsType = {
  id: string
};
const SightsForm: FC<propsType> = ({ id }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      ru_name: '',
      ge_name: '',
      description: '',
      ru_description: '',
      ge_description: '',
      imageUrl: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const submitedValues = {
        imageUrl: values.imageUrl,
        countryId: id,
        localizations: [
          {
            lang: 'en',
            name: values.name,
            description: values.description,
          },
          {
            lang: 'ru',
            name: values.ru_name,
            description: values.ru_description,
          },
          {
            lang: 'de',
            name: values.ge_name,
            description: values.ge_description,
          },
        ],
      };
      dispatch(addSight(submitedValues));
      resetForm();
    },
  });

  return (
    <div className="sight__add">
        <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="imageUrl"
              name="imageUrl"
              label="URL for sight"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
              helperText={formik.touched.imageUrl && formik.errors.imageUrl}
            />
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Sight name (English)"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="ge_name"
              name="ge_name"
              label="Sight name (Germany)"
              value={formik.values.ge_name}
              onChange={formik.handleChange}
              error={formik.touched.ge_name && Boolean(formik.errors.ge_name)}
              helperText={formik.touched.ge_name && formik.errors.ge_name}
            />
            <TextField
              fullWidth
              id="ru_name"
              name="ru_name"
              label="Sight name (Russian)"
              value={formik.values.ru_name}
              onChange={formik.handleChange}
              error={formik.touched.ru_name && Boolean(formik.errors.ru_name)}
              helperText={formik.touched.ru_name && formik.errors.ru_name}
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
