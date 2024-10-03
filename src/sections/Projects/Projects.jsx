import styles from './ProjectsStyles.module.css';
import houseLight from '../../assets/houseLight.svg';
import houseDark from '../../assets/houseDark.svg';
import tlcLight from '../../assets/tlc-light.webp';
import tlcDark from '../../assets/tlc-dark.jpg';
import hospLight from '../../assets/hosp-light.svg';
import hospDark from '../../assets/hosp-dark.svg';
import lineLight from '../../assets/line-light.svg';
import lineDark from '../../assets/line-dark.svg';
import colabLight from '../../assets/colab-light.svg';
import colabDark from '../../assets/colab-dark.svg';
import tableauLight from '../../assets/tableau-light.svg';
import tableauDark from '../../assets/tableau-dark.svg';
import lookerLight from '../../assets/looker-light.svg';
import lookerDark from '../../assets/looker-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import ProjectCard from '../../common/ProjectCard';
import MultiProjectCard from '../../common/MultiProjectCard';

function Projects() {

    const { theme } = useTheme(); 

    const houseIcon = theme === 'light' ? houseLight : houseDark;
    const tlcIcon = theme === 'light' ? tlcLight : tlcDark;
    const hospIcon = theme === 'light' ? hospLight : hospDark;
    const lineIcon = theme === 'light' ? lineLight : lineDark;
    const colabIcon = theme === 'light' ? colabLight : colabDark;
    const lookerIcon = theme === 'light' ? lookerLight : lookerDark;
    const tableauIcon = theme === 'light' ? tableauLight : tableauDark;
    
        return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard 
                    src={houseIcon}
                    link="https://github.com/egifthahir/JCDS_CAPSTONE_3"
                    h3="California House Pricing Prediction"
                    p="Machine Learning Project"
                />
                <ProjectCard 
                    src={tlcIcon}
                    link="https://github.com/egifthahir/JCDS_CAPSTONE_2"
                    h3="New York City - TLC Trip Record Analysis"
                    p="Data Analytics and Statistical Evaluation"
                />      
                <ProjectCard 
                    src={hospIcon}
                    link="https://github.com/egifthahir/JCDS_CAPSTONE"
                    h3="Hospital Patient Management System"
                    p="Python CRUD Implementation"
                />  
                <ProjectCard 
                    src={lineIcon}
                    link="https://colab.research.google.com/drive/1GdNcfW7QqDVxfWxK5tEm0TCazBRDef_M?usp=sharing#scrollTo=CFdGRkUUjMQ7"
                    h3="Walmart Yearly Sales Forecast"
                    p="Time Series Forecasting Project"
                />  
                <MultiProjectCard 
                    img_a={colabIcon}
                    img_b={lookerIcon}
                    link_a="https://colab.research.google.com/drive/1TaiT4xskfK_MAcwtWrrxiWOKYTQxgdT-#scrollTo=XjUfJ1IIphWQ"
                    link_b="https://lookerstudio.google.com/reporting/817d0264-79b1-4c31-a02f-7b83bebee867"
                    h3="Cosmetics E-Commerce Cohort Analysis"
                    p="Google Colab & Looker Project"
                />              
                <MultiProjectCard 
                    img_a={colabIcon}
                    img_b={tableauIcon}
                    link_a="https://colab.research.google.com/drive/1toQc_ZevkYva08DPgYBqgcHunqKc1jau?usp=sharing"
                    link_b="https://public.tableau.com/views/E-CommerceRFMAnalysis_17272585249280/E-CommerceRFM?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
                    h3="Online Retail E-Commerce RFM Analysis"
                    p="Google Colab & Tableau Project"
                />              
            </div>
        </section>
    );
}

export default Projects