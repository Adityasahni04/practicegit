prompt=require('prompt-sync')();
//que1
age=prompt("Enter the age:");
if(age<18)
    {
        console.log("20% discount")
    }
else if(age>=18 && age<=65)
    {
        console.log("Normal ticket price")
    }
 else{
    console.log("You get 30% discount");
}
//que 2
length=prompt("enter L:");
breath=prompt("enter B:");
area=length*breath;
console.log("the area of teh rectangle is:"+area);
//que 3
product={
    name:'brush',
    price:'$3',
    instock:true,
};
console.log(product.name,product.price);
//que 4
username=prompt("Enter your name:");
guestlist=['aditya','ridansh','xyz','abc','x'];
result=check(username)
function check(user)
{
    for(i=0;i<guestlist.length;i++)
        {
            if(user.toLowerCase()==guestlist[i].toLowerCase())
                {
                    return"welcome to the party";
                }
                else
                {
                    return "return not allowed";
                }
        }
}
console.log(result);

const username1 = prompt("Enter your name: ");
const guestlist1 = ['aditya', 'ridansh', 'xyz', 'abc', 'x'];

const result1 = guestlist1.includes(username1.toLowerCase()) ? "Welcome to the party" : "Not allowed";
console.log(result1);
//que 5
weatherapp={
    date:'12:04:2004',
    temperature:'50c',
    conditions:'summer',
    humidity:'12%'
};
console.log(JSON.stringify(weatherapp))