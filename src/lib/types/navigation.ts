export type AuthenticationRootStack = {
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  OnBoarding: undefined;
  Welcome: undefined;
};
export type BottomRootStack = {
  Home: undefined;
  Chat: undefined;
  Schedule: undefined;
  Profile: undefined;
};

export type SpecialtyStack = {
  Specialties: undefined;
  SpecialtyDetail: {category: string};
};

export type AppRootStackParams = {
  BottomStack: undefined;
  Authentication: undefined;
  SpecialtyStack: undefined;
} & BottomRootStack &
  SpecialtyStack;
