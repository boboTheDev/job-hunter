# AI-centric management of distributed computing resources

Source: S. Ilager, R. Muralidhar, and R. Buyya, “Artificial Intelligence (AI)-Centric Management of Resources in Modern Distributed Computing Systems,” IEEE Cloud Summit, 2020. DOI: 10.1109/IEEECloudSummit48914.2020.00007. [Local PDF](../papers/AI4CloudsManagement2020.pdf)

## Summary

The paper motivates a shift from static, reactive thresholds and handcrafted heuristics to adaptive, predictive resource management. It maps AI methods to provisioning, scheduling, power and thermal management, anomaly/security detection, cloud economics, synthetic-data generation, and future system architecture. A conceptual AI-centric RMS separates data collection/preparation, model training, inference, decision execution, and feedback.

## Extracted challenges

- Infrastructure, middleware, application, network, energy, and thermal data have incompatible formats, granularity, and semantics.
- Public data combining workload and physical energy/thermal state is scarce.
- Training and inference placement compete with user workloads, especially at the edge.
- Stochastic and black-box decisions conflict with predictable SLAs and the need for explanation.
- RL suffers cold starts, unsafe exploration, limited samples, multi-objective/risk-sensitive rewards, and real-time inference constraints.
- AI accuracy must be balanced against its resource, latency, and energy overhead.

## Critical points

- AI is not automatically superior to optimization or heuristics. Evaluation must include strong non-learning baselines and account for training cost.
- “Adaptive” should be measured under distribution shift, failure, and workload bursts, not only stationary average loads.
- Synthetic data can expand coverage but cannot replace validation against real traces or a physical testbed.
- Explainability alone does not enforce safety; explicit constraints or action shields are needed.

## Proposal implication

The proposed controller should combine forecasting with constrained/safe RL, use a structured telemetry schema, quantify decision overhead, and fall back to a safe heuristic when confidence or state validity is inadequate.
