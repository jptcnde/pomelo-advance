export interface IInitiatorDetails {
  id: string,
  firstName: string,
  lastName: string,
  contactEmail: string,
  contactName: string,
}

export interface ITnxStatus {
  amount: number | string,
  currency: string,
  status: string,
  provider: string,
  created: string,
  updated: string,
  id: string,
  initiatorDetails: IInitiatorDetails,

  providerDisplayName: string,
  statusDisplay: string,
  [propsName: string]: any
}

export interface IState {
  tnxStatusList: Array<ITnxStatus>,
}

const initialState: IState = {
  tnxStatusList: [],
};

export default initialState;