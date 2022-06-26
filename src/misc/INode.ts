export interface INode {
  id: number | string,
  label?: string,
  shape?: 'image',
  image?: string,
  color?: string,
  hiddenLabel?: string,
}
