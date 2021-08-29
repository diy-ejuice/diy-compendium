import PropTypes from 'prop-types';
import { Container, Row, Col, Table } from 'react-bootstrap';

import SEO from '~components/seo';
import Layout from '~components/layout';

const Icon = (props) => {
  let icon = '',
    text = '';
  const label = props.variant;

  switch (props.variant) {
    case 'yes':
      icon = '✅';
      text = 'Recommended';
      break;
    case 'maybe':
      icon = '❓';
      text = 'Optional';
      break;
    case 'no':
      icon = '❌';
      text = 'Not Required';
      break;
    default:
      break;
  }

  return (
    <span role="img" aria-label={label}>
      {icon} - {text}
    </span>
  );
};

Icon.propTypes = {
  variant: PropTypes.string.isRequired
};

const NicotineSafetyPage = () => (
  <Layout>
    <SEO title="Safety" />
    <Container className="mt-5">
      <Row>
        <Col md="12">
          <h1 className="mb-2">
            Nicotine Safety{' '}
            <small className="text-muted">by /u/TeslaDelMar</small>
          </h1>
          <p>
            This guide is intended to give an overview of nicotine safety and
            handling procedures. It is not a substitute for experience working
            with hazardous chemicals, but it should contain all of the
            information you need in order to be reasonably safe working with
            various concentrations of nicotine.
          </p>
          <h3>Background</h3>
          <p>
            Nicotine is a toxic alkaloid which can be fatal when ingested in
            relatively small doses. A common saying in toxicology is &quot;the
            dose makes the poison.&quot; Everything is poisonous when you put
            enough of it into your body, it&apos;s just a matter of degree.
          </p>
          <p>
            Therefore, the single most important factor in making all of your
            safety decisions should be the strength of the nicotine you are
            working with. Working with 500mg/mL base requires substantial
            additional investments in equipment and training that are not needed
            when working with 250mg/mL, and the same is true of 250 and 50.
            Unfortunately for us, even nicotine that is &quot;low-strength&quot;
            by mixing standards is quite toxic compared to most compounds in our
            daily lives. As little as 30mg can be fatal.
          </p>
          <h3>Equipment</h3>
          <p>
            The table below summarizes recommended personal protective equipment
            (PPE) based on the concentration of the nicotine you are handling.
          </p>
          <Table striped className="my-5">
            <thead>
              <tr>
                <th>Concentration</th>
                <th>Eyewear</th>
                <th>Gloves</th>
                <th>Respirator/Ventilation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-100 mg/mL</td>
                <td>
                  <Icon variant="yes" />
                </td>
                <td>
                  <Icon variant="maybe" />
                </td>
                <td>
                  <Icon variant="no" />
                </td>
              </tr>
              <tr>
                <td>101-250 mg/mL</td>
                <td>
                  <Icon variant="yes" />
                </td>
                <td>
                  <Icon variant="yes" />
                </td>
                <td>
                  <Icon variant="maybe" />
                </td>
              </tr>
              <tr>
                <td>251+ mg/mL</td>
                <td>
                  <Icon variant="yes" />
                </td>
                <td>
                  <Icon variant="yes" />
                </td>
                <td>
                  <Icon variant="yes" />
                </td>
              </tr>
            </tbody>
          </Table>
          <p>
            You may find yourself thinking, &quot;I&apos;ve mixed 100mg/mL
            nicotine without gloves before and I was fine.&quot; Consider every
            deviation from the safety procedure as a calculated risk. Skipping
            the gloves might be fine 9/10 times, but we&apos;re trying to
            prepare for the one time when something does go wrong.
          </p>
          <p>
            Eyewear is always required when working with nicotine because the
            surface of your eye is more sensitive to and better at absorbing
            nicotine than your skin. Nicotine can blind you without killing you.
            A pair of safety glasses can cost as little as $5 - well worth it
            for the nearly complete eye protection they afford.
          </p>
          <p>
            When dealing with &gt;250mg/mL nicotine, extra precautions must be
            observed. Gloves are required in case you need to clean up a spill.
            A nitrile apron is a good idea, and you should consider either using
            a respirator or having high speed ventilation in your mixing
            environment.
          </p>
          <h3>Mixing Procedure</h3>
          <p>To make a batch of bottles, prepare the following equipment:</p>
          <ul>
            <li>Applicable PPE</li>
            <li>Nicotine in sealed, bagged bottle</li>
            <li>Bottles</li>
            <li>Scale</li>
          </ul>
          <p>
            Assuming your nicotine is not in a dropper bottle, you will also
            need a <strong>clean</strong> eyedropper.
          </p>
          <p>Now follow these steps:</p>
          <ol>
            <li>Put on your PPE.</li>
            <li>Turn on your scale.</li>
            <li>Remove the nicotine bottle from its bag.</li>
            <li>Place a bottle on the scale.</li>
            <li>
              Using an eyedropper or the bottle itself, dispense nicotine into
              the bottle on the scale.
            </li>
            <li>Take the bottle off the scale.</li>
            <li>
              Repeat steps 4-6 until you have put nicotine into each bottle.
            </li>
          </ol>
          <p>Now you can add PG, VG, and flavors to each bottle.</p>
          <h3>Exposure treatment</h3>
          <p>
            <strong>NOTE:</strong> The author is not a doctor. None of the
            following should be considered medical advice. If you have any
            doubts or questions, ask a trusted medical professional{' '}
            <strong>before</strong> mixing.
          </p>
          <p>
            If you get nicotine on your skin, simply wash it off with soap and
            warm water. Nicotine is not absorbed very quickly through the skin,
            so it would have to be a high concentration or a long duration of
            contact for you to feel the effects of nicotine toxicity.
          </p>
          <p>
            If you get nicotine in your eyes, <i>immediately and constantly</i>{' '}
            flush the affected area with cool water for at least 10 minutes. If
            you have any residual pain or changes in vision, see a doctor as
            soon as possible.
          </p>
          <p>
            If you get nicotine in your nose or any cuts/wounds, flush it out
            with water for several minutes.
          </p>
          <p>
            If you swallow nicotine, immediately contact a poison control center
            or go to the nearest hospital.
          </p>
          <h2>Additional Reading</h2>
          <ul>
            <li>
              <a
                href="https://www.nicvape.com/Nicotine-Safety"
                target="_blank"
                rel="noopener noreferrer"
              >
                NicVape - Nicotine Safety
              </a>
            </li>
            <li>
              <a
                href="https://www.caymanchem.com/msdss/16535m.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Caymen Chemical - Nicotine Safety Data Sheet
              </a>
            </li>
            <li>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3880486/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mayer B. &quot;How much nicotine kills a human?&quot; Arch
                Toxicol 2014
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NicotineSafetyPage;
