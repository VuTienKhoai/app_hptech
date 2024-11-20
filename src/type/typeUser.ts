export interface TypeInformationUser {
  id: string;
  name: string;
  email: string;
  gender: string;
  birthOfDay: string; // Nếu cần, có thể chuyển thành Date
  phoneNumber: string;
  address: string;
  avatar: string;
  isVerified: boolean;
  createdAt: string; // Nếu cần, có thể chuyển thành Date
  updatedAt: string; // Nếu cần, có thể chuyển thành Date
}
