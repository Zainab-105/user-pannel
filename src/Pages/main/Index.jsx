import React from 'react'
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
export default function Index() {
  return (
    <section className="section2">
    <div className="container-fluid main">
      <div className="container">
        {/* slogan */}
        <p className="slogan">Unveiling the Past, Securing the Future, Hadith Authentication for Generations</p>
        {/* search bar */}
        <div className="indexsearchcontainer">
          <div id="indexsearch">
            <form name="searchform" action="/search/" method="get" id="searchform">
                <div className="searchcontainer">
                <input type="text" className="indexsearchquery" name="q" placeholder="Search &#8230;" defaultValue="" />
            <SearchIcon className='searchicon'/>
                </div>
{/*            
              <input type="submit" className="indexsearchsubmit" value="search" /> */}
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="container hadith-card">
          <div className="row">
            <div className="col-md-6">
              <h4 className="Narrated">Narrated 'Umar bin Al-Khattab:</h4>
              <p className="translation">I heard Allah's Messenger (ﷺ) saying, "The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for."</p>
              <div className="row">
                <div className="col-md-3">
                  <p><b>Source</b></p>
                  <p><b>Catagorey</b></p>
                </div>
                <div className="col-md-5">
                  <p>Sahih-Al Bukhari</p>
                  <p>Daif</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p className="hadith">حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ ، قَالَ : حَدَّثَنَا سُفْيَانُ ، قَالَ : حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الْأَنْصَارِيُّ ، قَالَ : أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ ، يَقُولُ : سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ عَلَى الْمِنْبَرِ، قَالَ : سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، يَقُولُ : " إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ "
              </p>
              <div className="links">
                <a href="#">Share</a>
                <a href="#">Copy</a>
                <a href="contact.html">Feedback</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
