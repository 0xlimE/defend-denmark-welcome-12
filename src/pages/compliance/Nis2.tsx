import { ComplianceFrameworkPage } from "@/components/compliance-framework-page";
import { useLanguage } from "@/contexts/language-context";

const nis2ArticleUrl = (n: number) =>
  `https://www.nis-2-directive.com/NIS_2_Directive_Article_${n}.html`;

const Nis2 = () => {
  const { t } = useLanguage();

  return (
    <ComplianceFrameworkPage
      seoTitle={t('compliance.nis2.seo.title')}
      seoDescription={t('compliance.nis2.seo.description')}
      path="/compliance/nis2"
      heroTitle={t('compliance.nis2.hero.title')}
      heroSubtitle={t('compliance.nis2.hero.subtitle')}
      heroImage={{
        src: "/site-uploads/NIS2.png",
        alt: "NIS2 — Network and Information Security Directive",
        maxHeight: "max-h-60",
      }}
      whatTitle={t('compliance.nis2.what.title')}
      whatBody={t('compliance.nis2.what.body')}
      requiresIntro={t('compliance.nis2.req.intro')}
      requirements={[
        { article: t('compliance.nis2.req.1.article'), articleUrl: nis2ArticleUrl(12), title: t('compliance.nis2.req.1.title'), body: t('compliance.nis2.req.1.body') },
        { article: t('compliance.nis2.req.2.article'), articleUrl: nis2ArticleUrl(21), title: t('compliance.nis2.req.2.title'), body: t('compliance.nis2.req.2.body') },
        { article: t('compliance.nis2.req.3.article'), articleUrl: nis2ArticleUrl(21), title: t('compliance.nis2.req.3.title'), body: t('compliance.nis2.req.3.body') },
        { article: t('compliance.nis2.req.4.article'), articleUrl: nis2ArticleUrl(21), title: t('compliance.nis2.req.4.title'), body: t('compliance.nis2.req.4.body') },
        { article: t('compliance.nis2.req.5.article'), articleUrl: nis2ArticleUrl(21), title: t('compliance.nis2.req.5.title'), body: t('compliance.nis2.req.5.body') },
        { article: t('compliance.nis2.req.6.article'), articleUrl: nis2ArticleUrl(23), title: t('compliance.nis2.req.6.title'), body: t('compliance.nis2.req.6.body') },
      ]}
      coverageIntro={t('compliance.nis2.coverage.intro')}
      coverage={[
        { article: t('compliance.nis2.coverage.1.article'), articleUrl: nis2ArticleUrl(12), how: t('compliance.nis2.coverage.1.how') },
        { article: t('compliance.nis2.coverage.2.article'), articleUrl: nis2ArticleUrl(21), how: t('compliance.nis2.coverage.2.how') },
        { article: t('compliance.nis2.coverage.3.article'), articleUrl: nis2ArticleUrl(21), how: t('compliance.nis2.coverage.3.how') },
        { article: t('compliance.nis2.coverage.4.article'), articleUrl: nis2ArticleUrl(21), how: t('compliance.nis2.coverage.4.how') },
        { article: t('compliance.nis2.coverage.5.article'), articleUrl: nis2ArticleUrl(23), how: t('compliance.nis2.coverage.5.how') },
        { article: t('compliance.nis2.coverage.6.article'), articleUrl: nis2ArticleUrl(21), how: t('compliance.nis2.coverage.6.how') },
      ]}
      evidence={[
        t('compliance.nis2.evidence.1'),
        t('compliance.nis2.evidence.2'),
        t('compliance.nis2.evidence.3'),
        t('compliance.nis2.evidence.4'),
        t('compliance.nis2.evidence.5'),
      ]}
      localTitle={t('compliance.nis2.local.title')}
      localBody={t('compliance.nis2.local.body')}
    />
  );
};

export default Nis2;
