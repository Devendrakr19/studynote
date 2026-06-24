const htmlData = [
  {
    title: "Introduction to HTML",
    content: `
      <h1>Introduction to HTML</h1>

      <h2>What is HTML?</h2>
      <p style="margin-bottom: 10px; margin-top:10px;">
        HTML stands for <b>HyperText Markup Language</b>.
        It is the standard markup language used to create web pages.
      </p>

       <ul style="padding-left: 20px;">
         <li style="margin-bottom: 10px;">
          <b> HyperText:</b> Refers to the link to other pages/documents (via hyperlinks).
         </li>
         <li>
         <b>Markup Language:</b> Uses tags to describe the structure and meaning of the content
          rather than how it looks (presentation is mostly handled by CSS).
         </li>
       </ul>

      <h2 style="margin-bottom: 5px; margin-top:15px;">Example</h2>

    <div class="code">
  &lt;!doctype html&gt;
  <br><br>
  &lt;html lang="en"&gt;
  <br><br>
  &nbsp;&nbsp;&lt;head&gt;
  <br><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="UTF-8" /&gt;
  <br><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  <br><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Study Hub&lt;/title&gt;
  <br><br>
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;link rel="stylesheet" href="css/style.css" /&gt;
  <br><br>
  &nbsp;&nbsp;&lt;/head&gt;
  <br><br>
  &nbsp;&nbsp;&lt;body&gt;
  <br><br>
  &nbsp;&nbsp;&nbsp;&nbsp;write content here
  <br><br>
  &nbsp;&nbsp;&lt;/body&gt;
  <br><br>
  &lt;/html&gt;
</div>

<h2 style="margin-bottom: 10px; margin-top:15px;">History of HTML</h2>

<ol style="padding-left: 20px;">
  <li style="margin-bottom: 15px;">
    <strong>Late 1980s – Early 1990s</strong>
    <ul style="padding-left: 20px; margin-top: 8px;">
      <li style="margin-bottom: 5px;">
        HTML was invented by Tim Berners-Lee in 1989–1990 while working at CERN.
      </li>
      <li>
        Purpose: To share and link documents over the Internet using a simple markup language.
      </li>
    </ul>
  </li>

  <li style="margin-bottom: 15px;">
    <strong>HTML 2.0 (1995)</strong>
    <ul style="padding-left: 20px; margin-top: 8px;">
      <li>
        First formal specification.
      </li>
      <li>
        Standardized basic elements like headings, paragraphs, links, lists, and forms.
      </li>
    </ul>
  </li>

  <li style="margin-bottom: 15px;">
    <strong>HTML 3.2 &amp; HTML 4.01 (1997)</strong>
    <ul style="padding-left: 20px; margin-top: 8px;">
      <li>
        Introduced features like tables, styles, and scripting support.
      </li>
      <li>
        HTML 4.01 emphasized separation of content and presentation, encouraging the use of CSS.
      </li>
    </ul>
  </li>

  <li style="margin-bottom: 15px;">
    <strong>XHTML (2000)</strong>
    <ul style="padding-left: 20px; margin-top: 8px;">
      <li>
        A stricter, XML-based version of HTML.
      </li>
      <li>
        Ensured better parsing and adherence to web standards.
      </li>
    </ul>
  </li>

  <li>
    <strong>HTML5 (2014)</strong>
    <ul style="padding-left: 20px; margin-top: 8px;">
      <li>
        Current standard used today.
      </li>
      <li>
        Added semantic tags (&lt;header&gt;, &lt;footer&gt;, &lt;article&gt;), multimedia support (&lt;video&gt;, &lt;audio&gt;), canvas for graphics, local storage, and improved APIs for web applications.
      </li>
    </ul>
  </li>
</ol>

    `,
  },
  {
    title: "HTML Document Structure",
    content: `
      <h1>HTML Document Structure</h1>
      <h2 style="margin-bottom:5px;">&lt;!DOCTYPE html&gt;</h2>
      <p>
        <strong>Purpose:</strong> Declares the document type and HTML version.
      </p>
      <p>
        <strong>Role:</strong> Helps the browser know that the page uses HTML5 and should be rendered in standards mode.
      </p>
      <p>
        <strong>Placement:</strong> Must be the very first line in the HTML file.
      </p>
      <div class="code">What Happens If You Don't Use &lt;!DOCTYPE html&gt;?</div>
      <p>
        Browsers use different rendering modes depending on whether a doctype is present.
      </p>
      <table style="width:100%; border-collapse: collapse; margin-top:10px;">
        <tr>
          <th style="border:1px solid #ccc; padding:8px;">Mode</th>
          <th style="border:1px solid #ccc; padding:8px;">Trigger</th>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            Standards Mode
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;!DOCTYPE html&gt; is present → Browser follows HTML5 standards.
          </td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            Almost Standards Mode
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            Older doctypes → Mostly standard with minor quirks.
          </td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            Quirks Mode
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            No doctype or incorrect doctype → Browser behaves like old legacy browsers.
          </td>
        </tr>
      </table>

      <h3 style="margin-bottom:15px; margin-top:15px;">Practical Effects:</h3>

      <ol style="padding-left:20px;">
        <li style="margin-bottom:15px;">
          <strong>Box Model Differences</strong>
          <ul style="padding-left:20px; margin-top:8px;">
            <li>In quirks mode, width and height calculations can differ.</li>
            <li>
              Example: <code>width: 100px; padding: 10px;</code>
            </li>
            <li>
              Standards Mode → Total width = 120px
            </li>
            <li>
              Quirks Mode → Total width = 100px (padding included inside width)
            </li>
          </ul>
        </li>

        <li style="margin-bottom:15px;">
          <strong>CSS Issues</strong>
          <ul style="padding-left:20px; margin-top:8px;">
            <li>Some modern CSS properties may not behave as expected.</li>
            <li>Flexbox, Grid, and positioning can render inconsistently.</li>
          </ul>
        </li>

        <li style="margin-bottom:15px;">
          <strong>JavaScript Differences</strong>
          <ul style="padding-left:20px; margin-top:8px;">
            <li>
              Certain DOM properties may behave differently in quirks mode.
            </li>
          </ul>
        </li>

        <li>
          <strong>Validation Problems</strong>
          <ul style="padding-left:20px; margin-top:8px;">
            <li>
              Without &lt;!DOCTYPE html&gt;, the page is not considered valid HTML5.
            </li>
            <li>
              This can affect SEO, accessibility, and browser compatibility.
            </li>
          </ul>
        </li>
      </ol>

      <div class="note" style="margin-top:20px; padding:12px; border-left:4px solid #007bff;">
        <strong>Interview Tip:</strong>
        Always start every HTML5 document with
        <code>&lt;!DOCTYPE html&gt;</code> to ensure the browser uses Standards Mode.
      </div>

      <h2 style="margin-bottom:15px; margin-top:15px;">&lt;html&gt; Tag</h2>
      <p>
        <strong>Purpose:</strong> The root element that contains all HTML content.
      </p>

      <h3 style="margin-bottom:5px;">Attributes</h3>

      <ul style="padding-left: 20px;">
        <li>
          <strong>lang:</strong> Specifies the language of the document (important for accessibility and SEO).
        </li>
      </ul>

      <h3 style="margin-top:15px;">Example</h3>

      <div class="code">
        &lt;html lang="en"&gt;
      </div>

      <h3 style="margin-bottom:15px; margin-top:15px;">Why <code>lang</code> Attribute Important</h3>

      <h4 style="margin-bottom:5px;">Accessibility</h4>

      <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;">
          Screen readers (used by visually impaired users) rely on the <code>lang</code> attribute to pronounce words correctly.
        </li>

        <li style="margin-bottom: 10px;">
          For example:
          <ul style="padding-left: 20px; margin-top: 8px;">
            <li><code>lang="en"</code> → English pronunciation</li> 
            <li><code>lang="fr"</code> → French pronunciation</li>
          </ul>
        </li>

        <li>
          Without it, the screen reader may guess or use the wrong voice/accent.
        </li>
      </ul>

      <h4 style="margin-bottom:15px; margin-top:15px;">Search Engine Optimization (SEO)</h4>

      <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;">
          Search engines like Google use the <code>lang</code> attribute to:
        </li>

        <ul style="padding-left: 20px;">
          <li>
            Understand the language of your page.
          </li>

          <li>
            Serve the correct version of your site to users based on their region or language.
          </li>
        </ul>
      </ul>

      <div style="margin-top: 20px; padding: 12px; border-left: 4px solid #007bff;">
        <strong>Interview Tip:</strong>
        Always add the <code>lang</code> attribute to the
        <code>&lt;html&gt;</code> tag because it improves accessibility,
        SEO, and user experience.
      </div>

      <h2 style="margin-bottom:15px; margin-top:15px;">&lt;head&gt; Tag</h2>

        <p>
          <strong>Purpose:</strong> Contains metadata about the document.
        </p>

        <p style="margin-bottom:5px;>
          <strong>Metadata</strong> is information not directly visible to users but used by browsers, search engines, and tools.
        </p>

        <h3>&lt;meta charset="UTF-8"&gt;</h3>

        <p>
          Defines the character encoding of the HTML document. Ensures that all characters, including special symbols, emojis, and non-English letters, display correctly.
        </p>

        <h4 style="margin-bottom:5px;">UTF-8</h4>

        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 10px;">
            Unicode Transformation Format - 8 bits.
          </li>

          <li style="margin-bottom: 10px;">
            Encodes characters from almost all writing systems (Latin, Cyrillic, Arabic, Chinese, emojis, etc.)
          </li>

          <li>
            Universal support and compatibility with modern web standards.
          </li>
        </ul>

        <h3 style="margin-bottom:10px; margin-top:10px;">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</h3>

        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 2px;">
            <strong>meta</strong> = metadata
          </li>

          <li style="margin-bottom: 2px;">
            <strong>viewport</strong> = the visible area of the web page on a device (mobile, tablet, desktop)
          </li>

          <li>
            <strong>content</strong> = settings for the viewport
          </li>
        </ul>

        <p>
          <strong>Purpose:</strong> Makes the page responsive on all devices.<br>
          <strong>Why:</strong> Without it, mobile browsers may zoom out and show desktop layout tiny on small screens.
        </p>

        <h4>Explanation of Attributes</h4>

        <table style="width:100%; border-collapse: collapse; margin-top:10px;">
          <tr>
            <th style="border:1px solid #ccc; padding:8px;">Attribute</th>
            <th style="border:1px solid #ccc; padding:8px;">Meaning</th>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              width=device-width
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Set the width of the page to the device screen width
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              initial-scale=1.0
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Sets initial zoom level (1 = default, no zoom)
            </td>
          </tr>
        </table>

        <h3 style="margin-bottom:15px; margin-top:15px;">&lt;title&gt;My First Page&lt;/title&gt;</h3>

        <p>
          <strong>Purpose:</strong> Sets the text shown in the browser tab and used by search engines as page title.
        </p>

        <p>
          <strong>Why:</strong> Important for:
        </p>

        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 5px;">
            User experience (tab label)
          </li>

          <li>
            SEO (Google uses it as clickable search result)
          </li>
        </ul>

        <h3 style="margin-bottom:10px; margin-top:10px;">&lt;link rel="stylesheet" href="style.css"&gt;</h3>

        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 10px;">
            <strong>link</strong> → links external resources
          </li>

          <li style="margin-bottom: 10px;">
            <strong>rel="stylesheet"</strong> → relationship: this link is a CSS stylesheet
          </li>

          <li>
            <strong>href="style.css"</strong> → hyperlink reference to the CSS file location
          </li>
        </ul>

        <p>
          <strong>Purpose:</strong> Connects an external CSS file to style your HTML page.
        </p>

        <p>
          <strong>Why:</strong> Keeps content (HTML) separate from presentation (CSS), which is best practice.
        </p>

        <p>
          <strong>When:</strong> In &lt;head&gt;, so CSS loads before the page renders.
        </p>

        <h3 style="margin-bottom:10px; margin-top:10px;">&lt;body&gt; Tag</h3>

        <p>
          Contains all visible content of the webpage. like Text, images, links, lists, tables, forms, multimedia, etc.
        </p>

        <h3>Example</h3>

        <div class="code">
   

          &lt;body&gt;
            Content goes here
          &lt;/body&gt;
 
        </div>

        <div style="margin-top:20px; padding:12px; border-left:4px solid #007bff;">
          <strong>Interview Tip:</strong>
          The most commonly used tags inside the <code>&lt;head&gt;</code> section are
          <code>&lt;meta&gt;</code>, <code>&lt;title&gt;</code>, and
          <code>&lt;link&gt;</code>. Questions about UTF-8, viewport, and SEO are very common in interviews.
        </div>

        <h2 style="margin-bottom:15px; margin-top:15px;">Head vs Body</h2>

        <table style="width:100%; border-collapse: collapse; margin-top:10px;">
          <tr>
            <th style="border:1px solid #ccc; padding:8px;">Feature</th>
            <th style="border:1px solid #ccc; padding:8px;">&lt;head&gt;</th>
            <th style="border:1px solid #ccc; padding:8px;">&lt;body&gt;</th>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              Purpose
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Metadata / info about page
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Visible content for users
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              Visible on page
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              ❌ No
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              ✅ Yes
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              Typical content
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;title&gt;, &lt;meta&gt;, &lt;link&gt;, &lt;script&gt;, &lt;style&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Text, images, links, forms, tables, videos, interactive elements
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              Function in browser
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Helps browser render, SEO, layout, responsiveness
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Displays actual page content, interactivity
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              Location
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Inside &lt;html&gt; at top
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Inside &lt;html&gt; after &lt;head&gt;
            </td>
          </tr>
        </table>

        <h2 style="margin-bottom:15px; margin-top:15px;">Tag</h2>

        <p>
          A tag is a markup keyword enclosed in angle brackets that tells the browser how to handle content.
        </p>

        <h3 style="margin-bottom:5px;">Types</h3>

        <ol style="padding-left:20px;">
          <li style="margin-bottom:15px;">
            <strong>Opening tag:</strong> Starts an element → <code>&lt;p&gt;</code>
          </li>

          <li style="margin-bottom:15px;">
            <strong>Closing tag:</strong> Ends an element → <code>&lt;/p&gt;</code>
          </li>

          <li>
            <strong>Self-closing tag:</strong> Single tag that doesn’t need a closing tag →
            <code>&lt;img src="image.jpg" alt="Image"&gt;</code>
          </li>
        </ol>

        <h2 style="margin-bottom:15px; margin-top:15px;">Element</h2>

        <p>
          An element is the complete structure in HTML, including the opening tag, content, and closing tag.
        </p>

        <ul style="padding-left:20px;">
          <li style="margin-bottom:10px;">
            Element = <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code>
          </li>

          <li style="margin-bottom:10px;">
            Tag = <code>&lt;p&gt;</code> or <code>&lt;/p&gt;</code>
          </li>

          <li>
            Content = This is a paragraph.
          </li>
        </ul>

        <h2 style="margin-bottom:15px; margin-top:15px;">Void (Self-Closing) Elements</h2>

        <p>
          HTML elements that do not have any content or closing tag.
        </p>

        <p>
          Example:
          <code>&lt;img src="logo.png" alt="Logo"&gt;</code>
        </p>

        <table style="width:100%; border-collapse: collapse; margin-top:10px;">
          <tr>
            <th style="border:1px solid #ccc; padding:8px;">Void Element</th>
            <th style="border:1px solid #ccc; padding:8px;">Default Display</th>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;img&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              inline (but acts like inline-block visually)
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;br&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              inline (forces line break)
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;hr&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              block
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;input&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              inline-block
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;meta&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              none (not rendered visually)
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;link&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              none (not visible)
            </td>
          </tr>
        </table>

        <h2 style="margin-bottom:15px; margin-top:15px;">Attribute</h2>

        <p>
          Attributes provide extra information about an element.
        </p>

        <table style="width:100%; border-collapse: collapse; margin-top:10px;">
          <tr>
            <th style="border:1px solid #ccc; padding:8px;">Element</th>
            <th style="border:1px solid #ccc; padding:8px;">Attribute</th>
            <th style="border:1px solid #ccc; padding:8px;">Purpose</th>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;a&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              href="..."
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Link URL
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;a&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              target="_blank"
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Open link in new tab
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;img&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              src="..."
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Image source
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px;">
              &lt;img&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              alt="..."
            </td>
            <td style="border:1px solid #ccc; padding:8px;">
              Alternative text if image fails
            </td>
          </tr>
        </table>

        <h2 style="margin-bottom:15px; margin-top:15px;">Comments</h2>

        <p>
          Comments are notes or explanations in your code that the browser ignores — they don’t affect how the page looks or works.
        </p>

        <p>
          They’re used only for developers to understand or organize code.
        </p>

        <h3>Example</h3>

        <div class="code">
          &lt;!-- This is a comment --&gt;
        </div>

        <div style="margin-top:20px; padding:12px; border-left:4px solid #007bff;">
          <strong>Interview Tip:</strong>
          Remember the difference:
          <br><br>
          <strong>Tag</strong> = Opening or closing markup such as <code>&lt;p&gt; &lt;/p&gt;</code>.
          <br>
          <strong>Element</strong> = Complete structure including tag + content.
          <br>
          <strong>Attribute</strong> = Extra information added inside a tag.
        </div>
    `,
  },
  {
    title: "Text Formatting",
    content: "<h1>HTML Paragraph</h1><p>Paragraph tag is used for text.</p>",
  },
  {
    title: "Links & Media",
    content: "<h1>HTML Paragraph</h1><p>Paragraph tag is used for text.</p>",
  },
  {
    title: "Lists",
    content: "<h1>HTML Paragraph</h1><p>Paragraph tag is used for text.</p>",
  },
  {
    title: "Tables",
    content: "<h1>HTML Paragraph</h1><p>Paragraph tag is used for text.</p>",
  },
  {
    title: "Forms",
    content: "<h1>HTML Paragraph</h1><p>Paragraph tag is used for text.</p>",
  },
  {
    title: "Semantic HTML",
    content: "<h1>HTML Paragraph</h1><p>Paragraph tag is used for text.</p>",
  },
  {
    title: "Advanced HTML",
    content: "<h1>HTML Paragraph</h1><p>Paragraph tag is used for text.</p>",
  },
  {
    title: "SEO & Best Practices",
    content: "<h1>HTML Paragraph</h1><p>Paragraph tag is used for text.</p>",
  },
];

export default htmlData;
