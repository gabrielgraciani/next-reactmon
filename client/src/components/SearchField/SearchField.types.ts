import { ChangeEvent } from 'react';

export interface ISearchFieldProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchFieldStyledProps {
  active: boolean;
}
