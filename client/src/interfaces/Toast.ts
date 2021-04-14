export interface IToast {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}
