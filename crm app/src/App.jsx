import Welcome from "./components/Welcome"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import UserCard from "./components/dashboard/UserCard"
import ProductCard from "./components/dashboard/ProductCard"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header 
        name = "Jafir Ashraf"
      />
      <Navbar />
      <Sidebar />
      <UserCard 
        name = {["Md", "JAfir"]}
        age = {26}
      />
      <UserCard 
        name = {["Md", "Ashraf"]}
        age = {25}
      />
      <UserCard 
        name = {["Md", "Jaf"]}
        age = {23}
      />
      <ProductCard />
      <Footer />
    </>
  )
}

export default App
