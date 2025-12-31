import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Topbar from "../components/Topbar";
import NoticeBar from "../components/NoticeBar";

export default function MainLayout() {
  return (
    <>
      <Topbar />
      <Navbar />
      <NoticeBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
