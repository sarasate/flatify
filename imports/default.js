import { document } from "./document";
import { court } from "./court";
import { negotiation } from "./negotiation";

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
        _id: "0",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "number",
        label: "Cost",
        modifier: {
          target: "base",
          operator: "+",
          expression: 100
        },
        defaultValue: 0
      },
      {
        _id: "1",
        value: 1,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Economic Impact",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "+",
              expression: 10
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "+",
              expression: 20
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "+",
              expression: 30
            }
          }
        ],
        defaultValue: 1
      },
      {
        _id: "2",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Risk of liability",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "+",
              expression: 5
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "+",
              expression: 10
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "+",
              expression: 15
            }
          }
        ]
      },
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
              expression: 300
            }
          }
        ]
      },
      {
        _id: "4",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "number",
        label: "Cost",
        modifier: {
          target: "base",
          operator: "+",
          expression: 100
        },
        defaultValue: 0
      },

      {
        _id: "5",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "range",
        label: "Complexity",
        options: [
          {
            value: "low",
            modifier: {
              target: "base",
              operator: "+",
              expression: 10
            }
          },
          {
            value: "medium",
            modifier: {
              target: "base",
              operator: "+",
              expression: 20
            }
          },
          {
            value: "high",
            modifier: {
              target: "base",
              operator: "+",
              expression: 30
            }
          }
        ],
        defaultValue: 1
      }
    ]
  }
];

export const categories = [...standard, ...document, ...court, ...negotiation];
