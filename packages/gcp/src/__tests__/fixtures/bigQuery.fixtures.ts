/*
 * © 2021 Thoughtworks, Inc.
 */

import { BigQueryDate } from '@google-cloud/bigquery'

const bigQueryDateOne: BigQueryDate = { value: '2020-11-02' }
const bigQueryDateTwo: BigQueryDate = { value: '2020-10-28' }
const accountId = 'test-account-id'
const accountName = 'test-account-name'

export const mockQueryResultsAppEngineSSDStorage: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Cloud Datastore Storage',
      usageUnit: 'byte-seconds',
      vCpus: null as string | null,
      usageAmount: 2.83e16,
      cost: 5,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'GCS Storage',
      usageUnit: 'byte-seconds',
      vCpus: null as string | null,
      usageAmount: 380040914534400,
      cost: 10,
      machineType: null,
    },
  ],
]

export const mockQueryResultsCloudSQLSSDComputeEngineDataFlowHDD: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType: 'Storage PD SSD for DB in Americas',
      usageUnit: 'byte-seconds',
      vCpus: null as string | null,
      usageAmount: 4.26e18,
      cost: 7,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'Compute optimized Core running in Americas',
      usageUnit: 'seconds',
      vCpus: '16',
      usageAmount: 80000,
      cost: 7,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud Dataflow',
      usageType: 'Local Disk Time PD Standard Belgium',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 7.8e17,
      cost: 12,
      machineType: null,
    },
  ],
]

export const mockQueryResultsComputeEngineRam: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Compute engine',
      usageType: 'Flex Instance RAM',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 120,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'europe-west1',
      serviceName: 'Compute engine',
      usageType: 'N1 Predefined Instance Ram running in EMEA',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 260,
      cost: 8,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-central1',
      serviceName: 'Compute engine',
      usageType: 'E2 Instance Ram running in Americas',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 380,
      cost: 5,
      machineType: null,
    },
  ],
]

export const mockQueryResultsUnknownUsages: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Compute engine',
      usageType: 'Vpn Tunnel',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 120,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Bitnami Elasticsearch Certified by Bitnami',
      usageType: 'Licensing Fee for Bitnami Elasticsearch',
      usageUnit: 'seconds',
      vCpus: '1',
      usageAmount: 25438523,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud DNS',
      usageType: 'ManagedZone',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 1010797200,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud Key Management Service (KMS)',
      usageType: 'Active software symmetric key versions',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 41330372438,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud Machine Learning Engine',
      usageType: 'Online Prediction Node-Hours (US) for mls1-c1-m2.',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 14551,
      cost: 10,
      machineType: null,
    },
  ],
]

export const mockQueryResultsUnknownAndCloudSQLCompute: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud SQL',
      usageType:
        'Cloud SQL for PostgreSQL: Zonal - IP address reservation in Americas',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 14551,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Cloud SQL',
      usageType: 'IP address idling in seconds for DB in Americas',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 18198540,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType:
        'Cloud SQL for MySQL: Zonal - 4 vCPU + 15GB RAM in Los Angeles',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 50000,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType: 'Cloud SQL: vCPU in Americas',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 94360227,
      cost: 13,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType:
        'DB generic Small instance with 1 VCPU running in Americas (with 30% promotional discount)',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 26316000,
      cost: 13,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType: 'Cloud SQL: Small instance in Northern Virginia',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 1112952,
      cost: 13,
      machineType: null,
    },
  ],
]
export const mockQueryAppEngineComputeUnknownRegion: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Backend Instances',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 14551,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud Dataflow',
      usageType: 'vCPU Time Batch Iowa',
      usageUnit: 'seconds',
      vCpus: null,
      usageAmount: 1141961,
      cost: 190,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: null,
      serviceName: 'App Engine',
      usageType: 'Cloud Datastore Storage',
      usageUnit: 'byte-seconds',
      vCpus: null as string | null,
      usageAmount: 2.83e16,
      cost: 5,
      machineType: null,
    },
  ],
]

export const mockQueryNetworkingIgnoreIngress: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'App Engine',
      usageType: 'Cloud Firestore Google Egress from APAC to the Americas',
      usageUnit: 'bytes',
      vCpus: null as string | null,
      usageAmount: 165007339,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Compute Engine',
      usageType: 'Network Ingress via Carrier Peering Network - EMEA Based',
      usageUnit: 'bytes',
      vCpus: null as string | null,
      usageAmount: 165007339,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Cloud Storage',
      usageType: 'Download Australia',
      usageUnit: 'bytes',
      vCpus: null as string | null,
      usageAmount: 2597445774,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'europe-central2',
      serviceName: 'Cloud Pub/Sub',
      usageType: 'Download Australia',
      usageUnit: 'bytes',
      vCpus: null as string | null,
      usageAmount: 2597445774,
      cost: 10,
      machineType: null,
    },
  ],
]

export const mockQueryComputeWithDifferentMachineTypes: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'Small Instance with 1 VCPU running in EMEA',
      usageUnit: 'seconds',
      vCpus: '12',
      usageAmount: 17512304,
      cost: 10,
      machineType: 'g1-small',
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us-west1',
      serviceName: 'Compute Engine',
      usageType: 'N1 Predefined Instance Core running in Americas',
      usageUnit: 'seconds',
      vCpus: '16',
      usageAmount: 80000,
      cost: 7,
      machineType: 'n1-standard-1',
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'E2 Instance Core running in Americas',
      usageUnit: 'seconds',
      vCpus: '24',
      usageAmount: 9234985,
      cost: 10,
      machineType: 'e2-medium',
    },
  ],
]

export const mockQueryCloudStorageWithReplicationFactors: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'nam4',
      serviceName: 'Cloud Storage',
      usageType: 'Standard Storage Iowa/South Carolina Dual-region',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 491520.0,
      cost: 10,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-central1',
      serviceName: 'Cloud Storage',
      usageType: 'Standard Storage US Regional',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 117334055659520.0,
      cost: 120,
      machineType: null,
    },
    {
      timestamp: bigQueryDateOne,
      accountId: accountId,
      accountName: accountName,
      region: 'us',
      serviceName: 'Cloud Storage',
      usageType: 'Standard Storage US Multi-region',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 5.15376128e8,
      cost: 220,
      machineType: null,
    },
  ],
]

export const mockQueryComputeEngineCloudFilestoreCloudSQLWithReplicationFactors: any[][] =
  [
    [
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'us-east1',
        serviceName: 'Compute Engine',
        usageType: 'Storage PD Capacity',
        usageUnit: 'byte-seconds',
        vCpus: null,
        usageAmount: 1.571922596855808e15,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-northeast1',
        serviceName: 'Compute Engine',
        usageType: 'Regional SSD backed PD Capacity in Japan',
        usageUnit: 'byte-seconds',
        vCpus: null,
        usageAmount: 123456789,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia',
        serviceName: 'Compute Engine',
        usageType: 'Storage PD Snapshot in Asia',
        usageUnit: 'byte-seconds',
        vCpus: null,
        usageAmount: 123456789,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-south1',
        serviceName: 'Compute Engine',
        usageType: 'Storage Machine Image in Mumbai',
        usageUnit: 'byte-seconds',
        vCpus: null,
        usageAmount: 123456789,
        cost: 150,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'us-central1',
        serviceName: 'Cloud Filestore',
        usageType:
          'Filestore Capacity Basic HDD (Standard) Iowa/South Carolina/Oregon',
        usageUnit: 'byte-seconds',
        vCpus: null,
        usageAmount: 9.49978046398464e16,
        cost: 70,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'us-east4',
        serviceName: 'Cloud SQL',
        usageType:
          'Cloud SQL for PostgreSQL: Regional - Standard storage in Northern Virginia',
        usageUnit: 'byte-seconds',
        vCpus: null,
        usageAmount: 6.57129996288e14,
        cost: 80,
        machineType: null,
      },
      {
        timestamp: bigQueryDateTwo,
        accountId: accountId,
        accountName: accountName,
        region: 'asia-south1',
        serviceName: 'Cloud SQL',
        usageType: 'Storage PD SSD for HA Postgres DB in Mumbai',
        usageUnit: 'byte-seconds',
        vCpus: null,
        usageAmount: 987654321,
        cost: 80,
        machineType: null,
      },
    ],
  ]

export const mockQueryMemoryStoreWithReplicationFactors: any[][] = [
  [
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-central1',
      serviceName: 'Cloud Memorystore for Redis',
      usageType: 'Redis Capacity Basic M1 Iowa/South Carolina/Oregon',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 9.27712935936e13,
      cost: 170,
      machineType: null,
    },
    {
      timestamp: bigQueryDateTwo,
      accountId: accountId,
      accountName: accountName,
      region: 'us-central2',
      serviceName: 'Cloud Memorystore for Redis',
      usageType: 'Redis Capacity Standard M1 Belgium',
      usageUnit: 'byte-seconds',
      vCpus: null,
      usageAmount: 9.27712935936e13,
      cost: 170,
      machineType: null,
    },
  ],
]
