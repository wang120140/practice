let a =[];
for (let codePoint of 'foo') {
    console.log(codePoint);

    (a.indexOf(codePoint) == -1)  && (a.push(codePoint))
  }
console.log(a);

