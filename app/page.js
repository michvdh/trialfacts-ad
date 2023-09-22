import Image from "next/image";
import Map from "@/components/Map";
import Questionnaire from "@/components/Questionnaire";

export default function Home() {
  return (
    <main className="font-serif flex min-h-screen flex-col gap-12 my-20 2xl:flex-row 3xl:w-[1408px]">
      <div className="flex flex-col gap-10">
        <header className="border-b pb-10 2xl:ml-20">
          <h1 className="text-dark-blue font-bold font-sans text-4xl px-8 md:px-20 2xl:px-0">
            Have You Noticed a Decline in Your Memory? Exercise May Help
          </h1>
        </header>
        <section className="flex flex-col gap-5 px-8 md:px-20 2xl:pr-0">
          <ul className="flex flex-col gap-y-2">
            <li>
              <strong className="font-sans">Research Centre:</strong> The
              University of Sydney
            </li>
            <li>
              <strong className="font-sans">Location:</strong> Cumberland
              Campus, The University of Sydney, 75 East St Lidcombe, NSW
            </li>
            <li>
              <strong className="font-sans">Lead Doctor:</strong> Dr. Maria
              Fiatarone Singh
            </li>
            <li>
              <strong className="font-sans">Ethics Committee:</strong> This
              study has been reviewed and approved by The University of Sydney
              Human Research Ethics Committee
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-5 px-8 md:px-20 2xl:pr-0">
          <h2 className="font-bold text-2xl font-sans">Background</h2>
          <div>
            <div className="relative w-full h-48 2xs:h-60 sm:h-96 lg:w-1/2 2xl:w-3/5 mb-8 drop-shadow-lg lg:float-right lg:ml-8">
              <Image
                src="/images/stock-image.PNG"
                fill
                objectFit="cover"
                alt="Senior exercising"
              />
            </div>

            <p className="mb-4">
              Mild Cognitive Impairment (MCI) causes a slight but noticeable
              decline in mental abilities, such as memory loss and impaired
              thinking. People with MCI have a much higher risk of going on to
              develop dementia.
            </p>
            <p className="mb-4">
              Previous research has shown that regular exercise may help improve
              brain health and prevent dementia. This study is comparing the
              effectiveness of three different kinds of exercise on memory and
              thinking abilities.
            </p>
            <p className="mb-4">
              This study seeks men and women aged 60+ who have noticed a slight
              decline in their memory and/or other mental abilities.
              Participants will be randomly assigned to one of three different
              exercise training groups: a) Strength training group, b) Aerobic
              training group, or c) Balance, toning & mobility training group.
              Participants will be invited to attend 3 supervised exercise
              sessions per week for 12 months at the research site in Lidcombe.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-5 px-8 md:px-20 2xl:pr-0">
          <h2 className="font-bold text-2xl font-sans">
            Benefits to Participation
          </h2>
          <ul className="list-disc ml-8">
            <li>
              You may experience an improvement in your memory and other aspects
              of your physical and mental well-being
            </li>
            <li>
              You will receive supervised exercise training sessions 3 days per
              week for 1 year at no cost to yourself.
            </li>
            <li>
              You will receive a comprehensive geriatric assessment by the study
              physician and research team, including a physical examination,
              stress test, bone scan, MRI scan of your brain, metabolic and
              cardiovascular health profile, evaluation of your nutritional
              status, fitness assessment, fall risk assessment, and full
              evaluation of your cognitive function.
            </li>
            <li>You receive free parking at the research site. </li>
            <li>You will be helping to advance medical research.</li>
          </ul>
        </section>
        <section className="flex flex-col gap-5 px-8 md:px-20 2xl:pr-0">
          <h2 className="font-bold text-2xl font-sans">Your Rights</h2>
          <ul className="list-disc ml-8">
            <li>
              If you decide to participate in the study and later feel that you
              no longer wish to be part of it, you may withdraw at any time.
            </li>
            <li>
              Your records relating to this study and any other information
              received will be kept strictly confidential, except as required by
              the law.
            </li>
            <li>
              Qualified health professionals will monitor your health as it
              relates to the study.
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-5 px-8 md:px-20 2xl:pr-0">
          <h2 className="font-bold text-2xl font-sans">Who Can Participate?</h2>
          <p>Men and women aged 60+ years old who:</p>
          <ul className="list-disc ml-8">
            <li>
              Have noticed a slight decline in their memory and/or other mental
              abilities
            </li>
            <li>
              <u>Have not</u> been diagnosed with dementia or a progressive
              neurological disease (such as Parkinson’s Disease)
            </li>
            <li>
              Are able to walk without the assistance of another person (use of
              assistive device is fine)
            </li>
            <li>
              <u>Do not</u> exercise more than 2.5 hours per week at moderate or
              vigorous intensity
            </li>
            <li>
              Are able to attend 3 exercise sessions per week at the research
              site over 12 months
            </li>
            <li>
              Do not plan to be away for 4 or more <u>consecutive weeks</u> over
              the next 12 months, and are not planning to move.
            </li>
          </ul>
        </section>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row 2xl:flex-col 2xl:justify-normal px-8 md:px-20 2xl:pl-0 2xl:pr-20">
        <Questionnaire />
        <Map />
      </div>
    </main>
  );
}
