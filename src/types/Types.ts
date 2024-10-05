import { ChangeEvent } from "react";

export interface SelectProps {
  values: [string, string][];
  selectedValue: string;
  onValuesChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
}

export interface EventObj {
  name: string;
  event: { key: string; val: string };
  city: { key: string; val: string };
}