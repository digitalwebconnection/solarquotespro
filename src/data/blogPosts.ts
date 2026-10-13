export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryStyle: string;
  image: string;
  date: string;
  dateTime: string;
  author: string;
  sections: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "solar-cost-australia",
    title: "How Much Does Solar Cost in Australia?",
    description:
      "Understand the factors that affect solar prices, including system size, panels, inverters, installation and available incentives.",
    category: "Solar Guide",
    categoryStyle: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=960&q=70",
    date: "Aug 12, 2026",
    dateTime: "2026-08-12",
    author: "Solar Research Team",
    sections: [
      {
        heading: "What determines the price?",
        paragraphs: [
          "There is no single price for a solar installation. The total depends on the system designed for your home, the equipment selected and the work required to install it safely. A quote should explain what is included so you can compare the complete proposal rather than just its headline price.",
          "System size is one of the biggest factors. A larger system uses more panels and may need a different inverter, but the right size depends on your electricity use, roof and plans for the home.",
        ],
        points: [
          "Panel and inverter brand, model and warranty",
          "System size and expected generation",
          "Roof access, layout, switchboard and installation complexity",
          "Additional equipment, monitoring or electrical work",
        ],
      },
      {
        heading: "Compare the whole system",
        paragraphs: [
          "When reviewing offers, check that each installer is quoting on a comparable system. Look at panel and inverter models, the proposed capacity, installation inclusions and warranty support. Ask about any exclusions or work that could incur an additional charge.",
          "A very low quote may not include the same equipment or scope as another proposal. Ask the installer to explain the differences and provide any assumptions in writing.",
        ],
      },
      {
        heading: "Consider incentives carefully",
        paragraphs: [
          "Eligible solar installations may qualify for incentives, but eligibility and the way a discount is applied depend on current rules and your circumstances. Ask for the gross price, the incentive amount and the final price to be shown separately, and verify eligibility with an appropriate official source before signing.",
        ],
      },
      {
        heading: "A practical way to start",
        paragraphs: [
          "Gather a recent electricity bill and think about when your household uses power. Request itemised quotes from installers who service your area, compare the equipment and inclusions, and ask questions about anything unclear. This gives you a more useful basis for deciding whether a system represents value for your home.",
        ],
      },
    ],
  },
  {
    slug: "home-battery-worth-it",
    title: "Are Home Batteries Worth the Investment?",
    description:
      "Compare battery capacity, usable energy, warranties, backup capability and potential savings before choosing home battery storage.",
    category: "Batteries",
    categoryStyle: "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=960&q=70",
    date: "Aug 18, 2026",
    dateTime: "2026-08-18",
    author: "Energy Research Team",
    sections: [
      {
        heading: "Start with how your home uses energy",
        paragraphs: [
          "A home battery stores electricity for use later, often allowing a household with solar to use more of its own generation after the sun goes down. Whether that is worthwhile depends on your energy use, electricity plan, solar output, battery cost and how long you expect to use the system.",
          "Look at your usage across the day and evening. If your home already uses most of its solar electricity while it is being generated, there may be less surplus to store. A recent bill and interval usage data, if available, can help an installer assess your situation.",
        ],
      },
      {
        heading: "Compare usable capacity and power",
        paragraphs: [
          "Battery capacity describes how much energy it can store, while power indicates how quickly it can deliver that energy. These are different specifications. Consider which appliances you want to run and for how long, rather than choosing a battery based only on its advertised capacity.",
        ],
        points: [
          "Usable capacity and continuous power output",
          "Whether backup is supported and what circuits it covers",
          "Compatibility with your solar inverter and existing equipment",
          "Warranty conditions, performance limits and installation location",
        ],
      },
      {
        heading: "Understand backup and savings assumptions",
        paragraphs: [
          "A battery does not automatically provide backup during a blackout. Backup capability may require specific equipment, installation changes and a decision about which circuits to support. Ask the installer to describe how the system behaves during a grid outage.",
          "Savings estimates are forecasts, not guarantees. Ask what electricity prices, export rates, usage patterns and battery settings were assumed, and how sensitive the estimate is to changes in those inputs.",
        ],
      },
      {
        heading: "Decide whether it fits your priorities",
        paragraphs: [
          "Compare the total installed price, expected use, warranty and any applicable incentives against your goals. For some households, backup or using more solar at home is a priority; for others, the cost may not suit their budget or expected usage. Get proposals based on your actual needs before deciding.",
        ],
      },
    ],
  },
  {
    slug: "choose-home-ev-charger",
    title: "How to Choose a Home EV Charger",
    description:
      "Learn about charger types, charging speeds, installation requirements and how solar energy can be used to charge your EV.",
    category: "EV Charging",
    categoryStyle: "border-blue-500/30 bg-blue-500/10 text-blue-800",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=960&q=70",
    date: "Aug 22, 2026",
    dateTime: "2026-08-22",
    author: "Energy Research Team",
    sections: [
      {
        heading: "Match the charger to your routine",
        paragraphs: [
          "The right home charging setup depends on your vehicle, how far you drive, how long it is parked at home and the electrical supply available at the property. Many drivers can charge overnight, so the fastest charger is not always necessary.",
          "Check the maximum AC charging rate supported by your vehicle. A charger with a higher rating will not make a vehicle charge faster than the vehicle itself allows.",
        ],
      },
      {
        heading: "Understand charging speed and installation",
        paragraphs: [
          "Home chargers vary in power and features. A qualified installer can inspect your switchboard, wiring route, parking position and supply capacity to determine what installation is suitable. The electrical work and cable distance can affect the final cost.",
        ],
        points: [
          "Vehicle charging limits and connector compatibility",
          "Available electrical capacity and possible switchboard work",
          "Cable length, mounting location and weather exposure",
          "Scheduling, energy monitoring and access controls",
        ],
      },
      {
        heading: "Consider solar-aware charging",
        paragraphs: [
          "Some chargers can adjust charging to make use of available solar generation. The result depends on your solar system, household demand, vehicle and charging schedule. Ask whether the charger can integrate with your existing equipment and how it handles changes in solar output.",
          "If you plan to charge from the grid at particular times, check your electricity plan and the charger's scheduling options. Compare the practical features you will use rather than paying extra for functions that do not fit your routine.",
        ],
      },
      {
        heading: "Get a clear installation quote",
        paragraphs: [
          "Ask for the charger model, installation scope, electrical work, warranty and any exclusions to be itemised. Confirm who will perform the electrical work and what needs to be ready before installation day. Comparing quotes on the same requirements makes the differences easier to understand.",
        ],
      },
    ],
  },
  {
    slug: "heat-pump-hot-water",
    title: "Is a Heat Pump Hot Water System Right for Your Home?",
    description:
      "Learn how heat-pump hot water systems work and what to consider when comparing capacity, placement, efficiency and installation.",
    category: "Heat Pumps",
    categoryStyle: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=960&q=70",
    date: "Aug 24, 2026",
    dateTime: "2026-08-24",
    author: "Solar Research Team",
    sections: [
      {
        heading: "How heat-pump hot water works",
        paragraphs: [
          "A heat-pump hot water system uses heat from the surrounding air to warm water, rather than relying only on a conventional electric resistance element. Its suitability depends on the household's hot water use, climate, installation location and the specific model.",
          "The system usually includes an outdoor heat-pump unit and a storage tank. Check the product's operating requirements and allow for the space, airflow and noise considerations at your property.",
        ],
      },
      {
        heading: "Choose a suitable system size",
        paragraphs: [
          "Tank capacity should reflect the number of people in your household and when you use hot water. A system that is too small may not meet peak demand, while a larger tank may take up more room and cost more. Ask the installer to explain the sizing recommendation.",
        ],
        points: [
          "Household size and typical hot water use",
          "Tank capacity and recovery time",
          "Available space, airflow, and noise",
          "Electrical and plumbing work included",
        ],
      },
      {
        heading: "Check the installation requirements",
        paragraphs: [
          "Replacing an existing hot water system can involve plumbing, electrical work and changes to the location or connections. Ask whether the existing tank will be removed, what the installation includes, and whether the proposed location meets the manufacturer's clearance and drainage requirements.",
        ],
      },
      {
        heading: "Compare products and running requirements",
        paragraphs: [
          "Compare the exact model, tank size, warranty terms, operating sound and any backup heating mode. Ask how the system is expected to operate in your local conditions and what maintenance is required. Incentives may be available, but eligibility and amounts can change; verify current requirements before relying on a discount.",
        ],
      },
    ],
  },
  {
    slug: "home-heating-cooling",
    title: "How to Choose Home Heating & Cooling",
    description:
      "Compare heating and cooling options by room size, efficiency, comfort needs, installation requirements and expected running patterns.",
    category: "Heating & Cooling",
    categoryStyle: "border-orange-500/30 bg-orange-500/10 text-orange-500",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=960&q=70",
    date: "Aug 26, 2026",
    dateTime: "2026-08-26",
    author: "Energy Research Team",
    sections: [
      {
        heading: "Start with the spaces you need to condition",
        paragraphs: [
          "The right heating and cooling setup depends on the rooms you use, your local climate, insulation, windows and how your household prefers to manage comfort. Decide whether you need to condition one room or multiple areas before comparing equipment.",
          "A system should be sized for the space and the home's conditions. Oversizing or undersizing can affect comfort and operation, so ask the installer to explain the sizing method and any assumptions about insulation or room use.",
        ],
      },
      {
        heading: "Compare system types and efficiency",
        paragraphs: [
          "Reverse-cycle air conditioning can provide both heating and cooling. Compare models using relevant energy-efficiency information and consider how the system performs in the conditions you expect to use it. Features such as timers, zoning and smart controls may help match operation to your routine.",
        ],
        points: [
          "Rooms or zones the system will serve",
          "Capacity and efficiency information for the model",
          "Indoor and outdoor unit placement and noise",
          "Controls, scheduling, and maintenance needs",
        ],
      },
      {
        heading: "Plan for installation",
        paragraphs: [
          "Installation involves more than selecting a unit. The location of indoor and outdoor units, pipe and cable routes, drainage and available electrical capacity can affect the work. A site assessment can help identify practical constraints before you accept a quote.",
        ],
      },
      {
        heading: "Compare quotes and operating costs",
        paragraphs: [
          "Compare the exact model, number of units, installation scope, warranty and exclusions. Running costs depend on the equipment, settings, local conditions and how often you use the system, so treat estimates as indicative and ask what assumptions were used.",
        ],
      },
    ],
  },
  {
    slug: "solar-inverter-guide",
    title: "How to Choose a Solar Inverter",
    description:
      "Understand inverter types, system sizing, monitoring and battery compatibility when comparing solar inverter options.",
    category: "Solar Inverters",
    categoryStyle: "border-blue-500/30 bg-blue-500/10 text-blue-900",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=960&q=70",
    date: "Aug 28, 2026",
    dateTime: "2026-08-28",
    author: "Solar Research Team",
    sections: [
      {
        heading: "What does an inverter do?",
        paragraphs: [
          "A solar inverter converts the electricity produced by panels into electricity that household appliances can use. It also helps manage the solar system and can provide monitoring information. The right choice depends on the panel array, roof layout, household needs and plans for future upgrades.",
        ],
        points: [
          "Inverter type and system design",
          "Capacity relative to the solar panel array",
          "Monitoring features and warranty support",
          "Compatibility with batteries and backup equipment",
        ],
      },
      {
        heading: "Understand inverter types",
        paragraphs: [
          "String inverters are commonly used to manage a group of panels, while microinverters or optimisers can provide panel-level electronics in some system designs. Each approach has trade-offs in cost, monitoring, roof layout suitability and maintenance. Ask why the proposed design fits your particular roof and shading conditions.",
        ],
      },
      {
        heading: "Check sizing and future compatibility",
        paragraphs: [
          "The inverter should be selected to work with the panel array and relevant electrical requirements. If you may add a battery or backup capability later, discuss that before installation: not every inverter supports every configuration, and adding equipment can involve extra cost or replacement.",
        ],
      },
      {
        heading: "Compare the proposal and support",
        paragraphs: [
          "Ask for the exact inverter model, capacity, warranty terms, monitoring features and installation inclusions. Check who provides after-sales support and what happens if the inverter needs servicing. Compare the complete system design and quote rather than choosing on brand or price alone.",
        ],
      },
    ],
  },
];
