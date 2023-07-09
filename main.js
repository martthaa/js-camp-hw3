// 1 функція, яка повертає різницю між найбільшим та найменшим значенням у списку , отриманому як аргумент функції.
function subMaxMin(arr) {
    return arr.length < 2 ? 0 : Math.max(...arr) - Math.min(...arr);
}

console.log("task 1 ==================");
console.log(subMaxMin([1, 2, 3, -4]));
console.log(subMaxMin([16]));  
console.log(subMaxMin([]));  

//2 Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді масиву тільки ті слова, довжина яких перевищує число
const filterWordsByLength = (str, length) => str.split(' ').filter(word => word.length > length);

console.log("task 2 ==================");
console.log(filterWordsByLength("Це рядок слів різної довжини для тестування другого завдання з кемпу", 5));
console.log(filterWordsByLength("Hello world", -2));
console.log(filterWordsByLength("", 5));
console.log(filterWordsByLength("Prog", 5)); 

//3 Напишіть функцію, яка повертає true, якщо перший переданий аргумент (рядок) закінчується другим аргументом (також рядком).
const endsWith = (str, ending) => str.endsWith(ending);

console.log("task 3 ==================");
console.log(endsWith("abc", "bc"));
console.log(endsWith("abc", "d"));
console.log(endsWith("", "")); // Виведе: true
console.log(endsWith("", "bc")); // Виведе: false
console.log(endsWith("abc", "")); // Виведе: true

//4 Напишіть функцію, яка отримує масив цілих чисел і повертає масив середніх значень кожного цілого числа та його послідовника, якщо він є. 
const averages = arr => arr.slice(0, -1).map((value, index) => (value + arr[index + 1]) / 2);

console.log("task 4 ==================");
console.log(averages([2, -2, 2, -2, 2]));
console.log(averages([1, 3, 5, 1, -10]));

// 5.1 Створіть функцію, яка приймає рядок і повертає кількість голосних, які у ній.
const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const count = [...str.toLowerCase()].filter((char) => vowels.includes(char)).length;
    
    return count;
};

console.log("task 5.1 ==================");
console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));

// 5.2 Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
const removeABC = str => {
    const result = str.replace(/[abc]/g, '');
    return result.length === str.length ? null : result;
};
console.log("task 5.2 ==================");
console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));

// 6
function difference(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr2.splice(j, 1);
            }
        }
    }

    let mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    return mergedArray;
}

console.log("task 6 ==================");
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

// 7 Напишіть функцію, щоб отримати копію об'єкта, де ключі стали значеннями, а значення ключами.
function swap(obj) {
    const newObj = {};
    Object.keys(obj).forEach(function(value) {
      var key = obj[value];
      newObj[key] = value;
    });

    return newObj;
};
console.log("task 7 ==================");
console.log(swap ({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// 8
function calculateDifference(stolenItems, limit) {
    const totalValue = Object.values(stolenItems).reduce((acc, curr) => acc + curr, 0);

    return totalValue > limit ? totalValue - limit : 0;
}

console.log("task 8 ==================");
console.log(calculateDifference({"baseball bat": 20 }, 5)); // Виведе: 15
console.log(calculateDifference({skate: 10, painting: 20 }, 19)); // Виведе: 11
console.log(calculateDifference({skate: 200, painting: 200, shoes: 1 }, 400)); // Виведе: 1
 
//9
function doesBrickFit(a, b, c, w, h) {
    const width = (a <= w && b <= h) || (b <= w && a <= h);
    const height = (a <= h && b <= w) || (b <= h && a <= w);
    const depth = c <= w && c <= h;
  
    // Повертаємо істину, якщо цегла підходить у будь-якому з трьох напрямків
    return width || height || depth;
}
  
console.log("task 9 ==================");
console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));
  
//10 Дано рядок, що містить повне ім'я файлу (наприклад, 'c:\WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу без розширення.
function getFilename(path) {
    let array = path.split('\\');
    return array[array.length - 1].split('.')[0];
}
console.log("task 10 ==================");
console.log(getFilename('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

//11 Дано два рядки. Чи можна перший рядок отримати з другого циклічним зрушенням?
function shift(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    
    for (let i = 0; i < str2.length; i++) {
      const shiftedStr2 = str2.slice(i) + str2.slice(0, i);
      
      if (shiftedStr2 === str1) {
        return true;
      }
    }
    
    return false;
}
console.log("task 11 ==================");
console.log(shift("marta", "rtama"));

// 12 З елементів масиву a, що складається з 2n елементів, отримати масиви b і c наступним чином: вибрати в масиві a два найбільш близькі за значенням елемента, менший з них помістити в масив b, а більший - масив c. Виключити з розгляду в масиві a ці елементи і продовжити вибір з елементів, що залишилися.
  
function separateArrays(a) {
    const b = [];
    const c = [];
  
    while (a.length > 0) {
      const min = Math.min(...a);
  
      if (a.length % 2 === 0) {
        b.push(min);
      } else {
        c.push(min);
      }
  
      a = a.filter(e => e !== min);
    }
  
    console.log(b, c);
}
console.log("task 12 ==================");
separateArrays([5, 2, 8, 3, 1, 9]);
  
// 15
function generatePassword() {
    const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
    const underscore = '_';
    let password = '';

    const length = Math.floor(Math.random() * 15) + 6;
    password += underscore;
  
    for (let i = 0; i < 2; i++) {
      password += validChars.charAt(Math.floor(Math.random() * 26) + 26);
    }

    let digitCount = 0;
    let consecutiveDigits = false;
  
    for (let i = 0; i < length - 3; i++) {
      const char = validChars.charAt(Math.floor(Math.random() * validChars.length));
      password += char;
  
      if (char >= '0' && char <= '9') {
        digitCount++;
  
        if (i > 0 && password[i] >= '0' && password[i] <= '9' && password[i] === password[i - 1]) {
          consecutiveDigits = true;
        }
      }
    }

    if (digitCount > 5 || consecutiveDigits) {
      return generatePassword();
    }
  
    return password;
  }
console.log("task 15 ==================");
console.log(generatePassword());

// 16
const reorderArr = arr => {
    const newArr = new Array(arr.length);
  
    const sortedArr = arr.sort((a, b) => a - b);
  
    for (let i = 0, j = arr.length - 1; i < arr.length; i++) {
      if (i % 2 === 0) {
        newArr[i / 2] = sortedArr[i];
      }
      if (i % 2 !== 0) {
        newArr[j--] = sortedArr[i];
      }
    }
  
    return newArr;
  };
console.log("task 16 ==================");
console.log(reorderArr([1, 2, 3, 4, 5]));

// 17 Напишіть функцію, яка приймає рядок та повертає новий рядок, відсортований за частотою появи символів.
function sortString(str) {
    const charCount = {};
  
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    const charFrequency = Object.entries(charCount);
    charFrequency.sort((a, b) => b[1] - a[1]);
  

    let sortedStr = '';
    for (let [char, frequency] of charFrequency) {
      sortedStr += char.repeat(frequency);
    }
  
    return sortedStr;
}

console.log("task 17 ==================");
console.log(sortString('abbracadabra'));

//18 Дано два рядки. Напишіть функцію, яка знаходить найбільший загальний підрядок у цих рядках.
function findLongestSubstring(str1, str2) {
    let longestSubstring = '';
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        let substring = '';
        let x = i;
        let y = j;
        while (str1[x] && str1[x] === str2[y]) {
          substring += str1[x];
          x++;
          y++;
        }
        if (substring.length > longestSubstring.length) {
          longestSubstring = substring;
        }
      }
    }
    return longestSubstring;
}

const str1 = 'Hello, world';
const str2 = 'Welcome to the world';
console.log("task 18 ==================");
console.log(findLongestSubstring(str1, str2)); 

// 19
function caesarEncrypt(str, shift) {
    return str.replace(/[a-z]/gi, char => {
      const charCode = char.charCodeAt(0);
      let baseCharCode;

      if (charCode >= 65 && charCode <= 90) {
        // великі
        baseCharCode = 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // маленькі
        baseCharCode = 97;
      } else {
        return char; // не літера
      }

      const shiftedCharCode = ((charCode - baseCharCode + shift) % 26) + baseCharCode;
      return String.fromCharCode(shiftedCharCode);
    });
}
console.log("task 19 ==================");
console.log(caesarEncrypt('Hello, World!', 3));

//20 Напишіть функцію, яка приймає два рядки та перевіряє, чи є вони анаграмами
const isAnagrams = (str1, str2) => {
    if (!str1 || !str2 || str1.length !== str2.length) {
        return false;
    }

    const arr1 = str1.toLowerCase().split();
    const arr2 = str2.toLowerCase().split();

    return arr1.some(el => !arr2.includes(el));
}
console.log("task 20 ==================");
console.log(isAnagrams('abc', 'cbd'));
console.log(isAnagrams('hello', 'oleh'));

//21 Створіть об'єкт "Університет"
const University = {
    students: [],
    
    addStudent: function(student) {
      this.students.push(student);
    },
    
    removeStudent: function(studentId) {
      this.students = this.students.filter(student => student.id !== studentId);
    },
    
    getStudentInfo: function(studentId) {
      return this.students.find(student => student.id === studentId);
    },
    
    getStudentsByCourse: function(course) {
      return this.students.filter(student => student.course === course);
    },
    
    getStudentsByFaculty: function(faculty) {
      return this.students.filter(student => student.faculty === faculty);
    }
};
  
University.addStudent({ id: 1, name: 'Marta', course: 3, faculty: 'Applied mathematics and computer science' });
University.addStudent({ id: 2, name: 'Petro', course: 4, faculty: 'Physics' });

console.log("task 21 ==================");
University.students.forEach(student => {
    console.log(`Student ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Course: ${student.course}`);
    console.log(`Faculty: ${student.faculty}`);
    console.log('-----------------------');
});
  
// 22 Напишіть програму, яка аналізує текст
function analyzeText(text) {
    const characterCount = text.replace(/\s/g, '').length;
    const wordCount = text.split(' ').filter(word => word !== '').length;
    const sentenceCount = text.split('.').filter(sentence => sentence !== '').length;
  
    return {
      characterCount,
      wordCount,
      sentenceCount
    };
  }
  
  function findMostFrequentWords(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const wordsCount = {};
    let maxCount = 0;
    let mostFrequentWords = [];
  
    words.forEach(word => {
       wordsCount[word] = (wordsCount[word] || 0) + 1;
      if (wordsCount[word] > maxCount) {
        maxCount = wordsCount[word];
        mostFrequentWords = [word];
      } else if (wordsCount[word] === maxCount) {
        mostFrequentWords.push(word);
      }
    });
  
    return mostFrequentWords;
  }
  
const text = "this is the first sentence. This is the second sentence. Third sentence.";
const statistics = analyzeText(text);
const mostFrequentWords = findMostFrequentWords(text);
  
console.log("task 22 ==================");
console.log('Слів:', statistics.wordCount);
console.log('Речень:', statistics.sentenceCount);
console.log('Символів:', statistics.characterCount);
console.log('Найбільш часті слова:', mostFrequentWords);
  
  
