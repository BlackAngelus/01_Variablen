/***** Variablen 01 *******/

/**
 *  Block-Kommentar
 */

//  Zeilen-Kommentar

//  Konsolen-Ausgabe
// console.log("Hello, World!");
// console.log(firstName);                                          // nicht deklarierte Variante --> Fehler

/***** 02 Deklaration + Wertzuweisung I *****/

// let firstName;                                                   // Deklaration (Definition) in JS5 var
// firstName = "Horst";                                             // Wertzuweisung
// console.log(firstName);                                          // Ausgabe

// let familyName = "Schlemmer"                                     //Deklaration + Wertzuweisung
// console.log(familyName);                                         // Ausgabe
// console.log(firstName + " " + familyName);

/***** 03 Deklaratoion + Wertzuweisung II *****/

// let firstName, familyName;
// firstName = prompt("Bitte vornamen eingeben");
// familyName = prompt("Bitte Nachnamen eingeben");
// console.log(firstName + " " + familyName);

// JS ist ein untypisierte Sprache! | untyped

// let test;
// test ="Hi"
// test = 2;
// test = true;
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

const test;
test = "hi";
console.log("inhalt: " + test);