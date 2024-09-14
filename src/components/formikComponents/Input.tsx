'use client';

import type { InputProps } from '@/src/components/Input';
import Input from '@/src/components/Input';
import { useField } from 'formik';

type InputFieldProps = Omit<InputProps, 'value' | 'onChange'>;

const FormikInputField = (props: InputFieldProps) => {
  const [field, _, helpers] = useField({ name: props.name });

  const handleChange: InputProps['onChange'] = async e => {
    await helpers.setValue(e.target.value);
  };

  return <Input {...props} onChange={handleChange} value={field.value} />;
};

export default FormikInputField;
