import { ComplianceFrameworkPage } from "@/components/compliance-framework-page";
import { useLanguage } from "@/contexts/language-context";

const craArticleUrl = (n: number) =>
  `https://www.european-cyber-resilience-act.com/Cyber_Resilience_Act_Article_${n}.html`;

const Cra = () => {
  const { t } = useLanguage();

  return (
    <ComplianceFrameworkPage
      seoTitle={t('compliance.cra.seo.title')}
      seoDescription={t('compliance.cra.seo.description')}
      path="/compliance/cra"
      heroTitle={t('compliance.cra.hero.title')}
      heroSubtitle={t('compliance.cra.hero.subtitle')}
      heroImage={{
        src: "/site-uploads/CRA.png",
        alt: "CRA — Cyber Resilience Act",
        maxHeight: "max-h-60",
      }}
      whatTitle={t('compliance.cra.what.title')}
      whatBody={t('compliance.cra.what.body')}
      requiresIntro={t('compliance.cra.req.intro')}
      requirements={[
        { article: t('compliance.cra.req.1.article'), articleUrl: craArticleUrl(6),  title: t('compliance.cra.req.1.title'), body: t('compliance.cra.req.1.body') },
        { article: t('compliance.cra.req.2.article'), articleUrl: craArticleUrl(13), title: t('compliance.cra.req.2.title'), body: t('compliance.cra.req.2.body') },
        { article: t('compliance.cra.req.3.article'), articleUrl: craArticleUrl(13), title: t('compliance.cra.req.3.title'), body: t('compliance.cra.req.3.body') },
        { article: t('compliance.cra.req.4.article'), articleUrl: craArticleUrl(14), title: t('compliance.cra.req.4.title'), body: t('compliance.cra.req.4.body') },
        { article: t('compliance.cra.req.5.article'), articleUrl: craArticleUrl(31), title: t('compliance.cra.req.5.title'), body: t('compliance.cra.req.5.body') },
        { article: t('compliance.cra.req.6.article'), articleUrl: craArticleUrl(32), title: t('compliance.cra.req.6.title'), body: t('compliance.cra.req.6.body') },
      ]}
      coverageIntro={t('compliance.cra.coverage.intro')}
      coverage={[
        { article: t('compliance.cra.coverage.1.article'), articleUrl: craArticleUrl(13), how: t('compliance.cra.coverage.1.how') },
        { article: t('compliance.cra.coverage.2.article'), articleUrl: craArticleUrl(13), how: t('compliance.cra.coverage.2.how') },
        { article: t('compliance.cra.coverage.3.article'), articleUrl: craArticleUrl(13), how: t('compliance.cra.coverage.3.how') },
        { article: t('compliance.cra.coverage.4.article'), articleUrl: craArticleUrl(13), how: t('compliance.cra.coverage.4.how') },
        { article: t('compliance.cra.coverage.5.article'), articleUrl: craArticleUrl(13), how: t('compliance.cra.coverage.5.how') },
        { article: t('compliance.cra.coverage.6.article'), articleUrl: craArticleUrl(14), how: t('compliance.cra.coverage.6.how') },
        { article: t('compliance.cra.coverage.7.article'), articleUrl: craArticleUrl(31), how: t('compliance.cra.coverage.7.how') },
        { article: t('compliance.cra.coverage.8.article'), articleUrl: craArticleUrl(32), how: t('compliance.cra.coverage.8.how') },
      ]}
      evidence={[
        t('compliance.cra.evidence.1'),
        t('compliance.cra.evidence.2'),
        t('compliance.cra.evidence.3'),
        t('compliance.cra.evidence.4'),
        t('compliance.cra.evidence.5'),
        t('compliance.cra.evidence.6'),
      ]}
      localTitle={t('compliance.cra.local.title')}
      localBody={t('compliance.cra.local.body')}
    />
  );
};

export default Cra;
