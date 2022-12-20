import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Jumbotron from "../../components/jumbotron/jumbotron";
import LateralColumn from "../../components/lateralColumn/lateralColumn";
import LeftColumn from "../../components/leftColumn/leftColumn";
import RightColumn from "../../components/rightColumn/rightColumn";
import LogoBlockList from "../../components/logoBlockList/logoBlockList";
import TabSection from "../../components/tabSection/tabSection";
import Textbox from "../../components/textbox/textbox";
import BasicTable from "../../components/basicTable/basicTable";
import ListLine from "../../components/listLine/listLine";
import CallToAction from "../../components/callToAction/callToAction";
import pageData from "../../data/pages/services/services-cloud-resources.json";
import utilStyles from "../../styles/utils.module.scss";

const CloudResources = () => {
  const { asPath } = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const jumbotron = pageData.jumbotron;
  const lateralColumn1 = pageData.lateralColumn1;
  const lateralColumn2 = pageData.lateralColumn2;
  const callToAction = pageData.callToAction;
  const tabSection = pageData.tabSection;
  const tabContent = tabSection?.tabLayout?.tabs[activeTabIndex]?.content;

  function getActiveTabIndex(pagePath) {
    return tabSection?.tabLayout?.tabs?.findIndex((tab) => tab.link === pagePath);
  }

  useEffect(() => {
    setActiveTabIndex(getActiveTabIndex(asPath) === -1 ? 0 : getActiveTabIndex(asPath));
  }, [asPath]);

  return (
    <>
      <Jumbotron
        title={jumbotron?.title}
        bodyText={jumbotron?.body?.text}
        isBodyLinkExternal={jumbotron?.body?.isLinkExternal}
      />
      <div className={utilStyles.pageBodyContainer}>
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={lateralColumn1?.leftColumn?.title}
              imageSrcPath={lateralColumn1?.leftColumn?.imageSrcPath}
              imageAlt={lateralColumn1?.leftColumn?.imageAlt}
              body={lateralColumn1?.leftColumn?.body}
            />
          }
          rightColumn={
            <RightColumn>
              <div
                className={clsx(utilStyles.onlyChildContainer, utilStyles.horizontallyCenterItem)}
              >
                <div className={utilStyles.peakWidth}>
                  <LogoBlockList
                    logoBlocks={lateralColumn1?.rightColumn?.logoBlockList?.logoBlocks}
                  />
                </div>
              </div>
            </RightColumn>
          }
          hasBorderBottom={lateralColumn1?.hasBorderBottom}
          styleColumnAlignment={utilStyles.verticallyCenterItem}
        />
        <LateralColumn
          leftColumn={
            <LeftColumn
              title={lateralColumn2?.leftColumn?.title}
              isSmallTitle={lateralColumn2?.leftColumn?.isSmallTitle}
              imageSrcPath={lateralColumn2?.leftColumn?.imageSrcPath}
              imageAlt={lateralColumn2?.leftColumn?.imageAlt}
            />
          }
          rightColumn={<RightColumn body={lateralColumn2?.rightColumn?.body} />}
          hasBackground={lateralColumn2?.hasBackground}
        />
        <TabSection>
          {tabContent?.textbox?.titleImageSrcPath && tabContent?.textbox?.titleImageAlt && (
            <Textbox
              title={tabContent.textbox?.title}
              titleImageSrcPath={tabContent.textbox.titleImageSrcPath}
              titleImageAlt={tabContent.textbox.titleImageAlt}
              body={tabContent.textbox?.body}
              isInLateralColumn={tabContent.textbox?.isInLateralColumn}
              hasBorderBottom={tabContent.textbox?.hasBorderBottom}
            />
          )}
          <LateralColumn
            title={tabContent?.lateralColumn1?.title}
            isSmallTitle={tabContent?.lateralColumn1?.isSmallTitle}
            titleImageSrcPath={tabContent?.lateralColumn1?.titleImageSrcPath}
            titleImageAlt={tabContent?.lateralColumn1?.titleImageAlt}
            leftColumn={<LeftColumn body={tabContent?.lateralColumn1?.leftColumn?.body} />}
            rightColumn={
              <RightColumn>
                {tabContent?.lateralColumn1?.rightColumn?.image?.srcPath &&
                tabContent?.lateralColumn1?.rightColumn?.image?.alt ? (
                  <div className={utilStyles.childContainerAlignment}>
                    <Image
                      src={tabContent.lateralColumn1.rightColumn.image.srcPath}
                      alt={tabContent.lateralColumn1.rightColumn.image.alt}
                      className={utilStyles.tabSectionImage}
                      priority={true}
                      quality={100}
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <div className={utilStyles.maxWidth}>
                    <Textbox
                      title={tabContent?.lateralColumn1?.rightColumn?.textbox1?.title}
                      body={tabContent?.lateralColumn1?.rightColumn?.textbox1?.body}
                      isInLateralColumn={
                        tabContent?.lateralColumn1?.rightColumn?.textbox1?.isInLateralColumn
                      }
                    />
                    <div
                      className={clsx(
                        utilStyles.altChildContainer,
                        utilStyles.childContainerAlignment
                      )}
                    >
                      <BasicTable
                        headRow={tabContent?.lateralColumn1?.rightColumn?.basicTable1?.headRow}
                        body={tabContent?.lateralColumn1?.rightColumn?.basicTable1?.body}
                      />
                    </div>
                    <div className={utilStyles.childContainer}>
                      <Textbox
                        title={tabContent?.lateralColumn1?.rightColumn?.textbox2?.title}
                        body={tabContent?.lateralColumn1?.rightColumn?.textbox2?.body}
                        isInLateralColumn={
                          tabContent?.lateralColumn1?.rightColumn?.textbox2?.isInLateralColumn
                        }
                      />
                    </div>
                    <div
                      className={clsx(
                        utilStyles.altChildContainer,
                        utilStyles.childContainerAlignment
                      )}
                    >
                      <BasicTable
                        headRow={tabContent?.lateralColumn1?.rightColumn?.basicTable2?.headRow}
                        body={tabContent?.lateralColumn1?.rightColumn?.basicTable2?.body}
                      />
                    </div>
                    <div className={utilStyles.childContainer}>
                      <Textbox
                        title={tabContent?.lateralColumn1?.rightColumn?.textbox3?.title}
                        body={tabContent?.lateralColumn1?.rightColumn?.textbox3?.body}
                        isInLateralColumn={
                          tabContent?.lateralColumn1?.rightColumn?.textbox3?.isInLateralColumn
                        }
                      />
                    </div>
                    <div
                      className={clsx(
                        utilStyles.altChildContainer,
                        utilStyles.childContainerAlignment
                      )}
                    >
                      <BasicTable
                        headRow={tabContent?.lateralColumn1?.rightColumn?.basicTable3?.headRow}
                        body={tabContent?.lateralColumn1?.rightColumn?.basicTable3?.body}
                      />
                    </div>
                    <div className={utilStyles.childContainer}>
                      <Textbox
                        title={tabContent?.lateralColumn1?.rightColumn?.textbox4?.title}
                        body={tabContent?.lateralColumn1?.rightColumn?.textbox4?.body}
                        isInLateralColumn={
                          tabContent?.lateralColumn1?.rightColumn?.textbox4?.isInLateralColumn
                        }
                      />
                    </div>
                  </div>
                )}
              </RightColumn>
            }
            isAChild={true}
            hasBorderBottom={tabContent?.lateralColumn1?.hasBorderBottom}
          />
          {tabContent?.textbox &&
            (!tabContent?.textbox?.titleImageSrcPath || !tabContent?.textbox?.titleImageAlt) && (
              <Textbox
                title={tabContent.textbox?.title}
                body={tabContent.textbox?.body}
                isInLateralColumn={tabContent.textbox?.isInLateralColumn}
                hasBorderBottom={tabContent.textbox?.hasBorderBottom}
              />
            )}
          <LateralColumn
            title={tabContent?.lateralColumn2?.title}
            isSmallTitle={tabContent?.lateralColumn2?.isSmallTitle}
            leftColumn={
              <LeftColumn body={tabContent?.lateralColumn2?.leftColumn?.body}>
                {tabContent?.lateralColumn2?.leftColumn?.listLine && (
                  <div className={utilStyles.altChildContainer}>
                    <ListLine
                      isVertical={tabContent.lateralColumn2.leftColumn.listLine.isVertical}
                      items={tabContent.lateralColumn2.leftColumn.listLine.items}
                    />
                  </div>
                )}
              </LeftColumn>
            }
            rightColumn={
              <RightColumn>
                <div className={utilStyles.childContainerAlignment}>
                  <Image
                    src={tabContent?.lateralColumn2?.rightColumn?.image?.srcPath}
                    alt={tabContent?.lateralColumn2?.rightColumn?.image?.alt}
                    className={utilStyles.tabSectionImage}
                    priority={true}
                    quality={100}
                    width={100}
                    height={100}
                  />
                </div>
              </RightColumn>
            }
            isAChild={true}
            hasBorderBottom={tabContent?.lateralColumn2?.hasBorderBottom}
          />
          {tabContent?.lateralColumn3 && (
            <LateralColumn
              title={tabContent.lateralColumn3.title}
              isSmallTitle={tabContent.lateralColumn3.isSmallTitle}
              leftColumn={<LeftColumn body={tabContent?.lateralColumn3.leftColumn?.body} />}
              rightColumn={
                <RightColumn>
                  <div className={utilStyles.childContainerAlignment}>
                    <Image
                      src={tabContent.lateralColumn3.rightColumn?.image?.srcPath}
                      alt={tabContent.lateralColumn3.rightColumn?.image?.alt}
                      className={utilStyles.tabSectionImage}
                      priority={true}
                      quality={100}
                      width={100}
                      height={100}
                    />
                  </div>
                </RightColumn>
              }
              isAChild={true}
              hasBorderBottom={tabContent.lateralColumn3.hasBorderBottom}
            />
          )}
        </TabSection>
        <CallToAction
          title={callToAction?.title}
          imageSrcPath={callToAction?.imageSrcPath}
          imageAlt={callToAction?.imageAlt}
          description={callToAction?.description}
          buttonData={callToAction?.buttonData}
        />
      </div>
    </>
  );
};

export default CloudResources;
