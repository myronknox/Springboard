const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
{
  let encryptedMessage = ' ';// Your encryption code here
  for (i = 0; i < message.length; i++){
    let char = message[i].toLowerCase(); //Turns letter to lower case

    if (alphabet.includes(char)) {
        const idx = alphabet.indexOf(char); //This is how you find index
        const newIdx = (idx + shiftValue) % alphabet.length; //This adds the shift
        encryptedMessage += alphabet[newIdx] //Stores shift as message

        if ((i +1)% 2 ===0) {
            const randomIndex = Math.floor(Math.random() * 26);
            encryptedMessage += alphabet[randomIndex]; //Random letter appears every 2 letters
        }
        else{
            encryptedMessage += char;
        }
        }
    }
  }
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
    let decryptedMessage = '';
    
    for (i = 0; i < encryptedMessage.length; i++){
      if ( (i+1) % 3 != 0){ //Does not allow random letters
        const char = encryptedMessage[i].toLowerCase();//Convert to lower case letters
        const idx = alphabet.indexOf(char);
        if (idx >= 0){
            let newIdx = idx - shiftValue; //New index is index minus the shift value
            while (newIdx < 0) newIdx += alphabet.length;
            decryptedMessage += alphabet[newIdx % alphabet.length];

        }else{
            decryptedMessage += char;
        }

      } 
    }

  return decryptedMessage;
}
console.log(decrypt('Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv \'zQkhhuubyjkit\' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.', 42));