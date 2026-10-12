# PhD concept note for discussion with Prof. Rajkumar Buyya

## SAGE-Continuum: Safe, carbon- and thermal-aware orchestration of serverless microservices across the edge-cloud continuum

### Background and problem

IoT and interactive applications increasingly use dependent microservices and serverless functions distributed across edge/fog nodes and cloud regions. Edge execution can reduce latency and network traffic, whereas cloud infrastructure offers greater capacity and elasticity. The resulting resource-management problem is dynamic and coupled: placement, scaling, warm capacity, cold starts, service dependencies, network transfer, contention, migration, power, thermal state, renewable availability, and QoS all affect one another.

The CLOUDS Lab's work has progressed from cloud-centric IoT and fog computing to application management, microservice placement, serverless resource management, AI-centric control, ReinFog, and integrated sustainable clouds. Existing methods demonstrate the value of learning-based management, but a production-relevant gap remains. Many methods optimize only a subset of energy, latency, carbon, cost, and thermal state; encode QoS in a soft reward; omit the energy and disruption caused by migration, warm instances, networks, or the controller itself; or validate only in simulation. A policy that performs well on average can therefore violate deadlines or thermal limits under bursts, failures, forecast error, or distribution shift.

### Aim and research questions

This research aims to design, implement, and evaluate a safe learning-centric framework that reduces the operational carbon and total energy of serverless microservice applications across heterogeneous edge-cloud infrastructure while enforcing explicit service and system constraints.

It asks:

1. How can service dependencies, workload demand, cold starts, networks, contention, thermal headroom, carbon intensity, and control overhead be represented in a tractable online model?
2. Can forecast-assisted, safety-constrained hierarchical reinforcement learning improve carbon/energy outcomes over heuristics, optimization, model-predictive control, and unconstrained DRL while satisfying declared SLA and thermal bounds?
3. How should the system detect and handle uncertainty, missing telemetry, failure, distribution shift, and unsafe or low-confidence actions?
4. Which simulated benefits persist in a measured containerized testbed, and how can those measurements quantify and reduce the simulation-to-reality gap?

### Proposed approach

The application will be modeled as a directed graph of containerized functions or microservices. System state will combine demand and queue state; placement, replicas and warm instances; node utilization, power and temperature; network conditions; regional carbon/renewable signals; and forecast uncertainty. The controller will choose placement, replica/warm-pool size, routing, selected migration, and—only for explicitly delay-tolerant work—deferral.

QoS, capacity, temperature, availability, and locality/privacy rules will be hard constraints. Within the feasible region, the controller will balance operational carbon, total energy, cost, tail latency, and churn. Accounting will include execution, modeled cooling overhead, network transfer, migrations, idle warm capacity, and learning/inference overhead where measurable.

The research will proceed through five stages:

- A systematic review and benchmark design covering sustainable cloud control, carbon-aware scheduling, serverless/microservice orchestration, safe RL, and sim-to-real evaluation.
- A Kubernetes/K3s serverless testbed with containerized IoT workflows, structured telemetry, energy/thermal measurement, workload and carbon forecasts, and a calibrated simulator/digital twin.
- Strong baselines including static and reactive placement, standard autoscaling, mathematical optimization for small cases, a metaheuristic, and model-predictive control.
- A hierarchical controller with slower regional placement/warm-capacity decisions and faster local scaling/routing. Constrained learning will be combined with an action-projection shield and conservative heuristic fallback. Compatibility with or extension of ReinFog will be investigated with the lab.
- Evaluation under workload bursts, heterogeneous nodes, network degradation, failures, node churn, carbon-forecast error, and unseen application/topology configurations.

Primary outcomes will be operational energy and grams CO2e per successful request, p95/p99 latency, deadline and safety violations, availability, throughput, cold starts, peak temperature, modeled cooling energy, migration/churn, network traffic, controller energy, inference latency, and fallback frequency. Experiments will use held-out scenarios, multiple seeds, confidence intervals, effect sizes, ablation, and complete configuration/version records.

### Expected contributions

The expected contributions are: (1) a constraint-first model integrating serverless service graphs with carbon, thermal, network, cold-start, migration, and controller costs; (2) a forecast-assisted safe hierarchical orchestration algorithm with explicit fallback; (3) evidence and methods for calibrated simulation-to-testbed evaluation; (4) an open-source framework and observability pipeline compatible with the lab's software ecosystem; and (5) reproducible benchmarks, schemas, and deployment artefacts.

### Feasibility and fit

The minimum thesis scope is deliberately bounded to serverless microservice orchestration, operational carbon, and placement/scaling/warm-capacity control. Cooling-plant actuation, quantum workloads, application-fidelity control, embodied carbon, and full water accounting are outside the core scope.

This topic directly aligns with Prof. Buyya's research on edge/fog/cloud systems, microservices, serverless computing, AI-centric management, and sustainable data centres. My background includes production Node.js/Python services, AWS, Docker, Linux, CI/CD, databases and APIs, TensorFlow, telecommunications/networking, two first-author IEEE conference publications, and award-winning cloud/AI/IoT projects. These skills support rapid implementation, while the PhD would develop deeper expertise in distributed-systems experimentation, safe learning, multi-objective control, and rigorous sustainability measurement.

*This is an initial concept for discussion and is intended to be refined around the lab's current projects, data, infrastructure, and supervisory priorities.*
