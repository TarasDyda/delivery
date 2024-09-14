import type { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
}

const errorClassName =
  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500';

const Input = (props: InputProps) => {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {props.label}
        {props.hint && (
          <span className="text-sm leading-6 text-slate-400">
            ({props.hint})
          </span>
        )}
      </label>
      <div className="mt-2.5">
        <input
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          type="text"
          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6 ${props.error ? errorClassName : ''}`}
        />
        <span className="mt-2 text-sm text-red-500">{props.error}</span>
      </div>
    </div>
  );
};

export default Input;
