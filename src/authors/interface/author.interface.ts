/* eslint-disable prettier/prettier */
export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  bio?: string;
  avatar?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}