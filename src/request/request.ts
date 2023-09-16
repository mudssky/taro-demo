import Taro from "@tarojs/taro";

// 封装后端返回值类型
export type ResponseData<T = any> = {
  code: string | number;
  msg: string;
  data: T;
};

export interface CustomRequestOptions extends Taro.request.Option {
  baseURL?: string;
  requestInterceptors?: (config: CustomRequestOptions) => boolean;
  responseInterceptors?: (res: Taro.request.SuccessCallbackResult<any>) => any;
  showLoading?: boolean;
}

export class Request {
  private baseURL = process.env.TARO_APP_BASEURL;
  // 默认配置
  private baseConfig = {
    // timeout: 5000,
    // withCredentials: true,
  };
  private baseHeader = {
    // Authorization: uni.getStorageSync('NEWTOKEN'),
  };
  private _config: Partial<CustomRequestOptions>;

  // 覆盖默认配置
  constructor(config: Partial<CustomRequestOptions>) {
    this._config = Object.assign(this.baseConfig, config);
    // console.log('baseUrl', this.baseURL)
    // console.log('wenrul', webServiceURL);

    if (config.baseURL) {
      this.baseURL = config.baseURL;
    }
    if (config.responseInterceptors) {
      this.responseInterceptors = config.responseInterceptors;
    }
  }

  // 返回false表示不进行请求
  private requestInterceptors(config: CustomRequestOptions): boolean {
    return true;
  }

  private responseInterceptors(
    res: Taro.request.SuccessCallbackResult<any>
  ): unknown {
    const data = res.data as ResponseData;
    if (data?.code !== 0) {
      return null;
    }
    return data;
  }
  // 定义核心请求
  public async request(config: CustomRequestOptions): Promise<any> {
    //   拦截器拦截时，不发生请求
    if (!this.requestInterceptors(config)) {
      return;
    }

    return new Promise((resolve, reject) => {
      Taro.request({
        ...config,
        url: encodeURI(config.url),
        header: {
          ...this.baseHeader,
          // Authorization: getAuthToken(),
          ...config.header,
        },
        success: (res) => {
          const data = this.responseInterceptors(res);
          if (data) {
            console.log(
              `%c${config.url}`,
              "background:#2d8cf0; padding: 2px; border-radius: 4px;color: #fff;",
              res.data,
              {
                res,
              }
            );
            return resolve(data);
          }
        },
        fail: (res) => {
          return reject(res);
        },
        complete: () => {},
      });
    });
  }

  public async get<T = any>(
    url: string,
    config?: Omit<CustomRequestOptions, "url">
  ): Promise<ResponseData<T>> {
    return this.request({
      url: this.baseURL + url,
      method: "GET",
      ...config,
    });
  }

  public async post<T = any>(
    url: string,
    data?: any,
    config?: CustomRequestOptions
  ): Promise<ResponseData<T>> {
    return this.request({
      url: this.baseURL + url,
      method: "POST",
      data: data,
      ...config,
    });
  }
  public async delete<T = any>(
    url: string,
    data?: any,
    config?: CustomRequestOptions
  ): Promise<ResponseData<T>> {
    return this.request({
      url: this.baseURL + url,
      method: "DELETE",
      data: data,
      ...config,
    });
  }

  public async put<T = any>(
    url: string,
    data?: any,
    config?: CustomRequestOptions
  ): Promise<ResponseData<T>> {
    return this.request({
      url: this.baseURL + url,
      method: "PUT",
      data: data,
      ...config,
    });
  }
}

export default new Request({});
