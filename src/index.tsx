import { createRoot } from 'react-dom/client'

import tripleLogoImageUrl from '@assets/images/triple2x.png'
import playStoreImageUrl from '@assets/images/play-store2x.png'
import appleBadgeImageUrl from '@assets/images/badge-apple4x.png'
import GlobalStyles from '@styles/global-styles'
import {
  SectionContainer,
  SectionLogoContainer,
  SectionContentContainer,
} from '@components/section'
import TextWithBackgroundImage from '@components/text-with-background-image'
import {
  MetricCounter,
  MetricCounterContainer,
} from '@components/metric-counter'
import AwardsContainer from '@components/awards-container'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <GlobalStyles />
    <SectionContainer>
      <SectionLogoContainer>
        <TextWithBackgroundImage
          imageUrl={tripleLogoImageUrl}
          backgroundSize="400px 338px"
          width="400px"
          height="338px"
          padding="280px 0px 0px 0px"
          fontSize="15px"
          textAlign="center"
          color="rgba(58, 58, 58, 0.7)"
        >
          2019년 2월 기준
        </TextWithBackgroundImage>
      </SectionLogoContainer>
      <SectionContentContainer>
        <MetricCounterContainer>
          <MetricCounter unit="만 명" description="의 사용자" />
          <MetricCounter unit="만 개" description="의 리뷰" />
          <MetricCounter unit="만 개" description="의 저장" />
        </MetricCounterContainer>
        <AwardsContainer>
          <TextWithBackgroundImage
            imageUrl={playStoreImageUrl}
            backgroundSize="54px 54px"
            height="54px"
            padding="5px 0px 5px 62px"
            fontSize="14px"
            fontWeight={700}
            color="rgba(58, 58, 58, 0.8)"
            lineHeight="22px"
          >
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </TextWithBackgroundImage>
          <TextWithBackgroundImage
            imageUrl={appleBadgeImageUrl}
            backgroundSize="54px 54px"
            height="54px"
            padding="5px 0px 5px 62px"
            fontSize="14px"
            fontWeight={700}
            color="rgba(58, 58, 58, 0.8)"
            lineHeight="22px"
          >
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </TextWithBackgroundImage>
        </AwardsContainer>
      </SectionContentContainer>
    </SectionContainer>
  </>,
)
