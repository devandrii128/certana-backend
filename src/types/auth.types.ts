export enum UserRole {
  COMPANY = 'company',
  ELECTRICIAN = 'electrician'
}

export interface User {
  id: number;
  username: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserDTO {
  id: number;
  username: string;
  role: UserRole;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: UserDTO;
  token: string;
}

export interface JwtPayload {
  id: number;
  username: string;
  role: UserRole;
}