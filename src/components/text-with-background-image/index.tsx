import styled from 'styled-components'
import { Property } from 'csstype'

const TextWithBackgroundImage = styled.p<{
  imageUrl: string
  width?: Property.Width
  height?: Property.Height
  padding?: Property.Padding
  backgroundSize?: Property.BackgroundSize
  textAlign?: Property.TextAlign
  color?: Property.Color
  fontSize?: Property.FontSize
  fontWeight?: Property.FontWeight
  lineHeight?: Property.LineHeight
}>((props) => ({
  backgroundImage: `url(${props.imageUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: props.backgroundSize,
  width: props.width,
  height: props.height,
  padding: props.padding,
  textAlign: props.textAlign,
  color: props.color,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  lineHeight: props.lineHeight,
}))

export default TextWithBackgroundImage
