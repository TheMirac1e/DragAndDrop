export interface IValidation {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export type TListener<T> = (items: T[]) => void;

export enum ProjectStatus {
  Active,
  Finished
}

