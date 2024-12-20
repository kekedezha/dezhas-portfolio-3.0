import type { Metadata } from 'next';
import { Navigation } from '../components/nav';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work experience',
};

export default function WorkPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto prose prose-neutral dark:prose-invert">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">RoviSys Building Technologies</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Systems Engineer I / II, Project Engineer, Project Manager <br />
          2019 - Current
          <br />
          <br />
          Technologies: Allen-Bradley PLCs, Siemens PLCs, Rockwell Automation Software (FactoryTalk SE & FactoryTalk Historian SE),
          Inductive Automation Software (Ignition), Networking - Cisco Switches, Various Sensors and Equipment
        </p>
        <p></p>
        <p>
          I joined <a href="https://www.rovisys.com/automation/building-automation/">RoviSys Building Technologies</a>
          , a systems integrator, right out of grad school where I worked on projects primary focused on mission-critical applications in
          the DataCenter realm both domestically and internationally.
        </p>
        <p></p>
        <p>
          <b>Systems Engineer I / II:</b> BMS Controls for mission-critical DataCenter Operations
        </p>
        <ul>
          <li>
            <b>PLC:</b>
            <ul>
              <li>
                Expertise in Rockwell/Allen-Bradley PLC Programming
              </li>
              <li>
                Competent in Siemens PLC Programming
              </li>
              <li>
                Code development, configuration and optimization of
                PLC logic and control components
              </li>
              <li>
                Developed and Integrated UI/UX Systems using Rockwell FactoryTalk and Ignition to
                visualize live data of equipment
              </li>
            </ul>
          </li>
          <li>
            <b>Systems Integration:</b>
            <ul>
              <li>
                Integrating automation technologies, sensors and equipment with PLC Systems in
                Mission-Control environments
              </li>
              <li>
                Developed BMS Network Infrastructure
              </li>
              <li>
                Ensuring smooth communications between various control systems for an integrated BMS solution
              </li>
            </ul>

          </li>
          <li>
            <b>Continuous Improvement:</b>
            <ul>
              <li>
                Identifying problems and implementing solutions for process optimization and efficiency improvements
              </li>
              <li>
                Apart of client&#39;s Standards team, monitoring code and automation process for continuous improvement
              </li>
            </ul>
          </li>
          <li>
            <b>Troubleshooting and Maintenance:</b>
            <ul>
              <li>
                Diagnosed and resolved issues related to PLC systems automation technologies, sensors and
                equipment, minimizing downtime and ensuring continuous operation
              </li>
              <li>
                Conducted regular maintenance activities to prevent system failures.
              </li>
            </ul>
          </li>
          <li>
            <b>Documentation:</b>
            <ul>
              <li>
                Maintained accurate documentation for PLC programs, configurations, and system/network architecture
              </li>
              <li>
                Created user manuals and training materials to facilitate system understanding and operation
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <b>Project Engineer / Project Manager:</b> Filled in as Project Engineer and Project Manager across various projects for mission-critical DataCenter Operations
        </p>
        <ul>
          <li>
            Collaborated with clients domestically and at an international level
          </li>
          <li>
            Provided scheduling to clients, updated on a weekly basis to ensure project organization and flow
          </li>
          <li>
            Scheduled and coordinated meetings to address roadblocks and/or potential holdups
          </li>
          <li>
            Communicated internally with teams and individuals on a daily basis to ensure project expectations being upheld
            and individual fulfillment on a professional level
          </li>
          <li>
            Administered and assisted in project finances/forecasting to ensure and maximize profit
          </li>
        </ul>
      </div>
    </div>
  );
}