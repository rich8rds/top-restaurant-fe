import './homecenter.css'
import { FaDribbble, FaHamburger, FaPalette, FaPizzaSlice, FaSnapchat } from 'react-icons/fa'
import FilterBtn from '../SidebarCard/FilterBtn'
import ProductItem from '../ProductCard/ProductItem'

const HomeCenter = () => {
  return (
    <section className="home-center-display">


        <div className='food-filter-outer'>
            <div className="food-filter-div">
                <FilterBtn name="Pizza" icon={ <FaPizzaSlice />} isSelected={true}/> 
                <FilterBtn name="Burger" icon={ <FaHamburger />} isSelected={false}/> 
                <FilterBtn name="Rice" icon={ <FaPalette />} isSelected={false}/> 
                <FilterBtn name="Snacks" icon={ <FaSnapchat />} isSelected={false}/> 
                <FilterBtn name="Drinks" icon={ <FaDribbble />} isSelected={false}/> 
                <FilterBtn name="Drinks" icon={ <FaDribbble />} isSelected={false}/> 
                <FilterBtn name="Drinks" icon={ <FaDribbble />} isSelected={false}/> 
                <FilterBtn name="Drinks" icon={ <FaDribbble />} isSelected={false}/> 
                <FilterBtn name="Drinks" icon={ <FaDribbble />} isSelected={false}/> 
            </div>
        </div>

        <div className="products-view">
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
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
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