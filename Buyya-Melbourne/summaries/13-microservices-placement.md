# Placement of microservices-based IoT applications in fog computing

Source: S. Pallewatta, V. Kostakos, and R. Buyya, “Placement of Microservices-based IoT Applications in Fog Computing: A Taxonomy and Future Directions,” *ACM Computing Surveys*, 55(14s), Article 321, 2023. [Local PDF](../papers/MicroservicesPlacement-ACMCS.pdf)

## Summary

The survey organizes the problem into microservice architecture, placement policy, service composition, and performance evaluation. It shows that fine-grained, independently deployable services can exploit heterogeneous fog/cloud resources, but dependencies, communication, contention, cascading failures, monitoring, elasticity, and orchestration enlarge the decision space.

## Extracted research gaps

- Online placement with scaling, migration, proactive redundancy, and fog-cloud balancing.
- Distributed placement across federated multi-fog/multi-cloud providers.
- Research-grade orchestration platforms incorporating containers, service mesh, monitoring, and overlay networks.
- Realistic microservice IoT benchmarks and long-running traces.
- Security/privacy-aware placement and data transmission.
- Proactive contention detection and parameter tuning.
- Observability-driven anomaly handling, NFV-aware service chains, cascading-failure resilience, and continuous-deployment availability.

## Critical points

- Many gaps concern practical infrastructure and evaluation, not just a better optimizer.
- Repeated migration can save instantaneous energy while worsening total energy, availability, and tail latency; migration cost and policy stability must be explicit.
- A 2025 CLOUDS Lab paper introduces ReinFog, a modular DRL resource-management framework. A new proposal should extend or interoperate with it, not claim that no such framework exists.

## Proposal implication

Represent the application as a dependency graph and jointly decide placement, replica count, warm capacity, and selected migration. Include contention, communication, cold starts, carbon intensity, thermal headroom, and failure risk, with churn penalties and hard SLA constraints.
