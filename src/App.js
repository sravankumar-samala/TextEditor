import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button, EditorTextArea} from './styles'
import './App.css'

// Replace your code here
const App = () => {
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)

  const onActivateBold = () => setIsBold(prev => !prev)
  const onActivateItalic = () => setIsItalic(prev => !prev)
  const onActivateUnderline = () => setIsUnderline(prev => !prev)

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="editor-banner-container">
          <h1>Text Editor</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </div>
        <div className="editor-container">
          <ul className="editable-options-container">
            <li>
              <Button
                isActive={isBold}
                type="button"
                data-testid="bold"
                aria-label="toggle-bold"
                onClick={onActivateBold}
              >
                <VscBold />
              </Button>
            </li>
            <li>
              <Button
                isActive={isItalic}
                type="button"
                data-testid="italic"
                aria-label="toggle-italic"
                onClick={onActivateItalic}
              >
                <GoItalic />
              </Button>
            </li>
            <li>
              <Button
                isActive={isUnderline}
                type="button"
                data-testid="underline"
                aria-label="toggle-underline"
                onClick={onActivateUnderline}
              >
                <AiOutlineUnderline />
              </Button>
            </li>
          </ul>
          <EditorTextArea
            isBold={isBold}
            isItalic={isItalic}
            isUnderline={isUnderline}
          />
        </div>
      </div>
    </div>
  )
}

export default App
