import React from 'react';


const Quotes =props =>{
    console.log(props.quotes)
    return(

        <div>
           <ul>
          {props.quotes.map((q,id)=>{
          return (
              <div key={q.id}>

                  <p key={id+1}>{q.name}</p>
                  <p key={id+2}>{q.description}</p>
                  <p key={id+3}>{q.price}</p>
                  <p key={id+4}>{q.type}</p>

              </div>
          )
          
          })}
        </ul>


        
           
            
        </div>
    )
}


export default Quotes;