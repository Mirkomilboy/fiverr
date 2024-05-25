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