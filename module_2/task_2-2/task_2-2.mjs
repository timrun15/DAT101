"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("Individual assignments:");
printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
printOut("Task1: Use JavaScript to calculate the following expression, ensuring the result is -34. 2 + 3 * 2 - 4 * 6 Display both the original expression and the modified expression (with parentheses) along with their results on the HTML page?")
printOut("//Original expression: 2 + 3 * 2 - 4 * 6 = 36. //Modified expression to ensure the result is 2 + (3 * 2) - (4 * 6) = -34")
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
printOut("Task2: Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in the answer).")
printOut("//Convert meters to centimeters// let meters = 25; let centimeters = 34; //Total centimeters// let totalCentimeters = (meters * 100) + centimeters; //Convert centimeters to inches// let totalInches = totalCentimeters / 2.54; //Round to 2 decimal places// totalInches = totalInches.toFixed(2);");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
printOut("Task3: Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in the answer).")
printOut("//Time// let days = 3; let hours = 12; let minutes = 14; let seconds = 45; //Convert all units to minutes// let totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60)");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
printOut("Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The task must be solved with primitives.!");
printOut("//Time in minutes// let totalMinutes = 6322.52; //Calculate days// let days = Math.floor(totalMinutes / (24 * 60)); totalMinutes %= (24 * 60); = Remaining minutes after extracting days //Calculate hours// let hours = Math.floor(totalMinutes / 60);totalMinutes %= 60; = Remaining minutes after extracting hours //Calculate minutes// let minutes = Math.floor(totalMinutes); //Calculate seconds from the decimal part of the remaining minutes let seconds = Math.round((totalMinutes - minutes) * 60);");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
printOut("Convert 54 dollars to Norwegian kroner, and print the price for both: NOK → USD and USD → NOK. Use 76 NOK = 8.6 USD as the exchange rate. The answer must be in whole Kroner and whole dollars.!");
printOut("//Exchange rate// let usdToNokRate = 76 / 8.6; let nokToUsdRate = 8.6 / 76; //Given amount in USD// let usdAmount = 54; //Convert USD to NOK// let nokEquivalent = Math.round(usdAmount * usdToNokRate); //Convert NOK back to USD// let nokAmount = nokEquivalent;let usdEquivalent = Math.round(nokAmount * nokToUsdRate);");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
printOut("Create a variable that contains the following text: There is much between heaven and earth that we do not understand.");
printOut("//Create the variable containing text// let text = There is much between heaven and earth that we do not understand.;//Print the number of characters in the text console.log(Number of characters: + text.length); //Print the character at position number 19 console.log(Character at position 19: + text.charAt(19)); //Print the characters starting at position 35 and 8 characters forward console.log(Characters from position 35, 8 characters forward: + text.substr(35, 8)); //Print the index at which 'earth' starts console.log(Index of 'earth':+ text.indexOf(earth));");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut("// 1. Is 5 greater than 3? console.log(Is 5 greater than 3? + (5 > 3)); //true//");
printOut("// 2. Is 7 greater than or equal to 7? console.log(Is 7 greater than or equal to 7? + (7 >= 7));//true//");
printOut("// 3. Is a greater than b? console.log('Is a greater than b? ' + (a > b));//false//");
printOut("// 4. Is 1 less than a? console.log('Is 1 less than a? ' + (1 < a));//true//");
printOut("// 5. Is 2500 less than abcd? console.log('Is 2500 less than abcd? ' + (2500 < abcd));//true//");
printOut("// 6. arne is not equal to thomas? console.log('arne is not equal to thomas? ' + (arne != thomas));//ture//");
printOut("// 7. (2 equals 5) is this statement true? console.log('(2 equals 5) is this statement true? ' + (2 === 5));//false//");
printOut("// 8. (abcd is greater than bcd) is this statement false? console.log('(abcd is greater than bcd) is this statement false? ' + !((abcd > bcd)));//true//");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
printOut("Convert and print the following expressions, from text 254 to a number, from text 57.23 to a number, from text 25 kroner to a number");
printOut("// 1. Convert 254 to a number let number1 = parseInt(254); console.log('Convert 254 to a number: ' + number1); // 2. Convert 57.23 to a number let number2 = parseFloat(57.23); console.log('Convert 57.23 to a number: ' + number2); //3. Convert 25 kroner to a number let number3 = parseInt(25 kroner); console.log('Convert 25 kroner to a number: ' + number3);");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
printOut("Create a variable r and randomly generate a number from 1 to 360 (1 >= r <= 360).");
printOut("// Generate a random number from 1 to 360 let r = Math.floor(Math.random() * 360) + 1; console.log(r);r is the number");
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
printOut("Use modulus (%) to calculate how many weeks and days are in 131 days.");
printOut("// Total number of days let totalDays = 131; // Calculate the number of weeks let weeks = Math.floor(totalDays / 7); // Calculate the remaining days using modulus let days = totalDays % 7; console.log(`131 days is equal to weeks and days.`);");
printOut("// Running the code gives: 131 days is equal to 18 weeks and 5 days.");
printOut(newLine);