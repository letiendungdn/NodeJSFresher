let f = () => {
    let d = new Date(); // current time
    return d.getMilliseconds() % 2 == 0; // => true or false
   };

async function retry(func, wait,option) {
    let currentTry = 0;

    while(true){
      func();
      if(func() === true){
        console.log('Succeeded')
        break
      }else{
        currentTry++;
        console.log(`failed attempt ${currentTry}`);
        if(option.max === currentTry){
          console.log('Retry maximum reached. Exiting');
          break;
        }
      }
      await sleep(wait)
    }
    
    
  }
  function sleep(ms){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      },ms)
    })
  }

  retry(f, 1000, {max: 3});

  ///////////////////////////////////////
  function exercise3 (time) {
    console.log(time)
    arr = new Array([])
    temp = 0
    for (let index = 0; index < time; index++) {
      arr[0].push(1)
    }

    while(time>1){
      
      time =time -2
      temp++
      item = []
      twoHour = 0
      for (let index = 0; index < temp; index++) {
        item.push(2)
        twoHour++
      }
      for (let index = 0; index < time; index++) {
        item.push(1)
      }
      arr.push([...item])
      
      for (let index = 0; index < twoHour; index++) {
        for (let i = 0; i < item.length; i++) {
          if(item[i]>item[i+1]){
            item[i] = 1
            item[i+1] = 2
            
            arr.push([...item])
          }
         
        }
        
      }

    }
    console.log(arr)

  }
  exercise3(8)