import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Board',
    image: require('@site/static/img/board.png').default,
    description: (
      <>
        Visualize your data in a board view with drag and drop functionality.
      </>
    ),
  },
  {
    title: 'Calendar',
    image: require('@site/static/img/calendar.png').default,
    description: (
      <>
        Manage bookings and appointments with a calendar view.
      </>
    ),
  },
  {
    title: 'Listing',
    image: require('@site/static/img/datagrid.png').default,
    description: (
      <>
        Display your data in a table view with sorting and
        filtering capabilities.
      </>
    ),
  },
  {
    title: 'Data Form',
    image: require('@site/static/img/form.png').default,
    description: (
      <>
        Create and edit records with a form view.
      </>
    ),
  },
  // {
  //   title: 'Easy to Use',
  //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({title, Svg, image, description}: FeatureItem) {
  console.log('image', image);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {!!Svg && <Svg className={styles.featureSvg} role="img" />}
        {!!image && <img src={image} alt={title} className={styles.featureImage} />}        
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
