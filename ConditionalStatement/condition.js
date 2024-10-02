let name=['ashenafi','bixa','abi','estif'];
if(name.length>5){
    console.log("more member");
}
else{
    console.log('correct');
}
//break
const score=[50,25,0,30,100,20,10];
for(let i=0;i<score.length;i++)
{
    if(score[i]==0)
    {
        continue;
    }
    console.log("Your score"+' '+score[i]);
  
    if(score[i]==100)
    {
        console.log("Congra you get 100");
        break;
    }
}