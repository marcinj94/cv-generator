/* eslint-disable object-curly-newline */
import {
  Avatar,
  Clause,
  ContactDetails,
  Education,
  Experience,
  Hobby,
  Languages,
  Name,
  Profession,
  Projects,
  Technologies,
} from '../components';
import { educations, hobbys, jobs, languages, projects, technologies } from './mock';

const Cv = () => {
  const tst = 1;

  // helper with generate PDF - https://harrisonpim.com/blog/creating-a-downloadable-pdf-copy-of-a-page-using-next-js-and-puppeteer
  // eslint-disable-next-line no-console
  console.log('tst:', tst);

  return (
    <section className="max-w-screen-xl mx-auto my-4">
      <div className="mb-2 flex items-center justify-around">
        <Avatar initials="MJ" size="lg" />
        <div>
          <Name name="Marcin" surname="Jusiak" size="lg" />
          <Profession title="Front-end developer" size="lg" />
        </div>
      </div>
      <div className="mb-4 grid grid-cols-[1fr_55%] gap-x-6 items-end">
        <ContactDetails
          mail="marcin.jusiak@gmail.com"
          linkedin="Marcin Jusiak"
          github="marcinj94"
          phone="+48 501 549 262"
          webSite="https://mjusiak.pl"
        />
        <Education educations={educations} />
      </div>
      <div
        className="grid grid-cols-2 gap-x-6 gap-y-4"
        style={{
          gridTemplateAreas: `
          'experience technologies'
          'experience projects'
          'languages hobby'
          'clause clause'
        `,
        }}
      >
        <div style={{ gridArea: 'experience' }}>
          <Experience jobs={jobs} />
        </div>
        <div style={{ gridArea: 'technologies' }}>
          <Technologies technologies={technologies} />
        </div>
        <div style={{ gridArea: 'projects' }}>
          <Projects projects={projects} />
        </div>
        <div style={{ gridArea: 'languages' }}>
          <Languages languages={languages} />
        </div>
        <div style={{ gridArea: 'hobby' }}>
          <Hobby hobby={hobbys} />
        </div>
        <div style={{ gridArea: 'clause' }}>
          <Clause description="„Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb rekrutacji (zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).”" />
        </div>
      </div>
    </section>
  );
};

export default Cv;
