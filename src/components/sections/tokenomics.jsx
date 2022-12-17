import { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/base.css"; 
import CustomNode from "./CustomNode";
import tractor from "../../assets/icons/Farming.png"
import coin from "../../assets/icons/coin.png"
import marketplace from "../../assets/icons/marketplace.png"
import staking from "../../assets/icons/staking.png"
import user from "../../assets/icons/user.png"

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: "1",
    position: { x: 480, y: 0 },
    type: "custom",
    data: { name: "User", job: "CEO", emoji: "😎", image: user },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "DEX", job: "CEO", emoji: "😎", image: coin },
    position: { x: 300, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "Staking", job: "CEO", emoji: "😎", image: staking },
    position: { x: 375, y: 300 },
  },
  {
    id: "4",
    type: "custom",
    data: { name: "Liquidity", job: "CEO", emoji: "😎", image: tractor },

    position: { x: 175, y: 300 },
  },
  {
    id: "5",
    type: "custom",
    data: { name: "Farming", job: "CEO", emoji: "😎", image: tractor },

    position: { x: 177, y: 400 },
  },

  {
    id: "6",
    type: "custom",
    data: { name: "NFT Marketplace", job: "CEO", emoji: "😎", image: marketplace }, 
    position: { x: 600 , y: 200 },
  },

  {
    id: "7",
    type: "custom",
    data: { name: "Buy NFT", job: "CEO", emoji: "😎", image: marketplace },

    position: { x: 550, y: 400 },
  },

  {
    id: "8",
    type: "custom",
    data: { name: "Stake NFT", job: "CEO", emoji: "😎", image: staking },

    position: { x: 750, y: 400 },
  },
];

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#7b3fe4" },
  },
  {
    id: "4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "#7b3fe4" },
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#7b3fe4" },
  },
  {
    id: "2-4",
    source: "2",
    target: "4",
    animated: true,
    style: { stroke: "#7b3fe4" },
  },
  {
    id: "1-6",
    source: "1",
    target: "6",
    animated: true,
    style: { stroke: "#7b3fe4" },
  },
  {
    id: "6-7",
    source: "6",
    target: "7",
    animated: true,
    style: { stroke: "#7b3fe4" },
  },
  {
    id: "6-8",
    source: "6",
    target: "8",
    animated: true,
    style: { stroke: "#7b3fe4" },
  },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (<div className=" md:h-screen">
  <p className="text-5xl text-primary font-semibold text-center   mt-24  mx-4">
          Tokenomics
        </p>
    <div className="w-full  tokonomics" style={{height:'30rem'}} >
      <ReactFlow
        nodes={nodes}
         
        edges={edges}
        zoomOnScroll={false}
        preventScrolling={false}
        panOnDrag={false}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={ {  padding:  0.3 }    }
      ></ReactFlow>
    </div></div>
  );
}

export default Flow;
