var morseMessage = ".... --- .-.. .-     -- . .-.. ..";
var bitMessage = "000000001101101100111000001111110001111110011111100000001110111111110111011100000001100011111100000111111001111110000000110000110111111110111011100000011011100000000000";
var humanMessage = "h o l a";

var {translate2Human} = require ('./controller');
var {decodeBits2Morse} = require ('./controller');
var {translate2Morse} = require ('./controller');

translate2Human(morseMessage);
decodeBits2Morse(bitMessage);
translate2Morse(humanMessage);