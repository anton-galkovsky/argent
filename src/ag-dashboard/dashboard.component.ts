import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {Network} from 'vis-network';
import {DataSet} from 'vis-data/peer';
import {renderToString} from 'katex';
import {TeX} from 'mathjax3/mathjax3/input/tex.js';
import {SVG} from 'mathjax3/mathjax3/output/svg.js';
import {liteAdaptor} from 'mathjax3/mathjax3/adaptors/liteAdaptor.js';
import {RegisterHTMLHandler} from 'mathjax3/mathjax3/handlers/html.js';
import {AllPackages} from 'mathjax3/mathjax3/input/tex/AllPackages.js';
import {MathJax} from 'mathjax3/mathjax3/mathjax.js';

import {INode} from '../misc/INode';
import {IEdge} from '../misc/IEdge';
import graphData from '../assets/graph-data.json';
// import {
//   ChosenNodeValues,
//   IdType,
//   NodeChosenLabelFunction,
//   NodeChosenNodeFunction
// } from "vis-network/declarations/network/Network";


const Colors = {
  defaultNode: { border: '#406897', background: '#BACFFF'},
  referencedNode: { border: '#8F00FF', background: '#BACFFF'},
  selectedNode: { border: '#FF0000', background: '#FFFFFF'},
  unselectedNode: { border: '#555555', background: '#888888'},
  // unselectedNode: "rgba(200,200,200,0.5)",
}

@Component({
  selector: 'ag-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('network', {static: false}) networkDivRef!: ElementRef;
  @ViewChild('katex', {static: false}) katexDivRef!: ElementRef;

  public networkInstance: any;
  public allNodes: any;
  public allEdges: any;
  public nodesDataset: any;
  public edgesDataset: any;

  ngAfterViewInit() {
    const networkDiv = this.networkDivRef.nativeElement;
    const katexDiv = this.katexDivRef.nativeElement;

    // katex
    const tex1 = '\\huge \\text{Happy birthday!}';
    const tex2 = '\\large \\text{Congratulations!}';
    const tex3 = '\\text{By the way, } e ^ {i \\pi} + 1 = 0 \\small \\text{\\qquad ©katex}';
    const strKatex1 = renderToString(tex1, {output: 'mathml'}) + '</br>';
    const strKatex2 = renderToString(tex2, {output: 'mathml'}) + '</br>';
    const strKatex3 = renderToString(tex3, {output: 'mathml'}) + '</br>';
    katexDiv.insertAdjacentHTML('beforeend', strKatex1);
    katexDiv.insertAdjacentHTML('beforeend', strKatex2);
    katexDiv.insertAdjacentHTML('beforeend', strKatex3);

    const nodes = [];
    for (const nodeInfo of graphData.nodes) {
      const node: INode = {
        id: nodeInfo.id
      }
      if (nodeInfo.label.includes('\\')) {
        // mathjax
        const strSvg = tex2sgv(nodeInfo.label)
        const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(strSvg);
        node.shape = 'image';
        node.image = url;
      } else {
        node.label = nodeInfo.label;
      }
      node.hiddenLabel = nodeInfo.label;
      nodes.push(node);
    }

    const edges = [];
    for (const edgeInfo of graphData.edges) {
      for (const edgeTo of edgeInfo.to) {
        const edge: IEdge = {
          ...edgeInfo,
          id: edges.length,
          to: edgeTo
        }
        edges.push(edge);
      }
    }

    // const nodeChosen: NodeChosenNodeFunction = (values: ChosenNodeValues, id: IdType, selected: boolean, hovering: boolean) => {
    //   // values.color = "#00FF00"
    //   console.log(values)
    //   // values.property = chosenValue;
    // }

    const options = {
      height: '100%',
      nodes: {
        borderWidth: 1,
        borderWidthSelected: 3,
        chosen: false,
        // chosen: {
        //   node: nodeChosen,
        //   label: false
        // },
        size: 30,
        color: Colors.defaultNode,
        font: {color: 'black'},
        imagePadding: 5,
        brokenImage: '../favicon.ico',
        shape: 'box',
        shapeProperties: {
          useBorderWithImage: true,
          useImageSize: true
        },
      },
      edges: {
        chosen: false,
        color: "#008800",
        arrows: 'to',
        width: 1
      },
      layout: {
        hierarchical: {
          direction: "UD",
          sortMethod: "directed",
          levelSeparation: 120,
          edgeMinimization: true,
          parentCentralization: false,
          shakeTowards: 'leaves'
        },
      },
      physics: {
        enabled: true,
        hierarchicalRepulsion: {
          avoidOverlap: 1,
        },
      },
    };

    const nodesDataset = new DataSet(nodes);
    const edgesDataset = new DataSet(edges);
    const networkData = {nodes: nodesDataset, edges: edgesDataset};
    this.nodesDataset = nodesDataset;
    this.edgesDataset = edgesDataset;

    this.networkInstance = new Network(networkDiv, networkData, options);

    this.allNodes = this.nodesDataset.get({returnType: "Object"});
    this.allEdges = this.edgesDataset.get({returnType: "Object"});

    const onClickWrapper = (params: any) => {
      onClick(params, this)
    }
    this.networkInstance.on("click", onClickWrapper);

    setTimeout(() => this.edgesDataset.update([{id: 'trigger_redrawing'}]), 1000);
  }
}

function onClick(params: any, self: any) {
  for (const nodeId in self.allNodes) {
    self.allNodes[nodeId].color = Colors.defaultNode;
    self.allNodes[nodeId].opacity = 1;
    self.allNodes[nodeId].font = {color: "#000000"};
    self.allNodes[nodeId].borderWidth = 1;
  }
  for (const edgeId in self.allEdges) {
    self.allEdges[edgeId].color = "#008800";
    self.allEdges[edgeId].width = 1;
  }
  if (params.nodes.length > 0) {
    const selectedNodeId = params.nodes[0];

    for (const nodeId in self.allNodes) {
      self.allNodes[nodeId].color = Colors.unselectedNode;
      self.allNodes[nodeId].opacity = 0.5;
      self.allNodes[nodeId].font = {color: "#333333"};
    }

    let frontIds = [selectedNodeId];
    const transitiveEdgeIds = [];
    const transitiveNodeIds = [selectedNodeId]; // TODO: repetitions?
    while (frontIds.length > 0) {
      const nextFrontIds = [];
      for (const frontId of frontIds) {
        const edgeIds = self.networkInstance.getConnectedEdges(frontId);
        for (const edgeId of edgeIds) {
          if (self.allEdges[edgeId].from === frontId) {
            transitiveEdgeIds.push(edgeId);
            const nodeId = self.allEdges[edgeId].to;
            transitiveNodeIds.push(nodeId);
            nextFrontIds.push(nodeId);
          }
        }
      }
      frontIds = nextFrontIds;
    }

    for (const edgeId of transitiveEdgeIds) {
      self.allEdges[edgeId].color = "#116611";
      self.allEdges[edgeId].width = 3;
    }
    for (const nodeId of transitiveNodeIds) {
      self.allNodes[nodeId].color = Colors.defaultNode;
      self.allNodes[nodeId].opacity = 1;
      self.allNodes[nodeId].font = {color: "#000000"};
    }

    self.allNodes[selectedNodeId].borderWidth = 3;
    const node_description_p = document.getElementById('node-description');
    if (!node_description_p) {
      throw 'Cannot find "node-description" element!';
    }
    const label_text = self.allNodes[selectedNodeId].hiddenLabel.replaceAll('\n', ' ');
    if (selectedNodeId in graphData.articles) {
      // @ts-ignore                                            TODO: fix it
      const text_lines = graphData.articles[selectedNodeId];
      node_description_p.innerText = '';
      for (let text_line of text_lines) {
        let tex_occurrence_start = text_line.indexOf('$(');
        let tex_occurrence_end   = text_line.indexOf(')$');
        while (tex_occurrence_start != -1 && tex_occurrence_end != -1) {
          const strKatex = renderToString(text_line.substring(tex_occurrence_start + 2, tex_occurrence_end), {output: 'mathml'});
          text_line = text_line.substring(0, tex_occurrence_start) + strKatex + text_line.substring(tex_occurrence_end + 2);
          tex_occurrence_start = text_line.indexOf('$(');
          tex_occurrence_end   = text_line.indexOf(')$');
          // console.log(tex_occurrence, text_line)
        }
        // console.log(tex_occurrence = text_line.match(TEX_REGEXP))

        node_description_p.innerHTML += text_line + '</br>';
      }
    } else {
      node_description_p.innerText = 'We can also change the description block: ' + label_text;
    }
    const katexDiv = self.katexDivRef.nativeElement;
    const tex = self.allNodes[selectedNodeId].hiddenLabel;
    if (tex.includes('\\')) {
      const strKatex = renderToString(tex, {output: 'mathml'}) + '</br>';
      katexDiv.innerText = '';
      katexDiv.insertAdjacentHTML('beforeend', strKatex);
    } else {
      katexDiv.innerText = label_text;
    }
  } else {
    const node_description_p = document.getElementById('node-description');
    if (node_description_p) {
      node_description_p.innerText = 'Unselected';
    }
    const katexDiv = self.katexDivRef.nativeElement;
    const tex = 'e ^ {i \\pi} + 1 = 0 \\small \\text{\\qquad ©katex}';
    const strKatex = renderToString(tex, {output: 'mathml'}) + '</br>';
    katexDiv.innerText = '';
    katexDiv.insertAdjacentHTML('beforeend', strKatex);
  }

  const updateNodes = [];
  for (const nodeId in self.allNodes) {
    if (self.allNodes.hasOwnProperty(nodeId)) {
      updateNodes.push(self.allNodes[nodeId]);
    }
  }
  self.nodesDataset.update(updateNodes);
  const updateEdges = [];
  for (const edgeId in self.allEdges) {
    if (self.allEdges.hasOwnProperty(edgeId)) {
      updateEdges.push(self.allEdges[edgeId]);
    }
  }
  self.edgesDataset.update(updateEdges);
}

// https://github.com/mathjax/MathJax-demos-node/blob/master/direct/tex2svg
function tex2sgv(texStr: string) {
  const args = {inline: false, fontCache: true};
  const adaptor = liteAdaptor();
  RegisterHTMLHandler(adaptor);
  const tex = new TeX({packages: AllPackages});
  const svg = new SVG({fontCache: (args.fontCache ? 'local' : 'none')});
  const html = MathJax.document('', {InputJax: tex, OutputJax: svg});
  const node = html.convert(texStr, {display: !args.inline});
  return adaptor.innerHTML(node);
}
