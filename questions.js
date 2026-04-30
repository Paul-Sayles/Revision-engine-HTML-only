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
    ]
  },

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
},
{
  title: "Forming",
  questions: [
    {
      type: "mcq",
      question: "What is forming?",
      options: ["Shaping material without removing it", "Cutting material away", "Joining materials together", "Melting material completely"],
      correct: 0,
      explanation: "Forming changes shape without removing material."
    },
    {
      type: "mcq",
      question: "Which is a forming process?",
      options: ["Drilling", "Casting", "Bending", "Milling"],
      correct: 2,
      explanation: "Bending reshapes material without removing it."
    },
    {
      type: "short",
      question: "State one advantage of forming.",
      keywords: ["no waste", "fast", "efficient"],
      mode: "any",
      traps: ["accurate"],
      trapResponse: "Trap answer — forming can be accurate, but the key advantage is reduced waste and speed.",
      markScheme: "Forming is fast and produces little or no waste.",
      explanation: "Material is reshaped rather than removed."
    },
    {
      type: "mcq",
      question: "Which forming process uses rollers?",
      options: ["Rolling", "Casting", "Turning", "Welding"],
      correct: 0,
      explanation: "Rolling passes material through rollers to shape it."
    },
    {
      type: "short",
      question: "What is forging?",
      keywords: ["hammer", "compress", "shape"],
      mode: "any",
      traps: ["cut"],
      trapResponse: "Trap answer — forging shapes material, it does not cut it.",
      markScheme: "Forging shapes metal using compressive force such as hammering.",
      explanation: "Forging improves strength by aligning grain structure."
    },
    {
      type: "mcq",
      question: "Which process bends sheet metal into shape?",
      options: ["Press forming", "Casting", "Milling", "Drilling"],
      correct: 0,
      explanation: "Press forming bends sheet metal using a press."
    },
    {
      type: "short",
      question: "Why is forming efficient?",
      keywords: ["no waste", "material"],
      mode: "any",
      traps: ["cheap"],
      trapResponse: "Trap answer — cost can vary, but efficiency comes from minimal waste.",
      markScheme: "Forming is efficient because little or no material is wasted.",
      explanation: "Material is reshaped instead of removed."
    },
    {
      type: "mcq",
      question: "Which process shapes metal using heat and force?",
      options: ["Forging", "Soldering", "Drilling", "Cutting"],
      correct: 0,
      explanation: "Forging often uses heat and force."
    },
    {
      type: "short",
      question: "State one use of forming.",
      keywords: ["car", "panel", "metal", "sheet"],
      mode: "any",
      traps: ["wire"],
      trapResponse: "Trap answer — wire relates to drawing, not general forming.",
      markScheme: "Forming is used to make car panels and sheet metal products.",
      explanation: "Forming is common in mass production."
    },
    {
      type: "mcq",
      question: "What happens to material thickness during forming?",
      options: ["Usually stays similar", "Always increases", "Always halves", "Disappears"],
      correct: 0,
      explanation: "Thickness may change slightly but material is not removed."
    }
  ]
},

{
  title: "Additive Manufacturing",
  questions: [
    {
      type: "mcq",
      question: "What is additive manufacturing?",
      options: ["Building objects layer by layer", "Cutting material away", "Joining parts with glue", "Casting metal"],
      correct: 0,
      explanation: "Additive manufacturing builds parts layer by layer."
    },
    {
      type: "mcq",
      question: "What is another name for additive manufacturing?",
      options: ["3D printing", "Milling", "Forging", "Drilling"],
      correct: 0,
      explanation: "Additive manufacturing is also known as 3D printing."
    },
    {
      type: "short",
      question: "State one advantage of 3D printing.",
      keywords: ["complex", "shape", "custom", "waste"],
      mode: "any",
      traps: ["fast"],
      trapResponse: "Trap answer — 3D printing can be slow. The advantage is complexity or low waste.",
      markScheme: "3D printing can produce complex shapes with low material waste.",
      explanation: "It allows designs that are hard to make otherwise."
    },
    {
      type: "mcq",
      question: "Which material is commonly used in 3D printing?",
      options: ["PLA plastic", "Concrete block", "Glass sheet", "Steel beam"],
      correct: 0,
      explanation: "PLA is a common 3D printing material."
    },
    {
      type: "short",
      question: "Why is additive manufacturing good for prototypes?",
      keywords: ["quick", "design", "test"],
      mode: "any",
      traps: ["strong"],
      trapResponse: "Trap answer — prototypes are for testing design, not necessarily strength.",
      markScheme: "It allows quick production of prototypes for testing designs.",
      explanation: "Designs can be changed easily."
    },
    {
      type: "mcq",
      question: "What is built first in 3D printing?",
      options: ["Bottom layer", "Top layer", "Middle section", "Final finish"],
      correct: 0,
      explanation: "Objects are built layer by layer from the bottom up."
    },
    {
      type: "short",
      question: "State one disadvantage of additive manufacturing.",
      keywords: ["slow", "weak", "cost"],
      mode: "any",
      traps: ["accurate"],
      trapResponse: "Trap answer — accuracy is often good. Disadvantages include speed or strength.",
      markScheme: "3D printing can be slow and parts may be weaker than traditional methods.",
      explanation: "Layer bonding can reduce strength."
    },
    {
      type: "mcq",
      question: "Which file type is commonly used in 3D printing?",
      options: ["STL", "MP3", "DOC", "JPG"],
      correct: 0,
      explanation: "STL files are used for 3D models."
    },
    {
      type: "short",
      question: "What does CAD stand for?",
      keywords: ["computer", "aided", "design"],
      mode: "all",
      traps: ["drawing"],
      trapResponse: "Trap answer — CAD is more than drawing. It is Computer Aided Design.",
      markScheme: "CAD stands for Computer Aided Design.",
      explanation: "CAD is used to design models for manufacturing."
    },
    {
      type: "mcq",
      question: "Why is additive manufacturing useful?",
      options: ["It reduces material waste", "It always increases weight", "It removes all need for machines", "It is always the fastest method"],
      correct: 0,
      explanation: "Material is only used where needed, reducing waste."
    }
  ]
},

{
  title: "Surface Finishing",
  questions: [
    {
      type: "mcq",
      question: "Why is surface finishing used?",
      options: ["To improve appearance and protection", "To melt the material", "To cut the material", "To increase weight"],
      correct: 0,
      explanation: "Surface finishing improves both appearance and durability."
    },
    {
      type: "mcq",
      question: "Which is a surface finishing process?",
      options: ["Painting", "Casting", "Drilling", "Forging"],
      correct: 0,
      explanation: "Painting protects and decorates surfaces."
    },
    {
      type: "short",
      question: "State one purpose of painting.",
      keywords: ["protect", "corrosion", "appearance"],
      mode: "any",
      traps: ["strength"],
      trapResponse: "Trap answer — paint does not significantly increase strength.",
      markScheme: "Painting protects against corrosion and improves appearance.",
      explanation: "It creates a barrier against moisture."
    },
    {
      type: "mcq",
      question: "Which process coats metal with another metal?",
      options: ["Electroplating", "Drilling", "Milling", "Casting"],
      correct: 0,
      explanation: "Electroplating coats a surface with another metal."
    },
    {
      type: "short",
      question: "Why is galvanising used?",
      keywords: ["zinc", "protect", "rust"],
      mode: "any",
      traps: ["paint"],
      trapResponse: "Trap answer — galvanising uses zinc, not paint.",
      markScheme: "Galvanising coats steel with zinc to prevent rust.",
      explanation: "Zinc protects the steel from corrosion."
    },
    {
      type: "mcq",
      question: "Which finish improves grip?",
      options: ["Knurling", "Polishing", "Painting", "Casting"],
      correct: 0,
      explanation: "Knurling creates a textured surface for grip."
    },
    {
      type: "short",
      question: "What does polishing do?",
      keywords: ["smooth", "shine"],
      mode: "any",
      traps: ["protect"],
      trapResponse: "Trap answer — polishing mainly improves appearance, not protection.",
      markScheme: "Polishing smooths and shines a surface.",
      explanation: "It improves appearance."
    },
    {
      type: "mcq",
      question: "Which process protects steel from rust?",
      options: ["Painting or galvanising", "Cutting", "Drilling", "Milling"],
      correct: 0,
      explanation: "Surface coatings protect steel from corrosion."
    },
    {
      type: "short",
      question: "State one reason for applying a finish.",
      keywords: ["protect", "appearance", "durability"],
      mode: "any",
      traps: ["shape"],
      trapResponse: "Trap answer — finishing does not change the main shape.",
      markScheme: "Finishes protect materials and improve appearance or durability.",
      explanation: "Finishing extends product life."
    },
    {
      type: "mcq",
      question: "Which finish gives a shiny appearance?",
      options: ["Polishing", "Casting", "Drilling", "Turning"],
      correct: 0,
      explanation: "Polishing creates a shiny surface."
    }
  ]
},
{
  title: "CAD",
  questions: [
    {
      type: "mcq",
      question: "What does CAD stand for?",
      options: ["Computer Aided Design", "Controlled Auto Drawing", "Computer Assisted Draft", "Centralised Art Design"],
      correct: 0,
      explanation: "CAD stands for Computer Aided Design."
    },
    {
      type: "mcq",
      question: "What is CAD used for?",
      options: ["Designing products digitally", "Cutting materials", "Joining materials", "Painting surfaces"],
      correct: 0,
      explanation: "CAD allows designers to create and modify digital models."
    },
    {
      type: "short",
      question: "State one advantage of CAD.",
      keywords: ["edit", "modify", "accurate", "save", "repeat"],
      mode: "any",
      traps: ["cheap"],
      trapResponse: "Trap answer — cost varies. The key advantage is accuracy and easy modification.",
      markScheme: "CAD allows accurate designs and easy modification or editing.",
      explanation: "Designs can be changed quickly without redrawing."
    },
    {
      type: "mcq",
      question: "Which file type is commonly used for CAD models?",
      options: ["STL", "MP3", "TXT", "JPG"],
      correct: 0,
      explanation: "STL is commonly used for 3D models."
    },
    {
      type: "short",
      question: "Why is CAD useful for prototyping?",
      keywords: ["test", "design", "quick"],
      mode: "any",
      traps: ["strong"],
      trapResponse: "Trap answer — CAD is for design and testing, not strength.",
      markScheme: "CAD allows quick testing and development of designs.",
      explanation: "Designs can be refined before manufacturing."
    },
    {
      type: "mcq",
      question: "Which device is commonly used with CAD?",
      options: ["Computer", "Hammer", "Lathe", "Drill"],
      correct: 0,
      explanation: "CAD software runs on computers."
    },
    {
      type: "short",
      question: "State one output from CAD.",
      keywords: ["drawing", "model", "file"],
      mode: "any",
      traps: ["metal"],
      trapResponse: "Trap answer — CAD produces digital outputs, not physical metal.",
      markScheme: "CAD produces drawings, models, or digital files.",
      explanation: "These can be used for manufacturing."
    },
    {
      type: "mcq",
      question: "What type of model can CAD create?",
      options: ["2D and 3D models", "Only 2D drawings", "Only physical models", "Only paper sketches"],
      correct: 0,
      explanation: "CAD can produce both 2D drawings and 3D models."
    },
    {
      type: "short",
      question: "What is a 3D model?",
      keywords: ["height", "width", "depth"],
      mode: "any",
      traps: ["flat"],
      trapResponse: "Trap answer — a 3D model is not flat.",
      markScheme: "A 3D model has height, width, and depth.",
      explanation: "It represents a real object digitally."
    },
    {
      type: "mcq",
      question: "Why is CAD important in manufacturing?",
      options: ["It links design to production", "It replaces all machines", "It reduces all costs", "It removes design stages"],
      correct: 0,
      explanation: "CAD connects design to manufacturing processes like CNC."
    }
  ]
},

{
  title: "Technical Drawing",
  questions: [
    {
      type: "mcq",
      question: "What is technical drawing used for?",
      options: ["Communicating design ideas", "Cutting materials", "Joining metals", "Heating plastics"],
      correct: 0,
      explanation: "Technical drawings clearly communicate design details."
    },
    {
      type: "mcq",
      question: "Which drawing shows an object in 3D?",
      options: ["Isometric drawing", "Orthographic drawing", "Plan view", "Section view"],
      correct: 0,
      explanation: "Isometric drawings show 3D views."
    },
    {
      type: "short",
      question: "What is orthographic projection?",
      keywords: ["views", "front", "side", "top"],
      mode: "any",
      traps: ["3d"],
      trapResponse: "Trap answer — orthographic is 2D views, not 3D.",
      markScheme: "Orthographic projection shows different 2D views such as front, side, and top.",
      explanation: "Used to fully describe an object."
    },
    {
      type: "mcq",
      question: "Which view shows the top of an object?",
      options: ["Plan view", "Front view", "Side view", "Isometric view"],
      correct: 0,
      explanation: "Plan view shows the object from above."
    },
    {
      type: "short",
      question: "Why are dimensions added to drawings?",
      keywords: ["size", "measure"],
      mode: "any",
      traps: ["colour"],
      trapResponse: "Trap answer — dimensions are about size, not colour.",
      markScheme: "Dimensions show the size and measurements of an object.",
      explanation: "They ensure accuracy in manufacture."
    },
    {
      type: "mcq",
      question: "Which drawing is flat and uses multiple views?",
      options: ["Orthographic", "Isometric", "Perspective", "Sketch"],
      correct: 0,
      explanation: "Orthographic drawings use multiple 2D views."
    },
    {
      type: "short",
      question: "What is a scale drawing?",
      keywords: ["ratio", "size"],
      mode: "any",
      traps: ["random"],
      trapResponse: "Trap answer — scale drawings follow a ratio, not random sizing.",
      markScheme: "A scale drawing represents an object using a ratio to change size.",
      explanation: "Used when objects are too large or small."
    },
    {
      type: "mcq",
      question: "What does a section view show?",
      options: ["Inside of an object", "Outside colour", "Surface finish", "Weight"],
      correct: 0,
      explanation: "Section views show internal details."
    },
    {
      type: "short",
      question: "Why are technical drawings important?",
      keywords: ["clear", "communication", "accurate"],
      mode: "any",
      traps: ["art"],
      trapResponse: "Trap answer — technical drawing is about precision, not artistic expression.",
      markScheme: "They provide clear and accurate communication of designs.",
      explanation: "Essential for manufacturing."
    },
    {
      type: "mcq",
      question: "Which tool is used for drawing circles?",
      options: ["Compass", "Ruler", "Protractor", "Set square"],
      correct: 0,
      explanation: "A compass is used to draw circles."
    }
  ]
},

{
  title: "Tolerances",
  questions: [
    {
      type: "mcq",
      question: "What is tolerance?",
      options: ["Allowed variation in size", "Exact measurement", "Surface finish", "Material type"],
      correct: 0,
      explanation: "Tolerance is the acceptable variation in dimensions."
    },
    {
      type: "mcq",
      question: "Why are tolerances used?",
      options: ["To allow for manufacturing variation", "To decorate products", "To reduce weight", "To add colour"],
      correct: 0,
      explanation: "Tolerances allow for small differences in production."
    },
    {
      type: "short",
      question: "What happens if tolerance is too tight?",
      keywords: ["expensive", "difficult"],
      mode: "any",
      traps: ["easy"],
      trapResponse: "Trap answer — tight tolerances are harder, not easier.",
      markScheme: "Tight tolerances make manufacturing more difficult and expensive.",
      explanation: "Precision requires more control."
    },
    {
      type: "mcq",
      question: "What happens if tolerance is too loose?",
      options: ["Parts may not fit properly", "Parts become stronger", "Production stops", "Materials melt"],
      correct: 0,
      explanation: "Loose tolerances can cause poor fitting parts."
    },
    {
      type: "short",
      question: "Why is tolerance important?",
      keywords: ["fit", "function"],
      mode: "any",
      traps: ["colour"],
      trapResponse: "Trap answer — tolerance affects fit, not colour.",
      markScheme: "Tolerance ensures parts fit and function correctly.",
      explanation: "Essential in engineering assemblies."
    },
    {
      type: "mcq",
      question: "What does ± mean?",
      options: ["Plus or minus variation", "Exact value", "Multiply", "Divide"],
      correct: 0,
      explanation: "± shows allowable variation above or below a value."
    },
    {
      type: "short",
      question: "What is a tight tolerance?",
      keywords: ["small", "variation"],
      mode: "any",
      traps: ["large"],
      trapResponse: "Trap answer — tight means small variation.",
      markScheme: "A tight tolerance allows very little variation.",
      explanation: "Used where precision is critical."
    },
    {
      type: "mcq",
      question: "Which product needs tight tolerance?",
      options: ["Engine parts", "Wooden fence", "Plastic toy", "Packaging box"],
      correct: 0,
      explanation: "Engine parts require high precision."
    },
    {
      type: "short",
      question: "State one example where tolerance matters.",
      keywords: ["engine", "machine", "gear"],
      mode: "any",
      traps: ["poster"],
      trapResponse: "Trap answer — posters do not require precision fitting.",
      markScheme: "Tolerance matters in machines such as engines and gears.",
      explanation: "Precision ensures proper operation."
    },
    {
      type: "mcq",
      question: "What is the main purpose of tolerance?",
      options: ["Ensure fit and function", "Improve colour", "Reduce cost always", "Change material"],
      correct: 0,
      explanation: "Tolerance ensures correct fit and function."
    }
  ]
},
{
  title: "Quality Control",
  questions: [
    {
      type: "mcq",
      question: "What is quality control?",
      options: ["Checking products meet standards", "Designing products", "Cutting materials", "Joining materials"],
      correct: 0,
      explanation: "Quality control ensures products meet required standards."
    },
    {
      type: "mcq",
      question: "Which tool is used to measure accurately?",
      options: ["Vernier caliper", "Hammer", "Vice", "File"],
      correct: 0,
      explanation: "Vernier calipers measure precise dimensions."
    },
    {
      type: "short",
      question: "Why is quality control important?",
      keywords: ["safe", "standard", "fit"],
      mode: "any",
      traps: ["cheap"],
      trapResponse: "Trap answer — quality control is about safety and standards, not cost.",
      markScheme: "It ensures products are safe and meet required standards.",
      explanation: "Faulty products can be dangerous."
    },
    {
      type: "mcq",
      question: "What is inspection?",
      options: ["Checking products", "Making products", "Finishing products", "Packaging"],
      correct: 0,
      explanation: "Inspection is checking products for faults."
    },
    {
      type: "short",
      question: "What is a fault?",
      keywords: ["defect", "problem"],
      mode: "any",
      traps: ["design"],
      trapResponse: "Trap answer — a fault is a defect, not the design itself.",
      markScheme: "A fault is a defect or problem in a product.",
      explanation: "Faults must be identified and corrected."
    }
  ]
},

{
  title: "Production Methods",
  questions: [
    {
      type: "mcq",
      question: "What is one-off production?",
      options: ["Making a single product", "Making many identical products", "Continuous production", "Automated production"],
      correct: 0,
      explanation: "One-off production makes a single item."
    },
    {
      type: "mcq",
      question: "What is mass production?",
      options: ["Making large quantities", "Making one item", "Hand crafting", "Repairing"],
      correct: 0,
      explanation: "Mass production makes large numbers of identical items."
    },
    {
      type: "short",
      question: "State one advantage of mass production.",
      keywords: ["cheap", "fast", "efficient"],
      mode: "any",
      traps: ["custom"],
      trapResponse: "Trap answer — mass production is not customised.",
      markScheme: "Mass production is fast and cost efficient.",
      explanation: "It reduces cost per item."
    },
    {
      type: "mcq",
      question: "What is batch production?",
      options: ["Making groups of products", "Making one product", "Continuous production", "No production"],
      correct: 0,
      explanation: "Batch production makes items in groups."
    },
    {
      type: "short",
      question: "Why use batch production?",
      keywords: ["flexible", "variety"],
      mode: "any",
      traps: ["same"],
      trapResponse: "Trap answer — batch allows variation, not identical output every time.",
      markScheme: "Batch production allows flexibility and variety.",
      explanation: "Different batches can be made."
    }
  ]
},

{
  title: "Health and Safety",
  questions: [
    {
      type: "mcq",
      question: "What does PPE stand for?",
      options: ["Personal Protective Equipment", "Primary Production Equipment", "Personal Process Equipment", "Protective Power Equipment"],
      correct: 0,
      explanation: "PPE protects users from hazards."
    },
    {
      type: "mcq",
      question: "Which is PPE?",
      options: ["Safety goggles", "Hammer", "Lathe", "Drill"],
      correct: 0,
      explanation: "Goggles protect eyes from hazards."
    },
    {
      type: "short",
      question: "Why is PPE important?",
      keywords: ["protect", "safety"],
      mode: "any",
      traps: ["design"],
      trapResponse: "Trap answer — PPE is about safety, not design.",
      markScheme: "PPE protects users from injury.",
      explanation: "Essential in workshops."
    },
    {
      type: "mcq",
      question: "What should you do before using a machine?",
      options: ["Check it is safe", "Turn it on immediately", "Ignore instructions", "Use without training"],
      correct: 0,
      explanation: "Safety checks must be done first."
    },
    {
      type: "short",
      question: "State one workshop hazard.",
      keywords: ["sharp", "hot", "moving"],
      mode: "any",
      traps: ["clean"],
      trapResponse: "Trap answer — hazards are dangers, not safe conditions.",
      markScheme: "Hazards include sharp edges, heat, and moving parts.",
      explanation: "Awareness reduces risk."
    }
  ]
}
      ]
    }
  ]
};
