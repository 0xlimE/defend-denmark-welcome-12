import { ComplianceFrameworkPage } from "@/components/compliance-framework-page";
import { useLanguage } from "@/contexts/language-context";

const doraArticleUrl = (n: number) =>
  `https://www.digital-operational-resilience-act.com/Article_${n}.html`;

const Dora = () => {
  const { t } = useLanguage();

  return (
    <ComplianceFrameworkPage
      seoTitle={t('compliance.dora.seo.title')}
      seoDescription={t('compliance.dora.seo.description')}
      path="/compliance/dora"
      heroTitle={t('compliance.dora.hero.title')}
      heroSubtitle={t('compliance.dora.hero.subtitle')}
      heroImage={{
        src: "/site-uploads/DORA.png",
        alt: "DORA — Digital Operational Resilience Act",
        maxHeight: "max-h-60",
      }}
      whatTitle={t('compliance.dora.what.title')}
      whatBody={t('compliance.dora.what.body')}
      requiresIntro={t('compliance.dora.req.intro')}
      requirements={[
        { article: t('compliance.dora.req.1.article'), articleUrl: doraArticleUrl(6),  title: t('compliance.dora.req.1.title'), body: t('compliance.dora.req.1.body') },
        { article: t('compliance.dora.req.2.article'), articleUrl: doraArticleUrl(24), title: t('compliance.dora.req.2.title'), body: t('compliance.dora.req.2.body') },
        { article: t('compliance.dora.req.3.article'), articleUrl: doraArticleUrl(25), title: t('compliance.dora.req.3.title'), body: t('compliance.dora.req.3.body') },
        { article: t('compliance.dora.req.4.article'), articleUrl: doraArticleUrl(26), title: t('compliance.dora.req.4.title'), body: t('compliance.dora.req.4.body') },
        { article: t('compliance.dora.req.5.article'), articleUrl: doraArticleUrl(45), title: t('compliance.dora.req.5.title'), body: t('compliance.dora.req.5.body') },
        { article: t('compliance.dora.req.6.article'), articleUrl: doraArticleUrl(13), title: t('compliance.dora.req.6.title'), body: t('compliance.dora.req.6.body') },
      ]}
      coverageIntro={t('compliance.dora.coverage.intro')}
      coverage={[
        { article: t('compliance.dora.coverage.1.article'), articleUrl: doraArticleUrl(6),  how: t('compliance.dora.coverage.1.how') },
        { article: t('compliance.dora.coverage.2.article'), articleUrl: doraArticleUrl(24), how: t('compliance.dora.coverage.2.how') },
        { article: t('compliance.dora.coverage.3.article'), articleUrl: doraArticleUrl(25), how: t('compliance.dora.coverage.3.how') },
        { article: t('compliance.dora.coverage.4.article'), articleUrl: doraArticleUrl(26), how: t('compliance.dora.coverage.4.how') },
        { article: t('compliance.dora.coverage.5.article'), articleUrl: doraArticleUrl(45), how: t('compliance.dora.coverage.5.how') },
        { article: t('compliance.dora.coverage.6.article'), articleUrl: doraArticleUrl(13), how: t('compliance.dora.coverage.6.how') },
      ]}
      evidence={[
        t('compliance.dora.evidence.1'),
        t('compliance.dora.evidence.2'),
        t('compliance.dora.evidence.3'),
        t('compliance.dora.evidence.4'),
        t('compliance.dora.evidence.5'),
        t('compliance.dora.evidence.6'),
      ]}
      localTitle={t('compliance.dora.local.title')}
      localBody={t('compliance.dora.local.body')}
    />
  );
};

export default Dora;
