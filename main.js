//Rover Map

const board = [ 
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
];

//Función para mover al rover

function movement(rover,x,y){
  
  //borrar movimientos anteriores 
  for(let i = 0; i < board.length; i++){
       for(let j = 0; j < board[i].length; j++){
         if(board[i][j] === rover.id){
           board[i][j] = ' ';
         }else{
           
         };
       };
   };
  //registrar nuevo movimiento en el trablero
  board[x][y] = rover.id;
};

//Función para crear un obstáculo
function obstacle(x,y){
  board[x][y] = 'O';
 };



// Rover Object Goes Here
// ======================

const Thompson={
    id:"Thompson",
    direction:"N",
    x:0,
    y:0,
    travelLog: [{x:0,y:0}] 
  }

const Cooper={
    id:"Cooper",
    direction:"N",
    x:0,
    y:0,
    travelLog: [{x:0,y:0}] 
  }
  
  // ======================
  
  function turnLeft(rover){
    switch(rover.direction){
      case "N": rover.direction = "W";
                 console.log(`Has girado a ${rover.id} y ahora mira hacia el Oeste`);
                 break;
      case "E": rover.direction = "N";
                console.log(`Has girado a ${rover.id} y ahora mira hacia el Norte`);
                break;
      case "S": rover.direction = "E";
                console.log(`Has girado a ${rover.id} y ahora mira hacia el Este`);
                break;
      case "W": rover.direction = "S";
                console.log(`Has girado a ${rover.id} y ahora mira hacia el Sur`);
                break;
    }
  }
  
  function turnRight(rover){
    switch(rover.direction){
      case "N": rover.direction = "E";
                console.log(`Has girado a ${rover.id} y ahora mira hacia el Este`);
               break;
      case "E": rover.direction = "S";
              console.log(`Has girado a ${rover.id} y ahora mira hacia el Sur`);
              break;
      case "S": rover.direction = "W";
             console.log(`Has girado a ${rover.id} y ahora mira hacia el Oeste`);
              break;
      case "W": rover.direction = "N";
             console.log(`Has girado a ${rover.id} y ahora mira hacia el Norte`);
      break;
    }
  }
  
  function moveForward(rover){
    switch(rover.direction){ 
      case "N": if(rover.x>=0 && rover.x+1<10){
            rover.x--;
              if(board[rover.x][rover.y] !== ' '){
                          console.log(`Oh no! ${rover.id} ha chocado con un obstáculo y ha vuelto a su posición anterior :/`);
                          rover.x++;
                    }else{
                          movement(rover.x,rover.y);
                          console.log(`${rover.id} se ha movido al Norte 1 casilla y ahora está en x:${rover.x}, y:${rover.y} `);
                          let positionLogN = {x: rover.x, y: rover.y};
                          rover.travelLog.push(positionLogN);
                    }}else{
                          console.log(`Cuidado! ${rover.id} se ha salido de la pista! :(`)
            }
                break;
       
      case "E": if(rover.y>=0 && rover.y+1<=10){
                rover.y++;
                    if(board[rover.x][rover.y] !== ' '){
                          console.log(`Oh no! ${rover.id} ha chocado con un obstáculo y ha vuelto a su posición anterior :/`);
                          rover.y--;
                    }else{
                          movement(rover,rover.x,rover.y);
                          console.log(`${rover.id} se ha movido al Este 1 casilla y ahora está en x:${rover.x}, y:${rover.y} `);
                          let positionLogE = {x: rover.x, y: rover.y};
                          rover.travelLog.push(positionLogE);
                    }}else{
                          console.log(`Cuidado! ${rover.id} se ha salido de la pista! :(`)
            }
                break;

      case "S": if(rover.x>=0 && rover.x+1<10){
                rover.x++;
        
               if(board[rover.x][rover.y] !== ' '){
                          console.log(`Oh no! ${rover.id} ha chocado con un obstáculo y ha vuelto a su posición anterior :/`);
                          rover.x--;
                    }else{
                          movement(rover,rover.x,rover.y);
                          console.log(`${rover.id} se ha movido al Sur 1 casilla y ahora está en x:${rover.x}, y:${rover.y} `);
                          let positionLogS = {x: rover.x, y: rover.y};
                          rover.travelLog.push(positionLogS);
                    }}else{
                          console.log(`Cuidado! ${rover.id} se ha salido de la pista! :(`)
            }
                break;
        
      case "W": if(rover.y>=0 && rover.y+1<=10){
                rover.y--;
                if(board[rover.x][rover.y] !== ' '){
                          console.log(`Oh no! ${rover.id} ha chocado con un obstáculo y ha vuelto a su posición anterior :/`);
                          rover.y++;
                     }else{
                          movement(rover,rover.x,rover.y);
                          console.log(`${rover.id} se ha movido al Este 1 casilla y ahora está en x:${rover.x}, y:${rover.y} `);
                          let positionLogW = {x: rover.x, y: rover.y};
                          rover.travelLog.push(positionLogW);
                }}else{
                console.log(`Cuidado! ${rover.id} se ha salido de la pista! :(`)
            }
                break;
    };
  }
  

  function moveBackward(rover){
    switch(rover.direction){ 
      case "N": if(rover.x>=0 && rover.x+1<10){
        
            rover.x++;
        
                    if(board[rover.x][rover.y] !== ' '){
                          console.log(`Oh no! ${rover.id} ha chocado con un obstáculo y ha vuelto a su posición anterior :/`);
                          rover.x--;
                    }else{
                          movement(rover,rover.x,rover.y);
                          console.log(`${rover.id} se ha movido al Sur 1 casilla y ahora está en x:${rover.x}, y:${rover.y} `);
                          let positionLogN = {x: rover.x, y: rover.y};
                          rover.travelLog.push(positionLogN);
                    }}else{
                          console.log(`Cuidado! ${rover.id} se ha salido de la pista! :(`)
            }
                break;
       
      case "E": if(rover.y>=0 && rover.y+1<=10){
                rover.y--;
                
                    if(board[rover.x][rover.y] !== ' '){
                          console.log(`Oh no! ${rover.id} ha chocado con un obstáculo y ha vuelto a su posición anterior :/`);
                          rover.y++;
                    }else{
                          movement(rover,rover.x,rover.y);
                          console.log(`${rover.id} se ha movido al Oeste 1 casilla y ahora está en x:${rover.x}, y:${rover.y} `);
                          let positionLogE = {x: rover.x, y: rover.y};
                          rover.travelLog.push(positionLogE);
                    }}else{
                          console.log(`Cuidado! ${rover.id} se ha salido de la pista! :(`)
            }
                break;

      case "S": if(rover.x>=0 && rover.x+1<10){
                rover.x--;
                
                if(board[rover.x][rover.y] !== ' '){
                          console.log(`Oh no! ${rover.id} ha chocado con un obstáculo y ha vuelto a su posición anterior :/`);
                          rover.x++;
                    }else{
                          movement(rover,rover.x,rover.y);
                          console.log(`${rover.id} se ha movido al Norte 1 casilla y ahora está en x:${rover.x}, y:${rover.y} `);
                          let positionLogS = {x: rover.x, y: rover.y};
                          rover.travelLog.push(positionLogS);
                    }}else{
                          console.log(`Cuidado! ${rover.id} se ha salido de la pista! :(`)
            }
                break;
        
      case "W": if(rover.y>=0 && rover.y+1<=10){
                rover.y++;
                if(board[rover.x][rover.y] !== ' '){
                          console.log(`Oh no! ${rover.id} ha chocado con un obstáculo y ha vuelto a su posición anterior :/`);
                          rover.x++;
                     }else{
                          movement(rover,rover.x,rover.y);
                          console.log(`${rover.id} se ha movido al Este 1 casilla y ahora está en x:${rover.x}, y:${rover.y} `);
                          let positionLogW = {x: rover.x, y: rover.y};
                          rover.travelLog.push(positionLogW);
                }}else{
                console.log(`Cuidado! ${rover.id} se ha salido de la pista! :(`)
            }
                break;
    };
  }

  function commands(rover,orders){
    
    for(let i=0 ; i<orders.length ; i++){
      let order= orders[i];
      if(order !== "f" && order !== "l" && order !== "r" && order !== "b"){
          console.log(`Ups, ${rover.id} no ha entendido esta orden y no ha realizado ninguna acción :(`)
      }else{ switch(order){
        case "f": moveForward(rover);
        break;
        case "l": turnLeft(rover);
        break;
        case "r": turnRight(rover);
        break;
        case "b": moveBackward(rover);
        break;
      }}
     
    };
   
  }
  
  //Función para sacar el log de cada rover
  function logRover(rover){
    for(let i=0; i< rover.travelLog.length; i++){
        console.log(`Movimiento de ${rover.id} ${i}: x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`)
      }
  }

//Creamos los obstáculos
obstacle(2,2);


//Configuramos cada Rover y a caminar:

commands(Thompson,"rfff");
commands(Cooper,"rfff");

logRover(Thompson);
logRover(Cooper);
