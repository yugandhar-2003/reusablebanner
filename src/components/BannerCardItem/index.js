// Write your code here.
import './index.css'

const ReusableBanner = props => {
  const {details} = props
  const {headerText, description, className} = details

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          show More
        </button>
      </div>
    </li>
  )
}

export default ReusableBanner
