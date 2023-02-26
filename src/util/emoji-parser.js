export function parseTextToEmoji(text) {
  const smileyRegex = /:\)/g; // regular expression to match ":)" emoji
  const frownRegex = /:\(/g; // regular expression to match ":(" emoji
  const surpriseRegex = /:O/g; // regular expression to match ":O" emoji

  const emojiMap = {
    ":)": "😊", // Unicode character for the "smiling face" emoji
    ":(": "😢", // Unicode character for the "crying face" emoji
    ":O": "😮", // Unicode character for the "surprised face" emoji
  };

  // Replace each matched regex with its corresponding Unicode character
  text = text.replace(smileyRegex, emojiMap[":)"]);
  text = text.replace(frownRegex, emojiMap[":("]);
  text = text.replace(surpriseRegex, emojiMap[":O"]);

  console.log("text:", text);

  return text;
}
