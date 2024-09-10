// Leap Year Checker
function checkLeapYear() {
  const year = parseInt(document.getElementById("yearInput").value);
  const result = isLeapYear(year);
  document.getElementById("leapYearResult").innerText = result;
}

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// Ticket Pricing
function checkTicketPrice() {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = ticketPrice(age);
  document.getElementById("ticketPriceResult").innerText = result;
}

function ticketPrice(age) {
  if (age <= 12) {
    return "The ticket price is $10.";
  } else if (age >= 13 && age <= 17) {
    return "The ticket price is $15.";
  } else if (age >= 18) {
    return "The ticket price is $20.";
  } else {
    return "Invalid age.";
  }
}

// Fibonacci Sequence
function calculateFibonacci() {
  const n = parseInt(document.getElementById("fibInput").value);
  const result = fibonacci(n);
  document.getElementById(
    "fibonacciResult"
  ).innerText = `Fibonacci number at position ${n} is ${result}.`;
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Palindrome Checker
function checkPalindrome() {
  const str = document.getElementById("palindromeInput").value;
  const result = isPalindrome(str);
  document.getElementById("palindromeResult").innerText = result
    ? `"${str}" is a palindrome.`
    : `"${str}" is not a palindrome.`;
}

function isPalindrome(str) {
  function cleanString(s) {
    return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }

  function checkPalindrome(s, start, end) {
    if (start >= end) {
      return true;
    }
    if (s[start] !== s[end]) {
      return false;
    }
    return checkPalindrome(s, start + 1, end - 1);
  }

  const cleanedStr = cleanString(str);
  return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}
