export const negotiation = [
  {
    label: "Negotiation",
    activated: false,
    questions: [
      {
        _id: "n1",
        value: 1,
        selectedValue: null,
        optional: true,
        type: "number",
        label: "Number of meetings required (estimate)",
        max: 999999999999999,
        modifier: {
          target: "base",
          operator: "+",
          expression: 150
        }
      },
      {
        _id: "n2",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "checkbox",
        label: "More than one other party involved",
        options: [
          {
            value: "no",
            modifier: {
              target: "base",
              operator: "+",
              expression: 0
            }
          },
          {
            value: "yes",
            modifier: {
              target: "base",
              operator: "+",
              expression: 300
            }
          }
        ],
        defaultValue: 1
      },
      {
        _id: "n3",
        value: 0,
        selectedValue: null,
        optional: true,
        type: "checkbox",
        label: "Other party represented by lawyer",
        options: [
          {
            value: "no",
            modifier: {
              target: "base",
              operator: "+",
              expression: 0
            }
          },
          {
            value: "yes",
            modifier: {
              target: "base",
              operator: "+",
              expression: 300
            }
          }
        ],
        defaultValue: 1
      }
    ]
  }
];
