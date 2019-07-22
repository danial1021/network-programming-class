var fs = require('fs');

fs.writeFile('./async.txt','2학년 3반 18번 최의빈',function(err) {
    if(err) console.log(err);
});
// 비동기
fs.readFile('./async.txt','utf8',function(err,data){
    if(err){
        console.log('fs.readFile Error');
    }else{
        console.log(data);
    }
});