(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];

  const multipliedNumbers = numbers.map(num => num * 5);
  console.log(multipliedNumbers);
  
 

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */
  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */
  /* Second excercise */
  /* Thrid excercise */
  const sortedNames = names.sort();
  console.log(sortedNames);


  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */
  /* Thrid excercise */
        /* Fourth excercise */

  const uniqueLetters = Array.from(new Set(data));
  console.log(uniqueLetters);


  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */
    const countLetters = largeWord.split('').reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
    console.log(countLetters);


    

  /* Fourth excercise */

})();
