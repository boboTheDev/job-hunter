# Big Data computing and clouds: trends and future directions

Source: M. D. Assunção, R. N. Calheiros, S. Bianchi, M. A. S. Netto, and R. Buyya, “Big Data computing and clouds: Trends and future directions,” *Journal of Parallel and Distributed Computing*, 79-80, 3-15, 2015. [Local PDF](../papers/BDC-Trends-JPDC.pdf)

## Summary

This survey organizes cloud-supported analytics into four areas: data management/architecture, model building and scoring, visualization/user interaction, and business models. It explains how cloud elasticity can make large-scale analytics accessible while identifying challenges in data variety and velocity, storage, integration, processing, model lifecycle, interaction, reproducibility, privacy, cost estimation, and organizational adoption.

## Critical points

- The paper predates today's dominant cloud-native data stacks, so product comparisons are dated. Its workflow-level concerns remain useful.
- Analytics performance is not only a compute-scheduling problem. Data movement, locality, ingestion, integration, caching, and model lifecycle can dominate latency and energy.
- Reproducibility and debugging are first-class system qualities, not documentation afterthoughts.
- Human expertise, privacy, and business constraints limit fully automatic optimization.

## Proposal implication

Treat telemetry as a governed data pipeline with provenance, schemas, and reproducible transformations. Include data-transfer energy and latency in placement decisions, publish experiment manifests, and avoid claiming a controller is sustainable based only on CPU utilization.
