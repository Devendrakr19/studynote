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
