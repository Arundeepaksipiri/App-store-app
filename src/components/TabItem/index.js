// Write your code here
import './index.css'
const TabItem = props => {
  const {Tab, tabSelect, isActivated} = props
  const {tabId, displayText} = Tab
  const onSelect = () => {
    tabSelect(tabId)
  }
  const underlineClassname=isActivated?"tab-underline":""
  return (
    <li>
      <button className={`button-tab ${underlineClassname}`} onClick={onSelect}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
