import FAQs from "./components/FAQs";
import HabituizzeLanding from "./components/HabitualizeLanding";
import ReportBug from "./components/ReportBug";
import UserGuide from "./components/UserGuide";

export default function Home() {
  return <>
    <div id="home"><HabituizzeLanding /></div>
    <div id="user-guide"><UserGuide /></div>
    <div id="faqs"><FAQs /></div>
    <div id="report-bug"><ReportBug /></div>
  </>;
}
