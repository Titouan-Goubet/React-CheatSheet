import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReactHookFormSnippets } from '@/snippets/ReactHookForm';

export default function Page() {
  
  return (
    <>
      <p className="text-md mb-4 mx-4 text-left"> 
        Exemple d&apos;utilisation de React Hook Form avec une validation via un schéma zod
      </p>
      <SyntaxHighlighter language="javascript" style={dark}>
        {ReactHookFormSnippets}
      </SyntaxHighlighter>
    </>
  );
};