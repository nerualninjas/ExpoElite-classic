import Featured from "@/Components/HomePage/Featured";
import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";
import HomePage from "@/pages/Home/Home";


export default function Home() {
  return (
    <div className="flex  min-h-screen flex-col justify-between">
      <Navbar />

      <Featured />
      <HomePage />
      <Footer></Footer>
    </div>
  )
}
