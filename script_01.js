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


/***** 03 Konstanten *****/
// const test;                                 //Variable mit KONSTANTEM Inhalt
// test = "hi";                                // KEINE neue Zuweisung zur LZ möglich!
// console.log("inhalt: " + test);

/***** Beispiel I *****/

// Deklaration
// let ageJohn, ageMark;
// let birthYearJohn, birthYearMark;
// let year = 2021;

// // Wertzuweisung
// ageJohn = 25;
// ageMark = 30;

// // Berechnung
// birthYearJohn = year - ageJohn;
// birthYearMark = year - ageMark;

// // Ausgabe
// console.log("birthYearJohn: " + birthYearJohn);
// console.log("birthYearMark: " + birthYearMark);

/***** Beispiel II *****/

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

let date = new Date ();
let year = date.getFullYear();

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

// Berechnung
birthYearJohn = date.getFullYear() - ageJohn;
birthYearMark = date.getFullYear() - ageMark;

// Ausgabe
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark: " + birthYearMark);