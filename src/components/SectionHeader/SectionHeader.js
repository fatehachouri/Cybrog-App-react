import './SectionHeader.css'
const SectionHeader = (props) => {
  return (
    <div className='section-header'>
    <h4> {props.first} <em>{props.second}</em></h4>
    </div>
  )
}

export default SectionHeader