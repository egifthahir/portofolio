import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import facebookLight from '../../assets/facebook-light.svg';
import facebookDark from '../../assets/facebook-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme(); 

    const themeIcon = theme === 'light' ? sun : moon;
    const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profile picture of Egif Thahir"
            />
            <img 
                className={styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>Muhammad Abizar Algiffary
                <br />
                Thahir
            </h1>
            <h2>
                Data Enthusiast
                <br />
                Petroleum Engineer
            </h2>
            <span>
                <a href="https://www.facebook.com/egif.thahir" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook icon" />
                </a>
                <a href="https://www.github.com/egifthahir" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/egifthahir" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn icon" />
                </a>
            </span>
            <p className={styles.description}>
                Aspiring data analyst and petroleum engineer with skills in machine learning, data analysis, and economic feasibility.
            </p>
            <a href={CV} target="_blank" rel="noopener noreferrer">
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
    );
}

export default Hero;