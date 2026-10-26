let task=[
    {
        sname:"ram" , status:"completed" , lastDate:"12/10/2026" ,sfees:10000, subject:"Java  Script"
    },
      {
        sname:"Venkat" , status:"not-completed" , lastDate:"12/10/2026" ,sfees:15000 ,subject:"Java Script"
    },
      {
        sname:"Nandhakumar" , status:"completed" , lastDate:"8/11/2026" ,sfees:18000,subject:"JavaScript"
    },
      {
        sname:"EdwinnJoseph" , status:"completed" , lastDate:"8/11/2026" ,sfees:10200,subject:"Java"
    },
      {
        sname:"GuganRaj" , status:"not-completed" , lastDate:"8/11/2026" ,sfees:31000 ,subject:"Java"
    }
]

   task.forEach(a=> 
   {

    console.log("All Student Details");
    
    console.log(a.sname,a.sfees,a.lastDate,a.status,a.subject);
    
   }
   )

   let check= task.filter( completedTask =>completedTask.status==='completed')

   console.log("Completed tasks");
   console.log(check);


   let  uncheck=task.filter(uncompletedTask=>uncompletedTask.status==='not-completed')
   console.log("Un Completed tasks");
   console.log(uncheck);
   
   
   let b=task.filter(fee=>fee.sfees>15000).map(student=>
   {
    return{sname:student.sname ,sfees:student.sfees}
   }
   )

   console.log(b);

   



   let tDate = new Date(); // today date

task.forEach(student => {
  
  let last = new Date(student.lastDate);
  
  if(tDate > last) {
    console.log(student.subject + "  is completed move on to next topic - " + student.sname);
  } else {
    console.log(student.subject + " is not completed - " + student.sname);
  }
});

    


   
   
   
 

