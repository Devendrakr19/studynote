const reactData = [
  {
    title: "React Introduction",
    content: ""
  },
  {
    title: "Setting Up React",
    content: ""
  },
  {
    title: "JSX (JavaScript XML)",
    content: ""
  },
  {
    title: "React Components",
    content: ""
  },
  {
    title: "Rendering in React",
    content: ""
  },
  {
    title: "Props",
    content: ""
  },
  {
    title: "Event Handling",
    content: ""
  },
  {
    title: "State Management",
    content: ""
  },
  {
    title: "React Lifecycle",
    content: ""
  },
  {
    title: " Hooks",
    content: ""
  },
  {
    title: " Forms in React",
    content: ""
  },
  {
    title: " Context API",
    content: ""
  },
  {
    title: " Portals",
    content: ""
  },
  {
    title: " Error Boundaries",
    content: ""
  },
  {
    title: " Lazy Loading",
    content: ""
  },
  {
    title: " Suspense",
    content: ""
  },
  {
    title: " Strict Mode",
    content: ""
  },
  {
    title: " Performance Optimization",
    content: ""
  },
  {
    title: " React Internals",
    content: ""
  },
  {
    title: " Advanced React Patterns",
    content: ""
  },
];

export default reactData;


// const reactTopics = [
//   {
//     id: 1,
//     section: "React Introduction",
//     subsections: [
//       {
//         title: "1.1 What is React?",
//         topics: [
//           "What is React?",
//           "Why was React created?",
//           "Problems React solves",
//           "History of React",
//           "React philosophy",
//           "Declarative UI",
//           "Component-Based Architecture",
//           "Learn Once, Write Anywhere",
//           "SPA (Single Page Application)",
//           "React Ecosystem"
//         ]
//       }
//     ]
//   },
//   {
//     id: 2,
//     section: "React Setup",
//     subsections: [
//       {
//         title: "2.1 Creating a React Project",
//         topics: [
//           "Installing React",
//           "Using Vite",
//           "React Project Structure",
//           "Entry Point",
//           "Root Component"
//         ]
//       },
//       {
//         title: "2.2 Understanding Project Files",
//         topics: [
//           "index.html",
//           "main.jsx",
//           "App.jsx",
//           "assets",
//           "public",
//           "Components folder",
//           "Pages folder",
//           "Hooks folder",
//           "Utils folder"
//         ]
//       }
//     ]
//   },
//   {
//     id: 3,
//     section: "JSX (Deep Dive)",
//     note: "This is one of the most important topics.",
//     subsections: [
//       {
//         title: "Learn",
//         topics: [
//           "What is JSX?",
//           "Why JSX?",
//           "JSX vs HTML",
//           "JSX Syntax Rules",
//           "Expressions in JSX",
//           "JavaScript inside JSX",
//           "Comments",
//           "Attributes",
//           "Fragments",
//           "Self-closing Tags",
//           "Nested JSX",
//           "Rendering Variables",
//           "Rendering Objects",
//           "Rendering Arrays"
//         ]
//       },
//       {
//         title: "Internal Working",
//         topics: [
//           "JSX Compilation",
//           "Babel Transformation",
//           "React.createElement()",
//           "React Elements",
//           "JSX Object Structure",
//           "JSX Tree"
//         ]
//       }
//     ]
//   },
//   {
//     id: 4,
//     section: "React Components",
//     subsections: [
//       {
//         title: "Component Basics",
//         topics: [
//           "Function Components",
//           "Component Naming",
//           "Component File Structure",
//           "Component Composition",
//           "Nested Components",
//           "Parent Component",
//           "Child Component",
//           "Reusable Components"
//         ]
//       },
//       {
//         title: "Advanced",
//         topics: [
//           "Container Components",
//           "Presentational Components",
//           "Layout Components",
//           "Compound Components",
//           "Headless Components"
//         ]
//       }
//     ]
//   },
//   {
//     id: 5,
//     section: "Rendering",
//     subsections: [
//       {
//         title: "Rendering Basics",
//         topics: [
//           "Rendering UI",
//           "Rendering Variables",
//           "Rendering Objects",
//           "Rendering Arrays"
//         ]
//       },
//       {
//         title: "Conditional Rendering",
//         topics: [
//           "if",
//           "if-else",
//           "ternary",
//           "&&",
//           "||",
//           "switch",
//           "return null"
//         ]
//       },
//       {
//         title: "List Rendering",
//         topics: [
//           "map()",
//           "filter()",
//           "flatMap()",
//           "Nested Lists",
//           "Keys",
//           "Why Keys Exist",
//           "Good Keys",
//           "Bad Keys",
//           "Index as Key",
//           "Key Performance"
//         ]
//       }
//     ]
//   },
//   {
//     id: 6,
//     section: "Props",
//     note: "Everything about Props",
//     subsections: [
//       {
//         title: "Props",
//         topics: [
//           "What are Props?",
//           "Why Props?",
//           "Passing Props",
//           "Receiving Props",
//           "Default Props",
//           "Children Prop",
//           "Passing JSX",
//           "Passing Components",
//           "Passing Functions",
//           "Passing Objects",
//           "Passing Arrays",
//           "Props Immutability",
//           "Props Drilling"
//         ]
//       }
//     ]
//   },
//   {
//     id: 7,
//     section: "React Events",
//     note: "Everything",
//     subsections: [
//       {
//         title: "Event Handling",
//         topics: [
//           "Synthetic Events",
//           "Mouse Events",
//           "Keyboard Events",
//           "Focus Events",
//           "Form Events",
//           "Clipboard Events",
//           "Pointer Events",
//           "Touch Events",
//           "Event Bubbling",
//           "Event Capturing",
//           "preventDefault()",
//           "stopPropagation()"
//         ]
//       }
//     ]
//   },
//   {
//     id: 8,
//     section: "State (Deep Dive)",
//     note: "This section should be extremely deep.",
//     subsections: [
//       {
//         title: "Topics",
//         topics: [
//           "What is State?",
//           "Why State?",
//           "Local State",
//           "Component State",
//           "Updating State",
//           "Functional Updates",
//           "Lazy Initialization",
//           "Object State",
//           "Array State",
//           "Nested State",
//           "State Queue",
//           "Batching",
//           "Asynchronous Updates",
//           "Derived State"
//         ]
//       },
//       {
//         title: "Internal Working",
//         topics: [
//           "Where State is Stored",
//           "State Queue",
//           "State Updates",
//           "Re-render Process"
//         ]
//       }
//     ]
//   },
//   {
//     id: 9,
//     section: "React Lifecycle",
//     subsections: [
//       {
//         title: "Lifecycle",
//         topics: [
//           "Mounting",
//           "Updating",
//           "Unmounting",
//           "Functional Component Lifecycle",
//           "Render Phase",
//           "Commit Phase"
//         ]
//       }
//     ]
//   },
//   {
//     id: 10,
//     section: "Hooks (Complete)",
//     subsections: [
//       {
//         title: "useState",
//         topics: [
//           "Syntax",
//           "Rules",
//           "Functional Update",
//           "Lazy Initialization",
//           "Common Mistakes",
//           "Internal Working"
//         ]
//       },
//       {
//         title: "useEffect",
//         topics: [
//           "Why useEffect?",
//           "Dependency Array",
//           "Cleanup",
//           "API Calls",
//           "Timers",
//           "Event Listeners",
//           "Infinite Loops",
//           "Multiple Effects",
//           "Internal Working"
//         ]
//       },
//       {
//         title: "useRef",
//         topics: [
//           "DOM Reference",
//           "Mutable Values",
//           "Previous State",
//           "Focus Management",
//           "Timers",
//           "Internal Working"
//         ]
//       },
//       {
//         title: "useMemo",
//         topics: [
//           "Memoization",
//           "Expensive Calculations",
//           "Dependency Array",
//           "Performance",
//           "Internal Working"
//         ]
//       },
//       {
//         title: "useCallback",
//         topics: [
//           "Memoizing Functions",
//           "Preventing Re-renders",
//           "Dependency Array",
//           "Internal Working"
//         ]
//       },
//       {
//         title: "React.memo",
//         topics: [
//           "Memoization",
//           "Shallow Comparison",
//           "When to Use",
//           "Internal Working"
//         ]
//       },
//       {
//         title: "useContext",
//         topics: [
//           "Context API",
//           "Provider",
//           "Consumer",
//           "Avoiding Prop Drilling",
//           "Context Performance"
//         ]
//       },
//       {
//         title: "useReducer",
//         topics: [
//           "Reducer Function",
//           "Dispatch",
//           "Initial State",
//           "Lazy Initialization",
//           "Complex State",
//           "Internal Working"
//         ]
//       },
//       {
//         title: "Custom Hooks",
//         topics: [
//           "Rules",
//           "Reusable Logic",
//           "Hook Composition",
//           "Naming Convention"
//         ]
//       },
//       {
//         title: "Other Hooks",
//         topics: [
//           "useId",
//           "useLayoutEffect",
//           "useImperativeHandle",
//           "useDeferredValue",
//           "useTransition",
//           "useSyncExternalStore",
//           "useInsertionEffect"
//         ]
//       }
//     ]
//   },
//   {
//     id: 11,
//     section: "Forms",
//     subsections: [
//       {
//         title: "Forms",
//         topics: [
//           "Controlled Components",
//           "Uncontrolled Components",
//           "Form Validation",
//           "Multiple Inputs",
//           "Checkbox",
//           "Radio",
//           "Select",
//           "Textarea",
//           "File Upload"
//         ]
//       }
//     ]
//   },
//   {
//     id: 12,
//     section: "Portals",
//     subsections: [
//       {
//         title: "React Portal",
//         topics: [
//           "Why Portal?",
//           "Modal",
//           "Tooltip",
//           "Dropdown",
//           "Internal Working"
//         ]
//       }
//     ]
//   },
//   {
//     id: 13,
//     section: "Error Boundaries",
//     subsections: [
//       {
//         title: "Error Boundaries",
//         topics: [
//           "What are Error Boundaries?",
//           "Why Needed?",
//           "Limitations",
//           "Error Recovery"
//         ]
//       }
//     ]
//   },
//   {
//     id: 14,
//     section: "Suspense",
//     subsections: [
//       {
//         title: "Suspense",
//         topics: [
//           "What is Suspense?",
//           "Loading UI",
//           "Fallback",
//           "Suspense Boundaries",
//           "Nested Suspense"
//         ]
//       }
//     ]
//   },
//   {
//     id: 15,
//     section: "Lazy Loading",
//     subsections: [
//       {
//         title: "Lazy Loading",
//         topics: [
//           "React.lazy()",
//           "Code Splitting",
//           "Dynamic Imports",
//           "Performance Benefits"
//         ]
//       }
//     ]
//   },
//   {
//     id: 16,
//     section: "Strict Mode",
//     subsections: [
//       {
//         title: "StrictMode",
//         topics: [
//           "Double Rendering",
//           "Why React Does This",
//           "Detecting Bugs"
//         ]
//       }
//     ]
//   },
//   {
//     id: 17,
//     section: "Performance Optimization",
//     subsections: [
//       {
//         title: "Performance Optimization",
//         topics: [
//           "Re-rendering",
//           "Preventing Re-renders",
//           "Memoization",
//           "Component Splitting",
//           "Lazy Loading",
//           "Suspense",
//           "React Profiler"
//         ]
//       }
//     ]
//   },
//   {
//     id: 18,
//     section: "React Internals (Very Deep)",
//     note: "This is where you'll understand how React actually works.",
//     subsections: [
//       {
//         title: "Virtual DOM",
//         topics: [
//           "What is Virtual DOM?",
//           "Why Virtual DOM?",
//           "Structure",
//           "Creation",
//           "React Elements",
//           "Element Tree",
//           "Immutable Elements"
//         ]
//       },
//       {
//         title: "Fiber Architecture",
//         topics: [
//           "Fiber Node",
//           "Fiber Tree",
//           "Work Units",
//           "Scheduling",
//           "Priority"
//         ]
//       },
//       {
//         title: "Reconciliation",
//         topics: [
//           "Diffing Algorithm",
//           "Tree Comparison",
//           "Element Matching",
//           "Key Matching"
//         ]
//       },
//       {
//         title: "Render Phase",
//         topics: [
//           "Building Fiber Tree",
//           "Comparing Trees",
//           "Scheduling"
//         ]
//       },
//       {
//         title: "Commit Phase",
//         topics: [
//           "DOM Updates",
//           "Ref Updates",
//           "Effects Execution"
//         ]
//       },
//       {
//         title: "Scheduler",
//         topics: [
//           "Time Slicing",
//           "Interruptible Rendering",
//           "Priorities"
//         ]
//       },
//       {
//         title: "Hooks Internals",
//         topics: [
//           "Hook Storage",
//           "Hook Order",
//           "Linked List of Hooks",
//           "Why Hooks Must Be Called in Order"
//         ]
//       },
//       {
//         title: "State Internals",
//         topics: [
//           "State Queue",
//           "Update Queue",
//           "Object.is Comparison"
//         ]
//       },
//       {
//         title: "Effect Internals",
//         topics: [
//           "Dependency Comparison",
//           "Cleanup Queue",
//           "Effect Execution"
//         ]
//       },
//       {
//         title: "Event System",
//         topics: [
//           "Synthetic Events",
//           "Event Delegation"
//         ]
//       }
//     ]
//   },
//   {
//     id: 19,
//     section: "Advanced React Patterns",
//     subsections: [
//       {
//         title: "Patterns",
//         topics: [
//           "Compound Components",
//           "Render Props",
//           "Higher Order Components (HOC)",
//           "Provider Pattern",
//           "State Reducer Pattern",
//           "Controlled Components Pattern",
//           "Uncontrolled Components Pattern",
//           "Context Composition",
//           "Slot Pattern"
//         ]
//       }
//     ]
//   },

// ];

// export default reactTopics;