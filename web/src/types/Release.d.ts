/*
 * Copyright (c) 2021 - 2025, Ludvig Lundgren and the autobrr contributors.
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

interface Release {
  id: number;
  filter_status: string;
  rejections: string[];
  indexer: IndexerMinimal;
  filter: string;
  protocol: string;
  implementation: string;
  announce_type: string;
  name: string;
  title: string;
  size: number;
  raw: string;
  info_url: string;
  download_url: string;
  category: string;
  group: string;
  season: number;
  episode: number;
  year: number;
  resolution: string;
  codec: string;
  source: string;
  container: string;
  hdr: string;
  uploader: string;
  origin: string;
  // freeleech: boolean;
  // freeleech_percent:number;
  timestamp: Date
  action_status: ReleaseActionStatus[]
}

interface ReleaseActionStatus {
  id: number;
  status: string;
  action: string;
  action_id: number;
  type: string;
  client: string;
  filter: string;
  filter_id: number;
  release_id: number;
  rejections: string[];
  timestamp: string
}

interface ReleaseFindResponse {
  data: Release[];
  next_cursor: number;
  count: number;
}

interface ReleaseStats {
  total_count: number;
  filtered_count: number;
  filter_rejected_count: number;
  push_approved_count: number;
  push_rejected_count: number;
  push_error_count: number;
}

interface ReleaseFilter {
  id: string;
  value: string;
}

interface DeleteParams {
  olderThan?: number;
  indexers?: string[];
  releaseStatuses?: string[];
}

interface ReleaseProfileDuplicate {
  id: number;
  name: string;
  protocol: boolean;
  release_name: boolean;
  hash: boolean;
  title: boolean;
  sub_title: boolean;
  year: boolean;
  month: boolean;
  day: boolean;
  source: boolean;
  resolution: boolean;
  codec: boolean;
  container: boolean;
  dynamic_range: boolean;
  audio: boolean;
  group: boolean;
  season: boolean;
  episode: boolean;
  website: boolean;
  proper: boolean;
  repack: boolean;
  edition: boolean;
  language: boolean;
}
