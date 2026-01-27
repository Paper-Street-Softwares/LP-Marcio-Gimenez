import Paragraphs from '../sectionElements/Paragraphs'
import SectionArea from '../sectionElements/SectionArea'
import SectionTitles from '../sectionElements/SectionTitles'
import SectionWrapper from '../sectionElements/SectionWrapper'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import content from '../../content/content'
import Button from '../interactives/Button'
import SectionHeader from '../sectionElements/SectionHeader'
import HowItWorksCard from '../cards/HowItWorksCard'
import WhatsappForm from '../interactives/WhatsappForm'

export default function FormAndLocation({ colorMode, paddingTop, className }) {
  const [visible, setVisible] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  return (
    <SectionArea className="bg-bgSectionDark" id="maps" paddingtop={paddingTop}>
      <SectionWrapper
        className={`flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between desktop1:items-center ${className}`}
      >
        <MotionDivDownToUp className="flex-col w-full flex justify-center items-center ">
          <SectionHeader
            className="text-center"
            // miniTitle={content.texts.blog.miniTag}
            sectionHeaderTitle={content.texts.contato.title}
            sectionHeaderSubtitle={content.texts.contato.subtitle}
            color=""
            miniTitleBgColor={false}
            miniTitleTextColor="text-white"
            subtitleColorSet="text-white/60"
            titleColorSet="text-white"
          />
          <WhatsappForm />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  )
}
