const text = 'I am Niloy. I want to   learn JavaSript. But Every single person tell me js is hard language'
let count= 0;
for (let i = 0; i < text.length; i++) {
    const element = text[i];
    if (element == " " && text[i-1] != ' ') {
       count++;
    }
}
count++
// console.log(text);
console.log(count);