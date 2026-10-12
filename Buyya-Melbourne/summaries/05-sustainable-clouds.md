# Energy-efficiency and sustainability in new-generation clouds

Source: R. Buyya, S. Ilager, and P. Arroba, “Energy-efficiency and sustainability in new generation cloud computing,” *Software: Practice and Experience*, 54(1), 24-38, 2024. DOI: 10.1002/spe.3248. [Local PDF](../papers/NewGen-SustainableClouds-Vision2030.pdf)

## Summary

The paper argues that isolated optimization of servers, networks, cooling, or workloads cannot deliver the needed improvement in data-centre sustainability. It proposes an integrated, learning-centric resource-management system spanning the application stack and physical infrastructure. Its control loop observes workload, server, network, power, thermal, cooling, renewable-energy, price, and QoS state; then performs admission, provisioning, scheduling, power-state control, consolidation, cooling adjustment, and inter-region brokering.

The research dimensions are computing and cooling resources, application/workload model, deployment model, energy source, monitoring, and user QoS. The paper identifies questions around when and where to provision, how to consolidate without harming QoS, how to choose operating frequencies, predict temperatures, prevent hotspots, exploit renewables, and balance geo-distributed data centres.

## Key future directions

- Application-aware provisioning and scheduling rather than one-size-fits-all allocation.
- Integrated state representations and multi-objective rewards for learning-based control.
- Dynamic DVFS and power-state selection for CPUs, GPUs, TPUs, and memory.
- Joint consolidation, thermal management, cooling control, and QoS assurance.
- Common semantics for heterogeneous telemetry.
- Safe, sample-efficient RL using simulation, transfer learning, and multi-agent methods.
- Carbon-aware workload shifting among edge and cloud regions with different renewable availability, prices, latency, and network costs.
- Operational software and application demonstrators, not algorithms alone.

## Critical points

- Several headline energy/carbon projections are forecasts cited from earlier sources, not measurements produced by this study. Do not reuse them as current facts without fresh verification.
- The vision is deliberately broad. A PhD cannot optimize every data-centre component and workload class; scope must be narrower.
- Weighted-sum optimization can hide SLA or safety violations. Hard constraints and tail-risk metrics are more credible for production systems.
- Training and inference energy must be counted; otherwise the learning controller can undermine its own sustainability claim.

## Proposal implication

Use this as the primary problem frame, but narrow the system to serverless microservice placement and scaling across an edge-cloud continuum. Add safe constraints, explicit carbon/thermal accounting, model overhead, and reproducible simulation-to-testbed validation.
