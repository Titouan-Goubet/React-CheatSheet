import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ReactQuerySnippets } from '@/snippets/ReactQuery';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Page() {
  

  return (
    <div>
      <p className="text-md mb-4 mx-4 text-left"> 
          Exemple d&apos;utilisation de React Query dans un projet React
      </p>
      <div className='flex justify-center items-center'>
        <div className='w-[90%]'>
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {ReactQuerySnippets}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};