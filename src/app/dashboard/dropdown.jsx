'useclient'
import { useState } from 'react';
import styles from './drop.module.css'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown-container} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <button className={styles.dropdown-button}>Toggle Dropdown</button>
      {isOpen && (
        <div className={styles.dropdown-content}>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
            <li>Option 5</li>
            <li>Option 6</li>
            <li>Option 7</li>
          </ul>
        </div>
      )}
    </div>
  );
};

