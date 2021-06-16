/*
 * © 2021 ThoughtWorks, Inc.
 */

import { GCP_CLOUD_CONSTANTS } from '../domain'
import { GCP_DUAL_REGIONS, GCP_MULTI_REGIONS } from './GCPRegions'

enum SERVICES {
  CLOUD_STORAGE = 'Cloud Storage',
  COMPUTE_ENGINE = 'Compute Engine',
  CLOUD_FILESTORE = 'Cloud Filestore',
  CLOUD_SQL = 'Cloud SQL',
  CLOUD_MEMORYSTORE_FOR_REDIS = 'Cloud Memorystore for Redis',
}

type ReplicationFactorsForService = {
  [key: string]: (usageType?: string, region?: string) => number
}

export const REPLICATION_FACTORS_FOR_SERVICES: ReplicationFactorsForService = {
  [SERVICES.CLOUD_STORAGE]: (usageType: string): number => {
    if (usageType.includes('Dual-region'))
      return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS.CLOUD_STORAGE_DUAL_REGION
    if (usageType.includes('Multi-region')) {
      return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS.CLOUD_STORAGE_MULTI_REGION
    }
    return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS.CLOUD_STORAGE_SINGLE_REGION
  },
  [SERVICES.COMPUTE_ENGINE]: (usageType: string, region?: string): number => {
    if (usageType.includes('Regional'))
      return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS
        .COMPUTE_ENGINE_REGIONAL_DISKS // 2
    if (containsAny(['Snapshot', 'Image'], usageType)) {
      if (Object.values(<any>GCP_MULTI_REGIONS).includes(region))
        return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS
          .CLOUD_STORAGE_MULTI_REGION
      if (Object.values(<any>GCP_DUAL_REGIONS).includes(region))
        return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS.CLOUD_STORAGE_DUAL_REGION
      return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS.CLOUD_STORAGE_SINGLE_REGION
    }
  },
  [SERVICES.CLOUD_FILESTORE]: (): number => {
    return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS.CLOUD_FILESTORE
  },
  [SERVICES.CLOUD_SQL]: (usageType: string): number => {
    if (
      usageType.includes('Regional - Standard storage') ||
      usageType.includes('HA')
    )
      return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS.CLOUD_SQL_HIGH_AVAILABILITY
  },
  [SERVICES.CLOUD_MEMORYSTORE_FOR_REDIS]: (usageType: string): number => {
    if (usageType.includes('Standard'))
      return GCP_CLOUD_CONSTANTS.REPLICATION_FACTORS.CLOUD_MEMORY_STORE_REDIS
  },
}

const containsAny = (substrings: string[], stringToSearch: string): boolean => {
  return substrings.some((substring) =>
    new RegExp(`\\b${substring}\\b`).test(stringToSearch),
  )
}