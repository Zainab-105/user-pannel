import React from 'react';
import './about.css';
export default function About() {
  return (
    <div className="main">
    <div className="container-fluid">
      <div className="container">
        <div className="row about">
          <h2 style={{ color: '#4a8963' }}>About Us</h2>
          <h5>Mission Statement</h5>
          <p>
            At Ilm al-Hadith, we are driven by a profound sense of responsibility to preserve and protect the teachings of the Prophet Muhammad (peace be upon him). In an age of digital information, we recognize the importance of leveraging technology to uphold the sanctity of Hadith and facilitate its study in a secure, accessible, and transparent manner.
          </p>
          <h5>The Role of Blockchain Technology</h5>
          <p>
            Our system utilizes blockchain, a decentralized and tamper-proof ledger technology, to fortify the security of Hadith transmissions. Each Hadith is cryptographically secured within a transparent and immutable blockchain, ensuring that the content remains unaltered and traceable back to its authentic sources.
          </p>
          <h5>Key Features</h5>
          <h6>1. Immutability:</h6>
          <p>
            The use of blockchain ensures that once a Hadith is recorded, it cannot be altered or manipulated. This guarantees the preservation of the original teachings without the risk of unauthorized changes.
          </p>
          <h6>2. Decentralization:</h6>
          <p>
            Our platform operates on a decentralized network, eliminating single points of failure. This decentralized approach enhances the resilience of the system and reduces the risk of data corruption.
          </p>
          <h6>3. Transparency:</h6>
          <p>
            Every Hadith transaction is recorded on the blockchain, providing a transparent and traceable history. Users can verify the authenticity and chain of transmission for each Hadith with confidence.
          </p>
          <h6>4. Accessibility:</h6>
          <p>
            Ilm al-Hadith is designed to be user-friendly, making the study of Hadith accessible to enthusiasts worldwide. Our platform is optimized for a seamless and enriching learning experience.
          </p>
          <br />
          <h5>Our Commitment</h5>
          <p>
            Ilm al-Hadith is not just a technological platform; it is a commitment to upholding the highest standards of authenticity. We invite you to join us in the journey to preserve the rich tradition of Hadith with the confidence that technology, when harnessed responsibly, can be a powerful ally in the service of sacred knowledge.
            For inquiries or partnerships, please <a href="contact.html">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
