interface Concept {
  app_id: string
  id: string
  name: string
  value: number
}

interface RegionInfo {
  bounding_box: BoundingBox
}

interface BoundingBox {
  bottom_row: number
  left_col: number
  right_col: number
  top_row: number
}

export default interface Clarifai {
  id: string
  concepts: Concept[]
  value: number
  region_info: RegionInfo
}

export interface Box {
  width: string
  height: string
  top: string
  left: string
}
