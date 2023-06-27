import Project from "../components/project.ts";

export interface IValidation {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export type TListener = (items: Project[]) => void;

export enum ProjectStatus {
  Active,
  Finished
}

