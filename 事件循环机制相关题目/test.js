   new Promise((resolve, reject) => {
     console.log(1)
     resolve()
   }).then((res) => {
     console.log(2)
     new Promise((resolve, reject) => {
       console.log(3)
       resolve()
     }).then(() => {
       console.log(4)
     }).then(() => {
       console.log(5)
     })
   }).then(() => {
     console.log(6)
   })