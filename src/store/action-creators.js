import { API_REQUEST_STARTED, API_REQUEST_ENDED } from './action-types';

const actionApiRequestStarted = () => ({ type: API_REQUEST_STARTED });

const actionApiRequestEnded = () => ({ type: API_REQUEST_ENDED });

export { actionApiRequestStarted, actionApiRequestEnded };
