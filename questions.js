const QUESTION_BANK = {
  units: [
    {
      title: "OCR Engineering J823 - Materials",
      topics: [

        {
          title: "Polymers",
          questions: [
            {
              type: "mcq",
              question: "What type of structure do most polymers have?",
              options: ["Long chain molecules", "Crystal lattice", "Metallic grid", "Ionic structure"],
              correct: 0,
              explanation: "Polymers are made of long chains of repeating molecules."
            },
            {
              type: "mcq",
              question: "Which of these is a thermoplastic?",
              options: ["Epoxy resin", "Polyethylene (PE)", "Bakelite", "Urea formaldehyde"],
              correct: 1,
              explanation: "Polyethylene is a thermoplastic that can be reheated and reshaped."
            },
            {
              type: "mcq",
              question: "What happens to thermoplastics when heated?",
              options: ["They burn", "They melt and can be reshaped", "They stay rigid", "They shatter"],
              correct: 1,
              explanation: "Thermoplastics soften when heated and can be reshaped multiple times."
            },
            {
              type: "mcq",
              question: "Which type of polymer cannot be reshaped once set?",
              options: ["Thermoplastic", "Thermoset", "Elastomer", "Composite"],
              correct: 1,
              explanation: "Thermosetting polymers cannot be remelted after curing."
            },
            {
              type: "mcq",
              question: "Which property is typical of polymers?",
              options: ["High density", "Good electrical insulation", "High melting point", "Magnetic"],
              correct: 1,
              explanation: "Most polymers are good electrical insulators."
            },
            {
              type: "mcq",
              question: "Which polymer property makes them useful for packaging?",
              options: ["Brittleness", "Lightweight", "Magnetic", "Conductive"],
              correct: 1,
              explanation: "Polymers are lightweight, making them ideal for packaging."
            },

            {
              type: "short",
              mode: "any",
              question: "Give one example of a thermoplastic.",
              keywords: ["polyethylene", "pvc", "polystyrene", "polypropylene"],
              markScheme: "Examples include polyethylene (PE), PVC, polystyrene and polypropylene.",
              explanation: "Thermoplastics can be reheated and reshaped."
            },
            {
              type: "short",
              mode: "any",
              question: "Give one example of a thermosetting polymer.",
              keywords: ["epoxy", "bakelite", "urea"],
              markScheme: "Examples include epoxy resin, Bakelite and urea formaldehyde.",
              explanation: "Thermosets cannot be reshaped once set."
            },
            {
              type: "short",
              mode: "all",
              question: "Explain why thermoplastics can be reshaped.",
              keywords: ["heat", "soften"],
              markScheme: "Thermoplastics soften when heated, allowing them to be reshaped.",
              explanation: "The structure allows movement when heated."
            },
            {
              type: "short",
              mode: "all",
              question: "Explain one advantage of polymers in products.",
              keywords: ["light", "weight"],
              markScheme: "Polymers are lightweight, making them easy to handle and transport.",
              explanation: "Low density is a key advantage."
            }
          ],
          longFormBank: {
            topics: ["thermoplastics", "thermosetting polymers", "polyethylene", "PVC", "epoxy resin"],
            stems: ["Evaluate the suitability of", "Explain why", "Compare the use of", "Justify the choice of", "Describe the advantages and limitations of"],
            focuses: ["recyclability", "strength and durability", "cost and availability", "environmental impact", "use in packaging"],
            discussionPoints: [
              "Identify whether the polymer is thermoplastic or thermoset.",
              "Link structure to properties.",
              "Consider environmental impact.",
              "Give a real-world example.",
              "Make a justified conclusion."
            ]
          }
        },

        {
          title: "Material Properties",
          questions: [/* unchanged */],
          longFormBank: {/* unchanged */}
        },

        {
          title: "Metals and Alloys",
          questions: [/* unchanged */],
          longFormBank: {/* unchanged */}
        }

      ]
    },

    {
      title: "OCR Engineering J823 - Manufacturing",
      topics: [

        {
          title: "Casting",
          questions: [/* unchanged */],
          longFormBank: {/* unchanged */}
        },

        {
          title: "Joining Methods",
          questions: [/* unchanged */],
          longFormBank: {/* unchanged */}
        }

      ]
    }

  ]
};
