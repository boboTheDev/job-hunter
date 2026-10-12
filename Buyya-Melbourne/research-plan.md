# SAGE-Continuum: Safe, carbon- and thermal-aware orchestration of serverless microservices across the edge-cloud continuum

## 1. Proposed research area

This project will investigate a resource-management system for serverless microservice applications deployed across heterogeneous edge/fog and cloud infrastructure. The system will dynamically decide where services execute, how many replicas or warm instances are retained, when functions scale, and when selected components migrate. It will minimize operational carbon and energy while enforcing latency, availability, capacity, thermal, and data-locality constraints.

The proposal extends the CLOUDS Lab's progression from IoT and fog computing through microservice/serverless placement and AI-centric resource management to integrated sustainable clouds. It is designed as an initial proposal to refine with Prof. Buyya and the supervisory team.

## 2. Motivation and problem statement

IoT and interactive applications increasingly consist of dependent microservices or functions distributed across resource-constrained edge nodes and remote cloud regions. Moving computation toward users can reduce latency and network traffic, but edge nodes may be less efficient, capacity-limited, failure-prone, or powered by a different electricity mix. Cloud regions offer scale but introduce transfer delay and potentially higher network or carbon cost. Serverless platforms add cold starts, opaque resource allocation, fine-grained scaling, and warm-idle energy. Consolidation can reduce server energy yet create contention and thermal hotspots; migration can react to changing conditions but consumes energy and disrupts service.

Existing work has developed heuristics, mathematical optimizers, learning-based schedulers, simulators, and frameworks such as the CLOUDS Lab's recent ReinFog. The remaining challenge is to make adaptive decisions trustworthy and operationally meaningful. Current methods commonly optimize only a subset of energy, latency, cost, thermal state, and carbon; treat QoS as a soft weighted objective; omit controller and migration overhead; or validate only in simulation. This makes it difficult to know whether an apparent average improvement remains safe under bursts, failures, forecast errors, and distribution shift, or transfers to a real containerized system.

## 3. Aim

To design, implement, and evaluate a safe, learning-centric orchestration framework that reduces the operational carbon and total energy of serverless microservice applications across the edge-cloud continuum while satisfying explicit service and system constraints.

## 4. Research questions

**RQ1. System model:** How can microservice dependencies, workload demand, cold starts, network state, resource contention, thermal headroom, electricity carbon intensity, and control overhead be represented in a tractable online orchestration model?

**RQ2. Decision method:** Can forecast-assisted, safety-constrained hierarchical reinforcement learning improve carbon/energy outcomes relative to heuristics, optimization, model-predictive control, and unconstrained DRL while keeping SLA and thermal violations within declared bounds?

**RQ3. Robustness:** How should uncertainty, distribution shift, missing telemetry, failure, and unsafe or low-confidence actions be detected and handled through constraint projection, conservative fallback, or policy adaptation?

**RQ4. External validity:** Which benefits and failure modes observed in simulation persist in a measured containerized edge-cloud testbed, and how can testbed measurements calibrate the simulator and quantify the simulation-to-reality gap?

## 5. Working hypotheses

- **H1:** Dependency-aware and forecast-assisted control will reduce carbon per successful request and total energy relative to reactive threshold policies without increasing deadline-miss rate.
- **H2:** Hard constraint handling and a safe fallback will materially reduce severe SLA/thermal violations compared with reward-only DRL, at a measurable but acceptable optimality cost.
- **H3:** Jointly modeling cold starts, warm-idle capacity, migration, network transfer, and controller energy will change selected policies compared with compute-energy-only models.
- **H4:** Calibration with physical measurements will improve simulator ranking agreement for candidate policies, but some performance gains will shrink in the testbed; reporting that gap is itself a contribution.

These hypotheses are testable, not assumed conclusions.

## 6. Scope and boundaries

The core workload is a directed graph of containerized serverless microservices. The infrastructure will include a manageable number of heterogeneous edge/fog nodes and one to three modeled or emulated cloud regions. The primary environmental boundary is operational electricity and associated location/time-dependent carbon; embodied carbon and full water accounting will be reported as out of scope unless reliable data becomes available. Quantum workloads, market pricing, cooling-plant actuation, and application-fidelity control are future extensions, not core deliverables.

No human-subject data is required. Public or generated infrastructure/workload traces will be used; any operational logs will be de-identified and governed by a documented retention policy.

## 7. System model

At decision interval *t*, the state will combine:

- application graph, request rate, service time, queue depth, deadlines, and priority;
- replica/warm-pool state, cold-start distributions, placement, and recent migrations;
- node capacity/utilization, measured power, temperature or thermal proxy, and failure state;
- network latency, bandwidth, loss, and data-transfer volume;
- regional electricity price, carbon-intensity signal, and renewable forecast where available;
- forecast uncertainty, telemetry freshness, and policy confidence.

Actions will include microservice/function placement, replica and warm-pool sizing, routing, selected migration, and optional deferral for explicitly delay-tolerant work. Hard constraints will cover resource capacity, application locality/privacy labels, maximum safe temperature, and declared availability/deadline rules.

Optimization will be constraint-first rather than an opaque weighted sum. Within the feasible region, the controller will seek a Pareto or lexicographic balance among operational carbon, total energy, cost, tail latency, and churn. The accounting boundary will include IT execution, modeled cooling overhead, network transfer, migrations, idle warm capacity, and controller training/inference wherever measurable.

## 8. Methodology and work packages

### WP1 - Evidence, requirements, and benchmark design (Months 1-6)

Conduct a systematic literature review covering sustainable cloud control, carbon-aware scheduling, serverless/microservice orchestration, safe RL, and sim-to-real evaluation. Define the taxonomy, threat-to-validity checklist, system boundary, and benchmark scenarios. Reuse the UniMelb cloud dataset where suitable and evaluate additional public workload, network, weather/grid, and carbon traces for licensing and coverage. Create versioned telemetry and experiment schemas.

**Output:** review/gap paper, benchmark specification, dataset cards, and preregistered primary metrics.

### WP2 - Measurement, models, and non-learning baselines (Months 4-12)

Build a containerized edge-cloud testbed using Kubernetes/K3s with a serverless layer such as Knative or OpenFaaS, OpenTelemetry/Prometheus-style observability, and node energy/thermal measurement where supported. Implement representative IoT/serverless microservice workflows. Fit workload, latency, cold-start, power, temperature, and carbon/renewable forecasting models with uncertainty estimates.

Implement baselines: round-robin/first-fit, threshold autoscaling, Kubernetes HPA-style control, a small-instance MILP or multi-objective oracle, a metaheuristic, and model-predictive control. Calibrate a scalable simulator/digital twin and document its error against the testbed.

**Output:** measurement paper, calibrated environment, baseline repository, and trace release where licensing permits.

### WP3 - Safe sustainable orchestration algorithms (Months 10-22)

Develop a hierarchical controller: a slower global policy selects regional placement and warm capacity, while faster local policies handle replicas/routing. Compare centralized and distributed variants compatible with ReinFog concepts. Investigate constrained actor-critic or Lagrangian methods combined with an action-projection shield that rejects capacity, locality, SLA-risk, or thermal violations. Add uncertainty-aware forecasts, offline pretraining, and a conservative heuristic fallback.

Ablate dependency awareness, forecasts, thermal/carbon inputs, safety shield, migration penalty, and control overhead. Establish complexity, convergence, and inference-latency characteristics.

**Output:** algorithm paper with formal problem formulation and controlled simulation results.

### WP4 - Framework integration and robust runtime behavior (Months 18-28)

Integrate the controller, telemetry pipeline, policy service, executor, and audit/fallback modules as open-source software. Test failure recovery, missing/stale metrics, node churn, network degradation, flash crowds, carbon-forecast error, and out-of-distribution workloads. Investigate safe online adaptation only after offline policies pass defined safety gates.

**Output:** reusable software framework, reproducible deployment artifacts, and systems paper.

### WP5 - Cross-environment evaluation and synthesis (Months 24-36)

Evaluate policies at simulation scale and on the physical/emulated testbed. Use trace replay and factorial scenarios spanning workload intensity/burstiness, service-graph shape, heterogeneity, network conditions, renewable/carbon variation, failures, and forecast error. Synthesize design guidance, limitations, and the measured simulation-to-reality gap. Complete thesis and artefact documentation.

**Output:** evaluation paper, public artefact package, thesis, and practitioner guidelines.

## 9. Evaluation plan

### Baselines

- Static cloud-only and edge-first placement.
- Round-robin/first-fit and reactive threshold policies.
- Standard autoscaling without carbon/thermal awareness.
- MILP/constraint optimization on small instances to estimate an offline bound.
- Representative metaheuristic and model-predictive controller.
- Unconstrained DRL and single-objective ablations.
- Where technically compatible, ReinFog-based scheduling as a framework-level comparison or implementation base.

### Primary metrics

- Operational energy and grams CO2e per successful request/workflow.
- p50, p95, and p99 end-to-end latency; deadline-miss and SLA-violation rate.
- Availability, throughput, queueing, cold-start frequency, and recovery time.
- Peak temperature/thermal-limit violations and modeled cooling energy.
- Cost, utilization, fairness across application classes, migrations, replica churn, and network bytes.
- Training/inference energy, decision latency, convergence/sample efficiency, and fallback frequency.

### Experimental rigor

Use held-out time periods and application/topology configurations, multiple random seeds, confidence intervals and effect sizes, and paired comparisons where applicable. Report both successful and failed scenarios. Publish configurations, seeds, code versions, trace transformations, and system boundaries. Validate energy/carbon calculations with sensitivity analysis and distinguish measured, modeled, and externally sourced quantities.

Success means a statistically and operationally meaningful reduction in carbon/energy against strong baselines while meeting prespecified service/safety bounds—not simply maximizing a composite reward.

## 10. Expected original contributions

1. A constraint-first model integrating serverless microservice graphs, carbon, thermal state, network/migration cost, cold starts, and controller overhead.
2. A forecast-assisted, safe hierarchical orchestration method with explicit shields and fallback behavior.
3. A calibrated simulator-to-testbed methodology and evidence about when policy rankings transfer.
4. An open-source orchestration and observability framework compatible with the CLOUDS Lab's software tradition and potentially with ReinFog.
5. Reproducible benchmarks, telemetry schemas, datasets or trace recipes, and deployment artefacts.
6. Empirical guidance on sustainability-QoS-safety trade-offs under workload bursts, failures, and forecast error.

## 11. Risks and mitigation

| Risk | Mitigation |
|---|---|
| Scope becomes too broad | Keep serverless microservice orchestration, operational carbon, and three core controls as the minimum thesis; treat cooling actuation and fidelity control as stretch goals. |
| No access to production data centre | Use public traces plus an instrumented testbed; state external-validity limits and seek lab/industry data only as an enhancement. |
| RL is unstable or not superior | Preserve publishable baseline/model contributions; use offline training, constrained optimization, MPC, and hybrid fallback. A negative result against strong baselines is valid evidence. |
| Carbon/thermal signals are incomplete | Use uncertainty intervals, sensitivity analysis, and clearly labeled modeled versus measured inputs. |
| Sim-to-real mismatch | Calibrate iteratively, evaluate rank correlation and error, and avoid translating simulated percentages into facility claims. |
| Safety violations during learning | Train in simulation/offline, gate deployment, project unsafe actions, rate-limit change, and provide automatic rollback/fallback. |
| Benchmark licensing/privacy | Prefer redistributable data; otherwise publish acquisition and transformation scripts plus synthetic substitutes. |

## 12. Provisional 36-month schedule

| Period | Milestones |
|---|---|
| Months 1-3 | Confirm scope; systematic-review protocol; requirements and measurement boundary. |
| Months 4-6 | Review submission; benchmark and telemetry schemas; initial traces. |
| Months 7-12 | Testbed, calibrated simulator, predictors, and strong non-learning baselines; confirmation-ready research report. |
| Months 13-18 | Safe controller v1; simulation experiments and ablation. |
| Months 19-22 | Algorithm submission; distributed/hierarchical variant. |
| Months 23-28 | Framework integration; failure and distribution-shift experiments; artefact release. |
| Months 29-32 | Cross-environment evaluation and systems submission. |
| Months 33-36 | Thesis synthesis, final publications, artefact archival, and examination preparation. |

## 13. Fit with Prof. Buyya's group

The project directly combines the group's published themes: IoT/fog/edge systems, microservices, serverless computing, AI-centric resource management, energy/thermal management, and sustainable new-generation clouds. It also matches the lab's theory-to-software approach through a formal optimization/control problem, deployable middleware, and demonstrator workloads.

The applicant brings complementary execution capability: production backend and full-stack development; AWS, Docker, Linux, Nginx, GitHub Actions, and CI/CD; Python/TensorFlow and document/data tooling; telecommunications/networking education; two first-author IEEE conference papers; and award-winning cloud/AI/IoT projects. The main development needs—advanced distributed-systems experimentation, safe RL, multi-objective optimization, and rigorous energy/carbon measurement—are explicit training goals rather than hidden assumptions.

## 14. Selected foundation references

1. Buyya, Ilager, and Arroba (2024), “Energy-efficiency and sustainability in new generation cloud computing,” DOI 10.1002/spe.3248.
2. Ilager, Muralidhar, and Buyya (2020), “AI-Centric Management of Resources in Modern Distributed Computing Systems,” DOI 10.1109/IEEECloudSummit48914.2020.00007.
3. Pallewatta, Kostakos, and Buyya (2023), “Placement of Microservices-based IoT Applications in Fog Computing,” *ACM Computing Surveys* 55(14s).
4. Mampage, Karunasekera, and Buyya (2021 manuscript), “A Holistic View on Resource Management in Serverless Computing Environments.”
5. Mahmud, Ramamohanarao, and Buyya (2020), “Application Management in Fog Computing Environments,” *ACM Computing Surveys* 53(4).
6. Dastjerdi and Buyya (2016), “Fog Computing: Helping the Internet of Things Realize Its Potential,” *IEEE Computer*.
7. Wang, Goudarzi, and Buyya et al. (2025), “ReinFog,” *Journal of Network and Computer Applications* 242, 104250, DOI 10.1016/j.jnca.2025.104250.
8. Sarkar et al. (2024), “Sustainability of Data Center Digital Twins with Reinforcement Learning,” DOI 10.1609/aaai.v38i21.30580.

Before formal submission, WP1 will replace this selected foundation list with a systematic and up-to-date review; it will also verify final publication metadata for the serverless survey.
