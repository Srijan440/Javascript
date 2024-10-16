//all have same logics but the real problem is that  break and continue

for(let i = 0; i < 10; i++)
{
    if(i == 5)
    {
        console.log('Detected 5');            //when i == 5 then,it print 'Detected 5' and then it break,
        break;
    }
    console.log('Value of i is: '+ i);
}
for(let i = 0; i < 10; i++)
{
    if(i == 5)
    {
        console.log('Detected 5');            //when i == 5 then,it print 'Detected 5' and then it again continue from i=6,
        continue;
    }
    console.log('Value of i is: '+ i);
}