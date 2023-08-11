import {ChangeEvent} from 'react';

interface ColorFilterProps {
    colorFilter: string;
    onColorFilterChange: (color: string) => void;
}

const ColorFilter: React.FC<ColorFilterProps> = ({ colorFilter, onColorFilterChange }) => {
    const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
      onColorFilterChange(event.target.value);
    };

  return (
    <select value={colorFilter} onChange={handleFilterChange}>
      <option value="">All colors</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="black">Black</option>
      <option value="white">White</option>
      <option value="pink">Pink</option>
      <option value="brown">Brown</option>
    </select>
  );
};


export default ColorFilter;