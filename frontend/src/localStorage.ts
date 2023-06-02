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

  localStorage.setItem("name", JSON.stringify(values.userName));
  localStorage.setItem("token", JSON.stringify(values.token));
};

export const addUserToLocalStorageLogin = (currentUser: CurrentUserLogin) => {
  const values = {
    userName: currentUser.userName,
    email: currentUser.email,
    token: currentUser.token,
  };

  localStorage.setItem("userName", JSON.stringify(values.userName));
  localStorage.setItem("email", JSON.stringify(values.email));
  localStorage.setItem("token", JSON.stringify(values.token));
};

export const removeUserToLocalStorage = () => {
  localStorage.remove("email");
  localStorage.remove("token");
};
