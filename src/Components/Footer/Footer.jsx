import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiOrcid, SiGooglescholar } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-white">Md Abu Ahsan Gilman</h3>
            <p className="text-slate-400 mt-2">Genomics & Metagenomics Researcher</p>
            <p className="text-slate-500 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://orcid.org/0009-0000-4134-6073" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-emerald-500 transition-colors" title="ORCID">
              <SiOrcid />
            </a>
            <a href="https://scholar.google.com/citations?user=8ZmNWSwzS30C&hl" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors" title="Google Scholar">
              <SiGooglescholar />
            </a>
            <a href="https://www.linkedin.com/in/ahsangilman/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-colors" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AhsanGilman" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition-colors" title="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;