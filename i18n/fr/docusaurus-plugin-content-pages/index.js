import React from 'react';
import { Redirect } from 'react-router-dom';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from '/src/pages/index.module.css';

const basePathImg = '/fr/img/homepage/';

const links = {
  social: [
    {
      href: 'https://github.com/centreon/centreon/',
      image: basePathImg + 'social-network/github.png'
    },{
      href: 'https://twitter.com/Centreon',
      image: basePathImg + 'social-network/twitter.png'
    },{
      href: 'https://www.linkedin.com/company/centreonsoftware',
      image: basePathImg + 'social-network/linkedin.png'
    },{
      href: 'https://www.youtube.com/c/Centreon-Monitoring',
      image: basePathImg + 'social-network/youtube.png'
    }
  ],
  thewatch: 'https://thewatch.centreon.com/',
  contribute:
    'https://github.com/centreon/.github/blob/master/CONTRIBUTING.md',
};

const cards = [
  {
    title: "Centreon OnPrem",
    href: "/fr/docs/getting-started/welcome/",
    links: [
      {
        label: "Getting started",
        href: "/fr/docs/getting-started/welcome"
      },{
        label: "Installation",
        href: "/fr/docs/installation/introduction"
      },{
        label: "Mettre des ressources en supervision",
        href: "/fr/docs/category/setting-up-the-monitoring/"
      },{
        label: "Service mapping",
        href: "/fr/docs/service-mapping/introduction/"
      },{
        label: "Vues graphiques",
        href: "/fr/docs/graph-views/introduction-map/"
      },{
        label: "Reporting",
        href: "/fr/docs/reporting/introduction/"
      },
    ]
  },
  {
    title: "Centreon Cloud",
    href: "/fr/cloud/getting-started/architecture/",
    links: [
      {
        label: "Getting started",
        href: "/fr/docs/getting-started/welcome"
      },{
        label: "Installer un collecteur",
        href: "/fr/cloud/installation/prerequisites/"
      },{
        label: "Service mapping",
        href: "/fr/cloud/service-mapping/introduction/"
      },{
        label: "Vues graphiques",
        href: "/fr/cloud/graph-views/introduction-map/"
      },
    ]
  }
]

const versionInfo = {
  version: '23.04',
  link: 'https://www.centreon.com/fr/centreon-23-04-decouvrez-les-nouveautes-a-venir-ce-printemps/',
  target: '_blank'
}

const Button = (props) => {
  return (
    <a
      className={clsx(styles.button, {[styles.button_dark]: props.dark === "true"}) }
      href={props.href}
      target={props.target}
    >
      {props.label}
      <img src={basePathImg + "arrow.svg"}/>
    </a>
  );
};

function BannerBlock() {
  return (
    <div className={clsx(styles.bannerContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <div className={clsx(styles.bannerWrapper)}>
          <span className={clsx(styles.badge)}>CENTREON {versionInfo.version}</span>
          <p>Nouvelle version logicielle disponible</p>
          <Button href={versionInfo.link} target={versionInfo.target} label="En savoir plus" dark="true"/>
        </div>
      </div>
    </div>
  );
}

function SearchForm() {
  function handleClick(e) {
    e.preventDefault()
    document.querySelector('.DocSearch').click()
  }
  return (
    <form className={clsx(styles.searchForm)} onClick={handleClick}>
      <div className={clsx(styles.searchForm_input)}>
        <img src={basePathImg + "search.svg"}/>
        <input type="search" placeholder="Rechercher dans la documentation" ></input>
      </div>
      <button className={clsx(styles.button, styles.buttonBig)}>
        Rechercher
        <img src={basePathImg + "arrow.svg"}/>
      </button>
    </form>
  )
}

function HeadingCard(props) {
  return(
    <div className={clsx(styles.headingCard)}>
      <a href={props.card.href} className={clsx(styles.headingCardHeader)}>
        {props.card.title}
      </a>
      <div className={clsx(styles.headingCardBody)}>
        <ul>
          {props.card.links.map((link,index)=>{
            return(
              <li key={index}>
                <a href={link.href}>
                  <span>{link.label}</span>
                  <img src={basePathImg + "external_link.svg"}/>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function HeadingCards(props){
  return(
    <div className={clsx(styles.headingCards)}>
      {props.cards.map((card,index)=>{
        return( <HeadingCard card={card} key={index}/> )
      })}
    </div>
  )
}

function HeadingBlock() {
  return (
    <div className={clsx(styles.headingContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <h1>Bienvenue dans la Documentation Centreon !</h1>
        <SearchForm/>
        <HeadingCards cards={cards}/>
      </div>
    </div>
  )
}

function CommunityBlock() {
  return(
    <div className={clsx(styles.socialBlock)}>
      <span className={clsx(styles.badge)}>Une communauté solide</span>
      <div className={clsx(styles.watchWrapper)}>
        <div>
          <img src={basePathImg + "social-network/thewatch.png"}/>
        </div>
        <Button href={links.thewatch} target="_blank" label="Rejoignez la communauté"/>
      </div>
      <div className={clsx(styles.socialWrapper)}>
        {links.social.map((link,index)=>{
          return(
            <a href={link.href} key={index}>
              <img src={link.image}/>
            </a>
          )
        })}
      </div>
    </div>
  )
}

function OpensourceBlock() {
  return(
    <div className={clsx(styles.socialBlock)}>
      <span className={clsx(styles.badge)}>UN CŒUR OPEN SOURCE</span>
      <p>Plébiscité par des centaines de milliers de professionnels de l’IT à travers le monde avec 6 000 téléchargements mensuels, Centreon est devenu le numéro 1 de la supervision open source en Europe.</p>
      <Button href={links.contribute} target="_blank" label="Contribuer au projet Open Source"/>
    </div>
  )
}

function SocialBlock() {
  return (
    <div className={clsx(styles.socialContainer)}>
      <div className={clsx(styles.mainContainer)}>
        <CommunityBlock/>
        <OpensourceBlock/>
      </div>
    </div>
  )
}

export default function Home() {
  const { versions } = usePluginData('docusaurus-plugin-content-docs');
  const defaultPath = versions?.[0]?.path ?? '/fr/docs';
  const defaultPage = versions?.[0]?.mainDocId ?? 'getting-started/installation-first-steps';
  const defaultRoute = `${defaultPath}/${defaultPage}`;

  const { siteConfig } = useDocusaurusContext();
  const { customFields: { version } } = siteConfig;

  if (version) {
    return <Redirect to={defaultRoute} />;
  }

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HeadingBlock />
        <BannerBlock />
        <SocialBlock />
      </main>
    </Layout>
  );
}
