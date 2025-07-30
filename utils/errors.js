class ErrorMsg {
    invalidResponse = responseStatus => 'invalid response: ' + responseStatus;
    noUsersFound = () => 'No users were found';
    noQuote = () => 'No quote was found';
    noPokemon = () => 'No pokemon was found';

}

export default ErrorMsg;