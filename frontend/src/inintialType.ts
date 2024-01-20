export interface ExpenseType {
  _id: number;
  text: string;
  amount: number;
}

export interface AuthenticationType {
  userName: string | null;
  token: string;
  email: string;
}

export interface AlertType {
  alertType: string;
  alertText: string;
  showAlert: boolean;
}
