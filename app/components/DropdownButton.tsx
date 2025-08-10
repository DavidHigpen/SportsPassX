'use client';

interface DropdownButtonProps {
    label: string;
    selected: string;
    options: string[];
    setFunction: (passSelected: string) => void;
}

export default function DropdownButton({label, selected, options, setFunction}: DropdownButtonProps ) {
  return (
    <>
      <label className="label">{label}</label>
      <select className="select" value={selected} onChange={(e) => {setFunction(e.target.value)}}>
        <option disabled>Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </> 
  );
};