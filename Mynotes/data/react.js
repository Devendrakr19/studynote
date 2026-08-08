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

  `
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
  `
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
  `
},
  {
    title: "Rendering in React",
    content: "",
  },
  {
    title: "Props",
    content: "",
  },
  {
    title: "Event Handling",
    content: "",
  },
  {
    title: "State Management",
    content: "",
  },
  {
    title: "React Lifecycle",
    content: "",
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
