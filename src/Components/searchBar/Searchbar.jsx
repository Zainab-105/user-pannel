import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.css';

const Searchbar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${value}`
        );

        setSuggestions(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.textbox}
        placeholder="Search..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="search">
      <  SearchIcon  className={styles.search}/>
      </div>
     
    </div>
  );
};

export default Searchbar;