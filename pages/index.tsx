import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ForceGraphMethods } from "react-force-graph-3d";
// import {ReactDOMServer} from 'react-dom/server'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const ForceGraph3D = dynamic(() => import("../src/NoSSR"), { ssr: false });

function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i: number) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
      })),
  };
}

const Home: NextPage = () => {
  let data = genRandomTree(500, false);
  const forceG = useRef<ForceGraphMethods>();

  // if (forceG.current) {
  //   let acctFG3D = forceG.current;
  // }
  return (
    <div
      className=""
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ForceGraph3D
        // backgroundColor={"#eaeaea"}
        // height={400}
        // width={500}
        ref={forceG}
        nodeColor={(node) => {
          return node.id && +node.id % 2 === 0 ? "#343454" : "#ff0";
        }}
        nodeRelSize={12}
        nodeLabel={(node) => {
          return `<div style="padding: 0.5em; border-radius: 5px; background-color: green;">${node.id}</div>`;
        }}
        // nodeAutoColorBy={(node) => {
        //   return node.id && +node.id % 2 === 0 ? "#343454" : "#ff0";
        // }}
        nodeOpacity={1}
        linkColor={"#ff0"}
        linkDirectionalParticles={(test) => {
          // console.log(test)
          return 10;
        }}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={(link) => {
          // console.log(link)
          return 0.01;
        }}
        linkDirectionalParticleColor="#f00"
        linkWidth={(link) => {
          // console.log(link)
          return 4;
        }}
        onNodeDrag={(node, { x, y }) => {
          // console.log(node.x);
          // node.x = x
          // node.y = y
        }}
        onNodeDragEnd={(node, { x, y }) => {
          console.log(node.x);
          node.fx = node.x;
          node.fy = node.y;
        }}
        graphData={data}
      />
    </div>
  );
};

export default Home;
