const {sentence}= require('./practice2')
const {writeFile}= require('fs').promises
const os= require('os')

try{
    writeFile(
        './content/practice.txt',
        `Sentence: ${sentence}\nos.userInfo().username: ${os.userInfo().username}`,
        console.log('Done successfully!')
    )
    
}catch{
    console.log(error);
}