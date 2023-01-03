// Write your code here.
import './index.css'

const SoftwareEngineerCard = props => {
  const {userDetails} = props
  const {title, description, imgUrl, className} = userDetails
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={title} className="image-elem" />
    </li>
  )
}

export default SoftwareEngineerCard
