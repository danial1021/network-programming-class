var fs = require('fs');

fs.writeFileSync('./sync.txt', '2학년 3반 18번 최의빈');
// 동기
try{
    var data = fs.readFileSync('./sync.txt','utf8');
    console.log(data);
}catch(error){
    console.log('fs.readFileSync Error', error);
}