export interface User {
  id: number;
  dob_year: string;
  count_login: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  isFirstLogin: boolean;
  isTemporaryPassword: boolean;
}
