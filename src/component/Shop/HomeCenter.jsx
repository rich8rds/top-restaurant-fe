import './homecenter.css'
import { FaDribbble, FaHamburger, FaPalette, FaPizzaSlice, FaSearch, FaSnapchat } from 'react-icons/fa'
import FilterBtn from '../SidebarCard/FilterBtn'
import ProductItem from '../ProductCard/ProductItem'

const HomeCenter = () => {
  return (
    <section className="home-center-display">
        <div className="top-div">
            <div className="search-div">
                <input type='text' placeholder='Search category or menu'/>
                <FaSearch className='search-icon'/>
            </div>
            <p>5 items out of stock </p>
        </div>
        <div className="food-filter-div">
            <FilterBtn name="Pizza" icon={ <FaPizzaSlice />} isSelected={true}/> 
            <FilterBtn name="Burger" icon={ <FaHamburger />} isSelected={false}/> 
            <FilterBtn name="Rice" icon={ <FaPalette />} isSelected={false}/> 
            <FilterBtn name="Snacks" icon={ <FaSnapchat />} isSelected={false}/> 
            <FilterBtn name="Drinks" icon={ <FaDribbble />} isSelected={false}/> 
        </div>

        <div className="products-view">
            {/* Display Productitem */}
            <div className="title-div">
                <h2>Choose Pizza </h2>
                <p>10 Pizza Result</p>
            </div>
            <div className="product-item-view">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    </section>
  )
}

export default HomeCenter