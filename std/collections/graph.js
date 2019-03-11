class Graph {
  // create an empry graph with V vertices
  constructor(v) {
    this.edges = [] // Array(v) ??
    this.list = []
  }

  // create a graph from input stream
  create(s) { }
  
  // add an edge v-w
  addEdge(v, w) { }

  // vertices adjacent to v
  adj(v) { }
  // numner of edges
  edges(){ }

  // number of vertices
  vert(){ }

  toString(){ }
}

const g = new Graph(["1", "2", "2", "3", "3", "4", "2", "4", "1", "5", "2", "5", "4", "5"])
g.create()
console.log(g)
