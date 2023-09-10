import { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  prism,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegClipboard, FaRegCopy } from 'react-icons/fa';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import sass from 'react-syntax-highlighter/dist/cjs/languages/prism/sass';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('sass', sass);

const codeHighlightCache = new Map();

interface CodeProps {
  language: string | undefined;
  isDark?: boolean;
  children: string;
}

const retrieveCodeFromHighlightCache = (language: string | undefined, isDark?: boolean, content?: any) => {
  const cachedItem = codeHighlightCache.get(content + (isDark ? 'dark' : 'light'));
  
  if (cachedItem === undefined) {
    const highlighterProps = {
      language,
      children: content,
      style: isDark ? atomDark : prism,
    };

    const cachedVar = <SyntaxHighlighter {...highlighterProps} />;
    codeHighlightCache.set(content + (isDark ? 'dark' : 'light'), cachedVar);
    return cachedVar;
  }

  return cachedItem;
};

const Code = ({ children, language, isDark }: CodeProps) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="relative">
      <CopyToClipboard
        onCopy={() => setIsCopied(true)}
        // className="absolute top-5 right-5 p-6 m-0 text-base transition-colors bg-transparent border-none cursor-pointer text-black focus:outline-none focus:text-light-blue hover:text-blue"
        text={children}
      >
        <button type="button" aria-label="Copy to Clipboard Button" className=" absolute right-5">
          {isCopied ? <FaRegClipboard /> : <FaRegCopy />}
        </button>
      </CopyToClipboard>

      {retrieveCodeFromHighlightCache(language, isDark, children)}
    </div>
  );
};

export default Code;
