# Cloud-centric Internet of Things vision

Source: J. Gubbi, R. Buyya, S. Marusic, and M. Palaniswami, “Internet of Things (IoT): A vision, architectural elements, and future directions,” *Future Generation Computer Systems*, 29, 1645-1660, 2013. [Local PDF](../papers/Internet-of-Things-Vision-Future2013.pdf)

## Summary

The paper presents an influential cloud-centric IoT architecture in which sensing, communication, storage, analytics, visualization, and delivery form an end-to-end service system. It surveys RFID, wireless sensor networks, addressing, storage/analytics, visualization, and application domains (personal/home, enterprise, utilities, and mobile). An Aneka-based private/public cloud model illustrates dynamic resource provisioning for sensor-data analytics.

The future-work section identifies architecture, energy-efficient sensing, security/privacy, QoS, protocols, participatory sensing, data mining, GIS visualization, and cloud scheduling as core issues. Its cloud section highlights multi-objective scheduling and fault tolerance.

## Critical points

- This is a 2013 vision paper. Its forecasts, named technologies, and cloud-centric assumptions are historical context, not a current architecture prescription.
- Later fog/edge work in the source pack responds directly to the latency, bandwidth, privacy, and locality limits of sending IoT data to centralized clouds.
- The enduring insight is the coupled pipeline: sensing choices affect data rate, compute load, energy, network traffic, and QoS.
- IoT is too broad to be the PhD contribution. It should supply a realistic workload and application context for a distributed-systems contribution.

## Proposal implication

Use an IoT microservice workflow (for example, smart agriculture or healthcare without human-subject data) as the demonstrator. Model sensing rate or inference fidelity as an optional control only after the core placement/scaling system works.
