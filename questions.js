const QUESTION_BANK = {
  "units": [
    {
      "title": "OCR Engineering J823 - Materials",
      "topics": [
        {
  title: "R014 Dense Core — Manufacturing Processes & Production",
  questions: [

    // ===== PROCESSES: FORMING / MOULDING =====

    {
      type: "short",
      question: "State one reason injection moulding is suitable for mass production.",
      keywords: ["repeatable", "consistent", "fast", "low unit cost", "high volume"],
      acceptable: ["repeatable", "consistent", "fast", "low unit cost", "high volume"],
      traps: ["low setup cost"],
      trapResponse: "Injection moulding has high setup/tooling cost; unit cost becomes low at high volume.",
      mode: "any",
      markScheme: "1 mark for repeatability, speed, consistency or low unit cost at scale.",
      explanation: "Injection moulding produces identical parts quickly once the mould is made."
    },
    {
      type: "short",
      question: "State one disadvantage of injection moulding.",
      keywords: ["high tooling cost", "expensive mould", "setup cost", "not suitable for small batch"],
      acceptable: ["high tooling cost", "expensive mould", "setup cost", "not suitable for small batch"],
      traps: ["slow production"],
      trapResponse: "Injection moulding is fast in production; the main issue is high initial cost.",
      mode: "any",
      markScheme: "1 mark for high tooling/setup cost or poor suitability for low volume.",
      explanation: "The mould must be manufactured first, which is expensive."
    },

    // ===== PROCESSES: WASTING =====

    {
      type: "short",
      question: "State one advantage of machining.",
      keywords: ["accuracy", "precision", "tight tolerance", "custom parts", "small batch"],
      acceptable: ["accuracy", "precision", "tight tolerance", "custom parts", "small batch"],
      traps: ["low waste"],
      trapResponse: "Machining removes material, so it usually produces waste.",
      mode: "any",
      markScheme: "1 mark for accuracy, precision, or suitability for small/custom production.",
      explanation: "Machining allows precise control of dimensions."
    },
    {
      type: "short",
      question: "State one disadvantage of machining.",
      keywords: ["waste", "slow", "expensive", "material removal", "high unit cost"],
      acceptable: ["waste", "slow", "expensive", "material removal", "high unit cost"],
      traps: ["no accuracy"],
      trapResponse: "Machining is often used because it is highly accurate.",
      mode: "any",
      markScheme: "1 mark for waste, slow production or high cost.",
      explanation: "Material is removed, increasing waste and cost."
    },

    // ===== PROCESSES: CASTING =====

    {
      type: "short",
      question: "State one reason casting is used in manufacturing.",
      keywords: ["complex shapes", "large components", "metal parts", "repeatable", "hollow shapes"],
      acceptable: ["complex shapes", "large components", "metal parts", "repeatable", "hollow shapes"],
      traps: ["no mould needed"],
      trapResponse: "Casting requires a mould or pattern to form the shape.",
      mode: "any",
      markScheme: "1 mark for complex shapes, large components or repeatability.",
      explanation: "Molten material can fill complex mould shapes."
    },

    // ===== PRODUCTION AIDS =====

    {
      type: "short",
      question: "State one purpose of a jig in manufacturing.",
      keywords: ["accuracy", "repeatability", "positioning", "guiding tool", "consistency"],
      acceptable: ["accuracy", "repeatability", "positioning", "guiding tool", "consistency"],
      traps: ["strengthens material"],
      trapResponse: "A jig does not change material properties; it controls positioning.",
      mode: "any",
      markScheme: "1 mark for accuracy, repeatability or positioning.",
      explanation: "Jigs help ensure consistent placement or movement during production."
    },

    // ===== SCALE OF PRODUCTION =====

    {
      type: "short",
      question: "State one characteristic of mass production.",
      keywords: ["high volume", "standardised", "automation", "low unit cost", "repetitive"],
      acceptable: ["high volume", "standardised", "automation", "low unit cost", "repetitive"],
      traps: ["custom made"],
      trapResponse: "Mass production focuses on identical products, not customisation.",
      mode: "any",
      markScheme: "1 mark for high volume, standardisation or low unit cost.",
      explanation: "Mass production produces large quantities of identical items."
    },
    {
      type: "short",
      question: "State one characteristic of batch production.",
      keywords: ["groups", "flexible", "medium volume", "changeover", "variety"],
      acceptable: ["groups", "flexible", "medium volume", "changeover", "variety"],
      traps: ["continuous flow"],
      trapResponse: "Continuous flow is linked to mass production, not batch production.",
      mode: "any",
      markScheme: "1 mark for grouped production or flexibility.",
      explanation: "Batch production produces items in sets or groups."
    },

    // ===== QUALITY / CONSISTENCY =====

    {
      type: "short",
      question: "State one reason consistency is important in manufacturing.",
      keywords: ["quality", "fit", "interchangeable", "reliability", "reduce defects"],
      acceptable: ["quality", "fit", "interchangeable", "reliability", "reduce defects"],
      traps: ["increases weight"],
      trapResponse: "Consistency affects quality and fit, not weight.",
      mode: "any",
      markScheme: "1 mark for quality, fit, interchangeability or reliability.",
      explanation: "Consistent products fit and function correctly."
    },

    // ===== SAFETY =====

    {
      type: "short",
      question: "State one safety precaution when using machinery.",
      keywords: ["goggles", "guards", "secure work", "tie hair", "no loose clothing"],
      acceptable: ["goggles", "guards", "secure work", "tie hair", "no loose clothing"],
      traps: ["work by hand"],
      trapResponse: "Work should be secured, not held loosely.",
      mode: "any",
      markScheme: "1 mark for a valid safety precaution.",
      explanation: "Machinery can be dangerous if proper precautions are not taken."
    },

    // ===== MCQs (EXAM STYLE) =====

    {
      type: "mcq",
      question: "Which process is best for producing high volumes of identical plastic parts?",
      options: ["Injection moulding", "Machining", "Drilling", "Filing"],
      correct: 0,
      explanation: "Injection moulding is used for mass production of plastics."
    },
    {
      type: "mcq",
      question: "Which process removes material to form a shape?",
      options: ["Machining", "Casting", "Moulding", "Forming"],
      correct: 0,
      explanation: "Machining removes material using cutting tools."
    },
    {
      type: "mcq",
      question: "What is the main function of a jig?",
      options: ["Position or guide work accurately", "Melt material", "Test strength", "Polish surfaces"],
      correct: 0,
      explanation: "Jigs improve accuracy and repeatability."
    },
    {
      type: "mcq",
      question: "Which type of production involves making products in groups?",
      options: ["Batch production", "Mass production", "Continuous production", "One-off production"],
      correct: 0,
      explanation: "Batch production produces items in sets."
    },
    {
      type: "mcq",
      question: "Which is a key disadvantage of machining?",
      options: ["Material waste", "Low accuracy", "No flexibility", "Only works on plastics"],
      correct: 0,
      explanation: "Machining removes material, creating waste."
    }
  ]
},
        {
          "title": "Polymers",
          "questions": [
            {
              "type": "mcq",
              "question": "What type of structure do most polymers have?",
              "options": [
                "Long chain molecules",
                "Crystal lattice",
                "Metallic grid",
                "Ionic structure"
              ],
              "correct": 0,
              "explanation": "Polymers are made from long chains of repeating molecules."
            },
            {
              "type": "mcq",
              "question": "Which of these is a thermoplastic?",
              "options": [
                "Epoxy resin",
                "Urea formaldehyde",
                "Acrylic",
                "Melamine formaldehyde"
              ],
              "correct": 2,
              "explanation": "Acrylic is a thermoplastic because it can be reheated and reshaped."
            },
            {
              "type": "short",
              "question": "State one property of a thermoplastic.",
              "keywords": [
                "reheated",
                "reshaped",
                "remoulded",
                "softens"
              ],
              "mode": "any",
              "traps": [
                "strong",
                "hard"
              ],
              "trapResponse": "Trap answer — strength or hardness may be true for some plastics, but the key thermoplastic property is that it softens when heated and can be reshaped.",
              "markScheme": "A thermoplastic softens when heated and can be reshaped.",
              "explanation": "Thermoplastics can be heated, formed, cooled, and reheated again."
            },
            {
              "type": "short",
              "question": "State one property of a thermosetting plastic.",
              "keywords": [
                "cannot",
                "reshape",
                "permanent",
                "hardens"
              ],
              "mode": "any",
              "traps": [
                "reheated",
                "remoulded"
              ],
              "trapResponse": "Trap answer — thermosetting plastics cannot be repeatedly reheated and reshaped.",
              "markScheme": "A thermosetting plastic sets permanently and cannot be reshaped by heating.",
              "explanation": "Thermosetting plastics form strong permanent bonds when cured."
            },
            {
              "type": "mcq",
              "question": "Which polymer is commonly used for safety glasses and machine guards?",
              "options": [
                "Acrylic",
                "PVC",
                "Nylon",
                "Polypropylene"
              ],
              "correct": 0,
              "explanation": "Acrylic is transparent and impact resistant, making it suitable for guards and displays."
            },
            {
              "type": "mcq",
              "question": "Which polymer is often used for pipes and cable insulation?",
              "options": [
                "PVC",
                "Nylon",
                "Acrylic",
                "Epoxy resin"
              ],
              "correct": 0,
              "explanation": "PVC is commonly used for pipes, guttering and electrical insulation."
            },
            {
              "type": "short",
              "question": "Why are polymers often used instead of metals?",
              "keywords": [
                "lightweight",
                "corrosion",
                "cheap",
                "insulator"
              ],
              "mode": "any",
              "traps": [
                "light"
              ],
              "trapResponse": "Trap answer — 'light' is vague. The better engineering term is 'lightweight'.",
              "markScheme": "Polymers may be lightweight, corrosion resistant, cheap, or good electrical insulators.",
              "explanation": "Polymers are useful because they can offer properties metals may not."
            },
            {
              "type": "mcq",
              "question": "Which material is a thermosetting plastic?",
              "options": [
                "Acrylic",
                "Polypropylene",
                "Epoxy resin",
                "PVC"
              ],
              "correct": 2,
              "explanation": "Epoxy resin is a thermosetting plastic."
            },
            {
              "type": "short",
              "question": "What does biodegradable mean?",
              "keywords": [
                "break",
                "down",
                "natural",
                "microorganisms"
              ],
              "mode": "any",
              "traps": [
                "recyclable"
              ],
              "trapResponse": "Trap answer — recyclable and biodegradable are not the same thing.",
              "markScheme": "Biodegradable materials can be broken down naturally by microorganisms.",
              "explanation": "Biodegradable polymers reduce long-term environmental waste."
            },
            {
              "type": "mcq",
              "question": "Why can polymers be difficult to dispose of?",
              "options": [
                "They rust quickly",
                "Many do not biodegrade easily",
                "They conduct electricity",
                "They melt at room temperature"
              ],
              "correct": 1,
              "explanation": "Many polymers take a long time to biodegrade."
            },
            {
              "type": "mcq",
              "question": "Which polymer is often used for gears, bearings and moving parts?",
              "options": [
                "Nylon",
                "Glass",
                "Mild steel",
                "Concrete"
              ],
              "correct": 0,
              "explanation": "Nylon has low friction and good wear resistance."
            },
            {
              "type": "short",
              "question": "Why is PVC useful for electrical insulation?",
              "keywords": [
                "insulator",
                "does not conduct",
                "electricity"
              ],
              "mode": "any",
              "traps": [
                "conductor"
              ],
              "trapResponse": "Trap answer — conductors allow electricity to pass. Insulators resist electrical flow.",
              "markScheme": "PVC is a good electrical insulator and does not conduct electricity easily.",
              "explanation": "This makes PVC suitable for cable coating."
            }
          ]
        },
        {
          "title": "Material Properties",
          "questions": [
            {
              "type": "mcq",
              "question": "Which property describes resistance to scratching or indentation?",
              "options": [
                "Ductility",
                "Hardness",
                "Toughness",
                "Elasticity"
              ],
              "correct": 1,
              "explanation": "Hardness is resistance to scratching, indentation or wear."
            },
            {
              "type": "mcq",
              "question": "Which property describes the ability to absorb energy before breaking?",
              "options": [
                "Toughness",
                "Brittleness",
                "Conductivity",
                "Density"
              ],
              "correct": 0,
              "explanation": "Toughness is the ability to absorb energy and resist fracture."
            },
            {
              "type": "short",
              "question": "What does ductility mean?",
              "keywords": [
                "drawn",
                "wire"
              ],
              "mode": "all",
              "traps": [
                "bend",
                "stretch"
              ],
              "trapResponse": "Trap answer — ductility is not just bending or stretching. It means the material can be drawn into wire.",
              "markScheme": "Ductility is the ability of a material to be drawn into wire.",
              "explanation": "Copper is ductile, which is why it is useful for electrical wiring."
            },
            {
              "type": "short",
              "question": "What does malleability mean?",
              "keywords": [
                "hammered",
                "sheet"
              ],
              "mode": "all",
              "traps": [
                "wire"
              ],
              "trapResponse": "Trap answer — wire relates to ductility. Malleability means being formed into sheets.",
              "markScheme": "Malleability is the ability of a material to be hammered or rolled into sheet form.",
              "explanation": "Malleable metals can be shaped without cracking."
            },
            {
              "type": "mcq",
              "question": "Which property describes a material that breaks without much plastic deformation?",
              "options": [
                "Ductile",
                "Malleable",
                "Brittle",
                "Elastic"
              ],
              "correct": 2,
              "explanation": "Brittle materials break suddenly with little deformation."
            },
            {
              "type": "mcq",
              "question": "Which property describes a material returning to its original shape after force is removed?",
              "options": [
                "Elasticity",
                "Toughness",
                "Hardness",
                "Conductivity"
              ],
              "correct": 0,
              "explanation": "Elasticity is the ability to return to the original shape after deformation."
            },
            {
              "type": "short",
              "question": "State one reason material properties are important in engineering.",
              "keywords": [
                "suitable",
                "safe",
                "function",
                "load",
                "environment"
              ],
              "mode": "any",
              "traps": [
                "looks"
              ],
              "trapResponse": "Trap answer — appearance can matter, but engineering material choice is mainly about function, safety and suitability.",
              "markScheme": "Material properties help engineers choose a suitable and safe material for a product or environment.",
              "explanation": "A material must match the job it is expected to do."
            },
            {
              "type": "mcq",
              "question": "Which property is most important for electrical wiring?",
              "options": [
                "Electrical conductivity",
                "Brittleness",
                "Porosity",
                "Transparency"
              ],
              "correct": 0,
              "explanation": "Electrical wiring needs a material with good electrical conductivity."
            },
            {
              "type": "short",
              "question": "What does corrosion resistance mean?",
              "keywords": [
                "resist",
                "rust",
                "oxidation",
                "chemical"
              ],
              "mode": "any",
              "traps": [
                "waterproof"
              ],
              "trapResponse": "Trap answer — waterproof is not the same as corrosion resistant.",
              "markScheme": "Corrosion resistance is the ability to resist rusting, oxidation or chemical attack.",
              "explanation": "Stainless steel is corrosion resistant because of its chromium oxide layer."
            },
            {
              "type": "mcq",
              "question": "Which property describes how heavy a material is for its size?",
              "options": [
                "Density",
                "Elasticity",
                "Hardness",
                "Ductility"
              ],
              "correct": 0,
              "explanation": "Density describes mass per unit volume."
            },
            {
              "type": "short",
              "question": "What does toughness mean?",
              "keywords": [
                "absorb",
                "energy",
                "breaking",
                "fracture"
              ],
              "mode": "any",
              "traps": [
                "hard"
              ],
              "trapResponse": "Trap answer — hard and tough are not the same. Toughness is about absorbing energy before breaking.",
              "markScheme": "Toughness is the ability to absorb energy before breaking.",
              "explanation": "A tough material resists fracture under impact."
            },
            {
              "type": "mcq",
              "question": "Which property is most important for a spring?",
              "options": [
                "Elasticity",
                "Brittleness",
                "Porosity",
                "Transparency"
              ],
              "correct": 0,
              "explanation": "A spring needs elasticity so it returns to its original shape."
            }
          ]
        },
        {
          "title": "Metals and Alloys",
          "questions": [
            {
              "type": "mcq",
              "question": "What is an alloy?",
              "options": [
                "A pure metal",
                "A mixture of metals or a metal with another element",
                "A type of polymer",
                "A ceramic coating"
              ],
              "correct": 1,
              "explanation": "An alloy is made by combining a metal with other elements to improve properties."
            },
            {
              "type": "mcq",
              "question": "Which alloy contains iron and carbon?",
              "options": [
                "Brass",
                "Bronze",
                "Steel",
                "Solder"
              ],
              "correct": 2,
              "explanation": "Steel is an alloy of iron and carbon."
            },
            {
              "type": "short",
              "question": "Why are alloys used instead of pure metals?",
              "keywords": [
                "improve",
                "properties",
                "stronger",
                "harder",
                "corrosion"
              ],
              "mode": "any",
              "traps": [
                "cheaper"
              ],
              "trapResponse": "Trap answer — cost can matter, but the main engineering reason is improved properties.",
              "markScheme": "Alloys are used because they can have improved properties such as strength, hardness or corrosion resistance.",
              "explanation": "Alloying changes the structure and properties of a metal."
            },
            {
              "type": "mcq",
              "question": "Which alloy is made from copper and zinc?",
              "options": [
                "Bronze",
                "Brass",
                "Stainless steel",
                "High carbon steel"
              ],
              "correct": 1,
              "explanation": "Brass is an alloy of copper and zinc."
            },
            {
              "type": "mcq",
              "question": "Which alloy is made from copper and tin?",
              "options": [
                "Bronze",
                "Brass",
                "Mild steel",
                "Solder"
              ],
              "correct": 0,
              "explanation": "Bronze is an alloy of copper and tin."
            },
            {
              "type": "short",
              "question": "Why is stainless steel resistant to corrosion?",
              "keywords": [
                "chromium",
                "oxide",
                "protective"
              ],
              "mode": "any",
              "traps": [
                "carbon"
              ],
              "trapResponse": "Trap answer — carbon affects hardness and strength, but chromium gives stainless steel corrosion resistance.",
              "markScheme": "Stainless steel contains chromium, which forms a protective oxide layer.",
              "explanation": "The chromium oxide layer helps prevent rusting."
            },
            {
              "type": "mcq",
              "question": "Which metal is commonly used for electrical wiring?",
              "options": [
                "Copper",
                "Lead",
                "Cast iron",
                "Tin"
              ],
              "correct": 0,
              "explanation": "Copper is used for wiring because it has excellent electrical conductivity."
            },
            {
              "type": "short",
              "question": "State one property of aluminium that makes it useful in engineering.",
              "keywords": [
                "lightweight",
                "corrosion",
                "malleable",
                "conductive"
              ],
              "mode": "any",
              "traps": [
                "light"
              ],
              "trapResponse": "Trap answer — use 'lightweight' rather than 'light' for engineering answers.",
              "markScheme": "Aluminium is lightweight, corrosion resistant, malleable and a good conductor.",
              "explanation": "Aluminium is useful where low weight is important."
            },
            {
              "type": "mcq",
              "question": "Which metal is magnetic?",
              "options": [
                "Copper",
                "Aluminium",
                "Iron",
                "Zinc"
              ],
              "correct": 2,
              "explanation": "Iron is a ferrous metal and is magnetic."
            },
            {
              "type": "short",
              "question": "What is meant by a ferrous metal?",
              "keywords": [
                "contains",
                "iron"
              ],
              "mode": "all",
              "traps": [
                "magnetic"
              ],
              "trapResponse": "Trap answer — many ferrous metals are magnetic, but the definition is that they contain iron.",
              "markScheme": "A ferrous metal is a metal that contains iron.",
              "explanation": "Examples include mild steel, cast iron and stainless steel."
            },
            {
              "type": "mcq",
              "question": "Which of these is a non-ferrous metal?",
              "options": [
                "Aluminium",
                "Mild steel",
                "Cast iron",
                "High carbon steel"
              ],
              "correct": 0,
              "explanation": "Aluminium does not contain iron, so it is non-ferrous."
            },
            {
              "type": "short",
              "question": "Why is mild steel widely used?",
              "keywords": [
                "strong",
                "cheap",
                "available",
                "welded"
              ],
              "mode": "any",
              "traps": [
                "rustproof"
              ],
              "trapResponse": "Trap answer — mild steel is not naturally rustproof. It needs protection from corrosion.",
              "markScheme": "Mild steel is strong, relatively cheap, widely available and easy to weld.",
              "explanation": "It is common in general engineering."
            }
          ]
        },
        {
          "title": "Ceramics and Composites",
          "questions": [
            {
              "type": "mcq",
              "question": "Which of these is a ceramic material?",
              "options": [
                "Alumina",
                "PVC",
                "Copper",
                "Nylon"
              ],
              "correct": 0,
              "explanation": "Alumina is a ceramic material."
            },
            {
              "type": "mcq",
              "question": "Which property is common in many ceramics?",
              "options": [
                "High hardness",
                "High ductility",
                "Easy melting",
                "High flexibility"
              ],
              "correct": 0,
              "explanation": "Many ceramics are hard and heat resistant but brittle."
            },
            {
              "type": "short",
              "question": "State one disadvantage of ceramics.",
              "keywords": [
                "brittle",
                "crack",
                "shatter"
              ],
              "mode": "any",
              "traps": [
                "rust"
              ],
              "trapResponse": "Trap answer — ceramics do not rust like ferrous metals. A key disadvantage is brittleness.",
              "markScheme": "Ceramics are brittle and may crack or shatter under impact.",
              "explanation": "This limits their use where shock loads occur."
            },
            {
              "type": "mcq",
              "question": "What is a composite material?",
              "options": [
                "A material made from two or more different materials",
                "A pure metal",
                "A biodegradable polymer",
                "A liquid adhesive"
              ],
              "correct": 0,
              "explanation": "A composite combines materials to improve performance."
            },
            {
              "type": "short",
              "question": "Why are composites used in engineering?",
              "keywords": [
                "combine",
                "properties",
                "strength",
                "lightweight"
              ],
              "mode": "any",
              "traps": [
                "cheap"
              ],
              "trapResponse": "Trap answer — some composites are expensive. The key point is combined properties.",
              "markScheme": "Composites combine useful properties such as strength and low weight.",
              "explanation": "The reinforcement and matrix work together."
            },
            {
              "type": "mcq",
              "question": "Which of these is a composite?",
              "options": [
                "Carbon fibre reinforced polymer",
                "Copper",
                "Acrylic",
                "Mild steel"
              ],
              "correct": 0,
              "explanation": "Carbon fibre reinforced polymer is a composite."
            },
            {
              "type": "short",
              "question": "What is the matrix in a composite?",
              "keywords": [
                "binds",
                "holds",
                "reinforcement"
              ],
              "mode": "any",
              "traps": [
                "cuts"
              ],
              "trapResponse": "Trap answer — the matrix does not cut the material. It holds the reinforcement in place.",
              "markScheme": "The matrix binds and supports the reinforcement material.",
              "explanation": "In many composites the matrix is a polymer resin."
            },
            {
              "type": "mcq",
              "question": "Which material is commonly used as reinforcement in a composite?",
              "options": [
                "Glass fibre",
                "Tin",
                "PVC foam",
                "Solder"
              ],
              "correct": 0,
              "explanation": "Glass fibre is commonly used as reinforcement."
            },
            {
              "type": "short",
              "question": "State one use of carbon fibre composite.",
              "keywords": [
                "bike",
                "aircraft",
                "car",
                "sports",
                "aerospace"
              ],
              "mode": "any",
              "traps": [
                "pipes"
              ],
              "trapResponse": "Trap answer — pipes may use composites, but a stronger answer is aircraft, bikes, cars or sports equipment.",
              "markScheme": "Carbon fibre composite is used in aircraft, racing cars, bicycles and sports equipment.",
              "explanation": "It is strong and lightweight."
            },
            {
              "type": "mcq",
              "question": "Why are ceramics used for cutting tools?",
              "options": [
                "They can be very hard and heat resistant",
                "They are very ductile",
                "They are magnetic",
                "They biodegrade quickly"
              ],
              "correct": 0,
              "explanation": "Cutting tools need hardness and heat resistance."
            },
            {
              "type": "short",
              "question": "What does brittle mean?",
              "keywords": [
                "breaks",
                "little",
                "deformation"
              ],
              "mode": "any",
              "traps": [
                "bends"
              ],
              "trapResponse": "Trap answer — bending suggests ductility or flexibility, not brittleness.",
              "markScheme": "Brittle materials break with little deformation.",
              "explanation": "Glass and many ceramics are brittle."
            },
            {
              "type": "mcq",
              "question": "Which material type is often used for electrical insulators?",
              "options": [
                "Ceramic",
                "Copper",
                "Brass",
                "Mild steel"
              ],
              "correct": 0,
              "explanation": "Ceramics are often good electrical insulators."
            }
          ]
        },
        {
          "title": "Smart and Modern Materials",
          "questions": [
            {
              "type": "mcq",
              "question": "What is a smart material?",
              "options": [
                "A material that changes properties in response to a stimulus",
                "A material with a barcode",
                "A cheap metal",
                "A material made only by hand"
              ],
              "correct": 0,
              "explanation": "Smart materials respond to changes such as heat, light, stress or electricity."
            },
            {
              "type": "mcq",
              "question": "Which smart material returns to a previous shape when heated?",
              "options": [
                "Shape memory alloy",
                "Mild steel",
                "Acrylic",
                "Concrete"
              ],
              "correct": 0,
              "explanation": "Shape memory alloys can return to a set shape when heated."
            },
            {
              "type": "short",
              "question": "What stimulus can activate thermochromic materials?",
              "keywords": [
                "heat",
                "temperature"
              ],
              "mode": "any",
              "traps": [
                "light"
              ],
              "trapResponse": "Trap answer — light relates to photochromic materials. Thermochromic materials respond to temperature.",
              "markScheme": "Thermochromic materials change colour when temperature changes.",
              "explanation": "They are used in temperature indicators."
            },
            {
              "type": "short",
              "question": "What stimulus can activate photochromic materials?",
              "keywords": [
                "light",
                "uv",
                "sunlight"
              ],
              "mode": "any",
              "traps": [
                "heat"
              ],
              "trapResponse": "Trap answer — heat relates to thermochromic materials. Photochromic materials respond to light.",
              "markScheme": "Photochromic materials change in response to light or UV.",
              "explanation": "They are used in lenses that darken in sunlight."
            },
            {
              "type": "mcq",
              "question": "Which material is useful for glasses that darken in sunlight?",
              "options": [
                "Photochromic material",
                "Thermosetting plastic",
                "Mild steel",
                "Brass"
              ],
              "correct": 0,
              "explanation": "Photochromic materials respond to light."
            },
            {
              "type": "short",
              "question": "State one use of shape memory alloy.",
              "keywords": [
                "braces",
                "frames",
                "actuator",
                "medical",
                "glasses"
              ],
              "mode": "any",
              "traps": [
                "paint"
              ],
              "trapResponse": "Trap answer — paint is not a typical shape memory alloy use.",
              "markScheme": "Shape memory alloys can be used in braces, frames, actuators or medical devices.",
              "explanation": "They are useful where controlled movement or shape recovery is needed."
            },
            {
              "type": "mcq",
              "question": "Which material can generate a voltage when stressed?",
              "options": [
                "Piezoelectric material",
                "Bronze",
                "PVC",
                "Glass fibre"
              ],
              "correct": 0,
              "explanation": "Piezoelectric materials produce an electrical output when mechanically stressed."
            },
            {
              "type": "short",
              "question": "What is a possible advantage of modern materials?",
              "keywords": [
                "improved",
                "performance",
                "lighter",
                "responsive",
                "efficient"
              ],
              "mode": "any",
              "traps": [
                "traditional"
              ],
              "trapResponse": "Trap answer — modern materials are not chosen just because they are modern. They must improve performance.",
              "markScheme": "Modern materials may improve performance by being lighter, stronger, responsive or more efficient.",
              "explanation": "Selection should be based on function."
            },
            {
              "type": "mcq",
              "question": "Which material changes colour with temperature?",
              "options": [
                "Thermochromic material",
                "Photochromic material",
                "Stainless steel",
                "Nylon"
              ],
              "correct": 0,
              "explanation": "Thermochromic materials respond to temperature change."
            },
            {
              "type": "short",
              "question": "Why might smart materials be useful in safety products?",
              "keywords": [
                "warn",
                "change",
                "detect",
                "temperature",
                "signal"
              ],
              "mode": "any",
              "traps": [
                "decorative"
              ],
              "trapResponse": "Trap answer — decoration may be possible, but safety uses depend on warning, detection or response.",
              "markScheme": "Smart materials can warn users or respond when conditions change.",
              "explanation": "They can make hazards more visible."
            },
            {
              "type": "mcq",
              "question": "Which material would be best for a temperature warning label?",
              "options": [
                "Thermochromic material",
                "Mild steel",
                "Acrylic",
                "Copper"
              ],
              "correct": 0,
              "explanation": "A thermochromic label can change colour at a set temperature."
            },
            {
              "type": "short",
              "question": "Give one reason smart materials may not always be used.",
              "keywords": [
                "cost",
                "availability",
                "complex",
                "durability"
              ],
              "mode": "any",
              "traps": [
                "colour"
              ],
              "trapResponse": "Trap answer — colour alone is not a strong disadvantage. Cost, complexity or durability are better reasons.",
              "markScheme": "Smart materials may be costly, difficult to source, complex or less durable in some applications.",
              "explanation": "They must be justified against the product requirements."
            }
          ]
        }
      ]
    },
    {
      "title": "OCR Engineering J823 - Manufacturing",
      "topics": [
         {
    title: "General Manufacturing Processes",
    questions: [
{
  type: "mcq",
  question: "Which of the following is a wasting process?",
  options: ["Casting", "Drilling", "Forging", "3D printing"],
  correct: 1,
  explanation: "Drilling removes material, making it a wasting process."
},
{
  type: "mcq",
  question: "Which process involves shaping heated metal using force?",
  options: ["Forging", "Injection moulding", "Laser cutting", "Turning"],
  correct: 0,
  explanation: "Forging shapes heated metal using compressive force."
},
{
  type: "mcq",
  question: "Which process is additive?",
  options: ["Milling", "Casting", "3D printing", "Turning"],
  correct: 2,
  explanation: "3D printing builds material layer by layer."
},
{
  type: "mcq",
  question: "Which tool is used in turning operations?",
  options: ["Lathe", "Pillar drill", "Laser cutter", "Vacuum former"],
  correct: 0,
  explanation: "A lathe is used for turning operations."
},
{
  type: "mcq",
  question: "What type of process is injection moulding?",
  options: ["Wasting", "Forming", "Additive", "Joining"],
  correct: 1,
  explanation: "Injection moulding shapes molten material into a mould."
},
      {
  type: "mcq",
  question: "Which of the following is a wasting process?",
  options: ["Casting", "Drilling", "Forging", "3D printing"],
  correct: 1,
  explanation: "Drilling removes material, making it a wasting process."
},
{
  type: "mcq",
  question: "Which process involves shaping heated metal using force?",
  options: ["Forging", "Injection moulding", "Laser cutting", "Turning"],
  correct: 0,
  explanation: "Forging shapes heated metal using compressive force."
},
{
  type: "mcq",
  question: "Which process is additive?",
  options: ["Milling", "Casting", "3D printing", "Turning"],
  correct: 2,
  explanation: "3D printing builds material layer by layer."
},
{
  type: "mcq",
  question: "Which tool is used in turning operations?",
  options: ["Lathe", "Pillar drill", "Laser cutter", "Vacuum former"],
  correct: 0,
  explanation: "A lathe is used for turning operations."
},
{
  type: "mcq",
  question: "What type of process is injection moulding?",
  options: ["Wasting", "Forming", "Additive", "Joining"],
  correct: 1,
  explanation: "Injection moulding shapes molten material into a mould."
},
{
  type: "mcq",
  question: "Which process is best for producing complex plastic shapes in high volume?",
  options: ["Vacuum forming", "Injection moulding", "Turning", "Casting"],
  correct: 1,
  explanation: "Injection moulding is ideal for high-volume complex plastic parts."
},
{
  type: "mcq",
  question: "Which process joins metals permanently using heat?",
  options: ["Bolting", "Welding", "Clipping", "Riveting"],
  correct: 1,
  explanation: "Welding joins metals using heat."
},
{
  type: "mcq",
  question: "Which of the following is a finishing process?",
  options: ["Milling", "Drilling", "Painting", "Turning"],
  correct: 2,
  explanation: "Painting is used to improve surface finish."
},
{
  type: "mcq",
  question: "What is the main purpose of a jig?",
  options: ["Improve accuracy", "Heat material", "Melt plastic", "Join metals"],
  correct: 0,
  explanation: "Jigs are used to guide tools and improve accuracy."
},
{
  type: "mcq",
  question: "Which process uses a rotating cutting tool to remove material?",
  options: ["Casting", "Milling", "Forging", "Extrusion"],
  correct: 1,
  explanation: "Milling removes material using a rotating cutter."
},
{
  type: "mcq",
  question: "Which process is best for producing complex plastic shapes in high volume?",
  options: ["Vacuum forming", "Injection moulding", "Turning", "Casting"],
  correct: 1,
  explanation: "Injection moulding is ideal for high-volume complex plastic parts."
},
{
  type: "mcq",
  question: "Which process joins metals permanently using heat?",
  options: ["Bolting", "Welding", "Clipping", "Riveting"],
  correct: 1,
  explanation: "Welding joins metals using heat."
},
{
  type: "mcq",
  question: "Which of the following is a finishing process?",
  options: ["Milling", "Drilling", "Painting", "Turning"],
  correct: 2,
  explanation: "Painting is used to improve surface finish."
},
{
  type: "mcq",
  question: "What is the main purpose of a jig?",
  options: ["Improve accuracy", "Heat material", "Melt plastic", "Join metals"],
  correct: 0,
  explanation: "Jigs are used to guide tools and improve accuracy."
},
{
  type: "mcq",
  question: "Which process uses a rotating cutting tool to remove material?",
  options: ["Casting", "Milling", "Forging", "Extrusion"],
  correct: 1,
  explanation: "Milling removes material using a rotating cutter."
},    ]
  },
        {
          "title": "Casting",
          "questions": [
            {
              "type": "mcq",
              "question": "What is casting?",
              "options": [
                "Pouring molten material into a mould",
                "Cutting metal with a drill",
                "Joining two metals with heat",
                "Bending sheet metal"
              ],
              "correct": 0,
              "explanation": "Casting involves pouring molten material into a mould and allowing it to solidify."
            },
            {
              "type": "mcq",
              "question": "What material state is used in casting?",
              "options": [
                "Molten liquid",
                "Powder",
                "Solid bar",
                "Foam"
              ],
              "correct": 0,
              "explanation": "The material is heated until molten before being poured into the mould."
            },
            {
              "type": "mcq",
              "question": "Which casting process uses a pattern pressed into sand?",
              "options": [
                "Sand casting",
                "Injection moulding",
                "Brazing",
                "Turning"
              ],
              "correct": 0,
              "explanation": "Sand casting uses a sand mould formed around a pattern."
            },
            {
              "type": "mcq",
              "question": "What happens after molten metal is poured into a mould?",
              "options": [
                "It solidifies",
                "It evaporates",
                "It becomes plastic",
                "It is soldered"
              ],
              "correct": 0,
              "explanation": "The molten metal cools and solidifies into the mould shape."
            },
            {
              "type": "mcq",
              "question": "Why is a pattern used in sand casting?",
              "options": [
                "To create the mould cavity",
                "To polish the metal",
                "To cool the casting",
                "To join two parts"
              ],
              "correct": 0,
              "explanation": "The pattern creates the shape of the mould cavity."
            },
            {
              "type": "mcq",
              "question": "Which product could be made by casting?",
              "options": [
                "Engine block",
                "Paper label",
                "Electrical cable",
                "Flat drawing"
              ],
              "correct": 0,
              "explanation": "Engine blocks are often made by casting because of their complex shape."
            },
            {
              "type": "short",
              "question": "Name one advantage of casting.",
              "keywords": [
                "complex",
                "shape",
                "repeat",
                "large",
                "batch"
              ],
              "mode": "any",
              "traps": [
                "accurate"
              ],
              "trapResponse": "Trap answer — casting can be accurate, but accuracy depends on the process. A safer answer is complex shapes or repeat production.",
              "markScheme": "Casting can produce complex shapes and repeated parts.",
              "explanation": "Casting is useful for shapes that are difficult to machine."
            },
            {
              "type": "short",
              "question": "What is a mould used for in casting?",
              "keywords": [
                "shape",
                "molten",
                "material"
              ],
              "mode": "any",
              "traps": [
                "cut"
              ],
              "trapResponse": "Trap answer — a mould does not cut the material. It gives shape to the molten material.",
              "markScheme": "A mould shapes the molten material as it cools and solidifies.",
              "explanation": "The cavity inside the mould forms the final part."
            },
            {
              "type": "short",
              "question": "State one possible defect in casting.",
              "keywords": [
                "porosity",
                "shrinkage",
                "crack",
                "void"
              ],
              "mode": "any",
              "traps": [
                "rust"
              ],
              "trapResponse": "Trap answer — rust is corrosion, not a casting defect.",
              "markScheme": "Possible casting defects include porosity, shrinkage, cracks or voids.",
              "explanation": "Defects can occur if the mould, cooling or pouring process is poor."
            },
            {
              "type": "short",
              "question": "Why must molten metal be handled carefully?",
              "keywords": [
                "hot",
                "burns",
                "dangerous",
                "safety"
              ],
              "mode": "any",
              "traps": [
                "sharp"
              ],
              "trapResponse": "Trap answer — sharp edges may be a hazard later, but molten metal is mainly dangerous because of heat and burns.",
              "markScheme": "Molten metal is extremely hot and can cause serious burns, so safety controls are needed.",
              "explanation": "Casting requires PPE and safe working procedures."
            },
            {
              "type": "short",
              "question": "Why can casting reduce waste compared with machining?",
              "keywords": [
                "near",
                "shape",
                "less",
                "swarf",
                "waste"
              ],
              "mode": "any",
              "traps": [
                "faster"
              ],
              "trapResponse": "Trap answer — speed depends on the process. Waste reduction comes from producing near-net shape.",
              "markScheme": "Casting can produce a near-net shape, reducing waste and swarf compared with machining.",
              "explanation": "Less material may need to be removed afterwards."
            },
            {
              "type": "short",
              "question": "Why can mould cost be a disadvantage of casting?",
              "keywords": [
                "expensive",
                "setup",
                "tooling",
                "small",
                "batch"
              ],
              "mode": "any",
              "traps": [
                "swarf"
              ],
              "trapResponse": "Trap answer — swarf is a machining issue. Mould cost is a setup/tooling issue.",
              "markScheme": "Moulds can be expensive to make, especially for small batches.",
              "explanation": "High setup cost must be justified by quantity."
            }
          ]
        },
        {
          "title": "Joining Methods",
          "questions": [
            {
              "type": "mcq",
              "question": "Which process permanently joins metals by melting them together?",
              "options": [
                "Welding",
                "Screwing",
                "Riveting",
                "Folding"
              ],
              "correct": 0,
              "explanation": "Welding uses heat to fuse metals together."
            },
            {
              "type": "mcq",
              "question": "Which joining method uses a filler metal with a lower melting point?",
              "options": [
                "Soldering",
                "Drilling",
                "Turning",
                "Casting"
              ],
              "correct": 0,
              "explanation": "Soldering uses a lower melting point filler metal."
            },
            {
              "type": "mcq",
              "question": "Which joining method can be undone easily?",
              "options": [
                "Screws",
                "Welding",
                "Brazing",
                "Adhesive bonding"
              ],
              "correct": 0,
              "explanation": "Screws are a temporary or removable fixing method."
            },
            {
              "type": "mcq",
              "question": "Which joining method uses a mechanical fastener?",
              "options": [
                "Riveting",
                "Welding",
                "Soldering",
                "Brazing"
              ],
              "correct": 0,
              "explanation": "Riveting uses a mechanical fastener to join materials."
            },
            {
              "type": "mcq",
              "question": "Which process is commonly used for electrical components?",
              "options": [
                "Soldering",
                "Forging",
                "Sand casting",
                "Milling"
              ],
              "correct": 0,
              "explanation": "Soldering is commonly used to join electrical components."
            },
            {
              "type": "mcq",
              "question": "Which joining method uses heat but does not melt parent metals?",
              "options": [
                "Brazing",
                "MIG welding",
                "Spot welding",
                "Arc welding"
              ],
              "correct": 0,
              "explanation": "Brazing uses a filler metal and does not melt the parent metals."
            },
            {
              "type": "short",
              "question": "State one advantage of welding.",
              "keywords": [
                "strong",
                "permanent",
                "sealed"
              ],
              "mode": "any",
              "traps": [
                "temporary"
              ],
              "trapResponse": "Trap answer — welding is normally a permanent joining method, not temporary.",
              "markScheme": "Welding can create a strong, permanent joint.",
              "explanation": "Welded joints are common in structural metalwork."
            },
            {
              "type": "short",
              "question": "What is an adhesive used for?",
              "keywords": [
                "bond",
                "join",
                "materials"
              ],
              "mode": "any",
              "traps": [
                "melt"
              ],
              "trapResponse": "Trap answer — adhesives do not usually melt the materials. They bond surfaces together.",
              "markScheme": "An adhesive is used to bond or join materials together.",
              "explanation": "Adhesives can join similar or different materials."
            },
            {
              "type": "short",
              "question": "What is the difference between a temporary and permanent joint?",
              "keywords": [
                "temporary",
                "removed",
                "permanent",
                "damage"
              ],
              "mode": "any",
              "traps": [
                "strong"
              ],
              "trapResponse": "Trap answer — strength alone does not define temporary or permanent. The key issue is whether it can be removed without damage.",
              "markScheme": "A temporary joint can be removed without damage, while a permanent joint cannot usually be separated without damage.",
              "explanation": "Screws are temporary; welding is permanent."
            },
            {
              "type": "short",
              "question": "State one safety risk when welding.",
              "keywords": [
                "heat",
                "burns",
                "arc",
                "eye",
                "fumes"
              ],
              "mode": "any",
              "traps": [
                "splinter"
              ],
              "trapResponse": "Trap answer — splinters are not the main welding risk. Welding hazards include heat, burns, arc eye and fumes.",
              "markScheme": "Welding risks include burns, arc eye, heat and fumes.",
              "explanation": "Welding needs PPE such as gloves, mask and eye protection."
            },
            {
              "type": "short",
              "question": "Why might screws be chosen instead of welding?",
              "keywords": [
                "remove",
                "maintenance",
                "disassemble",
                "temporary"
              ],
              "mode": "any",
              "traps": [
                "stronger"
              ],
              "trapResponse": "Trap answer — screws are not usually chosen because they are stronger than welding. They are chosen because they can be removed.",
              "markScheme": "Screws allow parts to be removed for maintenance or disassembly.",
              "explanation": "This makes them useful for serviceable joints."
            },
            {
              "type": "short",
              "question": "Why is soldering used in electronics?",
              "keywords": [
                "electrical",
                "components",
                "low",
                "temperature",
                "join"
              ],
              "mode": "any",
              "traps": [
                "strongest"
              ],
              "trapResponse": "Trap answer — soldering is not chosen because it is the strongest joint. It is useful for electrical connections.",
              "markScheme": "Soldering joins electrical components using a low melting point filler metal.",
              "explanation": "It makes conductive connections."
            }
          ]
        },
        {
          "title": "Machining and Wasting",
          "questions": [
            {
              "type": "mcq",
              "question": "What is machining?",
              "options": [
                "Removing material to shape a part",
                "Pouring metal into a mould",
                "Joining parts with adhesive",
                "Heating plastic until soft"
              ],
              "correct": 0,
              "explanation": "Machining removes material from a workpiece to create the required shape."
            },
            {
              "type": "mcq",
              "question": "Which machine is commonly used to produce cylindrical parts?",
              "options": [
                "Lathe",
                "Pillar drill",
                "Laser cutter",
                "Injection moulder"
              ],
              "correct": 0,
              "explanation": "A lathe rotates the workpiece and is used for cylindrical parts."
            },
            {
              "type": "mcq",
              "question": "Which tool is used in drilling?",
              "options": [
                "Drill bit",
                "Mould",
                "Electrode",
                "Rivet"
              ],
              "correct": 0,
              "explanation": "A drill bit cuts the hole as it rotates."
            },
            {
              "type": "mcq",
              "question": "What is swarf?",
              "options": [
                "Waste material cut from the workpiece",
                "A type of glue",
                "A casting mould",
                "A protective coating"
              ],
              "correct": 0,
              "explanation": "Swarf is waste material produced during cutting or machining."
            },
            {
              "type": "mcq",
              "question": "Which machining process removes material using a rotating cutter?",
              "options": [
                "Milling",
                "Casting",
                "Brazing",
                "Forging"
              ],
              "correct": 0,
              "explanation": "Milling uses a rotating cutter to remove material."
            },
            {
              "type": "mcq",
              "question": "What does CNC stand for?",
              "options": [
                "Computer Numerical Control",
                "Cutting New Components",
                "Controlled Nylon Casting",
                "Central Network Cutter"
              ],
              "correct": 0,
              "explanation": "CNC stands for Computer Numerical Control."
            },
            {
              "type": "short",
              "question": "What is drilling used for?",
              "keywords": [
                "hole",
                "holes"
              ],
              "mode": "any",
              "traps": [
                "cutting shape"
              ],
              "trapResponse": "Trap answer — drilling is specifically used to make holes, not general shaping.",
              "markScheme": "Drilling is used to make holes in a material.",
              "explanation": "A drill bit rotates and removes material to form a hole."
            },
            {
              "type": "short",
              "question": "State one safety rule when using a pillar drill.",
              "keywords": [
                "goggles",
                "clamp",
                "tie",
                "hair",
                "guard"
              ],
              "mode": "any",
              "traps": [
                "gloves"
              ],
              "trapResponse": "Trap answer — gloves can be dangerous near rotating machinery because they may get caught.",
              "markScheme": "Wear goggles, clamp the work, use guards, and tie back long hair.",
              "explanation": "Rotating tools can catch loose material or throw swarf."
            },
            {
              "type": "short",
              "question": "Why should work be clamped during drilling?",
              "keywords": [
                "secure",
                "move",
                "spin",
                "safe"
              ],
              "mode": "any",
              "traps": [
                "hold by hand"
              ],
              "trapResponse": "Trap answer — holding work by hand is unsafe because it can spin or move.",
              "markScheme": "The work should be clamped so it cannot move or spin during drilling.",
              "explanation": "Clamping improves accuracy and safety."
            },
            {
              "type": "short",
              "question": "State one advantage of CNC machining.",
              "keywords": [
                "accurate",
                "repeatable",
                "complex",
                "automatic"
              ],
              "mode": "any",
              "traps": [
                "handmade"
              ],
              "trapResponse": "Trap answer — CNC is computer-controlled, not handmade.",
              "markScheme": "CNC machining is accurate, repeatable and can produce complex shapes.",
              "explanation": "CNC machines follow programmed instructions."
            },
            {
              "type": "short",
              "question": "Why is machining called a wasting process?",
              "keywords": [
                "removes",
                "material",
                "waste",
                "swarf"
              ],
              "mode": "any",
              "traps": [
                "mould"
              ],
              "trapResponse": "Trap answer — moulds relate to casting. Machining wastes material by removing it.",
              "markScheme": "Machining is called wasting because it removes material and creates swarf.",
              "explanation": "The removed material may need disposal or recycling."
            },
            {
              "type": "short",
              "question": "Why should swarf be removed safely?",
              "keywords": [
                "sharp",
                "cut",
                "hot",
                "brush"
              ],
              "mode": "any",
              "traps": [
                "bare hands"
              ],
              "trapResponse": "Trap answer — using bare hands is unsafe. Swarf can be sharp or hot.",
              "markScheme": "Swarf should be removed with a brush because it can be sharp or hot.",
              "explanation": "This reduces injury risk."
            }
          ]
        },
        {
          "title": "Forming and Shaping",
          "questions": [
            {
              "type": "mcq",
              "question": "What is forming?",
              "options": [
                "Changing shape by applying force",
                "Removing material as swarf",
                "Joining with glue",
                "Adding a paint finish"
              ],
              "correct": 0,
              "explanation": "Forming changes the shape of material using force."
            },
            {
              "type": "mcq",
              "question": "Which process bends sheet metal into shape?",
              "options": [
                "Press forming",
                "Soldering",
                "Turning",
                "Casting"
              ],
              "correct": 0,
              "explanation": "Press forming uses force to shape sheet material."
            },
            {
              "type": "mcq",
              "question": "Which process uses rollers to reduce thickness or form sheet?",
              "options": [
                "Rolling",
                "Brazing",
                "Drilling",
                "Soldering"
              ],
              "correct": 0,
              "explanation": "Rolling passes material through rollers to change shape or thickness."
            },
            {
              "type": "mcq",
              "question": "Which process type is injection moulding usually classed as?",
              "options": [
                "Shaping",
                "Wasting",
                "Joining",
                "Finishing"
              ],
              "correct": 0,
              "explanation": "Injection moulding shapes softened polymer in a mould."
            },
            {
              "type": "mcq",
              "question": "Which material is commonly processed by injection moulding?",
              "options": [
                "Thermoplastic",
                "Cast iron",
                "Concrete",
                "Copper ore"
              ],
              "correct": 0,
              "explanation": "Thermoplastics are commonly injection moulded."
            },
            {
              "type": "mcq",
              "question": "Which process forms heated plastic sheet over a mould using suction?",
              "options": [
                "Vacuum forming",
                "Milling",
                "Riveting",
                "Forging"
              ],
              "correct": 0,
              "explanation": "Vacuum forming uses suction to pull softened sheet over a mould."
            },
            {
              "type": "short",
              "question": "What is forging?",
              "keywords": [
                "force",
                "compress",
                "shape",
                "metal"
              ],
              "mode": "any",
              "traps": [
                "melt"
              ],
              "trapResponse": "Trap answer — forging does not usually melt the metal. It shapes it using force.",
              "markScheme": "Forging shapes metal using compressive force.",
              "explanation": "It can improve strength by refining the grain structure."
            },
            {
              "type": "short",
              "question": "State one advantage of forming processes.",
              "keywords": [
                "strong",
                "fast",
                "little",
                "waste",
                "repeatable"
              ],
              "mode": "any",
              "traps": [
                "swarf"
              ],
              "trapResponse": "Trap answer — swarf is usually produced by wasting processes, not forming.",
              "markScheme": "Forming can produce strong parts with little waste and good repeatability.",
              "explanation": "Material is reshaped rather than cut away."
            },
            {
              "type": "short",
              "question": "Why is injection moulding suitable for batch production?",
              "keywords": [
                "repeat",
                "fast",
                "identical",
                "mould"
              ],
              "mode": "any",
              "traps": [
                "one-off"
              ],
              "trapResponse": "Trap answer — injection moulding is usually not ideal for one-offs because moulds are expensive.",
              "markScheme": "Injection moulding can quickly produce repeated identical parts once the mould is made.",
              "explanation": "High initial mould cost is spread over many parts."
            },
            {
              "type": "short",
              "question": "What is vacuum forming used for?",
              "keywords": [
                "sheet",
                "plastic",
                "mould",
                "shape"
              ],
              "mode": "any",
              "traps": [
                "metal"
              ],
              "trapResponse": "Trap answer — vacuum forming is normally used with plastic sheet, not metal.",
              "markScheme": "Vacuum forming shapes heated plastic sheet over a mould.",
              "explanation": "It is used for packaging, trays and covers."
            },
            {
              "type": "short",
              "question": "Why can mould cost be a disadvantage?",
              "keywords": [
                "expensive",
                "initial",
                "setup",
                "small",
                "batch"
              ],
              "mode": "any",
              "traps": [
                "material"
              ],
              "trapResponse": "Trap answer — material cost matters, but mould cost is a setup/tooling issue.",
              "markScheme": "Moulds can be expensive to make, especially for small batches.",
              "explanation": "This affects process choice."
            },
            {
              "type": "short",
              "question": "Why is forming often lower waste than machining?",
              "keywords": [
                "reshape",
                "not",
                "remove",
                "less",
                "waste"
              ],
              "mode": "any",
              "traps": [
                "swarf"
              ],
              "trapResponse": "Trap answer — swarf is produced by wasting processes. Forming reshapes the material.",
              "markScheme": "Forming reshapes material rather than cutting it away, so less waste may be produced.",
              "explanation": "This can improve material efficiency."
            }
          ]
        },
        {
          "title": "Additive Manufacturing",
          "questions": [
            {
              "type": "mcq",
              "question": "What is additive manufacturing?",
              "options": [
                "Building a part by adding material layer by layer",
                "Removing material as swarf",
                "Joining with screws",
                "Casting into sand"
              ],
              "correct": 0,
              "explanation": "Additive manufacturing builds components layer by layer."
            },
            {
              "type": "mcq",
              "question": "Which process is an example of additive manufacturing?",
              "options": [
                "3D printing",
                "Turning",
                "Filing",
                "Brazing"
              ],
              "correct": 0,
              "explanation": "3D printing is an additive process."
            },
            {
              "type": "mcq",
              "question": "Why is additive manufacturing useful for prototypes?",
              "options": [
                "It can make one-off designs without expensive tooling",
                "It always makes the strongest part",
                "It needs no computer file",
                "It removes material quickly"
              ],
              "correct": 0,
              "explanation": "3D printing can make prototypes directly from digital models."
            },
            {
              "type": "mcq",
              "question": "Which input is commonly needed for 3D printing?",
              "options": [
                "CAD model",
                "Sand mould",
                "Welding rod",
                "Rivet gun"
              ],
              "correct": 0,
              "explanation": "3D printing commonly uses a CAD model."
            },
            {
              "type": "mcq",
              "question": "Which production type is 3D printing often suitable for?",
              "options": [
                "One-off or prototype production",
                "Very high-volume identical screw production",
                "Traditional forging only",
                "Manual soldering only"
              ],
              "correct": 0,
              "explanation": "3D printing is often useful for prototypes and one-offs."
            },
            {
              "type": "mcq",
              "question": "Which is a common 3D printing material?",
              "options": [
                "PLA",
                "Brass sheet",
                "Concrete block",
                "Cast iron billet"
              ],
              "correct": 0,
              "explanation": "PLA is a common 3D printing polymer."
            },
            {
              "type": "short",
              "question": "State one advantage of 3D printing.",
              "keywords": [
                "complex",
                "prototype",
                "custom",
                "less",
                "waste"
              ],
              "mode": "any",
              "traps": [
                "fast for all"
              ],
              "trapResponse": "Trap answer — 3D printing is not always fast for all production. Its strength is complexity, prototypes and custom parts.",
              "markScheme": "3D printing can produce complex, customised or prototype parts with less waste.",
              "explanation": "It is useful for testing designs."
            },
            {
              "type": "short",
              "question": "State one disadvantage of 3D printing.",
              "keywords": [
                "slow",
                "finish",
                "strength",
                "size",
                "material"
              ],
              "mode": "any",
              "traps": [
                "always cheap"
              ],
              "trapResponse": "Trap answer — 3D printing is not always cheap, especially for large quantities.",
              "markScheme": "3D printing can be slow, have limited material choices, lower strength or poor surface finish.",
              "explanation": "It depends on the process and material."
            },
            {
              "type": "short",
              "question": "What does layer by layer mean?",
              "keywords": [
                "successive",
                "layers",
                "material",
                "built"
              ],
              "mode": "any",
              "traps": [
                "cut"
              ],
              "trapResponse": "Trap answer — cutting is a wasting process. Additive manufacturing builds layers.",
              "markScheme": "The product is built by adding successive layers of material.",
              "explanation": "Each layer forms part of the final shape."
            },
            {
              "type": "short",
              "question": "Why may additive manufacturing produce less waste than machining?",
              "keywords": [
                "adds",
                "only",
                "needed",
                "less",
                "swarf"
              ],
              "mode": "any",
              "traps": [
                "mould"
              ],
              "trapResponse": "Trap answer — moulds are not the key issue. Additive processes add only needed material.",
              "markScheme": "It adds material where needed, so it can create less swarf and waste than machining.",
              "explanation": "Support material may still be wasted."
            },
            {
              "type": "short",
              "question": "Give one reason 3D printed parts may need finishing.",
              "keywords": [
                "rough",
                "surface",
                "support",
                "accuracy"
              ],
              "mode": "any",
              "traps": [
                "rust"
              ],
              "trapResponse": "Trap answer — rust is a material corrosion issue, not the usual reason for finishing a printed part.",
              "markScheme": "They may have rough surfaces, support marks or require improved accuracy.",
              "explanation": "Post-processing can improve appearance and fit."
            },
            {
              "type": "short",
              "question": "Why is additive manufacturing useful for complex internal shapes?",
              "keywords": [
                "builds",
                "layers",
                "complex",
                "geometry"
              ],
              "mode": "any",
              "traps": [
                "drill"
              ],
              "trapResponse": "Trap answer — drilling is limited to holes and access paths. Layer building allows complex geometry.",
              "markScheme": "Layer-by-layer building can create complex internal features that are difficult to machine.",
              "explanation": "This is one of the main advantages."
            }
          ]
        },
        {
          "title": "Finishing Processes",
          "questions": [
            {
              "type": "mcq",
              "question": "What is a finishing process?",
              "options": [
                "A process that improves surface appearance or protection",
                "A process that only makes holes",
                "A process that melts metal into a mould",
                "A process that measures stock levels"
              ],
              "correct": 0,
              "explanation": "Finishing improves appearance, protection or surface quality."
            },
            {
              "type": "mcq",
              "question": "Which process protects steel by coating it with zinc?",
              "options": [
                "Galvanising",
                "Turning",
                "Brazing",
                "Forging"
              ],
              "correct": 0,
              "explanation": "Galvanising coats steel with zinc to protect against corrosion."
            },
            {
              "type": "mcq",
              "question": "Which finish can improve both appearance and corrosion resistance?",
              "options": [
                "Powder coating",
                "Drilling",
                "Sand casting",
                "Riveting"
              ],
              "correct": 0,
              "explanation": "Powder coating gives a durable protective finish."
            },
            {
              "type": "mcq",
              "question": "Which process removes sharp edges from a component?",
              "options": [
                "Deburring",
                "Brazing",
                "Casting",
                "Forging"
              ],
              "correct": 0,
              "explanation": "Deburring removes sharp edges and burrs."
            },
            {
              "type": "mcq",
              "question": "Which finish is often used on aluminium for protection and colour?",
              "options": [
                "Anodising",
                "Spot welding",
                "Turning",
                "Injection moulding"
              ],
              "correct": 0,
              "explanation": "Anodising improves corrosion resistance and can add colour."
            },
            {
              "type": "mcq",
              "question": "Which process is mainly for improving surface smoothness?",
              "options": [
                "Polishing",
                "Riveting",
                "Casting",
                "Drilling"
              ],
              "correct": 0,
              "explanation": "Polishing improves surface smoothness and appearance."
            },
            {
              "type": "short",
              "question": "Why is painting used as a finishing process?",
              "keywords": [
                "protect",
                "appearance",
                "colour",
                "corrosion"
              ],
              "mode": "any",
              "traps": [
                "join"
              ],
              "trapResponse": "Trap answer — painting does not join parts. It protects or improves appearance.",
              "markScheme": "Painting improves appearance and can protect against corrosion.",
              "explanation": "It creates a barrier between material and environment."
            },
            {
              "type": "short",
              "question": "What is polishing used for?",
              "keywords": [
                "smooth",
                "shine",
                "surface",
                "finish"
              ],
              "mode": "any",
              "traps": [
                "stronger"
              ],
              "trapResponse": "Trap answer — polishing does not normally make a part structurally stronger. It improves surface finish.",
              "markScheme": "Polishing smooths and improves the surface appearance.",
              "explanation": "It can also reduce friction in some applications."
            },
            {
              "type": "short",
              "question": "Why should burrs be removed?",
              "keywords": [
                "sharp",
                "safe",
                "fit",
                "injury"
              ],
              "mode": "any",
              "traps": [
                "colour"
              ],
              "trapResponse": "Trap answer — burr removal is about safety and fit, not colour.",
              "markScheme": "Burrs should be removed because they are sharp and may affect fit or safety.",
              "explanation": "Deburring is a common finishing operation."
            },
            {
              "type": "short",
              "question": "State one reason a product might need a surface finish.",
              "keywords": [
                "appearance",
                "protect",
                "corrosion",
                "wear",
                "smooth"
              ],
              "mode": "any",
              "traps": [
                "melt"
              ],
              "trapResponse": "Trap answer — melting is not a finishing reason. Finishes usually protect or improve the surface.",
              "markScheme": "A finish can improve appearance, protect against corrosion, reduce wear or smooth the surface.",
              "explanation": "Finishing is part of product quality."
            },
            {
              "type": "short",
              "question": "Why is corrosion protection important?",
              "keywords": [
                "prevent",
                "rust",
                "life",
                "safe",
                "failure"
              ],
              "mode": "any",
              "traps": [
                "heavier"
              ],
              "trapResponse": "Trap answer — making it heavier is not the aim. Corrosion protection extends life and prevents failure.",
              "markScheme": "It prevents rust or chemical attack, extending product life and reducing failure risk.",
              "explanation": "This is especially important outdoors."
            },
            {
              "type": "short",
              "question": "Why might powder coating be chosen over paint?",
              "keywords": [
                "durable",
                "tough",
                "finish",
                "protect"
              ],
              "mode": "any",
              "traps": [
                "temporary"
              ],
              "trapResponse": "Trap answer — powder coating is not mainly chosen because it is temporary. It is durable and protective.",
              "markScheme": "Powder coating can provide a tough, durable and protective finish.",
              "explanation": "It is common on metal products."
            }
          ]
        },
        {
          "title": "Quality Control and Inspection",
          "questions": [
            {
              "type": "mcq",
              "question": "What is quality control?",
              "options": [
                "Checking products meet required standards",
                "Making every part by hand",
                "Choosing a colour scheme",
                "Storing materials randomly"
              ],
              "correct": 0,
              "explanation": "Quality control checks whether products meet specifications."
            },
            {
              "type": "mcq",
              "question": "Which tool measures external diameter accurately?",
              "options": [
                "Vernier caliper",
                "Paint brush",
                "Hammer",
                "Glue gun"
              ],
              "correct": 0,
              "explanation": "A vernier caliper can measure external, internal and depth dimensions."
            },
            {
              "type": "mcq",
              "question": "Which inspection method checks the first item before full production?",
              "options": [
                "First-off inspection",
                "Random decoration",
                "Final painting",
                "Material recycling"
              ],
              "correct": 0,
              "explanation": "First-off inspection checks the first part before producing the batch."
            },
            {
              "type": "mcq",
              "question": "Which term means a product does not meet the required standard?",
              "options": [
                "Defect",
                "Alloy",
                "Template",
                "Matrix"
              ],
              "correct": 0,
              "explanation": "A defect is a fault or non-conformance."
            },
            {
              "type": "mcq",
              "question": "Which measuring tool is best for checking a 90 degree angle?",
              "options": [
                "Engineer’s square",
                "Soldering iron",
                "Centre punch",
                "Lathe tool"
              ],
              "correct": 0,
              "explanation": "An engineer’s square checks right angles."
            },
            {
              "type": "mcq",
              "question": "What does QA stand for?",
              "options": [
                "Quality Assurance",
                "Quick Assembly",
                "Quantity Alloy",
                "Qualified Adhesive"
              ],
              "correct": 0,
              "explanation": "QA stands for Quality Assurance."
            },
            {
              "type": "short",
              "question": "Why are tolerances used?",
              "keywords": [
                "acceptable",
                "variation",
                "size",
                "fit"
              ],
              "mode": "any",
              "traps": [
                "colour"
              ],
              "trapResponse": "Trap answer — tolerances are usually about dimensions or limits, not colour.",
              "markScheme": "Tolerances define the acceptable variation from a specified size.",
              "explanation": "They help ensure parts fit and function."
            },
            {
              "type": "short",
              "question": "What is a go/no-go gauge used for?",
              "keywords": [
                "check",
                "within",
                "tolerance",
                "accept",
                "reject"
              ],
              "mode": "any",
              "traps": [
                "measure exact"
              ],
              "trapResponse": "Trap answer — a go/no-go gauge usually checks pass/fail, not an exact measurement.",
              "markScheme": "It checks whether a part is within tolerance by accepting or rejecting it.",
              "explanation": "It is quick for repeated inspection."
            },
            {
              "type": "short",
              "question": "Why is inspection important in manufacturing?",
              "keywords": [
                "defects",
                "quality",
                "safe",
                "specification",
                "waste"
              ],
              "mode": "any",
              "traps": [
                "slower only"
              ],
              "trapResponse": "Trap answer — inspection may add time, but its purpose is quality, safety and defect prevention.",
              "markScheme": "Inspection helps find defects and ensure products meet the specification safely.",
              "explanation": "It reduces faulty products reaching users."
            },
            {
              "type": "short",
              "question": "What is batch sampling?",
              "keywords": [
                "checking",
                "sample",
                "batch",
                "not all"
              ],
              "mode": "any",
              "traps": [
                "every"
              ],
              "trapResponse": "Trap answer — checking every item is 100% inspection, not batch sampling.",
              "markScheme": "Batch sampling checks a selection of items from a batch.",
              "explanation": "It saves time compared with checking every product."
            },
            {
              "type": "short",
              "question": "Why might 100% inspection be used?",
              "keywords": [
                "safety",
                "critical",
                "high",
                "risk"
              ],
              "mode": "any",
              "traps": [
                "cheap"
              ],
              "trapResponse": "Trap answer — 100% inspection is often costly; it is used when failure risk is serious.",
              "markScheme": "100% inspection may be used for safety-critical or high-risk parts.",
              "explanation": "Every item is checked."
            },
            {
              "type": "short",
              "question": "What is the difference between quality assurance and quality control?",
              "keywords": [
                "assurance",
                "prevents",
                "control",
                "checks"
              ],
              "mode": "any",
              "traps": [
                "same"
              ],
              "trapResponse": "Trap answer — QA and QC are linked but not identical.",
              "markScheme": "Quality assurance prevents problems through systems; quality control checks finished or in-process products.",
              "explanation": "Both support product quality."
            }
          ]
        },
        {
          "title": "Production Planning and Scale",
          "questions": [
            {
              "type": "mcq",
              "question": "What is one-off production?",
              "options": [
                "Making a single product",
                "Making thousands of identical products",
                "Checking a batch sample",
                "Painting a finished part"
              ],
              "correct": 0,
              "explanation": "One-off production makes a single unique product."
            },
            {
              "type": "mcq",
              "question": "Which production type makes a set number of identical products?",
              "options": [
                "Batch production",
                "One-off production",
                "Continuous production",
                "Prototype only"
              ],
              "correct": 0,
              "explanation": "Batch production makes a quantity of identical products."
            },
            {
              "type": "mcq",
              "question": "Which production method suits a custom prototype?",
              "options": [
                "One-off production",
                "Mass production",
                "Continuous production",
                "Automated packing only"
              ],
              "correct": 0,
              "explanation": "A prototype is often made as a one-off."
            },
            {
              "type": "mcq",
              "question": "What is lead time?",
              "options": [
                "Time from order to completion or delivery",
                "The weight of lead metal",
                "The colour of a finish",
                "The number of drill bits"
              ],
              "correct": 0,
              "explanation": "Lead time is the time from order to completion or delivery."
            },
            {
              "type": "mcq",
              "question": "What does MRP commonly stand for?",
              "options": [
                "Material Requirements Planning",
                "Metal Rolling Process",
                "Manufacturing Resin Polymer",
                "Manual Repair Plan"
              ],
              "correct": 0,
              "explanation": "MRP stands for Material Requirements Planning."
            },
            {
              "type": "mcq",
              "question": "Which factor affects the choice of manufacturing process?",
              "options": [
                "Material, quantity and required quality",
                "Only the colour of the logo",
                "The student’s handwriting",
                "The weather only"
              ],
              "correct": 0,
              "explanation": "Process choice depends on material, quantity, geometry, cost and quality requirements."
            },
            {
              "type": "short",
              "question": "State one advantage of mass production.",
              "keywords": [
                "fast",
                "cheap",
                "consistent",
                "large",
                "quantity"
              ],
              "mode": "any",
              "traps": [
                "custom"
              ],
              "trapResponse": "Trap answer — mass production is usually less customised. Its advantage is speed, consistency and low unit cost.",
              "markScheme": "Mass production can make large quantities quickly with a low cost per unit.",
              "explanation": "It is suitable for high demand."
            },
            {
              "type": "short",
              "question": "State one disadvantage of one-off production.",
              "keywords": [
                "slow",
                "expensive",
                "skilled",
                "time"
              ],
              "mode": "any",
              "traps": [
                "identical"
              ],
              "trapResponse": "Trap answer — identical repeat products are not the purpose of one-off production.",
              "markScheme": "One-off production can be slow, expensive and require skilled labour.",
              "explanation": "It is used for custom products."
            },
            {
              "type": "short",
              "question": "What is a production plan used for?",
              "keywords": [
                "sequence",
                "time",
                "resources",
                "materials",
                "processes"
              ],
              "mode": "any",
              "traps": [
                "sell"
              ],
              "trapResponse": "Trap answer — selling is not the main purpose of a production plan. It organises making the product.",
              "markScheme": "A production plan sets out the sequence, time, resources, materials and processes needed.",
              "explanation": "It helps control manufacture."
            },
            {
              "type": "short",
              "question": "Why is batch production useful in schools or small workshops?",
              "keywords": [
                "repeat",
                "manageable",
                "quantity",
                "setup"
              ],
              "mode": "any",
              "traps": [
                "millions"
              ],
              "trapResponse": "Trap answer — millions of products suggests mass production, not small batch production.",
              "markScheme": "Batch production allows repeated products in manageable quantities.",
              "explanation": "It balances setup time and output."
            },
            {
              "type": "short",
              "question": "Why is stock control important?",
              "keywords": [
                "materials",
                "available",
                "avoid",
                "waste",
                "delay"
              ],
              "mode": "any",
              "traps": [
                "paint"
              ],
              "trapResponse": "Trap answer — paint may be stock, but stock control is broader than paint.",
              "markScheme": "Stock control ensures materials and components are available without excessive waste or delay.",
              "explanation": "Poor stock control can stop production."
            },
            {
              "type": "short",
              "question": "Why might automated production improve consistency?",
              "keywords": [
                "same",
                "repeat",
                "programmed",
                "less",
                "human"
              ],
              "mode": "any",
              "traps": [
                "random"
              ],
              "trapResponse": "Trap answer — random variation is what automation tries to reduce.",
              "markScheme": "Automated production repeats programmed actions consistently and reduces human variation.",
              "explanation": "This can improve quality."
            }
          ]
        },
        {
          "title": "Health and Safety",
          "questions": [
            {
              "type": "mcq",
              "question": "What is PPE?",
              "options": [
                "Personal Protective Equipment",
                "Production Planning Estimate",
                "Plastic Polymer Example",
                "Permanent Process Evaluation"
              ],
              "correct": 0,
              "explanation": "PPE means Personal Protective Equipment."
            },
            {
              "type": "mcq",
              "question": "Which PPE protects eyes from flying swarf?",
              "options": [
                "Safety goggles",
                "Apron only",
                "Ear defenders only",
                "Dustpan"
              ],
              "correct": 0,
              "explanation": "Safety goggles protect eyes from flying particles."
            },
            {
              "type": "mcq",
              "question": "Which safety action is correct before using a pillar drill?",
              "options": [
                "Clamp the work securely",
                "Hold the work loosely by hand",
                "Wear loose gloves",
                "Remove the guard"
              ],
              "correct": 0,
              "explanation": "Work should be clamped before drilling."
            },
            {
              "type": "mcq",
              "question": "Which hazard is linked to welding?",
              "options": [
                "Arc eye",
                "Paper cut only",
                "Low battery",
                "Ink stain"
              ],
              "correct": 0,
              "explanation": "Welding can cause arc eye without suitable eye protection."
            },
            {
              "type": "mcq",
              "question": "Which sign colour usually indicates mandatory PPE?",
              "options": [
                "Blue",
                "Green",
                "Brown",
                "Pink"
              ],
              "correct": 0,
              "explanation": "Blue safety signs often indicate mandatory actions such as wearing PPE."
            },
            {
              "type": "mcq",
              "question": "Which item should not be worn near rotating machinery?",
              "options": [
                "Loose clothing",
                "Safety goggles",
                "Tied-back hair",
                "Closed shoes"
              ],
              "correct": 0,
              "explanation": "Loose clothing can become caught in rotating parts."
            },
            {
              "type": "short",
              "question": "Why should long hair be tied back near rotating machinery?",
              "keywords": [
                "caught",
                "rotating",
                "machine",
                "danger"
              ],
              "mode": "any",
              "traps": [
                "looks"
              ],
              "trapResponse": "Trap answer — appearance is not the reason. Hair must be tied back to stop it being caught.",
              "markScheme": "Long hair should be tied back so it cannot get caught in rotating machinery.",
              "explanation": "This prevents serious injury."
            },
            {
              "type": "short",
              "question": "Why should guards be used on machines?",
              "keywords": [
                "protect",
                "moving",
                "parts",
                "swarf",
                "injury"
              ],
              "mode": "any",
              "traps": [
                "faster"
              ],
              "trapResponse": "Trap answer — guards are not used to make the machine faster. They reduce injury risk.",
              "markScheme": "Machine guards protect users from moving parts, swarf and hazards.",
              "explanation": "Guards are an engineering control."
            },
            {
              "type": "short",
              "question": "What is a risk assessment used for?",
              "keywords": [
                "identify",
                "hazards",
                "risk",
                "control"
              ],
              "mode": "any",
              "traps": [
                "mark"
              ],
              "trapResponse": "Trap answer — a risk assessment is not a marking sheet. It identifies hazards and controls.",
              "markScheme": "A risk assessment identifies hazards, evaluates risk and sets control measures.",
              "explanation": "It helps make work safer."
            },
            {
              "type": "short",
              "question": "Why should swarf be removed with a brush, not hands?",
              "keywords": [
                "sharp",
                "cut",
                "safe",
                "brush"
              ],
              "mode": "any",
              "traps": [
                "hot only"
              ],
              "trapResponse": "Trap answer — swarf may be hot, but it is also sharp. A brush avoids cuts.",
              "markScheme": "Swarf can be sharp and cause cuts, so it should be removed with a brush.",
              "explanation": "Hands should be kept away from sharp waste."
            },
            {
              "type": "short",
              "question": "State one control measure for dust from sanding.",
              "keywords": [
                "extraction",
                "mask",
                "ventilation",
                "vacuum"
              ],
              "mode": "any",
              "traps": [
                "drink water"
              ],
              "trapResponse": "Trap answer — drinking water does not control airborne dust.",
              "markScheme": "Use extraction, ventilation or a suitable mask to reduce dust inhalation.",
              "explanation": "Dust can damage lungs."
            },
            {
              "type": "short",
              "question": "Why should damaged tools be reported?",
              "keywords": [
                "unsafe",
                "injury",
                "fault",
                "replace"
              ],
              "mode": "any",
              "traps": [
                "hide"
              ],
              "trapResponse": "Trap answer — hiding damaged tools makes the workplace more dangerous.",
              "markScheme": "Damaged tools may be unsafe and should be reported, removed or replaced.",
              "explanation": "This prevents accidents."
            }
          ]
        },
        {
          "title": "CAD, CAM and CNC",
          "questions": [
            {
              "type": "mcq",
              "question": "What does CAD stand for?",
              "options": [
                "Computer Aided Design",
                "Cutting And Drilling",
                "Control And Delivery",
                "Casting Alloy Diagram"
              ],
              "correct": 0,
              "explanation": "CAD stands for Computer Aided Design."
            },
            {
              "type": "mcq",
              "question": "What does CAM stand for?",
              "options": [
                "Computer Aided Manufacture",
                "Casting And Moulding",
                "Control Alloy Metal",
                "Computer Assisted Marking"
              ],
              "correct": 0,
              "explanation": "CAM stands for Computer Aided Manufacture."
            },
            {
              "type": "mcq",
              "question": "Which machine might use CAM data?",
              "options": [
                "CNC router",
                "Hand file",
                "Paint brush",
                "Manual hacksaw"
              ],
              "correct": 0,
              "explanation": "A CNC router can use CAM data."
            },
            {
              "type": "mcq",
              "question": "Which file type is often associated with 3D models for printing?",
              "options": [
                "STL",
                "TXT only",
                "MP3",
                "JPG only"
              ],
              "correct": 0,
              "explanation": "STL files are commonly used for 3D printing models."
            },
            {
              "type": "mcq",
              "question": "Which is a disadvantage of CAD/CAM?",
              "options": [
                "Training and equipment cost",
                "No accuracy possible",
                "Cannot be edited",
                "Only works with wood"
              ],
              "correct": 0,
              "explanation": "CAD/CAM can require costly equipment and training."
            },
            {
              "type": "mcq",
              "question": "What does CNC stand for?",
              "options": [
                "Computer Numerical Control",
                "Central New Component",
                "Cutting Nylon Cleanly",
                "Control Network Casting"
              ],
              "correct": 0,
              "explanation": "CNC stands for Computer Numerical Control."
            },
            {
              "type": "short",
              "question": "State one advantage of CAD.",
              "keywords": [
                "edit",
                "accurate",
                "model",
                "simulate",
                "share"
              ],
              "mode": "any",
              "traps": [
                "heavy"
              ],
              "trapResponse": "Trap answer — CAD files are digital; heavy is not a useful advantage.",
              "markScheme": "CAD allows accurate designs to be edited, modelled, shared or simulated.",
              "explanation": "It improves design development."
            },
            {
              "type": "short",
              "question": "State one advantage of CAM.",
              "keywords": [
                "accurate",
                "repeatable",
                "automatic",
                "fast",
                "consistent"
              ],
              "mode": "any",
              "traps": [
                "handmade"
              ],
              "trapResponse": "Trap answer — CAM is computer-controlled manufacture, not handmade production.",
              "markScheme": "CAM can produce accurate, repeatable and consistent parts automatically.",
              "explanation": "It links digital design to production."
            },
            {
              "type": "short",
              "question": "Why is CNC useful for repeated parts?",
              "keywords": [
                "repeat",
                "program",
                "accurate",
                "same"
              ],
              "mode": "any",
              "traps": [
                "random"
              ],
              "trapResponse": "Trap answer — CNC reduces random variation by following a program.",
              "markScheme": "CNC repeats programmed movements accurately, producing consistent parts.",
              "explanation": "This is useful for batch or mass production."
            },
            {
              "type": "short",
              "question": "What is a simulation used for in CAD?",
              "keywords": [
                "test",
                "check",
                "before",
                "making"
              ],
              "mode": "any",
              "traps": [
                "paint"
              ],
              "trapResponse": "Trap answer — simulation is not mainly for painting. It tests or checks before manufacture.",
              "markScheme": "Simulation can test or check a design before making it.",
              "explanation": "It can reduce errors and wasted material."
            },
            {
              "type": "short",
              "question": "Why should CAD files be saved carefully?",
              "keywords": [
                "version",
                "backup",
                "lost",
                "correct"
              ],
              "mode": "any",
              "traps": [
                "colour"
              ],
              "trapResponse": "Trap answer — colour may matter in a drawing, but saving protects versions and prevents loss.",
              "markScheme": "CAD files should be saved and backed up so correct versions are not lost.",
              "explanation": "Version control reduces mistakes."
            },
            {
              "type": "short",
              "question": "How does CAD help communication?",
              "keywords": [
                "drawing",
                "visual",
                "dimensions",
                "share"
              ],
              "mode": "any",
              "traps": [
                "verbal only"
              ],
              "trapResponse": "Trap answer — CAD improves visual and dimensional communication, not just verbal description.",
              "markScheme": "CAD provides clear drawings, models and dimensions that can be shared.",
              "explanation": "This helps designers and manufacturers understand the product."
            }
          ]
        },
        {
          "title": "Engineering Drawings and Marking Out",
          "questions": [
            {
              "type": "mcq",
              "question": "What is an orthographic drawing?",
              "options": [
                "A set of 2D views of an object",
                "A photograph only",
                "A welding method",
                "A material test"
              ],
              "correct": 0,
              "explanation": "Orthographic drawings show views such as front, plan and side."
            },
            {
              "type": "mcq",
              "question": "Which line type commonly shows hidden detail?",
              "options": [
                "Dashed line",
                "Thick border only",
                "Freehand scribble",
                "Coloured shading"
              ],
              "correct": 0,
              "explanation": "Hidden detail is commonly shown using dashed lines."
            },
            {
              "type": "mcq",
              "question": "Which tool is used to mark a line on metal?",
              "options": [
                "Scriber",
                "Paint roller",
                "Glue spreader",
                "Mould"
              ],
              "correct": 0,
              "explanation": "A scriber marks lines on metal surfaces."
            },
            {
              "type": "mcq",
              "question": "Which tool checks a right angle?",
              "options": [
                "Engineer’s square",
                "Mallet",
                "Soldering iron",
                "Vernier height gauge only"
              ],
              "correct": 0,
              "explanation": "An engineer’s square checks 90 degree angles."
            },
            {
              "type": "mcq",
              "question": "Which drawing view shows the object from above?",
              "options": [
                "Plan view",
                "Front elevation",
                "End elevation",
                "Section symbol"
              ],
              "correct": 0,
              "explanation": "Plan view shows the object from above."
            },
            {
              "type": "mcq",
              "question": "Which tool measures small external and internal dimensions?",
              "options": [
                "Vernier caliper",
                "Hacksaw",
                "Rivet gun",
                "Paint brush"
              ],
              "correct": 0,
              "explanation": "A vernier caliper can measure small dimensions accurately."
            },
            {
              "type": "short",
              "question": "Why are dimensions important on drawings?",
              "keywords": [
                "size",
                "make",
                "accurate",
                "measure"
              ],
              "mode": "any",
              "traps": [
                "decorate"
              ],
              "trapResponse": "Trap answer — dimensions are not decoration. They tell the maker the required size.",
              "markScheme": "Dimensions show the sizes needed to make the part accurately.",
              "explanation": "Without dimensions the product may not fit or function."
            },
            {
              "type": "short",
              "question": "What is marking out?",
              "keywords": [
                "transfer",
                "measurements",
                "material",
                "cut"
              ],
              "mode": "any",
              "traps": [
                "painting"
              ],
              "trapResponse": "Trap answer — marking out is not painting. It transfers measurements before cutting or shaping.",
              "markScheme": "Marking out transfers measurements and lines onto material before manufacture.",
              "explanation": "It guides cutting, drilling and shaping."
            },
            {
              "type": "short",
              "question": "Why use a centre punch before drilling?",
              "keywords": [
                "locate",
                "drill",
                "stop",
                "slip"
              ],
              "mode": "any",
              "traps": [
                "weld"
              ],
              "trapResponse": "Trap answer — a centre punch does not weld. It helps locate the drill.",
              "markScheme": "A centre punch makes a small indentation to stop the drill bit slipping.",
              "explanation": "This improves accuracy and safety."
            },
            {
              "type": "short",
              "question": "What is a tolerance on a drawing?",
              "keywords": [
                "acceptable",
                "variation",
                "dimension"
              ],
              "mode": "any",
              "traps": [
                "colour"
              ],
              "trapResponse": "Trap answer — tolerances usually control size, not colour.",
              "markScheme": "A tolerance is the acceptable variation allowed from a dimension.",
              "explanation": "It tells manufacturers how accurate the part must be."
            },
            {
              "type": "short",
              "question": "Why are engineering drawings standardised?",
              "keywords": [
                "clear",
                "understand",
                "avoid",
                "mistakes"
              ],
              "mode": "any",
              "traps": [
                "secret"
              ],
              "trapResponse": "Trap answer — standardisation is not to make drawings secret. It makes them clearer.",
              "markScheme": "Standardised drawings help people understand information clearly and avoid mistakes.",
              "explanation": "Common symbols and line types reduce confusion."
            },
            {
              "type": "short",
              "question": "Why is accurate marking out important?",
              "keywords": [
                "accuracy",
                "fit",
                "waste",
                "quality"
              ],
              "mode": "any",
              "traps": [
                "speed only"
              ],
              "trapResponse": "Trap answer — speed alone is not the point. Accuracy affects fit, waste and quality.",
              "markScheme": "Accurate marking out helps parts fit correctly and reduces waste.",
              "explanation": "Errors at this stage can spoil the product."
            }
          ]
        }
      ]
    }
  ]
};
