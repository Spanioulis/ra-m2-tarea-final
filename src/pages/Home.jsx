import { Map } from '../components/atoms'
import { Body } from '../components/layout'
import { Houses } from '../components/organisms'
import { FlexBox } from '../styles'

function Home() {
  return (
    <Body>
      <FlexBox direction="row" justify="space-between">
        <Houses />
        <Map />
      </FlexBox>
    </Body>
  )
}

export default Home
