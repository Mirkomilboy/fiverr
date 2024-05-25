export interface TypeI {
  title: string,
  data: {
    id: number,
    name: string,
    total: number
  }[]
}

export interface TypeRadioI {
  title: string,
  data: {
    id: number,
    name: string,
    subname: string
  }[]
}

export interface cardI {
  like: boolean,
  videoLink: string | null,
  imgLink: string | null
}

export type statusType = 'one' | 'two' | 'three' | 'pro' | 'new' | 'choose'
export interface cardDataI {
  name: string,
  imgUrl: string,
  status: statusType,
  text: string,
  rating: string,
  totalJob: string,
  fromPrice: string
}