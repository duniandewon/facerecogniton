import { ref } from 'vue'
import { defineStore } from 'pinia'

import type Clarifai from '@/types/clarifai'

const useClarifyStore = defineStore('clarifai', () => {
  const regions = ref<Clarifai[]>()

  const calculateFaceLocations = (width: number, height: number) => {
    return regions.value?.map(({ region_info: { bounding_box } }) => ({
      width: (bounding_box.right_col - bounding_box.left_col) * width + 'px',
      height: (bounding_box.bottom_row - bounding_box.top_row) * height + 'px',
      top: bounding_box.top_row * height + 'px',
      left: bounding_box.left_col * width + 'px'
    }))
    // return regions.value?.map(({ region_info: { bounding_box } }) => ({
    //   left_col: bounding_box.left_col * width,
    //   top_row: bounding_box.top_row * height,
    //   right_col: width - bounding_box.right_col * width,
    //   bottom_row: height - bounding_box.bottom_row * height,
    // }))
  }

  return { calculateFaceLocations, regions }
})

export default useClarifyStore
