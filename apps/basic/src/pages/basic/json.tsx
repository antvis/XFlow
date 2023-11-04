import { useEffect, useRef } from 'react';
import { useGraphStore } from '@antv/xflow';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/github.css';
import styles from './index.less';

hljs.registerLanguage('json', json);

const JSONCode = () => {
  const ref = useRef<HTMLElement>(null);
  const nodes = useGraphStore((state) => state.nodes);
  const edges = useGraphStore((state) => state.edges);

  const parse = () => {
    if (ref.current) {
      ref.current.innerText = JSON.stringify({ nodes, edges }, null, 2);
      hljs.highlightBlock(ref.current);
    }
  };

  useEffect(() => {
    parse();
  }, [nodes, edges]);

  return (
    <div className={styles['json-code']}>
      <pre>
        <code className="language-json" ref={ref} />
      </pre>
    </div>
  );
};

export { JSONCode };
