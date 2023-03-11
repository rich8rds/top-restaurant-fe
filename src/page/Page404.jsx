import { Link } from "react-router-dom"
import "../styles/page404.scss"

const Page404 = () => {
  
  return (
    <section className="section-404">
        <div className="p-404-container">
            <h1 id="head">404</h1>
            <h3 id="sub-heading">PAGE NOT FOUND!</h3>
            <div className="p-404-text-div">
                <p id="message">The page you are looking might have been removed, had </p>
                <p id="message">its name changed  or is temporary unavailable.</p>
            </div>
            <button className="home-btn">
              <Link to="/">BACK TO HOME</Link></button>
        </div>
    </section>
  )
}

export default Page404