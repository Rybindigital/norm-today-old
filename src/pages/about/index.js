import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from './styles.module.css';

function AboutHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1>About</h1>
      </div>
    </header>
  );
}

export default function Index() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <AboutHeader />
    </Layout>
  );
}
