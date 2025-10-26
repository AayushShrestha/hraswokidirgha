# ह्रस्व की दीर्घ - Hraswa ki Dirgha

A minimal text-based Nepali language learning game where players identify whether a word is in its "Hraswa" (short vowel) or "Dirgha" (long vowel) form.

## Features

- **Three difficulty modes:**
  - Easy: No time limit
  - Medium: 15 seconds per word
  - Hard: 10 seconds per word

- **Interactive gameplay:**
  - Tap the word card to toggle between Hraswa and Dirgha forms
  - Click the correct button to score points
  - Wrong answer ends the game

## How to Play

1. Open `index.html` in your web browser
2. Read the game rules
3. Select a difficulty mode
4. Click "खेल सुरु गर्नुहोस्" (Start Game)
5. Tap the word card to toggle between forms
6. Click "ह्रस्व" or "दीर्घ" to make your choice
7. Score points by choosing correctly!

## Technologies Used

- HTML5
- CSS3 (pure CSS, no frameworks)
- Vanilla JavaScript
- jQuery (for DOM manipulation)

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - Minimal pastel design styling
- `script.js` - Game logic, state management, and word decoder
- `words.js` - Source word database with Hraswa/Dirgha pairs (edit this file)
- `words.encoded.js` - Encoded version of words (auto-generated, do not edit)
- `encode-words.js` - Script to encode words for production

## Design Philosophy

- Minimal and clean UI
- Pastel color scheme
- Responsive design
- Accessible and easy to use

## Adding More Words

Edit `words.js` and add more word pairs in the `words` array:

```javascript
{
    hraswa: 'word_in_short_form',
    dirgha: 'word_in_long_form',
    correct: 'hraswa' // or 'dirgha'
}
```

After editing `words.js`, regenerate the encoded file:

```bash
node encode-words.js
```

This will update `words.encoded.js` with the new words in an encoded format to prevent casual inspection of answers.

## Security Note

The game uses an encoded format for words to discourage casual inspection of answers. The encoding is a simple XOR cipher - it provides basic obfuscation but is not cryptographically secure. For educational games, this is sufficient to prevent casual cheating.

**Architecture:**
- `words.encoded.js` contains only the encoded data
- `script.js` contains the decoder function
- Decoding happens when the page loads
- No backend required, zero latency

**Do not commit `words.js` to version control** if you want to keep the answers completely secret. Alternatively, you can maintain `words.js` locally and only deploy `words.encoded.js`.

