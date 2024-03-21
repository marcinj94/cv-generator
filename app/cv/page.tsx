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

  // eslint-disable-next-line no-console
  console.log('tst:', tst);

  return (
    <section
      style={{
        maxWidth: 1366, // 1366 np
        margin: '0 auto',
        backgroundColor: '#00bfff30',
      }}
    >
      <div className="pt-4 flex items-center justify-around">
        <Avatar initials="MJ" size="lg" />
        <div>
          <Name name="Marcin" surname="Jusiak" size="lg" />
          <Profession title="Front-end developer" size="lg" />
        </div>
      </div>
      <div className="pt-4 flex items-top justify-between">
        <ContactDetails
          mail="marcin.jusiak@gmail.com"
          linkedin="Marcin Jusiak"
          github="marcinj94"
          phone="+48 501 549 262"
        />
        <div className="basis-2/3">
          <Education educations={educations} />
        </div>
      </div>
      <div className="pt-4 flex gap-8 items-top justify-between">
        <div className="basis-4/5">
          <Experience jobs={jobs} />
        </div>
        <div className="basis-2/3">
          <div className="test">
            <Technologies technologies={technologies} />
            <Projects projects={projects} />
          </div>
        </div>
      </div>
      <div className="pt-4 flex items-top justify-between">
        <Languages languages={languages} />
        <div className="basis-2/3">
          <Hobby hobby={hobbys} />
        </div>
      </div>
      <Clause description="„Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb rekrutacji (zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).”" />
    </section>
  );
};

export default Cv;
