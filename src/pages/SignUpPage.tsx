import { Link } from "react-router-dom";

import SignUpForm from "../components/Auth/SignUpForm";
const SignUpPage = () => {
  return (
    <>
      <div className="bg-slate-900 rounded flex flex-col justify-between items-center text-center w-96 h-96">
        <h2 className="font-bold text-3xl mt-4 py-2">Sign In</h2>
        <SignUpForm></SignUpForm>
        <p className="mb-4 text-gray-400">
          Already have an account? <span className="text-blue-400 hover:underline cursor-pointer"><Link to='/login'>LogIn</Link></span>
        </p>
      </div>
    </>
  );
};

export default SignUpPage;
