import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("Вкажість ім'я")
    .min(3, "Вкажіть вірне ім'я"),
  lastName: yup
    .string()
    .trim()
    .required('Вкажість прізвище')
    .min(3, 'Вкажіть вірне прізвище'),
  phoneNumber: yup.string().trim().required('Вкажіть номер телефону'),
});

export default schema;
