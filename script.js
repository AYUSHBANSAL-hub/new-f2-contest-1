/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  // const developers=arr.filter((item)=>item.profession=="developer");
  arr.map((item)=>{
    if(item.profession=="developer")
    {
      console.log(item);
    }
  });

  // let nums=[1,2,3,4,5];
  // let newnums=nums.map((item)=>item*item);
  // console.log(newnums);
  //'map' transform each element of an array and returns a new array. 'forEach' executes a function on each array element without returning a new array.
}

function PrintDeveloperbyForEach() {
  arr.forEach((item)=>{
    if(item.profession=="developer")
    {
      console.log(item);
    }
  });
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
  const obj={id:4,name:"susan",age:"20",profession:"intern"};
  // const newarray=[...arr,obj];
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const updatedEmployee=arr.filter(item=>item.profession!="admin");
  console.log(updatedEmployee);
  arr=updatedEmployee;
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr=[{id:6,name:"Ayush",age:"20",profession:"intern"},
  {id:7,name:"Chirag",age:"22",profession:"CTO"},
  {id:8,name:"Rohit",age:"23",profession:"CEO"}];

  const concatenateArray=arr.concat(newArr);
  console.log(concatenateArray);
}