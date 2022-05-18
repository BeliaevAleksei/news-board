export interface INews {
  Title: string
  ShortContent: string
  Content: string
  Tag?: TAG
  Images: string[]
  Template: TEMPLATE
  Approver: string
  Created: Date | null
  Creator: string
  StartDate: Date | null
  EndDate: Date | null
  Status: 'idle' | 'loading' | 'failed'
}

export enum TAG {
  Hot = 'Горячо',
  Vk = 'Vk',
  Instagram = 'Instagram',
  Weekly = 'Еженедельно'
}

export enum TEMPLATE {
  Text = 'Text',
  ImageWithTitle = 'ImageWithTitle',
  Image = 'Image',
  ImageWithText = 'ImageWithText'
}
