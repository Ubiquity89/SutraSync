
import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
// import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Newsletter from "../components/blog/Newsletter";
export default function Blog() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
    
      
  <BlogHero />
  <Newsletter />
  
    
        <Footer />
    </>
  );
}