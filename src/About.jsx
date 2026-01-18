import React from "react";
import "./About.css";

const popularAnimes = [
  {
    title: "Porsche~",
    description:
      "Porsche AG is a German manufacturer of **high-performance luxury sports cars**, known for its racing heritage, iconic designs, and engineering excellence like the 911. A subsidiary of Volkswagen AG.",
    image: "https://i.pinimg.com/1200x/d6/84/2f/d6842fd07e6388c9550080837df7923f.jpg", 
  },
  {
    title: "Lexus~",
    description:
      "Lexus is the **luxury vehicle division of Japanese automaker Toyota**, established to compete with the world's best premium cars. It is recognized for its blend of high-end craftsmanship, advanced technology, and 'Omotenashi' (Japanese hospitality).",
    image: "https://i.pinimg.com/736x/7b/e1/54/7be1547a80d0ea0235c41c8e8b8960e4.jpg",
  },
  {
    title: "Ferrari~",
    description:
      "Ferrari S.p.A. is an **Italian luxury sports car manufacturer** renowned globally for its exclusivity, incredible performance, and deep involvement in Formula One racing. The brand symbolizes passion, tradition, and limitless achievement.",
    image: "https://i.pinimg.com/1200x/03/6b/c7/036bc72ea11ec278a8768a24def6c582.jpg",
  },
  {
    title: "Mercedes~",
    description:
      "Mercedes-Benz is a **German multinational luxury automotive company** and a leader in the premium segment. Associated with prestige, dependability, and safety innovations, its history traces back to the invention of the first automobile.",
    image: "https://i.pinimg.com/1200x/0d/2e/45/0d2e4542fc5938481bb299cbdf15ea36.jpg",
  },
  {
    title: "Toyota~",
    description:
      "Toyota Motor Corporation, a **leading global Japanese automaker**, is known for its wide range of vehicles, manufacturing efficiency (Toyota Production System/Kaizen), and pioneering the mass-produced hybrid market with the Prius.",
    image: "https://i.pinimg.com/originals/1a/34/1c/1a341c0a590b18664bb931e3402aedbf.png", 
  },
  {
    title: "Mahindra~",
    description:
      "The Mahindra Group is an **Indian multinational conglomerate** with leadership in sectors like farm equipment (world's largest tractor manufacturer by volume), utility vehicles, and IT. It focuses on corporate social responsibility and fostering rural prosperity.",
    image: "https://i.pinimg.com/736x/e3/0c/3f/e30c3fdfc31a56a2573b4400b71606f8.jpg",
  },
  {
    title: "Land Rover~",
    description:
      "Land Rover is a **British brand of luxury and premium four-wheel drive, off-road capable vehicles**, now owned by Jaguar Land Rover (a subsidiary of Tata Motors). It is globally recognized for its Defender, Discovery, and Range Rover lines.",
    image: "https://i.pinimg.com/1200x/1b/e1/d4/1be1d4d1c7e002883bdaafad5d022ac3.jpg",
  },
  {
    title: "Audi~",
    description:
      "Audi AG is a **German manufacturer of high-quality premium vehicles** under the Volkswagen Group, known for its progressive design, sustainable technology, and the corporate slogan 'Vorsprung durch Technik' (Advancement through Technology).",
    image: "https://i.pinimg.com/1200x/80/f0/c0/80f0c0325bec3a1756dfc13e824b3815.jpg",
  },
  {
    title: "BMW~",
    description:
      "Bayerische Motoren Werke AG (BMW) is a **German multinational manufacturer of premium cars and motorcycles**. A leader in the luxury market, it is known for high-quality engineering, performance, and the slogan 'The Ultimate Driving Machine'.",
    image: "https://i.pinimg.com/1200x/56/fe/eb/56feeb295b152385c5cf5d60ee1ad6a5.jpg",
  },
   {
    title: "Land Rover~",
    description:
      "Land Rover is a **British brand of luxury and premium four-wheel drive, off-road capable vehicles**, now owned by Jaguar Land Rover (a subsidiary of Tata Motors). It is globally recognized for its Defender, Discovery, and Range Rover lines.",
    image: "https://i.pinimg.com/1200x/1b/e1/d4/1be1d4d1c7e002883bdaafad5d022ac3.jpg",
  },
  {
    title: "Audi~",
    description:
      "Audi AG is a **German manufacturer of high-quality premium vehicles** under the Volkswagen Group, known for its progressive design, sustainable technology, and the corporate slogan 'Vorsprung durch Technik' (Advancement through Technology).",
    image: "https://i.pinimg.com/1200x/80/f0/c0/80f0c0325bec3a1756dfc13e824b3815.jpg",
  },
  {
    title: "BMW~",
    description:
      "Bayerische Motoren Werke AG (BMW) is a **German multinational manufacturer of premium cars and motorcycles**. A leader in the luxury market, it is known for high-quality engineering, performance, and the slogan 'The Ultimate Driving Machine'.",
    image: "https://i.pinimg.com/1200x/56/fe/eb/56feeb295b152385c5cf5d60ee1ad6a5.jpg",
  }
];

function About() {
  return (
    <div className="about-section">
      <h2>About Cars & Thier Companies</h2>
      <p>
        Explore popular cars and companies captivating audiences worldwide! Here are a few customers favorites:
      </p>
      <div className="anime-list">
        {popularAnimes.map((anime) => (
          <div className="anime-card" key={anime.title}>
            <img src={anime.image} alt={anime.title} className="anime-image" />
            <h3>{anime.title}</h3>
            <p>{anime.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;