const QUESTION_BANK = {
  units: [
    {
      title: "OCR Engineering J823 - Materials",
      topics: [
        {
          title: "Material Properties",
          questions: [
            {
              type: "mcq",
              question: "Which property describes resistance to scratching or indentation?",
              options: ["Hardness", "Ductility", "Elasticity", "Density"],
              correct: 0,
              explanation: "Hardness describes resistance to scratching, indentation or wear."
            },
            {
              type: "mcq",
              question: "Which property allows a material to be drawn into wire?",
              options: ["Malleability", "Ductility", "Toughness", "Brittleness"],
              correct: 1,
              explanation: "Ductility is the ability of a material to be drawn into wire."
            },
            {
              type: "mcq",
              question: "Which property describes absorbing energy before breaking?",
              options: ["Toughness", "Brittleness", "Conductivity", "Density"],
              correct: 0,
              explanation: "Toughness is the ability to absorb energy before fracture."
            },
            {
              type: "mcq",
              question: "Which property allows a material to be hammered or rolled into shape?",
              options: ["Malleability", "Hardness", "Elasticity", "Conductivity"],
              correct: 0,
              explanation: "Malleability is the ability to be shaped by hammering or rolling."
            },
            {
              type: "mcq",
              question: "Which property describes a material returning to its original shape after force is removed?",
              options: ["Elasticity", "Plasticity", "Hardness", "Toughness"],
              correct: 0,
              explanation: "Elasticity is the ability to return to the original shape after deformation."
            },
            {
              type: "mcq",
              question: "Which property describes how well a material allows electricity to pass through it?",
              options: ["Conductivity", "Ductility", "Hardness", "Density"],
              correct: 0,
              explanation: "Electrical conductivity describes how well a material allows electric current to pass."
            },
            {
              type: "short",
              mode: "all",
              question: "Explain what ductility means.",
              keywords: ["draw", "wire"],
              markScheme: "Ductility is the ability of a material to be drawn into wire.",
              explanation: "A ductile material can be stretched or drawn into wire without breaking."
            },
            {
              type: "short",
              mode: "all",
              question: "State one reason stainless steel resists corrosion.",
              keywords: ["chromium", "oxide"],
              markScheme: "Chromium forms a protective oxide layer.",
              explanation: "The oxide layer helps prevent oxygen and water reaching the metal."
            },
            {
              type: "short",
              mode: "all",
              question: "Explain what toughness means.",
              keywords: ["energy", "breaking"],
              markScheme: "Toughness is the ability to absorb energy before breaking.",
              explanation: "Tough materials resist fracture when impact or force is applied."
            },
            {
              type: "short",
              mode: "all",
              question: "Explain what malleability means.",
              keywords: ["hammered", "shape"],
              markScheme: "Malleability is the ability to be hammered or rolled into shape.",
              explanation: "Malleable materials can be shaped without cracking."
            }
          ],
          longFormBank: {
            topics: ["stainless steel", "aluminium", "mild steel", "copper", "thermoplastic materials"],
            stems: ["Evaluate the suitability of", "Explain why", "Compare the use of", "Justify the choice of", "Describe the advantages and limitations of"],
            focuses: ["corrosion resistance", "strength and toughness", "weight reduction", "cost and availability", "manufacturing in a school workshop"],
            discussionPoints: [
              "Identify the relevant material properties.",
              "Link properties to the product or situation.",
              "Include at least one limitation.",
              "Use engineering vocabulary.",
              "End with a justified judgement."
            ]
          }
        },

        {
          title: "Metals and Alloys",
          questions: [
            {
              type: "mcq",
              question: "What is a ferrous metal?",
              options: ["A metal that contains iron", "A metal that contains copper", "A metal that cannot corrode", "A metal that is always lightweight"],
              correct: 0,
              explanation: "Ferrous metals contain iron."
            },
            {
              type: "mcq",
              question: "Which of these is non-ferrous?",
              options: ["Mild steel", "Cast iron", "Aluminium", "High carbon steel"],
              correct: 2,
              explanation: "Aluminium is non-ferrous because it does not contain iron."
            },
            {
              type: "mcq",
              question: "Why are alloys used in engineering?",
              options: ["To improve material properties", "To make all metals magnetic", "To make metals impossible to shape", "To remove useful properties"],
              correct: 0,
              explanation: "Alloys are used to improve properties such as strength, hardness or corrosion resistance."
            },
            {
              type: "mcq",
              question: "Which alloy is strongly associated with corrosion resistance?",
              options: ["Stainless steel", "Cast iron", "Lead", "Pure copper"],
              correct: 0,
              explanation: "Stainless steel is designed to resist corrosion."
            },
            {
              type: "short",
              mode: "any",
              question: "Give one example of a non-ferrous metal.",
              keywords: ["aluminium", "copper", "zinc", "lead"],
              markScheme: "Aluminium, copper, zinc and lead are examples of non-ferrous metals.",
              explanation: "Non-ferrous metals do not contain iron."
            },
            {
              type: "short",
              mode: "all",
              question: "Explain why alloys are useful.",
              keywords: ["improve", "properties"],
              markScheme: "Alloys are useful because they improve properties such as strength, hardness or corrosion resistance.",
              explanation: "Alloying changes the performance of the material."
            }
          ],
          longFormBank: {
            topics: ["mild steel", "stainless steel", "aluminium", "brass", "copper"],
            stems: ["Compare", "Evaluate the suitability of", "Justify the use of", "Explain the difference between", "Describe why a manufacturer might choose"],
            focuses: ["ferrous and non-ferrous classification", "corrosion resistance", "strength", "cost", "ease of manufacture"],
            discussionPoints: [
              "State whether the material is ferrous or non-ferrous.",
              "Refer to properties, not just names.",
              "Consider cost and availability.",
              "Give a product example.",
              "Make a justified conclusion."
            ]
          }
        }
      ]
    },

    {
      title: "OCR Engineering J823 - Manufacturing",
      topics: [
        {
          title: "Joining Methods",
          questions: [
            {
              type: "mcq",
              question: "Which process permanently joins metals by melting them together?",
              options: ["Welding", "Bolting", "Screwing", "Clipping"],
              correct: 0,
              explanation: "Welding permanently joins metals by heating and fusing them together."
            },
            {
              type: "mcq",
              question: "Which joining method is usually removable?",
              options: ["Welding", "Brazing", "Bolting", "Riveting"],
              correct: 2,
              explanation: "Bolted joints can usually be undone."
            },
            {
              type: "mcq",
              question: "Which process uses a filler metal with a lower melting point?",
              options: ["Brazing", "Filing", "Drilling", "Casting"],
              correct: 0,
              explanation: "Brazing uses a filler metal that melts below the parent metals."
            },
            {
              type: "mcq",
              question: "Which joining method is often used for sheet metal?",
              options: ["Riveting", "Turning", "Sanding", "Measuring"],
              correct: 0,
              explanation: "Riveting is commonly used to join sheet materials."
            },
            {
              type: "short",
              mode: "any",
              question: "State one advantage of bolting compared with welding.",
              keywords: ["removable", "maintenance", "repair", "replace"],
              markScheme: "Bolting is removable and allows parts to be taken apart for maintenance or repair.",
              explanation: "Temporary joints are useful when parts may need to be replaced or serviced."
            },
            {
              type: "short",
              mode: "all",
              question: "Explain why welding is classed as a permanent joining method.",
              keywords: ["melt", "fuse"],
              markScheme: "Welding melts and fuses the materials together.",
              explanation: "The parts become joined by fusion, so they cannot easily be separated."
            }
          ],
          longFormBank: {
            topics: ["welding", "bolting", "riveting", "brazing", "adhesive bonding"],
            stems: ["Evaluate the suitability of", "Compare", "Justify the use of", "Explain why", "Describe the advantages and limitations of"],
            focuses: ["permanent and temporary joints", "maintenance and repair", "strength", "safety", "manufacturing speed"],
            discussionPoints: [
              "State whether the joint is permanent or temporary.",
              "Explain why that matters.",
              "Refer to strength, safety or maintenance.",
              "Give a product example.",
              "End with a justified choice."
            ]
          }
        }
      ]
    }
  ]
};
