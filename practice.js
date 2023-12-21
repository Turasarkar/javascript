let data =[
    {
     val1:"hghghghghg",
     val2:"fgfgfgfgfg", 
     val3:"dfdfdfdfdf",  
},
{
    val4:"tututututu",
    val5:"rururururu",
    val6:"yuyuuyyuyu",   
},
{
    val7:"qqqqqqqqqq",
    val8:"gggggggggg",
    val9:"hhhfhfhfhf",
},
];
console.log(data.filter((item) => item.val5 =="rururururu"));



let val1 = 23;
let val2 = 56;
function printval(sum) {
    console.log(sum)
}
printval("add")
function printval(sum) {
    if (sum == "add"){
     console.log(val1+val2);   
    }else if (sum == "substract"){
      console.log (val1-val2); 
    }
}

printval  (sum= "add")




data.map(i) => {
   console.log(i.val3) 
});
console.log(data.filter((item) => item.val4=="tututututu"));
