import json
from collections import defaultdict


def cyclic(g):
    path = set()
    visited = set()

    def visit(vertex):
        if vertex in visited:
            return
        visited.add(vertex)
        path.add(vertex)
        for neighbour in g.get(vertex, ()):
            if neighbour in path or visit(neighbour):
                print('Found cycle:', path)
                return
        path.remove(vertex)

    return any(visit(v) for v in g)


def not_transitive(g):
    for v in g:
        path = list()
        visited = set()

        def visit(vertex):
            if vertex in g.get(v, ()) and len(path) > 1:
                path.append(vertex)
                print('Transitive edge:', path)
                return
            visited.add(vertex)
            path.append(vertex)
            for neighbour in g.get(vertex, ()):
                if neighbour in path or visit(neighbour):
                    return
            path.remove(vertex)

        visit(v)


if __name__ == "__main__":
    with open('graph-data.ts') as f:
        graph_json = json.load(f)
        graph = defaultdict(list)
        for edge in graph_json["edges"]:
            if 'dashes' in edge and edge['dashes']:
                continue
            graph[edge["from"]].extend(edge["to"])
        cyclic(graph)
        not_transitive(graph)
