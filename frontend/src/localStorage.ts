interface CurrentUserRegister {
  userName: string;
  token: string;
}

interface CurrentUserLogin {
  userName: string;
  email: string;
  token: string;
}

export const addUserToLocalStorageRegister = (
  currentUser: CurrentUserRegister
) => {
  const values = {
    userName: currentUser.userName,
    token: currentUser.token,
  };

  localStorage.setItem("userName", values.userName);
  localStorage.setItem("token", values.token);
};

export const addUserToLocalStorageLogin = (currentUser: CurrentUserLogin) => {
  const values = {
    userName: currentUser.userName,
    email: currentUser.email,
    token: currentUser.token,
  };

  localStorage.setItem("userName", values.userName);
  localStorage.setItem("email", JSON.stringify(values.email));
  localStorage.setItem("token", values.token);
};

export const removeUserToLocalStorage = () => {
  localStorage.removeItem("userName");
  localStorage.removeItem("email");
  localStorage.removeItem("token");
};
