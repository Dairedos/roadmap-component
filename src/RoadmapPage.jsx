import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Zap, Star } from 'lucide-react';
import './dashboard.css';
import './theme.css';
import synthwaveHeader from './images/roadmap/demo_image_roadmap.png';
import demoImage from './images/roadmap/demo_image.png';
import flopcoinImage from './images/roadmap/flopcoin.png';

const RoadmapPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Header image configuration - you can easily modify this
  const headerImage = {
    url: synthwaveHeader,
    alt: "Synthwave Beach Sunset",
    enabled: true // Set to false to hide header image
  };
  
  // Flopcoin roadmap data
  const roadmapData = [
    {
      id: 1,
      date: "Dec 2024",
      title: "🛠️ Phase 1: Project Genesis & Community Setup",
      type: "completed",
      description: "• Genesis Block Mined\n• Discord Community Launched\n• Reddit Announcement",
      detailedDescription: {
        "Genesis Block Mined": "The foundational block of the Flopcoin blockchain was successfully mined, marking the official birth of the FLOP cryptocurrency. This milestone established the initial supply and set the foundation for all future transactions.",
        "Discord Community Launched": "Created the official Flopcoin Discord server to build a vibrant community of miners, traders, and enthusiasts. The server features dedicated channels for mining support, trading discussions, and general community interaction.",
        "Reddit Announcement": "Published the first official announcement on Reddit to introduce Flopcoin to the broader cryptocurrency community, outlining the project's vision and technical specifications."
      },
      position: "top",
      image: {
        url: demoImage,
        alt: "Genesis block mining"
      }
    },
    {
      id: 2,
      date: "Jan 2025",
      title: "📡 Community & Website Launch",
      type: "completed",
      description: "• Bitcointalk Forum Post\n• Official Website Launch: flopcoin.net",
      detailedDescription: {
        "Bitcointalk Forum Post": {
          text: "Published a comprehensive announcement thread on Bitcointalk, the premier cryptocurrency forum, detailing Flopcoin's technical specifications, mining parameters, and community goals. This post served as the official introduction to the Bitcoin community.",
          link: "https://bitcointalk.org/"
        },
        "Official Website Launch": {
          text: "Deployed flopcoin.net as the central hub for all Flopcoin information, featuring mining guides, community links, project documentation, and real-time network statistics. The website serves as the primary resource for both newcomers and experienced users.",
          link: "https://flopcoin.net/"
        }
      },
      position: "bottom",
      // image: {
      //   url: websiteLaunch,
      //   alt: "Website launch"
      // }
    },
    {
      id: 3,
      date: "Feb 2025",
      title: "💰 Phase 2: Wallets & Exchange Listings",
      type: "completed",
      description: "• FLOP added to Komodo Wallet (Mobile/Web)\n• Exchange Listings: Exbitron & Bitcointry\n• Discord Staking Feature Released",
      detailedDescription: {
        "Komodo Wallet Integration": {
          text: "Integrated Flopcoin into Komodo Wallet's mobile and web platforms, providing users with secure, user-friendly wallet options for storing and managing their FLOP tokens. This integration significantly improved accessibility for non-technical users.",
          link: "https://komodoplatform.com/en/"
        },
        "Exchange Listings": {
          text: "Successfully listed on Exbitron and Bitcointry exchanges, providing the first opportunities for users to trade FLOP tokens. These listings established initial price discovery and liquidity for the Flopcoin ecosystem.",
          link: "https://exbitron.com/"
        },
        "Discord Staking Feature": "Launched an innovative Discord-based staking mechanism allowing community members to earn rewards by participating in server activities and holding FLOP tokens, gamifying community engagement."
      },
      position: "top",
      // image: {
      //   url: walletExchange,
      //   alt: "Cryptocurrency wallet"
      // }
    },
    {
      id: 4,
      date: "Mar 2025",
      title: "💡 Wrapped FLOP & First Halving",
      type: "completed",
      description: "• Wrapped FLOP (wFLOP) Bridge Launched\n• Discord Integrations: GEMMA Tip Bot, Tip.cc, Selfswap\n• Merge Mining Enabled\n• Nestex Listing\n• First Halving: Mining Rewards ↓ 500k → 250k FLOP",
      detailedDescription: {
        "Wrapped FLOP Bridge": "Deployed a secure bridge protocol enabling users to wrap their FLOP tokens for use on other blockchain networks, expanding utility and interoperability. This technical achievement opened new DeFi opportunities for FLOP holders.",
        "Discord Bot Integrations": "Implemented multiple bot integrations including GEMMA Tip Bot for community tipping, Tip.cc for cross-server functionality, and Selfswap for decentralized trading directly within Discord channels.",
        "Merge Mining Capability": "Activated merge mining capabilities, allowing miners to simultaneously mine FLOP alongside other cryptocurrencies, increasing network security and miner profitability without additional energy costs.",
        "Nestex Exchange Listing": "Secured listing on Nestex exchange, further expanding trading options and liquidity for FLOP tokens.",
        "First Halving Event": "Implemented the first scheduled halving, reducing block rewards from 500,000 to 250,000 FLOP, creating deflationary pressure and following Bitcoin's proven economic model."
      },
      position: "bottom",
      image: {
        url: demoImage,
        alt: "Bridge and halving event"
      }
    },
    {
      id: 5,
      date: "Apr 2025",
      title: "🎮 Phase 3: Hard Fork & Arcade Launch",
      type: "completed",
      description: "• Hard Fork: 10% Dev Fund Allocation per Block\n• Flopcoin Arcade Launch\n• wFLOP Discord GEMMA Integration\n• Second Halving: 250k → 125k FLOP",
      detailedDescription: {
        "Hard Fork Implementation": "Successfully executed a network hard fork to allocate 10% of each block reward to a development fund, ensuring sustainable long-term development and project maintenance. This governance mechanism provides continuous funding for ecosystem growth.",
        "Flopcoin Arcade Launch": "Launched the innovative Flopcoin Arcade, a gaming platform where users can play retro-style games and earn FLOP tokens as rewards. This gamification strategy attracts new users while creating additional utility for the token.",
        "wFLOP Discord Integration": "Enhanced the Discord experience by integrating wrapped FLOP tokens with the GEMMA bot, enabling seamless tipping and trading within the community server.",
        "Second Halving Event": "Implemented the second scheduled halving, reducing mining rewards from 250,000 to 125,000 FLOP per block, further strengthening the token's deflationary economics and scarcity model."
      },
      position: "top",
      // image: {
      //   url: gamingArcade,
      //   alt: "Gaming arcade"
      // }
    },
    {
      id: 6,
      date: "Jun 2025",
      title: "✅ NonKyc Exchange Listing",
      type: "completed",
      description: "• Listing on NonKyc Exchange for enhanced accessibility and privacy-focused trading",
      detailedDescription: {
        "NonKyc Exchange Listing": "Successfully secured listing on NonKyc Exchange, a privacy-focused trading platform that allows users to trade FLOP tokens without identity verification requirements. This listing aligns with cryptocurrency's core principles of financial privacy and accessibility, enabling users worldwide to trade FLOP regardless of their geographic location or regulatory restrictions. The exchange supports advanced trading features while maintaining user anonymity and security."
      },
      position: "bottom"
    },
    {
      id: 7,
      date: "Near Future",
      title: "🚀 Phase 4: Community Growth & Expansion",
      type: "upcoming",
      description: "• Grow Discord to 1500+ members\n• Boost social media presence & promotions\n• Apply for CoinGecko and CoinMarketCap listings\n• Seek more mining pool partnerships",
      detailedDescription: {
        "Discord Community Growth": "Implement strategic community building initiatives to expand the Discord server to 1500+ active members. This includes hosting regular events, AMAs (Ask Me Anything sessions), community contests, and educational content to foster engagement and attract new users to the Flopcoin ecosystem.",
        "Social Media Expansion": "Launch comprehensive social media campaigns across Twitter, Telegram, and Reddit to increase brand awareness and attract new users. This includes regular content creation, influencer partnerships, and community-driven promotional activities.",
        "Major Exchange Listings": "Submit applications and work toward listings on CoinGecko and CoinMarketCap, two of the most influential cryptocurrency data platforms. These listings will provide crucial visibility, price tracking, and legitimacy within the broader crypto community.",
        "Mining Pool Partnerships": "Establish partnerships with additional mining pools to increase network hash rate and provide miners with more options for participating in the Flopcoin network, enhancing security and decentralization."
      },
      position: "top",
      // image: {
      //   url: communityGrowth,
      //   alt: "Community growth"
      // }
    },
    {
      id: 8,
      date: "Long-Term",
      title: "🧠 Creator Tipping Platform",
      type: "future",
      description: "• Long-Term Goal:\n• Build a community tipping platform to reward creators across mainstream social platforms",
      detailedDescription: {
        "Creator Tipping Platform": "Develop a revolutionary cross-platform tipping system that allows users to reward content creators on mainstream social media platforms (Twitter, YouTube, Twitch, Reddit, etc.) using FLOP tokens. This platform will bridge the gap between traditional social media and cryptocurrency adoption.",
        "Platform Integration": "Create browser extensions and mobile apps that seamlessly integrate with popular social platforms, allowing users to tip creators directly from their favorite apps without leaving the platform.",
        "Creator Onboarding": "Establish partnerships with content creators and influencers to build a robust ecosystem where creators can earn FLOP tokens for their content, creating a new revenue stream and driving adoption.",
        "Cross-Platform Compatibility": "Ensure the tipping system works across multiple social media platforms, providing a unified tipping experience that makes FLOP tokens accessible to millions of users worldwide."
      },
      position: "bottom",
      // image: {
      //   url: creatorPlatform,
      //   alt: "Creator platform"
      // }
    }
  ];

  /*🚀 💡 🔥 🧠 🛠️ 🧪 ⚙️ 🛰️ 💻 📦 ⛏️ 🔧 🧲 🌟 ⚡ 💥 🎯 📈 🏁 ⏳ 🧭 🚧 🧑‍💻 👨‍🚀 👩‍🚀 🧙 🧑‍🔧 🤖 🏗️ 🌐 🧱 🚦 📡 ✅ ❌ ⏱️ 🔄 🕹️*/ 
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="theme-container">
      {/* Animated background elements */}
      <div className="bg-orb-1"></div>
      <div className="bg-orb-2"></div>
      <div className="bg-orb-3"></div>
      <div className="bg-orb-4"></div>

      {/* Grid pattern overlay */}
      <div className="grid-pattern"></div>
      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 10 }} className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="header-container">
          {/* Header Image */}
          {headerImage.enabled && (
            <div className="header-image-container">
              <img 
                src={headerImage.url} 
                alt={headerImage.alt}
                className="header-image"
              />
              <div className="header-image-overlay"></div>
              <div className="header-image-gradient"></div>
              
              <div className="header-title-overlay">
                <h1 className="header-title">FLOPCOIN ROADMAP</h1>
              </div>
            </div>
          )}
          
          {/* Title (fallback when no image) */}
          {!headerImage.enabled && (
            <h1 className="header-title-fallback">FLOPCOIN ROADMAP</h1>
          )}
          
          <div className="flopcoin-logo-container">
            <img 
              src={flopcoinImage} 
              alt="Flopcoin Logo"
              className="flopcoin-logo"
            />
          </div>
          
          <p className="header-subtitle">
            From Genesis to Community • Building the Future of FLOP
          </p>
          
          <div className="legend-container">
            <div className="legend-item legend-completed">
              <div className="legend-dot legend-dot-completed"></div>
              <span className="legend-text legend-text-completed">Completed</span>
            </div>
            <div className="legend-item legend-upcoming">
              <div className="legend-dot legend-dot-upcoming"></div>
              <span className="legend-text legend-text-upcoming">Upcoming</span>
            </div>
            <div className="legend-item legend-future">
              <div className="legend-dot legend-dot-future"></div>
              <span className="legend-text legend-text-future">Future</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {/* Main timeline line */}
          <div className="timeline-line"></div>
          
          {/* Timeline items */}
          <div className="timeline-items">
            {roadmapData.map((item, index) => (
              <div key={item.id} className={`timeline-item ${item.position === 'top' ? 'timeline-item-left' : 'timeline-item-right'}`}>
                {/* Content bubble */}
                <div className={`bubble-container ${item.position === 'top' ? 'bubble-container-left' : 'bubble-container-right'}`}>
                  <div 
                    className={`bubble ${
                      item.type === 'completed' ? 'bubble-completed' :
                      item.type === 'upcoming' ? 'bubble-upcoming' :
                      'bubble-future'
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="bubble-header">
                      {item.type === 'completed' && <Zap className="bubble-icon bubble-icon-completed" />}
                      {item.type === 'upcoming' && <Calendar className="bubble-icon bubble-icon-upcoming" />}
                      {item.type === 'future' && <Star className="bubble-icon bubble-icon-future" />}
                      <span className="bubble-date">{item.date}</span>
                    </div>
                    
                    {/* Bubble Image */}
                    {item.image && (
                      <div className="bubble-image">
                        <img 
                          src={item.image.url} 
                          alt={item.image.alt}
                        />
                        <div className={`bubble-image-overlay ${
                          item.type === 'completed' ? 'bubble-image-overlay-completed' :
                          item.type === 'upcoming' ? 'bubble-image-overlay-upcoming' :
                          'bubble-image-overlay-future'
                        }`}></div>
                      </div>
                    )}
                    
                    <h3 className="bubble-title">{item.title}</h3>
                    <p className="bubble-description">{item.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="center-dot">
                  <div className={`center-dot-inner ${
                    item.type === 'completed' ? 'center-dot-completed' :
                    item.type === 'upcoming' ? 'center-dot-upcoming' :
                    'center-dot-future'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-section">
                {selectedItem.type === 'completed' && <Zap className="modal-icon bubble-icon-completed" />}
                {selectedItem.type === 'upcoming' && <Calendar className="modal-icon bubble-icon-upcoming" />}
                {selectedItem.type === 'future' && <Star className="modal-icon bubble-icon-future" />}
                <div>
                  <h2 className="modal-title">{selectedItem.title}</h2>
                  <p className="modal-date">{selectedItem.date}</p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="modal-close"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="modal-body">
              <div className={`modal-status-badge ${
                selectedItem.type === 'completed' ? 'legend-completed legend-text-completed' :
                selectedItem.type === 'upcoming' ? 'legend-upcoming legend-text-upcoming' :
                'legend-future legend-text-future'
              }`}>
                {selectedItem.type === 'completed' ? 'Completed' : selectedItem.type === 'upcoming' ? 'Upcoming' : 'Future Vision'}
              </div>
              
              {/* Modal Image */}
              {selectedItem.image && (
                <div className="modal-image">
                  <img 
                    src={selectedItem.image.url} 
                    alt={selectedItem.image.alt}
                  />
                  <div className={`modal-image-overlay ${
                    selectedItem.type === 'completed' ? 'bubble-image-overlay-completed' :
                    selectedItem.type === 'upcoming' ? 'bubble-image-overlay-upcoming' :
                    'bubble-image-overlay-future'
                  }`}></div>
                  <div className="modal-image-gradient"></div>
                </div>
              )}
              
              <div className="modal-description">
                {selectedItem.detailedDescription ? (
                  <div className="modal-details-grid">
                    {Object.entries(selectedItem.detailedDescription).map(([key, value], index) => (
                      <div key={index} className="modal-detail-row">
                        <h4 className="modal-detail-title">{key}</h4>
                        {typeof value === 'object' && value.text ? (
                          <div className="modal-detail-text">
                            <p>{value.text}</p>
                            {value.link && (
                              <a 
                                href={value.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="modal-detail-link"
                              >
                                Visit {key} →
                              </a>
                            )}
                          </div>
                        ) : (
                          <p className="modal-detail-text">{value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="modal-description-fallback">{selectedItem.description}</p>
                )}
              </div>
              
              <div className="modal-footer">
                <button 
                  onClick={closeModal}
                  className="modal-close-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapPage;