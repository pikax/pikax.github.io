import {Data} from "~/api/info";

export enum APP {
    SET_RANDOM_QUOTE_INDEX = 'SET_RANDOM_QUOTE_INDEX',

}


export default {

  [APP.SET_RANDOM_QUOTE_INDEX]: (state: Data, payload) => {
    state.quote = state.quotes[payload];
  }


}
