import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Subjects from "./pages/Subjects";
import AddReview from "./pages/AddReview";
import AllReviews from "./pages/AllReviews";
import SuccessStories from "./pages/SuccessStories";
import NotFound from "./pages/NotFound";
import DisclaimerFooter from "@/components/DisclaimerFooter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/add-review" element={<AddReview />} />
              <Route path="/all-reviews" element={<AllReviews />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
        <DisclaimerFooter />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
