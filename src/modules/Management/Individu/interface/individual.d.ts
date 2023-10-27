declare namespace IReduxIndividual {
  export interface IIndividual {
    id: string
  }

  export interface ICreateIndividualPayload {
    id: number
  }

  export interface IInitialState {
    data: IIndividual[]
  }
}

export { IReduxIndividual }
