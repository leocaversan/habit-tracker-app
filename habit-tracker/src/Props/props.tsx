export type propsUser = {
    userId: any;
}

export interface habitSchema {
    habit: string,
    frequenciaHabit: string,
    userId: string,
    id: string,
}

export interface UserValidate {
    "user": {
      "id": string,
      "username": string,
    },
    "token": string,
  }