import type { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2.5">
        <input
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          type="text"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
