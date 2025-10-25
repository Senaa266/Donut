import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<PlaceholderPage pageName="Menu" />} />
        <Route path="/our-story" element={<PlaceholderPage pageName="Our Story" />} />
        <Route path="/recipes" element={<PlaceholderPage pageName="Recipes" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
