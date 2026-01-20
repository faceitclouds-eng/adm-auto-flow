import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceDetail from "./pages/ServiceDetail";
import Gallery from "./pages/Gallery";
import Materials from "./pages/Materials";
import Promotions from "./pages/Promotions";
import Reviews from "./pages/Reviews";
import SubmitReview from "./pages/SubmitReview";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:category" element={<ServiceCategory />} />
              <Route path="/services/:category/:service" element={<ServiceDetail />} />
              <Route path="/gallery/:category?" element={<Gallery />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/reviews/submit" element={<SubmitReview />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCallButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
