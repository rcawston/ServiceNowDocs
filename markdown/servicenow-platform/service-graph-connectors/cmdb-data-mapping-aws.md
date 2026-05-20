---
title: Data mapping for Service Graph Connector for AWS
description: Data from the AWS data sources is mapped and transformed into the ServiceNow CMDB Configuration Item \(CI\) class definitions using the Robust Transform Engine \(RTE\). Data is inserted into the ServiceNow CMDB using the Identification and Reconciliation Engine \(IRE\).
locale: en-US
release: australia
product: Service Graph Connectors
classification: service-graph-connectors
topic_type: reference
last_updated: "2026-03-12"
reading_time_minutes: 8
breadcrumb: [AWS, Service Graph Connectors, Integrating third-party data into CMDB, Configuration Management, Extend ServiceNow AI Platform capabilities]
---

# Data mapping for Service Graph Connector for AWS

Data from the AWS data sources is mapped and transformed into the ServiceNow CMDB Configuration Item \(CI\) class definitions using the Robust Transform Engine \(RTE\). Data is inserted into the ServiceNow® CMDB using the Identification and Reconciliation Engine \(IRE\).

## Data mapping for AWS

Data from the AWS data sources is mapped and transformed into the ServiceNow CMDB Configuration Item \(CI\) class definitions using the Robust Transform Engine \(RTE\). Data is inserted into the ServiceNow CMDB using the Identification and Reconciliation Engine \(IRE\).

**Note:** If the **Use last run datetime** field for an AWS data source in the Data Source \[sys\_data\_source\] table is empty, the connector imports all available initial data. If the **Use last run datetime** field includes a date stamp, the connector imports incremental data that has been newly added since the previous run.

The following table lists the import schedule order, the data sources and import schedules of the same name, the staging tables, the target tables as CMDB CI classes, the import schedule requirement type, and the import schedule dependencies for AWS.

<table id="table_q4p_fmj_p1c" class="custom-rows"><thead><tr><th>

Order

</th><th class="filter">

Name\(data source or import schedule\)

</th><th>

Staging table

</th><th>

CMDB CI classes

</th><th>

Import schedule requirement type

</th><th>

Import schedule dependencies

</th></tr></thead><tbody><tr><td>

1

</td><td>

SG-AWS-Organization

</td><td>

SG-AWS-Organization \[sn\_aws\_integ\_sg\_aws\_organization\]

</td><td>

[Cloud Organizations](cmdb-aws-classes.md#cloud-organizations-cmdb-ci-cloud-org)

</td><td>

Required

</td><td>

None

</td></tr><tr><td>

2

</td><td>

SG-AWS-Org-Units

</td><td>

SG-AWS-Org-Units \[sn\_aws\_integ\_sg\_aws\_org\_units\]

</td><td>

[AWS Organizational Unit](cmdb-aws-classes.md#aws-organizational-unit-cmdb-ci-aws-org-unit)

</td><td>

Optional

</td><td>

SG-AWS-Organization

</td></tr><tr><td>

3

</td><td>

SG-AWS-Service-Account

</td><td>

SG-AWS-Service-Account \[sn\_aws\_integ\_sg\_aws\_service\_account\]

</td><td>

[Cloud Service Account](cmdb-aws-classes.md#cloud-service-account-cmdb-ci-cloud-service-account)

 [Cloud Organizations](cmdb-aws-classes.md#cloud-organizations-cmdb-ci-cloud-org)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

</td><td>

Required

</td><td>

SG-AWS-Organization

</td></tr><tr><td>

4

</td><td>

SG-AWS-Service-Account-Tags

</td><td>

SG-AWS-Service-Account-Tags \[sn\_aws\_integ\_sg\_aws\_service\_account\_tags\]

</td><td>

[Cloud Service Account](cmdb-aws-classes.md#cloud-service-account-cmdb-ci-cloud-service-account)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

</td></tr><tr><td>

5

</td><td>

SG-AWS-Org-Unit-Accounts

</td><td>

SG-AWS-Org-Unit-Accounts \[sn\_aws\_integ\_sg\_aws\_org\_unit\_accounts\]

</td><td>

[Cloud Service Account](cmdb-aws-classes.md#cloud-service-account-cmdb-ci-cloud-service-account)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

</td></tr><tr><td>

6

</td><td>

SG-AWS-Datacenters

</td><td>

SG-AWS-Datacenters \[sn\_aws\_integ\_sg\_aws\_datacenters\]

</td><td>

[Cloud Service Account](cmdb-aws-classes.md#cloud-service-account-cmdb-ci-cloud-service-account)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

</td><td>

Required

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

</td></tr><tr><td>

7

</td><td>

SG-AWS-VPC

</td><td>

SG-AWS-VPC \[sn\_aws\_integ\_sg\_aws\_vpc\]

</td><td>

[Cloud Service Account](cmdb-aws-classes.md#cloud-service-account-cmdb-ci-cloud-service-account)

 [Cloud Network](cmdb-aws-classes.md#cloud-network-cmdb-ci-network)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Required

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

8

</td><td>

SG-AWS-Subnets

</td><td>

SG-AWS-Subnets \[sn\_aws\_integ\_sg\_aws\_subnets\]

</td><td>

[Availability Zone](cmdb-aws-classes.md#availability-zone-cmdb-ci-availability-zone)

 [Cloud Network](cmdb-aws-classes.md#cloud-network-cmdb-ci-network)

 [Cloud Subnet](cmdb-aws-classes.md#cloud-subnet-cmdb-ci-cloud-subnet)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Required

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

</td></tr><tr><td>

9

</td><td>

SG-AWS-Network-Interface

</td><td>

SG-AWS-Network-Interface \[sn\_aws\_integ\_sg\_aws\_network\_interface\]

</td><td>

[Cloud Network](cmdb-aws-classes.md#cloud-network-cmdb-ci-network)

 [Cloud Subnet](cmdb-aws-classes.md#cloud-subnet-cmdb-ci-cloud-subnet)

 [Cloud Mgmt Network Interface](cmdb-aws-classes.md#cloud-mgmt-network-interface-cmdb-ci-nic)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Required for a virtual machine \(VM\) instance

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

</td></tr><tr><td>

10

</td><td>

SG-AWS-Security-Group

</td><td>

SG-AWS-Security-Group \[sn\_aws\_integ\_sg\_aws\_security\_group\]

</td><td>

[Cloud Network](cmdb-aws-classes.md#cloud-network-cmdb-ci-network)

 [Compute Security Group](cmdb-aws-classes.md#compute-security-group-cmdb-ci-compute-security-group)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Required for a VM instance

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

</td></tr><tr><td>

11

</td><td>

SG-AWS-Storage-Volume

</td><td>

SG-AWS-Storage-Volume \[sn\_aws\_integ\_sg\_aws\_storage\_volume\]

</td><td>

[Storage Volume](cmdb-aws-classes.md#storage-volume-cmdb-ci-storage-volume)[Storage Volume Snapshot](cmdb-aws-classes.md#storage-volume-snapshot-cmdb-ci-storage-vol-snapshot)

[AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

[Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

SG-AWS Extension Attributes

</td><td>

Required for a VM instance

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

</td></tr><tr><td>

12

</td><td>

SG-AWS-Image-Private

</td><td>

SG-AWS-Image \[sn\_aws\_integ\_sg\_aws\_image\]

</td><td>

[Image](cmdb-aws-classes.md#cloud-image-cmdb-ci-cloud-os-image)

</td><td>

Required for a VM instance

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

</td></tr><tr><td>

13

</td><td>

SG-AWS-Image-Id

</td><td>

SG-AWS-Image-Id \[sn\_aws\_integ\_sg\_aws\_image\_id\]

</td><td>

[Image](cmdb-aws-classes.md#cloud-image-cmdb-ci-cloud-os-image)

</td><td>

Required for a VM instance

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

</td></tr><tr><td>

14

</td><td>

SG-AWS-Hardware-Type

</td><td>

SG-AWS-Hardware-Type \[sn\_aws\_integ\_sg\_aws\_hardware\_type\]

</td><td>

[Hardware Type](cmdb-aws-classes.md#cloud-hardware-type-cmdb-ci-cloud-hardware-type)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

</td><td>

Required for a VM instance

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

</td></tr><tr><td>

15

</td><td>

SG-AWS-EC2

</td><td>

SG-AWS-EC2 \[sn\_aws\_integ\_sg\_aws\_ec2\]

</td><td>

[Virtual Machine Instance](cmdb-aws-classes.md#virtual-machine-instance-cmdb-ci-vm-instance)

The following CIs are populated when populating the Virtual Machine Instance CI:[Server](cmdb-aws-classes.md#server-cmdb-ci-server)

[VNIC Endpoint](cmdb-aws-classes.md#vnic-endpoint-cmdb-ci-endpoint-vnic)

[Storage Mapping](cmdb-aws-classes.md#storage-mapping-cmdb-ci-storage-mapping)

[Block Endpoint](cmdb-aws-classes.md#block-endpoint-cmdb-ci-endpoint-block)

[IP Address](cmdb-aws-classes.md#ip-address-cmdb-ci-ip-address)

[Network Adapter](cmdb-aws-classes.md#network-adapter-cmdb-ci-network-adapter)

[Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Hardware-Type

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

</td></tr><tr><td>

16

</td><td>

SG-AWS-ELB-V1

</td><td>

SG-AWS-ELB-V1 \[sn\_aws\_integ\_sg\_aws\_elb\_v1\]

</td><td>

[Cloud Load Balancer](cmdb-aws-classes.md#cloud-load-balancer-cmdb-ci-cloud-load-balancer)

 [Compute Security Group](cmdb-aws-classes.md#compute-security-group-cmdb-ci-compute-security-group)

 [Availability Zone](cmdb-aws-classes.md#availability-zone-cmdb-ci-availability-zone)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

17

</td><td>

SG-AWS-ELB-V2

</td><td>

SG-AWS-ELB-V2 \[sn\_aws\_integ\_sg\_aws\_elb\_v2\]

</td><td>

[Cloud Load Balancer](cmdb-aws-classes.md#cloud-load-balancer-cmdb-ci-cloud-load-balancer)

 [Compute Security Group](cmdb-aws-classes.md#compute-security-group-cmdb-ci-compute-security-group)

 [Availability Zone](cmdb-aws-classes.md#availability-zone-cmdb-ci-availability-zone)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

18

</td><td>

SG-AWS-RDS

</td><td>

SG-AWS-RDS \[sn\_aws\_integ\_sg\_aws\_rds\]

</td><td>

[Cloud DataBase](cmdb-aws-classes.md#cloud-database-cmdb-ci-cloud-database)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

19

</td><td>

SG-AWS-API-Gateway

</td><td>

SG-AWS-API-Gateway \[sn\_aws\_integ\_sg\_aws\_api\_gateway\]

</td><td>

[Cloud Gateway \[cmdb\_ci\_cloud\_gateway\]](cmdb-aws-classes.md#cloud-gateway-cmdb-ci-cloud-gateway)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

20

</td><td>

SG-AWS-Lambda

</td><td>

SG-AWS-Lambda \[sn\_aws\_integ\_sg\_aws\_lambda\]

</td><td>

[Cloud Function](cmdb-aws-classes.md#cloud-function-cmdb-ci-cloud-function)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

21

</td><td>

SG-AWS-S3

</td><td>

SG-AWS-S3 \[sn\_aws\_integ\_sg\_aws\_s3\]

</td><td>

[Cloud Object Storage](cmdb-aws-classes.md#cloud-object-storage-cmdb-ci-cloud-object-storage)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

22

</td><td>

SG-AWS-DynamoDb

</td><td>

SG-AWS-DynamoDb \[sn\_aws\_integ\_sg\_aws\_dynamodb\]

</td><td>

[DynamoDB Table](cmdb-aws-classes.md#dynamodb-table-cmdb-ci-dynamodb-table)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

23

</td><td>

SG-AWS-Software-Inventory

</td><td>

SG-AWS-Software-Inventory \[sn\_aws\_integ\_sg\_aws\_software\_inventory\]SG-AWS-Software-Staging \[sn\_aws\_integ\_sg\_aws\_temp\_software\_staging\]

</td><td>

When the Software Asset Management \(SAM\) application isn't installed:

 [Software Packages](cmdb-aws-classes.md#section_bfg_zlg_fxb)

 [Software Instance](cmdb-aws-classes.md#software-instance-cmdb-software-instance)

 [Server](cmdb-aws-classes.md#server-cmdb-ci-server)

 When the SAM application is installed:

 [Software Installation](cmdb-aws-classes.md#software-installation-cmdb-sam-sw-install)

 [Server](cmdb-aws-classes.md#server-cmdb-ci-server)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Hardware-Type

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

 SG-AWS-EC2

</td></tr><tr><td>

24

</td><td>

SG-AWS-Software-Remove

</td><td>

SG-AWS-Software-Remove \[sn\_aws\_integ\_sg\_aws\_software\_remove\]

</td><td>

None

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Hardware-Type

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

 SG-AWS-EC2

 SG-AWS-Software-Inventory

</td></tr><tr><td>

25

</td><td>

SG-AWS-SSM-SendCommand

</td><td>

SG-AWS-SSM-SendCommand \[sn\_aws\_integ\_sg\_aws\_ssm\_sendcommand\]

</td><td>

[Application](cmdb-aws-classes.md#application-cmdb-ci-appl)

 Running Process \[cmdb\_running\_process\]

 TCP Connections \[cmdb\_tcp\]

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

 SG-AWS-EC2

</td></tr><tr><td>

26

</td><td>

SG-AWS-Tags

</td><td>

SG-AWS-Tags \[sn\_aws\_integ\_sg\_aws\_tags\]

</td><td>

[DynamoDB Table](cmdb-aws-classes.md#dynamodb-table-cmdb-ci-dynamodb-table)

 [Cloud Load Balancer](cmdb-aws-classes.md#cloud-load-balancer-cmdb-ci-cloud-load-balancer)

 [Cloud Function](cmdb-aws-classes.md#cloud-function-cmdb-ci-cloud-function)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-ELB-V1

 SG-AWS-ELB-V2

 SG-AWS-DynamoDb

 SG-AWS-Lambda

</td></tr><tr><td>

27

</td><td>

SG-AWS-VM-Hw-Consolidation

</td><td>

SG-AWS-VM-Hw-Consolidation \[sn\_aws\_integ\_sg\_aws\_vm\_hw\_consolidation\]

</td><td>

[Virtual Machine Instance](cmdb-aws-classes.md#virtual-machine-instance-cmdb-ci-vm-instance)

 [Server](cmdb-aws-classes.md#server-cmdb-ci-server)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

 SG-AWS-EC2

 SG-AWS-Hardware-Type

</td></tr><tr><td>

28

</td><td>

SG-AWS-EKS-Cluster

</td><td>

SG-AWS-EKS-Cluster \[sn\_aws\_integ\_sg\_aws\_eks\_cluster\]

</td><td>

[Kubernetes Cluster](cmdb-aws-classes.md#kubernetes-cluster-cmdb-ci-kubernetes-cluster)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

 SG-AWS-EC2

 SG-AWS-Hardware-Type

 SG-AWS-VM-Hw-Consolidation

</td></tr><tr><td>

29

</td><td>

SG-AWS-EKS-Cluster-2

</td><td>

SG-AWS-EKS-Cluster-2 \[sn\_aws\_integ\_sg\_aws\_eks\_cluster\_2\]

</td><td>

[Kubernetes Cluster](cmdb-aws-classes.md#kubernetes-cluster-cmdb-ci-kubernetes-cluster)

 [AWS Datacenter](cmdb-aws-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

 SG-AWS Extension Attributes

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

 SG-AWS-EC2

 SG-AWS-Hardware-Type

 SG-AWS-VM-Hw-Consolidation

 SG-AWS-EKS-Cluster

</td></tr><tr><td>

30

</td><td>

SG-AWS-EKS-FULL

</td><td>

SG-AWS-EKS-FULL \[sn\_aws\_integ\_sg\_aws\_eks\_full\]

</td><td>

[Kubernetes Cluster](cmdb-aws-classes.md#kubernetes-cluster-cmdb-ci-kubernetes-cluster)

 [Server](cmdb-aws-classes.md#server-cmdb-ci-server)

 [Kubernetes Namespace](cmdb-aws-classes.md#kubernetes-namespace-cmdb-ci-kubernetes-namespace)

 [Kubernetes Node](cmdb-aws-classes.md#kubernetes-node-cmdb-ci-kubernetes-node)

 [Kubernetes Service](cmdb-aws-classes.md#kubernetes-service-cmdb-ci-kubernetes-service)

 [Kubernetes Pod](cmdb-aws-classes.md#kubernetes-pod-cmdb-ci-kubernetes-pod)

 [Docker Container](cmdb-aws-classes.md#docker-container-cmdb-ci-docker-container)

 [Docker Image](cmdb-aws-classes.md#docker-image-cmdb-ci-docker-image)

 [Kubernetes Volume](cmdb-aws-classes.md#kubernetes-volume-cmdb-ci-kubernetes-volume)

 [Kubernetes Deployment](cmdb-aws-classes.md#kubernetes-deployment-cmdb-ci-kubernetes-deployment)

 [Kubernetes DaemonSet](cmdb-aws-classes.md#kubernetes-daemonset-cmdb-ci-kubernetes-daemonset)

 [Kubernetes ReplicaSet](cmdb-aws-classes.md#kubernetes-replicaset-cmdb-ci-kubernetes-replicaset)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

 SG-AWS-EC2

 SG-AWS-Hardware-Type

 SG-AWS-VM-Hw-Consolidation

 SG-AWS-EKS-Cluster

 SG-AWS-EKS-Cluster-2

</td></tr><tr><td>

31

</td><td>

SG-AWS-Generic-Resources

</td><td>

SG-AWS-Generic-Resources \[sn\_aws\_integ\_sg\_aws\_generic\_resources\]

</td><td>

[Cloud Resource](cmdb-aws-classes.md#cloud-resource-cmdb-ci-cmp-resource)

 SG-AWS Extension Attributes

</td><td>

Optional

</td><td>

SG-AWS-Organization

</td></tr><tr><td>

32

</td><td>

SG-AWS-Redshift-Cluster

</td><td>

SG-AWS-Redshift-Cluster \[sn\_aws\_integ\_sg\_aws\_redshift\_cluster\]

</td><td>

[Amazon Redshift](cmdb-aws-classes.md#amazon-redshift-cmdb-ci-aws-redshift)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

33

</td><td>

SG-AWS-Get-Inventory

</td><td>

SG-AWS-Get-Inventory \[sn\_aws\_integ\_sg\_aws\_get\_inventory\]

</td><td>

[Server](cmdb-aws-classes.md#server-cmdb-ci-server)

</td><td>

Required

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

</td></tr><tr><td>

34

</td><td>

SG-AWS-GenericTags

</td><td>

SG-AWS-GenericTags \[sn\_aws\_integ\_sg\_aws\_generictags\]

</td><td>

[Cloud Resource](cmdb-aws-classes.md#cloud-resource-cmdb-ci-cmp-resource)

 [Key Value](cmdb-aws-classes.md#key-value-cmdb-key-value)

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Generic-Resources

</td></tr><tr><td>

35

</td><td>

SG-AWS-SendCommand

</td><td>

SG-AWS-SendCommand \[sn\_aws\_integ\_sg\_aws\_ssm\_sendcommand\]

</td><td>

None**Note:** The SG-AWS-SendCommand data source doesn't have target CMDB CI classes. This data source populates the data into the sn\_aws\_integ\_sg\_aws\_ssm\_sendcommand staging table, but the import records aren't transformed, and the import sets remain in pending state.

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

 SG-AWS-EC2

</td></tr><tr><td>

36

</td><td>

SG-AWS-SSM-GetS3Object

</td><td>

SG-AWS-SSM-GetS3Object \[sn\_aws\_integ\_sg\_aws\_ssm\_gets3object\]

</td><td>

[Server](cmdb-aws-classes.md#server-cmdb-ci-server)

 Running Process \[cmdb\_running\_process\]

 TCP Connections \[cmdb\_tcp\]

</td><td>

Optional

</td><td>

SG-AWS-Organization

 SG-AWS-Service-Account

 SG-AWS-Datacenters

 SG-AWS-VPC

 SG-AWS-Subnets

 SG-AWS-Network-Interface

 SG-AWS-Security-Group

 SG-AWS-Storage-Volume

 SG-AWS-Image-Private

 SG-AWS-Image-Id

 SG-AWS-EC2

 SG-AWS-SendCommand

</td></tr></tbody>
</table>For more information on where data is saved when pulling data from AWS, see [CMDB classes targeted in Service Graph Connector for AWS](cmdb-aws-classes.md) and [Supported AWS resource types](cmdb-sgc-aws-resource-types.md).

You can use the IntegrationHub ETL app to view the data maps. See [IntegrationHub ETL](../integration-hub-etl/integrationhub-etl.md) for more information.

For more information about how CI information is pulled from AWS, see the [Service Graph Connector for AWS - Functional Spec and CI](https://community.servicenow.com/community?id=community_article&sys_id=64e2949f1b9ec910c465ece6b04bcbe7) article on the ServiceNow Community site.

Additional information about AWS data sources:

-   The SG-AWS-Generic-Resources data source imports data for generic resources that aren't tracked by other data sources. The connector uses the Service Graph Resource Inclusion Whitelist \[sn\_cmdb\_int\_util\_service\_graph\_resource\_inclusion\_whitelist\] table to differentiate between generic and other supported resource types.

    The connector first populates all supported resources in the Service Graph Resource Inclusion Whitelist \[sn\_cmdb\_int\_util\_service\_graph\_resource\_inclusion\_whitelist\] table. These resources, categorized under their respective supported resource types, have specific data sources designated for ingestion within the connector. When the SG-AWS-Generic-Resources data source is executed and retrieves unsupported resource types, they are added to the Service Graph Resource Inclusion Whitelist \[sn\_cmdb\_int\_util\_service\_graph\_resource\_inclusion\_whitelist\] table and categorized as generic.

-   In Service Graph Connector for AWS version 2.13.0 and later, parallel loading is enabled for SG-AWS-Generic-Resources data source if the AWS Config aggregator is used for discovery. Partitions are created for the SG-AWS-Generic-Resources data source based on the Resource Types in the Service Graph Resource Inclusion Whitelist \[sn\_cmdb\_int\_util\_service\_graph\_resource\_inclusion\_whitelist\] table. Additionally, delete jobs aren't created for a full data load.

    If the AWS Config aggregator isn't used for discovery, API calls are made to multiple accounts and the **Partition info** field is populated with Account and Region details.

-   To import global generic resources such as IAM user and IAM group, specify a standard AWS region that has `Config` enabled with **includeGlobalResourceTypes** set to `true` by updating the value of the **sn\_aws\_integ.global\_generic\_resource\_region** system property for the SG-AWS-Generic-Resources data source.

    If an aggregator is configured, and the **sn\_aws\_integ.global\_generic\_resource\_region** value is not specified, the aggregator region is assigned as the value of this system property for importing global generic resources.

-   If the AWS Systems Manager \(SSM\) service isn't enabled, the connector populates the server records in the Server \[cmdb\_ci\_server\] class. If the AWS SSM service is enabled, then based on the platform type obtained through the SSM service, the server records are populated in either the Linux Server \[cmdb\_ci\_linux\_server\] class or the Windows Server \[cmdb\_ci\_win\_server\] class. The Server \[cmdb\_ci\_server\] class is the parent class of the Linux Server \[cmdb\_ci\_linux\_server\] and the Windows Server \[cmdb\_ci\_win\_server\] classes.
-   All labels associated with an AWS resource are added to the Key Value \[cmdb\_key\_value\] table.

    **Note:** You can use the [CMDB Data Manager](../configuration-management-database-cmdb/cmdb-data-management.md) to delete tag data from retired CIs in the Key Value \[cmdb\_key\_value\] table based on conditions like retention time and discovery source. A scheduled job runs the policy, which can be configured to execute during off-peak hours.

-   The basic information about an AWS resource is stored in the SG-AWS Extension Attributes \[sn\_aws\_extension\_attributes\] table.
-   In Service Graph Connector for AWS version 2.10.0 and later, the SG-AWS-Get-Inventory data source runs before the SG-AWS-EC2 data source and creates a Server \[cmdb\_ci\_server\] CI with the host name mapped to the Name attribute, instead of being mapped to the VM name.
-   The SG-AWS-GenericTags data source imports tag data only for generic resources that have an ARN key. You can use the SG-AWS Extension Attributes \[sn\_aws\_extension\_attributes\] table to verify which generic resources have an ARN key.

    **Note:** The SG-AWS-GenericTags data source doesn't import tag data for Amazon CloudFront resources.

-   The AWS configuration data for each connection is stored in the SG AWS Application Properties \[sn\_aws\_integ\_sg\_aws\_application\_properties\] table.
-   When you run the diagnostic test, the data is loaded in the following tables:
    -   SG AWS Diagnostic Details \[sn\_aws\_integ\_sg\_aws\_diagnostic\_details\]
    -   SG-AWS Diagnostic Summary \[sn\_aws\_integ\_sg\_aws\_diagnostic\_summary\]
    -   SG AWS Diagnostic Summary Notes \[sn\_aws\_integ\_sg\_aws\_diagnostic\_summary\_notes\]
-   In Service Graph Connector for AWS version 2.13.0 and later, the SG-AWS-Image-Id data source doesn't access cross-account records during lookup.

## Related content

[CMDB classes targeted in Service Graph Connector for AWS](cmdb-aws-classes.md)

[Service Graph Connector for AWS properties](cmdb-sgc-aws-props.md)

