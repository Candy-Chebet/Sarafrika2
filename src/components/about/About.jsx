import React from 'react';
import './about.css';

const items = [
  {
    id: 1,
    title: 'Training',
    img: 'https://images.pexels.com/photos/6671596/pexels-photo-6671596.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: `Providing access to high quality music knowledge and experiences to a wide regional demographic with a special attention to youth, children and those with special needs
           Facilitating and offering services for continuing education in music targeting mid-life adults and professionals.
           Facilitate information and knowledge exchange forums and workshops for teachers, teaching artists and other arts practitioners.
           Connecting music needs to arts grants and develop residencies, workshops, and programs planning in music education.
           Connect technical assistance to schools and music activities and encourage scholarship in music  and sports.
           `,
  },
  {
    id: 2,
    title: 'Partnership',
    img: 'https://img.freepik.com/free-photo/smiley-male-musician-home-chair-playing-guitar-using-laptop_23-2148847001.jpg?t=st=1742562377~exp=1742565977~hmac=8a697728662ca8401c34f2a4bf5650535cbb5e92a0c5c7baea8603651fcd4ef7&w=1380',
    desc: `Sharing music industry information, resources and research, and nurture connections with local and regional arts organisations and enterprises.
    Helping creatives with an informal meeting space for the use of those involved in music and artistic practice.
    Use digital media and technology to enhance participation, distribute resources, develop music produces and make remote learning possible.
    Helping creatives to forge an alliance with significant global music players and trainers to build their careers.
    Keeping a database of contacts of music practitioners and entrepreneurs down to the small community and village levels.
    Helping talented people to develop a short, medium, long term sustainable resource base through partnerships and communities.
    Developing  youth music camps as a way to promote cohesion and networks of friendship among the youth in the region.`,
  },
  {
    id: 3,
    title: 'Advocacy',
    img: 'https://img.freepik.com/free-vector/hand-drawn-international-jazz-day-illustration_23-2148876111.jpg?t=st=1742562533~exp=1742566133~hmac=8fe1fd7d3d61c4047452d4184b2d76e40b091e24fd66acfa635936465a754669&w=900',
    desc: `We Work with the regional media to develop and produce music programming formats. 
    Working  with strategic partners to host annual music and arts events and exhibitions. 
    Work with partners to develop a comprehensive multimedia campaign around music heroes and heroines.
    Working with partners to develop a bi-annual, contemporary music magazine with an e-zine presence that speaks to the regional youth.
    Work with the councils to declare certain zones as music and sports districts.
    Through program exchanges present music performances and shows in a variety of landscapes.
    `,
  },
  {
    id: 4,
    title: 'Opportunity',
    img: 'https://img.freepik.com/free-vector/illustration-startup-business_53876-9142.jpg?t=st=1742562790~exp=1742566390~hmac=bc8548fd5d753691e0b013e0c41e4930fe589c191ef364a3400fb373497b0c31&w=1380',
    desc: `Providing music and sports  practitioners with training in communication, business administration, finance and technical skills.
    With industry partners, we  offer customised business support for Music performers, Songwriters, Producers, Artist managers, booking agents, publicists, radio promoters, internet marketers, music merchandisers, labels, publishers, teachers, music schools among others.
    Participate in regional and other creative, knowledge and imagination economy forums and present the music economy agenda and positions.
    With other practitioners, lobby for law changes and rebates that would support the growth of the music sector and economy.
    Support the financial sector in gaining insight and understanding into funding for the sports, and arts.
    Provide music support to the private and other sector in a variety of functions.
    We work with the sports, music and arts sector to enhance the music production, delivery, marketing and distribution infrastructure in the region.
    Conceptualise, develop, design music space and training plans and implement these in schools and other arenas.`,
  },
  {
    id: 4,
    title: 'Repository',
    img: 'https://img.freepik.com/free-vector/music-social-network-composition_1284-66098.jpg?t=st=1742562883~exp=1742566483~hmac=2e5040b96042f27e2c3c95b4e5956161bc022c83c6b7ae9ef2181a13b1498570&w=900',
    desc: `In conjunction with selected institutions, we work to develop a repository of regional music, sports, culture, practice, norms, record of instruments for public record and access purposes.
    Encourage musical adaptations and fusions among music, arts and cultural practitioners and work towards evolving new sounds and designing new instruments.
    Develop a database of regional music forms.
    Working with strategic partners to map and archive the regional music and cultural resources.
    Establish music library with regional access through technological means.`,
  },
  {
    id: 4,
    title: 'Sustainability',
    img: 'https://img.freepik.com/free-photo/close-up-community-concept-with-hands_23-2148931127.jpg?uid=R184974156&ga=GA1.1.1172911989.1722651552&semt=ais_keywords_boost',
    desc: `Support distinct community initiatives seeking to develop micro-economies through the arts.
    With interested partners, we arrange for music training and experiences among marginalised segments of society, among youth centres and in schools where resources for music, sports and arts  education are limited.
    Facilitate forums and clinics where music therapy would be explored and offered as a service.
    With strategic partners, we utilise the power and language of music, arts and sports  and team teaching to stimulate a sense of peace and shared experiences among disparate communities, and communities in conflict.
    Design musical engagement with regional and global environmental initiatives.`,
  },
];

const Single = ({ item }) => (
  <section>
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="textContainer">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button type="button">See All Products</button>

        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <div className="about" id="about">
    <div className="progress">
      <h2>Our Commitment</h2>
      <div className="progressBar" />
    </div>
    {items.map((item) => (
      <Single item={item} key={item.id} />
    ))}
  </div>
);

export default About;
