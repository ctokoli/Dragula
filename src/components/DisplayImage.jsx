/* eslint-disable react/prop-types */
import { Image, Shimmer } from 'react-shimmer'

const DispalyImage = ({data}) => {
    return ( 
        <>
         <div className='grid'>
            <Image
                fadeIn={true}
                src= {data.src}
                fallback={<Shimmer width={100} height={50} />}
            />
         
         </div>
        </>
     );
}
 
export default DispalyImage;