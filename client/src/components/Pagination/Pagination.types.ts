export interface IPaginationProps {
  totalCountOfRegisters: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export interface IPaginationItemProps {
  number: number;
  onPageChange: (page: number) => void;
  isCurrent?: boolean;
}
