import { document } from "./document";
import { court } from "./court";
import { negotiation } from "./negotiation";
import { weight } from "./weight";

export const settings = {
  type: "",
  currency: "eur",
  title: "M",
  fullName: "Pierre Portal",
  contractBase: 300,
  addOns: {
    clientCalls: 20,
    copies: 10,
    courtDay: 100, // * n
    contractPage: 10, // * n
    complexityMultiplier: 0.3 // + n (* cost),
  }
};

export const standard = [
  {
    label: "General",
    activated: true,
    noSwitch: true,
    questions: [
      {
        _id: "3",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Difficulty of clarification of facts",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "+",
              expression: 0
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "+",
              expression: 250
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "+",
              expression: 500
            }
          }
        ]
      },
      {
        _id: "4",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Urgency",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "+",
              expression: 0
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "+",
              expression: 100
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "+",
              expression: 250
            }
          }
        ],
        defaultValue: 1
      }
    ]
  }
];

export const categories = [
  ...standard,
  ...document,
  ...court,
  ...negotiation,
  ...weight
];
