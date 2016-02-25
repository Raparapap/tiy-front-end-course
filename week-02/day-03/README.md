1. Literals

		You use literals to represent values in JavaScript. These are fixed values, not variables, that you literally provide in your script. This section describes the following types of literals:

			Array literals
			Boolean literals
			Floating-point literals
			Integers
			Object literals
			RegExp literals
			String literals

		Array literals

			An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.

		Boolean literals

			The Boolean type has two literal values: true and false.

		Integers can be expressed in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).

			Decimal integer literal consists of a sequence of digits without a leading 0 (zero).
			Leading 0 (zero) on an integer literal, or leading 0o (or 0O) indicates it is in octal. Octal integers can include only the digits 0-7.
			Leading 0x (or 0X) indicates hexadecimal. Hexadecimal integers can include digits (0-9) and the letters a-f and A-F.
			Leading 0b (or 0B) indicates binary. Binary integers can include digits only 0 and 1.

		Floating-point literals

			A floating-point literal can have the following parts:

			A decimal integer which can be signed (preceded by "+" or "-"),
			A decimal point ("."),
			A fraction (another decimal number),
			An exponent.
			The exponent part is an "e" or "E" followed by an integer, which can be signed (preceded by "+" or "-"). A floating-point literal must have at least one digit and either a decimal point or "e" (or "E").

		Object literals

			An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). You should not use an object literal at the beginning of a statement. This will lead to an error or not behave as you expect, because the { will be interpreted as the beginning of a block.

			The following is an example of an object literal. The first element of the car object defines a property, myCar, and assigns to it a new string, "Saturn"; the second element, the getCar property, is immediately assigned the result of invoking the function (carTypes("Honda")); the third element, the special property, uses an existing variable (sales).


		String literals

			A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be delimited by quotation marks of the same type; that is, either both single quotation marks or both double quotation marks. The following are examples of string literals:

2.	Write an expression that declares a variable and assigns 200 to it.

		var a = 200;

3. Create an empty array.

		var a [   ];

4. Create an empty object.
		
		var a {    };

5.	Create an object with 3 properties:
			'a' with the value of 'Welcome'
			'b' with the value of 1
			'c' with the value of an empty object.

		var a {a:'welcome', b=1, c={} };

6.  Create a function that returns an empty object.

			function returnSomething () {
				var emptyObject = {};
				return emptyObject;
			}

7. Create a function that takes two parameters, puts them into a new array and returns that array
			
			function addToArray (newItem1, newItem2) {
				var newArray = [];
				newArray[0] = newItem1
				newArray[1] = newItem2
				return newArray;
			}

			funtion addToArray (newItem1, newItem2) {
				var newArray = [newItem1, newItem2];
				return;
			}

			funtion addToArray (newItem1, newItem2) {
				return [newItem1, newItem2];
			}