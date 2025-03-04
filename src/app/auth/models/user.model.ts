export interface User{
  email: string;
  password: string;
}

export interface ImageDtoIn {
  imagePath: string;
  image64: string;
}

export interface UserDtoIn {
  address: string;
  wallet: number;
  postalCode: string;
  email: string;
  password: string;
  name: string;
  firstname: string;
  phone: string;
  town: string;
  sex: number;
  image: ImageDtoIn;
}

export interface UserDtoOut {
  id: string;
  address: string;
  wallet: number;
  postalCode: string;
  email: string;
  name: string;
  firstname: string;
  phone: string;
  town: string;
  sex: number;
  state: number;
  imageId: string;
  registrationDate: string;
  isLadyLunch: boolean;
}
