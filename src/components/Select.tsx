import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import ChevronUpDownIcon from '@/src/components/icons/ChevronUpDown';
import CheckIcon from '@/src/components/icons/Check';

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  label: string;
  name: string;
  value: Option;
  options: Option[];
  onChange: (value: Option) => void;
}

const Select = (props: SelectProps) => {
  return (
    <Listbox value={props.value} onChange={props.onChange} name={props.name}>
      <Label className="block text-sm font-semibold leading-6 text-gray-90">
        {props.label}
      </Label>
      <div className="relative mt-2 ">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white px-3.5 py-2 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className="block truncate">{props.value.label}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {props.options.map(option => (
            <ListboxOption
              key={option.value}
              value={option}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-orange-400 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {option.label}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-400 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default Select;
