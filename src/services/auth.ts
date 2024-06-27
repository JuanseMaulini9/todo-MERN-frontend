import axios from "./axiosInstance";

interface Login {
  username: string;
  password: string;
}

interface SignUp extends Login {
  confirmPass: string;
}

export const signup = async ({ username, password, confirmPass }: SignUp) => {
  try {
    axios
      .post("/auth/signup", {
        username,
        password,
        confirmPass,
      })
      .then(function (response) {
        console.log(response);
      });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const login = async ({ username, password }: Login) => {
  try {
    axios
      .post("/auth/login", {
        username,
        password,
      })
      .then(function (response) {
        console.log(response);
      });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
