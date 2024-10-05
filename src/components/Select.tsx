import './Select.css'
import { SelectProps } from "../types/Types";

const Select = ({ values, selectedValue, onValuesChange, ...rest }: SelectProps): JSX.Element => {
    return (
        <select value={selectedValue} onChange={onValuesChange} {...rest}>
            {values.map(([value, text]) => (
                <option key={value} value={value}>
                    {text}
                </option>
            ))}
        </select>
    );
}
export default Select