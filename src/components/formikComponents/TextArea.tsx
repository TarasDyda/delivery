'use client';

import type { TextAreaProps } from '@/src/components/TextArea';
import TextArea from '@/src/components/TextArea';
import { useField } from 'formik';

type TextAreaFieldProps = Omit<TextAreaProps, 'value' | 'onChange'>;

const FormikTextAreaField = (props: TextAreaFieldProps) => {
  const [field, _, helpers] = useField({ name: props.name });

  const handleChange: TextAreaProps['onChange'] = async e => {
    await helpers.setValue(e.target.value);
  };

  return <TextArea {...props} onChange={handleChange} value={field.value} />;
};

export default FormikTextAreaField;
