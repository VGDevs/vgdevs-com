import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Community Managed Content',
    Svg: require('@site/static/img/undraw_typewriter.svg').default,
    description: (
      <>
        Everyone can create, modify or delete articles, tutorials or blog posts.
        Even you!, just make a Pull Request on GitHub.
      </>
    ),
  },
  {
    title: 'Curated by everyone',
    Svg: require('@site/static/img/undraw_version_control.svg').default,
    description: (
      <>
        All content is reviewed by our collaborators and approved
        if they meet the requirements.
      </>
    ),
  },
  {
    title: 'Save and Share',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The more content is added the better, share your thoughts, assets, tools, code or tips.
        Lets create together the most useful site for all things game development.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
