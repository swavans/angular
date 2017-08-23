'use strict';

const fs = require('fs');
const recursive = require('recursive-readdir');

// exercises.ts
fs.readFile('src/app/solutions/exercises.ts', (err, data) => {
  fs.writeFile('src/app/exercises/exercises.ts',
    data.toString()
      .replace(new RegExp('/solutions', 'g'), '/exercises')
      .replace(new RegExp('SOL', 'g'), 'EX'),
    e => e && console.error(e)
  );
});

// each exercise
recursive('src/app/solutions', ['build.js', 'exercises.ts', 'hello-world.*'], (err, files) => {
  files
    .map(f => ({in: f, out: f.replace('solution', 'exercise')}))
    .forEach(file => {
      fs.readFile(file.in, (err, data) => {

        let inside = false;
        const newData = [];

        data.toString()
          .replace(/\r\n/g, '\n')
          .replace("describe('sol.", "describe('ex.")
          .split('\n')
          .forEach(s => {

            let endIndex = s.indexOf('ex-end');

            if (s.includes('ex-start')) {
              inside = true;
            } else if (endIndex > -1) {

              // special case for the opening tag and attributes:
              // <div
              // ex-start
              // ex-end>test</div>
              if (s.length > endIndex + 6) {
                let ending = s.substring(endIndex + 6).trim();
                if (ending !== '' && ending !== '-->') {
                  newData[newData.length - 1] = newData[newData.length - 1] + ending;
                }
              }

              inside = false;
            } else if (!inside) {
              newData.push(s);
            }
          });

        fs.writeFile(file.out, newData.join('\n'), e => e && console.error(e));
      });
    });
});
