const reactData = [
  {
    title: "React Introduction",
    content: `
      <h1>1. What is React?</h1>

      <p>
        <strong>React</strong> is a JavaScript library used to build
        user interfaces (UI), especially interactive web applications. It was originally developed at Facebook and is now maintained
        by Meta along with the open-source community.
      </p>

      <p>
        React allows developers to divide a large user interface into
        small, reusable pieces called <strong>components</strong>.
        These components can be combined to build complete applications.
      </p> 

      <p>
        React is mainly concerned with the <strong>UI layer</strong>
        of an application.
      </p>

      <p>
        For example, an e-commerce application may contain:
      </p>

      <ul>
        <li>Navbar</li>
        <li>Search bar</li>
        <li>Product cards</li>
        <li>Shopping cart</li>
        <li>Login form</li>
        <li>Product details</li>
        <li>Footer</li>
      </ul>

      <p>
        React allows us to build each part as a separate component
        and then combine those components to create the complete UI.
      </p>

      <h3>Example</h3>

      <pre><code>
App
 ├── Navbar
 ├── SearchBar
 ├── ProductList
 │    ├── ProductCard
 │    ├── ProductCard
 │    └── ProductCard
 └── Footer
      </code></pre>

      <p>
        Each component can be created independently and reused
        wherever it is required.
      </p>

      <h3>React is a Library</h3>

      <p>
        React is officially a <strong>library</strong>, not a complete
        framework.
      </p>

      <p>
        React mainly focuses on building the user interface.
        Additional requirements can be handled using other libraries
        and tools from the React ecosystem.
      </p>      

      <h2>2. Why Was React Created?</h2>

      <p>
        React was created to solve problems that developers faced
        when building large and highly interactive user interfaces.
      </p>

      <p>
        Facebook had an application with many parts of the interface
        changing frequently.
      </p>

      <p>For example:</p>

      <ul>
        <li>New messages could arrive.</li>
        <li>Notifications could change.</li>
        <li>Posts could be updated.</li>
        <li>Likes could change.</li>
        <li>Comments could be added.</li>
        <li>User information could change.</li>
      </ul>

      <p>
        Managing all these UI changes manually could become difficult
        as an application became larger.
      </p>

      <h3>The Basic Problem</h3>

      <p>
        Imagine that a page contains 100 different elements.
        One small piece of data changes.
      </p>

      <p>
        The developer needs to make sure that the correct part of
        the UI reflects that change without accidentally breaking
        other parts of the application.
      </p>

      <p>
        React provides a structured programming model where the UI
        is described based on the current state of the application.
      </p>

      <pre><code>
Data / State
     ↓
React
     ↓
UI
      </code></pre>

      <p>
        When the data changes, React determines the UI updates that
        are needed.
      </p>

      <div class="info-box">
        <strong>Main idea:</strong>
        <p>
          React was created to make complex, interactive UIs easier
          to build and maintain.
        </p>
      </div>

      

      <h2>3. Problems React Solves</h2>

      <p>
        React provides a programming model that helps solve several
        common problems when building complex interfaces.
      </p>

      <h3>1. Complex UI Updates</h3>

      <p>
        Modern applications constantly change.
        React provides a structured way to represent UI based on data.
      </p>

      <h3>2. Reusable UI</h3>

      <p>
        React allows us to create reusable components.
      </p>

      <pre><code>
ProductCard
      ↓
Product 1
Product 2
Product 3
Product 4
      </code></pre>

      <p>
        Instead of writing the same UI code repeatedly, we can create
        one component and use it multiple times.
      </p>

      <h3>3. Managing Large Applications</h3>

      <p>
        Large applications can contain hundreds or thousands of UI
        elements.
      </p>

      <p>
        React allows developers to divide the application into
        smaller components.
      </p>

      <h3>4. Keeping UI and Data in Sync</h3>

      <p>
        The UI normally needs to reflect the application's current
        data.
      </p>

      <p>
        React uses a state-driven approach where the rendered UI
        corresponds to the current state.
      </p>

      <h3>5. Maintainability</h3>

      <p>
        Breaking an application into components makes the codebase
        easier to understand, modify, reuse, and test.
      </p>

      <div class="info-box">
        <strong>In simple words:</strong>
        <p>
          React helps us organize complex UI into reusable pieces
          and provides a predictable way to update that UI.
        </p>
      </div>

      

      <h2>4. History of React</h2>

      <p>
        React was developed inside Facebook to help solve problems
        related to complex and frequently changing user interfaces.
      </p>

      <h3>Important Timeline</h3>

      <ul>
        <li>
          <strong>2011:</strong>
          React's early implementation was developed inside Facebook.
        </li>

        <li>
          <strong>2012:</strong>
          React was being used in parts of Facebook's products.
        </li>

        <li>
          <strong>2013:</strong>
          React was open-sourced to the public.
        </li>

        <li>
          <strong>2015:</strong>
          React Native was introduced, allowing React concepts to
          be used for native mobile applications.
        </li>

        <li>
          <strong>2017:</strong>
          React 16 introduced the new Fiber architecture.
        </li>

        <li>
          <strong>2022:</strong>
          React 18 introduced important features related to
          concurrent rendering and automatic batching.
        </li>

        <li>
          <strong>2024:</strong>
          React 19 introduced features including Actions,
          <code>use()</code>, and other improvements.
        </li>
      </ul>

      <h3>Why Is React's History Important?</h3>

      <p>
        Understanding the history helps explain why React has
        concepts such as components, reconciliation, Fiber,
        and concurrent rendering.
      </p>

      <p>
        React has continuously evolved to handle increasingly
        complex user interfaces.
      </p>

      

      <h2>5. React Philosophy</h2>

      <p>
        React follows several important ideas that influence how
        React applications are designed.
      </p>

      <h3>Declarative UI</h3>

      <p>
        React encourages developers to describe
        <strong>what the UI should look like</strong>
        instead of manually describing every DOM operation.
      </p>

      <h3>Component-Based Architecture</h3>

      <p>
        Applications are divided into small, reusable components.
      </p>

      <h3>One-Way Data Flow</h3>

      <p>
        Data normally flows from parent components to child components
        through props.
      </p>

      <pre><code>
Parent
   ↓
Props
   ↓
Child
      </code></pre>

      <h3>Composition</h3>

      <p>
        React encourages combining smaller components to create
        larger and more complex interfaces.
      </p>

      <h3>UI Based on State</h3>

      <p>
        A useful mental model for React is:
      </p>

      <pre><code>
UI = f(state)
      </code></pre>

      <p>
        This means that the UI can be thought of as a result of
        the current state of the application.
      </p>

      <div class="info-box">
        <strong>React's basic idea:</strong>
        <p>
          Describe the UI based on the current data and let React
          handle the necessary rendering work.
        </p>
      </div>

      

      <h2>6. Declarative UI</h2>

      <p>
        <strong>Declarative UI</strong> means that we describe
        what the UI should look like rather than manually describing
        every step required to update it.
      </p>

      <h3>Imperative Approach</h3>

      <p>
        In an imperative approach, we tell the program exactly
        what operations to perform.
      </p>

      <pre><code>
Find the element
      ↓
Change its text
      ↓
Change its class
      ↓
Update the element
      </code></pre>

      <h3>Declarative Approach</h3>

      <p>
        With React, we describe what should be rendered for the
        current state.
      </p>

      <pre><code>
State
  ↓
React
  ↓
UI
      </code></pre>

      <h3>Example</h3>

      <pre><code>
function Counter() {
  const [count, setCount] = useState(0);

  return &lt;h1&gt;Count: {count}&lt;/h1&gt;;
}
      </code></pre>

      <p>
        We don't manually find the <code>&lt;h1&gt;</code> and change
        its text whenever the count changes.
      </p>

      <p>
        Instead, we describe that the heading should display the
        current value of <code>count</code>.
      </p>

      <div class="info-box">
        <strong>Easy way to remember:</strong>
        <p>
          Imperative = Tell me how to do it.
        </p>
        <p>
          Declarative = Tell me what you want.
        </p>
      </div>

      

      <h2>7. Component-Based Architecture</h2>

      <p>
        React applications are built using
        <strong>components</strong>.
      </p>

      <p>
        A component is a reusable piece of UI that can contain
        its own structure, behavior, and logic.
      </p>

      <h3>Example</h3>

      <pre><code>
App
│
├── Navbar
├── Sidebar
├── Dashboard
│   ├── UserCard
│   ├── Statistics
│   └── Chart
└── Footer
      </code></pre>

      <p>
        Instead of creating one huge component, we divide the
        application into smaller components.
      </p>

      <h3>Benefits</h3>

      <ul>
        <li>Reusable UI</li>
        <li>Easier maintenance</li>
        <li>Better organization</li>
        <li>Easier debugging</li>
        <li>Easier testing</li>
        <li>Better teamwork</li>
      </ul>

      <h3>Example Component</h3>

      <pre><code>
function Button() {
  return &lt;button&gt;Click Me&lt;/button&gt;;
}
      </code></pre>

      <p>
        This component can be reused wherever the same type of
        button is required.
      </p>

      <div class="info-box">
        <strong>Think of components like LEGO blocks.</strong>
        <p>
          Small blocks can be combined to create a larger structure.
          React components work in a similar way.
        </p>
      </div>

      

      <h2>8. Learn Once, Write Anywhere</h2>

      <p>
        React promotes the idea of
        <strong>"Learn Once, Write Anywhere."</strong>
      </p>

      <p>
        The core React programming model can be used across
        different environments with different rendering technologies.
      </p>

      <h3>Web</h3>

      <p>
        React can be used to build web applications.
        React DOM connects React with the browser environment.
      </p>

      <h3>Mobile</h3>

      <p>
        React Native uses React concepts to build native
        mobile applications.
      </p>

      <h3>The Important Idea</h3>

      <p>
        You learn concepts such as:
      </p>

      <ul>
        <li>Components</li>
        <li>Props</li>
        <li>State</li>
        <li>Hooks</li>
        <li>Composition</li>
      </ul>

      <p>
        These React concepts can then be applied in different
        environments.
      </p>

      <div class="info-box">
        <strong>Remember:</strong>
        <p>
          The idea is not that exactly the same UI code works
          everywhere. The important point is that the React
          programming model can be used across platforms.
        </p>
      </div>

      

      <h2>9. SPA (Single Page Application)</h2>

      <p>
        A <strong>Single Page Application (SPA)</strong> is a web
        application where the browser initially loads an application
        page and JavaScript can update the displayed content without
        requiring a full document reload for every navigation.
      </p>

      <h3>Traditional Website</h3>

      <pre><code>
User clicks About
      ↓
Browser requests another document
      ↓
Server sends the document
      ↓
Browser loads the new page
      </code></pre>

      <h3>SPA</h3>

      <pre><code>
User clicks About
      ↓
Application handles navigation
      ↓
UI changes
      ↓
The document does not need to fully reload
      </code></pre>

      <h3>Advantages</h3>

      <ul>
        <li>Smooth navigation</li>
        <li>Interactive user experience</li>
        <li>Less full-page reloading</li>
        <li>Useful for dashboards and application-style websites</li>
      </ul>

      <h3>Important Clarification</h3>

      <p>
        React itself is <strong>not an SPA</strong>.
      </p>

      <p>
        React is a UI library that can be used to build SPAs.
      </p>

      <div class="info-box">
        <strong>Remember:</strong>
        <p>
          React ≠ SPA.
        </p>
        <p>
          React can be used to build an SPA.
        </p>
      </div>

      

      <h2>10. React Ecosystem</h2>

      <p>
        React mainly focuses on building user interfaces.
        Around React there is a large ecosystem of tools and
        libraries that provide additional functionality.
      </p>

      <h3>React DOM</h3>

      <p>
        React DOM provides the APIs that allow React applications
        to render into the browser DOM.
      </p>

      <h3>React Native</h3>

      <p>
        React Native allows developers to use React concepts
        to build native mobile applications.
      </p>

      <h3>Routing</h3>

      <p>
        Routing libraries can be used to manage navigation,
        URLs, nested routes, and route-related UI.
      </p>

      <h3>State Management</h3>

      <p>
        React provides local state and Context.
        Larger applications can also use external state-management
        solutions when necessary.
      </p>

      <h3>Developer Tools</h3>

      <p>
        React Developer Tools can help developers inspect
        components, props, state, and performance information.
      </p>

      <h3>Testing</h3>

      <p>
        React applications can be tested using tools designed
        for component and user-interface testing.
      </p>

      <div class="info-box">
        <strong>Important:</strong>
        <p>
          React does not try to provide every feature inside
          the core library. The ecosystem allows developers to
          choose additional tools based on the application's needs.
        </p>
      </div>
    `,
  },
  {
    title: "Setting Up React",

    content: `
    <h1>Setting Up React</h1>

    <p>
      Before we start writing React components, we need a React project
      to work with. In this chapter, we will create a project and
      understand the important files and folders inside it.
    </p>

    <p>
      We will use <strong>Vite</strong> because it gives us a simple
      and fast development setup for React.
    </p>

    <h2>1. What is Node.js?</h2>

    <p>
      <strong>Node.js</strong> allows JavaScript to run outside the
      browser.
    </p>

    <p>
      Normally, we think of JavaScript as something that runs inside
      Chrome or another browser. Node.js lets us run JavaScript on
      our computer as well.
    </p>

    <p>
      When working with React, we use Node.js mainly for development
      tools and packages.
    </p>

    <p>
      For example, when we run: <pre><code>npm run dev</code></pre>
    </p>

    <p>
      Node.js is involved in running the development tools that start
      our React application.
    </p>

    <div class="info-box">
      <strong>Remember:</strong>
      <p>
        Node.js is not React. It is the environment that lets
        JavaScript tools run on your computer.
      </p>
    </div>

    <h2>2. What is npm?</h2>

    <p>
      <strong>npm</strong> stands for <strong>Node Package Manager</strong>.
      It comes with Node.js and is used to install and manage packages.
    </p>

    <p>
      React projects use many packages. Instead of downloading each
      package manually, npm can install them for us.
    </p>

    <p>
      For example:
    </p>

    <pre><code>npm install react</code></pre>

    <p>
      npm downloads React and stores it in the project's dependencies.
    </p>

    <p>
      We also use npm to run commands defined by the project. <pre><code>npm run dev</code></pre>
    </p>

    <div class="info-box">
      <strong>Simple way to remember:</strong>
      <p>
        Node.js → runs JavaScript tools.
      </p>
      <p>
        npm → installs and manages packages.
      </p>
    </div>

    <h2>3. Creating a React Project</h2>

    <p>
      We can create a React project using Vite.
    </p>

    <p>
      Open your terminal and run: <pre><code>npm create vite@latest</code></pre>
    </p>

    <p>
      Vite will ask you a few questions, such as the project name
      and the framework.
    </p>

    <p>
      Choose:     <pre><code>
Framework: React
Variant: JavaScript
    </code></pre>
    </p>

    <p>
      You can also create the project directly with: <pre><code>npm create vite@latest my-react-app -- --template react</code></pre>
    </p>

    <p>
      Then move into the project:   <pre><code>cd my-react-app</code></pre>
    </p>

    <p>
      Install the required packages: <pre><code>npm install</code></pre>
    </p>

    <p>
      Finally, start the development server: <pre><code>npm run dev</code></pre>
    </p>

    <p>
      Vite will show a local address in the terminal. Open that
      address in your browser and you will see your React application.
    </p>

    <h2>4. What is Vite?</h2>

    <p>
      <strong>Vite</strong> is a development tool used to create and
      run modern web projects.
    </p>

    <p>
      It handles things such as starting the development server,
      processing your source files, and creating the production build.
    </p>

    <p>
      You can think of Vite as the tool that helps us work with
      our React project during development.
    </p>

    <p>
      React itself does not create the development server.
      Vite and other tools handle that part.
    </p>

    <div class="info-box">
      <strong>React vs Vite:</strong>
      <p>
        React → helps us build the UI.
      </p>
      <p>
        Vite → helps us develop and build the project.
      </p>
    </div>

    <h2>5. React Project Structure</h2>

    <p>
      After creating a Vite React project, you will see a structure
      similar to this:
    </p>
<div class="code">
<pre> 
my-react-app/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
</pre>
</div>

<p>
      You don't need to memorize every file right now. Let's look
      at the important ones one by one.
    </p>

    <h2>6. package.json</h2>

    <p>
      <strong>package.json</strong> contains information about the
      project and the packages it uses.
    </p>

    <p>
      A simple example looks like this:
    </p>
<div class="code">
    <pre> 
{
  "name": "my-react-app",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "...",
    "react-dom": "..."
  }
}
    </pre>
    </div>

    <p>
      The <strong>scripts</strong> section contains commands that
      we can run with npm.
    </p>

    <pre><code>
npm run dev
npm run build
    </code></pre>

    <p>
      The <strong>dependencies</strong> section lists packages
      required by the application.
    </p>

    <div class="info-box">
      <strong>Think of package.json as:</strong>
      <p>
        The project's main information and dependency list.
      </p>
    </div>

    <h2>7. package-lock.json</h2>

    <p>
      When npm installs packages, it creates
      <strong>package-lock.json</strong>.
    </p>

    <p>
      This file records the exact versions of installed packages
      and their dependencies.
    </p>

    <p>
      This is useful because two developers working on the same
      project can install the same dependency versions.
    </p>

    <p>
      You normally should not edit this file manually.
    </p>

    <div class="info-box">
      <strong>Simple difference:</strong>
      <p>
        package.json → what packages the project needs.
      </p>
      <p>
        package-lock.json → exact package versions npm installed.
      </p>
    </div>

    <h2>8. node_modules</h2>

    <p>
      The <strong>node_modules</strong> folder contains the packages
      installed for the project.
    </p>

    <p>
      After running:
    </p>

    <pre><code>npm install</code></pre>

    <p>
      npm downloads the required packages and places them inside
      this folder.
    </p>

    <p>
      You will usually see many folders inside node_modules because
      your packages can also depend on other packages.
    </p>

    <p>
      You normally do not edit anything inside node_modules.
    </p>

    <p>
      It is also normally excluded from Git using
      <strong>.gitignore</strong>.
    </p>

    <h2>9. index.html</h2>

    <p>
      <strong>index.html</strong> is the main HTML document loaded
      by the browser.
    </p>

    <p>
      In a Vite React project, you will usually find a root element
      similar to:
    </p>

    <pre><code>
&lt;div id="root"&gt;&lt;/div&gt;
    </code></pre>

    <p>
      React uses this element as the place where the application
      will be rendered.
    </p>

    <p>
      The connection between this <code>root</code> element and
      React is made in <strong>main.jsx</strong>.
    </p>

    <h2>10. main.jsx</h2>

    <p>
      <strong>main.jsx</strong> is the entry point of a typical
      Vite React application.
    </p>

    <p>
      A basic version looks like this:
    </p>
    <div class="code">
      <pre> 
      import { StrictMode } from 'react'
      import { createRoot } from 'react-dom/client'
      import App from './App.jsx'
        
      createRoot(document.getElementById('root')).render(
        &lt;StrictMode&gt;
          &lt;App /&gt;
        &lt;/StrictMode&gt;
      )
      </pre>
  </div>

    <p>
      Let's focus on the important part:
    </p>
<div class="code">
 
createRoot(document.getElementById('root'))
 
</div>
    <p>
      This finds the <code>root</code> element from index.html and
      creates a React root for the application.
    </p>

    <p>
      Then:
    </p>

   <div class="code">
.render(&lt;App /&gt;)
</div>

    <p>
      tells React to render the <code>App</code> component into that
      root.
    </p>

    <p>
      So the basic flow is:
    </p>

   <div class="code">
   <pre>
index.html
   ↓
&lt;div id="root"&gt;
   ↓
main.jsx
   ↓
createRoot()
   ↓
  App
   ↓
 React UI
</pre>
  </div>

    <h2>11. App.jsx</h2>

    <p>
      <strong>App.jsx</strong> usually contains the main component
      of the application when starting a new project.
    </p>

    <p>
      A simple App component can look like this:
    </p>
   <div class="code">
    <pre> 
function App() {
  return (
    &lt;h1&gt;Hello React&lt;/h1&gt;
  );
}

export default App;
     </pre>
     </div>

    <p>
      When <code>&lt;App /&gt;</code> is rendered in main.jsx,
      React runs this component and displays its returned UI.
    </p>

    <p>
      As the project grows, App.jsx does not have to contain
      everything. We can create separate components and use them
      inside App.
    </p>

    <h2>12. public Folder</h2>

    <p>
      The <strong>public</strong> folder is used for files that
      should be served as static assets.
    </p>

    <p>
      For example, you might place a file here:
    </p>
<div class="code">
<pre> 
public/
└── logo.png
</pre>
</div>

    <p>
      Files in this folder can be referenced using a path from
      the site's root.
    </p>

    <pre><code>
/logo.png
    </code></pre>

    <p>
      For most assets that are part of your application's source
      code, the <strong>src</strong> folder is usually the better
      place.
    </p>

    <h2>13. src Folder</h2>

    <p>
      The <strong>src</strong> folder contains the source code
      of your React application.
    </p>

    <p>
      This is where you will spend most of your time.
    </p>

    <p>
      A project might eventually look like:
    </p>
<div class="code">
    <pre> 
src/
│
├── components/
├── pages/
├── hooks/
├── services/
├── utils/
├── assets/
├── App.jsx
└── main.jsx
</pre>
</div>

    <p>
      These folders are not required by React. They are simply a
      way to organize a larger application.
    </p>

    <h2>14. Running the Development Server</h2>

    <p>
      During development, we normally run:
    </p>

    <pre><code>npm run dev</code></pre>

    <p>
      This starts Vite's development server.
    </p>

    <p>
      The terminal will show a local address, for example:
    </p>

 <div class="code">
Local: http://localhost:5173/
</div>

    <p>
      Open that address in your browser to see the application.
    </p>

    <p>
      When you change your source code and save the file, Vite can
      update the page during development without you manually
      restarting the server.
    </p>

    <h2>15. Production Build</h2>

    <p>
      The development server is meant for development.
      Before deploying an application, we create a production build.
    </p>

    <p>
      Run:
    </p>

     <div class="code">npm run build</div>

    <p>
      Vite processes the project and creates files that can be
      deployed to a hosting service.
    </p>

    <p>
      The output is normally placed inside a <strong>dist</strong>
      folder.
    </p>
<div class="code">
    <pre> 
npm run build
      ↓
Vite builds the application
      ↓
dist/
      ↓
Deploy dist
</pre>
</div>

    <h2>16. Development vs Production</h2>

    <p>
      Development and production builds have different purposes.
    </p>

    <table style="width:100%; border-collapse:collapse; margin-top:20px; text-align:center;">
  <thead>
    <tr>
      <th style="border:1px solid #ccc; padding:12px;">Development</th>
      <th style="border:1px solid #ccc; padding:12px;">Production</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style="border:1px solid #ccc; padding:12px;">
        Used while writing code
      </td>
      <td style="border:1px solid #ccc; padding:12px;">
        Used for deployment
      </td>
    </tr>

    <tr>
      <td style="border:1px solid #ccc; padding:12px;">
        npm run dev
      </td>
      <td style="border:1px solid #ccc; padding:12px;">
        npm run build
      </td>
    </tr>

    <tr>
      <td style="border:1px solid #ccc; padding:12px;">
        Helpful development features
      </td>
      <td style="border:1px solid #ccc; padding:12px;">
        Optimized output
      </td>
    </tr>

    <tr>
      <td style="border:1px solid #ccc; padding:12px;">
        Runs a development server
      </td>
      <td style="border:1px solid #ccc; padding:12px;">
        Creates deployable files
      </td>
    </tr>
  </tbody>
</table>

    <h2 style="margin-top:15px;">17. Complete Flow of a React Project</h2>

    <p>
      Now let's connect everything we have learned.
    </p>
<div class="code">

    <pre>
You create the project
        ↓
Vite creates the project structure
        ↓
npm install installs dependencies
        ↓
index.html loads in the browser
        ↓
main.jsx starts React
        ↓
createRoot() creates the React root
        ↓
App.jsx is rendered
        ↓
App contains other components
        ↓
React builds the UI
    </pre>
  </div>


    <h2>Common Commands</h2>
<div class="code">
    <pre> 
Create project:
npm create vite@latest

Install packages:
npm install

Start development:
npm run dev

Create production build:
npm run build

Preview production build:
npm run preview
     </pre>
     </div>

  `,
  },
  {
    title: "JSX (JavaScript XML)",

    content: `
    <h1>JSX (JavaScript XML)</h1>

    <p>
      JSX is one of the first things you need to understand properly
      when learning React.
    </p>

    <p>
      At first, JSX can look like HTML written inside JavaScript.
      But JSX is not HTML. It is a syntax that lets us describe
      the UI directly inside our JavaScript code.
    </p>

    <div class="info-box">
      <strong>Simple idea:</strong>
      <p>
        JSX lets us write UI using a syntax that looks similar to HTML
        while still working with JavaScript and React.
      </p>
    </div>

    <h2>1. What is JSX?</h2>

    <p>
      <strong>JSX</strong> stands for
      <strong>JavaScript XML</strong>.
    </p>

    <p>
      JSX allows us to write markup-like syntax inside JavaScript.
      React then uses the result to describe what should appear on
      the screen.
    </p>

    <div class="code">
      <pre><code>
function App() {
  return (
    &lt;h1&gt;Hello React&lt;/h1&gt;
  );
}
      </code></pre>
    </div>

    <p>
      The <code>&lt;h1&gt;</code> looks like HTML, but it is being
      written inside a JavaScript file.
    </p>

    <h3>Without JSX</h3>

    <p>
      The same UI can be described using React's JavaScript APIs:
    </p>

    <div class="code"> 
createElement(type, props, children)
</div>

<div class="code">
<pre><code>
import { createElement } from "react";

function App() {
  return createElement(
    "div",
    null,
    createElement("h1", null, "Hello Dev"),
    createElement("p", null, "Welcome to React")
    );
    }
    
    export default App;
    </code></pre>
    </div>
    <p>means : "Create an h1 element, don't give it any props, and put "Hello Dev" inside it."</p>

    <p>
      JSX gives us a much easier way to write the same UI.
    </p>

    <h2>2. Why JSX?</h2>

    <p>
      We could build React applications without JSX, so JSX is not
      technically required.
    </p>

    <p>
      The main reason developers use JSX is that it makes UI code
      easier to read and write.
    </p>

    <div class="code">
      <pre><code>
function App() {
  const name = "Dev";

  return (
    &lt;div&gt;
      &lt;h1&gt;Hello {name}&lt;/h1&gt;
      &lt;p&gt;Welcome to React&lt;/p&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      Looking at this code, we can easily understand the structure
      of the UI.
    </p>

    <p>
      JSX also allows JavaScript values and expressions to be placed
      directly inside the UI.
    </p>

    <div class="info-box">
      <strong>Important:</strong>
      <p>
        JSX is mainly about making UI code easier to understand.
        React does not require JSX to work.
      </p>
    </div>

    <h2>3. JSX vs HTML</h2>

    <p>
      JSX looks very similar to HTML, but there are some important
      differences.
    </p>

    <h3>class vs className</h3>

    <p>
      In HTML, we normally write:
    </p>

    <div class="code">
      <pre><code>
&lt;div class="box"&gt;Hello&lt;/div&gt;
      </code></pre>
    </div>

    <p>
      In JSX, we write:
    </p>

    <div class="code">
      <pre><code>
&lt;div className="box"&gt;Hello&lt;/div&gt;
      </code></pre>
    </div>

    <p>
      JSX uses <code>className</code> because <code>class</code>
      has a different meaning in JavaScript.
    </p>

    <h3>for vs htmlFor</h3>

    <p>
      HTML uses <code>for</code> for a label:
    </p>

    <div class="code">
      <pre><code>
&lt;label for="email"&gt;Email&lt;/label&gt;
      </code></pre>
    </div>

    <p>
      JSX uses:
    </p>

    <div class="code">
      <pre><code>
&lt;label htmlFor="email"&gt;Email&lt;/label&gt;
      </code></pre>
    </div>

    <h3>JavaScript expressions</h3>

    <p>
      JSX allows JavaScript expressions inside curly braces.
    </p>

    <div class="code">
      <pre><code>
const name = "Dev";

return &lt;h1&gt;Hello {name}&lt;/h1&gt;;
      </code></pre>
    </div>

    <h3>Self-closing elements</h3>

    <p>
      In JSX, elements without children must be self-closed.
    </p>

    <div class="code">
      <pre><code>
&lt;img src="image.jpg" /&gt;
&lt;input type="text" /&gt;
&lt;Component /&gt;
      </code></pre>
    </div>

    <h2>4. JSX Syntax Rules</h2>

    <p>
      JSX has some rules that are different from normal HTML.
    </p>

    <h3>Rule 1: Return one parent element</h3>

    <p>
      A component cannot normally return two separate elements
      next to each other.
    </p>

    <p>Incorrect:</p>

    <div class="code">
      <pre><code>
return (
  &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;p&gt;Welcome&lt;/p&gt;
);
      </code></pre>
    </div>

    <p>
      We can wrap them inside a parent:
    </p>

    <div class="code">
      <pre><code>
return (
  &lt;div&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
    &lt;p&gt;Welcome&lt;/p&gt;
  &lt;/div&gt;
);
      </code></pre>
    </div>

    <p>
      Or we can use a Fragment:
    </p>

    <div class="code">
      <pre><code>
return (
  &lt;&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
    &lt;p&gt;Welcome&lt;/p&gt;
  &lt;/&gt;
);
      </code></pre>
    </div>

    <h3>Rule 2: Close every element</h3>

    <p>
      JSX expects elements to be properly closed.
    </p>

    <div class="code">
      <pre><code>
&lt;p&gt;Hello&lt;/p&gt;
&lt;input /&gt;
      </code></pre>
    </div>

    <h3>Rule 3: Use camelCase for many attributes</h3>

    <p>
      Many JSX attributes use camelCase.
    </p>

    <div class="code">
      <pre><code>
className
onClick
onChange
tabIndex
htmlFor
      </code></pre>
    </div>

    <h3>Rule 4: JavaScript expressions use curly braces</h3>

    <div class="code">
      <pre><code>
const age = 28;

return &lt;p&gt;Age: {age}&lt;/p&gt;;
      </code></pre>
    </div>

    <h2>5. Expressions in JSX</h2>

    <p>
      JSX allows JavaScript expressions inside
      <code>{ }</code>.
    </p>

    <p>
      An expression is something that produces a value.
    </p>

    <div class="code">
      <pre><code>
const name = "Dev";
const age = 28;

return (
  &lt;div&gt;
    &lt;p&gt;Name: {name}&lt;/p&gt;
    &lt;p&gt;Age: {age}&lt;/p&gt;
    &lt;p&gt;Next year: {age + 1}&lt;/p&gt;
  &lt;/div&gt;
);
      </code></pre>
    </div>

    <p>
      You can also use expressions such as:
    </p>

    <div class="code">
      <pre><code>
{2 + 3}

{name.toUpperCase()}

{isLoggedIn ? "Logout" : "Login"}

{user.name}
      </code></pre>
    </div>

    <p>
      But you cannot place normal statements directly inside JSX.
    </p>

    <p>
      For example, an <code>if</code> statement cannot be placed
      directly inside curly braces.
    </p>

    <h2>6. JavaScript Inside JSX</h2>

    <p>
      JSX can work together with normal JavaScript.
    </p>

    <div class="code">
      <pre><code>
function App() {
  const name = "Dev";
  const age = 28;
  const isLoggedIn = true;

  return (
    &lt;div&gt;
      &lt;h1&gt;Hello {name}&lt;/h1&gt;
      &lt;p&gt;Age: {age}&lt;/p&gt;
      &lt;p&gt;
        {isLoggedIn ? "Welcome back" : "Please login"}
      &lt;/p&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      Here, <code>name</code>, <code>age</code>, and
      <code>isLoggedIn</code> are normal JavaScript variables.
    </p>

    <p>
      JSX simply gives us a place to use their values in the UI.
    </p>

    <h2>7. Comments in JSX</h2>

    <p>
      JSX comments are slightly different from normal JavaScript
      comments when they are placed inside returned markup.
    </p>

    <p>
      Outside JSX, normal JavaScript comments work:
    </p>

    <div class="code">
      <pre><code>
// This is a JavaScript comment
const name = "Dev";
      </code></pre>
    </div>

    <p>
      Inside JSX, use curly braces with a JavaScript block comment:
    </p>

    <div class="code">
      <pre><code>
return (
  &lt;div&gt;
    {/* This is a JSX comment */}
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/div&gt;
);
      </code></pre>
    </div>

    <h2>8. JSX Attributes</h2>

    <p>
      JSX attributes are used to pass information to elements
      and components.
    </p>

    <div class="code">
      <pre><code>
&lt;img src="profile.jpg" alt="Profile" /&gt;
      </code></pre>
    </div>

    <p>
      We can also use JavaScript values inside attributes.
    </p>

    <div class="code">
      <pre><code>
const imageUrl = "/profile.jpg";

return (
  &lt;img src={imageUrl} alt="Profile" /&gt;
);
      </code></pre>
    </div>

    <p>
      Notice that the variable is inside curly braces.
    </p>

    <h3>String value</h3>

    <div class="code">
      <pre><code>
&lt;h1 className="title"&gt;Hello&lt;/h1&gt;
      </code></pre>
    </div>

    <h3>JavaScript value</h3>

    <div class="code">
      <pre><code>
&lt;h1 className={className}&gt;Hello&lt;/h1&gt;
      </code></pre>
    </div>

    <h3>Boolean attribute</h3>

    <div class="code">
      <pre><code>
&lt;button disabled={true}&gt;Submit&lt;/button&gt;
      </code></pre>
    </div>

    <h2>9. Fragments</h2>

    <p>
      Sometimes a component needs to return multiple elements,
      but we don't want to add an extra element to the DOM.
    </p>

    <p>
      React provides <strong>Fragments</strong> for this.
    </p>

    <div class="code">
      <pre><code>
function App() {
  return (
    &lt;&gt;
      &lt;h1&gt;Hello&lt;/h1&gt;
      &lt;p&gt;Welcome to React&lt;/p&gt;
    &lt;/&gt;
  );
}
      </code></pre>
    </div>

    <p>
      The short syntax <code>&lt;&gt;&lt;/&gt;</code> is a Fragment.
    </p>

    <p>
      It groups the elements without adding an extra DOM element.
    </p>

    <h3>Full Fragment Syntax</h3>

    <div class="code">
      <pre><code>
import { Fragment } from "react";

return (
  &lt;Fragment&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
    &lt;p&gt;Welcome&lt;/p&gt;
  &lt;/Fragment&gt;
);
      </code></pre>
    </div>

    <h2>10. Self-closing Tags</h2>

    <p>
      JSX requires elements that don't have children to be
      self-closed.
    </p>

    <div class="code">
      <pre><code>
&lt;img src="image.jpg" /&gt;

&lt;input type="text" /&gt;

&lt;br /&gt;

&lt;MyComponent /&gt;
      </code></pre>
    </div>

    <p>
      Forgetting the closing slash can cause a JSX syntax error.
    </p>

    <h2>11. Nested JSX</h2>

    <p>
      JSX elements can be placed inside other JSX elements.
    </p>

    <div class="code">
      <pre><code>
return (
  &lt;div&gt;
    &lt;h1&gt;React&lt;/h1&gt;

    &lt;div&gt;
      &lt;p&gt;Learn JSX&lt;/p&gt;
      &lt;p&gt;Learn Components&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
);
      </code></pre>
    </div>

    <p>
      Here, the second <code>div</code> is inside the first
      <code>div</code>.
    </p>

    <p>
      This creates a nested UI structure.
    </p>

    <h2>12. Rendering Variables</h2>

    <p>
      JavaScript variables can be displayed by placing them inside
      curly braces.
    </p>

    <div class="code">
      <pre><code>
function App() {
  const name = "Dev";
  const age = 28;

  return (
    &lt;div&gt;
      &lt;h1&gt;{name}&lt;/h1&gt;
      &lt;p&gt;Age: {age}&lt;/p&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      React evaluates the expressions and uses their resulting
      values in the rendered output.
    </p>

    <h2>13. Rendering Objects</h2>

    <p>
      JSX cannot directly render a normal JavaScript object as
      visible text.
    </p>

    <div class="code">
      <pre><code>
const user = {
  name: "Dev",
  age: 28
};
      </code></pre>
    </div>

    <p>
      This will not work:
    </p>

    <div class="code">
      <pre><code>
&lt;p&gt;{user}&lt;/p&gt;
      </code></pre>
    </div>

    <p>
      Instead, access the properties you want to display.
    </p>

    <div class="code">
      <pre><code>
&lt;p&gt;Name: {user.name}&lt;/p&gt;
&lt;p&gt;Age: {user.age}&lt;/p&gt;
      </code></pre>
    </div>

    <p>
      You can also convert an object into a string if you specifically
      want to display its contents for debugging.
    </p>

    <div class="code">
      <pre><code>
&lt;pre&gt;{JSON.stringify(user, null, 2)}&lt;/pre&gt;
      </code></pre>
    </div>

    <h2>14. Rendering Arrays</h2>

    <p>
      React can render arrays of renderable values.
      A common use is rendering a list with <code>map()</code>.
    </p>

    <div class="code">
      <pre><code>
const names = ["Dev", "Rahul", "Amit"];

return (
  &lt;ul&gt;
    {names.map((name) =&gt; (
      &lt;li key={name}&gt;{name}&lt;/li&gt;
    ))}
  &lt;/ul&gt;
);
      </code></pre>
    </div>

    <p>
      The <code>map()</code> function creates a React element for
      each item.
    </p>

    <p>
      The <code>key</code> helps React identify each item when the
      list changes. We will study keys and reconciliation in detail
      later.
    </p>

    <h2>15. JSX Compilation</h2>

    <p>
      The browser does not directly understand JSX.
    </p>

    <p>
      JSX needs to be transformed into regular JavaScript before
      it can run in the browser.
    </p>

    <p>
      A simplified view looks like this:
    </p>

    <div class="code">
      <pre><code>
JSX
  ↓
Transformation
  ↓
JavaScript
  ↓
Browser
      </code></pre>
    </div>

    <p>
      Modern React projects commonly use build tools such as Vite,
      which use a compiler or transformation toolchain to process
      JSX.
    </p>

    <p>
      JSX is therefore a developer-friendly syntax rather than
      something the browser executes directly.
    </p>

    <h2>16. Babel Transformation</h2>

    <p>
      <strong>Babel</strong> is a JavaScript compiler that can
      transform JSX and modern JavaScript syntax into code that
      can be used by the target environment.
    </p>

    <p>
      For example, JSX such as:
    </p>

    <div class="code">
      <pre><code>
const element = &lt;h1&gt;Hello&lt;/h1&gt;;
      </code></pre>
    </div>

    <p>
      can be transformed into a React element creation call.
      With the modern JSX transform, the generated code can use
      React's JSX runtime rather than requiring us to manually write
      <code>React.createElement()</code>.
    </p>

    <p>
      So, when learning JSX, it is useful to understand
      <code>React.createElement()</code>, but modern React projects
      do not normally require you to write it yourself.
    </p>

    <h2>17. React.createElement()</h2>

    <p>
      Before the modern JSX transform, JSX was commonly transformed
      into calls to <code>React.createElement()</code>.
    </p>

    <p>
      For example:
    </p>

    <div class="code">
      <pre><code>
const element = &lt;h1&gt;Hello&lt;/h1&gt;;
      </code></pre>
    </div>

    <p>
      was conceptually transformed into something similar to:
    </p>

    <div class="code">
      <pre><code>
const element = React.createElement(
  "h1",
  null,
  "Hello"
);
      </code></pre>
    </div>

    <p>
      The important point is that JSX is transformed into JavaScript
      that creates a React element description.
    </p>

    <div class="info-box">
      <strong>Important:</strong>
      <p>
        Don't think of JSX as HTML being directly inserted into
        the browser. JSX is transformed into JavaScript.
      </p>
    </div>

    <h2>18. React Elements</h2>

    <p>
      A <strong>React element</strong> is a JavaScript value that
      describes what React should render.
    </p>

    <div class="code">
      <pre><code>
const element = &lt;h1&gt;Hello React&lt;/h1&gt;;
      </code></pre>
    </div>

    <p>
      The variable <code>element</code> does not contain an actual
      DOM node.
    </p>

    <p>
      It contains a description of the UI.
    </p>

    <p>
      React uses this description as part of its rendering process.
    </p>

    <div class="info-box">
      <strong>Important difference:</strong>
      <p>
        React element ≠ DOM element.
      </p>
      <p>
        A React element is a description. The browser DOM contains
        the actual nodes displayed by the browser.
      </p>
    </div>

    <h2>19. JSX Object Structure</h2>

    <p>
      JSX is transformed into JavaScript values that have an
      object-like structure.
    </p>

    <p>
      A simplified React element can look conceptually like:
    </p>

    <div class="code">
      <pre><code>
{
  type: "h1",
  props: {
    children: "Hello React"
  }
}
      </code></pre>
    </div>

    <p>
      This is a simplified example to help you understand the idea.
      React's actual element object contains additional internal
      information.
    </p>

    <p>
      The important parts are:
    </p>

    <ul>
      <li>
        <strong>type</strong> describes what should be created,
        such as <code>"h1"</code> or a React component.
      </li>

      <li>
        <strong>props</strong> contains the properties and children
        associated with that element.
      </li>
    </ul>

    <h2>20. JSX Tree</h2>

    <p>
      When JSX contains nested elements, those elements form a
      tree-like structure.
    </p>

    <div class="code">
      <pre><code>
&lt;div&gt;
  &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;p&gt;Welcome&lt;/p&gt;
&lt;/div&gt;
      </code></pre>
    </div>

    <p>
      We can visualize it like this:
    </p>

    <div class="code">
      <pre><code>
div
├── h1
│   └── "Hello"
│
└── p
    └── "Welcome"
      </code></pre>
    </div>

    <p>
      React uses this tree of elements as part of the process of
      figuring out what the UI should look like.
    </p>

    <p>
      Later, when we study reconciliation and Fiber, you will see
      how React works with these tree structures to update the UI.
    </p>

    <h2>21. Complete JSX Flow</h2>

    <p>
      Now let's connect the whole process.
    </p>

    <div class="code">
      <pre><code>
JSX
  ↓
JSX Transformation
  ↓
JavaScript
  ↓
React Element
  ↓
React Rendering
  ↓
DOM
  ↓
Browser UI
      </code></pre>
    </div>

    <p>
      For example, when you write:
    </p>

    <div class="code">
      <pre><code>
function App() {
  return &lt;h1&gt;Hello React&lt;/h1&gt;;
}
      </code></pre>
    </div>

    <p>
      you are writing JSX.
    </p>

    <p>
      The React toolchain transforms that JSX into JavaScript.
      React then uses the resulting element description during
      rendering and updates the browser DOM.
    </p>

    <h2>22. A Small Real Example</h2>

    <p>
      Let's put several JSX concepts together.
    </p>

    <div class="code">
      <pre><code>
function Profile() {
  const user = {
    name: "Dev",
    role: "Frontend Developer"
  };

  const skills = ["React", "JavaScript", "CSS"];

  return (
    &lt;&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;

      &lt;p&gt;Role: {user.role}&lt;/p&gt;

      &lt;h2&gt;Skills&lt;/h2&gt;

      &lt;ul&gt;
        {skills.map((skill) =&gt; (
          &lt;li key={skill}&gt;{skill}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/&gt;
  );
}
      </code></pre>
    </div>

    <p>
      In this example we are using:
    </p>

    <ul>
      <li>JSX</li>
      <li>JavaScript variables</li>
      <li>Object properties</li>
      <li>Arrays</li>
      <li>map()</li>
      <li>Keys</li>
      <li>Fragments</li>
      <li>Expressions inside JSX</li>
    </ul>

    <h2>Common JSX Mistakes</h2>

    <h3>1. Forgetting to close a tag</h3>

    <div class="code">
      <pre><code>
&lt;input&gt;
      </code></pre>
    </div>

    <p>
      Correct:
    </p>

    <div class="code">
      <pre><code>
&lt;input /&gt;
      </code></pre>
    </div>

    <h3>2. Using class instead of className</h3>

    <div class="code">
      <pre><code>
&lt;div className="box"&gt;Hello&lt;/div&gt;
      </code></pre>
    </div>

    <h3>3. Forgetting curly braces for JavaScript values</h3>

    <div class="code">
      <pre><code>
const name = "Dev";

&lt;h1&gt;{name}&lt;/h1&gt;
      </code></pre>
    </div>

    <h3>4. Trying to render a normal object directly</h3>

    <div class="code">
      <pre><code>
&lt;p&gt;{user}&lt;/p&gt;
      </code></pre>
    </div>

    <p>
      Instead, render a property such as <code>{user.name}</code>.
    </p>

    <h3>5. Returning multiple elements without a parent or Fragment</h3>

    <p>
      Use a parent element or Fragment when the returned JSX needs
      to contain multiple sibling elements.
    </p>
  `,
  },
  {
    title: "React Components",

    content: `
    <h1>React Components</h1>

    <p>
      Components are one of the most important ideas in React.
      Almost everything you build in a React application is made
      from components.
    </p>

    <p>
      A component is simply a reusable piece of UI.
      It can represent a button, navbar, card, form, page,
      or even the whole application.
    </p>

    <div class="info-box">
      <strong>Simple idea:</strong>
      <p>
        Instead of writing one huge UI in one file, we break it
        into smaller components and put those components together.
      </p>
    </div>

    <h2>1. Component Basics</h2>

    <p>
      Let's start with a very simple component.
    </p>

    <div class="code">
      <pre><code>
function Welcome() {
  return &lt;h1&gt;Hello!&lt;/h1&gt;;
}
      </code></pre>
    </div>

    <p>
      <code>Welcome</code> is a React component.
    </p>

    <p>
      It returns a piece of UI:
    </p>

    <div class="code">
      <pre><code>
&lt;h1&gt;Hello!&lt;/h1&gt;
      </code></pre>
    </div>

    <p>
      We can then use the component like an HTML element:
    </p>

    <div class="code">
      <pre><code>
function App() {
  return (
    &lt;div&gt;
      &lt;Welcome /&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      When React sees <code>&lt;Welcome /&gt;</code>, it knows that
      it needs to render the <code>Welcome</code> component.
    </p>

    <h2>2. Function Components</h2>

    <p>
      The normal way to create components in modern React is by
      using JavaScript functions.
    </p>

    <div class="code">
      <pre><code>
function Greeting() {
  return &lt;h1&gt;Good Morning&lt;/h1&gt;;
}
      </code></pre>
    </div>

    <p>
      This is called a <strong>function component</strong>.
    </p>

    <p>
      A component can also contain JavaScript logic before returning
      its UI.
    </p>

    <div class="code">
      <pre><code>
function Greeting() {
  const name = "Dev";

  return &lt;h1&gt;Hello {name}&lt;/h1&gt;;
}
      </code></pre>
    </div>

    <p>
      So a component is not just HTML-like markup. It is a JavaScript
      function that returns something React can render.
    </p>

    <h2>3. Component Naming</h2>

    <p>
      React component names should start with a capital letter.
    </p>

    <p>Correct:</p>

    <div class="code">
      <pre><code>
function UserCard() {
  return &lt;div&gt;User&lt;/div&gt;;
}
      </code></pre>
    </div>

    <p>Then use it like:</p>

    <div class="code">
      <pre><code>
&lt;UserCard /&gt;
      </code></pre>
    </div>

    <p>
      A lowercase name is treated differently by JSX.
    </p>

    <div class="code">
      <pre><code>
&lt;div /&gt;
&lt;button /&gt;
      </code></pre>
    </div>

    <p>
      These are normal HTML elements.
    </p>

    <p>
      But:
    </p>

    <div class="code">
      <pre><code>
&lt;UserCard /&gt;
      </code></pre>
    </div>

    <p>
      tells React that <code>UserCard</code> is a component.
    </p>

    <div class="info-box">
      <strong>Remember:</strong>
      <p>
        Component names start with a capital letter.
      </p>
    </div>

    <h2>4. Component File Structure</h2>

    <p>
      A small project can start with a few files:
    </p>

    <div class="code">
      <pre><code>
src/
├── App.jsx
├── main.jsx
└── components/
    ├── Header.jsx
    ├── Button.jsx
    └── UserCard.jsx
      </code></pre>
    </div>

    <p>
      For example, <code>Header.jsx</code> can contain the Header
      component.
    </p>

    <div class="code">
      <pre><code>
function Header() {
  return (
    &lt;header&gt;
      &lt;h1&gt;My Website&lt;/h1&gt;
    &lt;/header&gt;
  );
}

export default Header;
      </code></pre>
    </div>

    <p>
      Then we can import it into another component.
    </p>

    <div class="code">
      <pre><code>
import Header from "./components/Header";

function App() {
  return (
    &lt;div&gt;
      &lt;Header /&gt;
    &lt;/div&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      This keeps each component easier to find and maintain.
    </p>

    <h2>5. Component Composition</h2>

    <p>
      <strong>Composition</strong> means building a larger UI by
      putting smaller components together.
    </p>

    <p>
      Imagine a simple website:
    </p>

    <div class="code">
      <pre><code>
App
├── Header
├── Sidebar
├── MainContent
│   ├── UserCard
│   └── ProductList
└── Footer
      </code></pre>
    </div>

    <p>
      Instead of putting everything inside <code>App</code>,
      we create smaller components.
    </p>

    <div class="code">
      <pre><code>
function App() {
  return (
    &lt;&gt;
      &lt;Header /&gt;
      &lt;Sidebar /&gt;
      &lt;MainContent /&gt;
      &lt;Footer /&gt;
    &lt;/&gt;
  );
}
      </code></pre>
    </div>

    <p>
      This is component composition.
    </p>

    <h2>6. Nested Components</h2>

    <p>
      A component can contain another component.
    </p>

    <div class="code">
      <pre><code>
function Button() {
  return &lt;button&gt;Click Me&lt;/button&gt;;
}

function Card() {
  return (
    &lt;div&gt;
      &lt;h2&gt;My Card&lt;/h2&gt;
      &lt;Button /&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      Here, <code>Button</code> is inside <code>Card</code>.
    </p>

    <p>
      We can visualize it like this:
    </p>

    <div class="code">
      <pre><code>
Card
└── Button
      </code></pre>
    </div>

    <p>
      This is a simple component tree.
    </p>

    <h2>7. Parent Component</h2>

    <p>
      A component that contains another component is commonly
      called the <strong>parent</strong>.
    </p>

    <div class="code">
      <pre><code>
function App() {
  return (
    &lt;div&gt;
      &lt;UserCard /&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      Here, <code>App</code> is the parent of <code>UserCard</code>.
    </p>

    <div class="code">
      <pre><code>
App
└── UserCard
      </code></pre>
    </div>

    <h2>8. Child Component</h2>

    <p>
      The component placed inside another component is commonly
      called the <strong>child</strong>.
    </p>

    <div class="code">
      <pre><code>
function UserCard() {
  return &lt;div&gt;User Card&lt;/div&gt;;
}

function App() {
  return (
    &lt;div&gt;
      &lt;UserCard /&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      Here:
    </p>

    <div class="code">
      <pre><code>
App       → Parent
UserCard  → Child
      </code></pre>
    </div>

    <p>
      Parent and child are relationship terms. A component can be
      a child in one place and a parent in another.
    </p>

    <h2>9. How Parent and Child Components Work Together</h2>

    <p>
      Suppose we have a parent component and a child component:
    </p>

    <div class="code">
      <pre><code>
function UserCard() {
  return &lt;h2&gt;Dev&lt;/h2&gt;;
}

function App() {
  return (
    &lt;div&gt;
      &lt;UserCard /&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      The flow is:
    </p>

    <div class="code">
      <pre><code>
App
 ↓
renders UserCard
 ↓
UserCard returns &lt;h2&gt;Dev&lt;/h2&gt;
 ↓
React renders the result
 ↓
Browser displays "Dev"
      </code></pre>
    </div>

    <p>
      Later, we will use <strong>props</strong> to send information
      from the parent to the child.
    </p>

    <h2>10. Reusable Components</h2>

    <p>
      One of the biggest benefits of components is reuse.
    </p>

    <p>
      Suppose we need three buttons:
    </p>

    <div class="code">
      <pre><code>
&lt;button&gt;Save&lt;/button&gt;
&lt;button&gt;Delete&lt;/button&gt;
&lt;button&gt;Cancel&lt;/button&gt;
      </code></pre>
    </div>

    <p>
      Instead of repeating the same button structure, we can create
      one Button component.
    </p>

    <div class="code">
      <pre><code>
function Button({ children }) {
  return (
    &lt;button&gt;
      {children}
    &lt;/button&gt;
  );
}
      </code></pre>
    </div>

    <p>
      Then reuse it:
    </p>

    <div class="code">
      <pre><code>
function App() {
  return (
    &lt;div&gt;
      &lt;Button&gt;Save&lt;/Button&gt;
      &lt;Button&gt;Delete&lt;/Button&gt;
      &lt;Button&gt;Cancel&lt;/Button&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      The same component is being used three times with different
      content.
    </p>

    <h2>11. Container Components</h2>

    <p>
      A <strong>container component</strong> is usually responsible
      for handling data, logic, or application behavior rather than
      mainly deciding how the UI looks.
    </p>

    <p>
      For example, suppose we need to get users from an API.
    </p>

    <div class="code">
      <pre><code>
function UserContainer() {
  const users = [
    "Dev",
    "Rahul",
    "Amit"
  ];

  return &lt;UserList users={users} /&gt;;
}
      </code></pre>
    </div>

    <p>
      Here, the container prepares the data and passes it to
      another component.
    </p>

    <p>
      A common flow is:
    </p>

    <div class="code">
      <pre><code>
UserContainer
      ↓
gets/prepares data
      ↓
passes data
      ↓
UserList
      ↓
displays users
      </code></pre>
    </div>

    <p>
      This is a useful design idea, but you don't need to force
      every component into a container/presentational structure.
      Modern React applications often use hooks and other patterns
      to organize logic.
    </p>

    <h2>12. Presentational Components</h2>

    <p>
      A <strong>presentational component</strong> mainly focuses
      on how something looks.
    </p>

    <div class="code">
      <pre><code>
function UserList({ users }) {
  return (
    &lt;ul&gt;
      {users.map((user) =&gt; (
        &lt;li key={user}&gt;
          {user}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
      </code></pre>
    </div>

    <p>
      This component receives the users and displays them.
    </p>

    <p>
      It doesn't need to know where the data came from.
    </p>

    <h2>13. Container + Presentational Example</h2>

    <p>
      Let's put the previous two ideas together.
    </p>

    <div class="code">
      <pre><code>
function UserContainer() {
  const users = ["Dev", "Rahul", "Amit"];

  return &lt;UserList users={users} /&gt;;
}

function UserList({ users }) {
  return (
    &lt;ul&gt;
      {users.map((user) =&gt; (
        &lt;li key={user}&gt;{user}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
      </code></pre>
    </div>

    <p>
      The flow is:
    </p>

    <div class="code">
      <pre><code>
UserContainer
      ↓
creates/gets users
      ↓
passes users
      ↓
UserList
      ↓
renders users
      </code></pre>
    </div>

    <h2>14. Layout Components</h2>

    <p>
      A <strong>layout component</strong> controls the general
      structure of a page.
    </p>

    <p>
      For example, many pages may have the same header, sidebar,
      and main content area.
    </p>

    <div class="code">
      <pre><code>
function DashboardLayout({ children }) {
  return (
    &lt;div&gt;
      &lt;Header /&gt;

      &lt;div&gt;
        &lt;Sidebar /&gt;

        &lt;main&gt;
          {children}
        &lt;/main&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
    </div>

    <p>
      Then a page can use the layout:
    </p>

    <div class="code">
      <pre><code>
function Dashboard() {
  return (
    &lt;DashboardLayout&gt;
      &lt;h1&gt;Dashboard&lt;/h1&gt;
      &lt;p&gt;Welcome to your dashboard.&lt;/p&gt;
    &lt;/DashboardLayout&gt;
  );
}
      </code></pre>
    </div>

    <p>
      The content between the opening and closing
      <code>DashboardLayout</code> tags becomes
      <code>children</code>.
    </p>

    <p>
      The idea is:
    </p>

    <div class="code">
      <pre><code>
DashboardLayout
├── Header
├── Sidebar
└── Main
    └── Dashboard content
      </code></pre>
    </div>

    <h2>15. Compound Components</h2>

    <p>
      <strong>Compound components</strong> are multiple components
      designed to work together as one larger component.
    </p>

    <p>
      A familiar example is a custom Tabs component.
    </p>

    <div class="code">
      <pre><code>
&lt;Tabs&gt;
  &lt;Tabs.List&gt;
    &lt;Tabs.Tab&gt;Profile&lt;/Tabs.Tab&gt;
    &lt;Tabs.Tab&gt;Settings&lt;/Tabs.Tab&gt;
  &lt;/Tabs.List&gt;

  &lt;Tabs.Panel&gt;
    Profile information
  &lt;/Tabs.Panel&gt;
&lt;/Tabs&gt;
      </code></pre>
    </div>

    <p>
      The components are designed to work together and share some
      common behavior or state.
    </p>

    <p>
      This pattern is useful when you want an API that feels natural
      to use:
    </p>

    <div class="code">
      <pre><code>
&lt;Tabs&gt;
  ...
&lt;/Tabs&gt;
      </code></pre>
    </div>

    <p>
      Compound components are more advanced. You will commonly see
      them in reusable UI libraries.
    </p>

    <h2>16. Headless Components</h2>

    <p>
      A <strong>headless component</strong> provides behavior or
      logic without deciding exactly how the UI should look.
    </p>

    <p>
      For example, imagine a dropdown component that handles:
    </p>

    <ul>
      <li>Opening and closing</li>
      <li>Which option is selected</li>
      <li>Keyboard interaction</li>
      <li>Selection logic</li>
    </ul>

    <p>
      But it doesn't force you to use a specific button style or
      visual design.
    </p>

    <p>
      You can then create your own UI around that behavior.
    </p>

    <div class="info-box">
      <strong>Simple difference:</strong>
      <p>
        Normal UI component → behavior + appearance.
      </p>
      <p>
        Headless component → behavior, while you control the appearance.
      </p>
    </div>

    <h2>17. Components in a Real Application</h2>

    <p>
      In a real application, components are usually divided based
      on what they do.
    </p>

    <p>
      For example, imagine an e-commerce website:
    </p>

    <div class="code">
      <pre><code>
App
│
├── Header
│   ├── Logo
│   ├── SearchBar
│   └── CartButton
│
├── HomePage
│   ├── Hero
│   ├── ProductList
│   │   └── ProductCard
│   │
│   └── Footer
│
└── ProductPage
    ├── ProductImage
    ├── ProductInfo
    └── AddToCartButton
      </code></pre>
    </div>

    <p>
      Each component has a smaller responsibility.
    </p>

    <p>
      This makes the application easier to understand and change.
    </p>

    <h2>18. How Components Work Together</h2>

    <p>
      Let's take a simple example:
    </p>

    <div class="code">
      <pre><code>
function App() {
  return (
    &lt;Page&gt;
      &lt;Header /&gt;
      &lt;UserCard /&gt;
      &lt;Footer /&gt;
    &lt;/Page&gt;
  );
}
      </code></pre>
    </div>

    <p>
      React can be thought of as building a component tree:
    </p>

    <div class="code">
      <pre><code>
App
└── Page
    ├── Header
    ├── UserCard
    └── Footer
      </code></pre>
    </div>

    <p>
      Each component returns its own part of the UI.
    </p>

    <p>
      React combines these elements into the overall UI that gets
      rendered to the browser.
    </p>

    <h2>19. Component vs Normal JavaScript Function</h2>

    <p>
      A React function component is still a JavaScript function,
      but React uses its returned value as part of the UI.
    </p>

    <p>
      Normal function:
    </p>

    <div class="code">
      <pre><code>
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
      </code></pre>
    </div>

    <p>
      React component:
    </p>

    <div class="code">
      <pre><code>
function Greeting() {
  return &lt;h1&gt;Hello&lt;/h1&gt;;
}
      </code></pre>
    </div>

    <p>
      The important difference is how the function is used.
      A component is used by React as part of rendering:
    </p>

    <div class="code">
      <pre><code>
&lt;Greeting /&gt;
      </code></pre>
    </div>

    <h2>20. A Simple Real-World Example</h2>

    <p>
      Let's build a small profile page using separate components.
    </p>

    <div class="code">
      <pre><code>
function ProfileImage() {
  return (
    &lt;img
      src="/profile.jpg"
      alt="Profile"
      width="100"
    /&gt;
  );
}

function ProfileInfo() {
  return (
    &lt;div&gt;
      &lt;h2&gt;Dev&lt;/h2&gt;
      &lt;p&gt;Frontend Developer&lt;/p&gt;
    &lt;/div&gt;
  );
}

function ProfileCard() {
  return (
    &lt;div&gt;
      &lt;ProfileImage /&gt;
      &lt;ProfileInfo /&gt;
    &lt;/div&gt;
  );
}

function App() {
  return (
    &lt;ProfileCard /&gt;
  );
}
      </code></pre>
    </div>

    <p>
      The component tree is:
    </p>

    <div class="code">
      <pre><code>
App
└── ProfileCard
    ├── ProfileImage
    └── ProfileInfo
      </code></pre>
    </div>

    <p>
      This is the basic idea behind component-based development:
      take a large UI and divide it into smaller meaningful pieces.
    </p>

    <h2>21. When Should You Create a Component?</h2>

    <p>
      You don't need to create a component for every single
      <code>div</code>.
    </p>

    <p>
      A component is useful when a piece of UI:
    </p>

    <ul>
      <li>Is reused in multiple places.</li>
      <li>Has its own behavior or logic.</li>
      <li>Represents a meaningful part of the UI.</li>
      <li>Would make a large component easier to understand.</li>
      <li>Needs to receive its own data or children.</li>
    </ul>

    <p>
      For example, a reusable Button component makes sense when
      your application has buttons with common behavior or styling.
    </p>

    <h2>22. Don't Over-Create Components</h2>

    <p>
      Breaking everything into tiny components can also make a
      project harder to follow.
    </p>

    <p>
      For example, creating a separate component just for:
    </p>

    <div class="code">
      <pre><code>
&lt;span&gt;Hello&lt;/span&gt;
      </code></pre>
    </div>

    <p>
      usually doesn't provide much value.
    </p>

    <p>
      The goal is not to have the largest number of components.
      The goal is to divide the application in a way that makes
      the code easier to understand and reuse.
    </p>

    <h2>Component Flow</h2>

    <p>
      Keep this basic flow in mind:
    </p>

    <div class="code">
      <pre><code>
App
 ↓
Parent Component
 ↓
Child Component
 ↓
Child returns UI
 ↓
React builds the element tree
 ↓
React renders the UI
 ↓
Browser displays the result
      </code></pre>
    </div>
  `,
  },
  {
    title: "Rendering",
    content: `
    <h1>Rendering in React</h1>

    <p>
      Rendering is the process where React takes your components and
      their current data and turns them into the UI shown in the browser.
    </p>

    <p>
      You can think of it simply:
    </p>

    <div class="code">
      <pre><code>
Component + Data
       ↓
    React
       ↓
    UI shown in browser
      </code></pre>
    </div>

    <p>
      Rendering becomes especially important when data changes.
      React can render the component again and update the parts of
      the page that need to change.
    </p>

    <h2>1. Rendering Basics</h2>

    <p>
      A React component normally returns JSX describing what should
      appear on the screen.
    </p>

    <div class="code">
      <pre><code>
// App.jsx

function App() {
  return (
    &lt;h1&gt;Hello React&lt;/h1&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      When React renders <code>App</code>, the browser displays:
    </p>

    <div class="code">
      <pre><code>
Hello React
      </code></pre>
    </div>

    <h2>2. Rendering UI</h2>

    <p>
      A component can return a complete piece of UI containing
      multiple elements.
    </p>

    <div class="code">
      <pre><code>
// Profile.jsx

function Profile() {
  return (
    &lt;div&gt;
      &lt;h2&gt;Dev&lt;/h2&gt;
      &lt;p&gt;Frontend Developer&lt;/p&gt;
      &lt;button&gt;View Profile&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Profile;
      </code></pre>
    </div>

    <p>
      Another component can render it:
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import Profile from "./Profile";

function App() {
  return (
    &lt;Profile /&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      The basic flow is:
    </p>

    <div class="code">
      <pre><code>
App
 ↓
Profile
 ↓
Profile returns JSX
 ↓
React renders it
 ↓
Browser displays the UI
      </code></pre>
    </div>

    <h2>3. Rendering Variables</h2>

    <p>
      JavaScript variables can be displayed inside JSX using
      curly braces.
    </p>

    <div class="code">
      <pre><code>
// User.jsx

function User() {
  const name = "Dev";
  const age = 28;

  return (
    &lt;div&gt;
      &lt;h2&gt;{name}&lt;/h2&gt;
      &lt;p&gt;Age: {age}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default User;
      </code></pre>
    </div>

    <p>
      React evaluates the expressions inside <code>{ }</code>
      and uses their values in the UI.
    </p>

    <p>
      You can also use expressions:
    </p>

    <div class="code">
      <pre><code>
// User.jsx

function User() {
  const age = 28;

  return (
    &lt;div&gt;
      &lt;p&gt;Next year: {age + 1}&lt;/p&gt;
      &lt;p&gt;Name: {"Dev".toUpperCase()}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default User;
      </code></pre>
    </div>

    <h2>4. Rendering Objects</h2>

    <p>
      React cannot directly display a normal JavaScript object
      as a child.
    </p>

    <div class="code">
      <pre><code>
// User.jsx

function User() {
  const user = {
    name: "Dev",
    age: 28
  };

  return (
    &lt;div&gt;
      &lt;p&gt;Name: {user.name}&lt;/p&gt;
      &lt;p&gt;Age: {user.age}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default User;
      </code></pre>
    </div>

    <p>
      Here we are not rendering the whole object. We are accessing
      individual properties.
    </p>

    <p>
      This would cause a problem:
    </p>

    <div class="code">
      <pre><code>
&lt;p&gt;{user}&lt;/p&gt;
      </code></pre>
    </div>

    <p>
      If you need to display the complete object for debugging,
      you can convert it to a string.
    </p>

    <div class="code">
      <pre><code>
&lt;pre&gt;
  {JSON.stringify(user, null, 2)}
&lt;/pre&gt;
      </code></pre>
    </div>

    <h2>5. Rendering Arrays</h2>

    <p>
      React can render arrays of renderable values.
    </p>

    <div class="code">
      <pre><code>
// App.jsx

function App() {
  const names = ["Dev", "Rahul", "Amit"];

  return (
    &lt;div&gt;
      {names}
    &lt;/div&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      For UI lists, however, we normally use <code>map()</code>
      because we need to control how every item is displayed.
    </p>

    <h2>6. Conditional Rendering</h2>

    <p>
      Conditional rendering means showing different UI depending
      on a condition.
    </p>

    <p>
      For example:
    </p>

    <div class="code">
      <pre><code>
isLoggedIn
     ↓
  true?
  /   \\
Yes     No
 ↓       ↓
Home    Login
      </code></pre>
    </div>

    <p>
      React gives us several ways to do this.
    </p>

    <h2>7. Conditional Rendering with if</h2>

    <p>
      Use a normal <code>if</code> statement when the condition
      controls what the component should return.
    </p>

    <div class="code">
      <pre><code>
// Dashboard.jsx

function Dashboard() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return &lt;p&gt;Please log in.&lt;/p&gt;;
  }

  return &lt;h1&gt;Welcome to Dashboard&lt;/h1&gt;;
}

export default Dashboard;
      </code></pre>
    </div>

    <p>
      Here React first checks the condition.
    </p>

    <p>
      If the user is not logged in, the component immediately returns
      the login message.
    </p>

    <h2>8. Conditional Rendering with if-else</h2>

    <p>
      You can use <code>if-else</code> when there are two possible
      results.
    </p>

    <div class="code">
      <pre><code>
// Status.jsx

function Status() {
  const isOnline = true;

  if (isOnline) {
    return &lt;p&gt;User is online&lt;/p&gt;;
  } else {
    return &lt;p&gt;User is offline&lt;/p&gt;;
  }
}

export default Status;
      </code></pre>
    </div>

    <h2>9. Conditional Rendering with Ternary</h2>

    <p>
      A ternary is useful when you want to choose between two
      pieces of JSX directly inside the returned UI.
    </p>

    <div class="code">
      <pre><code>
// LoginStatus.jsx

function LoginStatus() {
  const isLoggedIn = true;

  return (
    &lt;div&gt;
      {isLoggedIn ? (
        &lt;button&gt;Logout&lt;/button&gt;
      ) : (
        &lt;button&gt;Login&lt;/button&gt;
      )}
    &lt;/div&gt;
  );
}

export default LoginStatus;
      </code></pre>
    </div>

    <p>
      The structure is:
    </p>

    <div class="code">
      <pre><code>
condition ? valueIfTrue : valueIfFalse
      </code></pre>
    </div>

    <h2>10. Conditional Rendering with &&</h2>

    <p>
      Use <code>&amp;&amp;</code> when you only want to show something
      when a condition is true.
    </p>

    <div class="code">
      <pre><code>
// Notification.jsx

function Notification() {
  const hasMessage = true;

  return (
    &lt;div&gt;
      {hasMessage &amp;&amp; (
        &lt;p&gt;You have a new message.&lt;/p&gt;
      )}
    &lt;/div&gt;
  );
}

export default Notification;
      </code></pre>
    </div>

    <p>
      When <code>hasMessage</code> is true, the message is shown.
      When it is false, the message is not rendered.
    </p>

    <h2>11. Conditional Rendering with ||</h2>

    <p>
      The <code>||</code> operator is commonly used to provide a
      fallback value.
    </p>

    <div class="code">
      <pre><code>
// UserName.jsx

function UserName() {
  const name = "";

  return (
    &lt;p&gt;
      {name || "Guest"}
    &lt;/p&gt;
  );
}

export default UserName;
      </code></pre>
    </div>

    <p>
      Because <code>name</code> is an empty string, React displays
      <code>Guest</code>.
    </p>

    <p>
      Another common example:
    </p>

    <div class="code">
      <pre><code>
const title = product.title || "Untitled Product";
      </code></pre>
    </div>

    <h2>12. Conditional Rendering with switch</h2>

    <p>
      A <code>switch</code> is useful when there are several
      possible values.
    </p>

    <div class="code">
      <pre><code>
// UserStatus.jsx

function UserStatus() {
  const status = "loading";

  switch (status) {
    case "loading":
      return &lt;p&gt;Loading...&lt;/p&gt;;

    case "success":
      return &lt;p&gt;Data loaded.&lt;/p&gt;;

    case "error":
      return &lt;p&gt;Something went wrong.&lt;/p&gt;;

    default:
      return &lt;p&gt;Unknown status.&lt;/p&gt;;
  }
}

export default UserStatus;
      </code></pre>
    </div>

    <p>
      This is especially useful when an application has several
      states.
    </p>

    <h2>13. return null</h2>

    <p>
      A component can return <code>null</code> when it should render
      nothing.
    </p>

    <div class="code">
      <pre><code>
// AdminMessage.jsx

function AdminMessage({ isAdmin }) {
  if (!isAdmin) {
    return null;
  }

  return (
    &lt;p&gt;Welcome, Admin&lt;/p&gt;
  );
}

export default AdminMessage;
      </code></pre>
    </div>

    <p>
      If <code>isAdmin</code> is false, the component produces no
      visible UI.
    </p>

    <h2>14. List Rendering</h2>

    <p>
      Applications often need to display lists:
    </p>

    <ul>
      <li>Users</li>
      <li>Products</li>
      <li>Messages</li>
      <li>Orders</li>
      <li>Comments</li>
    </ul>

    <p>
      Instead of manually writing every item, we normally store
      the data in an array and create the UI from that data.
    </p>

    <h2>15. map()</h2>

    <p>
      <code>map()</code> is the most common way to render a list
      in React.
    </p>

    <div class="code">
      <pre><code>
// UserList.jsx

function UserList() {
  const users = [
    "Dev",
    "Rahul",
    "Amit"
  ];

  return (
    &lt;ul&gt;
      {users.map((user) =&gt; (
        &lt;li key={user}&gt;
          {user}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default UserList;
      </code></pre>
    </div>

    <p>
      What happens here?
    </p>

    <div class="code">
      <pre><code>
users array
     ↓
map()
     ↓
User 1 → &lt;li&gt;Dev&lt;/li&gt;
User 2 → &lt;li&gt;Rahul&lt;/li&gt;
User 3 → &lt;li&gt;Amit&lt;/li&gt;
     ↓
React renders the list
      </code></pre>
    </div>

    <h2>16. filter()</h2>

    <p>
      <code>filter()</code> is useful when we only want to render
      items that match a condition.
    </p>

    <p>
      For example, imagine a list of products where only products
      that are in stock should be displayed.
    </p>

    <div class="code">
      <pre><code>
// ProductList.jsx

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Mouse", inStock: false },
    { id: 3, name: "Keyboard", inStock: true }
  ];

  return (
    &lt;ul&gt;
      {products
        .filter((product) =&gt; product.inStock)
        .map((product) =&gt; (
          &lt;li key={product.id}&gt;
            {product.name}
          &lt;/li&gt;
        ))}
    &lt;/ul&gt;
  );
}

export default ProductList;
      </code></pre>
    </div>

    <p>
      The flow is:
    </p>

    <div class="code">
      <pre><code>
products
   ↓
filter()
   ↓
only products in stock
   ↓
map()
   ↓
React elements
   ↓
UI
      </code></pre>
    </div>

    <h2>17. flatMap()</h2>

    <p>
      <code>flatMap()</code> combines mapping and one level of
      flattening.
    </p>

    <p>
      It is useful when one item needs to produce multiple values.
    </p>

    <div class="code">
      <pre><code>
// App.jsx

function App() {
  const users = [
    {
      name: "Dev",
      skills: ["React", "JavaScript"]
    },
    {
      name: "Rahul",
      skills: ["Node.js", "MongoDB"]
    }
  ];

  const skills = users.flatMap(
    (user) =&gt; user.skills
  );

  return (
    &lt;ul&gt;
      {skills.map((skill) =&gt; (
        &lt;li key={skill}&gt;
          {skill}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      Without <code>flatMap()</code>, the skills would remain
      grouped inside nested arrays.
    </p>

    <div class="code">
      <pre><code>
[
  ["React", "JavaScript"],
  ["Node.js", "MongoDB"]
]
      </code></pre>
    </div>

    <p>
      After <code>flatMap()</code>:
    </p>

    <div class="code">
      <pre><code>
[
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB"
]
      </code></pre>
    </div>

    <h2>18. Nested Lists</h2>

    <p>
      Sometimes your data contains lists inside other lists.
    </p>

    <div class="code">
      <pre><code>
// CategoryList.jsx

function CategoryList() {
  const categories = [
    {
      id: 1,
      name: "Frontend",
      skills: ["HTML", "CSS", "React"]
    },
    {
      id: 2,
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB"]
    }
  ];

  return (
    &lt;div&gt;
      {categories.map((category) =&gt; (
        &lt;div key={category.id}&gt;
          &lt;h2&gt;{category.name}&lt;/h2&gt;

          &lt;ul&gt;
            {category.skills.map((skill) =&gt; (
              &lt;li key={skill}&gt;
                {skill}
              &lt;/li&gt;
            ))}
          &lt;/ul&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}

export default CategoryList;
      </code></pre>
    </div>

    <p>
      The structure is:
    </p>

    <div class="code">
      <pre><code>
categories
├── Frontend
│   ├── HTML
│   ├── CSS
│   └── React
│
└── Backend
    ├── Node.js
    ├── Express
    └── MongoDB
      </code></pre>
    </div>

    <p>
      Each level needs a suitable key.
    </p>

    <h2>19. Keys</h2>

    <p>
      When React renders a list, each sibling item should have a
      <code>key</code>.
    </p>

    <div class="code">
      <pre><code>
{users.map((user) =&gt; (
  &lt;li key={user.id}&gt;
    {user.name}
  &lt;/li&gt;
))}
      </code></pre>
    </div>

    <p>
      A key gives React a stable identity for that item among its
      siblings.
    </p>

    <h2>20. Why Keys Exist</h2>

    <p>
      Imagine the current list is:
    </p>

    <div class="code">
      <pre><code>
A
B
C
      </code></pre>
    </div>

    <p>
      Now a new item is inserted at the beginning:
    </p>

    <div class="code">
      <pre><code>
X
A
B
C
      </code></pre>
    </div>

    <p>
      React needs to understand which items are the same items as
      before and which one is new.
    </p>

    <p>
      Keys provide that identity.
    </p>

    <div class="code">
      <pre><code>
key="A"
key="B"
key="C"
      </code></pre>
    </div>

    <p>
      When <code>X</code> is added, React can recognize that
      <code>A</code>, <code>B</code>, and <code>C</code> are still
      the same list items.
    </p>

    <div class="info-box">
      <strong>Important:</strong>
      <p>
        A key is not mainly about making React's rendering
        "faster". Its main job is to give list items stable identity
        so React can correctly match items between renders.
      </p>
    </div>

    <h2>21. Good Keys</h2>

    <p>
      The best key is usually a stable, unique identifier that
      belongs to the data.
    </p>

    <div class="code">
      <pre><code>
// UserList.jsx

function UserList() {
  const users = [
    { id: 101, name: "Dev" },
    { id: 102, name: "Rahul" },
    { id: 103, name: "Amit" }
  ];

  return (
    &lt;ul&gt;
      {users.map((user) =&gt; (
        &lt;li key={user.id}&gt;
          {user.name}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default UserList;
      </code></pre>
    </div>

    <p>
      Here the IDs are good keys because they identify the users
      independently of their position in the array.
    </p>

    <h2>22. Bad Keys</h2>

    <p>
      A bad key is one that can change when the list changes.
    </p>

    <p>
      For example, using a random value:
    </p>

    <div class="code">
      <pre><code>
key={Math.random()}
      </code></pre>
    </div>

    <p>
      This is a bad idea because a new random value can be generated
      on every render.
    </p>

    <p>
      React can then think that the old item and new item are
      completely different items.
    </p>

    <h2>23. Index as Key</h2>

    <p>
      You may also see code like this:
    </p>

    <div class="code">
      <pre><code>
{users.map((user, index) =&gt; (
  &lt;li key={index}&gt;
    {user.name}
  &lt;/li&gt;
))}
      </code></pre>
    </div>

    <p>
      Using the array index as a key is not automatically wrong.
      It can be acceptable when the list is static and items never
      move, get inserted, deleted, or reordered.
    </p>

    <p>
      But it becomes risky for dynamic lists.
    </p>

    <h2>24. Why Index Keys Can Cause Problems</h2>

    <p>
      Imagine the list:
    </p>

    <div class="code">
      <pre><code>
Index 0 → A
Index 1 → B
Index 2 → C
      </code></pre>
    </div>

    <p>
      Now insert a new item at the beginning:
    </p>

    <div class="code">
      <pre><code>
Index 0 → X
Index 1 → A
Index 2 → B
Index 3 → C
      </code></pre>
    </div>

    <p>
      The indexes have changed even though A, B, and C are the same
      logical items.
    </p>

    <p>
      This can cause incorrect component state or DOM behavior in
      lists containing interactive elements.
    </p>

    <p>
      For example, imagine each list item contains an input field.
      If items are reordered while using indexes as keys, React may
      associate an existing input's state with the wrong item.
    </p>

    <h2>25. Key Performance</h2>

    <p>
      Keys help React match old list items with new list items.
      This makes updates more predictable and can reduce unnecessary
      work when the list changes.
    </p>

    <p>
      But don't think of keys as a general performance optimization
      switch.
    </p>

    <p>
      The important rule is:
    </p>

    <div class="code">
      <pre><code>
Use a stable key that identifies the item.
      </code></pre>
    </div>

    <p>
      Good:
    </p>

    <div class="code">
      <pre><code>
&lt;User key={user.id} /&gt;
      </code></pre>
    </div>

    <p>
      Usually bad:
    </p>

    <div class="code">
      <pre><code>
&lt;User key={Math.random()} /&gt;
      </code></pre>
    </div>

    <p>
      Sometimes acceptable:
    </p>

    <div class="code">
      <pre><code>
&lt;User key={index} /&gt;
      </code></pre>
    </div>

    <p>
      The index version is only a reasonable choice when the list
      is stable and its order and membership do not change.
    </p>

    <h2>26. Rendering Flow</h2>

    <p>
      Let's connect everything we learned.
    </p>

    <div class="code">
      <pre><code>
Component
    ↓
returns JSX
    ↓
JavaScript expressions are evaluated
    ↓
conditions decide what appears
    ↓
arrays are converted into elements
    ↓
keys identify list items
    ↓
React compares the current result
with the previous result
    ↓
React updates the necessary DOM
    ↓
Browser shows the updated UI
      </code></pre>
    </div>

    <h2>27. Real Example: Product List</h2>

    <p>
      Here is a small example that combines variables, filtering,
      conditional rendering, mapping, and keys.
    </p>

    <div class="code">
      <pre><code>
// ProductList.jsx

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      inStock: true
    },
    {
      id: 2,
      name: "Mouse",
      price: 1000,
      inStock: false
    },
    {
      id: 3,
      name: "Keyboard",
      price: 2000,
      inStock: true
    }
  ];

  const availableProducts = products.filter(
    (product) =&gt; product.inStock
  );

  if (availableProducts.length === 0) {
    return &lt;p&gt;No products available.&lt;/p&gt;;
  }

  return (
    &lt;div&gt;
      &lt;h2&gt;Available Products&lt;/h2&gt;

      &lt;ul&gt;
        {availableProducts.map((product) =&gt; (
          &lt;li key={product.id}&gt;
            {product.name} - ₹{product.price}
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default ProductList;
      </code></pre>
    </div>

    <p>
      The flow is:
    </p>

    <div class="code">
      <pre><code>
products
    ↓
filter()
    ↓
available products
    ↓
if no products
    ↓
return message

otherwise
    ↓
map()
    ↓
create list items
    ↓
key identifies each item
    ↓
React renders the list
      </code></pre>
    </div>

    <h2>28. Important Difference: Rendering vs DOM</h2>

    <p>
      Rendering does not mean that React simply creates the entire
      HTML page again every time.
    </p>

    <p>
      React calculates what the UI should look like based on the
      current component result and then updates the DOM as needed.
    </p>

    <p>
      This is why concepts such as rendering, reconciliation,
      component identity, and keys become important when learning
      React more deeply.
    </p>

    <p>
      We will explore the internal details of this process later
      when we study React internals.
    </p>

    <h2>Common Mistakes</h2>

    <h3>Rendering an object directly</h3>

    <div class="code">
      <pre><code>
&lt;p&gt;{user}&lt;/p&gt;
      </code></pre>
    </div>

    <p>
      Render the required property instead:
    </p>

    <div class="code">
      <pre><code>
&lt;p&gt;{user.name}&lt;/p&gt;
      </code></pre>
    </div>

    <h3>Forgetting keys</h3>

    <div class="code">
      <pre><code>
{users.map((user) =&gt; (
  &lt;li&gt;{user.name}&lt;/li&gt;
))}
      </code></pre>
    </div>

    <p>
      Add a stable key:
    </p>

    <div class="code">
      <pre><code>
{users.map((user) =&gt; (
  &lt;li key={user.id}&gt;
    {user.name}
  &lt;/li&gt;
))}
      </code></pre>
    </div>

    <h3>Using random keys</h3>

    <div class="code">
      <pre><code>
key={Math.random()}
      </code></pre>
    </div>

    <p>
      Avoid this because the key changes between renders.
    </p>

    <h3>Using index for a changing list</h3>

    <p>
      If items can be inserted, removed, or reordered, prefer a
      stable ID from the data.
    </p>
  `,
  },
  {
    title: "Props",
    content: `
    <h1>Props in React</h1>

    <p>
      Props are one of the most important concepts in React.
      They allow one component to send information to another component.
    </p>

    <p>
      The most common direction is:
    </p>

    <div class="code">
      <pre><code>
Parent Component
       ↓
      Props
       ↓
Child Component
      </code></pre>
    </div>

    <p>
      You can think of props like information given to a component
      when you use it.
    </p>

    <div class="info-box">
      <strong>Simple idea:</strong>
      <p>
        Props allow a component to receive data from the component
        that renders it.
      </p>
    </div>

    <h2>1. What are Props?</h2>

    <p>
      The word <strong>props</strong> is short for
      <strong>properties</strong>.
    </p>

    <p>
      Let's create a simple component.
    </p>

    <div class="code">
      <pre><code>
// User.jsx

function User() {
  return (
    &lt;h2&gt;Dev&lt;/h2&gt;
  );
}

export default User;
      </code></pre>
    </div>

    <p>
      This component always displays "Dev".
    </p>

    <p>
      What if we want to reuse the same component for different
      users?
    </p>

    <div class="code">
      <pre><code>
&lt;User /&gt;
&lt;User /&gt;
&lt;User /&gt;
      </code></pre>
    </div>

    <p>
      We need a way to give each component different information.
      This is where props come in.
    </p>

    <h2>2. Why Props?</h2>

    <p>
      Props make components reusable.
    </p>

    <p>
      Instead of creating three different components:
    </p>

    <div class="code">
      <pre><code>
DevCard
RahulCard
AmitCard
      </code></pre>
    </div>

    <p>
      we can create one reusable component:
    </p>

    <div class="code">
      <pre><code>
UserCard
      </code></pre>
    </div>

    <p>
      and give it different data.
    </p>

    <div class="code">
      <pre><code>
&lt;UserCard name="Dev" /&gt;
&lt;UserCard name="Rahul" /&gt;
&lt;UserCard name="Amit" /&gt;
      </code></pre>
    </div>

    <p>
      The same component can now display different users.
    </p>

    <h2>3. Passing Props</h2>

    <p>
      We pass props when using a component.
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import User from "./User";

function App() {
  return (
    &lt;div&gt;
      &lt;User name="Dev" /&gt;
      &lt;User name="Rahul" /&gt;
    &lt;/div&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      Here <code>name</code> is a prop.
    </p>

    <div class="code">
      <pre><code>
&lt;User name="Dev" /&gt;
       ↑
     prop
      </code></pre>
    </div>

    <p>
      We can pass more than one prop.
    </p>

    <div class="code">
      <pre><code>
&lt;User
  name="Dev"
  age={28}
  role="Frontend Developer"
/&gt;
      </code></pre>
    </div>

    <h2>4. Receiving Props</h2>

    <p>
      The child component receives props as an object.
    </p>

    <div class="code">
      <pre><code>
// User.jsx

function User(props) {
  return (
    &lt;div&gt;
      &lt;h2&gt;{props.name}&lt;/h2&gt;
      &lt;p&gt;Age: {props.age}&lt;/p&gt;
      &lt;p&gt;Role: {props.role}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default User;
      </code></pre>
    </div>

    <p>
      If the parent sends:
    </p>

    <div class="code">
      <pre><code>
&lt;User
  name="Dev"
  age={28}
  role="Frontend Developer"
/&gt;
      </code></pre>
    </div>

    <p>
      React makes those values available inside the
      <code>props</code> object.
    </p>

    <div class="code">
      <pre><code>
props = {
  name: "Dev",
  age: 28,
  role: "Frontend Developer"
}
      </code></pre>
    </div>

    <h2>5. Props Destructuring</h2>

    <p>
      Instead of writing <code>props.name</code>,
      <code>props.age</code>, and so on, we can destructure the props.
    </p>

    <div class="code">
      <pre><code>
// User.jsx

function User({ name, age, role }) {
  return (
    &lt;div&gt;
      &lt;h2&gt;{name}&lt;/h2&gt;
      &lt;p&gt;Age: {age}&lt;/p&gt;
      &lt;p&gt;Role: {role}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default User;
      </code></pre>
    </div>

    <p>
      This is just JavaScript destructuring.
    </p>

    <p>
      Instead of:
    </p>

    <div class="code">
      <pre><code>
props.name
props.age
props.role
      </code></pre>
    </div>

    <p>
      we get:
    </p>

    <div class="code">
      <pre><code>
name
age
role
      </code></pre>
    </div>

    <h2>6. Passing Different Types of Props</h2>

    <p>
      Props are not limited to strings.
      We can pass numbers, booleans, objects, arrays, functions,
      JSX, and even components.
    </p>

    <h3>String</h3>

    <div class="code">
      <pre><code>
&lt;User name="Dev" /&gt;
      </code></pre>
    </div>

    <h3>Number</h3>

    <div class="code">
      <pre><code>
&lt;User age={28} /&gt;
      </code></pre>
    </div>

    <h3>Boolean</h3>

    <div class="code">
      <pre><code>
&lt;User isAdmin={true} /&gt;
      </code></pre>
    </div>

    <h3>Expression</h3>

    <div class="code">
      <pre><code>
&lt;User age={20 + 8} /&gt;
      </code></pre>
    </div>

    <h2>7. Default Props</h2>

    <p>
      Sometimes a component may not receive a particular prop.
      We can provide a default value.
    </p>

    <div class="code">
      <pre><code>
// User.jsx

function User({
  name = "Guest",
  role = "User"
}) {
  return (
    &lt;div&gt;
      &lt;h2&gt;{name}&lt;/h2&gt;
      &lt;p&gt;Role: {role}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default User;
      </code></pre>
    </div>

    <p>
      Now this:
    </p>

    <div class="code">
      <pre><code>
&lt;User /&gt;
      </code></pre>
    </div>

    <p>
      will use:
    </p>

    <div class="code">
      <pre><code>
name = "Guest"
role = "User"
      </code></pre>
    </div>

    <p>
      But if we provide a value:
    </p>

    <div class="code">
      <pre><code>
&lt;User
  name="Dev"
  role="Developer"
/&gt;
      </code></pre>
    </div>

    <p>
      the provided values are used instead.
    </p>

    <div class="info-box">
      <strong>Important:</strong>
      <p>
        In modern function components, default parameter values
        are the normal way to provide defaults.
      </p>
    </div>

    <h2>8. children Prop</h2>

    <p>
      One special prop deserves extra attention:
      <code>children</code>.
    </p>

    <p>
      Consider this:
    </p>

    <div class="code">
      <pre><code>
&lt;Button&gt;
  Save
&lt;/Button&gt;
      </code></pre>
    </div>

    <p>
      The content between the opening and closing tags is passed
      to the component through the <code>children</code> prop.
    </p>

    <div class="code">
      <pre><code>
// Button.jsx

function Button({ children }) {
  return (
    &lt;button&gt;
      {children}
    &lt;/button&gt;
  );
}

export default Button;
      </code></pre>
    </div>

    <p>
      Now we can reuse it with different content.
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import Button from "./Button";

function App() {
  return (
    &lt;div&gt;
      &lt;Button&gt;Save&lt;/Button&gt;
      &lt;Button&gt;Delete&lt;/Button&gt;
      &lt;Button&gt;Cancel&lt;/Button&gt;
    &lt;/div&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      The flow is:
    </p>

    <div class="code">
      <pre><code>
&lt;Button&gt;Save&lt;/Button&gt;
          ↓
       children
          ↓
Button component
          ↓
{children}
          ↓
Save
      </code></pre>
    </div>

    <h2>9. Passing JSX as Props</h2>

    <p>
      Props can contain JSX too.
    </p>

    <div class="code">
      <pre><code>
// Card.jsx

function Card({ content }) {
  return (
    &lt;div&gt;
      {content}
    &lt;/div&gt;
  );
}

export default Card;
      </code></pre>
    </div>

    <p>
      The parent can pass JSX:
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import Card from "./Card";

function App() {
  return (
    &lt;Card
      content={
        &lt;div&gt;
          &lt;h2&gt;Hello Dev&lt;/h2&gt;
          &lt;p&gt;Welcome to React&lt;/p&gt;
        &lt;/div&gt;
      }
    /&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      The parent decides what JSX to send, while the child decides
      where to display it.
    </p>

    <h2>10. Passing JSX with children</h2>

    <p>
      The same idea is often easier with <code>children</code>.
    </p>

    <div class="code">
      <pre><code>
// Card.jsx

function Card({ children }) {
  return (
    &lt;div&gt;
      {children}
    &lt;/div&gt;
  );
}

export default Card;
      </code></pre>
    </div>

    <p>
      Then:
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import Card from "./Card";

function App() {
  return (
    &lt;Card&gt;
      &lt;h2&gt;Profile&lt;/h2&gt;
      &lt;p&gt;Frontend Developer&lt;/p&gt;
    &lt;/Card&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      This is a common form of component composition.
    </p>

    <h2>11. Passing Components</h2>

    <p>
      A component itself can also be passed as a prop.
    </p>

    <p>
      For example, suppose we have:
    </p>

    <div class="code">
      <pre><code>
// Welcome.jsx

function Welcome() {
  return &lt;h2&gt;Welcome to the website&lt;/h2&gt;;
}

export default Welcome;
      </code></pre>
    </div>

    <p>
      Another component can receive it:
    </p>

    <div class="code">
      <pre><code>
// Layout.jsx

function Layout({ Header }) {
  return (
    &lt;div&gt;
      &lt;Header /&gt;

      &lt;main&gt;
        Main content
      &lt;/main&gt;
    &lt;/div&gt;
  );
}

export default Layout;
      </code></pre>
    </div>

    <p>
      And use it like:
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import Layout from "./Layout";
import Welcome from "./Welcome";

function App() {
  return (
    &lt;Layout Header={Welcome} /&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      Here <code>Welcome</code> is passed as a component value.
    </p>

    <div class="info-box">
      <strong>Important:</strong>
      <p>
        There is a difference between passing a component and
        passing an already created JSX element.
      </p>

      <p>
        Component:
        <code>Header={Welcome}</code>
      </p>

      <p>
        JSX element:
        <code>header={&lt;Welcome /&gt;}</code>
      </p>
    </div>

    <h2>12. Passing Functions</h2>

    <p>
      Functions can be passed through props.
      This is extremely common in React.
    </p>

    <p>
      For example, a parent can give a child a function that should
      run when a button is clicked.
    </p>

    <div class="code">
      <pre><code>
// Button.jsx

function Button({ onClick }) {
  return (
    &lt;button onClick={onClick}&gt;
      Click Me
    &lt;/button&gt;
  );
}

export default Button;
      </code></pre>
    </div>

    <p>
      The parent provides the function:
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import Button from "./Button";

function App() {
  function handleClick() {
    alert("Button clicked");
  }

  return (
    &lt;Button onClick={handleClick} /&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      The flow is:
    </p>

    <div class="code">
      <pre><code>
Parent
  ↓
passes function
  ↓
Child
  ↓
button is clicked
  ↓
child calls function
  ↓
parent's function runs
      </code></pre>
    </div>

    <p>
      This is one of the ways a child can communicate an event back
      to a parent.
    </p>

    <h2>13. Passing Functions with Arguments</h2>

    <p>
      Sometimes the child needs to tell the parent which item was
      clicked.
    </p>

    <div class="code">
      <pre><code>
// UserList.jsx

function UserList({ onUserSelect }) {
  const users = [
    { id: 1, name: "Dev" },
    { id: 2, name: "Rahul" }
  ];

  return (
    &lt;ul&gt;
      {users.map((user) =&gt; (
        &lt;li key={user.id}&gt;
          &lt;button
            onClick={() =&gt; onUserSelect(user)}
          &gt;
            {user.name}
          &lt;/button&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default UserList;
      </code></pre>
    </div>

    <p>
      The parent receives the selected user.
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import UserList from "./UserList";

function App() {
  function handleUserSelect(user) {
    console.log(user);
  }

  return (
    &lt;UserList
      onUserSelect={handleUserSelect}
    /&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <h2>14. Passing Objects</h2>

    <p>
      Objects can be passed as props.
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import UserCard from "./UserCard";

function App() {
  const user = {
    name: "Dev",
    age: 28,
    role: "Frontend Developer"
  };

  return (
    &lt;UserCard user={user} /&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      The child receives the object:
    </p>

    <div class="code">
      <pre><code>
// UserCard.jsx

function UserCard({ user }) {
  return (
    &lt;div&gt;
      &lt;h2&gt;{user.name}&lt;/h2&gt;
      &lt;p&gt;Age: {user.age}&lt;/p&gt;
      &lt;p&gt;Role: {user.role}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default UserCard;
      </code></pre>
    </div>

    <p>
      This is useful when several related values belong to one
      object.
    </p>

    <h2>15. Passing Arrays</h2>

    <p>
      Arrays can also be passed through props.
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import SkillList from "./SkillList";

function App() {
  const skills = [
    "React",
    "JavaScript",
    "CSS"
  ];

  return (
    &lt;SkillList skills={skills} /&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      The child can use the array:
    </p>

    <div class="code">
      <pre><code>
// SkillList.jsx

function SkillList({ skills }) {
  return (
    &lt;ul&gt;
      {skills.map((skill) =&gt; (
        &lt;li key={skill}&gt;
          {skill}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default SkillList;
      </code></pre>
    </div>

    <h2>16. Props Are Read-Only</h2>

    <p>
      A child should not directly change the props it receives.
    </p>

    <p>
      For example, this is wrong:
    </p>

    <div class="code">
      <pre><code>
// User.jsx

function User({ name }) {
  name = "Rahul";

  return &lt;h2&gt;{name}&lt;/h2&gt;;
}

export default User;
      </code></pre>
    </div>

    <p>
      The component should treat its props as read-only input.
    </p>

    <div class="info-box">
      <strong>Think of props like function arguments.</strong>
      <p>
        If you call a function with a value, the function should not
        treat that argument as something it owns and changes for the
        caller.
      </p>
    </div>

    <h2>17. Props Immutability</h2>

    <p>
      Props are considered immutable from the receiving component's
      point of view.
    </p>

    <p>
      If a parent passes:
    </p>

    <div class="code">
      <pre><code>
&lt;User name="Dev" /&gt;
      </code></pre>
    </div>

    <p>
      the child should not try to change that prop.
    </p>

    <p>
      If the value needs to change, the parent normally owns that
      changing data in state and passes the current value down.
    </p>

    <div class="code">
      <pre><code>
// App.jsx

import { useState } from "react";
import User from "./User";

function App() {
  const [name, setName] = useState("Dev");

  return (
    &lt;div&gt;
      &lt;User name={name} /&gt;

      &lt;button onClick={() =&gt; setName("Rahul")}&gt;
        Change Name
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <p>
      Here the parent owns the changing value.
    </p>

    <div class="code">
      <pre><code>
App
 ↓
name = "Dev"
 ↓
User receives name
 ↓
button clicked
 ↓
setName("Rahul")
 ↓
App renders again
 ↓
User receives "Rahul"
      </code></pre>
    </div>

    <h2>18. Props vs State</h2>

    <p>
      Props and state are related, but they have different jobs.
    </p>

    <table style="width:100%; border-collapse:collapse; margin-top:20px; text-align:center;">
      <thead>
        <tr>
          <th style="border:1px solid #ccc; padding:12px;">Props</th>
          <th style="border:1px solid #ccc; padding:12px;">State</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style="border:1px solid #ccc; padding:12px;">
            Received from outside
          </td>
          <td style="border:1px solid #ccc; padding:12px;">
            Managed by the component
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:12px;">
            Read-only for the receiver
          </td>
          <td style="border:1px solid #ccc; padding:12px;">
            Can change through its update mechanism
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:12px;">
            Used to pass information
          </td>
          <td style="border:1px solid #ccc; padding:12px;">
            Used for changing data
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:12px;">
            Parent can provide it
          </td>
          <td style="border:1px solid #ccc; padding:12px;">
            Component owns it
          </td>
        </tr>
      </tbody>
    </table>

    <h2 style="margin-top:15px;">19. Props Drilling</h2>

    <p>
      <strong>Props drilling</strong> happens when data needs to
      travel through several components just to reach a deeply
      nested component.
    </p>

    <p>
      Imagine this structure:
    </p>

    <div class="code">
      <pre><code>
App
 ↓
Layout
 ↓
Sidebar
 ↓
UserProfile
      </code></pre>
    </div>

    <p>
      Suppose <code>App</code> has the user information, but
      <code>UserProfile</code> needs it.
    </p>

    <p>
      We may have to pass it through every component:
    </p>

    <div class="code">
      <pre><code>
// App.jsx

function App() {
  const user = {
    name: "Dev"
  };

  return (
    &lt;Layout user={user} /&gt;
  );
}

export default App;
      </code></pre>
    </div>

    <div class="code">
      <pre><code>
// Layout.jsx

import Sidebar from "./Sidebar";

function Layout({ user }) {
  return (
    &lt;Sidebar user={user} /&gt;
  );
}

export default Layout;
      </code></pre>
    </div>

    <div class="code">
      <pre><code>
// Sidebar.jsx

import UserProfile from "./UserProfile";

function Sidebar({ user }) {
  return (
    &lt;UserProfile user={user} /&gt;
  );
}

export default Sidebar;
      </code></pre>
    </div>

    <div class="code">
      <pre><code>
// UserProfile.jsx

function UserProfile({ user }) {
  return (
    &lt;h2&gt;{user.name}&lt;/h2&gt;
  );
}

export default UserProfile;
      </code></pre>
    </div>

    <p>
      Notice what happened.
    </p>

    <div class="code">
      <pre><code>
App
 ↓ user
Layout
 ↓ user
Sidebar
 ↓ user
UserProfile
      </code></pre>
    </div>

    <p>
      <code>Layout</code> and <code>Sidebar</code> don't actually
      need the user data themselves. They are only passing it along.
    </p>

    <p>
      This is props drilling.
    </p>

    <h2>20. Why Props Drilling Can Become a Problem</h2>

    <p>
      A small amount of prop passing is completely normal.
      The problem appears when the same data has to travel through
      many unrelated components.
    </p>

    <p>
      For example:
    </p>

    <div class="code">
      <pre><code>
App
 ↓
A
 ↓
B
 ↓
C
 ↓
D
 ↓
E
 ↓
UserProfile
      </code></pre>
    </div>

    <p>
      If every component only passes <code>user</code> to the next
      component, the code becomes harder to maintain.
    </p>

    <p>
      Later, React's <strong>Context API</strong> and other state
      management techniques can help with situations like this.
    </p>

    <h2>21. Props Drilling Is Not Always Bad</h2>

    <p>
      Don't assume that passing props through a few components is
      automatically a problem.
    </p>

    <p>
      This is perfectly normal:
    </p>

    <div class="code">
      <pre><code>
App
 ↓
UserCard
 ↓
UserName
      </code></pre>
    </div>

    <p>
      If <code>UserName</code> needs the user's name, passing the
      prop directly is simple and clear.
    </p>

    <p>
      The problem is mainly unnecessary prop passing through many
      layers.
    </p>

    <h2>22. Data Flow with Props</h2>

    <p>
      React normally follows a one-way data flow.
    </p>

    <div class="code">
      <pre><code>
Parent
   ↓
Props
   ↓
Child
   ↓
Grandchild
      </code></pre>
    </div>

    <p>
      Data generally flows down the component tree.
    </p>

    <p>
      If a child needs to cause something to happen in the parent,
      the parent can pass a function down as a prop.
    </p>

    <div class="code">
      <pre><code>
Parent
   ↓
function prop
   ↓
Child
   ↓
calls function
   ↓
Parent's logic runs
      </code></pre>
    </div>
  `,
  },
  {
    title: "React Events",
    content: `
    <h1>React Events</h1>

    <p>
      Events are actions that happen in the browser.
      For example, a user can click a button, type something,
      submit a form, move the mouse, or press a keyboard key.
    </p>

    <p>
      React allows us to listen for these actions and run JavaScript
      when they happen.
    </p>

    <p>
      The basic idea is:
    </p>

    <div class="code">
      <pre><code>
User does something
        ↓
Browser creates an event
        ↓
React receives the event
        ↓
React runs our function
        ↓
UI or data can change
      </code></pre>
    </div>

    <h2>1. Event Handling</h2>

    <p>
      Event handling means telling React what should happen when
      an event occurs.
    </p>

    <p>
      For example, when a user clicks a button, we can run a function.
    </p>

    <div class="code">
      <pre><code>
// Button.jsx

function Button() {

  function handleClick() {
    alert("Button clicked");
  }

  return (
    &lt;button onClick={handleClick}&gt;
      Click Me
    &lt;/button&gt;
  );
}

export default Button;
      </code></pre>
    </div>

    <p>
      Here <code>onClick</code> tells React to listen for a click.
    </p>

    <p>
      When the button is clicked, React calls
      <code>handleClick</code>.
    </p>

    <div class="code">
      <pre><code>
User clicks button
        ↓
onClick
        ↓
handleClick()
        ↓
alert()
      </code></pre>
    </div>

    <h2>2. Passing a Function to an Event</h2>

    <p>
      We normally pass the function itself to an event handler.
    </p>

    <div class="code">
      <pre><code>
&lt;button onClick={handleClick}&gt;
  Click
&lt;/button&gt;
      </code></pre>
    </div>

    <p>
      Do not call the function while rendering.
    </p>

    <div class="code">
      <pre><code>
// Wrong

&lt;button onClick={handleClick()}&gt;
  Click
&lt;/button&gt;
      </code></pre>
    </div>

    <p>
      <code>handleClick()</code> means "run the function now".
    </p>

    <p>
      <code>handleClick</code> means "give React this function so
      React can run it when the event happens".
    </p>

    <h2>3. Inline Event Handler</h2>

    <p>
      You can also write the function directly inside the event.
    </p>

    <div class="code">
      <pre><code>
// Button.jsx

function Button() {
  return (
    &lt;button
      onClick={() =&gt; alert("Hello")}
    &gt;
      Click Me
    &lt;/button&gt;
  );
}

export default Button;
      </code></pre>
    </div>

    <p>
      This is useful for small pieces of logic.
      For larger logic, a separate function is usually easier to read.
    </p>

    <h2>4. Event Object</h2>

    <p>
      React gives the event handler an event object.
    </p>

    <div class="code">
      <pre><code>
// Button.jsx

function Button() {

  function handleClick(event) {
    console.log(event);
  }

  return (
    &lt;button onClick={handleClick}&gt;
      Click Me
    &lt;/button&gt;
  );
}

export default Button;
      </code></pre>
    </div>

    <p>
      The event object contains information about the event,
      such as which element triggered it and what type of event occurred.
    </p>

    <h2>5. Synthetic Events</h2>

    <p>
  When you click a button, type in an input, or submit a form,
  the browser creates an event.
</p>

<p>
  React handles these events through its own event system.
  React gives your event handler an event object called
  <strong>SyntheticEvent</strong>.
</p>

<h3>Why does React use Synthetic Events?</h3>

<p>
  Different browsers can sometimes handle browser events differently.
  React wanted developers to work with events in a more consistent way.
</p>

<p>
  So instead of making you worry about those browser differences,
  React provides a common event object and API.
</p>

<p>
  This means you can write your event code in the same React way
  without worrying about which browser the user is using.
</p>

<h3>Simple Example</h3>

<div class="code">
  <pre><code>
// Button.jsx

function Button() {

  function handleClick(event) {
    console.log(event);
  }

  return (
    &lt;button onClick={handleClick}&gt;
      Click Me
    &lt;/button&gt;
  );
}

export default Button;
  </code></pre>
</div>

<p>
  When you click the button, React calls
  <code>handleClick</code> and gives it the event object.
</p>

<div class="code">
  <pre><code>
User clicks button
        ↓
Browser creates an event
        ↓
React receives the event
        ↓
React calls handleClick()
        ↓
event object is available
  </code></pre>
</div>

<h3>What can we get from the event?</h3>

<p>
  The event object contains useful information about what happened.
</p>

<div class="code">
  <pre><code>
// Button.jsx

function Button() {

  function handleClick(event) {
    console.log(event.type);
    console.log(event.target);
  }

  return (
    &lt;button onClick={handleClick}&gt;
      Click Me
    &lt;/button&gt;
  );
}

export default Button;
  </code></pre>
</div>

<p>
  <code>event.type</code> tells us what type of event happened.
  In this example, it will be <code>"click"</code>.
</p>

<p>
  <code>event.target</code> tells us which element caused the event.
  Here, it will be the button.
</p>

<h3>Example with an Input</h3>

<div class="code">
  <pre><code>
// Input.jsx

function Input() {

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    &lt;input
      onChange={handleChange}
      placeholder="Enter your name"
    /&gt;
  );
}

export default Input;
  </code></pre>
</div>

<p>
  When the user types something, React calls
  <code>handleChange</code>.
</p>

<p>
  We can then use <code>event.target.value</code> to get
  whatever the user has typed.
</p>

<div class="code">
  <pre><code>
User types "Dev"
       ↓
onChange
       ↓
handleChange(event)
       ↓
event.target.value
       ↓
"Dev"
  </code></pre>
</div>

<h3>Is SyntheticEvent a completely different event?</h3>

<p>
  You can think of it as React's event object that gives your
  event handler a consistent way to work with the event.
</p>

<p>
  It still gives you familiar things such as
  <code>target</code>, <code>currentTarget</code>,
  <code>type</code>, <code>preventDefault()</code>, and
  <code>stopPropagation()</code>.
</p>

<h3>One important point</h3>

<p>
  In modern React, you normally don't need to do anything special
  because of SyntheticEvent.
</p>

<p>
  Just write your event handler normally:
</p>

<div class="code">
  <pre><code>
function handleClick(event) {
  console.log(event);
}
  </code></pre>
</div>

<p>
  React takes care of its event system for you.
</p>

    <h2>6. Mouse Events</h2>

    <p>
      Mouse events happen when the user interacts with the mouse.
    </p>

    <p>
      Some common mouse events are:
    </p>

    <div class="code">
      <pre><code>
onClick
onDoubleClick
onMouseDown
onMouseUp
onMouseMove
onMouseEnter
onMouseLeave
onMouseOver
onMouseOut
      </code></pre>
    </div>

    <h3>onClick</h3>

    <div class="code">
      <pre><code>
// MouseEvents.jsx

function MouseEvents() {

  function handleClick() {
    console.log("Clicked");
  }

  return (
    &lt;button onClick={handleClick}&gt;
      Click
    &lt;/button&gt;
  );
}

export default MouseEvents;
      </code></pre>
    </div>

    <h3>onDoubleClick</h3>

    <div class="code">
      <pre><code>
// DoubleClick.jsx

function DoubleClick() {

  function handleDoubleClick() {
    console.log("Double clicked");
  }

  return (
    &lt;button onDoubleClick={handleDoubleClick}&gt;
      Double Click
    &lt;/button&gt;
  );
}

export default DoubleClick;
      </code></pre>
    </div>

    <h3>onMouseEnter</h3>

    <div class="code">
      <pre><code>
// MouseEnter.jsx

function MouseEnter() {

  function handleMouseEnter() {
    console.log("Mouse entered");
  }

  return (
    &lt;div onMouseEnter={handleMouseEnter}&gt;
      Move your mouse here
    &lt;/div&gt;
  );
}

export default MouseEnter;
      </code></pre>
    </div>

    <h3>onMouseLeave</h3>

    <div class="code">
      <pre><code>
// MouseLeave.jsx

function MouseLeave() {

  function handleMouseLeave() {
    console.log("Mouse left");
  }

  return (
    &lt;div onMouseLeave={handleMouseLeave}&gt;
      Move your mouse away
    &lt;/div&gt;
  );
}

export default MouseLeave;
      </code></pre>
    </div>

    <h2>7. Keyboard Events</h2>

    <p>
      Keyboard events happen when the user presses or releases keys.
    </p>

    <p>
      Common keyboard events are:
    </p>

    <div class="code">
      <pre><code>
onKeyDown
onKeyUp
      </code></pre>
    </div>

    <h3>onKeyDown</h3>

    <div class="code">
      <pre><code>
// Keyboard.jsx

function Keyboard() {

  function handleKeyDown(event) {
    console.log("Key:", event.key);
  }

  return (
    &lt;input
      onKeyDown={handleKeyDown}
      placeholder="Type something"
    /&gt;
  );
}

export default Keyboard;
      </code></pre>
    </div>

    <p>
      If you press the A key, <code>event.key</code> will contain
      <code>"a"</code>.
    </p>

    <h3>Detecting Enter</h3>

    <div class="code">
      <pre><code>
// SearchBox.jsx

function SearchBox() {

  function handleKeyDown(event) {

    if (event.key === "Enter") {
      console.log("Search");
    }

  }

  return (
    &lt;input
      onKeyDown={handleKeyDown}
      placeholder="Search"
    /&gt;
  );
}

export default SearchBox;
      </code></pre>
    </div>

    <h2>8. Focus Events</h2>

    <p>
      Focus events are useful when working with inputs and forms.
    </p>

    <p>
      Common focus events are:
    </p>

    <div class="code">
      <pre><code>
onFocus
onBlur
      </code></pre>
    </div>

    <h3>onFocus</h3>

    <div class="code">
      <pre><code>
// FocusInput.jsx

function FocusInput() {

  function handleFocus() {
    console.log("Input focused");
  }

  return (
    &lt;input
      onFocus={handleFocus}
      placeholder="Click here"
    /&gt;
  );
}

export default FocusInput;
      </code></pre>
    </div>

    <h3>onBlur</h3>

    <div class="code">
      <pre><code>
// BlurInput.jsx

function BlurInput() {

  function handleBlur() {
    console.log("Input lost focus");
  }

  return (
    &lt;input
      onBlur={handleBlur}
      placeholder="Click here"
    /&gt;
  );
}

export default BlurInput;
      </code></pre>
    </div>

    <p>
      The flow is simple:
    </p>

    <div class="code">
      <pre><code>
Click input
    ↓
onFocus

Click somewhere else
    ↓
onBlur
      </code></pre>
    </div>

    <h2>9. Form Events</h2>

    <p>
      React provides events for handling forms and form controls.
    </p>

    <p>
      Common examples include:
    </p>

    <div class="code">
      <pre><code>
onChange
onSubmit
onInput
onFocus
onBlur
      </code></pre>
    </div>

    <h3>onChange</h3>

    <p>
      In React, <code>onChange</code> is commonly used to detect
      changes in an input.
    </p>

    <div class="code">
      <pre><code>
// Input.jsx

function Input() {

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    &lt;input
      onChange={handleChange}
      placeholder="Enter your name"
    /&gt;
  );
}

export default Input;
      </code></pre>
    </div>

    <p>
      If the user types:
    </p>

    <div class="code">
      <pre><code>
D
De
Dev
Deve
Deven
      </code></pre>
    </div>

    <p>
      React can receive the updated value through
      <code>event.target.value</code>.
    </p>

    <h3>onSubmit</h3>

    <div class="code">
      <pre><code>
// LoginForm.jsx

function LoginForm() {

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted");
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;

      &lt;input
        type="email"
        placeholder="Email"
      /&gt;

      &lt;button type="submit"&gt;
        Login
      &lt;/button&gt;

    &lt;/form&gt;
  );
}

export default LoginForm;
      </code></pre>
    </div>

    <p>
      The form submission triggers <code>handleSubmit</code>.
    </p>

    <h2>10. Clipboard Events</h2>

    <p>
      Clipboard events happen when the user copies, cuts, or pastes
      content.
    </p>

    <p>
      Common clipboard events are:
    </p>

    <div class="code">
      <pre><code>
onCopy
onCut
onPaste
      </code></pre>
    </div>

    <h3>onCopy</h3>

    <div class="code">
      <pre><code>
// CopyText.jsx

function CopyText() {

  function handleCopy() {
    console.log("Text copied");
  }

  return (
    &lt;p onCopy={handleCopy}&gt;
      Select and copy this text.
    &lt;/p&gt;
  );
}

export default CopyText;
      </code></pre>
    </div>

    <h3>onPaste</h3>

    <div class="code">
      <pre><code>
// PasteInput.jsx

function PasteInput() {

  function handlePaste(event) {
    console.log("Something was pasted");
  }

  return (
    &lt;input
      onPaste={handlePaste}
      placeholder="Paste something"
    /&gt;
  );
}

export default PasteInput;
      </code></pre>
    </div>

    <h2>11. Pointer Events</h2>

    <p>
      Pointer events provide a common event model for mouse,
      touch, pen, and other pointing devices.
    </p>

    <p>
      Common pointer events include:
    </p>

    <div class="code">
      <pre><code>
onPointerDown
onPointerUp
onPointerMove
onPointerEnter
onPointerLeave
onPointerOver
onPointerOut
      </code></pre>
    </div>

    <p>
      For example:
    </p>

    <div class="code">
      <pre><code>
// PointerBox.jsx

function PointerBox() {

  function handlePointerDown(event) {
    console.log("Pointer down");
    console.log(event.pointerType);
  }

  return (
    &lt;div onPointerDown={handlePointerDown}&gt;
      Press here
    &lt;/div&gt;
  );
}

export default PointerBox;
      </code></pre>
    </div>

    <p>
      <code>event.pointerType</code> can tell you what type of
      pointer interaction occurred, such as mouse, touch, or pen.
    </p>

    <h2>12. Touch Events</h2>

    <p>
      Touch events are useful when working with touch screens.
    </p>

    <p>
      Common touch events are:
    </p>

    <div class="code">
      <pre><code>
onTouchStart
onTouchMove
onTouchEnd
      </code></pre>
    </div>

    <div class="code">
      <pre><code>
// TouchBox.jsx

function TouchBox() {

  function handleTouchStart() {
    console.log("Touch started");
  }

  return (
    &lt;div onTouchStart={handleTouchStart}&gt;
      Touch this area
    &lt;/div&gt;
  );
}

export default TouchBox;
      </code></pre>
    </div>

    <p>
      On modern applications, pointer events can often be useful
      when you want one event model for mouse, touch, and pen input.
    </p>

    <h2>13. Event Bubbling</h2>

    <p>
      Event bubbling means an event can move from the element where
      it happened toward its parent elements.
    </p>

    <p>
      Consider this structure:
    </p>

    <div class="code">
      <pre><code>
div
  ↓
button
      </code></pre>
    </div>

    <p>
      If the button is clicked, the click can first reach the button
      and then bubble to the parent.
    </p>

    <div class="code">
      <pre><code>
// Bubbling.jsx

function Bubbling() {

  function handleParentClick() {
    console.log("Parent clicked");
  }

  function handleButtonClick() {
    console.log("Button clicked");
  }

  return (
    &lt;div onClick={handleParentClick}&gt;

      &lt;button onClick={handleButtonClick}&gt;
        Click Me
      &lt;/button&gt;

    &lt;/div&gt;
  );
}

export default Bubbling;
      </code></pre>
    </div>

    <p>
      When the button is clicked, you can see:
    </p>

    <div class="code">
      <pre><code>
Button clicked
Parent clicked
      </code></pre>
    </div>

    <p>
      The event started at the button and then bubbled to the parent.
    </p>

    <h2>14. Event Capturing</h2>

    <p>
      Capturing is the opposite direction of bubbling.
    </p>

    <p>
      The event travels from the outer parent toward the target.
    </p>

    <div class="code">
      <pre><code>
Parent
  ↓
Child
  ↓
Button
      </code></pre>
    </div>

    <p>
      React supports capture handlers by adding
      <code>Capture</code> to the event name.
    </p>

    <div class="code">
      <pre><code>
// Capturing.jsx

function Capturing() {

  function handleParentCapture() {
    console.log("Parent capture");
  }

  function handleButtonClick() {
    console.log("Button click");
  }

  return (
    &lt;div onClickCapture={handleParentCapture}&gt;

      &lt;button onClick={handleButtonClick}&gt;
        Click Me
      &lt;/button&gt;

    &lt;/div&gt;
  );
}

export default Capturing;
      </code></pre>
    </div>

    <p>
      The capture handler runs while the event is traveling down
      toward the target.
    </p>

    <div class="code">
      <pre><code>
Click button
    ↓
Parent Capture
    ↓
Button Click
      </code></pre>
    </div>

    <h2>15. Bubbling vs Capturing</h2>

    <table style="width:100%; border-collapse:collapse; margin-top:20px; text-align:center;">
      <thead>
        <tr>
          <th style="border:1px solid #ccc; padding:12px;">Capturing</th>
          <th style="border:1px solid #ccc; padding:12px;">Bubbling</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style="border:1px solid #ccc; padding:12px;">
            Parent → Child
          </td>
          <td style="border:1px solid #ccc; padding:12px;">
            Child → Parent
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:12px;">
            Happens before the target handler
          </td>
          <td style="border:1px solid #ccc; padding:12px;">
            Happens after the target handler
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:12px;">
            onClickCapture
          </td>
          <td style="border:1px solid #ccc; padding:12px;">
            onClick
          </td>
        </tr>
      </tbody>
    </table>

    <h2>16. preventDefault()</h2>

    <p>
      Some browser actions have a default behavior.
      <code>preventDefault()</code> tells the browser not to perform
      that default action.
    </p>

    <p>
      A common example is a form.
      Normally, submitting a form can cause the browser to perform
      its normal form submission behavior.
    </p>

    <div class="code">
      <pre><code>
// Form.jsx

function Form() {

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submission handled by React");
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;

      &lt;input
        type="text"
        placeholder="Enter name"
      /&gt;

      &lt;button type="submit"&gt;
        Submit
      &lt;/button&gt;

    &lt;/form&gt;
  );
}

export default Form;
      </code></pre>
    </div>

    <p>
      The important part is:
    </p>

    <div class="code">
      <pre><code>
event.preventDefault();
      </code></pre>
    </div>

    <p>
      This prevents the browser's default action, while your React
      code can decide what should happen next.
    </p>

    <h2>17. preventDefault() vs stopPropagation()</h2>

    <p>
      These two methods solve different problems.
    </p>

    <table style="width:100%; border-collapse:collapse; margin-top:20px; text-align:center;">
      <thead>
        <tr>
          <th style="border:1px solid #ccc; padding:12px;">Method</th>
          <th style="border:1px solid #ccc; padding:12px;">Purpose</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style="border:1px solid #ccc; padding:12px;">
            preventDefault()
          </td>
          <td style="border:1px solid #ccc; padding:12px;">
            Stops the browser's default action
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:12px;">
            stopPropagation()
          </td>
          <td style="border:1px solid #ccc; padding:12px;">
            Stops the event from continuing through the event propagation path
          </td>
        </tr>
      </tbody>
    </table>

    <h2 style="margin-top:15px;">18. stopPropagation()</h2>

    <p>
      <code>stopPropagation()</code> stops the click from reaching the parent element.
    </p>

    <p>
      For example, suppose a button is inside a clickable card.
    </p>

    <div class="code">
      <pre><code>
// EventPropagation.jsx

function EventPropagation() {

  function handleCardClick() {
    console.log("Card clicked");
  }

  function handleButtonClick(event) {
    event.stopPropagation();

    console.log("Button clicked");
  }

  return (
    &lt;div onClick={handleCardClick}&gt;

      &lt;button onClick={handleButtonClick}&gt;
        Delete
      &lt;/button&gt;

    &lt;/div&gt;
  );
}

export default EventPropagation;
      </code></pre>
    </div>

    <p>
      Without <code>stopPropagation()</code>:
    </p>

    <div class="code">
      <pre><code>
Button clicked
Card clicked
      </code></pre>
    </div>

    <p>
      With <code>stopPropagation()</code>:
    </p>

    <div class="code">
      <pre><code>
Button clicked
      </code></pre>
    </div>

    <p>
      The click does not continue to the parent card handler.
    </p>

    <h2>19. preventDefault() and stopPropagation() Together</h2>

    <p>
      Sometimes you need both.
    </p>

    <div class="code">
      <pre><code>
// LinkButton.jsx

function LinkButton() {

  function handleClick(event) {

    event.preventDefault();
    event.stopPropagation();

    console.log("Custom action");
  }

  return (
    &lt;a href="/profile" onClick={handleClick}&gt;
      Open Profile
    &lt;/a&gt;
  );
}

export default LinkButton;
      </code></pre>
    </div>

    <p>
      Here:
    </p>

    <div class="code">
      <pre><code>
preventDefault()
        ↓
Stops the link's default navigation

stopPropagation()
        ↓
Stops the event from continuing through propagation
      </code></pre>
    </div>

    <h2>20. Event Target</h2>

    <p>
      <code>event.target</code> refers to the element where the event
      originated.
    </p>

    <div class="code">
      <pre><code>
// EventTarget.jsx

function EventTarget() {

  function handleClick(event) {
    console.log(event.target);
  }

  return (
    &lt;button onClick={handleClick}&gt;
      Click Me
    &lt;/button&gt;
  );
}

export default EventTarget;
      </code></pre>
    </div>

    <p>
      If the button is clicked, the target is the button.
    </p>

    <h2>21. Event Current Target</h2>

    <p>
      <code>event.currentTarget</code> refers to the element whose
      event handler is currently running.
    </p>

    <div class="code">
      <pre><code>
// CurrentTarget.jsx

function CurrentTarget() {

  function handleClick(event) {
    console.log("Target:", event.target);
    console.log("Current:", event.currentTarget);
  }

  return (
    &lt;div onClick={handleClick}&gt;

      &lt;button&gt;
        Click
      &lt;/button&gt;

    &lt;/div&gt;
  );
}

export default CurrentTarget;
      </code></pre>
    </div>

    <p>
      If you click the button:
    </p>

    <div class="code">
      <pre><code>
event.target
    ↓
button

event.currentTarget
    ↓
div
      </code></pre>
    </div>

    <p>
      This distinction becomes especially useful when working with
      event bubbling.
    </p>

    <h2>22. Passing Arguments to Event Handlers</h2>

    <p>
      Sometimes you want to pass your own value to a function.
    </p>

    <div class="code">
      <pre><code>
// UserButton.jsx

function UserButton() {

  function handleUserClick(name) {
    console.log(name);
  }

  return (
    &lt;button
      onClick={() =&gt; handleUserClick("Dev")}
    &gt;
      Select User
    &lt;/button&gt;
  );
}

export default UserButton;
      </code></pre>
    </div>

    <p>
      The arrow function is used because we want to call
      <code>handleUserClick</code> only after the click.
    </p>

    <h2>23. Event Handler with Event and Custom Argument</h2>

    <p>
      You can receive both your own value and the event object.
    </p>

    <div class="code">
      <pre><code>
// UserButton.jsx

function UserButton() {

  function handleClick(name, event) {
    console.log("User:", name);
    console.log("Event:", event);
  }

  return (
    &lt;button
      onClick={(event) =&gt;
        handleClick("Dev", event)
      }
    &gt;
      Select User
    &lt;/button&gt;
  );
}

export default UserButton;
      </code></pre>
    </div>

    <h2>24. Common Event Names in React</h2>

    <p>
      React uses camelCase event names.
    </p>

    <div class="code">
      <pre><code>
onClick
onDoubleClick

onMouseDown
onMouseUp
onMouseMove
onMouseEnter
onMouseLeave

onKeyDown
onKeyUp

onFocus
onBlur

onChange
onInput
onSubmit

onCopy
onCut
onPaste

onPointerDown
onPointerUp
onPointerMove

onTouchStart
onTouchMove
onTouchEnd
      </code></pre>
    </div>
  `,
  },
  {
    title: "State",
    content: `
      <h1>State</h1>

      <p>
        State is one of the most important ideas in React.
        If you understand state properly, many other React concepts
        become much easier to understand.
      </p>

      <p>
        State is what a component uses when it needs to remember
        something that can change while the application is running.
      </p>

      <p>
        For example, a component may need to remember:
      </p>

      <ul>
        <li>How many times a button was clicked.</li>
        <li>What the user typed into an input.</li>
        <li>Whether a menu is open or closed.</li>
        <li>Whether a user is logged in.</li>
        <li>Which tab is currently selected.</li>
        <li>Data received from an API.</li>
        <li>Items added to a shopping cart.</li>
      </ul>

      <h2 style="margin-top:15px;">1. What is State?</h2>

      <p>
        State is information that belongs to a component and can change
        over time.
      </p>

      <p>
        The important part is that when state changes, React can render
        the component again so the screen shows the new information.
      </p>

      <p>
        Think about a counter.
      </p>

      <div class="code">
  Count: 0 
      </div>

      <p>
        The user clicks a button.
      </p>

      <div class="code">
  Count: 1 
      </div>

      <p>
        The user clicks again.
      </p>

      <div class="code">
  Count: 2
      </div>

      <p>
        The number is changing, so the component needs somewhere
        to keep that value.
        That changing value is state.
      </p>

      <h2>2. Why Do We Need State?</h2>

      <p>
        You might first think that a normal JavaScript variable should
        be enough.
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  function Counter() {

    let count = 0;

    function handleClick() {
      count++;
      console.log(count);
    }

    return (
      &lt;div&gt;

        &lt;h2&gt;{count}&lt;/h2&gt;

        &lt;button onClick={handleClick}&gt;
          Increase
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        You can increase <code>count</code>, but the number shown
        on the screen does not update.
      </p>

      <p>
        Why?
      </p>

      <p>
        Because changing a normal JavaScript variable does not tell
        React that the component needs to render again.
      </p>

      <p>
        React needs a way to know:
      </p>

      <div class="code">
        <pre><code>
  "Something changed.
  Please render this component again."
        </code></pre>
      </div>

      <p>
        State provides that connection between changing data and
        React's rendering system.
      </p>

      <h2>3. Creating State with useState</h2>

      <p>
        React provides the <code>useState</code> Hook for creating
        state inside a function component.
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    return (
      &lt;div&gt;

        &lt;h2&gt;{count}&lt;/h2&gt;

        &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
          Increase
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        This line:
      </p>

      <div class="code"> 
  const [count, setCount] = useState(0); 
      </div>

      <p>
        creates a state value.
      </p>

      <p>
        <code>count</code> is the current value.
      </p>

      <p>
        <code>setCount</code> is the function we use to request
        a new value.
      </p>

      <p>
        <code>0</code> is the initial value.
      </p>

      <h2>4. How useState Works</h2>

      <p>
        You can think of it like this:
      </p>

      <div class="code">
        <pre><code>
  useState(0)

        ↓

  Current state
  count = 0

        ↓

  setCount(1)

        ↓

  React receives the update

        ↓

  Component renders again

        ↓

  count = 1
        </code></pre>
      </div>

      <p>
        You don't directly change the state variable.
        You tell React what the new state should be using the setter.
      </p>

      <h2>5. Local State</h2>

      <p>
        State created inside a component is usually called local state.
      </p>

      <div class="code">
        <pre><code>
  // LoginButton.jsx

  import { useState } from "react";

  function LoginButton() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
      &lt;button onClick={() =&gt; setLoggedIn(true)}&gt;
        {loggedIn ? "Logout" : "Login"}
      &lt;/button&gt;
    );
  }

  export default LoginButton;
        </code></pre>
      </div>

      <p>
        The <code>loggedIn</code> value belongs to this component.
        Another component does not automatically get access to it.
      </p>

      <h2>6. Component State</h2>

      <p>
        A component can have multiple pieces of state.
      </p>

      <div class="code">
        <pre><code>
  // Profile.jsx

  import { useState } from "react";

  function Profile() {

    const [name, setName] = useState("Dev");
    const [age, setAge] = useState(28);
    const [online, setOnline] = useState(false);

    return (
      &lt;div&gt;

        &lt;p&gt;Name: {name}&lt;/p&gt;
        &lt;p&gt;Age: {age}&lt;/p&gt;
        &lt;p&gt;Online: {online ? "Yes" : "No"}&lt;/p&gt;

      &lt;/div&gt;
    );
  }

  export default Profile;
        </code></pre>
      </div>

      <p>
        Each call to <code>useState</code> creates a separate piece
        of state.
      </p>

      <h2>7. Updating State</h2>

      <p>
        To update state, use its setter function.
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    function increase() {
      setCount(count + 1);
    }

    return (
      &lt;div&gt;

        &lt;p&gt;{count}&lt;/p&gt;

        &lt;button onClick={increase}&gt;
          Increase
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        When <code>setCount</code> is called, React schedules a state
        update and the component will render again.
      </p>

      <h2>8. State is Not a Normal Variable</h2>

      <p>
        One of the most important things to understand is that the
        state value you see during a render does not magically change
        halfway through that render.
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    function handleClick() {

      setCount(count + 1);

      console.log(count);
    }

    return (
      &lt;button onClick={handleClick}&gt;
        {count}
      &lt;/button&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        If <code>count</code> is 0, the console can still show 0
        immediately after <code>setCount(count + 1)</code>.
      </p>

      <p>
        This surprises many beginners.
      </p>

      <p>
        The reason is that the setter does not immediately replace the
        current render's value.
        It requests an update for a future render.
      </p>

      <h2>9. State Updates Cause Re-rendering</h2>

      <p>
        A state update normally causes React to render the component
        again.
      </p>

      <div class="code">
        <pre><code>
  Initial render
        ↓
  count = 0
        ↓
  User clicks
        ↓
  setCount(1)
        ↓
  React schedules update
        ↓
  Component renders again
        ↓
  count = 1
        ↓
  React updates the necessary DOM
        </code></pre>
      </div>

      <p>
        React does not simply change the text in the browser because
        you called <code>setCount</code>.
        React runs the component again, calculates the new UI,
        and then updates the DOM where necessary.
      </p>

      <h2>10. Functional Updates</h2>

      <p>
        Sometimes the new state depends on the previous state.
        In that situation, use the functional update form.
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    function increase() {
      setCount(previousCount => previousCount + 1);
    }

    return (
      &lt;div&gt;

        &lt;p&gt;{count}&lt;/p&gt;

        &lt;button onClick={increase}&gt;
          Increase
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        Here React gives your function the latest state value.
      </p>

      <div class="code">
        <pre><code>
  previousCount
        ↓
  previous state value

  previousCount + 1
        ↓
  new state value
        </code></pre>
      </div>

      <p>
        This is especially important when multiple updates are made
        before React renders again.
      </p>

      <h2>11. Why Functional Updates Matter</h2>

      <p>
        Consider this:
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    function increaseThreeTimes() {

      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    }

    return (
      &lt;div&gt;

        &lt;p&gt;{count}&lt;/p&gt;

        &lt;button onClick={increaseThreeTimes}&gt;
          Increase 3
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        A beginner may expect the result to become 3.
        But all three updates use the same <code>count</code> value
        from that render.
      </p>

      <p>
        If count is 0, React effectively receives:
      </p>

      <div class="code">
        <pre><code>
  setCount(1)
  setCount(1)
  setCount(1)
        </code></pre>
      </div>

      <p>
        The final requested value is therefore 1.
      </p>

      <p>
        Use a functional update when each update depends on the
        previous update:
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    function increaseThreeTimes() {

      setCount(previous => previous + 1);
      setCount(previous => previous + 1);
      setCount(previous => previous + 1);
    }

    return (
      &lt;div&gt;

        &lt;p&gt;{count}&lt;/p&gt;

        &lt;button onClick={increaseThreeTimes}&gt;
          Increase 3
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        Now React can process the updates one after another:
      </p>

      <div class="code">
        <pre><code>
  0
  ↓
  1
  ↓
  2
  ↓
  3
        </code></pre>
      </div>

      <h2>12. When Should You Use Functional Updates?</h2>

      <p>
        Use them when the new value depends on the previous value.
      </p>

      <div class="code">
        <pre><code>
  setCount(previous => previous + 1);

  setCount(previous => previous - 1);

  setItems(previous => [...previous, newItem]);

  setUser(previous => ({
    ...previous,
    age: previous.age + 1
  }));
        </code></pre>
      </div>

      <p>
        If the new value does not depend on the old value, you can
        normally pass the new value directly.
      </p>

      <div class="code">
        <pre><code>
  setName("Dev");

  setLoggedIn(true);

  setAge(29);
        </code></pre>
      </div>

      <h2>13. Lazy Initialization</h2>

      <p>
        Normally, the value passed to <code>useState</code> is used
        as the initial state.
      </p>

      <div class="code">
        <pre><code>
  const [count, setCount] = useState(0);
        </code></pre>
      </div>

      <p>
        But sometimes calculating the initial value is expensive.
      </p>

      <div class="code">
        <pre><code>
  // Settings.jsx

  import { useState } from "react";

  function getInitialSettings() {
    console.log("Calculating settings");

    return {
      theme: "dark",
      language: "English"
    };
  }

  function Settings() {

    const [settings, setSettings] =
      useState(getInitialSettings);

    return (
      &lt;p&gt;
        {settings.theme}
      &lt;/p&gt;
    );
  }

  export default Settings;
        </code></pre>
      </div>

      <p>
        Notice that we pass the function itself:
      </p>

      <div class="code">
        <pre><code>
  useState(getInitialSettings)
        </code></pre>
      </div>

      <p>
        We do not call it ourselves:
      </p>

      <div class="code">
        <pre><code>
  useState(getInitialSettings())
        </code></pre>
      </div>

      <p>
        The first form tells React:
        "Use this function to calculate the initial value when needed."
      </p>

      <p>
        This is useful when the initial value requires real work,
        such as reading a large value from storage or performing
        an expensive calculation.
      </p>

      <h2>14. Lazy Initialization vs Functional Update</h2>

      <p>
        These two concepts look similar because both use functions,
        but they solve completely different problems.
      </p>

      <div class="code">
        <pre><code>
  // Lazy initialization

  useState(createInitialValue);
        </code></pre>
      </div>

      <p>
        This is about creating the initial state.
      </p>

      <div class="code">
        <pre><code>
  // Functional update

  setCount(previous => previous + 1);
        </code></pre>
      </div>

      <p>
        This is about calculating a new state from the previous state.
      </p>

      <h2>15. Object State</h2>

      <p>
        State can contain an object.
      </p>

      <div class="code">
        <pre><code>
  // UserProfile.jsx

  import { useState } from "react";

  function UserProfile() {

    const [user, setUser] = useState({
      name: "Dev",
      age: 28,
      city: "Noida"
    });

    return (
      &lt;div&gt;

        &lt;p&gt;{user.name}&lt;/p&gt;
        &lt;p&gt;{user.age}&lt;/p&gt;
        &lt;p&gt;{user.city}&lt;/p&gt;

      &lt;/div&gt;
    );
  }

  export default UserProfile;
        </code></pre>
      </div>

      <h2>16. Updating Object State</h2>

      <p>
        You should not directly change the object stored in state.
      </p>

      <p>
        For example, avoid:
      </p>

      <div class="code">
        <pre><code>
  user.name = "Rahul";
        </code></pre>
      </div>

      <p>
        Instead, create a new object and give it to the setter.
      </p>

      <div class="code">
        <pre><code>
  // UserProfile.jsx

  import { useState } from "react";

  function UserProfile() {

    const [user, setUser] = useState({
      name: "Dev",
      age: 28
    });

    function changeName() {

      setUser(previous => ({
        ...previous,
        name: "Rahul"
      }));

    }

    return (
      &lt;div&gt;

        &lt;p&gt;{user.name}&lt;/p&gt;

        &lt;button onClick={changeName}&gt;
          Change Name
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default UserProfile;
        </code></pre>
      </div>

      <p>
        The spread operator copies the existing properties.
        Then we replace only the property we want to change.
      </p>

      <div class="code">
        <pre><code>
  {
    ...previous,
    name: "Rahul"
  }
        </code></pre>
      </div>

      <h2>17. Why Don't We Mutate State Directly?</h2>

      <p>
        React expects state updates to be treated as new values.
        If you directly change an existing object, React may not see
        the change in the way you expect.
      </p>

      <p>
        Compare these two approaches.
      </p>

      <div class="code">
        <pre><code>
  // Don't do this

  user.name = "Rahul";
        </code></pre>
      </div>

      <div class="code">
        <pre><code>
  // Do this

  setUser(previous => ({
    ...previous,
    name: "Rahul"
  }));
        </code></pre>
      </div>

      <p>
        The second approach creates a new object reference.
        This makes the state update clear to React and keeps your
        state handling predictable.
      </p>

      <h2>18. Array State</h2>

      <p>
        State can also contain an array.
      </p>

      <div class="code">
        <pre><code>
  // TodoList.jsx

  import { useState } from "react";

  function TodoList() {

    const [todos, setTodos] = useState([
      "Learn React",
      "Practice JavaScript"
    ]);

    return (
      &lt;ul&gt;

        {todos.map(todo =&gt; (
          &lt;li key={todo}&gt;
            {todo}
          &lt;/li&gt;
        ))}

      &lt;/ul&gt;
    );
  }

  export default TodoList;
        </code></pre>
      </div>

      <h2>19. Adding to an Array</h2>

      <p>
        To add an item, create a new array.
      </p>

      <div class="code">
        <pre><code>
  // TodoList.jsx

  import { useState } from "react";

  function TodoList() {

    const [todos, setTodos] = useState([]);

    function addTodo() {

      setTodos(previous => [
        ...previous,
        "Learn React"
      ]);

    }

    return (
      &lt;div&gt;

        &lt;button onClick={addTodo}&gt;
          Add Todo
        &lt;/button&gt;

        {todos.map((todo, index) =&gt; (
          &lt;p key={index}&gt;
            {todo}
          &lt;/p&gt;
        ))}

      &lt;/div&gt;
    );
  }

  export default TodoList;
        </code></pre>
      </div>

      <p>
        The old array is copied and the new item is added at the end.
      </p>

      <div class="code">
        <pre><code>
  [old items]
        +
  [new item]
        =
  [new array]
        </code></pre>
      </div>

      <h2>20. Removing from an Array</h2>

      <p>
        Use methods such as <code>filter()</code> to create a new array.
      </p>

      <div class="code">
        <pre><code>
  // TodoList.jsx

  import { useState } from "react";

  function TodoList() {

    const [todos, setTodos] = useState([
      { id: 1, text: "Learn React" },
      { id: 2, text: "Practice State" }
    ]);

    function removeTodo(id) {

      setTodos(previous =>
        previous.filter(todo => todo.id !== id)
      );

    }

    return (
      &lt;div&gt;

        {todos.map(todo =&gt; (
          &lt;div key={todo.id}&gt;

            {todo.text}

            &lt;button
              onClick={() =&gt; removeTodo(todo.id)}
            &gt;
              Delete
            &lt;/button&gt;

          &lt;/div&gt;
        ))}

      &lt;/div&gt;
    );
  }

  export default TodoList;
        </code></pre>
      </div>

      <h2>21. Updating an Array Item</h2>

      <p>
        Use <code>map()</code> when you need to replace one item
        while keeping the others.
      </p>

      <div class="code">
        <pre><code>
  // TodoList.jsx

  import { useState } from "react";

  function TodoList() {

    const [todos, setTodos] = useState([
      {
        id: 1,
        text: "Learn React",
        completed: false
      }
    ]);

    function completeTodo(id) {

      setTodos(previous =>
        previous.map(todo =>
          todo.id === id
            ? { ...todo, completed: true }
            : todo
        )
      );

    }

    return (
      &lt;div&gt;

        {todos.map(todo =&gt; (
          &lt;div key={todo.id}&gt;

            {todo.text}

            &lt;button
              onClick={() =&gt; completeTodo(todo.id)}
            &gt;
              Complete
            &lt;/button&gt;

          &lt;/div&gt;
        ))}

      &lt;/div&gt;
    );
  }

  export default TodoList;
        </code></pre>
      </div>

      <h2>22. Nested State</h2>

      <p>
        Sometimes an object contains another object.
      </p>

      <div class="code">
        <pre><code>
  // Profile.jsx

  import { useState } from "react";

  function Profile() {

    const [user, setUser] = useState({
      name: "Dev",
      address: {
        city: "Noida",
        country: "India"
      }
    });

    return (
      &lt;p&gt;
        {user.address.city}
      &lt;/p&gt;
    );
  }

  export default Profile;
        </code></pre>
      </div>

      <p>
        If you want to change only the city, you need to copy each
        level that you are changing.
      </p>

      <div class="code">
        <pre><code>
  // Profile.jsx

  import { useState } from "react";

  function Profile() {

    const [user, setUser] = useState({
      name: "Dev",
      address: {
        city: "Noida",
        country: "India"
      }
    });

    function changeCity() {

      setUser(previous => ({
        ...previous,

        address: {
          ...previous.address,
          city: "Delhi"
        }
      }));

    }

    return (
      &lt;div&gt;

        &lt;p&gt;{user.address.city}&lt;/p&gt;

        &lt;button onClick={changeCity}&gt;
          Change City
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default Profile;
        </code></pre>
      </div>

      <p>
        Notice that we copied both:
      </p>

      <div class="code">
        <pre><code>
  user
    ↓
  address
    ↓
  city
        </code></pre>
      </div>

      <p>
        This is why deeply nested state can become difficult to manage.
        In real applications, it is often better to keep state as
        simple and flat as practical.
      </p>

      <h2>23. State Queue</h2>

      <p>
        One important detail is that React does not always process a
        state update immediately when you call the setter.
      </p>

      <p>
        React can collect state updates and process them together.
        You can think of this as an update queue.
      </p>

      <div class="code">
        <pre><code>
  setCount(...)
  setCount(...)
  setCount(...)

          ↓

  React collects the updates

          ↓

  Processes them

          ↓

  Renders the component
        </code></pre>
      </div>

      <p>
        This helps React avoid doing unnecessary work for every single
        update.
      </p>

      <h2>24. Batching</h2>

      <p>
        Batching means React can group multiple state updates together
        and perform one render instead of rendering after every setter.
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Dev");

    function handleClick() {

      setCount(1);
      setName("Rahul");

    }

    return (
      &lt;button onClick={handleClick}&gt;
        Update
      &lt;/button&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        React can process these updates together and then render the
        component with the new state.
      </p>

      <p>
        In modern React, automatic batching also applies to many updates
        that happen outside React event handlers, such as updates inside
        promises and timers.
      </p>

      <h2>25. Why Does React Batch Updates?</h2>

      <p>
        Imagine that React rendered the component after every single
        state update.
      </p>

      <div class="code">
        <pre><code>
  setName(...)
        ↓
  Render

  setAge(...)
        ↓
  Render

  setCity(...)
        ↓
  Render
        </code></pre>
      </div>

      <p>
        That could cause unnecessary work.
      </p>

      <p>
        Instead, React can group the updates:
      </p>

      <div class="code">
        <pre><code>
  setName(...)
  setAge(...)
  setCity(...)

        ↓

  One render with the latest state
        </code></pre>
      </div>

      <h2>26. Asynchronous Updates</h2>

      <p>
        People often say "state updates are asynchronous."
        This is useful as a simple way to describe the behavior,
        but it can be misleading.
      </p>

      <p>
        The important thing to understand is this:
        calling a state setter does not immediately change the state
        value inside the current render.
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    function handleClick() {

      console.log(count);

      setCount(count + 1);

      console.log(count);

    }

    return (
      &lt;button onClick={handleClick}&gt;
        {count}
      &lt;/button&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        If the current render has <code>count = 0</code>, both logs
        can print 0.
      </p>

      <p>
        Then React processes the update and the next render sees 1.
      </p>

      <div class="code">
        <pre><code>
  Current render
  count = 0

  setCount(1)

  Current render still sees
  count = 0

  Next render
  count = 1
        </code></pre>
      </div>

      <h2>27. State as a Snapshot</h2>

      <p>
        A useful way to think about React state is as a snapshot.
      </p>

      <p>
        Every render gets its own view of the state.
      </p>

      <div class="code">
        <pre><code>
  Render 1
  count = 0

          ↓

  Render 2
  count = 1

          ↓

  Render 3
  count = 2
        </code></pre>
      </div>

      <p>
        The event handler created during a render sees the state
        from that render.
      </p>

      <p>
        This explains why calling <code>setCount</code> does not
        immediately change the <code>count</code> variable already
        being used by that handler.
      </p>

      <h2>28. Derived State</h2>

      <p>
        Derived state means data that can be calculated from existing
        state or props.
      </p>

      <p>
        For example, suppose we have:
      </p>

      <div class="code">
        <pre><code>
  const [firstName, setFirstName] = useState("Dev");
  const [lastName, setLastName] = useState("Pandit");
        </code></pre>
      </div>

      <p>
        We can calculate the full name directly.
      </p>

      <div class="code">
        <pre><code>
  const fullName = firstName + " " + lastName;
        </code></pre>
      </div>

      <p>
        We normally do not need another state variable for
        <code>fullName</code>.
      </p>

      <div class="code">
        <pre><code>
  // UserName.jsx

  import { useState } from "react";

  function UserName() {

    const [firstName, setFirstName] = useState("Dev");
    const [lastName, setLastName] = useState("Pandit");

    const fullName = firstName + " " + lastName;

    return (
      &lt;div&gt;
        &lt;p&gt;{fullName}&lt;/p&gt;
      &lt;/div&gt;
    );
  }

  export default UserName;
        </code></pre>
      </div>

      <p>
        <code>fullName</code> is derived from the other two values.
      </p>

      <h2>29. Why Avoid Unnecessary Derived State?</h2>

      <p>
        Suppose you store all three values:
      </p>

      <div class="code">
        <pre><code>
  firstName
  lastName
  fullName
        </code></pre>
      </div>

      <p>
        Now you have to make sure that whenever the first or last name
        changes, the full name is also updated.
      </p>

      <p>
        That creates another place where bugs can happen.
      </p>

      <p>
        Instead:
      </p>

      <div class="code">
        <pre><code>
  firstName
  lastName

          ↓

  fullName = firstName + " " + lastName
        </code></pre>
      </div>

      <p>
        Keep state for information that needs to be remembered.
        Calculate information that can be easily produced from
        existing state.
      </p>

      <h2>30. Derived Data from Arrays</h2>

      <p>
        The same idea works with arrays.
      </p>

      <div class="code">
        <pre><code>
  // Products.jsx

  import { useState } from "react";

  function Products() {

    const [products, setProducts] = useState([
      { id: 1, name: "Phone", price: 20000 },
      { id: 2, name: "Laptop", price: 50000 }
    ]);

    const totalPrice = products.reduce(
      (total, product) => total + product.price,
      0
    );

    return (
      &lt;div&gt;
        &lt;p&gt;Total: ₹{totalPrice}&lt;/p&gt;
      &lt;/div&gt;
    );
  }

  export default Products;
        </code></pre>
      </div>

      <p>
        We don't need a separate <code>totalPrice</code> state because
        it can be calculated from <code>products</code>.
      </p>

      <h2>31. State and Objects: Reference Matters</h2>

      <p>
        JavaScript objects are stored and compared by reference.
        This becomes important when working with React state.
      </p>

      <div class="code">
        <pre><code>
  const user = {
    name: "Dev"
  };

  const anotherUser = user;
        </code></pre>
      </div>

      <p>
        Both variables point to the same object.
      </p>

      <div class="code">
        <pre><code>
  user
    ↘
    { name: "Dev" }
    ↗
  anotherUser
        </code></pre>
      </div>

      <p>
        When you create a new object:
      </p>

      <div class="code">
        <pre><code>
  const newUser = {
    ...user,
    name: "Rahul"
  };
        </code></pre>
      </div>

      <p>
        <code>newUser</code> is a different object.
        This is why immutable update patterns are important in React.
      </p>

      <h2>32. Where Is State Stored?</h2>

      <p>
        This is where we move from normal React usage into React's
        internal working.
      </p>

      <p>
        When you write:
      </p>

      <div class="code">
        <pre><code>
  const [count, setCount] = useState(0);
        </code></pre>
      </div>

      <p>
        React needs to remember the value between renders.
      </p>

      <p>
        The value is not simply stored inside the local JavaScript
        variable <code>count</code>.
      </p>

      <h2>So Where Does React Remember State?</h2>

      <p>
        When you use <code>useState</code>, React needs to remember the
        state value between renders.
      </p>

      <p>
        React does not keep that value inside the normal JavaScript
        variable itself. React keeps information about the component
        using an internal data structure called a <strong>Fiber</strong>.
      </p>

      <p>
        You can think of a Fiber as an internal JavaScript object that
        represents a component and keeps information React needs while
        managing that component.
      </p>

      <div class="code">
        <pre><code>
  Counter Component
        ↓
      Fiber
        ↓
  ┌───────────────┐
  │ type          │ → Counter function
  │ state data    │
  │ props         │
  │ parent        │
  │ child         │
  │ sibling       │
  │ other data    │
  └───────────────┘
        </code></pre>
      </div>

      <p>
        The Fiber is created and managed by React.
        You normally do not create or work with Fiber yourself.
      </p>

      <p>
        Also remember that Fiber is <strong>not the DOM element</strong>.
        It is part of React's internal system.
      </p>

      <h2>Where Is the State Inside Fiber?</h2>

      <p>
        This is where things become more interesting.
      </p>

      <p>
        A Fiber has an internal field called
        <code>memoizedState</code>.
      </p>

      <div class="code">
        memoizedState
      </div>

      <p>
        For a function component, React uses this area to keep information
        about the component's Hooks.
      </p>

      <p>
        If a component has several Hooks, React keeps their information
        in a linked structure.
      </p>

      <div class="code">
        <pre><code>
  Fiber
    │
    └── memoizedState
            │
            ▼
        Hook 1
            │
            ▼
        Hook 2
            │
            ▼
        Hook 3
        </code></pre>
      </div>

      <p>
        For example, suppose we have three state Hooks:
      </p>

      <div class="code">
        <pre><code>
  const [name, setName] = useState("Dev");
  const [age, setAge] = useState(28);
  const [online, setOnline] = useState(false);
        </code></pre>
      </div>

      <p>
        React can conceptually keep their state like this:
      </p>

      <div class="code">
        <pre><code>
  Fiber
    │
    └── memoizedState
            │
            ▼
        Hook 1
        state = "Dev"
            │
            ▼
        Hook 2
        state = 28
            │
            ▼
        Hook 3
        state = false
        </code></pre>
      </div>

      <p>
        The first Hook represents the first <code>useState</code>,
        the second Hook represents the second <code>useState</code>,
        and so on.
      </p>

      <p>
        This is also why React needs Hooks to be called in the same order
        on every render.
      </p>

      <h2>Why Does React Need This?</h2>

      <p>
        Remember that a function component runs again when React renders
        it again.
      </p>

      <div class="code">
        <pre><code>
  function Counter() {

    const [count, setCount] = useState(0);

    return &lt;h1&gt;{count}&lt;/h1&gt;;
  }
        </code></pre>
      </div>

      <p>
        The local variable <code>count</code> belongs to that particular
        execution of the function.
      </p>

      <p>
        When React runs <code>Counter</code> again, it needs to give the
        component the state that React remembered from the previous
        render.
      </p>

      <div class="code">
        <pre><code>
  First render

  Counter()
    ↓
  useState()
    ↓
  count = 0


  User clicks


  Second render

  Counter()
    ↓
  useState()
    ↓
  count = 1
        </code></pre>
      </div>

      <p>
        React can do this because the state information is kept in its
        internal Hook/Fiber data rather than depending on the temporary
        local variable.
      </p>

      <h2>Fiber and Hook Relationship</h2>

      <p>
        A simple way to remember the relationship is:
      </p>

      <div class="code">
        <pre><code>
  Component
      ↓
  Fiber
      ↓
  Hook information
      ↓
  State
      ↓
  Update queue
        </code></pre>
      </div>

      <p>
        So when you call <code>setCount()</code>, React knows which
        component and which Hook the update belongs to.
      </p>

      <h2>Important Note</h2>

      <p>
        The diagrams above are a simplified model to help you understand
        React. The real Fiber and Hook objects contain many more fields
        and React's internal implementation is much more complicated.
      </p>

      <p>
        You should understand the main idea rather than trying to memorize
        React's internal object structure.
      </p>

      <h2>33. Why Doesn't State Disappear When the Function Finishes?</h2>

      <p>
        A function component is a JavaScript function.
      </p>

      <div class="code">
        <pre><code>
  function Counter() {

    const [count, setCount] = useState(0);

    return &lt;h2&gt;{count}&lt;/h2&gt;;
  }
        </code></pre>
      </div>

      <p>
        The function runs during rendering.
        Normally, local variables inside a function disappear after
        the function finishes.
      </p>

      <p>
        But state is different.
      </p>

      <p>
        React keeps the state information outside that temporary
        function execution so it can provide the correct state again
        during the next render.
      </p>

      <div class="code">
        <pre><code>
  First render
  Counter() runs
  count = 0

          ↓

  React keeps state

          ↓

  Second render
  Counter() runs again
  count = 1
        </code></pre>
      </div>

      <h2>34. The Hook Call Order</h2>

      <p>
        React needs to know which state belongs to which
        <code>useState</code> call.
      </p>

      <div class="code">
        <pre><code>
  // Profile.jsx

  import { useState } from "react";

  function Profile() {

    const [name, setName] = useState("Dev");

    const [age, setAge] = useState(28);

    const [city, setCity] = useState("Noida");

    return (
      &lt;div&gt;
        {name}
        {age}
        {city}
      &lt;/div&gt;
    );
  }

  export default Profile;
        </code></pre>
      </div>

      <p>
        Conceptually, React keeps these Hook states in order:
      </p>

      <div class="code">
        <pre><code>
  Hook 1 → name
  Hook 2 → age
  Hook 3 → city
        </code></pre>
      </div>

      <p>
        This is one reason Hooks must be called in the same order on
        every render.
      </p>

      <h2>35. Why Hooks Cannot Be Called Inside Conditions</h2>

      <p>
        Consider this:
      </p>

      <div class="code">
        <pre><code>
  // Wrong

  if (loggedIn) {
    const [name, setName] = useState("Dev");
  }
        </code></pre>
      </div>

      <p>
        Imagine that the condition is true during one render and
        false during another render.
        The order of Hook calls would change.
      </p>

      <div class="code">
        <pre><code>
  Render 1

  Hook 1 → name
  Hook 2 → age


  Render 2

  Hook 1 → age
        </code></pre>
      </div>

      <p>
        React could no longer reliably know which state belongs to
        which Hook call.
      </p>

      <p>
        That is why Hooks must be called at the top level of the
        component, in the same order on every render.
      </p>

      <h2>36. State Queue Internals</h2>

      <p>
        When you call a setter such as:
      </p>

      <div class="code">
        <pre><code>
  setCount(10);
        </code></pre>
      </div>

      <p>
        React does more than simply replace a variable.
        It records an update for that state.
      </p>

      <p>
        You can think of the process like this:
      </p>

      <div class="code">
        <pre><code>
  setCount(10)
        ↓
  Create state update
        ↓
  Put update into the Hook's update queue
        ↓
  Schedule React work
        ↓
  React processes the update
        ↓
  New state = 10
        ↓
  Component renders again
        </code></pre>
      </div>

      <p>
        The real React implementation is more complicated because
        React has to handle priorities, scheduling, concurrent rendering,
        multiple updates, and other cases.
        But this model is enough to understand the main idea.
      </p>

      <h2>37. What Happens with a Functional Update Internally?</h2>

      <p>
        When you write:
      </p>

      <div class="code">
        <pre><code>
  setCount(previous => previous + 1);
        </code></pre>
      </div>

      <p>
        React stores the update so that when it processes the queue,
        it can give the function the latest state available at that
        point.
      </p>

      <div class="code">
        <pre><code>
  Current state = 0

  Update 1:
  previous => previous + 1

          ↓

  1

  Update 2:
  previous => previous + 1

          ↓

  2

  Update 3:
  previous => previous + 1

          ↓

  3
        </code></pre>
      </div>

      <p>
        This is why functional updates are safer when several updates
        depend on previous state.
      </p>

      <h2>38. Re-render Process</h2>

      <p>
        A state update starts a process that eventually results in
        the component rendering again.
      </p>

      <p>
        A simplified flow is:
      </p>

      <div class="code">
        <pre><code>
  1. User performs an action
            ↓
  2. Event handler runs
            ↓
  3. setState is called
            ↓
  4. React records the update
            ↓
  5. React schedules work
            ↓
  6. Component function runs again
            ↓
  7. New JSX is produced
            ↓
  8. React compares the new result
            ↓
  9. React updates the DOM where needed
        </code></pre>
      </div>

      <h2>39. Does Re-render Mean the DOM Is Rebuilt?</h2>

      <p>
        No.
      </p>

      <p>
        A component re-render means React runs the component again
        to calculate what the UI should look like now.
      </p>

      <p>
        It does not mean the browser DOM is completely destroyed
        and recreated every time.
      </p>

      <div class="code">
        <pre><code>
  State changes
        ↓
  Component renders again
        ↓
  React calculates new UI
        ↓
  React finds what changed
        ↓
  Only necessary DOM changes are committed
        </code></pre>
      </div>

      <h2>40. Render Phase and Commit Phase</h2>

      <p>
        Internally, React's update process can be understood using
        two important phases.
      </p>

      <h3>Render Phase</h3>

      <p>
        React figures out what the UI should look like.
      </p>

      <div class="code">
        <pre><code>
  State
    ↓
  Component function
    ↓
  New React elements
    ↓
  React determines changes
        </code></pre>
      </div>

      <h3>Commit Phase</h3>

      <p>
        React applies the necessary changes to the actual DOM.
      </p>

      <div class="code">
        <pre><code>
  Changes found
      ↓
  React updates DOM
      ↓
  Browser displays new UI
        </code></pre>
      </div>

      <p>
        Keeping these two ideas separate makes React's rendering
        behavior much easier to understand.
      </p>

      <h2>41. State Update Does Not Mean Immediate DOM Update</h2>

      <p>
        Consider:
      </p>

      <div class="code">
        <pre><code>
  setCount(count + 1);

  console.log("After update");
        </code></pre>
      </div>

      <p>
        The setter schedules the state update.
        React then performs its rendering and commit work.
      </p>

      <p>
        So you should not write code assuming that the DOM has already
        changed immediately after calling the setter.
      </p>

      <h2>42. Multiple State Variables</h2>

      <p>
        React can manage several independent pieces of state in one
        component.
      </p>

      <div class="code">
        <pre><code>
  // Dashboard.jsx

  import { useState } from "react";

  function Dashboard() {

    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    return (
      &lt;div&gt;

        &lt;p&gt;Loading: {loading ? "Yes" : "No"}&lt;/p&gt;
        &lt;p&gt;Count: {count}&lt;/p&gt;
        &lt;p&gt;Message: {message}&lt;/p&gt;

      &lt;/div&gt;
    );
  }

  export default Dashboard;
        </code></pre>
      </div>

      <p>
        You don't have to put everything into one giant object.
        Separate state values can make unrelated data easier to manage.
      </p>

      <h2>43. One Object vs Multiple State Values</h2>

      <p>
        Both approaches can be valid.
      </p>

      <p>
        Separate state:
      </p>

      <div class="code">
        <pre><code>
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
        </code></pre>
      </div>

      <p>
        Object state:
      </p>

      <div class="code">
        <pre><code>
  const [user, setUser] = useState({
    name: "",
    age: 0
  });
        </code></pre>
      </div>

      <p>
        Choose based on how the values are related.
        If several values always change together and represent one
        thing, an object can make sense.
        If they are unrelated, separate state can be simpler.
      </p>

      <h2>44. State Should Represent the Minimum Necessary Information</h2>

      <p>
        A useful rule is:
        keep the smallest amount of information in state that you
        actually need to remember.
      </p>

      <p>
        For example, don't store:
      </p>

      <div class="code">
        <pre><code>
  firstName
  lastName
  fullName
        </code></pre>
      </div>

      <p>
        if <code>fullName</code> can simply be calculated.
      </p>

      <div class="code">
        <pre><code>
  const fullName = firstName + " " + lastName;
        </code></pre>
      </div>

      <p>
        Less state usually means fewer synchronization problems.
      </p>

      <h2>45. State and User Input</h2>

      <p>
        One of the most common uses of state is remembering what a
        user types.
      </p>

      <div class="code">
        <pre><code>
  // NameInput.jsx

  import { useState } from "react";

  function NameInput() {

    const [name, setName] = useState("");

    function handleChange(event) {
      setName(event.target.value);
    }

    return (
      &lt;div&gt;

        &lt;input
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        /&gt;

        &lt;p&gt;Hello {name}&lt;/p&gt;

      &lt;/div&gt;
    );
  }

  export default NameInput;
        </code></pre>
      </div>

      <p>
        The important flow is:
      </p>

      <div class="code">
        <pre><code>
  User types
      ↓
  onChange
      ↓
  setName()
      ↓
  State changes
      ↓
  Component renders again
      ↓
  Input and paragraph use new name
        </code></pre>
      </div>

      <h2>46. State and Conditional UI</h2>

      <p>
        State can decide what the user sees.
      </p>

      <div class="code">
        <pre><code>
  // LoginStatus.jsx

  import { useState } from "react";

  function LoginStatus() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
      &lt;div&gt;

        {loggedIn ? (
          &lt;p&gt;Welcome back!&lt;/p&gt;
        ) : (
          &lt;p&gt;Please login.&lt;/p&gt;
        )}

        &lt;button
          onClick={() =&gt; setLoggedIn(!loggedIn)}
        &gt;
          {loggedIn ? "Logout" : "Login"}
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default LoginStatus;
        </code></pre>
      </div>

      <p>
        State controls the UI:
      </p>

      <div class="code">
        <pre><code>
  loggedIn = false
        ↓
  Please login

  loggedIn = true
        ↓
  Welcome back
        </code></pre>
      </div>

      <h2>47. State Is Private to the Component</h2>

      <p>
        If two components each call <code>useState</code>, they have
        separate state.
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    return (
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        {count}
      &lt;/button&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        If you render this component twice:
      </p>

      <div class="code">
        <pre><code>
  // App.jsx

  import Counter from "./Counter";

  function App() {

    return (
      &lt;div&gt;
        &lt;Counter /&gt;
        &lt;Counter /&gt;
      &lt;/div&gt;
    );
  }

  export default App;
        </code></pre>
      </div>

      <p>
        You get two separate counters.
      </p>

      <div class="code">
        <pre><code>
  Counter 1 → 0

  Counter 2 → 0
        </code></pre>
      </div>

      <p>
        If you click the first one:
      </p>

      <div class="code">
        <pre><code>
  Counter 1 → 1

  Counter 2 → 0
        </code></pre>
      </div>

      <p>
        Each component instance has its own state.
      </p>

      <h2>48. State Belongs to a Component Position</h2>

      <p>
        React does not simply think of state as belonging to the
        function name.
        It associates state with a component's position in the
        rendered tree.
      </p>

      <p>
        This becomes important when the same component is rendered
        multiple times.
      </p>

      <div class="code">
        <pre><code>
  &lt;Counter /&gt;
  &lt;Counter /&gt;
        </code></pre>
      </div>

      <p>
        These are two separate component instances, so they have
        separate state.
      </p>

      <h2>49. Resetting State</h2>

      <p>
        React can preserve state when it considers a component to be
        the same component in the same position.
      </p>

      <p>
        If you change the component's identity or give it a different
        key, React can remove the old state and create new state.
      </p>

      <div class="code">
        <pre><code>
  // App.jsx

  import { useState } from "react";

  function Form() {

    const [name, setName] = useState("");

    return (
      &lt;input
        value={name}
        onChange={event =&gt; setName(event.target.value)}
      /&gt;
    );
  }

  function App() {

    const [user, setUser] = useState("A");

    return (
      &lt;div&gt;

        &lt;button onClick={() =&gt; setUser("A")}&gt;
          User A
        &lt;/button&gt;

        &lt;button onClick={() =&gt; setUser("B")}&gt;
          User B
        &lt;/button&gt;

        &lt;Form key={user} /&gt;

      &lt;/div&gt;
    );
  }

  export default App;
        </code></pre>
      </div>

      <p>
        Changing the key tells React that this should be treated as
        a different component instance, so its state is reset.
      </p>

      <h2>50. State Updates and Object Identity</h2>

      <p>
        When updating objects and arrays, React relies heavily on
        references and identity.
      </p>

      <p>
        For example:
      </p>

      <div class="code">
        <pre><code>
  const user = {
    name: "Dev"
  };

  const sameUser = user;

  console.log(user === sameUser);
  // true
        </code></pre>
      </div>

      <p>
        But:
      </p>

      <div class="code">
        <pre><code>
  const newUser = {
    ...user
  };

  console.log(user === newUser);
  // false
        </code></pre>
      </div>

      <p>
        This is why React state updates commonly create new objects
        and arrays instead of changing the existing ones.
      </p>

      <h2>51. State and Immutability</h2>

      <p>
        Immutability means that instead of changing an existing
        object or array, you create a new one containing the desired
        changes.
      </p>

      <p>
        For an array:
      </p>

      <div class="code">
        <pre><code>
  setItems(previous => [
    ...previous,
    newItem
  ]);
        </code></pre>
      </div>

      <p>
        For an object:
      </p>

      <div class="code">
        <pre><code>
  setUser(previous => ({
    ...previous,
    name: "Rahul"
  }));
        </code></pre>
      </div>

      <p>
        This pattern makes changes easier for React and makes your
        application easier to reason about.
      </p>

      <h2>52. State and Reconciliation</h2>

      <p>
        After a state update, React creates the new result of the
        component's render.
      </p>

      <p>
        React then compares the new result with the previous result
        and determines what needs to change in the actual UI.
      </p>

      <div class="code">
        <pre><code>
  Old UI
    ↓
  New state
    ↓
  Component renders
    ↓
  New React element tree
    ↓
  React compares
    ↓
  Necessary DOM updates
        </code></pre>
      </div>

      <p>
        This comparison and update process is part of what is commonly
        called reconciliation.
      </p>

      <h2>53. State Does Not Automatically Update Every Component</h2>

      <p>
        When a component's state changes, React schedules that component
        to render again.
      </p>

      <p>
        The update can also cause related parts of the component tree
        to be evaluated depending on how the components are structured.
      </p>

      <p>
        React then uses its reconciliation process to determine which
        actual DOM changes are necessary.
      </p>

      <h2>54. A Complete State Flow</h2>

      <p>
        Now put everything together.
      </p>

      <div class="code">
        <pre><code>
  User action
      ↓
  Event handler
      ↓
  setState()
      ↓
  State update is queued
      ↓
  React schedules work
      ↓
  Updates may be batched
      ↓
  React processes the state queue
      ↓
  Component renders again
      ↓
  New JSX / React elements are produced
      ↓
  React compares old and new result
      ↓
  Commit phase
      ↓
  DOM is updated
      ↓
  Browser displays the result
        </code></pre>
      </div>

      <h2>55. The Most Important Mental Model</h2>

      <p>
        Do not think of state like a normal variable that React
        magically changes.
      </p>

      <p>
        Think of it like this:
      </p>

      <div class="code">
        <pre><code>
  State belongs to a component instance.

          ↓

  React remembers that state between renders.

          ↓

  You request a change using the setter.

          ↓

  React queues the update.

          ↓

  React processes the update.

          ↓

  The component renders again.

          ↓

  The new state is available in the new render.
        </code></pre>
      </div>

      <h2>56. A Complete Example</h2>

      <p>
        Here is a small example that combines state, functional updates,
        object state, array state, derived data, and event handling.
      </p>

      <div class="code">
        <pre><code>
  // ShoppingCart.jsx

  import { useState } from "react";

  function ShoppingCart() {

    const [user, setUser] = useState({
      name: "Dev"
    });

    const [items, setItems] = useState([
      {
        id: 1,
        name: "Phone",
        price: 20000
      }
    ]);

    function addItem() {

      setItems(previous => [
        ...previous,
        {
          id: Date.now(),
          name: "Headphones",
          price: 2000
        }
      ]);

    }

    function changeName() {

      setUser(previous => ({
        ...previous,
        name: "Rahul"
      }));

    }

    const total = items.reduce(
      (sum, item) => sum + item.price,
      0
    );

    return (
      &lt;div&gt;

        &lt;h2&gt;
          Welcome {user.name}
        &lt;/h2&gt;

        &lt;button onClick={changeName}&gt;
          Change Name
        &lt;/button&gt;

        &lt;h3&gt;Cart&lt;/h3&gt;

        {items.map(item =&gt; (
          &lt;p key={item.id}&gt;
            {item.name} - ₹{item.price}
          &lt;/p&gt;
        ))}

        &lt;p&gt;
          Total: ₹{total}
        &lt;/p&gt;

        &lt;button onClick={addItem}&gt;
          Add Headphones
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default ShoppingCart;
        </code></pre>
      </div>

      <p>
        In this example:
      </p>

      <div class="code">
        <pre><code>
  user
    ↓
  Object state

  items
    ↓
  Array state

  addItem()
    ↓
  Functional array update

  changeName()
    ↓
  Functional object update

  total
    ↓
  Derived value

  Button click
    ↓
  State update
    ↓
  Re-render
    ↓
  Updated UI
        </code></pre>
      </div>

      <h2>57. Common State Mistakes</h2>

      <h3>Changing state directly</h3>

      <div class="code">
        <pre><code>
  // Wrong

  user.name = "Rahul";
        </code></pre>
      </div>

      <p>
        Create a new object instead.
      </p>

      <h3>Using old state for repeated updates</h3>

      <div class="code">
        <pre><code>
  // Can cause unexpected result

  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
        </code></pre>
      </div>

      <p>
        Use functional updates when each update depends on the previous
        value.
      </p>

      <div class="code">
        <pre><code>
  setCount(previous => previous + 1);
  setCount(previous => previous + 1);
  setCount(previous => previous + 1);
        </code></pre>
      </div>

      <h3>Storing values that can be calculated</h3>

      <div class="code">
        <pre><code>
  // Often unnecessary

  const [fullName, setFullName] = useState("");
        </code></pre>
      </div>

      <p>
        If it can be calculated from existing state, calculate it
        instead.
      </p>

      <div class="code">
        <pre><code>
  const fullName = firstName + " " + lastName;
        </code></pre>
      </div>

      <h3>Expecting state to change immediately</h3>

      <div class="code">
        <pre><code>
  setCount(count + 1);

  console.log(count);
        </code></pre>
      </div>

      <p>
        Remember that the current render keeps its state snapshot.
        The new value is available in the next render.
      </p>

      <h2>58. Final Mental Picture of State</h2>

      <div class="code">
        <pre><code>
                  React Component
                        │
                        ▼
                    useState()
                        │
                        ▼
                React remembers
                    the state
                        │
                        ▼
                User changes something
                        │
                        ▼
                    setState()
                        │
                        ▼
                  Update Queue
                        │
                        ▼
                  React schedules
                      the work
                        │
                        ▼
                React processes updates
                        │
                        ▼
                  Component runs
                      again
                        │
                        ▼
                  New JSX result
                        │
                        ▼
                Reconciliation
                        │
                        ▼
                  Commit changes
                        │
                        ▼
                    Updated UI
        </code></pre>
      </div>

      <p>
        Once this flow is clear, concepts such as forms, effects,
        context, reducers, custom Hooks, and state management libraries
        become much easier to understand because they all build on
        the basic idea of state and rendering.
      </p>
    `
  },
  {
    title: "React Lifecycle",
    content: `
      <h1>React Lifecycle</h1>

      <p>
        A React component does not simply appear on the screen and stay
        there forever.
      </p>

      <p>
        During its life, a component can be created, rendered, updated,
        and eventually removed.
      </p>

      <p>
        This whole process is commonly called the
        <strong>React component lifecycle</strong>.
      </p>

      <p>
        The easiest way to understand it is:
      </p>

      <div class="code">
        <pre><code>
  Component created
        ↓
  Mounting
        ↓
  Component updates
        ↓
  Updating
        ↓
  Component removed
        ↓
  Unmounting
        </code></pre>
      </div>

      <h2>1. What Does Lifecycle Mean?</h2>

      <p>
        Lifecycle simply means the different stages a component goes
        through while it exists in a React application.
      </p>

      <p>
        Think about a component like a person entering a room.
      </p>

      <div class="code">
        <pre><code>
  Enter the room
        ↓
  Use the room
        ↓
  Something changes
        ↓
  Continue using the room
        ↓
  Leave the room
        </code></pre>
      </div>

      <p>
        In React:
      </p>

      <div class="code">
        <pre><code>
  Enter the UI
        ↓
  Mount

  Something changes
        ↓
  Update

  Leave the UI
        ↓
  Unmount
        </code></pre>
      </div>

      <h2>2. The Three Main Lifecycle Stages</h2>

      <p>
        The three basic stages are:
      </p>

      <div class="code">
        <pre><code>
  Mounting
  Updating
  Unmounting
        </code></pre>
      </div>

      <p>
        These are useful terms, but modern React also requires us to
        understand what happens during rendering and committing.
      </p>

      <h2>3. Mounting</h2>

      <p>
        Mounting means a component is being added to the UI for the
        first time.
      </p>

      <p>
        For example:
      </p>

      <div class="code">
        <pre><code>
  // App.jsx

  import Welcome from "./Welcome";

  function App() {

    return (
      &lt;div&gt;
        &lt;Welcome /&gt;
      &lt;/div&gt;
    );
  }

  export default App;
        </code></pre>
      </div>

      <p>
        When React displays <code>Welcome</code> for the first time,
        the component is mounted.
      </p>

      <div class="code">
        <pre><code>
  App starts
    ↓
  React sees &lt;Welcome /&gt;
    ↓
  Welcome is rendered
    ↓
  React commits the result
    ↓
  Welcome appears in the UI
        </code></pre>
      </div>

      <h2>4. What Happens During Mounting?</h2>

      <p>
        A simplified version looks like this:
      </p>

      <div class="code">
        <pre><code>
  Component needs to appear
          ↓
  React starts rendering
          ↓
  Component function runs
          ↓
  React creates the result
          ↓
  React commits changes to the DOM
          ↓
  Component is now mounted
        </code></pre>
      </div>

      <p>
        For a function component:
      </p>

      <div class="code">
        <pre><code>
  // Welcome.jsx

  function Welcome() {

    console.log("Welcome rendered");

    return (
      &lt;h1&gt;Hello&lt;/h1&gt;
    );
  }

  export default Welcome;
        </code></pre>
      </div>

      <p>
        The function runs while React is rendering the component.
      </p>

      <h2>5. Updating</h2>

      <p>
        Updating happens when something that affects the component
        changes.
      </p>

      <p>
        Common reasons include:
      </p>

      <ul>
        <li>State changes.</li>
        <li>Props change.</li>
        <li>A parent component renders again.</li>
        <li>Context value changes.</li>
      </ul>

      <p>
        For example:
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    return (
      &lt;div&gt;

        &lt;p&gt;Count: {count}&lt;/p&gt;

        &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
          Increase
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        Initially:
      </p>

      <div class="code">
        Count: 0
      </div>

      <p>
        After clicking the button:
      </p>

      <div class="code">
        Count: 1
      </div>

      <p>
        The state changed, so React renders the component again.
      </p>

      <div class="code">
        <pre><code>
  setCount(...)
        ↓
  State update
        ↓
  React schedules work
        ↓
  Counter renders again
        ↓
  New UI is calculated
        ↓
  DOM is updated if necessary
        </code></pre>
      </div>

      <h2>6. Important: Re-render Does Not Mean Remount</h2>

      <p>
        This is one of the most important lifecycle concepts.
      </p>

      <p>
        A re-render and a remount are not the same thing.
      </p>

      <p>
        If state changes:
      </p>

      <div class="code">
        <pre><code>
  State changes
        ↓
  Re-render
        </code></pre>
      </div>

      <p>
        The component is normally still the same component instance.
      </p>

      <p>
        Remounting means the old component is removed and a new
        component instance is created.
      </p>

      <div class="code">
        <pre><code>
  Old component removed
        ↓
  New component created
        ↓
  Mount again
        </code></pre>
      </div>

      <p>
        This distinction becomes very important when working with
        state, effects, keys, and cleanup.
      </p>

      <h2>7. Unmounting</h2>

      <p>
        Unmounting means React removes a component from the UI.
      </p>

      <p>
        For example:
      </p>

      <div class="code">
        <pre><code>
  // App.jsx

  import { useState } from "react";
  import Welcome from "./Welcome";

  function App() {

    const [show, setShow] = useState(true);

    return (
      &lt;div&gt;

        &lt;button onClick={() =&gt; setShow(!show)}&gt;
          Show / Hide
        &lt;/button&gt;

        {show && &lt;Welcome /&gt;}

      &lt;/div&gt;
    );
  }

  export default App;
        </code></pre>
      </div>

      <p>
        When <code>show</code> is true:
      </p>

      <div class="code">
        <pre><code>
  &lt;Welcome /&gt;
        </code></pre>
      </div>

      <p>
        exists in the React tree.
      </p>

      <p>
        When <code>show</code> becomes false:
      </p>

      <div class="code">
        <pre><code>
  {show && &lt;Welcome /&gt;}
        </code></pre>
      </div>

      <p>
        no longer produces the component.
        React removes it from the UI.
      </p>

      <p>
        That is unmounting.
      </p>

      <h2>8. What Happens During Unmounting?</h2>

      <div class="code">
        <pre><code>
  Component exists
        ↓
  Something changes
        ↓
  React determines component is no longer needed
        ↓
  Component is removed
        ↓
  Cleanup runs when required
        ↓
  Component is unmounted
        </code></pre>
      </div>

      <p>
        Cleanup is especially important when the component created
        something that needs to be stopped or removed.
      </p>

      <p>
        Examples include:
      </p>

      <ul>
        <li>Timers</li>
        <li>Event listeners</li>
        <li>Subscriptions</li>
        <li>Connections</li>
      </ul>

      <h2>9. Functional Component Lifecycle</h2>

      <p>
        Function components do not have lifecycle methods like the old
        class components did.
      </p>

      <p>
        Instead, modern React uses rendering and Hooks to handle
        lifecycle-related behavior.
      </p>

      <p>
        The most important Hook for synchronization and cleanup is
        <code>useEffect</code>.
      </p>

      <div class="code">
        <pre><code>
  // Timer.jsx

  import { useEffect } from "react";

  function Timer() {

    useEffect(() => {

      console.log("Effect started");

      return () => {
        console.log("Cleanup");
      };

    }, []);

    return (
      &lt;h2&gt;Timer&lt;/h2&gt;
    );
  }

  export default Timer;
        </code></pre>
      </div>

      <p>
        The effect can run after React commits the component.
        The function returned from the effect is the cleanup function.
      </p>

      <h2>10. What Is the Render Phase?</h2>

      <p>
        The render phase is when React figures out what the UI should
        look like.
      </p>

      <p>
        For a function component, React calls the component function.
      </p>

      <div class="code">
        <pre><code>
  // User.jsx

  function User() {

    return (
      &lt;h1&gt;Dev&lt;/h1&gt;
    );
  }

  export default User;
        </code></pre>
      </div>

      <p>
        React runs the function and gets the result.
      </p>

      <div class="code">
        <pre><code>
  User()
    ↓
  JSX
    ↓
  React elements
        </code></pre>
      </div>

      <p>
        React then uses this information to determine what needs
        to happen to the UI.
      </p>

      <h2>11. What Should Happen During Render?</h2>

      <p>
        Rendering should mainly be about calculating the UI.
      </p>

      <p>
        For example:
      </p>

      <div class="code">
        <pre><code>
  // Product.jsx

  function Product({ price, quantity }) {

    const total = price * quantity;

    return (
      &lt;p&gt;
        Total: ₹{total}
      &lt;/p&gt;
    );
  }

  export default Product;
        </code></pre>
      </div>

      <p>
        Calculating <code>total</code> is fine because it is part of
        determining what the UI should display.
      </p>

      <p>
        You should avoid doing side effects directly during rendering.
      </p>

      <h2>12. What Is a Side Effect?</h2>

      <p>
        A side effect is an action that affects something outside the
        calculation of the component's UI.
      </p>

      <p>
        Examples include:
      </p>

      <ul>
        <li>Starting a timer.</li>
        <li>Changing something outside React.</li>
        <li>Subscribing to an event.</li>
        <li>Connecting to an external system.</li>
        <li>Sending a request when appropriate.</li>
      </ul>

      <p>
        These actions generally belong in an appropriate effect or
        event handler rather than directly inside rendering.
      </p>

      <h2>13. What Is the Commit Phase?</h2>

      <p>
        After React determines what needs to change, it enters the
        commit phase.
      </p>

      <p>
        This is where React applies the required changes to the
        actual UI, such as the browser DOM.
      </p>

      <div class="code">
        <pre><code>
  Render Phase
        ↓
  React calculates changes
        ↓
  Commit Phase
        ↓
  React applies changes
        ↓
  Browser displays result
        </code></pre>
      </div>

      <h2>14. Render Phase vs Commit Phase</h2>

      <p>
        This distinction is extremely important.
      </p>

      <div class="code">
        <pre><code>
  RENDER PHASE

  Component functions run
          ↓
  JSX is calculated
          ↓
  React determines what changed


  COMMIT PHASE

  React applies required changes
          ↓
  DOM is updated
          ↓
  The UI reflects the new result
        </code></pre>
      </div>

      <h2>15. Complete Lifecycle Flow</h2>

      <p>
        Now combine mounting, updating, and unmounting.
      </p>

      <div class="code">
        <pre><code>
                      Component
                        │
                        ▼
                    Mounting
                        │
                        ▼
                  Render Phase
                        │
                        ▼
                  Commit Phase
                        │
                        ▼
                  Component visible
                        │
                        ▼
                    Something changes
                        │
                        ▼
                    Updating
                        │
                        ▼
                  Render Phase
                        │
                        ▼
                  Commit Phase
                        │
                        ▼
                  Updated UI
                        │
                        ▼
                Component removed
                        │
                        ▼
                  Unmounting
                        │
                        ▼
                    Cleanup
        </code></pre>
      </div>

      <h2>16. State Update and Lifecycle</h2>

      <p>
        Let's connect lifecycle with state.
      </p>

      <div class="code">
        <pre><code>
  // Counter.jsx

  import { useState } from "react";

  function Counter() {

    const [count, setCount] = useState(0);

    return (
      &lt;div&gt;

        &lt;p&gt;{count}&lt;/p&gt;

        &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
          Increase
        &lt;/button&gt;

      &lt;/div&gt;
    );
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        First time:
      </p>

      <div class="code">
        <pre><code>
  Counter is mounted
        ↓
  Render
        ↓
  Commit
        ↓
  Count = 0
        </code></pre>
      </div>

      <p>
        User clicks:
      </p>

      <div class="code">
        <pre><code>
  setCount(...)
        ↓
  Update scheduled
        ↓
  Render again
        ↓
  Commit
        ↓
  Count = 1
        </code></pre>
      </div>

      <p>
        If the Counter is removed:
      </p>

      <div class="code">
        <pre><code>
  Counter removed from React tree
        ↓
  Unmount
        ↓
  Cleanup if needed
        </code></pre>
      </div>

      <h2>17. Props and Lifecycle</h2>

      <p>
        A component can also render again when its props change.
      </p>

      <div class="code">
        <pre><code>
  // User.jsx

  function User({ name }) {

    return (
      &lt;h2&gt;Hello {name}&lt;/h2&gt;
    );
  }

  export default User;
        </code></pre>
      </div>

      <p>
        Suppose the parent first gives:
      </p>

      <div class="code">
        name = "Dev"
      </div>

      <p>
        Later it gives:
      </p>

      <div class="code">
        name = "Rahul"
      </div>

      <p>
        The component receives new props and React renders it again.
      </p>

      <h2>18. Parent Re-render and Child Components</h2>

      <p>
        A parent rendering again can cause React to evaluate its child
        components as part of the new render.
      </p>

      <div class="code">
        <pre><code>
  // App.jsx

  import { useState } from "react";
  import Child from "./Child";

  function App() {

    const [count, setCount] = useState(0);

    return (
      &lt;div&gt;

        &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
          {count}
        &lt;/button&gt;

        &lt;Child /&gt;

      &lt;/div&gt;
    );
  }

  export default App;
        </code></pre>
      </div>

      <p>
        When <code>App</code> updates, React processes the tree again.
        Whether the DOM actually changes for <code>Child</code> is a
        separate question.
      </p>

      <p>
        This is one reason it is important to understand the difference
        between a component rendering again and the browser DOM changing.
      </p>

      <h2>19. Re-render vs DOM Update</h2>

      <p>
        These are not the same thing.
      </p>

      <div class="code">
        <pre><code>
  Component renders
        ↓
  React calculates new result
        ↓
  React compares old and new result
        ↓
  Maybe DOM changes
        </code></pre>
      </div>

      <p>
        A component can render again even when React determines that
        there is no meaningful DOM change required for part of the UI.
      </p>

      <h2>20. useEffect and Lifecycle</h2>

      <p>
        <code>useEffect</code> is often described as a lifecycle Hook,
        but it is better to think of it as a way to synchronize a
        component with something outside React.
      </p>

      <p>
        For example, a timer:
      </p>

      <div class="code">
        <pre><code>
  // Timer.jsx

  import { useEffect } from "react";

  function Timer() {

    useEffect(() => {

      const timer = setInterval(() => {
        console.log("Running...");
      }, 1000);

      return () => {
        clearInterval(timer);
      };

    }, []);

    return (
      &lt;h2&gt;Timer Running&lt;/h2&gt;
    );
  }

  export default Timer;
        </code></pre>
      </div>

      <p>
        When the component is mounted, the effect can start the timer.
      </p>

      <p>
        When the component is unmounted, the cleanup function clears
        the timer.
      </p>

      <div class="code">
        <pre><code>
  Mount
    ↓
  Effect starts timer

  Unmount
    ↓
  Cleanup runs
    ↓
  Timer stops
        </code></pre>
      </div>

      <h2>21. Why Is Cleanup Needed?</h2>

      <p>
        Imagine a component starts a timer but never stops it.
      </p>

      <div class="code">
        <pre><code>
  Component mounted
        ↓
  Timer starts

  Component unmounted
        ↓
  Timer still running
        ↓
  Unnecessary work continues
        </code></pre>
      </div>

      <p>
        Cleanup tells React how to stop or undo something that the
        effect started.
      </p>

      <p>
        The same idea applies to event listeners and subscriptions.
      </p>

      <h2>22. Effect Cleanup During Updates</h2>

      <p>
        Cleanup is not only for unmounting.
      </p>

      <p>
        When an effect needs to run again because its dependencies
        changed, React can clean up the previous effect before
        starting the new one.
      </p>

      <div class="code">
        <pre><code>
  // User.jsx

  import { useEffect } from "react";

  function User({ userId }) {

    useEffect(() => {

      console.log("Start work for", userId);

      return () => {
        console.log("Clean up", userId);
      };

    }, [userId]);

    return (
      &lt;h2&gt;User {userId}&lt;/h2&gt;
    );
  }

  export default User;
        </code></pre>
      </div>

      <p>
        If <code>userId</code> changes:
      </p>

      <div class="code">
        <pre><code>
  Old effect
      ↓
  Cleanup old effect
      ↓
  New effect
      ↓
  Works with new userId
        </code></pre>
      </div>

      <h2>23. Mounting, Updating and Unmounting with useEffect</h2>

      <p>
        A useful mental model is:
      </p>

      <div class="code">
        <pre><code>
  Mount
    ↓
  Effect runs

  Update
    ↓
  If dependencies changed
    ↓
  Previous cleanup
    ↓
  Effect runs again

  Unmount
    ↓
  Final cleanup
        </code></pre>
      </div>

      <p>
        There are additional details around exactly when effects run,
        especially with different effect types and modern React
        development behavior, which we will cover in the Hooks section.
      </p>

      <h2>24. Render Phase Can Run More Than Once</h2>

      <p>
        Do not assume that a component function runs exactly once for
        every visible UI update.
      </p>

      <p>
        React's rendering system can run rendering work more than once
        while determining the result.
      </p>

      <p>
        This is one reason render code should be pure.
      </p>

      <p>
        For example, avoid doing this directly inside rendering:
      </p>

      <div class="code">
        <pre><code>
  // Avoid

  function Counter() {

    localStorage.setItem("count", "10");

    return &lt;h1&gt;10&lt;/h1&gt;;
  }

  export default Counter;
        </code></pre>
      </div>

      <p>
        Writing to external systems during render can cause unexpected
        behavior because rendering is supposed to calculate the UI,
        not perform unrelated side effects.
      </p>

      <h2>25. Render Should Be Pure</h2>

      <p>
        A simple way to think about a component's render is:
      </p>

      <div class="code">
        <pre><code>
  Props + State
        ↓
  UI
        </code></pre>
      </div>

      <p>
        Given the same inputs, the component should produce the same
        kind of result.
      </p>

      <div class="code">
        <pre><code>
  // Good

  function Price({ price, quantity }) {

    const total = price * quantity;

    return &lt;p&gt;₹{total}&lt;/p&gt;;
  }

  export default Price;
        </code></pre>
      </div>

      <p>
        The calculation does not modify anything outside the component.
      </p>

      <h2>26. Complete Modern React Lifecycle</h2>

      <p>
        Now we can put everything together.
      </p>

      <div class="code">
        <pre><code>
                COMPONENT CREATED
                        ↓
                    MOUNTING
                        ↓
                  RENDER PHASE
                        ↓
                Component function
                    executes
                        ↓
                  React calculates
                      UI
                        ↓
                  COMMIT PHASE
                        ↓
                  DOM updated
                        ↓
                  Component visible
                        │
                        │
                  Something changes
                        │
                        ▼
                    UPDATING
                        ↓
                  RENDER PHASE
                        ↓
                Component function
                    executes again
                        ↓
                  React calculates
                  new UI
                        ↓
                  COMMIT PHASE
                        ↓
                DOM updated if needed
                        │
                        │
                Component removed
                        │
                        ▼
                  UNMOUNTING
                        ↓
                Effect cleanup
                        ↓
                  Component gone
        </code></pre>
      </div>

      <h2>27. What Actually Triggers an Update?</h2>

      <p>
        A component can be rendered again for several reasons.
      </p>

      <h3>State update</h3>

      <div class="code">
        setCount(10);
      </div>

      <h3>Props change</h3>

      <div class="code">
        <pre><code>
  &lt;User name="Rahul" /&gt;
        </code></pre>
      </div>

      <h3>Parent renders</h3>

      <p>
        A parent component rendering again can cause React to process
        its child tree again.
      </p>

      <h3>Context changes</h3>

      <p>
        A component reading a changed context value can render again.
      </p>

      <h2>28. Lifecycle Is Not Just useEffect</h2>

      <p>
        This is an important correction to a common beginner explanation.
      </p>

      <p>
        You may hear:
      </p>

      <div class="code">
        "useEffect is the React lifecycle."
      </div>

      <p>
        That is too simple.
      </p>

      <p>
        Lifecycle describes the component's existence and rendering
        process.
        <code>useEffect</code> is one tool for synchronizing with
        external systems after rendering and for cleaning up that work.
      </p>

      <p>
        So think:
      </p>

      <div class="code">
        <pre><code>
  Lifecycle
    ↓
  Mount
  Update
  Unmount

  Rendering
    ↓
  Render phase
  Commit phase

  Effects
    ↓
  Synchronize with external systems
  Cleanup
        </code></pre>
      </div>

      <h2>29. Class Lifecycle vs Function Components</h2>

      <p>
        Older React applications often used class components with
        lifecycle methods such as:
      </p>

      <div class="code">
        <pre><code>
  componentDidMount()
  componentDidUpdate()
  componentWillUnmount()
        </code></pre>
      </div>

      <p>
        Modern React function components normally use Hooks and the
        rendering/effect model instead.
      </p>

      <p>
        You may still see class lifecycle methods in older projects,
        so understanding their names is useful, but you do not need
        to use class components for modern React development.
      </p>

      <h2>30. The Most Important Lifecycle Mental Model</h2>

      <div class="code">
        <pre><code>
  MOUNT

  Component appears
        ↓
  Render
        ↓
  Commit
        ↓
  Effect work when applicable


  UPDATE

  State / props / context changes
        ↓
  Render
        ↓
  React compares results
        ↓
  Commit necessary changes
        ↓
  Effects synchronize when applicable


  UNMOUNT

  Component is removed
        ↓
  Cleanup runs when applicable
        ↓
  Component is gone
        </code></pre>
      </div>

      <h2>31. One Complete Example</h2>

      <p>
        This example shows mounting, updating, and unmounting together.
      </p>

      <div class="code">
        <pre><code>
  // Clock.jsx

  import { useEffect, useState } from "react";

  function Clock() {

    const [time, setTime] = useState(
      new Date().toLocaleTimeString()
    );

    useEffect(() => {

      console.log("Clock mounted");

      const timer = setInterval(() => {

        setTime(
          new Date().toLocaleTimeString()
        );

      }, 1000);

      return () => {

        console.log("Clock unmounted");

        clearInterval(timer);

      };

    }, []);

    return (
      &lt;div&gt;

        &lt;h2&gt;Current Time&lt;/h2&gt;

        &lt;p&gt;{time}&lt;/p&gt;

      &lt;/div&gt;
    );
  }

  export default Clock;
        </code></pre>
      </div>

      <p>
        When <code>Clock</code> first appears:
      </p>

      <div class="code">
        <pre><code>
  Mount
    ↓
  Render
    ↓
  Commit
    ↓
  Effect starts
    ↓
  Timer starts
        </code></pre>
      </div>

      <p>
        Every second:
      </p>

      <div class="code">
        <pre><code>
  Timer
    ↓
  setTime()
    ↓
  State update
    ↓
  Render
    ↓
  Commit
    ↓
  New time displayed
        </code></pre>
      </div>

      <p>
        When <code>Clock</code> is removed:
      </p>

      <div class="code">
        <pre><code>
  Unmount
    ↓
  Cleanup
    ↓
  clearInterval()
    ↓
  Timer stops
        </code></pre>
      </div>

      <p>
        This is the modern React lifecycle in practice:
        React renders components, commits the required UI changes,
        updates them when their inputs change, and cleans up external
        work when components or effects are no longer needed.
      </p>
    `
  },
  {
    title: " Hooks",
    content: "",
  },
  {
    title: " Forms in React",
    content: "",
  },
  {
    title: " Context API",
    content: "",
  },
  {
    title: " Portals",
    content: "",
  },
  {
    title: " Error Boundaries",
    content: "",
  },
  {
    title: " Lazy Loading",
    content: "",
  },
  {
    title: " Suspense",
    content: "",
  },
  {
    title: " Strict Mode",
    content: "",
  },
  {
    title: " Performance Optimization",
    content: "",
  },
  {
    title: " React Internals",
    content: "",
  },
  {
    title: " Advanced React Patterns",
    content: "",
  },
];

export default reactData;

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
