# Resource management in serverless environments

Source: A. Mampage, S. Karunasekera, and R. Buyya, “A Holistic View on Resource Management in Serverless Computing Environments: Taxonomy and Future Directions,” *ACM Computing Surveys*, manuscript dated November 2021. [Local PDF](../papers/ServerlessComputing-ACMCS.pdf)

## Summary

The survey classifies serverless resource management by system design, deployment environment, workload management, QoS goals, and resource-management techniques. It covers cloud, edge, and fog settings; allocation, scheduling, scaling, and monitoring; heterogeneous workloads; cold starts; workflow dependencies; cost; security; latency; availability; and energy.

## Extracted future directions

- Portable multi-provider and hybrid serverless deployments with less lock-in.
- Specialized hardware and use of otherwise idle resources.
- Complex workflow orchestration and efficient function-to-function communication.
- QoS/pricing models that balance user and provider needs.
- Energy efficiency, especially at the edge.
- Runtime-aware workload profiling and prediction under interference and machine variation.
- Intelligent concurrency, proactive provisioning, and cold-start mitigation.
- Data-local scheduling and intermediary storage/caching across the edge-fog-cloud continuum.

## Critical points

- Serverless hides infrastructure from users but does not remove resource-management trade-offs; it transfers them to the provider.
- Energy per invocation alone can reward slow or unreliable behavior. Use carbon per successful request together with deadline and availability constraints.
- Cold-start avoidance through permanent warm capacity consumes energy; the right objective includes both idle and activation costs.
- The PDF appears to be a manuscript version with placeholder volume/DOI metadata. Verify the final bibliographic record before formal citation.

## Proposal implication

Serverless microservices provide a tractable workload model for the proposed controller: it can choose placement, warm-pool size, concurrency, and scaling while tracking dependencies and tail latency.
