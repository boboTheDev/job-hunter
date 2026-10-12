# Cross-source critical synthesis

## The progression across the source set

The papers form a clear research trajectory:

1. The 2013 IoT vision joins sensors, networks, cloud analytics, and applications but exposes latency, scale, security, and energy problems.
2. The 2015-2016 Big Data papers show that data movement, lifecycle, processing, reproducibility, and governance are part of the system problem.
3. The 2016 fog article moves compute toward data and makes placement, network use, energy, and reliability coupled decisions.
4. The 2020 fog-management taxonomy expands placement into architecture and runtime maintenance.
5. The 2020 AI-centric paper replaces static control with predictive/adaptive management while identifying data, safety, explainability, and overhead obstacles.
6. The 2021 serverless review adds cold starts, opaque infrastructure, workflow dependencies, concurrency, and provider/user trade-offs.
7. The 2023 microservice review adds service graphs, contention, cascading failure, orchestration, observability, and placement churn.
8. The 2024 sustainability vision calls for integrated management of compute, network, cooling, thermal state, renewable energy, and QoS.
9. The lab's 2025 ReinFog work supplies a modular DRL framework for edge/fog/cloud resource management, meaning a new proposal must go beyond “apply DRL to placement.”

## Defensible unresolved gap

The strongest combined gap is not the absence of optimization. It is the absence of a trustworthy, end-to-end controller that jointly handles:

- serverless microservice dependencies, cold starts, contention, scaling, migration, and placement;
- dynamic workload, network, renewable/carbon-intensity, and thermal conditions;
- hard SLA, capacity, temperature, locality/privacy, and availability constraints;
- total control cost, including network transfer, migration, warm idling, and ML training/inference;
- evaluation that connects scalable simulation with a measured containerized testbed.

Most source papers either provide visions/taxonomies, optimize a subset of objectives, use average metrics, or rely on one evaluation mode. The resulting research opportunity is **safe, sustainability-aware orchestration with explicit system boundaries and reproducible sim-to-real validation**.

## Why the recommended scope is credible

The proposal narrows “all cloud resources” to serverless microservice applications spanning edge and cloud. This scope still connects nearly every source theme while remaining executable in three years. It matches the applicant's Node.js/Python, AWS, Docker, CI/CD, API, database, TensorFlow, networking, and production-operations experience. It also offers both theory (constrained multi-objective decision-making under uncertainty) and practice (an open-source controller, telemetry schema, benchmark, and testbed), matching CLOUDS Lab's stated philosophy.

## Novelty guardrails

Do not claim:

- the first use of RL for edge-cloud scheduling;
- the first carbon-aware microservice placement method;
- that AI always outperforms heuristics or optimization;
- that simulation savings equal real data-centre savings;
- comprehensive sustainability if only operational electricity is measured.

Instead, claim a proposed combination and evaluation protocol, subject to confirmation by a systematic review: constrained safety, integrated carbon/thermal/serverless state, end-to-end overhead accounting, calibrated simulation, and reproducible testbed validation.

## Alternative topics considered

| Topic | Fit | Main weakness | Decision |
|---|---|---|---|
| Pure quantum-cloud scheduling | Active lab direction | Applicant evidence and near-term feasibility are weaker | Future extension only |
| Generic DRL edge-cloud scheduler | Strong lab fit | Already crowded and overlaps ReinFog | Reject as insufficiently novel |
| Data-centre cooling-only control | Strong sustainability link | Requires facility telemetry/control and underuses software background | Secondary thermal model, not core |
| Secure fog identity | Links prior authentication research | Weaker connection to the lab's newest sustainability vision | Optional placement constraint |
| Safe sustainable serverless-microservice orchestration | Strong fit and applicant readiness | Must control scope and validate novelty carefully | Recommended |

## Research-plan design rules derived from the sources

- Treat QoS and safety as constraints before optimizing carbon or cost.
- Compare learning with optimization, MPC, and simple heuristics.
- Count the energy/carbon of the controller itself.
- Use p95/p99 latency, deadline misses, availability, and recovery—not averages alone.
- Penalize migration and replica churn.
- Separate operational carbon, energy, water, and embodied impacts; do not merge them into an undefined “green” score.
- Calibrate a simulator/digital twin with measured testbed data and report the remaining reality gap.
- Publish schemas, traces where permitted, seeds, configurations, and negative results.
