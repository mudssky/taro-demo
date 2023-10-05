export interface MeetingRoomRes {
  id: number
  attributes: {
    building_num: string
    floor_num: string
    capacity: number
    cover: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: string
          caption: string
          width: number
          height: number
          formats: string
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: string
          provider: string
          provider_metadata: string
          related: { data: { id: number; attributes: {} }[] }
          folder: {
            data: {
              id: number
              attributes: {
                name: string
                pathId: number
                parent: { data: { id: number; attributes: {} } }
                children: { data: { id: number; attributes: {} }[] }
                files: {
                  data: {
                    id: number
                    attributes: {
                      name: string
                      alternativeText: string
                      caption: string
                      width: number
                      height: number
                      formats: string
                      hash: string
                      ext: string
                      mime: string
                      size: number
                      url: string
                      previewUrl: string
                      provider: string
                      provider_metadata: string
                      related: { data: { id: number; attributes: {} }[] }
                      folder: { data: { id: number; attributes: {} } }
                      folderPath: string
                      createdAt: string
                      updatedAt: string
                      createdBy: {
                        data: {
                          id: number
                          attributes: {
                            firstname: string
                            lastname: string
                            username: string
                            email: string
                            resetPasswordToken: string
                            registrationToken: string
                            isActive: boolean
                            roles: {
                              data: {
                                id: number
                                attributes: {
                                  name: string
                                  code: string
                                  description: string
                                  users: {
                                    data: { id: number; attributes: {} }[]
                                  }
                                  permissions: {
                                    data: {
                                      id: number
                                      attributes: {
                                        action: string
                                        subject: string
                                        properties: string
                                        conditions: string
                                        role: {
                                          data: {
                                            id: number
                                            attributes: {}
                                          }
                                        }
                                        createdAt: string
                                        updatedAt: string
                                        createdBy: {
                                          data: {
                                            id: number
                                            attributes: {}
                                          }
                                        }
                                        updatedBy: {
                                          data: {
                                            id: number
                                            attributes: {}
                                          }
                                        }
                                      }
                                    }[]
                                  }
                                  createdAt: string
                                  updatedAt: string
                                  createdBy: {
                                    data: { id: number; attributes: {} }
                                  }
                                  updatedBy: {
                                    data: { id: number; attributes: {} }
                                  }
                                }
                              }[]
                            }
                            blocked: boolean
                            preferedLanguage: string
                            createdAt: string
                            updatedAt: string
                            createdBy: {
                              data: { id: number; attributes: {} }
                            }
                            updatedBy: {
                              data: { id: number; attributes: {} }
                            }
                          }
                        }
                      }
                      updatedBy: { data: { id: number; attributes: {} } }
                    }
                  }[]
                }
                path: string
                createdAt: string
                updatedAt: string
                createdBy: { data: { id: number; attributes: {} } }
                updatedBy: { data: { id: number; attributes: {} } }
              }
            }
          }
          folderPath: string
          createdAt: string
          updatedAt: string
          createdBy: { data: { id: number; attributes: {} } }
          updatedBy: { data: { id: number; attributes: {} } }
        }
      }
    }
    createdAt: string
    name: string
    updatedAt: string
    publishedAt: string
    createdBy: { data: { id: number; attributes: {} } }
    updatedBy: { data: { id: number; attributes: {} } }
    localizations: { data: string[] }
    locale: string
  }
}

export type MeetingRoomRecord = {
  id: number
  attributes: {
    date: string
    startTime: string
    endTime: string
    remark: string
    createdAt: string
    updatedAt: string
    meeting_room?: { data: MeetingRoomRes }
  }
}
