---
title: Supported Wiz types
description: The Wiz types and corresponding native types are imported as CMDB data and saved in tables that extend from the Configuration item \[cmdb\_ci\] table.
locale: en-US
release: australia
product: Service Graph Connectors
classification: service-graph-connectors
topic_type: reference
last_updated: "2026-03-12"
reading_time_minutes: 3
breadcrumb: [Wiz, Service Graph Connectors, Integrating third-party data into CMDB, Configuration Management, Extend ServiceNow AI Platform capabilities]
---

# Supported Wiz types

The Wiz types and corresponding native types are imported as CMDB data and saved in tables that extend from the Configuration item \[cmdb\_ci\] table.

For information on Wiz types and Wiz native types, see [Security Graph Object Normalization](https://integrate.wiz.io/docs/security-graph-object-normalization) on the Wiz documentation site \(requires Wiz login\).

<table id="table_tvd_3tq_k1c"><thead><tr><th>

Wiz types

</th><th>

Wiz native types

</th><th>

CMDB CI classes

</th></tr></thead><tbody><tr><td rowspan="2">

Cloud Organization

</td><td>

AWS OrganizationGCP Organization

</td><td>

[Cloud Organizations](sgc-cmdb-wiz-classes.md#cloud-organizations-cmdb-ci-cloud-org)

</td></tr><tr><td>

GCP Folder

</td><td>

[Google Organization Folder](sgc-cmdb-wiz-classes.md#google-organization-folder-cmdb-ci-gcp-folder)

</td></tr><tr><td rowspan="6">

Subscription

</td><td>

AWS Account

</td><td rowspan="2">

[Cloud Service Account](sgc-cmdb-wiz-classes.md#cloud-service-account-cmdb-ci-cloud-service-account)

</td></tr><tr><td>

Azure Subscription

</td></tr><tr><td>

GCP Project

</td><td>

[Cloud Service Account](sgc-cmdb-wiz-classes.md#cloud-service-account-cmdb-ci-cloud-service-account)

 [Google Organization Project](sgc-cmdb-wiz-classes.md#google-organization-project-cmdb-ci-gcp-project)

</td></tr><tr><td>

OCI Compartment​

</td><td rowspan="3">

[VMware vCenter Datacenter](sgc-cmdb-wiz-classes.md#vmware-vcenter-datacenter-cmdb-ci-vcenter-datacenter)

</td></tr><tr><td>

Alibaba Account​

</td></tr><tr><td>

vSphere Datacenter​

</td></tr><tr><td rowspan="5">

Region

</td><td>

AWS Region

</td><td>

[AWS Datacenter](sgc-cmdb-wiz-classes.md#aws-datacenter-cmdb-ci-aws-datacenter)

</td></tr><tr><td>

Azure Location

</td><td>

[Azure Datacenter](sgc-cmdb-wiz-classes.md#azure-datacenter-cmdb-ci-azure-datacenter)

</td></tr><tr><td>

GCP Region

</td><td>

[Google Datacenter](sgc-cmdb-wiz-classes.md#google-datacenter-cmdb-ci-google-datacenter)

</td></tr><tr><td>

OCI Region​

</td><td>

[OCI Datacenter](sgc-cmdb-wiz-classes.md#oci-datacenter-cmdb-ci-oci-datacenter)

</td></tr><tr><td>

Alibaba Region

</td><td>

[Logical Datacenter](sgc-cmdb-wiz-classes.md#logical-datacenter-cmdb-ci-logical-datacenter)

</td></tr><tr><td>

Resource Group

</td><td>

Azure Resource Group

</td><td>

[Resource Group](sgc-cmdb-wiz-classes.md#resource-group-cmdb-ci-resource-group)

</td></tr><tr><td rowspan="2">

Compute Instance Group

</td><td>

AWS Auto Scaling Group​

</td><td rowspan="2">

[Instance Scale Set](sgc-cmdb-wiz-classes.md#instance-scale-set-cmdb-ci-instance-scale-set)

</td></tr><tr><td>

Azure Compute Virtual Machine Scale Set

</td></tr><tr><td rowspan="3">

Network Interface

</td><td>

AWS Network Interface

</td><td rowspan="3">

[Cloud Mgmt Network Interface](sgc-cmdb-wiz-classes.md#cloud-mgmt-network-interface-cmdb-ci-nic)

</td></tr><tr><td>

Azure Network Interface

</td></tr><tr><td>

GCP Compute Network Interface

</td></tr><tr><td rowspan="2">

Virtual Network

</td><td>

AWS VPC

</td><td rowspan="2">

[Cloud Network](sgc-cmdb-wiz-classes.md#cloud-network-cmdb-ci-network)

</td></tr><tr><td>

Azure Virtual Network

</td></tr><tr><td rowspan="5">

Firewall

</td><td>

AWS EC2 Security Group

</td><td rowspan="5">

[Compute Security Group](sgc-cmdb-wiz-classes.md#compute-security-group-cmdb-ci-compute-security-group)

</td></tr><tr><td>

Azure Network Security Group

</td></tr><tr><td>

GCP Firewall

</td></tr><tr><td>

OCI Network Security Group​

</td></tr><tr><td>

OCI Security List

</td></tr><tr><td rowspan="4">

Volume

</td><td>

AWS EC2 Volume \(EBS\)

</td><td rowspan="3">

[Storage Volume](sgc-cmdb-wiz-classes.md#storage-volume-cmdb-ci-storage-volume)

</td></tr><tr><td>

AWS Lightsail Disk

</td></tr><tr><td>

Azure Disk

</td></tr><tr><td>

GCP Compute Disk

</td><td>

[Storage Volume](sgc-cmdb-wiz-classes.md#storage-volume-cmdb-ci-storage-volume), [Cloud Disk Type](sgc-cmdb-wiz-classes.md#cloud-disk-type-cmdb-ci-disk-type)

</td></tr><tr><td rowspan="8">

Virtual Machine

</td><td>

AWS EC2 Instance

</td><td rowspan="8">

[Virtual Machine Instance](sgc-cmdb-wiz-classes.md#virtual-machine-instance-cmdb-ci-vm-instance), [Server](sgc-cmdb-wiz-classes.md#linux-server-cmdb-ci-linux-server), [Hardware Type](sgc-cmdb-wiz-classes.md#cloud-hardware-type-cmdb-ci-cloud-hardware-type)

</td></tr><tr><td>

AWS Lightsail Instance

</td></tr><tr><td>

Azure Scale Set Virtual Machine

</td></tr><tr><td>

Azure Compute Virtual Machine

</td></tr><tr><td>

GCP Compute Instance

</td></tr><tr><td>

OCI Compute Instance​

</td></tr><tr><td>

Alibaba ECS Instance

</td></tr><tr><td>

vSphere Virtual Machine

</td></tr><tr><td rowspan="16">

Snapshot

</td><td>

AWS EBS Unencrypted Snapshot​

</td><td rowspan="16">

[Storage Volume Snapshot](sgc-cmdb-wiz-classes.md#storage-volume-snapshot-cmdb-ci-storage-vol-snapshot)

</td></tr><tr><td>

AWS DB Cluster Snapshot​​

</td></tr><tr><td>

AWS DB Instance Snapshot​

</td></tr><tr><td>

AWS DocumentDB Elastic Cluster Snapshot​

</td></tr><tr><td>

AWS EBS Encrypted Snapshot​

</td></tr><tr><td>

AWS Elasticache Snapshot​

</td></tr><tr><td>

AWS MemoryDB Snapshot​

</td></tr><tr><td>

AWS DynamoDB Backup​

</td></tr><tr><td>

AWS Neptune Analytics Graph Snapshot​

</td></tr><tr><td>

AWS Redshift Cluster Snapshot​

</td></tr><tr><td>

Azure Compute Public Snapshot​

</td></tr><tr><td>

Azure SQL LTR Backup​

</td></tr><tr><td>

GCP Compute Snapshot​

</td></tr><tr><td>

GCP AlloyDB Backup​

</td></tr><tr><td>

GCP Cloud SQL Backup​

</td></tr><tr><td>

GCP Cloud SQL Backup Run

</td></tr><tr><td rowspan="2">

Gateway

</td><td>

AWS Egress Only Internet Gateway​

</td><td rowspan="2">

[Internet Gateway](sgc-cmdb-wiz-classes.md#internet-gateway-cmdb-ci-internet-gateway)

</td></tr><tr><td>

AWS VPN Gateway

</td></tr><tr><td rowspan="4">

Virtual Machine Image

</td><td>

AWS Machine Image \(AMI\)

</td><td rowspan="4">

[Image](sgc-cmdb-wiz-classes.md#image-cmdb-ci-os-template)

</td></tr><tr><td>

Azure Compute Virtual Machine Image

</td></tr><tr><td>

Azure Compute Gallery VM image version

</td></tr><tr><td>

GCP Compute Image

</td></tr><tr><td rowspan="10">

Load Balancer

</td><td>

AWS ELB v1

</td><td rowspan="10">

[Cloud Load Balancer](sgc-cmdb-wiz-classes.md#cloud-load-balancer-cmdb-ci-cloud-load-balancer)

</td></tr><tr><td>

AWS ELB V2 Application Load Balancer

</td></tr><tr><td>

AWS ELB V2 Gateway Load Balancer

</td></tr><tr><td>

AWS ELB V2 Network Load Balancer

</td></tr><tr><td>

AWS ELB V2

</td></tr><tr><td>

Azure Application Gateway

</td></tr><tr><td>

Azure Load Balancer

</td></tr><tr><td>

Azure Traffic Manager

</td></tr><tr><td>

GCP Compute Backend Service

</td></tr><tr><td>

GCP Compute Region Backend Service

</td></tr><tr><td rowspan="3">

Bucket

</td><td>

AWS S3 Bucket​

</td><td rowspan="3">

[Cloud Object Storage](sgc-cmdb-wiz-classes.md#cloud-object-storage-cmdb-ci-cloud-object-storage)

</td></tr><tr><td>

Azure Blob Storage Container​

</td></tr><tr><td>

GCP Bucket​

</td></tr><tr><td rowspan="3">

Serverless

</td><td>

AWS Lambda Function​

</td><td rowspan="3">

[Cloud Function](sgc-cmdb-wiz-classes.md#cloud-function-cmdb-ci-cloud-function)

</td></tr><tr><td>

Azure Function

</td></tr><tr><td>

GCP Cloud Function

</td></tr><tr><td rowspan="31">

Database

</td><td>

AWS DynamoDB Table

</td><td>

[DynamoDB Table](sgc-cmdb-wiz-classes.md#dynamodb-table-cmdb-ci-dynamodb-table)

</td></tr><tr><td>

AWS ElastiCache for Memcached Cluster

</td><td rowspan="14">

[Cloud DataBase Cluster](sgc-cmdb-wiz-classes.md#cloud-database-cluster-cmdb-ci-cloud-db-cluster)

</td></tr><tr><td>

AWS ElastiCache Redis OSS Cluster

</td></tr><tr><td>

AWS ElastiCache Valkey Cluster​

</td></tr><tr><td>

AWS Elastic DocumentDB Cluster​

</td></tr><tr><td>

AWS RDS Aurora MySQL Cluster

</td></tr><tr><td>

AWS DocumentDB Cluster

</td></tr><tr><td>

AWS MemoryDB Cluster​

</td></tr><tr><td>

AWS RDS MSSQL Server Cluster

</td></tr><tr><td>

AWS RDS MariaDB Cluster

</td></tr><tr><td>

AWS RDS MySQL Cluster

</td></tr><tr><td>

AWS Neptune Cluster

</td></tr><tr><td>

AWS RDS Oracle Cluster

</td></tr><tr><td>

AWS RDS PostgreSQL Cluster

</td></tr><tr><td>

AWS RDS Aurora PostgreSQL Cluster​

</td></tr><tr><td>

Azure Cosmos DB SQL Database

</td><td rowspan="16">

[Cloud DataBase](sgc-cmdb-wiz-classes.md#cloud-database-cmdb-ci-cloud-database)

</td></tr><tr><td>

Azure Cosmos DB Cassandra Keyspace

</td></tr><tr><td>

Azure MariaDB Database

</td></tr><tr><td>

Azure Cosmos DB MongoDB Collection

</td></tr><tr><td>

Azure Cosmos DB for PostgreSQL Node

</td></tr><tr><td>

Azure Database for MySQL Database

</td></tr><tr><td>

Azure Database for MySQL Flexible Database

</td></tr><tr><td>

Azure Database for PostgreSQL Database

</td></tr><tr><td>

Azure Database for PostgreSQL Flexible Database

</td></tr><tr><td>

Azure Redis Database

</td></tr><tr><td>

Azure Redis Enterprise Database

</td></tr><tr><td>

Azure Synapse Dedicated SQL Pool

</td></tr><tr><td>

Azure Databricks Schema

</td></tr><tr><td>

Azure SQL Database

</td></tr><tr><td>

Azure SQL Managed Instance Database

</td></tr><tr><td>

Azure Data Explorer Kusto Database Instance

</td></tr><tr><td rowspan="3">

Bucket

</td><td>

AWS S3 Bucket

</td><td rowspan="3">

[Cloud Object Storage](sgc-cmdb-wiz-classes.md#cloud-object-storage-cmdb-ci-cloud-object-storage)

</td></tr><tr><td>

Azure Blob Storage Container

</td></tr><tr><td>

GCP Bucket

</td></tr><tr><td rowspan="3">

Serverless

</td><td>

AWS Lambda Function

</td><td rowspan="3">

[Cloud Function](sgc-cmdb-wiz-classes.md#cloud-function-cmdb-ci-cloud-function)

</td></tr><tr><td>

Azure Function

</td></tr><tr><td>

GCP Cloud Function

</td></tr><tr><td rowspan="5">

Network Address

</td><td>

AWS Elastic IP Address

</td><td rowspan="5">

[Cloud Public IP Address](sgc-cmdb-wiz-classes.md#cloud-public-ip-address-cmdb-ci-cloud-public-ipaddress)

</td></tr><tr><td>

Azure CDN Endpoint

</td></tr><tr><td>

Azure Public IP Addresses

</td></tr><tr><td>

GCP Compute Address

</td></tr><tr><td>

GCP Endpoint

</td></tr><tr><td>

Storage Account

</td><td>

Azure Storage Account

</td><td>

[Cloud Storage Account](sgc-cmdb-wiz-classes.md#cloud-storage-account-cmdb-ci-cloud-storage-account)

</td></tr><tr><td rowspan="3">

API Gateway

</td><td>

AWS API Gateway

</td><td rowspan="3">

[Cloud Gateway](sgc-cmdb-wiz-classes.md#cloud-gateway-cmdb-ci-cloud-gateway)

</td></tr><tr><td>

AWS API Gateway V2

</td></tr><tr><td>

Azure API Management

</td></tr><tr><td rowspan="4">

Kubernetes Cluster

</td><td>

AWS Elastic Kubernetes Service \(EKS\) Cluster

</td><td rowspan="4">

[Kubernetes Cluster](sgc-cmdb-wiz-classes.md#kubernetes-cluster-cmdb-ci-kubernetes-cluster)

</td></tr><tr><td>

Azure Kubernetes Service \(AKS\) Cluster

</td></tr><tr><td>

GCP Kubernetes Engine \(GKE\) Cluster

</td></tr><tr><td>

Kubernetes Cluster

</td></tr><tr><td>

Namespace

</td><td>

Kubernetes Namespace

</td><td>

[Kubernetes Namespace](sgc-cmdb-wiz-classes.md#kubernetes-namespace-cmdb-ci-kubernetes-namespace)

</td></tr><tr><td>

Kubernetes Node

</td><td>

Kubernetes Node

</td><td>

[Kubernetes Node](sgc-cmdb-wiz-classes.md#kubernetes-node-cmdb-ci-kubernetes-node)

</td></tr><tr><td>

Deployment

</td><td>

Kubernetes Deployment

</td><td>

[Kubernetes Deployment](sgc-cmdb-wiz-classes.md#kubernetes-deployment-cmdb-ci-kubernetes-deployment)

</td></tr><tr><td>

Kubernetes Service

</td><td>

Kubernetes Service

</td><td>

[Kubernetes Service](sgc-cmdb-wiz-classes.md#kubernetes-service-cmdb-ci-kubernetes-service)

</td></tr><tr><td>

Pod

</td><td>

Kubernetes Pod

</td><td>

[Kubernetes Pod](sgc-cmdb-wiz-classes.md#kubernetes-pod-cmdb-ci-kubernetes-pod)

</td></tr><tr><td>

Replica Set

</td><td>

Kubernetes Replica Set

</td><td>

[Kubernetes ReplicaSet](sgc-cmdb-wiz-classes.md#kubernetes-replicaset-cmdb-ci-kubernetes-replicaset)

</td></tr><tr><td rowspan="4">

Container

</td><td>

Kubernetes Container

</td><td rowspan="4">

[Docker Container](sgc-cmdb-wiz-classes.md#docker-container-cmdb-ci-docker-container)

</td></tr><tr><td>

AWS ECS Container

</td></tr><tr><td>

Azure ACA Container

</td></tr><tr><td>

Azure ACI Container

</td></tr></tbody>
</table>