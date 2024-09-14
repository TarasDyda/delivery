'use client';

import Select from '@/src/components/Select';
import type { SelectProps } from '@/src/components/Select';
import { useField } from 'formik';

type SelectFieldProps = Omit<SelectProps, 'onChange' | 'value'>;

const FormikSelectField = (props: SelectFieldProps) => {
  const [field, _, helpers] = useField({ name: props.name });

  const onChange: SelectProps['onChange'] = async newValue => {
    await helpers.setValue(newValue);
  };

  return <Select {...props} value={field.value} onChange={onChange} />;
};

export default FormikSelectField;
