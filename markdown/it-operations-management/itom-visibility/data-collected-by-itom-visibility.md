---
title: Data collected by ITOM Visibility
description: ITOM Visibility collects unique data for each type of device and stores it in dedicated tables, fields, and relationships.
locale: en-US
release: australia
product: ITOM Visibility
classification: itom-visibility
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 13
breadcrumb: [ITOM Visibility reference, ITOM Visibility, IT Operations Management]
---

# Data collected by ITOM Visibility

ITOM Visibility collects unique data for each type of device and stores it in dedicated tables, fields, and relationships.

## Operating system

<table id="table_hms_x3x_2bb"><tbody><tr><td align="left">

![](../../../reuse/icons/brand-icons/bus-laptop.svg)

</td><td>

[Operating system](c_Computers.md)

 Find servers and computers based on the machine's operating system:

-   [Windows](r_DataCollDiscoWindowsComputers.md)
-   [Solaris](r_DataCollDiscoSolarisComputers.md)
-   [Linux](r_DataCollDiscoLinuxComputers.md)
-   [Mac \(OS/X\) discovery](r_DataCollDiscoMacOSXComputers.md)
-   [HP-UX](r_DataCollDiscoHPUXComputers.md)
-   [AIX](r_DataCollDiscoAIXComputers.md)

</td></tr></tbody>
</table>## Virtualization

<table id="table_nqj_1lj_lnb"><tbody><tr><td>

![](../../../reuse/icons/brand-icons/bus-monitor.svg)

</td><td>

[Virtualization](c-oslv-discovery.md)

 Collect information on deployments that include virtualization:

-   [Hyper-V discovery](r_DiscoveryForHyperV.md#)
-   [IBM Virtualization](../discovery-and-service-mapping-patterns/ibm-hmc-discovery.md)
-   [Red Hat Virtualization](../discovery-and-service-mapping-patterns/red-hat-virtualization-discovery.md)
-   [Nutanix Acropolis](../discovery-and-service-mapping-patterns/nutanix-pattern.md)
-   [VMware vCenter](data-collected-by-itom-visibility.md)
-   [OpenStack Virtualization](../discovery-and-service-mapping-patterns/openstack-discovery.md)

</td></tr></tbody>
</table>## Cloud

<table id="table_zvp_5kj_lnb"><tbody><tr><td>

![](../../../reuse/icons/brand-icons/bus-cloud.svg)

</td><td>

[Cloud](../discovery/cloud-discovery-wizard.md)

 -   [AWS](cloud-disco-aws-data-collected.md)
-   [Microsoft Azure](../discovery/azure-cloud-discovery.md)
-   [Google Cloud Platform \(GCP\)](../discovery/google-gcp-discovery-pattern.md)
-   [IBM cloud](../discovery/ibm-cloud-discovery.md)
-   [VMware cloud](../discovery/vmware-cloud-discovery.md)

</td></tr></tbody>
</table>## Containers

<table id="table_gj4_5kj_lnb"><tbody><tr><td>

![](../../../reuse/icons/brand-icons/bus-case-and-knowledge-management.svg)

</td><td>

Containers

 -   [Kubernetes and OpenShift](../discovery/kubernetes-discovery.md)
-   [Amazon ECS resource discovery with Patterns](../discovery-and-service-mapping-patterns/aws-ecs-fargate-discovery.md)
-   [Pivotal Cloud Foundry discovery](../discovery-and-service-mapping-patterns/pivotal-cloud-foundry.md)

</td></tr></tbody>
</table>## Software

<table id="table_azl_5kj_lnb"><tbody><tr><td>

![](../../../reuse/icons/brand-icons/bus-application-development.svg)

</td><td>

[Software](c_Software.md)

 Find a variety of software, including:

-   [Apigee Edge](../discovery-and-service-mapping-patterns/apigee-edge-discovery.md)
-   [ColdFusion](../discovery-and-service-mapping-patterns/cold-fusion-discovery.md)
-   [HP Operations Manager](r-HPOP.md)
-   [IBM Websphere DataPower](data-coll-datapower.md)
-   [JBOSS on Windows and Linux](c_DataCollDiscoJBossServers.md)
-   Web and email servers, including [Microsoft IIS](r_DataCollDiscoMicrosoftIISServers.md), [Apache](r_DataCollDiscoApacheWebServers.md#), [Tomcat](r_DataCollDiscoTomcatServers.md), [Exchange mailbox](r-ExchangeMailBox.md)
-   [Puppet automation](c_PuppetAutomationSoftwareDiscovery.md) software
-   [Red Hat JBoss Fuse](../discovery-and-service-mapping-patterns/jboss-fuse-discovery.md)
-   [SAP applications](sap-discovery.md#)
-   [WebLogic](c_DataCollDiscoWebLogicServers.md) and [WebSphere](c_DataCollDiscoWebSphereServers.md) servers
-   [General software](r_DataCollDiscoGenSWPkg.md)

</td></tr></tbody>
</table>## Clustered applications

<table id="table_c4b_5kj_lnb"><tbody><tr><td>

![](../../../reuse/icons/brand-icons/bus-service-map.svg)

</td><td>

[Clustered applications](c_ClusteredAppDiscoveryOnWindows.md#)

 -   [IBM PowerHA Cluster \(HACMP\)](../discovery-and-service-mapping-patterns/ibm-powerha-hamcp-discovery.md)
-   [Linux Red Hat cluster](red-hat-cluster-discovery.md)
-   [Veritas Cluster Server discovery](../discovery-and-service-mapping-patterns/veritas-cluster-server-discovery.md)
-   [Windows server cluster](r_WindowsServerClusterDiscovery.md)

</td></tr></tbody>
</table>## Databases

<table id="table_xfr_rkj_lnb"><tbody><tr><td>

![](../../../reuse/icons/brand-icons/bus-database.svg)

</td><td>

[Databases](database-discovery.md)

 Discover databases, including:

-   [Oracle](c_OracleDatabaseDiscovery.md)
-   [MySQL](c_MySQLDiscovery.md)
-   [Microsoft SQL](mssql-data-collected-pattern.md#)
-   [MongoDB](r_DiscoverMongoDBInstances.md)
-   [SAP HANA](sap-discovery.md#)
-   [PostgreSQL](r_DiscoverPostgreSQLInstances.md)
-   [Sybase](r-Sybase.md)
-   [Amazon DynamoDB](../discovery-and-service-mapping-patterns/aws-dynamoDB-discovery.md)
-   [Oracle Database 12c](../discovery-and-service-mapping-patterns/oracle-cdb-pdb-discovery.md)

</td></tr></tbody>
</table>## Network devices

<table id="table_qf5_pkj_lnb"><tbody><tr><td>

![](../../../reuse/icons/brand-icons/bus-router.svg)

</td><td>

[Network devices](c_NetworkDevices.md)

 -   [Routers and switches](r_DataCollDiscoNWRouteAndSwitch.md)
-   [Load balancers:](c_LoadBalancers.md)
    -   [A10](r_DataCollDiscoA10LoadBalancers.md)
    -   [F5 BIG-IP](c_LoadBalancerF5BIGIP.md)
    -   [Cisco GSS](c_LoadBalancerGSS.md)
    -   [Cisco CSS](c_LoadBalancerCSS.md)
    -   [Citrix NetScaler](c_LoadBalancerCitrixNetscaler.md)
    -   [HAProxy](c_LoadBalancerHAProxy.md)
    -   [NGINX](c_LoadBalancerNGINX.md)
    -   [Alteon](alteon-load-balancer-discovery.md)
    -   [ACE](ace-load-balancer-discovery.md)
    -   [Radware-appDirector](radware-appdirector.md)
    -   [AWS application ELB Service discovery with Patterns](../discovery-and-service-mapping-patterns/aws-application-elb-service-discovery.md)
-   Firewalls
    -   [Cisco firewall](../discovery-and-service-mapping-patterns/cisco-fw-discovery.md)
    -   [Fortinet firewall](../discovery-and-service-mapping-patterns/fortinet-fw-discovery.md)
    -   [Juniper firewall](../discovery-and-service-mapping-patterns/juniper-fw-discovery.md)
    -   [Palo Alto firewall](../discovery-and-service-mapping-patterns/palo-alto-fw-discovery.md)
-   [IP networks](r_DataCollDiscoIPNetworks.md) and [specific IP addresses](r_DataCollDiscoIPAddress.md)
-   [Cisco UCS devices](r-CiscoUCSHD.md)
-   [Cisco Switch Wireless Access Point \(WAP\)](../discovery-and-service-mapping-patterns/cisco-waps-discovery.md)
-   [Printers](r_DataCollDiscoNetworkPrinters.md) and [power supplies](r_DataCollDiscoUnintPowerSupp.md)
-   [IP services and daemons](r_DataCollDiscoServicesAndDaemons.md)

 You can also find devices based on [TCP connections](r_DataCollDiscoTCPConnections.md) and [Layer-2, SNMP-level](c_Layer2Discovery.md#) discovery.

</td></tr></tbody>
</table>## Storage

<table id="table_dtq_lkj_lnb"><tbody><tr><td>

![](../../../reuse/icons/brand-icons/bus-server.svg)

</td><td>

[Storage](c_Storage.md)

 Discover these types of storage devices:

-   [Pure Storage FlashBlade](../discovery-and-service-mapping-patterns/pure-storage-discovery.md)
-   [NetApp server](netapp-discovery.md)
-   [Discovery of storage area networks \(SAN\)](r_DataCollDiscoStorageDevices.md)
-   [Direct Attached Storage \(DAS\)](r_DataCollDiscoStorageDevices.md)
-   [Network Attached Storage \(NAS\)](r_DataCollDiscoStorageDevices.md)
-   [Host bus adapters \(HBA\)](r_DataCollDiscoStorageViaHost.md)
-   [EMC Isilon](../discovery-and-service-mapping-patterns/emc-isilon-discovery.md)

</td></tr></tbody>
</table>-   **[Detailed information on products discovered by ITOM Visibility](r_SupportedApplications.md)**  
Discovery and Service Mapping can discover a wide range of operating systems and applications.
-   **[Cloud resource discovery references](cloud-discovery-collected-data.md)**  
ITOM Visibility discovers resources on cloud platforms.
-   **[Operating systems discovery](c_Computers.md)**  
Discovery identifies the following computers, clusters, and virtual machines.
-   **[Operating system-level virtualization discovery](c-oslv-discovery.md)**  
Discovery can collect image and container information from Operating system-level virtualization \(OS-level virtualization\) engines.
-   **[Software discovery](c_Software.md)**  
Discovery identifies several types of software.
-   **[Database discovery](database-discovery.md)**  
Discovery can find database applications, such as MySQL, Oracle, and MongoDB. Discovery can also find database management system software, such as MSSQL Server.
-   **[Network device discovery](c_NetworkDevices.md)**  
Discovery identifies several network devices, including load balancers, routers, TCP connections, IP networks, and so on. It can find devices through traditional port probes, and then through identifications and exploration probes, or through patterns. It also supports discovery by identifying HTTP and TCP connections.
-   **[Storage discovery](c_Storage.md)**  
Discovery collects information on Direct Attached Storage \(DAS\), Storage Area Networks \(SAN\), and Network Attached Storage \(NAS\).

**Parent Topic:**[ITOM Visibility reference](visibility-reference.md)

