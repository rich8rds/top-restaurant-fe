const FilterBtn = ({ name, icon, isSelected }) => {
  return (
    <button id="selected-btn" 
      className={ isSelected ? 
      'food-filter-btn btn selected-btn' : 
      'food-filter-btn btn' }
      >
      { icon }
      <p>{ name }</p>
    </button>
  )
}

export default FilterBtn