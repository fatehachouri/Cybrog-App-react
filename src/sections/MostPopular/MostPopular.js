import './MostPopular.css';
import { Card, SectionHeader, SectionWrapper } from '../../components';
import mostPopularData from '../../Data/MostPopularData';

const MostPopular = () => {
    const cards=mostPopularData.map(item=>{
        return <Card key={item.id} {...item}/>
    })
  return (
    <> 
    <SectionWrapper>
      <SectionHeader first="Most Popular" second=" Right Now" /> 
        <div className='most-popular-items'>
            {cards}
        </div>
    </SectionWrapper>
    </>
  )
}

export default MostPopular