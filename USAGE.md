# Encoding System Usage

## Overview

This game uses an encoding system to protect answers from casual inspection. The words are stored in an encoded format that makes it harder for users to cheat by viewing the source code.

## Workflow

### For Development

1. Edit `words.js` to add or modify words:
   ```javascript
   {
       "hraswa": "चिन्",
       "dirgha": "चीन्",
       "correct": "hraswa"
   }
   ```

2. Generate the encoded file:
   ```bash
   node encode-words.js
   ```

3. `words.encoded.js` contains the encoded data, and `script.js` contains the decoder.

### File Changes

- **index.html**: Loads `words.encoded.js` and `script.js`
- **words.encoded.js**: Auto-generated file containing only encoded data
- **script.js**: Contains the decoder function and game logic
- **encode-words.js**: Script to generate the encoded file
- **words.js**: Source file (edit this, then run the encoder)

## How It Works

1. The encoder reads `words.js` and applies XOR cipher encryption
2. Encoded words are stored as hexadecimal strings
3. The decoder function is in `script.js`
4. When the page loads:
   - `words.encoded.js` loads first and defines `encodedWords`
   - `script.js` loads next and decodes the words
5. The game uses the decoded words normally

**File Responsibilities:**
- `words.encoded.js`: Contains only encoded data
- `script.js`: Contains the decoder function and game logic

## Regenerating the Encoded File

Whenever you update `words.js`:

```bash
node encode-words.js
```

You'll see:
```
✓ Encoded 50 words
✓ Generated: words.encoded.js
```

## Security Level

- **Protection**: Basic obfuscation
- **Target**: Casual users viewing source code
- **Not for**: Determined hackers or security-critical applications
- **Best for**: Educational games like this one

## For Production

If you want stronger security, you can:

1. Keep `words.js` out of version control
2. Use a more complex encoding scheme
3. Implement server-side validation (but adds latency)
4. Use a pre-shared key that's loaded separately

For this educational game, the current level is appropriate.

