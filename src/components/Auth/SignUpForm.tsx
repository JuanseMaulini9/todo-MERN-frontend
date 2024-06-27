import { useState } from "react";

import { signup } from "../../services/auth";

interface SignInInterface {
  username: string;
  password: string;
  confirmPass: string;
}

const SignUpForm = () => {
  const [signInData, SetSignInData] = useState<SignInInterface>({
    username: "",
    password: "",
    confirmPass: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    SetSignInData({ ...signInData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signup(signInData);
  };

  return (
    <form
      className="flex flex-col justify-between items-center w-full gap-2"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username" className="font-bold">
        Username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        className="h-8 rounded p-2 bg-slate-950"
        onChange={handleInput}
      />
      <label htmlFor="password" className="font-bold ">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="*******"
        className="h-8 rounded p-2 bg-slate-950"
        onChange={handleInput}
      />
      <label htmlFor="confirmPass" className="font-bold ">
        Confirm Password
      </label>
      <input
        id="confirmPass"
        name="confirmPass"
        type="password"
        placeholder="*******"
        className="h-8 rounded p-2 bg-slate-950"
        onChange={handleInput}
      />
      <button className="font-bold bg-blue-500 w-1/4 rounded py-2 hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
