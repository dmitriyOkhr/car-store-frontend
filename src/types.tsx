export interface Post {
  _id: string;
  brand: string;
  model: string;
  price: string;
  engine: string;
  drivetrain: string;
  transmission: string;
  exterior: string;
  interior: string;
  year: string;
  imageUrls: string[];
  user: User;
  createdAt: string;
  updatedAt: string;
  interiorFeatures: string;
  exteriorFeatures: string;
  functional: string;
  safetyConvenience: string;
  __v: number;
}

export interface AccordionData {
  interiorFeatures: string;
  exteriorFeatures: string;
  functional: string;
  safetyConvenience: string;
}

export interface UploadedFileInfo {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Posts {
  items: Post[];
  status: "loading" | "error" | "loaded";
}

export interface UsersState {
  posts: Posts;
}

export interface AuthUserData {
  fullName?: string;
  email: string;
  password: string;
}
