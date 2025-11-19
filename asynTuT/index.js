//avoiding nested call backs using the assync method with promise




const fs = require('node:fs/promises');

async function example() {
  try {
    const data = await fs.readFile('../asynTuT/starter.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
example();
