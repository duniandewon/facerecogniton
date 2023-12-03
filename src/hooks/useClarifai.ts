import type Clarifai from '@/types/clarifai'

const config = {
  PAT: '70d5325606f141fc9c704aace912876a',
  USERID: 'clarifai',
  APPID: 'main',
  MODELID: 'face-detection',
  MODELVERSIONID: '6dc7e46bc9124c5c8824be4822abe105'
}

function useClarify() {
  const { APPID, MODELID, MODELVERSIONID, PAT, USERID } = config

  const detectFace = async (imageUrl: string): Promise<Clarifai[] | null> => {
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USERID,
        app_id: APPID
      },
      inputs: [
        {
          data: {
            image: {
              url: imageUrl
            }
          }
        }
      ]
    })

    const reqOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Key ' + PAT
      },
      body: raw
    }

    try {
      const response = await fetch(
        `https://api.clarifai.com/v2/models/${MODELID}/versions/${MODELVERSIONID}/outputs`,
        reqOptions
      )

      const result = await response.json()

      return result.outputs[0].data.regions
    } catch (error) {
      console.log('clirifai error: ', error)
      return null
    }
  }

  return { detectFace }
}

export default useClarify
