'use client';

// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import { Field, Label, Switch } from '@headlessui/react';
import Select from '@/src/components/formikComponents/Select';
import type { Option } from '@/src/components/Select';
import { Formik, Form } from 'formik';
import Input from '@/src/components/formikComponents/Input';
import TextArea from '@/src/components/formikComponents/TextArea';

const subjectOptions: Option[] = [
  {
    value: 'general',
    label: 'Загальна консультація',
  },
  {
    value: 'internal',
    label: 'Внутрішні перевезення',
  },
  {
    value: 'import',
    label: 'Імпорт',
  },
  {
    value: 'export',
    label: 'Експорт',
  },
];

interface FormValues {
  subject: Option;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  additionalInfo: string;
}

const initialValues: FormValues = {
  subject: subjectOptions[0],
  firstName: '',
  lastName: '',
  phoneNumber: '',
  additionalInfo: '',
};

const GetInTouchSection = () => {
  const handleFormSubmit = () => {};

  return (
    <div className="isolate bg-slate-50 px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Звʼяжіться зі мною
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Піля заповення всіх полів з вами звʼяжеться менеджер і надасть
          безкоштовну консультацію.
        </p>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        <Form className="mx-auto mt-8 max-w-xl sm:mt-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <Input name="firstName" label="Імʼя" />
            <div>
              <Input name="lastName" label="Прізвище" />
            </div>
            <div className="sm:col-span-2">
              <Select
                label="Оберіть предмет консультації"
                name="subject"
                options={subjectOptions}
              />
            </div>
            <div className="sm:col-span-2">
              <Input name="phoneNumber" label="Номер телефону" />
            </div>
            <div className="sm:col-span-2">
              <TextArea name="additionalInfo" label="Додаткова інформація" />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-orange-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Зв&apos;яжіться зі мною
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default GetInTouchSection;
