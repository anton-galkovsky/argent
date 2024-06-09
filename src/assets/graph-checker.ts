import { graphData } from './graph-data.js'

function cyclic(g) {
  let path = new Set()
  let visited = new Set()

  function visit(vertex) {
    if (visited.has(vertex)) {
      return
    }
    visited.add(vertex)
    path.add(vertex)
    for (let neighbor of g[vertex] ?? []) {
      if (path.has(neighbor) || visit(neighbor)) {
        console.log('Found cycle:', path)
        process.exit(1)
      }
    }
    path.delete(vertex)
  }

  for (let v in g) {
    visit(v)
  }
}

function not_transitive(g) {
  for (let v in g) {
    let path = new Set()
    let visited = new Set()

    function visit(vertex) {
      if (g[v].includes(vertex) && path.size > 1) {
        path.add(vertex)
        console.log('Transitive edge:', path)
        process.exit(1)
      }
      visited.add(vertex)
      path.add(vertex)
      for (let neighbor of g[vertex] ?? []) {
        if (neighbor in path || visit(neighbor)) {
          return
        }
      }
      path.delete(vertex)
    }

    visit(v)
  }
}

const graph = {}
for (let edge of graphData['edges']) {
  if (edge['dashes']) {
    continue
  }
  graph[edge['from']] = edge['to']
}
cyclic(graph)
not_transitive(graph)
console.log('OK')
