import React from 'react'
import useStyles from './About.js'

import Layout from '../../components/shared/Layout/Layout.jsx'
import Printmag from "../../Assets/press_printmag.png"
import HuffingtonPost from "../../Assets/press_huffingtonpost.png"
import Adbusters103 from '../../Assets/press_adbusters_103.png'
import Breitbart from "../../Assets/press_breitbart.png"
import WSJ from "../../Assets/press_wsj.png"
import TranslatingAnarchy from "../../Assets/press_translating-anarchy.png"

export default function About() {
  const classes = useStyles();

  return (
    <>
      <Layout>
        <div className={classes.aboutContainer}>
          <h1 className={classes.aboutTitle}>About Rami Zackary Shamir</h1>
          <div className={classes.press}>
            <h2 className={classes.aboutTitleSection}>Press</h2>
            <div className={classes.pressBox}>
              <a href="https://www.printmag.com/post/the-spirit-of-barney-rosset-lives-on-the-train-to-pokipse">
                <img
                  src={Printmag}
                  className={classes.image}
                  alt="Print Magazine article layout"
                />
              </a>
            </div>
            <div className={classes.pressBox}>
              <a href="https://www.huffpost.com/entry/rami-shamir-interview_b_3710947">
                <img
                  src={HuffingtonPost}
                  className={classes.image}
                  alt="Huffington Post interview layout"
                />
              </a>
            </div>
            <div className={classes.pressBox}>
              <a href="https://www.wsj.com/articles/BL-METROB-14093">
                <img
                  src={WSJ}
                  className={classes.image}
                  alt="Wall Street Journal article layout"
                />
              </a>
            </div>
            <div className={classes.pressBox}>
              <a href="https://www.breitbart.com/politics/2011/10/24/fl-bankers-wife-abandons-children-for-very-important-occupywallstreet-cleaning-duties/">
                <img
                  src={Breitbart}
                  className={classes.image}
                  alt="Breitbart Magazine article layout"
                />
              </a>
            </div>
            <div className={classes.pressBox}>
              <img
                src={Adbusters103}
                className={classes.image}
                alt="Adbusters Magazine article layout"
              />
            </div>
            <div className={classes.pressBox}>
              <img
                src={TranslatingAnarchy}
                className={classes.image}
                alt="Translating Anarchy book layout"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )

}