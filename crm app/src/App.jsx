import Welcome from "./components/Welcome"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import UserCard from "./components/dashboard/UserCard"
import ProductCard from "./components/dashboard/ProductCard"
import Counter from "./components/Counter"
import Footer from "./components/Footer"

const users = [
  {
    id: 1,
    name: "John William",
    age: 35
  },
  {
    id: 2,
    name: "Arthur Morgan",
    age: 36
  },
  {
    id: 3,
    name: "Leon Kennady",
    age: 40
  }
]

function App() {
  return (
    <>
      <Header 
        name = "Jafir Ashraf"
      />
      <Navbar />
      <Sidebar />
      {
        users.map((user) => (
          <div key={user.id}>
            <UserCard
              name={user.name}
              age={user.age}
            />
          </div>
        ))
      }
      <ProductCard />
      <Counter init = {5} />
      <Footer />
    </>
  )
}

export default App
