# Application management in fog environments

Source: R. Mahmud, K. Ramamohanarao, and R. Buyya, “Application Management in Fog Computing Environments: A Taxonomy, Review and Future Directions,” *ACM Computing Surveys*, 53(4), Article 88, 2020. [Local PDF](../papers/AppManFog-ACM.pdf)

## Summary

The survey decomposes fog application management into architecture, placement, and maintenance. Architecture covers functional layout, programming model, service type, interaction, and workload. Placement covers resource estimation, offloading, resource orientation, controller type, mapping, placement strategy, resource type, and objective. Maintenance covers security, monitoring, pricing, and resilience. A multi-level framework connects cyber-physical systems, fog gateways, fog infrastructure, and cloud.

## Extracted future directions

- Jointly tune application accuracy/sensing rate and energy, particularly with renewable-powered fog nodes.
- Predict resource demand, context variation, and node failure using AI.
- Develop fog-specific resource estimation and pricing.
- Provide trusted orchestration across public/private fog resources.
- Dynamically consolidate and scale fog nodes.
- Build application-specific management and reusable task caching.

## Critical points

- Application management is broader than placement; maintenance and lifecycle behavior must be evaluated.
- Optimizing accuracy by reducing sensing or model fidelity is domain-sensitive and can be unsafe in healthcare or critical infrastructure.
- “AI-based” is a technique class, not a contribution; the proposal needs explicit state, actions, constraints, baselines, and failure handling.

## Proposal implication

Model the complete runtime loop: observe, predict, place/scale, monitor, repair, and fall back. Keep application-fidelity control optional and governed by hard domain constraints.
