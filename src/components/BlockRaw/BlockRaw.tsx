import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Editor from '@monaco-editor/react';

interface IProps {
  block: any;
}

const BlockRaw: React.FC<IProps> = (props) => {
  const history = useHistory();
  const { block } = props;

  return (
    <div style={{ margin: '0px -25px 0px -25px' }}>
      <Button
        onClick={() => {
          history.push(`/block/${block.hash}`);
        }}
        style={{
          position: 'absolute', right: '10px', top: '75px', zIndex: 1, color: '#000',
        }}
      >
        View Block

      </Button>
      <Editor
        options={{
          minimap: {
            enabled: false,
          },
          wordWrap: 'on',
          lineNumbers: 'off',
          wrappingIndent: 'deepIndent',
          readOnly: true,
          showFoldingControls: 'always',
        }}
        theme="light"
        width="100vw"
        height="93vh"
        language="json"
        value={JSON.stringify(block, null, 4)}
      />
    </div>
  );
};

export default BlockRaw;
