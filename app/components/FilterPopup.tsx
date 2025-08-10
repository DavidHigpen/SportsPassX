"use client";

import { FaFilter } from "react-icons/fa";

interface FilterPopupProps {
  options: string[]; // Array of filter options
  selectedFilters: string[]; // Array of selected filters
  setFilters: (filters: string[]) => void; // Function to update selected filters
}

export default function FilterPopup({ options, selectedFilters, setFilters, }: FilterPopupProps) {

  const handleCheckboxChange = (value: string) => {
    if (selectedFilters.includes(value.toUpperCase())) {
      setFilters(selectedFilters.filter((filter) => filter.toUpperCase() !== value.toUpperCase()));
    } else {
      setFilters([...selectedFilters, value.toUpperCase()]);
    }
  }

  return (
    <div className="dropdown" onClick={(e) => e.stopPropagation()}>
        <div tabIndex={0} role="button" className="btn m-1">
            <FaFilter />
        </div>
        <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
            {options.map((option) => (
            <li onClick={() => {
                handleCheckboxChange(option)
                }} key={option}>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkChecked"
                    checked={selectedFilters.includes(option.toUpperCase())}
                    onChange={() => {
                        handleCheckboxChange(option)
                    }}
                />
                <label className="form-check-label" htmlFor={option}>
                    { option } </label>
                </div>
            </li>
            ))}
        </ul>
    </div>
  );
}
