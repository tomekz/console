import React, { useState } from 'react';
import { Control, Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import Autocomplete from '../autocomplete/index';

export interface ControlledTextFieldProps<T extends FieldValues> extends UseControllerProps<T> {
  label: string;
  required?: boolean;
  control: Control<T>;
  rules: {
    required: boolean;
    pattern?: RegExp;
  };
  loading?: boolean;
  noOptionsText?: string;
  disabled?: boolean;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterOptions?: (options: any[]) => any[];
  onChange?: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}

function ControlledAutocomplete<T extends FieldValues>({
  label,
  name,
  required,
  onChange,
  filterOptions,
  options,
  rules,
  disabled,
  placeholder,
  loading,
  ...props
}: ControlledTextFieldProps<T>) {
  const [isBlur, setIsBlur] = useState(false);

  return (
    <Controller
      name={name}
      rules={rules}
      {...props}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          onBlur={() => {
            field.onBlur();
            setIsBlur(true);
          }}
          value={options.length ? field.value : ''}
          loading={loading}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={(event, optionValue) => {
            const { value } = optionValue || {};
            field.onChange({ target: { value } });
            onChange && onChange(value);
          }}
          filterOptions={filterOptions}
          options={options}
          label={label}
          error={isBlur && error !== undefined}
        />
      )}
    />
  );
}

export default ControlledAutocomplete;
