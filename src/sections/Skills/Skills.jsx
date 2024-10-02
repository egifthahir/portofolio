import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Adobe Photoshop"/>
                <SkillList src={checkMarkIcon} skill="Github"/>
                <SkillList src={checkMarkIcon} skill="Google Colab"/>
                <SkillList src={checkMarkIcon} skill="Google Looker"/>
                <SkillList src={checkMarkIcon} skill="Jupyter Notebook"/>
                <SkillList src={checkMarkIcon} skill="Microsoft Office Suites"/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="MySQL"/>
                <SkillList src={checkMarkIcon} skill="PIPESIM"/>
                <SkillList src={checkMarkIcon} skill="PowerBI"/>
                <SkillList src={checkMarkIcon} skill="PySpark"/>
                <SkillList src={checkMarkIcon} skill="Python"/>
                <SkillList src={checkMarkIcon} skill="Tableau"/>
                <SkillList src={checkMarkIcon} skill="Visual Studio Code"/>
            </div>
            <hr />
        </section>
        );
}

export default Skills