import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-primary group hover:bg-primary/20 hover:scale-110 transition-all duration-300">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100 group-hover:bg-white">
        <img className='h-full w-full' src={data.image}/>
        </div>
        
        <div className="ml-2 flex align-middle items-center">
          <div className="text-lg font-bold text-primary">{data.name}</div>
          <div className="text-gray-500 hidden">{data.job}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-primary" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-primary" />
    </div>
  );
}

export default memo(CustomNode);