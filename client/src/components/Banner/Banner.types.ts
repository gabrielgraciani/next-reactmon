import { ReactNode } from 'react';

export interface BannerProps {
  image: string;
  title: string;
  children: ReactNode;
}

export interface BannerStyledProps {
  image: string;
}
