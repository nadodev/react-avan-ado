export interface httpPostParams {
  url: string
}
export interface HttpPostClient {
  post (params: httpPostParams): Promise<void>
}
