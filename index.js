const btnEl = document.querySelector(".btn");
const nameEl = document.querySelector(".name");

const arrayOfEmoji = [];

async function getEmoji() {
  const response = await fetch(
    "https://emoji-api.com/emojis?access_key=bb4897811b9ca6cffcae52b79ff653d620e154cb"
  );

  const result = await response.json();

  for (i = 0; i < 1500; i++) {
    arrayOfEmoji.push({
      emojiImage: result[i].character,
      emojiName: result[i].unicodeName,
    });
  }
}

getEmoji();
console.log(arrayOfEmoji);

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * arrayOfEmoji.length);
  btnEl.innerText = arrayOfEmoji[randomNum].emojiImage;
  nameEl.innerText = arrayOfEmoji[randomNum].emojiName;
});
