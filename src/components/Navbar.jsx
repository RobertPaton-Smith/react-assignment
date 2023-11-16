import "./../styles/Navbar.css"

export default function Navbar() {

    return (
        <ul id="navbar">
            {/* <li id="logo" class="navbar-item">Sample Project</li> */}
            <div>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/gallery">Gallery</NavItem>
                <NavItem href="/forum">Forum</NavItem>
            </div>
        </ul>
    );

}

function NavItem({href, children, ...props }) 
{
    const path = window.location.pathname
    let idName = "";
    if (href == path){
        document.title = `Sample Project: ${children}`;
        idName = "active";
    }

    return (
        <li class="navbar-item">
            <a href={href} id={idName}>{children}</a>
        </li>
    )
}