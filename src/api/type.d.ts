export type PaginationAPI = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type MetaAPI = {
  pagination: PaginationAPI
}

export type PagiResponseType<T> = {
  data: T[]
  meta: MetaAPI
}

export type ResponseType<T> = {
  data: T
  meta: MetaAPI
}
