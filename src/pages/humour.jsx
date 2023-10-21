import { Fragment } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import RiddlesPage from "./humour/riddles"
import KnockKnockPage from "./humour/knockknock"
import TrueLiesPage from "./humour/truelies"
import HighTechPage from "./humour/hitech"

import 'react-tabs/style/react-tabs.css';

function HumourPage()
{
  return (
    <Fragment>
      <Tabs>
        <TabList>
          <Tab>Riddles</Tab>
          <Tab>Knock Knock!</Tab>
          <Tab>True Lies</Tab>
          <Tab>Hi, Tech!</Tab>
        </TabList>

        <TabPanel>
          <RiddlesPage />
        </TabPanel>
        <TabPanel>
          <KnockKnockPage />
        </TabPanel>
        <TabPanel>
          <TrueLiesPage />
        </TabPanel>
        <TabPanel>
          <HighTechPage />
        </TabPanel>
      </Tabs>
    </Fragment>
  )
}

export default HumourPage;
