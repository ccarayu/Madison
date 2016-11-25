
// reemplaza en el texto los caracteres que no son letras por un espacio
function replaceSpecialChar(cadena){
	//reemplazamos todos los caracteres especiales tener la cadena simplemente con palabras y espacios
	cadena = cadena.replace(/[&\/\\#,+()$~%.":;*?<>{}0-9]/g,' ');
	return cadena;
}

// extrae las palabras del texto
function extractTextWords(cadena){
	// extraemos cada una de las palabras del mensaje
	var split = cadena.split(" ");
	
	var wordsMap = {};
	for (i = 0; i < split.length; i++){
	if(split[i] !== ' '){
		wordsMap[split[i]] = split[i];
		}
	}
	return wordsMap;
}

// Busca las palabras de la lista en el texto
function existsWordInText(wordsMap, word){
	if(typeof wordsMap[word] !== 'undefined'){
		return true;
	}
}

// cuenta el número de ocurrencias de una palabra en el texto
function countOcurrences(cadena, word){
    var regExp = new RegExp(' '+word+' ', "gi");
	var ocurrences = (cadena.match(regExp) || []).length;
	console.log('La palabra ' + word + ' aparece ' + ocurrences + ' veces');
	
	return ocurrences;
}

// contruye el anagrama de la palabra pasada por parámetro
function createAnagram(word){
	return word.split("").reverse().join("");
}

function createOutputObject(word, times, anagram) {
	var out_object = {word:word, times:times, anagram:anagram};
	return out_object;
}

function start(input, wordList) {
	var output = [];

    var exists;
	var out;
	input = replaceSpecialChar(input);
	var wordsMap = extractTextWords(input);
	for (index in wordList){
		var word = wordList[index];
		exists = existsWordInText(wordsMap, word);
		if (exists){
			var ocurr = countOcurrences(input, word);
			var reverse = createAnagram(word);
			exists = existsWordInText(wordsMap,reverse);
			if (exists){
				out = createOutputObject(word, ocurr, reverse);
			} else {
				out = createOutputObject(word, ocurr, '');
			}
			output.push(out);
		}
	}
	
	console.log(output);
	
	alert("Presione F12 para entrar en el modo Debug y observe los resultados en la consola");
	
	return output;
}



