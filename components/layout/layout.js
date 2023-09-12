import Navigation from "./navigation"

function Layout (props){
    return(
        <>
        <Navigation/>
        <main>
            {props.children}
        </main>
        </>
    )
}

export default Layout