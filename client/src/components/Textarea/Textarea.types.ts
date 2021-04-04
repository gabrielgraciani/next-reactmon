import { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  error?: FieldError;
}

export interface TextareaStyledProps {
  isInvalid: boolean;
  isActive: boolean;
}
