import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import RiddlesPage from "./humour/riddles"
import KnockKnockPage from "./humour/knockknock"
import TrueLiesPage from "./humour/truelies"
import HighTechPage from "./humour/hitech"

import "./humour.css";

function HumourPage()
{
  return (
    <main>
      <h2>My (Admittedly Dated) Humour Collection</h2>

      <Tabs disableUpDownKeys={true}>
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
    </main>
  );
}

export default HumourPage;
