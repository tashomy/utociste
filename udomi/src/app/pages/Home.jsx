import React, { useEffect } from "react";
import Preview from "../components/Home/Preview";
import FindPet from "../components/Home/FindPet";
import AllPets from "../components/Home/AllPets";
import { useSelector } from "react-redux";
import PetModal from "../components/Home/PetModal";

const Home = () => {
  const modalStore = useSelector((state) => state.modal);
  useEffect(() => {}, []);
  return (
    <>
      {modalStore.opened && <PetModal />}
      <div className="page-wrapper">
        <Preview />
        <FindPet />
        <AllPets />
      </div>
    </>
  );
};

export default Home;
