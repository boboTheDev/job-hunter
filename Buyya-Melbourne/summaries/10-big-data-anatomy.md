# The anatomy of Big Data computing

Source: R. Kune, P. K. Konugurthi, A. Agarwal, R. R. Chillarige, and R. Buyya, “The anatomy of big data computing,” *Software: Practice and Experience*, 46, 79-105, 2016. DOI: 10.1002/spe.2374. [Local PDF](../papers/BigDataAnatomy.pdf)

## Summary

The paper contrasts traditional data warehousing with Big Data systems and presents a taxonomy covering data characteristics, analytics, infrastructure, programming models, schedulers, storage, security, and cloud delivery. Its “big data cloud” architecture layers infrastructure, a data platform, and analytics services.

The gap analysis groups research into four “D” areas: depository (storage, lifecycle, indexing, security), devise (platforms and programming models), domain (domain-specific architectures and visualization), and determine (analytics and decisions). It calls for scalable object storage, high-speed transfer, lifecycle policies, new programming models, domain-specific tooling, access control, metadata, and fault tolerance.

## Critical points

- Many named tools and MapReduce-centered gaps reflect the 2015 landscape; they should not be copied as current novelty claims.
- The layered architecture and lifecycle perspective remain directly relevant to observability data and experimental reproducibility.
- A controller trained from high-volume telemetry needs data-quality, retention, privacy, and lineage policies; more data is not automatically better data.

## Proposal implication

The research artefact should define a versioned telemetry schema and dataset card, retain raw-to-feature lineage, and expose repeatable workload/measurement pipelines. This supports both trustworthy learning and reusable research outputs.
