import React from 'react';
import { useRef, useEffect, useState } from 'react';

import { Title } from '../title/Title';
import { LeftLeaf } from '../plant/plantparts/LeftLeaf';
import { RightLeaf } from '../plant/plantparts/RightLeaf';
import { InitialStem } from '../plant/plantparts/InitialStem';
import { InnerStem } from '../plant/plantparts/InnerStem';
import './WebsiteInnerWindowStyles.css';
import { LeftVideos} from '../videos/LeftVideos';
import { RightVideos} from '../videos/RightVideos';

export const WebsiteInnerWindow = () => {

   const leaves = 7;
   const stems = 5;
   const leavesRight = 8;


   const [currentZindex, setZindex] = useState(100);    

   const incrementZindex = () => {   
      if( currentZindex > 0 ) {
         setZindex( currentZindex - 10 );     
            
      } 
      console.log( "Current z-index = " + currentZindex );
      return currentZindex.toString();         
   }

   return (
       <div className="innerwindow">

          <Title />


         
         <div className="leftleaf-container">
            { Array(leaves).fill( <LeftLeaf /> )}
         </div>

         

         <div className="innerstem-container"> 
             <InitialStem className="initial-stem-component"/>       
            { Array(stems).fill(<InnerStem className="innerstemimage"  style={{ zIndex: incrementZindex() }} /> )}
         </div>

         
         
         <div className="rightleaf-container">
            { Array(leavesRight).fill( <RightLeaf /> )}
         </div>

         

        
                 <LeftVideos />

<RightVideos />
       
      </div>      
  )  


  

     /*

         <div className="leftvideos-container">
            <iframe title="videoframe" className="videoframe"      
            src={LeftVideos.map(elem => {
                return elem; })
            }>
               </iframe>
         </div>


         const videoArray = [5, 6, ...15];

   const scrollObserver = new IntersectionObserver(); 

   const myRef = useRef;

   useEffect(() => {
      console.log('myRef', myRef.current); //console log the current value of ref

   }, []); //empty array second arg means it only runs once

   useState(() => 100 + 100); 
   
    
        <div className="innerstem-container">
            { Array(stems).fill(<InnerStem className="innerstem" style={{zIndex:{setZindex}}} />)}
        </div> 

        <div className="innerstem-container">
            { Array(stems).fill(<div className="innerstemdiv">
                  <InnerStem className="innerstem" style={{zIndex:+1}} {this.renderIcon} />
               </div>)}
         </div>




         
         <div className="leftvideos-container">
            <iframe width="400" height="200" src="https://www.youtube.com/embed/1tad8eYYvXg" 
               title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
               clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>

            <iframe width="400" height="200" src="https://www.youtube.com/embed/1tad8eYYvXg" 
               title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
               clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
         </div>

   */
};
