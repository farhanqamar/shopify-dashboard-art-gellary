import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';

// Lazy load all the components
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Contact = lazy(() => import("./Pages/Contact"));
const RentingArt = lazy(() => import("./pages/RentingArt"));
const Cart = lazy(() => import("./pages/Cart"));
const Account = lazy(() => import("./pages/Account"));
const Abstract = lazy(() => import("./pages/Abstract"));
const Products = lazy(() => import("./pages/Products"));
const Collections = lazy(() => import("./pages/Collections"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Bio = lazy(() => import("./pages/Bio"));
const GicleePrints = lazy(() => import("./pages/GicleePrints"));
const OriginalPainting = lazy(() => import("./pages/OriginalPainting"));
const OriginalArt = lazy(() => import("./pages/OriginalArt"));
const Services = lazy(() => import("./pages/Home/Services"));
const AddToCard = lazy(() => import("./pages/AddToCard"));
const ArtServices = lazy(() => import("./pages/ArtServices"));
const ArtConsultation = lazy(() => import("./pages/ArtConsultation"));
const WholsalePrints = lazy(() => import("./pages/WholsalePrints"));
const PrintCanvas = lazy(() => import("./pages/Home/PrintCanvas"));
const AddProducts = lazy(() => import("./pages/AddProducts"));

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();

    const allImages = document.querySelectorAll('img');
    allImages.forEach((img) => {
      img.setAttribute('data-aos', 'fade-down');
      img.setAttribute('data-aos-anchor-placement', 'top-bottom');
      img.setAttribute('data-aos-duration', '500');
    });
  }, []);


  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artservices" element={<ArtServices />} />
          <Route path="/rentart" element={<RentingArt />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/product" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/giclee" element={<GicleePrints />} />
          <Route path="/orignalpainting" element={<OriginalPainting />} />
          <Route path="/orignalart" element={<OriginalArt />} />
          <Route path="/services" element={<Services />} />
          <Route path="/artconsultation" element={<ArtConsultation />} />
          <Route path="/wholsaleprints" element={<WholsalePrints />} />
          <Route path="/printcanvas" element={<PrintCanvas />} />
          <Route path="/addtocart" element={<AddToCard />} />
          <Route path="/addprod" element={<AddProducts />} />

        </Route>
      </Routes>
    </Suspense>
    
  );
}

export default App;
