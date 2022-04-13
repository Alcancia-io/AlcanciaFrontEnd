export interface User
{
  userId:string;
  name:string;
  surname:string;
  email:string;
  swapScreenLoaded:boolean;
  createdAt:string;
}

export interface UserUpdate {
  name: string;
  surname: string;
}

