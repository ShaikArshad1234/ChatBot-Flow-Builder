import React from 'react';
import { Handle, Position } from 'reactflow';

const ChatNode = ({ data }) => {
  return (
    <div className="chat-node">
      <div className="chat-node-content">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default ChatNode;
