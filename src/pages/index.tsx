import * as React from 'react';

import Seo from '@/components/atoms/seo/Seo';
import Layout from '@/components/layout/Layout';
import Billing from '@/components/molecules/Billing';
import Business from '@/components/molecules/Business';
import CardDealt from '@/components/molecules/CardDealt';
import Clients from '@/components/molecules/Clients';
import CTA from '@/components/molecules/CTA';
import Footer from '@/components/molecules/Footer';
import Hero from '@/components/molecules/Hero';
import NavBar from '@/components/molecules/NavBar';
import Stats from '@/components/molecules/Stats';
import Testimonials from '@/components/molecules/Testimonials';

import styles from '@/style';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !Guide: -> Select !Guide: and CMD + SHIFT + F
// Before you begin editing, follow all comments with `Guide`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <div className='w-full overflow-hidden bg-primary dark:bg-blue-400'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDealt />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </Layout>
  );
}
