export type WithApiData<Entity> = {
  data: Entity
}

export type ApiMetadata = {
  msg: string
  status: number
  response_id: string
}

export type WithApiMetadata = {
  meta: ApiMetadata
}
