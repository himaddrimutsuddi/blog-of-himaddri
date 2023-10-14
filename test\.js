let comp = ['snake', 'water', 'gun']


let i = 0;
let user = 0
let computer = 0

let compguess = comp[Math.floor(Math.random() * comp.length)]

do {
    let input = prompt("Choose snake, water, gun");
    
    if(compguess==input){
        alert('The match is a draw')
        i++
    }
    else if(input=='snake' && compguess=='water'){
        alert('You win!')
        i++;
        user++
        
    }
    else if(input=='gun' && compguess=='snake'){
        alert('You win!')
        i++
        user++
    }
    else if(input=='water' && compguess=='gun'){
        alert('You win!')
        i++
        user++
    }
    else if(input=='water' && compguess=='snake'){
        alert('Computer wins')
        i++
        computer++
    }
    else if(input=='gun' && compguess=='water'){
        alert('Computer wins')
        i++
        computer++
    }
    else if(input=='snake' && compguess=='gun'){
        alert('Computer wins')
        i++;
        computer++
    }

}while (i<10);

if(user>computer){
    console.log('User wins in this game')
    console.log('Your point is', (10-user))
}
else{
    console.log('Computer wins in this game')
    console.log('Your point is', (10-computer))
}