function test() {
    for(let i=1;i<=8;i++) {
        setTimeout(function() {console.log(i)},i*1000);
    }
    console.log('sabeer');
}
test();

db.collection.find({_id:{$ne:5_}})

db.collection.update({name:'Abhinand',Price:{$lt:5000}, $set:{Salary}})


