import "./Navigation.css"
const Navigation = () => {
    return (
         <nav className="col-full grid-container">
            <div className="header clearf">
            <h1 className="col-1">STARTER</h1>
            <div className="btns-container">
            <a className="col-5 navLink-buttons Login" href="http://www.github.com"> Login</a>
            <a className="col-6 navLink-buttons SignUp" href="http://www.github.com">Sign Up</a>   
            </div>
            </div>
         </nav>
    )
}

export default Navigation;