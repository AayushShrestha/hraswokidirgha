// Node script: check entries in `words.js` where hraswa === dirgha
// Writes output to 'error words.txt' in the same directory.
// Run with: node checkingIfWordsAreSame.js
const fs = require('fs');
const path = require('path');
const words = require('./words.js');

const same = [];
for (let i = 0; i < words.length; i++) {
	const w = words[i];
	if (w.hraswa === w.dirgha) same.push({ index: i, ...w });
}

const lines = [];
lines.push(`Total words: ${words.length}`);
lines.push(`Entries where hraswa === dirgha: ${same.length}`);
if (same.length) {
	lines.push('List:');
	same.forEach(s => {
		lines.push(`#${s.index}: hraswa="${s.hraswa}", dirgha="${s.dirgha}", correct="${s.correct}"`);
	});
}

const outName = 'error words.txt';
const outPath = path.join(__dirname, outName);
try {
	fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
	console.log(`Wrote ${same.length} entries to "${outPath}"`);
} catch (err) {
	console.error('Failed to write output file:', err.message || err);
}

// also export results for other scripts if needed
module.exports = { sameCount: same.length, sameList: same };

