// pages/doctor/[id].js
import { useRouter } from 'next/router';
import DoctorProfile from '../../components/DoctorProfile';
import { doctorDummyData } from '../../components/data/doctorDummyData';

const DoctorProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Ensure `id` is treated as a number
  const doctor = doctorDummyData.find((doc) => doc.id === parseInt(id));

  if (!doctor) return <p className="p-10 text-center text-red-500">Doctor not found</p>;

  return <DoctorProfile doctor={doctor} />;
};

export default DoctorProfilePage;
