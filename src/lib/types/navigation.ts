export type AppRootStackParams = {
  BottomStack: undefined;
  SpecialtiesStack:
    | undefined
    | {
        screen: string;
        params: {
          specialty: string;
        };
      };
  Authentication: undefined;
};

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
