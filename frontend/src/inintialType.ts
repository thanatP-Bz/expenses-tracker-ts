export type ExpenseType = {
  _id: number;
  text: string;
  amount: number;
};

export type AuthenticationType = {
  user: string;
  token: string;
  alertType: string;
  alertText: string;
  showAlert: boolean;
};
