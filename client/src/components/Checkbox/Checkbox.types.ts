import { InputHTMLAttributes } from 'react';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  checked: boolean;
  label: string;
}
