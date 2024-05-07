import React from 'react'
import './hadith.css';

import StarIcon from '@mui/icons-material/Star';
import Searchbar from '../../Components/searchBar/Searchbar';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from 'react-router-dom';
export default function Hadiths() {
  return (
    <section className="section2">
    <div className="container-fluid main">
      <div className="container">
        {/* slogan */}
        <p className="slogan">Unveiling the Past, Securing the Future, Hadith Authentication for Generations</p>
        {/* search bar */}
       
      <Searchbar/>
      </div>
      <div className="container-fluid ">
        <div className="container ">
            <div className="row"><div className="col-sm-2"><div className="sidePanelContainer">
      <div style={{ height: "1px" }}></div>
      <div id="sidePanel">

        <div id="languagePanel">
          Language:
          <div style={{ paddingTop: "10px" }}>
            <input type="radio" name="sidelang" value="english" id="ch_english"  defaultChecked />
            <label htmlFor="ch_english">English</label>
          </div>

          <div>
            <input type="radio" name="sidelang" value="urdu" id="ch_urdu"  />
            <label htmlFor="ch_urdu">Urdu &nbsp;<span style={{ fontFamily: "Jameel Noori Nastaleeq", fontSize: "16px" }}>اردو</span></label>
          </div>

          <div>
            <input type="radio" name="sidelang" value="bangla" id="ch_bangla"  />
            <label htmlFor="ch_bangla">Bangla &nbsp;<span style={{ fontSize: "16px" }}>বাংলা</span></label>
          </div>
        </div>

      </div>
    </div></div><div className="col-sm-8"><div className="row hadith-card">
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
              <div className='stars'><StarIcon/><StarIcon/><StarIcon/><StarOutlineIcon/><StarOutlineIcon/></div>
            </div>
            <div className="col-md-6">
              <p className="hadith">حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ ، قَالَ : حَدَّثَنَا سُفْيَانُ ، قَالَ : حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الْأَنْصَارِيُّ ، قَالَ : أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ ، يَقُولُ : سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ عَلَى الْمِنْبَرِ، قَالَ : سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، يَقُولُ : " إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ "
              </p>
              <div className="links">
                <a href="#" className='link'>Share | </a>
                <a href="#" className='link'>Copy | </a>
                <Link to="/feedback" className='link'>Feedback</Link>
              </div>
            </div>
          </div></div><div className="col-sm-2"></div></div>
          
        </div>
      </div>
    </div>
  </section>
  )
}
