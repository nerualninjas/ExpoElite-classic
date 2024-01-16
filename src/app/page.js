import Featured from "@/Components/HomePage/Featured";
import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      Home Page 
      <Featured/> 
      <Footer></Footer>
    </div>
  )
}
