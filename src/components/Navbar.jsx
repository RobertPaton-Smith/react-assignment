import "./../styles/Navbar.css"

export default function Navbar() {

    return (
        <ul id="navbar">
            {/* <li id="logo" class="navbar-item">Sample Project</li> */}
            <li id="logo">
                <p>Rob's Demo</p>
            </li>
            <div>
                <NavItem href="/" tabIndex="0">
                    Home
                </NavItem>
                <NavItem href="/gallery" tabIndex="1">
                    Gallery
                </NavItem>
                <NavItem href="/forum" tabIndex="2">
                    Forum
                </NavItem>
            </div>
        </ul>
    );

}

function NavItem({href, children, tabIndex, ...props }) 
{
    const path = window.location.pathname
    let idName = "";
    if (href == path){
        document.title = `Rob's: ${children}`;
        idName = "active";
    }

    return (
        <li class="navbar-item">
            <a href={href} id={idName} tabIndex={tabIndex}>{children}</a>
        </li>
    )
}