const SearchBar = ({ styleContainer, styleInput }) => {
  return (
    <div className={styleContainer}>
      <input className={styleInput} type="text" name="search" placeholder="Search"></input>
    </div>
  );
};

export default SearchBar;
