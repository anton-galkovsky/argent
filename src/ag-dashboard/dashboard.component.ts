import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {Network} from 'vis-network';
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

@Component({
  selector: 'ag-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('network', {static: false}) networkDivRef!: ElementRef;
  @ViewChild('katex', {static: false}) katexDivRef!: ElementRef;

  private networkInstance: any;

  ngAfterViewInit() {
    const networkDiv = this.networkDivRef.nativeElement;
    const katexDiv = this.katexDivRef.nativeElement;

    // katex
    const tex1 = '\\huge\\huge\\large \\text{Happy birthday!}';
    const tex2 = '\\huge\\huge \\text{Congratulations!}';
    const tex3 = '\\huge \\text{By the way, } e ^ {i \\pi} + 1 = 0 \\small \\text{\\qquad ©katex}';
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
      if (nodeInfo.tex) {
        // mathjax
        const strSvg = tex2sgv(nodeInfo.label)
        const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(strSvg);
        node.shape = 'image';
        node.image = url;
      } else {
        node.label = nodeInfo.label;
      }
      nodes.push(node);
    }

    const edges = [];
    for (const edgeInfo of graphData.edges) {
      for (const edgeTo of edgeInfo.to) {
        const edge: IEdge = {
          ...edgeInfo,
          to: edgeTo
        }
        edges.push(edge);
      }
    }

    const options = {
      height: '100%',
      nodes: {
        borderWidth: 1,
        size: 30,
        color: {
          border: '#406897',
          background: '#BACFFF',
        },
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
        smooth: true,
        color: 'green',
        arrows: 'to'
      },
      // layout: {
      //   hierarchical: {
      //     direction: "DU",
      //     sortMethod: "directed"
      //   },
      // },
    };

    const networkData = {nodes, edges};

    this.networkInstance = new Network(networkDiv, networkData, options);
  }
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
