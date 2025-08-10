import NavBar from "../components/NavBar";
import NewAccountOptions from "../components/NewAccountOptions";
import SplitHeader from "../components/SplitHeader";

const newAccount = () => {
  return (
    <>
      <NavBar />
      <SplitHeader pageTitle="New Account Setup">
        <NewAccountOptions />
      </SplitHeader>
    </>
  );
};

export default newAccount;
