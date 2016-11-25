describe("Extract_words", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        
    });
 
    describe("Probamos las funciones con las que crearemos el informe", function(){
         
        //Spec for sum operation
        it("Eliminamos los caracteres especiales", function() {
            expect(replaceSpecialChar('Hola3;')).toEqual('Hola');
        });
 
        //Spec for multiply operation
        it("Contamos el número de ocurrencias", function() {
            expect(countOcurrences('Hello Hola Hola Hello', 'Hola')).toEqual(2);
        });
 
        //Spec for factorial operation for positive number
        it("Creamos el anagrama de la palabra", function() {
            expect(createAnagram('madison')).toEqual('nosidam');
        });
         
        //Spec for factorial operation for negative number
        it("should be able to throw error in factorial operation when the number is negative", function() {
            expect(function() { 
                calc.factorial(-7)
            }).toThrowError(Error);
        });
         
    });
});