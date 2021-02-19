var documenterSearchIndex = {"docs":
[{"location":"mincut/#Min-cut","page":"Min-cut","title":"Min-cut","text":"","category":"section"},{"location":"mincut/","page":"Min-cut","title":"Min-cut","text":"Modules = [LightGraphsFlows]\nPages = [\"mincut.jl\"]\nOrder = [:function, :type]","category":"page"},{"location":"mincut/#LightGraphsFlows.mincut-Tuple{SimpleDiGraph,Integer,Integer,AbstractArray{T,2} where T,LightGraphsFlows.AbstractFlowAlgorithm}","page":"Min-cut","title":"LightGraphsFlows.mincut","text":"mincut(flow_graph::lg.IsDirected, source::Integer, target::Integer, capacity_matrix::AbstractMatrix, algorithm::AbstractFlowAlgorithm)\n\nCompute the min-cut between source and target for the given graph. First computes the maxflow using algorithm and then builds the partition of the residual graph Returns a triplet (part1, part2, flow) with the partition containing the source, the partition containing the target (the rest) and the min-cut(max-flow) value\n\n\n\n\n\n","category":"method"},{"location":"maxflow/#Max-flow-algorithms","page":"Maxflow algorithms","title":"Max flow algorithms","text":"","category":"section"},{"location":"maxflow/","page":"Maxflow algorithms","title":"Maxflow algorithms","text":"Modules = [LightGraphsFlows]\nPages = [\"maxflow.jl\", \"boykov_kolmogorov.jl\", \"push_relabel.jl\", \"dinic.jl\", \"edmonds_karp.jl\"]\nOrder = [:function, :type]","category":"page"},{"location":"maxflow/#LightGraphsFlows.boykov_kolmogorov_impl","page":"Maxflow algorithms","title":"LightGraphsFlows.boykov_kolmogorov_impl","text":"boykov_kolmogorov_impl(residual_graph, source, target, capacity_matrix)\n\nCompute the max-flow/min-cut between source and target for residual_graph using the Boykov-Kolmogorov algorithm.\n\nReturn the maximum flow in the network, the flow matrix and the partition {S,T} in the form of a vector of 0's, 1's and 2's.\n\nReferences\n\nBOYKOV, Y.; KOLMOGOROV, V., 2004. An Experimental Comparison of\n\nMin-Cut/Max-Flow Algorithms for Energy Minimization in Vision.\n\nAuthor\n\nJúlio Hoffimann Mendes (juliohm@stanford.edu)\n\n\n\n\n\n","category":"function"},{"location":"maxflow/#LightGraphsFlows.discharge!","page":"Maxflow algorithms","title":"LightGraphsFlows.discharge!","text":"discharge!(residual_graph, v, capacity_matrix, flow_matrix, excess, height, active, count, Q)\n\nDrain the excess flow out of node v. Run the gap heuristic or relabel the vertex if the excess remains non-zero.\n\n\n\n\n\n","category":"function"},{"location":"maxflow/#LightGraphsFlows.enqueue_vertex!-Tuple{AbstractArray{T,1} where T,Integer,AbstractArray{Bool,1},AbstractArray{T,1} where T}","page":"Maxflow algorithms","title":"LightGraphsFlows.enqueue_vertex!","text":"enqueue_vertex!(Q, v, active, excess)\n\nPush inactive node v into queue Q and activates it. Requires preallocated active and excess vectors.\n\n\n\n\n\n","category":"method"},{"location":"maxflow/#LightGraphsFlows.gap!","page":"Maxflow algorithms","title":"LightGraphsFlows.gap!","text":"gap!(residual_graph, h, excess, height, active, count, Q)\n\nImplement the push-relabel gap heuristic. Relabel all vertices above a cutoff height. Reduce the number of relabels required.\n\nRequires arguments:\n\nresidual_graph::DiGraph                # the input graph\nh::Int                                 # cutoff height\nexcess::AbstractVector\nheight::AbstractVector{Int}\nactive::AbstractVector{Bool}\ncount::AbstractVector{Int}\nQ::AbstractVector\n\n\n\n\n\n","category":"function"},{"location":"maxflow/#LightGraphsFlows.push_flow!","page":"Maxflow algorithms","title":"LightGraphsFlows.push_flow!","text":"push_flow!(residual_graph, u, v, capacity_matrix, flow_matrix, excess, height, active, Q)\n\nUsing residual_graph with capacities in capacity_matrix, push as much flow as possible through the given edge(u, v). Requires preallocated flow_matrix matrix, and excess, height,active, andQ` vectors.\n\n\n\n\n\n","category":"function"},{"location":"maxflow/#LightGraphsFlows.relabel!","page":"Maxflow algorithms","title":"LightGraphsFlows.relabel!","text":"relabel!(residual_graph, v, capacity_matrix, flow_matrix, excess, height, active, count, Q)\n\nRelabel a node v with respect to its neighbors to produce an admissable edge.\n\n\n\n\n\n","category":"function"},{"location":"maxflow/#LightGraphsFlows.blocking_flow!","page":"Maxflow algorithms","title":"LightGraphsFlows.blocking_flow!","text":"blocking_flow!(residual_graph, source, target, capacity_matrix, flow-matrix, P)\n\nLike blocking_flow, but requires a preallocated parent vector P.\n\n\n\n\n\n","category":"function"},{"location":"maxflow/#LightGraphsFlows.blocking_flow-Tuple{AbstractGraph,Integer,Integer,AbstractArray{T,2} where T,AbstractArray{T,2} where T}","page":"Maxflow algorithms","title":"LightGraphsFlows.blocking_flow","text":"blocking_flow(residual_graph, source, target, capacity_matrix, flow-matrix)\n\nUse BFS to identify a blocking flow in the residual_graph with current flow matrix flow_matrixand then backtrack from target to source, augmenting flow along all possible paths.\n\n\n\n\n\n","category":"method"},{"location":"maxflow/#LightGraphsFlows.dinic_impl","page":"Maxflow algorithms","title":"LightGraphsFlows.dinic_impl","text":"function dinic_impl(residual_graph, source, target, capacity_matrix)\n\nCompute the maximum flow between the source and target for residual_graph with edge flow capacities in capacity_matrix using Dinic's Algorithm. Return the value of the maximum flow as well as the final flow matrix.\n\n\n\n\n\n","category":"function"},{"location":"maxflow/#LightGraphsFlows.augment_path!-Union{Tuple{T}, Tuple{Array{Int64,1},AbstractArray{T,2},AbstractArray{T,2} where T}} where T","page":"Maxflow algorithms","title":"LightGraphsFlows.augment_path!","text":"augment_path!(path, flow_matrix, capacity_matrix)\n\nCalculate the amount by which flow can be augmented in the given path. Augment the flow and returns the augment value.\n\n\n\n\n\n","category":"method"},{"location":"maxflow/#LightGraphsFlows.edmonds_karp_impl","page":"Maxflow algorithms","title":"LightGraphsFlows.edmonds_karp_impl","text":"edmonds_karp_impl(residual_graph, source, target, capacity_matrix)\n\nCompute the maximum flow in flow graph residual_graph between source and target and capacities defined in capacity_matrix using the Edmonds-Karp algorithm. Return the value of the maximum flow as well as the final flow matrix.\n\n\n\n\n\n","category":"function"},{"location":"maxflow/#LightGraphsFlows.fetch_path","page":"Maxflow algorithms","title":"LightGraphsFlows.fetch_path","text":"fetch_path(residual_graph, source, target, flow_matrix, capacity_matrix)\n\nUse bidirectional BFS to look for augmentable paths from source to target in residual_graph. Return the vertex where the two BFS searches intersect, the parent table of the path, the successor table of the path found, and a flag indicating success (0 => success; 1 => no path to target, 2 => no path to source).\n\n\n\n\n\n","category":"function"},{"location":"maxflow/#LightGraphsFlows.fetch_path!","page":"Maxflow algorithms","title":"LightGraphsFlows.fetch_path!","text":"fetch_path!(residual_graph, source, target, flow_matrix, capacity_matrix, P, S)\n\nLike fetch_path, but requires preallocated parent vector P and successor vector S.\n\n\n\n\n\n","category":"function"},{"location":"mincost/#Min-cost-flow","page":"Min-cost flows","title":"Min-cost flow","text":"","category":"section"},{"location":"mincost/","page":"Min-cost flows","title":"Min-cost flows","text":"Modules = [LightGraphsFlows]\nPages = [\"mincost.jl\"]\nOrder = [:function, :type]","category":"page"},{"location":"mincost/#LightGraphsFlows.mincost_flow","page":"Min-cost flows","title":"LightGraphsFlows.mincost_flow","text":"function mincost_flow(g::AbstractGraph,\n\t\tnode_demand::AbstractVector,\n\t\tedge_capacity::AbstractMatrix,\n\t\tedge_cost::AbstractMatrix,\n\t\toptimizer;\n\t\tedge_demand::Union{Nothing,AbstractMatrix} = nothing,\n\t\tsource_nodes = (),\n\t\tsink_nodes = ()\n\t\t)\n\nFind a flow over a directed graph g satisfying the node_demand at each node and edge_capacity constraints for each edge while minimizing dot(edge_cost, flow).\n\nReturns a sparse flow matrix, flow[i,j] corresponds to the flow on the (i,j) arc.\n\nArguments\n\ng is a directed LightGraphs.AbstractGraph.\n\n-node_demand is a vector of nodal demand values, which should be negative for sources, positive for sink nodes, and zero for all other nodes.\n\nedge_capacity::AbstractMatrix sets an upper bound on the flow of each arc.\nedge_cost::AbstractMatrix the cost per unit of flow on each arc.\noptimizer is an optimizer constructor, like Clp.Optimizer or () -> Clp.Optimizer() passed at the construction of the JuMP.Model.\n\nKeyword arguments\n\nedge_demand::Union{Nothing,AbstractMatrix}: require a minimum flow for edges, or nothing.\nsource_nodes Collection of sources at which the nodal netflow is allowed to be greater than nodal demand, defaults to an empty tuple.\nsink_nodes Collection of sinks at which the nodal netflow is allowed to be less than nodal demand, defaults to an empty tuple.\n\nsource_nodes & sink_nodes are only needed when nodal flow are not explictly set in node_demand\n\nUsage Example:\n\njulia> import LightGraphs\njulia> const LG = LightGraphs\njulia> using LightGraphsFlows: mincost_flow\njulia> import Clp # use your favorite LP solver here\njulia> using SparseArrays: spzeros\njulia> g = LG.DiGraph(6) # Create a flow-graph\njulia> LG.add_edge!(g, 5, 1)\njulia> LG.add_edge!(g, 5, 2)\njulia> LG.add_edge!(g, 3, 6)\njulia> LG.add_edge!(g, 4, 6)\njulia> LG.add_edge!(g, 1, 3)\njulia> LG.add_edge!(g, 1, 4)\njulia> LG.add_edge!(g, 2, 3)\njulia> LG.add_edge!(g, 2, 4)\njulia> cost = zeros(6,6)\njulia> cost[1,3] = 10\njulia> cost[1,4] = 5\njulia> cost[2,3] = 2\njulia> cost[2,4] = 2\njulia> demand = spzeros(6)\njulia> demand[5] = -2\njulia> demand[6] = 2\njulia> capacity = ones(6,6)\njulia> flow = mincost_flow(g, demand, capacity, cost, Clp.Optimizer)\n\n\n\n\n\n","category":"function"},{"location":"multiroute/#Multi-route-flow","page":"Multiroute flows","title":"Multi-route flow","text":"","category":"section"},{"location":"multiroute/","page":"Multiroute flows","title":"Multiroute flows","text":"Modules = [LightGraphsFlows]\nPages = [\"multiroute_flow.jl\", \"ext_multiroute_flow.jl\", \"kishimoto.jl\"]\nOrder = [:function, :type]","category":"page"},{"location":"multiroute/#LightGraphsFlows.approximately_equal-Union{Tuple{T}, Tuple{Tuple{T,T},Tuple{T,T}}} where T<:AbstractFloat","page":"Multiroute flows","title":"LightGraphsFlows.approximately_equal","text":"approximately_equal(a, b)\n\nReturn true if each element in the tuple is approximately equal to its counterpart.\n\nImplementation Notes:\n\nThis is a separate function because we don't want to hijack isapprox for tuples.\n\n\n\n\n\n","category":"method"},{"location":"multiroute/#LightGraphsFlows.breakingPoints","page":"Multiroute flows","title":"LightGraphsFlows.breakingPoints","text":"breakingPoints(flow_graph::::IsDirected, source, target, capacity_matrix)\n\nCalculates the breaking of the restricted max-flow from a set of auxiliary points for flow_graph from source totargetusing capacities incapacity_matrix`.\n\n\n\n\n\n","category":"function"},{"location":"multiroute/#LightGraphsFlows.emrf","page":"Multiroute flows","title":"LightGraphsFlows.emrf","text":"emrf(flow_graph, source, target, capacity_matrix, flow_algorithm, routes=0)\n\nCompute the maximum multiroute flow (for any number of routes) between source and target in flow_graph via flow algorithm flow_algorithm.\n\nIf a number of routes is given, return the value of the multiroute flow as well as the final flow matrix, along with a multiroute cut if the Boykov-Kolmogorov max-flow algorithm is used as a subroutine. Otherwise, return the vector of breaking points of the parametric multiroute flow function.\n\nReferences\n\nExtended Multiroute Flow algorithm\n\n\n\n\n\n","category":"function"},{"location":"multiroute/#LightGraphsFlows.intersection-Union{Tuple{T}, Tuple{I}, Tuple{R}, Tuple{Array{Tuple{T,T,I},1},R}} where T<:AbstractFloat where I<:Integer where R<:Real","page":"Multiroute flows","title":"LightGraphsFlows.intersection","text":"intersection(points, k)\n\nReturn the intersection of a set of line segments and a line of slope k passing by the origin. Segments are defined as a triple (x, y, slope).\n\n\n\n\n\n","category":"method"},{"location":"multiroute/#LightGraphsFlows.intersection-Union{Tuple{T}, Tuple{R}, Tuple{T,T,Integer,T,T,R}} where T<:AbstractFloat where R<:Real","page":"Multiroute flows","title":"LightGraphsFlows.intersection","text":"    intersection(x1, y1, a1, x2, y2, a2)\n\nReturn the intersection of two lines defined by x and y with slopes a.\n\nA set of segments and a linear function of slope k passing by the origin.\n\nRequires argument:\n\nx1, y1, a1, x2, y2, a2::T<:AbstractFloat # Coordinates/slopes\npoints::Vector{Tuple{T, T, Int}}         # vector of points with T<:AbstractFloat\n\nk::R<:Real                             # number of routes (slope of the line)\n\n\n\n\n\n","category":"method"},{"location":"multiroute/#LightGraphsFlows.minmaxCapacity-Union{Tuple{AbstractArray{T,2}}, Tuple{T}} where T","page":"Multiroute flows","title":"LightGraphsFlows.minmaxCapacity","text":"minmaxCapacity(capacity_matrix)\n\nReturn the nonzero min and max function of capacity_matrix.\n\nNote: this is more efficient than maximum() / minimum() / extrema() since we have to ignore zero values.\n\n\n\n\n\n","category":"method"},{"location":"multiroute/#LightGraphsFlows.multiroute_flow-Union{Tuple{T}, Tuple{R}, Tuple{AbstractGraph,Integer,Integer}, Tuple{AbstractGraph,Integer,Integer,AbstractArray{T,2}}} where T where R<:Real","page":"Multiroute flows","title":"LightGraphsFlows.multiroute_flow","text":"multiroute_flow(flow_graph, source, target[, DefaultCapacity][, flow_algorithm][, mrf_algorithm][, routes])\n\nThe generic multiroute_flow function.\n\nThe output will vary depending on the input:\n\nWhen the number of routes is 0, return the set of breaking points of\n\nthe multiroute flow.\n\nWhen the number of routes is 1, return a flow with a set of 1-disjoint paths\n\n(this is the classical max-flow implementation).\n\nWhen the input is limited to a set of breaking points and a route value k,\n\nreturn only the k-route flow.\n\nOtherwise, a tuple with 1) the maximum flow and 2) the flow matrix. When the\n\nmax-flow subroutine is the Boykov-Kolmogorov algorithm, the associated mincut is returned as a third output.\n\nWhen the input is a network, it requires the following arguments:\n\nflow_graph: the input graph\nsource: the source vertex\ntarget: the target vertex\ncapacity_matrix: matrix of edge flow capacities\nflow_algorithm: keyword argument for flow algorithm\nmrf_algorithm: keyword argument for multiroute flow algorithm\nroutes: keyword argument for the number of routes\n\nWhen the input is only the set of (breaking) points and the number of route, it requires the following arguments:\n\nbreakingpoints: vector of breaking points\nroutes: number of routes\n\nWhen the input is the set of (breaking) points, the number of routes, and the network descriptors, it requires the following arguments:\n\nbreakingpoints: vector of breaking points\nroutes: number of routes\nflow_graph: the input graph\nsource: the source vertex\ntarget: the target vertex\ncapacity_matrix: matrix of edge flow capacities\nflow_algorithm: keyword argument for flow algorithm\n\nThe function defaults to the Push-relabel (classical flow) and Kishimoto (multiroute) algorithms. Alternatively, the algorithms to be used can also be specified through  keyword arguments. A default capacity of 1 is assumed for each link if no capacity matrix is provided.\n\nThe mrf_algorithm keyword is inforced to Extended Multiroute Flow in the following cases:\n\nThe number of routes is non-integer\nThe number of routes is 0 or non-specified\n\nUsage Example :\n\n(please consult the  maximum_flow section for options about flowalgorithm and capacitymatrix)\n\njulia> flow_graph = lg.DiGraph(8) # Create a flow graph\n\njulia> flow_edges = [\n(1, 2, 10), (1, 3, 5),  (1, 4, 15), (2, 3, 4),  (2, 5, 9),\n(2, 6, 15), (3, 4, 4),  (3, 6, 8),  (4, 7, 16), (5, 6, 15),\n(5, 8, 10), (6, 7, 15), (6, 8, 10), (7, 3, 6),  (7, 8, 10)\n]\n\njulia> capacity_matrix = zeros(Int, 8, 8) # Create a capacity matrix\n\njulia> for e in flow_edges\n    u, v, f = e\n    add_edge!(flow_graph, u, v)\n    capacity_matrix[u, v] = f\nend\n\njulia> f, F = multiroute_flow(flow_graph, 1, 8, capacity_matrix, routes = 2) # Run default multiroute_flow with an integer number of routes = 2\n\njulia> f, F = multiroute_flow(flow_graph, 1, 8, capacity_matrix, routes = 1.5) # Run default multiroute_flow with a noninteger number of routes = 1.5\n\njulia> points = multiroute_flow(flow_graph, 1, 8, capacity_matrix) # Run default multiroute_flow for all the breaking points values\n\njulia> f, F = multiroute_flow(points, 1.5) # Then run multiroute flow algorithm for any positive number of routes\n\njulia> f = multiroute_flow(points, 1.5, valueonly = true)\n\njulia> f, F, labels = multiroute_flow(flow_graph, 1, 8, capacity_matrix, algorithm = BoykovKolmogorovAlgorithm(), routes = 2) # Run multiroute flow algorithm using Boykov-Kolmogorov algorithm as maximum_flow routine\n\n\n\n\n\n\n","category":"method"},{"location":"multiroute/#LightGraphsFlows.slope","page":"Multiroute flows","title":"LightGraphsFlows.slope","text":"slope(flow_graph, capacity_matrix, cut, restriction)\n\nReturn the slope of flow_graph using capacities in capacity_matrix and a cut vector cut. The slope is initialized at 0 and is incremented for each edge whose capacity does not exceed restriction.\n\n\n\n\n\n","category":"function"},{"location":"multiroute/#LightGraphsFlows.AbstractMultirouteFlowAlgorithm","page":"Multiroute flows","title":"LightGraphsFlows.AbstractMultirouteFlowAlgorithm","text":"AbstractMultirouteFlowAlgorithm\n\nAbstract type that allows users to pass in their preferred algorithm.\n\n\n\n\n\n","category":"type"},{"location":"multiroute/#LightGraphsFlows.ExtendedMultirouteFlowAlgorithm","page":"Multiroute flows","title":"LightGraphsFlows.ExtendedMultirouteFlowAlgorithm","text":"ExtendedMultirouteFlowAlgorithm\n\nUsed to specify the Extended Multiroute Flow algorithm.\n\n\n\n\n\n","category":"type"},{"location":"multiroute/#LightGraphsFlows.KishimotoAlgorithm","page":"Multiroute flows","title":"LightGraphsFlows.KishimotoAlgorithm","text":"KishimotoAlgorithm\n\nUsed to specify the Kishimoto algorithm.\n\n\n\n\n\n","category":"type"},{"location":"multiroute/#LightGraphsFlows.kishimoto","page":"Multiroute flows","title":"LightGraphsFlows.kishimoto","text":"kishimoto(flow_graph, source, target, capacity_matrix, flow_algorithm, routes)\n\nCompute the maximum multiroute flow (for an integer number of routes) between source and target in flow_graph with capacities in capacity_matrix using the Kishimoto algorithm. Return the value of the multiroute flow as well as the final flow matrix, along with a multiroute cut if Boykov-Kolmogorov is used as a subroutine.\n\n\n\n\n\n","category":"function"},{"location":"#LightGraphsFlows.jl:-flow-algorithms-for-LightGraphs","page":"Getting started","title":"LightGraphsFlows.jl: flow algorithms for LightGraphs","text":"","category":"section"},{"location":"","page":"Getting started","title":"Getting started","text":"CurrentModule = LightGraphsFlows\nDocTestSetup = quote\n    using LightGraphsFlows\n    import LightGraphs\n    const lg = LightGraphs\nend","category":"page"},{"location":"","page":"Getting started","title":"Getting started","text":"Modules = [LightGraphsFlows]\nPages = [\"LightGraphsFlows.jl\"]\nOrder = [:function, :type]","category":"page"},{"location":"","page":"Getting started","title":"Getting started","text":"This is the documentation page for LightGraphsFlows. In all pages, we assume LightGraphsFlows has been imported into scope and that LightGraphs is  available with the alias lg:","category":"page"},{"location":"","page":"Getting started","title":"Getting started","text":"using LightGraphsFlows\nimport LightGraphs\nconst lg = LightGraphs","category":"page"}]
}