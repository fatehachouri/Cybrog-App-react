import gamingLibraryData from '../../Data/GamingLibraryData';
import {  GamingLibraryCard, SectionHeader, SectionWrapper } from '../../components';

import './GamingLibrary.css'
const GamingLibrary = () => {
  
  const cards=gamingLibraryData.map(item=>{
    return <GamingLibraryCard key={item.id} {...item}/>
})

  return (
    <> 
    <SectionWrapper>
      <SectionHeader first="Most Popular" second=" Right Now" /> 
        <div className='gaming-library-cards'>
        {cards}
        </div>
    </SectionWrapper>
    </>
  )
}

export default GamingLibrary