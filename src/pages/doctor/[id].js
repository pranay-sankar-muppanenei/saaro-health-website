// pages/doctor/[id].js
import DoctorProfile from '../../components/DoctorProfile';
import { doctorDummyData } from '../../components/data/doctorDummyData';

const DoctorProfilePage = ({ doctor }) => {
  if (!doctor) {
    return <p className="p-10 text-center text-red-500">Doctor not found</p>;
  }

  return <DoctorProfile doctor={doctor} />;
};

export default DoctorProfilePage;

// ✅ Generate paths for all doctor IDs
export async function getStaticPaths() {
  const paths = doctorDummyData.map((doc) => ({
    params: { id: doc.id.toString() },
  }));

  return {
    paths,
    fallback: false, // If path doesn't exist, show 404
  };
}

// ✅ Fetch doctor data based on ID
export async function getStaticProps({ params }) {
  const doctor = doctorDummyData.find(
    (doc) => doc.id.toString() === params.id
  );

  return {
    props: {
      doctor: doctor || null,
    },
  };
}
