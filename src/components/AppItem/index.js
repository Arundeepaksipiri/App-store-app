// Write your code here
import './index.css'
const AppItem = props => {
  const {App} = props
  const {appName, imageUrl} = App
  return (
    <li className="list-App">
      <img src={imageUrl} alt={appName} className="image-size" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
