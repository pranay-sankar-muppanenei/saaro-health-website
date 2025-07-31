import Image from "next/image";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "../components/HeroSection";
import AppointmentSection from "@/components/AppointmentSection";
import DoctorCategories from "@/components/DoctorCategories";
import TopSurgeries from "@/components/TopSurgeries";
import HealthcareSection from "@/components/HealthCareSection";
import TestimonialsSection from "@/components/TestimonialSection";
import StepsSection from "@/components/StepsSection";
import HospitalPartners from "@/components/HospitalPartners";
import AppointmentModal from "@/components/AppointmentModal";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
    
     {isModalOpen && <AppointmentModal onClose={handleCloseModal} />}
    <HeroSection onBookClick={handleOpenModal} />
    <AppointmentSection/>
    <DoctorCategories/>
    <TopSurgeries/>
       <StepsSection/>
       <HospitalPartners/>
    <TestimonialsSection/>
    <HealthcareSection/>


    </>
  );
}
