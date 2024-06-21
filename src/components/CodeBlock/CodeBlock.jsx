import React,{useState} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiClipboard } from 'react-icons/fi';
import './CodeBlock.css'
import CustomAlert from '../AlertBox/AlertBox';

const CodeBlock = ({ language, value }) => {
    const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setShowAlert(true);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="code-block">
      {showAlert && <CustomAlert message="Code copied to clipboard!" onClose={handleCloseAlert} />}
      <button className="copy-button" onClick={handleCopy}>
        <FiClipboard size={20} />
      </button>
      <SyntaxHighlighter language={language} style={atomDark}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
