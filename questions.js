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
              explanation: "Polymers are made from long chains of repeating molecules."
            },
            {
              type: "mcq",
              question: "Which of these is a thermoplastic?",
              options: ["Epoxy resin", "Urea formaldehyde", "Acrylic", "Melamine formaldehyde"],
              correct: 2,
              explanation: "Acrylic is a thermoplastic because it can be reheated and reshaped."
            },
            {
              type: "short",
              question: "State one property of a thermoplastic.",
              keywords: ["reheated", "reshaped", "remoulded", "softens"],
              mode: "any",
              traps: ["strong", "hard"],
              trapResponse: "Trap answer — strength or hardness may be true for some plastics, but the key thermoplastic property is that it softens when heated and can be reshaped.",
              markScheme: "A thermoplastic softens when heated and can be reshaped.",
              explanation: "Thermoplastics can be heated, formed, cooled, and reheated again."
            },
            {
              type: "short",
              question: "State one property of a thermosetting plastic.",
              keywords: ["cannot", "reshape", "permanent", "hardens", "heat resistant"],
              mode: "any",
              traps: ["reheated", "remoulded"],
              trapResponse: "Trap answer — thermosetting plastics cannot be repeatedly reheated and reshaped.",
              markScheme: "A thermosetting plastic sets permanently and cannot be reshaped by heating.",
              explanation: "Thermosetting plastics form strong permanent bonds when cured."
            },
            {
              type: "mcq",
              question: "Which polymer is commonly used for safety glasses and machine guards?",
              options: ["Acrylic", "PVC", "Nylon", "Polypropylene"],
              correct: 0,
              explanation: "Acrylic is transparent and impact resistant, making it suitable for guards and displays."
            },
            {
              type: "mcq",
              question: "Which polymer is often used for pipes and cable insulation?",
              options: ["PVC", "Nylon", "Acrylic", "Epoxy resin"],
              correct: 0,
              explanation: "PVC is commonly used for pipes, guttering and electrical insulation."
            },
            {
              type: "short",
              question: "Why are polymers often used instead of metals?",
              keywords: ["lightweight", "corrosion", "cheap", "insulator"],
              mode: "any",
              traps: ["light"],
              trapResponse: "Trap answer — 'light' is vague. The better engineering term is 'lightweight'.",
              markScheme: "Polymers may be lightweight, corrosion resistant, cheap, or good electrical insulators.",
              explanation: "Polymers are useful because they can offer properties metals may not."
            },
            {
              type: "mcq",
              question: "Which material is a thermosetting plastic?",
              options: ["Acrylic", "Polypropylene", "Epoxy resin", "PVC"],
              correct: 2,
              explanation: "Epoxy resin is a thermosetting plastic."
            },
            {
              type: "short",
              question: "What does biodegradable mean?",
              keywords: ["break", "down", "natural", "microorganisms"],
              mode: "any",
              traps: ["recyclable"],
              trapResponse: "Trap answer — recyclable and biodegradable are not the same thing.",
              markScheme: "Biodegradable materials can be broken down naturally by microorganisms.",
              explanation: "Biodegradable polymers reduce long-term environmental waste."
            },
            {
              type: "mcq",
              question: "Why can polymers be difficult to dispose of?",
              options: ["They rust quickly", "Many do not biodegrade easily", "They conduct electricity", "They melt at room temperature"],
              correct: 1,
              explanation: "Many polymers take a long time to biodegrade."
            }
          ]
        },

        {
          title: "Material Properties",
          questions: [
            {
              type: "mcq",
              question: "Which property describes resistance to scratching or indentation?",
              options: ["Ductility", "Hardness", "Toughness", "Elasticity"],
              correct: 1,
              explanation: "Hardness is resistance to scratching, indentation or wear."
            },
            {
              type: "mcq",
              question: "Which property describes the ability to absorb energy before breaking?",
              options: ["Toughness", "Brittleness", "Conductivity", "Density"],
              correct: 0,
              explanation: "Toughness is the ability to absorb energy and resist fracture."
            },
            {
              type: "short",
              question: "What does ductility mean?",
              keywords: ["drawn", "wire"],
              mode: "all",
              traps: ["bend", "stretch"],
              trapResponse: "Trap answer — ductility is not just bending or stretching. It means the material can be drawn into wire.",
              markScheme: "Ductility is the ability of a material to be drawn into wire.",
              explanation: "Copper is ductile, which is why it is useful for electrical wiring."
            },
            {
              type: "short",
              question: "What does malleability mean?",
              keywords: ["hammered", "sheet"],
              mode: "all",
              traps: ["wire"],
              trapResponse: "Trap answer — wire relates to ductility. Malleability means being formed into sheets.",
              markScheme: "Malleability is the ability of a material to be hammered or rolled into sheet form.",
              explanation: "Malleable metals can be shaped without cracking."
            },
            {
              type: "mcq",
              question: "Which property describes a material that breaks without much plastic deformation?",
              options: ["Ductile", "Malleable", "Brittle", "Elastic"],
              correct: 2,
              explanation: "Brittle materials break suddenly with little deformation."
            },
            {
              type: "mcq",
              question: "Which property describes a material returning to its original shape after force is removed?",
              options: ["Elasticity", "Toughness", "Hardness", "Conductivity"],
              correct: 0,
              explanation: "Elasticity is the ability to return to the original shape after deformation."
            },
            {
              type: "short",
              question: "State one reason material properties are important in engineering.",
              keywords: ["suitable", "safe", "function", "load", "environment"],
              mode: "any",
              traps: ["looks"],
              trapResponse: "Trap answer — appearance can matter, but engineering material choice is mainly about function, safety and suitability.",
              markScheme: "Material properties help engineers choose a suitable and safe material for a product or environment.",
              explanation: "A material must match the job it is expected to do."
            },
            {
              type: "mcq",
              question: "Which property is most important for electrical wiring?",
              options: ["Electrical conductivity", "Brittleness", "Porosity", "Transparency"],
              correct: 0,
              explanation: "Electrical wiring needs a material with good electrical conductivity."
            },
            {
              type: "short",
              question: "What does corrosion resistance mean?",
              keywords: ["resist", "rust", "oxidation", "chemical"],
              mode: "any",
              traps: ["waterproof"],
              trapResponse: "Trap answer — waterproof is not the same as corrosion resistant.",
              markScheme: "Corrosion resistance is the ability to resist rusting, oxidation or chemical attack.",
              explanation: "Stainless steel is corrosion resistant because of its chromium oxide layer."
            },
            {
              type: "mcq",
              question: "Which property describes how heavy a material is for its size?",
              options: ["Density", "Elasticity", "Hardness", "Ductility"],
              correct: 0,
              explanation: "Density describes mass per unit volume."
            }
          ]
        },

        {
          title: "Metals and Alloys",
          questions: [
            {
              type: "mcq",
              question: "What is an alloy?",
              options: ["A pure metal", "A mixture of metals or a metal with another element", "A type of polymer", "A ceramic coating"],
              correct: 1,
              explanation: "An alloy is made by combining a metal with other elements to improve properties."
            },
            {
              type: "mcq",
              question: "Which alloy contains iron and carbon?",
              options: ["Brass", "Bronze", "Steel", "Solder"],
              correct: 2,
              explanation: "Steel is an alloy of iron and carbon."
            },
            {
              type: "short",
              question: "Why are alloys used instead of pure metals?",
              keywords: ["improve", "properties", "stronger", "harder", "corrosion"],
              mode: "any",
              traps: ["cheaper"],
              trapResponse: "Trap answer — cost can matter, but the main engineering reason is improved properties.",
              markScheme: "Alloys are used because they can have improved properties such as strength, hardness or corrosion resistance.",
              explanation: "Alloying changes the structure and properties of a metal."
            },
            {
              type: "mcq",
              question: "Which alloy is made from copper and zinc?",
              options: ["Bronze", "Brass", "Stainless steel", "High carbon steel"],
              correct: 1,
              explanation: "Brass is an alloy of copper and zinc."
            },
            {
              type: "mcq",
              question: "Which alloy is made from copper and tin?",
              options: ["Bronze", "Brass", "Mild steel", "Solder"],
              correct: 0,
              explanation: "Bronze is an alloy of copper and tin."
            },
            {
              type: "short",
              question: "Why is stainless steel resistant to corrosion?",
              keywords: ["chromium", "oxide", "protective"],
              mode: "any",
              traps: ["carbon"],
              trapResponse: "Trap answer — carbon affects hardness and strength, but chromium gives stainless steel corrosion resistance.",
              markScheme: "Stainless steel contains chromium, which forms a protective oxide layer.",
              explanation: "The chromium oxide layer helps prevent rusting."
            },
            {
              type: "mcq",
              question: "Which metal is commonly used for electrical wiring?",
              options: ["Copper", "Lead", "Cast iron", "Tin"],
              correct: 0,
              explanation: "Copper is used for wiring because it has excellent electrical conductivity."
            },
            {
              type: "short",
              question: "State one property of aluminium that makes it useful in engineering.",
              keywords: ["lightweight", "corrosion", "malleable", "conductive"],
              mode: "any",
              traps: ["light"],
              trapResponse: "Trap answer — use 'lightweight' rather than 'light' for engineering answers.",
              markScheme: "Aluminium is lightweight, corrosion resistant, malleable and a good conductor.",
              explanation: "Aluminium is useful where low weight is important."
            },
            {
              type: "mcq",
              question: "Which metal is magnetic?",
              options: ["Copper", "Aluminium", "Iron", "Zinc"],
              correct: 2,
              explanation: "Iron is a ferrous metal and is magnetic."
            },
            {
              type: "short",
              question: "What is meant by a ferrous metal?",
              keywords: ["contains", "iron"],
              mode: "all",
              traps: ["magnetic"],
              trapResponse: "Trap answer — many ferrous metals are magnetic, but the definition is that they contain iron.",
              markScheme: "A ferrous metal is a metal that contains iron.",
              explanation: "Examples include mild steel, cast iron and stainless steel."
            }
          ]
        },
{
  title: "Timbers",
  questions: [
    {
      type: "mcq",
      question: "What is hardwood?",
      options: ["Wood from deciduous trees", "Wood from conifer trees", "Artificial wood", "Recycled wood"],
      correct: 0,
      explanation: "Hardwoods come from deciduous trees like oak and beech."
    },
    {
      type: "mcq",
      question: "What is softwood?",
      options: ["Weak wood", "Wood from conifer trees", "Man-made wood", "Treated wood"],
      correct: 1,
      explanation: "Softwoods come from conifer trees like pine."
    },
    {
      type: "short",
      question: "State one advantage of softwood.",
      keywords: ["cheap", "lightweight", "easy"],
      mode: "any",
      traps: ["strong"],
      trapResponse: "Trap answer — softwoods are not chosen for strength, but for cost and ease of use.",
      markScheme: "Softwoods are often cheaper, lightweight, and easy to work with.",
      explanation: "They are widely used in construction and furniture."
    },
    {
      type: "mcq",
      question: "Which is a manufactured board?",
      options: ["Oak", "Pine", "Plywood", "Teak"],
      correct: 2,
      explanation: "Plywood is a manufactured board made from layers of veneer."
    },
    {
      type: "short",
      question: "Why is plywood strong?",
      keywords: ["layers", "grain", "alternate"],
      mode: "any",
      traps: ["thick"],
      trapResponse: "Trap answer — strength comes from layered grain direction, not just thickness.",
      markScheme: "Plywood is strong because layers are glued with alternating grain directions.",
      explanation: "This reduces splitting and increases strength."
    },
    {
      type: "mcq",
      question: "Which wood is commonly used for outdoor furniture?",
      options: ["MDF", "Pine", "Teak", "Chipboard"],
      correct: 2,
      explanation: "Teak is naturally resistant to weather."
    },
    {
      type: "short",
      question: "What is seasoning?",
      keywords: ["dry", "moisture"],
      mode: "any",
      traps: ["cutting"],
      trapResponse: "Trap answer — seasoning is drying, not cutting.",
      markScheme: "Seasoning is the process of drying wood to reduce moisture content.",
      explanation: "This prevents warping and splitting."
    },
    {
      type: "mcq",
      question: "Which material is made from wood fibres and resin?",
      options: ["MDF", "Plywood", "Oak", "Balsa"],
      correct: 0,
      explanation: "MDF is made from wood fibres bonded with resin."
    },
    {
      type: "short",
      question: "State one disadvantage of MDF.",
      keywords: ["dust", "heavy", "water"],
      mode: "any",
      traps: ["expensive"],
      trapResponse: "Trap answer — MDF is usually cheap, not expensive.",
      markScheme: "MDF produces dust, is heavy, and is not water resistant.",
      explanation: "It must be handled carefully during cutting."
    },
    {
      type: "mcq",
      question: "Which timber is very lightweight?",
      options: ["Oak", "Teak", "Balsa", "Beech"],
      correct: 2,
      explanation: "Balsa is extremely lightweight."
    }
  ]
},
{
  title: "Composites",
  questions: [
    {
      type: "mcq",
      question: "What is a composite material?",
      options: ["A material made from two or more materials", "A pure metal", "A natural timber", "A type of fuel"],
      correct: 0,
      explanation: "A composite combines two or more materials to improve properties."
    },
    {
      type: "mcq",
      question: "Which is a composite material?",
      options: ["Mild steel", "GRP", "Copper", "Acrylic"],
      correct: 1,
      explanation: "GRP, glass reinforced plastic, is a composite."
    },
    {
      type: "short",
      question: "Why are composites used in engineering?",
      keywords: ["strength", "lightweight", "properties"],
      mode: "any",
      traps: ["cheap"],
      trapResponse: "Trap answer — composites are not always cheap. They are often chosen for improved properties.",
      markScheme: "Composites are used because they can be strong, lightweight, or have improved properties.",
      explanation: "The combined materials can perform better than one material alone."
    },
    {
      type: "mcq",
      question: "What does GRP stand for?",
      options: ["Glass Reinforced Plastic", "General Resin Plate", "Graphite Rolled Polymer", "Glazed Rubber Panel"],
      correct: 0,
      explanation: "GRP stands for Glass Reinforced Plastic."
    },
    {
      type: "short",
      question: "State one use of carbon fibre.",
      keywords: ["bike", "car", "aerospace", "sports", "aircraft"],
      mode: "any",
      traps: ["window"],
      trapResponse: "Trap answer — carbon fibre is normally used for strong lightweight structures, not windows.",
      markScheme: "Carbon fibre may be used in bicycles, cars, aircraft, sports equipment, or aerospace parts.",
      explanation: "Carbon fibre is strong and lightweight."
    },
    {
      type: "mcq",
      question: "Which property is carbon fibre known for?",
      options: ["Strong and lightweight", "Soft and flexible", "Transparent and brittle", "Cheap and biodegradable"],
      correct: 0,
      explanation: "Carbon fibre is valued for being strong and lightweight."
    },
    {
      type: "short",
      question: "What is reinforced concrete made from?",
      keywords: ["concrete", "steel"],
      mode: "all",
      traps: ["wood"],
      trapResponse: "Trap answer — reinforced concrete uses steel reinforcement, not wood.",
      markScheme: "Reinforced concrete is made from concrete with steel reinforcement.",
      explanation: "Concrete resists compression, while steel improves tensile strength."
    },
    {
      type: "mcq",
      question: "Why is steel added to concrete?",
      options: ["To improve tensile strength", "To make it transparent", "To reduce all weight", "To make it biodegradable"],
      correct: 0,
      explanation: "Steel reinforcement improves tensile strength."
    },
    {
      type: "short",
      question: "State one disadvantage of composites.",
      keywords: ["expensive", "difficult", "recycle", "repair"],
      mode: "any",
      traps: ["rust"],
      trapResponse: "Trap answer — many composites do not rust because they are not ferrous metals.",
      markScheme: "Composites can be expensive, difficult to repair, or difficult to recycle.",
      explanation: "Composite materials can be harder to process at end of life."
    },
    {
      type: "mcq",
      question: "Which material is often used as reinforcement in GRP?",
      options: ["Glass fibres", "Lead blocks", "Paper pulp", "Copper wire"],
      correct: 0,
      explanation: "GRP uses glass fibres to reinforce plastic resin."
    }
  ]
},

{
  title: "Smart Materials",
  questions: [
    {
      type: "mcq",
      question: "What is a smart material?",
      options: ["A material that responds to a stimulus", "A material that is always electronic", "A material made only from metal", "A material that cannot change"],
      correct: 0,
      explanation: "Smart materials respond to changes such as heat, light, pressure, or electricity."
    },
    {
      type: "mcq",
      question: "Which material changes shape when heated?",
      options: ["Shape memory alloy", "MDF", "Mild steel", "PVC"],
      correct: 0,
      explanation: "Shape memory alloys can return to a set shape when heated."
    },
    {
      type: "short",
      question: "State one use of shape memory alloy.",
      keywords: ["glasses", "frames", "braces", "medical", "actuator"],
      mode: "any",
      traps: ["window"],
      trapResponse: "Trap answer — shape memory alloy is used where controlled shape recovery is useful, not ordinary windows.",
      markScheme: "Shape memory alloy can be used in glasses frames, braces, medical devices, or actuators.",
      explanation: "It can return to its original shape after deformation."
    },
    {
      type: "mcq",
      question: "Which smart material changes colour with temperature?",
      options: ["Thermochromic pigment", "Photochromic pigment", "Carbon fibre", "Plywood"],
      correct: 0,
      explanation: "Thermochromic materials change colour when temperature changes."
    },
    {
      type: "short",
      question: "What does photochromic mean?",
      keywords: ["light", "colour"],
      mode: "all",
      traps: ["temperature"],
      trapResponse: "Trap answer — temperature change is thermochromic. Photochromic means responding to light.",
      markScheme: "Photochromic materials change colour in response to light.",
      explanation: "Photochromic lenses darken in bright sunlight."
    },
    {
      type: "mcq",
      question: "Which product commonly uses photochromic material?",
      options: ["Sun-reactive glasses lenses", "Concrete beams", "Steel bolts", "MDF shelves"],
      correct: 0,
      explanation: "Photochromic lenses darken when exposed to sunlight."
    },
    {
      type: "short",
      question: "What does thermochromic mean?",
      keywords: ["temperature", "colour"],
      mode: "all",
      traps: ["light"],
      trapResponse: "Trap answer — light change is photochromic. Thermochromic means responding to temperature.",
      markScheme: "Thermochromic materials change colour in response to temperature.",
      explanation: "They can be used in temperature indicators."
    },
    {
      type: "mcq",
      question: "Which smart material produces voltage when pressure is applied?",
      options: ["Piezoelectric material", "Thermochromic pigment", "Plywood", "Brass"],
      correct: 0,
      explanation: "Piezoelectric materials generate an electrical charge when pressure is applied."
    },
    {
      type: "short",
      question: "State one use of piezoelectric materials.",
      keywords: ["speaker", "sensor", "lighter", "buzzer", "microphone"],
      mode: "any",
      traps: ["paint"],
      trapResponse: "Trap answer — piezoelectric materials are used for pressure/electrical response, not ordinary paint.",
      markScheme: "Piezoelectric materials can be used in sensors, buzzers, microphones, speakers, or lighters.",
      explanation: "They convert mechanical pressure into electrical signals, or electrical signals into movement."
    },
    {
      type: "mcq",
      question: "Why are smart materials useful?",
      options: ["They can respond automatically to conditions", "They are always the cheapest material", "They never wear out", "They are all natural"],
      correct: 0,
      explanation: "Smart materials are useful because they respond to changes in their environment."
    }
  ]
}
      ]
    },

    {
      title: "OCR Engineering J823 - Manufacturing",
      topics: [
        {
          title: "Casting",
          questions: [
            {
              type: "mcq",
              question: "What is casting?",
              options: ["Cutting metal with a drill", "Pouring molten material into a mould", "Joining two metals with heat", "Bending sheet metal"],
              correct: 1,
              explanation: "Casting involves pouring molten material into a mould and allowing it to solidify."
            },
            {
              type: "short",
              question: "Name one advantage of casting.",
              keywords: ["complex", "shape", "repeat", "large", "batch"],
              mode: "any",
              traps: ["accurate"],
              trapResponse: "Trap answer — casting can be accurate, but accuracy depends on the process. A safer answer is complex shapes or repeat production.",
              markScheme: "Casting can produce complex shapes and repeated parts.",
              explanation: "Casting is useful for shapes that are difficult to machine."
            },
            {
              type: "mcq",
              question: "What material state is used in casting?",
              options: ["Powder", "Molten liquid", "Solid bar", "Foam"],
              correct: 1,
              explanation: "The material is heated until molten before being poured into the mould."
            },
            {
              type: "short",
              question: "What is a mould used for in casting?",
              keywords: ["shape", "molten", "material"],
              mode: "any",
              traps: ["cut"],
              trapResponse: "Trap answer — a mould does not cut the material. It gives shape to the molten material.",
              markScheme: "A mould shapes the molten material as it cools and solidifies.",
              explanation: "The cavity inside the mould forms the final part."
            },
            {
              type: "mcq",
              question: "Which casting process uses a pattern pressed into sand?",
              options: ["Injection moulding", "Sand casting", "Brazing", "Turning"],
              correct: 1,
              explanation: "Sand casting uses a sand mould formed around a pattern."
            },
            {
              type: "mcq",
              question: "What happens after molten metal is poured into a mould?",
              options: ["It evaporates", "It solidifies", "It becomes plastic", "It is soldered"],
              correct: 1,
              explanation: "The molten metal cools and solidifies into the mould shape."
            },
            {
              type: "short",
              question: "State one possible defect in casting.",
              keywords: ["porosity", "shrinkage", "crack", "void"],
              mode: "any",
              traps: ["rust"],
              trapResponse: "Trap answer — rust is corrosion, not a casting defect.",
              markScheme: "Possible casting defects include porosity, shrinkage, cracks or voids.",
              explanation: "Defects can occur if the mould, cooling or pouring process is poor."
            },
            {
              type: "mcq",
              question: "Why is a pattern used in sand casting?",
              options: ["To polish the metal", "To create the mould cavity", "To cool the casting", "To join two parts"],
              correct: 1,
              explanation: "The pattern creates the shape of the mould cavity."
            },
            {
              type: "short",
              question: "Why must molten metal be handled carefully?",
              keywords: ["hot", "burns", "dangerous", "safety"],
              mode: "any",
              traps: ["sharp"],
              trapResponse: "Trap answer — sharp edges may be a hazard later, but molten metal is mainly dangerous because of heat and burns.",
              markScheme: "Molten metal is extremely hot and can cause serious burns, so safety controls are needed.",
              explanation: "Casting requires PPE and safe working procedures."
            },
            {
              type: "mcq",
              question: "Which product could be made by casting?",
              options: ["Engine block", "Paper label", "Electrical cable", "Flat drawing"],
              correct: 0,
              explanation: "Engine blocks are often made by casting because of their complex shape."
            }
          ]
        },

        {
          title: "Joining Methods",
          questions: [
            {
              type: "mcq",
              question: "Which process permanently joins metals by melting them together?",
              options: ["Welding", "Screwing", "Riveting", "Folding"],
              correct: 0,
              explanation: "Welding uses heat to fuse metals together."
            },
            {
              type: "mcq",
              question: "Which joining method uses a filler metal with a lower melting point than the parts being joined?",
              options: ["Soldering", "Drilling", "Turning", "Casting"],
              correct: 0,
              explanation: "Soldering uses a lower melting point filler metal."
            },
            {
              type: "short",
              question: "State one advantage of welding.",
              keywords: ["strong", "permanent", "sealed"],
              mode: "any",
              traps: ["temporary"],
              trapResponse: "Trap answer — welding is normally a permanent joining method, not temporary.",
              markScheme: "Welding can create a strong, permanent joint.",
              explanation: "Welded joints are common in structural metalwork."
            },
            {
              type: "short",
              question: "What is an adhesive used for?",
              keywords: ["bond", "join", "materials"],
              mode: "any",
              traps: ["melt"],
              trapResponse: "Trap answer — adhesives do not usually melt the materials. They bond surfaces together.",
              markScheme: "An adhesive is used to bond or join materials together.",
              explanation: "Adhesives can join similar or different materials."
            },
            {
              type: "mcq",
              question: "Which joining method can be undone easily?",
              options: ["Welding", "Brazing", "Screws", "Adhesive bonding"],
              correct: 2,
              explanation: "Screws are a temporary or removable fixing method."
            },
            {
              type: "mcq",
              question: "Which joining method uses a mechanical fastener?",
              options: ["Riveting", "Welding", "Soldering", "Brazing"],
              correct: 0,
              explanation: "Riveting uses a mechanical fastener to join materials."
            },
            {
              type: "short",
              question: "What is the difference between a temporary and permanent joint?",
              keywords: ["temporary", "removed", "permanent", "damage"],
              mode: "any",
              traps: ["strong"],
              trapResponse: "Trap answer — strength alone does not define temporary or permanent. The key issue is whether it can be removed without damage.",
              markScheme: "A temporary joint can be removed without damage, while a permanent joint cannot usually be separated without damage.",
              explanation: "Screws are temporary; welding is permanent."
            },
            {
              type: "mcq",
              question: "Which process is commonly used for electrical components?",
              options: ["Soldering", "Forging", "Sand casting", "Milling"],
              correct: 0,
              explanation: "Soldering is commonly used to join electrical components."
            },
            {
              type: "short",
              question: "State one safety risk when welding.",
              keywords: ["heat", "burns", "arc", "eye", "fumes"],
              mode: "any",
              traps: ["splinter"],
              trapResponse: "Trap answer — splinters are not the main welding risk. Welding hazards include heat, burns, arc eye and fumes.",
              markScheme: "Welding risks include burns, arc eye, heat and fumes.",
              explanation: "Welding needs PPE such as gloves, mask and eye protection."
            },
            {
              type: "mcq",
              question: "Which joining method uses heat but does not melt the parent metals?",
              options: ["Brazing", "MIG welding", "Spot welding", "Arc welding"],
              correct: 0,
              explanation: "Brazing uses a filler metal and does not melt the parent metals."
            }
          ]
        },
{
  title: "Machining",
  questions: [
    {
      type: "mcq",
      question: "What is machining?",
      options: ["Removing material to shape a part", "Pouring metal into a mould", "Joining parts with adhesive", "Heating plastic until soft"],
      correct: 0,
      explanation: "Machining removes material from a workpiece to create the required shape."
    },
    {
      type: "mcq",
      question: "Which machine is commonly used to produce cylindrical parts?",
      options: ["Lathe", "Pillar drill", "Laser cutter", "Injection moulder"],
      correct: 0,
      explanation: "A lathe rotates the workpiece and is used for cylindrical parts."
    },
    {
      type: "short",
      question: "What is drilling used for?",
      keywords: ["hole", "holes"],
      mode: "any",
      traps: ["cutting shape"],
      trapResponse: "Trap answer — drilling is specifically used to make holes, not general shaping.",
      markScheme: "Drilling is used to make holes in a material.",
      explanation: "A drill bit rotates and removes material to form a hole."
    },
    {
      type: "mcq",
      question: "Which tool is used in drilling?",
      options: ["Drill bit", "Mould", "Electrode", "Rivet"],
      correct: 0,
      explanation: "A drill bit cuts the hole as it rotates."
    },
    {
      type: "short",
      question: "State one safety rule when using a pillar drill.",
      keywords: ["goggles", "clamp", "tie", "hair", "guard"],
      mode: "any",
      traps: ["gloves"],
      trapResponse: "Trap answer — gloves can be dangerous near rotating machinery because they may get caught.",
      markScheme: "Wear goggles, clamp the work, use guards, and tie back long hair.",
      explanation: "Rotating tools can catch loose material or throw swarf."
    },
    {
      type: "mcq",
      question: "What is swarf?",
      options: ["Waste material cut from the workpiece", "A type of glue", "A casting mould", "A protective coating"],
      correct: 0,
      explanation: "Swarf is the waste material produced during cutting or machining."
    },
    {
      type: "short",
      question: "Why should work be clamped during drilling?",
      keywords: ["secure", "move", "spin", "safe"],
      mode: "any",
      traps: ["hold by hand"],
      trapResponse: "Trap answer — holding work by hand is unsafe because it can spin or move.",
      markScheme: "The work should be clamped so it cannot move or spin during drilling.",
      explanation: "Clamping improves accuracy and safety."
    },
    {
      type: "mcq",
      question: "Which machining process removes material using a rotating cutter?",
      options: ["Milling", "Casting", "Brazing", "Forging"],
      correct: 0,
      explanation: "Milling uses a rotating cutter to remove material."
    },
    {
      type: "short",
      question: "State one advantage of CNC machining.",
      keywords: ["accurate", "repeatable", "complex", "automatic"],
      mode: "any",
      traps: ["handmade"],
      trapResponse: "Trap answer — CNC is computer-controlled, not handmade.",
      markScheme: "CNC machining is accurate, repeatable and can produce complex shapes.",
      explanation: "CNC machines follow programmed instructions."
    },
    {
      type: "mcq",
      question: "What does CNC stand for?",
      options: ["Computer Numerical Control", "Cutting New Components", "Controlled Nylon Casting", "Central Network Cutter"],
      correct: 0,
      explanation: "CNC stands for Computer Numerical Control."
    }
  ]
}
      ]
    }
  ]
};
