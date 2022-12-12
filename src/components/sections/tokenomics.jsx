import { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    data: { label: "User" },
    position: { x: 512, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "DEX" },
    position: { x: 150, y: 100 },
  },
  {
    id: "3",
    data: { label: "Staking" },
    position: { x: 250, y: 200 },
  },
  {
    id: "4",
    data: { label: "Liquidity" },
    position: { x: 50, y: 200 },
  },
  {
    id: "5",
    data: { label: "Farming" },
    position: { x: 10, y: 300 },
  },

  {
    id: "6",
    data: { label: "NFT Marketplace" },
    position: { x: 800, y: 100 },
  },

  {
    id: "7",
    data: { label: "Buy NFT" },
    position: { x: 700, y: 300 },
  },

  {
    id: "8",
    data: { label: "Stake NFT" },
    position: { x: 900, y: 300 },
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

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        zoomOnScroll={false}
        preventScrolling={false}
        onEdgesChange={onEdgesChange}
      ></ReactFlow>
    </div>
  );
}

export default Flow;
