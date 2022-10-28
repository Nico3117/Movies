const { default: Navbar } = require("./Navbar");


function Layout({ children }) {
  return (
    <>
        <Navbar />
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout