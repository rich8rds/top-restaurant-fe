import '../styles/navbar.scss'
import { FaCartPlus, FaHamburger, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  const handleShowNav = () => console.log("Hey")
  
  return (
    <section className="navbar">

    <div className="display">
      <div className="left" onClick={handleShowNav}> 
        <h1>Top Restaurant </h1>
        <FaHamburger /> 
      </div>

      <div className="middle">
      </div>

      <div className="right">
          <div className="search-div">
              <input type='text' placeholder='Search category or menu'/>
              <FaSearch className='search-icon'/>
          </div>
        <p>$0.00</p>
        <div className="cart-div">
          <FaCartPlus />
          <p>0</p>
      </div>
          <div className="img-div">
            <img src="https://media.istockphoto.com/id/1386193712/photo/knowledge.jpg?s=612x612&w=is&k=20&c=hixQ1A9rWbmXwmbUqAmq81MXY7z3ZFm3ZWELreeuXx8=" 
            alt='profile-img'/>

            <p>John Doe</p>
          </div>
        </div>
    </div>

    </section>
  );
};

export default Navbar;
