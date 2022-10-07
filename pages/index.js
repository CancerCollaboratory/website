import utilStyles from "../styles/utils.module.scss";
import styles from "./index.module.scss";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { getPageData } from "../lib/pages";
import { micromark } from "micromark";
import parse, { attributesToProps } from "html-react-parser";
import Button from "../components/button/button";
import Card from "../components/card/card";
import Box from "../components/box/box";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";

const insertLink = {
  replace: domNode => {
    if (domNode.attribs && domNode.name === "a") {
      const props = attributesToProps(domNode.attribs);
      return (
        <a target="_blank" {...props}>
          {domNode.children[0].data}
        </a>
      );
    }
  },
};

export default function Home({ pageData }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar></Navbar>
      <div className={utilStyles.container}>
        <Box>
          <h2 className={utilStyles.textBox}>
            <span className={styles.homeTitleDark}>
              {pageData.title_part_1}
            </span>
            <span className={styles.homeTitleLight}>
              {pageData.title_part_2}
            </span>
            <span className={styles.homeTitleDark}>
              {pageData.title_part_3}
            </span>
          </h2>
          <div className={`${utilStyles.textBox} ${styles.lightTextLeft}`}>
            {parse(micromark(pageData.description), insertLink)}
          </div>
          <Button
            btnText={pageData.about_our_services_btn_text}
            btnLink={pageData.about_our_services_btn_text_link}
            btnColor={"red"}
          ></Button>
          <div className={styles.imageFrame}>
            <Image
              src={pageData.news_img}
              alt={pageData.new_img_alt}
              width={100}
              height={115}
            />
            <div className={styles.innerTextFrame}>
              <div className={styles.newsTitle}>
                {parse(micromark(pageData.news_title), insertLink)}
              </div>
              <div className={styles.newsText}>
                {parse(micromark(pageData.news_text), insertLink)}
              </div>
            </div>
          </div>
        </Box>
        <Box>
          <h2 className={`${utilStyles.textBox} ${styles.darkHeader}`}>
            {pageData.collaboratory_data_repository_img_title}
          </h2>
          <h4 className={`${utilStyles.textBox} ${styles.lightTextCenter}`}>
            {pageData.collaboratory_data_repository_img_sub_title}
          </h4>
          <div className={styles.tempElement}>
            <p>This is a temporary element.</p>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <caption className={styles.tableCaption}>
                <strong>
                  {pageData.collaboratory_data_repository_table_title}
                </strong>
              </caption>
              <tbody>
                <tr>
                  <td className={styles.tableData}>
                    <a
                      className={styles.tableLink}
                      href={
                        pageData.collaboratory_data_repository_table_row_1_column_1_text_link
                      }
                      target="_blank"
                    >
                      {
                        pageData.collaboratory_data_repository_table_row_1_column_1_text
                      }
                    </a>
                  </td>
                  <td className={styles.tableData}>
                    {
                      pageData.collaboratory_data_repository_table_row_1_column_2_text
                    }
                  </td>
                  <td className={styles.tableData}>
                    {
                      pageData.collaboratory_data_repository_table_row_1_column_3_text
                    }
                  </td>
                  <td className={styles.tableData}>
                    {
                      pageData.collaboratory_data_repository_table_row_1_column_4_text
                    }
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <a
                      className={styles.tableLink}
                      href={
                        pageData.collaboratory_data_repository_table_row_2_column_1_text_link
                      }
                      target="_blank"
                    >
                      {
                        pageData.collaboratory_data_repository_table_row_2_column_1_text
                      }
                    </a>
                  </td>
                  <td className={styles.tableData}>
                    {
                      pageData.collaboratory_data_repository_table_row_2_column_2_text
                    }
                  </td>
                  <td className={styles.tableData}>
                    {
                      pageData.collaboratory_data_repository_table_row_2_column_3_text
                    }
                  </td>
                  <td className={styles.tableData}>
                    {
                      pageData.collaboratory_data_repository_table_row_2_column_4_text
                    }
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className={styles.tableData}>
                    <a
                      className={styles.tableLink}
                      href={
                        pageData.collaboratory_data_repository_table_row_3_column_1_text_link
                      }
                      target="_blank"
                    >
                      {
                        pageData.collaboratory_data_repository_table_row_3_column_1_text
                      }
                    </a>
                  </td>
                  <td className={styles.tableData}>
                    {
                      pageData.collaboratory_data_repository_table_row_3_column_2_text
                    }
                  </td>
                  <td className={styles.tableData}>
                    {
                      pageData.collaboratory_data_repository_table_row_3_column_3_text
                    }
                  </td>
                  <td className={styles.tableData}>
                    {
                      pageData.collaboratory_data_repository_table_row_3_column_4_text
                    }
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Box>
      </div>
      <div className={`${utilStyles.container} ${styles.bottomBorder}`}>
        <Link href={pageData.what_we_offer_text_link}>
          <a className={`${utilStyles.textBox} ${styles.sectionLink}`}>
            {pageData.what_we_offer_text}
          </a>
        </Link>
      </div>
      <div
        id={pageData.what_we_offer_id}
        className={`${utilStyles.container} ${styles.bottomBorder}`}
      >
        <Box>
          <h3
            className={`${utilStyles.textBox} ${styles.colorDarkGrayText} ${styles.iconCloudInfrastructure}`}
          >
            {pageData.cloud_infrastructure_img_title}
          </h3>
          <div className={`${utilStyles.textBox} ${styles.colorLightGrayText}`}>
            {parse(micromark(pageData.cloud_infrastructure_img_text))}
          </div>
          <div className={styles.unorderedList}>
            <ul>
              <li>
                <Link
                  href={pageData.cloud_infrastructure_offered_resources_1_link}
                >
                  <a>{pageData.cloud_infrastructure_offered_resources_1}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={pageData.cloud_infrastructure_offered_resources_2_link}
                >
                  <a>{pageData.cloud_infrastructure_offered_resources_2}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={pageData.cloud_infrastructure_offered_resources_3_link}
                >
                  <a>{pageData.cloud_infrastructure_offered_resources_3}</a>
                </Link>
              </li>
            </ul>
          </div>
          <Link href={pageData.about_resources_fees_text_link}>
            <a className={styles.redLink}>
              {pageData.about_resources_fees_text}
            </a>
          </Link>
        </Box>
        <div className={styles.verticalLine}></div>
        <Box>
          <h3
            className={`${utilStyles.textBox} ${styles.colorDarkGrayText} ${styles.iconDockstore}`}
          >
            {pageData.researchers_sharing_tools_img_title}
          </h3>
          <div className={`${utilStyles.textBox} ${styles.colorLightGrayText}`}>
            {parse(
              micromark(pageData.researchers_sharing_tools_img_text),
              insertLink
            )}
          </div>
          <Link href={pageData.about_dockstore_text_link}>
            <a className={styles.redLink}>{pageData.about_dockstore_text}</a>
          </Link>
        </Box>
      </div>
      <h3 className={`${styles.centerText} ${utilStyles.textBox}`}>
        {pageData.collaboratory_cancer_genomic_research_title}
      </h3>
      <div className={`${utilStyles.container} ${styles.bottomBorder}`}>
        <Box>
          <p className={`${utilStyles.textBox} ${styles.bodyText}`}>
            {pageData.collaboratory_cancer_genomic_research_paragraph_1}
          </p>
          <Link href={pageData.about_our_research_text_link}>
            <a className={styles.redLink}>{pageData.about_our_research_text}</a>
          </Link>
        </Box>
        <Box>
          <p className={`${utilStyles.textBox} ${styles.bodyText}`}>
            {pageData.collaboratory_cancer_genomic_research_paragraph_2}
          </p>
          <div className={utilStyles.linkLine}>
            <Link href={pageData.case_studies_text_link}>
              <a className={styles.redLink}>{pageData.case_studies_text}</a>
            </Link>
            <p className={styles.redLine}>|</p>
            <Link href={pageData.collaboratory_users_text_link}>
              <a className={styles.redLink}>
                {pageData.collaboratory_users_text}
              </a>
            </Link>
          </div>
        </Box>
      </div>
      <div className={`${styles.bottomBorder} ${utilStyles.buttonLayout}`}>
        <h3 className={`${utilStyles.textBox} ${styles.shiftedTitle}`}>
          {pageData.interested_in_resources_text}
        </h3>
        <div className={utilStyles.boxLayout}>
          <Button
            btnText={pageData.new_users_request_an_account_btn_text}
            btnLink={pageData.new_users_request_an_account_btn_text_link}
            btnColor={"red"}
          ></Button>
          <Button
            btnText={pageData.returning_users_collaboratory_console_btn_text}
            btnLink={
              pageData.returning_users_collaboratory_console_btn_text_link
            }
            btnColor={"blue"}
          ></Button>
        </div>
      </div>
      <h3 className={styles.centerText}>
        {pageData.support_resources_section_title}
      </h3>
      <div className={utilStyles.container}>
        <Card>
          <div className={utilStyles.cardLayout}>
            <div className={styles.iconCircleDocumentation}></div>
            <div>
              <h4 className={styles.centerCardTitle}>
                {pageData.explore_documentation_img_title}
              </h4>
              <ul className={styles.cardList}>
                <li>
                  <Link href={pageData.explore_documentation_text_1_link}>
                    <a>{pageData.explore_documentation_text_1}</a>
                  </Link>
                </li>
                <li>
                  <Link href={pageData.explore_documentation_text_2_link}>
                    <a>{pageData.explore_documentation_text_2}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        <Card>
          <div className={utilStyles.cardLayout}>
            <div className={styles.iconCircleLightbulb}></div>
            <div>
              <h4 className={styles.centerCardTitle}>
                {pageData.tips_cloud_computing_img_title}
              </h4>
              <ul className={styles.cardList}>
                <li>
                  <Link href={pageData.tips_cloud_computing_text_1_link}>
                    <a>{pageData.tips_cloud_computing_text_1}</a>
                  </Link>
                </li>
                <li>
                  <Link href={pageData.tips_cloud_computing_text_2_link}>
                    <a>{pageData.tips_cloud_computing_text_2}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        <Card>
          <div className={utilStyles.cardLayout}>
            <div className={styles.iconCircleTraining}></div>
            <div>
              <h4 className={styles.centerCardTitle}>
                {pageData.training_opportunities_img_title}
              </h4>
              <ul className={styles.cardList}>
                <li>
                  <Link href={pageData.training_opportunities_text_link}>
                    <a>{pageData.training_opportunities_text}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <div className={utilStyles.textBoxCenterText}>
        <Link href={pageData.more_support_resources_text_link}>
          <a className={styles.redLink}>
            {pageData.more_support_resources_text}
          </a>
        </Link>
      </div>
      <div className={styles.fullHorizontalLine}></div>
      <div
        className={` ${utilStyles.reverseContainer} ${utilStyles.boxTopMargin}`}
      >
        <div className={utilStyles.imageLayout}>
          <img
            src={pageData.oicr_logo_img}
            alt={pageData.oicr_logo_title}
            className={styles.imagesInLine}
          ></img>
          <div className={utilStyles.imageNoteLayout}>
            <p className={styles.imageNote}>
              {pageData.cancer_genome_collaboratory_rights_reserved_text}
            </p>
            <div className={`${utilStyles.linkLine} ${styles.lightGrayLink}`}>
              <a href={pageData.terms_conditions_text_link}>
                {pageData.terms_conditions_text}
              </a>
              <p className={styles.grayLine}>|</p>
              <Link href={pageData.privacy_text_link}>
                <a>{pageData.privacy_text}</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={utilStyles.imageLine}>
          <img
            src={pageData.university_of_toronto_img}
            alt={pageData.university_of_toronto_title}
            className={styles.imagesInLine}
          ></img>
          <img
            src={pageData.international_cancer_genome_consortium_img}
            alt={pageData.international_cancer_genome_consortium_title}
            className={styles.imagesInLine}
          ></img>
          <img
            src={pageData.dockstore_img}
            alt={pageData.dockstore_title}
            className={styles.imagesInLine}
          ></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const pageData = getPageData("home");
  return {
    props: {
      pageData,
    },
  };
}
