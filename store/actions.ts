import {APP} from "~/store/mutations";


export default {

  generateRandomQuote({commit, state}){
    console.log('aslmashdkjasdojk')
    const randomIndex = Math.floor(Math.random() * state.quotes.length);
    return commit(APP.SET_RANDOM_QUOTE_INDEX, randomIndex);

  }


};
