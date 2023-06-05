export type ExpenseType = {
  _id: number;
  text: string;
  amount: number;
};

export type AuthenticationType = {
  userName: string | null;
  token: string;
  email: string;
};

export type AlertType = {
  alertType: string;
  alertText: string;
  showAlert: boolean;
};
