export type ExpenseType = {
  _id: number;
  text: string;
  amount: number;
};

export type AuthenticationType = {
  name: string;
  token: string;
  email: string;
  alertType: string;
  alertText: string;
  showAlert: boolean;
};
