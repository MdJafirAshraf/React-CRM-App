import Welcome from "./components/Welcome"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import UserCard from "./components/dashboard/UserCard"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <UserCard />
      <Footer />
    </>
  )
}

export default App
