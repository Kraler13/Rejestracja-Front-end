import { ChangeEvent } from "react";

export interface SelectProps {
    values: [string, string][];
    selectedValue: string;
    onValuesChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    id?: string;
  }