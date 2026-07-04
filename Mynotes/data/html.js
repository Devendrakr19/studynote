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

        <p style="margin-bottom:5px;">
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
    content: ` 
        <h2 style="margin-bottom:15px;">Text Formatting &amp; Content</h2>

        <h3>Headings</h3>

        <p>
          Headings define the titles or subtitles of sections in a webpage.
        </p>

        <p>
          They help both users and search engines understand the content hierarchy and structure.
        </p>

        <h3>Examples</h3>

        <div class="code">
          &lt;h1&gt;This is heading level 1&lt;/h1&gt;
          <br>
          &lt;h2&gt;This is heading level 2&lt;/h2&gt;
          <br>
          &lt;h3&gt;This is heading level 3&lt;/h3&gt;
          <br>
          &lt;h4&gt;This is heading level 4&lt;/h4&gt;
          <br>
          &lt;h5&gt;This is heading level 5&lt;/h5&gt;
          <br>
          &lt;h6&gt;This is heading level 6&lt;/h6&gt;
        </div>

        <h3 style="margin-bottom:15px;">Output</h3>
        <div class="output">
          <h1 style="margin-bottom:0px;">This is heading level 1</h1><br>
          <h2>This is heading level 2</h2><br>
          <h3>This is heading level 3</h3><br>
          <h4>This is heading level 4</h4><br>
          <h5>This is heading level 5</h5><br>
          <h6>This is heading level 6</h6><br>
        </div>

        <h3>Heading Levels</h3>

        <table style="width:100%; border-collapse: collapse; margin-top:10px;">
          <tr>
            <th style="border:1px solid #ccc; padding:8px;">Tag</th>
            <th style="border:1px solid #ccc; padding:8px;">Importance</th>
            <th style="border:1px solid #ccc; padding:8px;">Default Browser Size</th>
            <th style="border:1px solid #ccc; padding:8px;">Usage</th>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              &lt;h1&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Highest
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              ~32px (largest)
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Page title
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              &lt;h2&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              High
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              ~24px
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Section title
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              &lt;h3&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Medium
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              ~20px
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Sub-section
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              &lt;h4&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Low
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              ~16px
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Sub-sub-section
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              &lt;h5&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Lower
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              ~13px
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Minor section
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              &lt;h6&gt;
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Lowest
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              ~10px
            </td>
            <td style="border:1px solid #ccc; padding:8px; text-align: center">
              Smallest heading
            </td>
          </tr>
        </table>

        <div style="margin-top:20px; padding:12px; border-left:4px solid #007bff;">
          <strong>Interview Tip:</strong>
          Use only one <code>&lt;h1&gt;</code> per page for the main title. Follow a proper hierarchy such as
          <code>&lt;h1&gt;</code> → <code>&lt;h2&gt;</code> → <code>&lt;h3&gt;</code> to improve SEO, accessibility, and content structure.
        </div>

        <h2 style="margin-top:20px;">Paragraph</h2>
          <p>
            The <code>&lt;p&gt;</code> tag defines a paragraph of text — a basic block of content in HTML.
          </p>

          <p>
            It represents a logical section of text (like a sentence or group of sentences).
          </p>

          <h3>Example</h3>

          <div class="code">
            &lt;p&gt;This is a paragraph in HTML.&lt;/p&gt;
          </div>

          <h3>Output</h3>

          <div class="output">
            <p>This is a paragraph in HTML.</p>
          </div>

          <h2>&lt;br&gt; — Line Break Element</h2>

          <p>
            The <code>&lt;br&gt;</code> (line break) tag is used to force text to break and continue on a new line within the same paragraph or block of text.
          </p>

          <h3>Example</h3>

          <div class="code">
            Hello World!&lt;br&gt;
            Welcome to HTML.
          </div>

          <h3>Output</h3>

          <div class="output">
            Hello World!<br>
            Welcome to HTML.
          </div>

          <h2 style="margin-top:15px;">&lt;hr&gt; — Horizontal Rule Element</h2>

          <p>
            The <code>&lt;hr&gt;</code> tag represents a thematic break between sections of content — like a section divider or topic change.
          </p>

          <p>
            Originally it was a horizontal line, but in HTML5, its meaning is semantic:
          </p>

          <p>
            Represents a paragraph-level thematic break (A separation between two different topics or ideas).
          </p>

          <h3>Example</h3>

          <div class="code">
            &lt;p&gt;HTML is used to structure web pages.&lt;/p&gt;

            &lt;hr&gt; 
          </div>

          <h3>Output</h3>

          <div class="output">
            <p>HTML is used to structure web pages.</p>
            <hr>             
          </div> 

          <h2 style="margin-top:15px;">&lt;b&gt; — Bold (Styling Only)</h2>

          <p>
            Bold text Only visual — no extra importance for search engines or screen readers.
          </p>

          <h4>Example</h4>

          <div class="code">
            &lt;b&gt;This text is bold&lt;/b&gt;
          </div>

          <h4>Output</h4>

          <div class="output">
            <b>This text is bold</b>
          </div> 

          <h2 style="margin-top:15px;">&lt;strong&gt;</h2>

          <p>
            Bold text has semantic importance — screen readers announce it as “strong emphasis”.
          </p>

          <p>
            Use for: Warnings, alerts, key points.
          </p>

          <p>
            SEO Impact: <code>&lt;strong&gt;</code> helps search engines understand “important” text.
          </p>

          <h4>Example</h4>

          <div class="code">
            &lt;strong&gt;Warning: Do not share your password.&lt;/strong&gt;
          </div>

          <h4>Output</h4>

          <div class="output">
            <strong>Warning: Do not share your password.</strong>
          </div> 

          <h2 style="margin-top:15px;">&lt;i&gt; — Italic (Styling Only)</h2>

          <p>
            Italic text Only visual.
          </p>

          <p>
            Use for: Names, foreign words, technical terms, etc.
          </p>

          <h4>Example</h4>

          <div class="code">
            &lt;i&gt;Bonjour&lt;/i&gt;
          </div>

          <h4>Output</h4>

          <div class="output">
            <i>Bonjour</i>
          </div> 

          <h2 style="margin-top:15px;">&lt;em&gt; — Emphasis (Semantic Italic)</h2>

          <p>
            Italic text Adds emphasis in speech (semantic).
          </p>

          <p>
            Screen readers stress it vocally.
          </p>

          <p>
            Use for: Meaningful emphasis.
          </p>

          <h4>Example</h4>

          <div class="code">
            Please &lt;em&gt;read carefully&lt;/em&gt; before submitting.
          </div>

          <h4>Output</h4>

          <div class="output">
            Please <em>read carefully</em> before submitting.
          </div> 
          <h2 style="margin-top:15px;">&lt;mark&gt; — Highlighted Text</h2>

          <p>
            Yellow highlighted background (like a highlighter).
          </p>

          <p>
            Indicates relevant or highlighted text.
          </p>

          <p>
            Use for: Search results, matches, or focus text.
          </p>

          <h4>Example</h4>

          <div class="code">
            HTML is a &lt;mark&gt;markup language&lt;/mark&gt;.
          </div>

          <h4>Output</h4>

          <div class="output">
            HTML is a <mark>markup language</mark>.
          </div> 

          <h2 style="margin-top:15px;">&lt;small&gt; — Smaller, Secondary Text</h2>

          <p>
            The <code>&lt;small&gt;</code> element makes text smaller than the surrounding text and also indicates that the text is less important — often secondary information.
          </p>

          <p>
            If the paragraph text is 16px, then <code>&lt;small&gt;</code> will render around 12.8px (≈ 80% of 16px).
          </p>

          <h4>Example</h4>

          <div class="code">
            Copyright 2026 &lt;small&gt;All Rights Reserved&lt;/small&gt;
          </div>

          <h4>Output</h4>

          <div class="output">
            Copyright 2026 <small>All Rights Reserved</small>
          </div> 

          <h2 style="margin-top:15px;">&lt;sub&gt; — Subscript</h2>

          <p>
            Lowers text slightly below baseline.
          </p>

          <p>
            Use for: Chemical formulas, math expressions, etc.
          </p>

          <h4>Example</h4>

          <div class="code">
            H&lt;sub&gt;2&lt;/sub&gt;O
          </div>

          <h4>Output</h4>

          <div class="output">
            H<sub>2</sub>O
          </div> 

          <h2 style="margin-top:15px;">&lt;sup&gt; — Superscript</h2>

          <p>
            Raises text slightly above baseline.
          </p>

          <p>
            Use for: Exponents, footnote numbers, dates (1&lt;sup&gt;st&lt;/sup&gt;)
          </p>

          <h4>Example</h4>

          <div class="code">
            x&lt;sup&gt;2&lt;/sup&gt;
            <br>
            1&lt;sup&gt;st&lt;/sup&gt;
          </div>

          <h4>Output</h4>

          <div class="output">
            x<sup>2</sup>
            <br>
            1<sup>st</sup>
          </div> 

          <h2 style="margin-top:15px;">Semantic Text Tags</h2>

          <p>
            Semantic text tags are all about meaning, not just how text looks.
          </p>

          <p>
            They help accessibility, SEO, and structured content.
          </p>

          <p>
            Use <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;mark&gt;</code>, <code>&lt;small&gt;</code>, <code>&lt;sub&gt;</code>, <code>&lt;sup&gt;</code>, <code>&lt;abbr&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;dfn&gt;</code>, and <code>&lt;cite&gt;</code> appropriately.
          </p>

          <p>
            <strong>Always provide attributes when meaningful</strong> (e.g., <code>&lt;abbr title="..."&gt;</code>, <code>&lt;time datetime="..."&gt;</code>).
          </p>
`,
  },
  {
    title: "Links & Media",
    content: `
    <h2>Links &amp; Navigation</h2>

    <h3 style="margin-top:15px;">Anchor &lt;a&gt; Tag</h3>

    <p>
      The <code>&lt;a&gt;</code> tag is used to create hyperlinks, which allow users to navigate:
    </p>

    <ul style="padding-left: 20px;">
      <li>To another page</li>
      <li>To a section of the same page</li>
      <li>To an external website</li>
      <li>To download a file or trigger an action</li>
    </ul>

    <h3 style="margin-top:15px; margin-bottom:5px;">Key Attributes</h3>

    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="border:1px solid #ccc; padding:8px;">Attribute</th>
        <th style="border:1px solid #ccc; padding:8px;">Purpose</th>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">href</td>
        <td style="border:1px solid #ccc; padding:8px;">
          URL to link to (required)
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">target</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Where to open the link (_self, _blank, _parent, _top)
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">rel</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Relationship of linked document (nofollow, noopener, noreferrer)
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">title</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Extra info tooltip
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">download</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Download file instead of opening
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">id</td>
        <td style="border:1px solid #ccc; padding:8px;">
          For internal anchors/fragment links
        </td>
      </tr>
    </table>

    <h2 style="margin-top:15px; margin-bottom:15px;">Absolute vs Relative URLs</h2>

    <h3 style="margin-bottom:5px;">Absolute URL</h3>

    <ul style="padding-left: 20px;">
      <li>
        Full path including protocol (http/https) and domain.
      </li>

      <li>
        Always points to the same location, regardless of the current page.
      </li>
    </ul>
    <h4 style="margin-top:10px;">Example</h4>
    <div class="code" style="margin-top:5px;">
      &lt;a href="https://www.google.com"&gt;Visit Google&lt;/a&gt;
    </div> 

    <h3 style="margin-bottom:5px;">Relative URL</h3>

    <ul style="padding-left: 20px;">
      <li>
        Path relative to current file location.
      </li>

      <li>
        Flexible if moving pages around in the same website.
      </li>
    </ul>

    <p>
      <strong>Use for:</strong> Internal navigation within your website.
    </p>
    <h4 style="margin-top:10px;">Example</h4>
    <div class="code" style="margin-top:5px;">
      &lt;a href="about.html"&gt;About Us&lt;/a&gt;
    </div>

    <h2 style="margin-bottom:10px;">target Attribute</h2>
    <div class="code">
      &lt;a href="https://www.google.com" target="_self"&gt;Open in Same Tab&lt;/a&gt;

      <br><br>

      &lt;a href="https://www.google.com" target="_blank"&gt;Open in New Tab&lt;/a&gt;
    </div>

    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="border:1px solid #ccc; padding:8px;">Value</th>
        <th style="border:1px solid #ccc; padding:8px;">Meaning</th>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">_self</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Default, opens link in the same tab
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">_blank</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Opens link in a new tab/window
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">_parent</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Opens in parent frame
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">_top</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Opens in full body of window (breaks out of frames)
        </td>
      </tr>
    </table> 
    <h2 style="margin-bottom:10px; margin-top:15px;">rel Attribute</h2>

    <p>
      Defines relationship between the current document and the linked document.
    </p>
    <div class="code">
      &lt;a href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"&gt;
        Secure External Link
      &lt;/a&gt;
    </div>

    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <th style="border:1px solid #ccc; padding:8px;">Value</th>
        <th style="border:1px solid #ccc; padding:8px;">Meaning</th>
        <th style="border:1px solid #ccc; padding:8px;">Use</th>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">noopener</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Prevents new page from controlling original page
        </td>
        <td style="border:1px solid #ccc; padding:8px;">
          Security with _blank
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">noreferrer</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Don’t send HTTP referrer
        </td>
        <td style="border:1px solid #ccc; padding:8px;">
          Privacy &amp; security
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">nofollow</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Tells search engines not to follow link
        </td>
        <td style="border:1px solid #ccc; padding:8px;">
          SEO for sponsored/outbound links
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">author</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Link points to author of current doc
        </td>
        <td style="border:1px solid #ccc; padding:8px;">
          Semantic linking
        </td>
      </tr>
    </table> 
    <h2 style="margin-bottom:10px; margin-top:20px;">Media</h2> 

    <h3 style="margin-top:10px;">&lt;img&gt; Tag</h3>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Display images on a web page.</li>
      <li>Void (self-closing) element — no closing tag needed.</li>
    </ul>

    <h3 style="margin-top:20px;">Important Attributes</h3>

    <table style="width:100%; border-collapse:collapse; margin-top:10px;">
      <tr>
        <th style="border:1px solid #ccc; padding:8px;">Attribute</th>
        <th style="border:1px solid #ccc; padding:8px;">Purpose</th>
        <th style="border:1px solid #ccc; padding:8px;">Example</th>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">src</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Image source URL (required)
        </td>
        <td style="border:1px solid #ccc; padding:8px;">
          &lt;img src="image.jpg" alt="..."&gt;
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">alt</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Alternative text for accessibility / if image fails to load
        </td>
        <td style="border:1px solid #ccc; padding:8px;">
          &lt;img src="logo.png" alt="Company Logo"&gt;
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">title</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Tooltip text on hover
        </td>
        <td style="border:1px solid #ccc; padding:8px;">
          &lt;img src="logo.png" alt="Logo" title="Company Logo"&gt;
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">width</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Width of the image in pixels (or CSS units)
        </td>
        <td style="border:1px solid #ccc; padding:8px;">
          &lt;img src="image.jpg" width="300"&gt;
        </td>
      </tr>

      <tr>
        <td style="border:1px solid #ccc; padding:8px;">height</td>
        <td style="border:1px solid #ccc; padding:8px;">
          Height of the image in pixels (or CSS units)
        </td>
        <td style="border:1px solid #ccc; padding:8px;">
          &lt;img src="image.jpg" height="200"&gt;
        </td>
      </tr>
    </table>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;img
      src="images/logo.png"
      alt="Company Logo"
      title="Company Logo"
      width="200"
      height="100"
    &gt;
    </pre>
    </div>

    <h4 style="margin-top:15px;">Output</h4>

    <div class="output" style="margin-top:10px;">
      <img
        src="https://via.placeholder.com/200x100"
        alt="Company Logo"
        title="Company Logo"
        width="200"
        height="100"
      >
    </div> 

    <h2 style="margin-top:15px;">Srcset (Responsive Images)</h2>

    <p style="margin-top:10px;">
    Modern web requires different image sizes for different devices. Using
    <strong>srcset</strong> and <strong>sizes</strong>:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>srcset → multiple image sources with widths.</li>
      <li>sizes → tells browser which image size to use at different viewport widths.</li>
    </ul>

    <h4 style="margin-top:15px;">Example</h4>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;img
      src="small.jpg"
      srcset="
        small.jpg 480w,
        medium.jpg 800w,
        large.jpg 1200w
      "
      sizes="
        (max-width:600px) 480px,
        (max-width:900px) 800px,
        1200px
      "
      alt="Nature"
    &gt;
    </pre>
    </div> 

    <h2>&lt;picture&gt;</h2>

    <p style="margin-top:10px;">
    Use <code>&lt;picture&gt;</code> when you need format fallback (WebP, JPEG, PNG) or different images for different screen sizes.
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>You can include as many &lt;source&gt; tags as you want, each with a different format or size.</li>
      <li>&lt;img&gt; inside &lt;picture&gt; is required as a fallback.</li>
      <li>The browser automatically chooses the first supported &lt;source&gt;.</li>
    </ul>

    <h4 style="margin-top:15px;">Example</h4>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;picture&gt;
      &lt;source
        srcset="image.webp"
        type="image/webp"
      &gt;

      &lt;source
        srcset="image.jpg"
        type="image/jpeg"
      &gt;

      &lt;img
        src="image.jpg"
        alt="Nature"
      &gt;
    &lt;/picture&gt;
    </pre>
    </div> 

    <h2>&lt;figure&gt; and &lt;figcaption&gt;</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Semantic container for images and their captions.</li>
      <li>Improves accessibility and SEO.</li>
      <li>&lt;figure&gt; → wraps image + caption</li>
      <li>&lt;figcaption&gt; → describes the image</li>
      <li>Can also wrap charts, videos, diagrams.</li>
    </ul>

    <h4 style="margin-top:15px;">Example</h4>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;figure&gt;
      &lt;img
        src="mountain.jpg"
        alt="Mountain"
        width="300"
      &gt;

      &lt;figcaption&gt;
        Beautiful Mountain View
      &lt;/figcaption&gt;
    &lt;/figure&gt;
    </pre>
    </div>

    <h4 style="margin-top:15px;">Output</h4>

    <div class="output" style="margin-top:10px;">
      <figure>
        <img
          src="https://via.placeholder.com/300x180"
          alt="Mountain"
          width="300"
        >
        <figcaption>
          Beautiful Mountain View
        </figcaption>
      </figure>
    </div> 

    <h2 style="margin-top:15px;">Responsive + Semantic</h2>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;figure&gt;
      &lt;picture&gt;
        &lt;source
          srcset="image.webp"
          type="image/webp"
        &gt;

        &lt;img
          src="image.jpg"
          alt="Nature"
          style="max-width:100%; height:auto;"
        &gt;
      &lt;/picture&gt;

      &lt;figcaption&gt;
        Responsive image with semantic caption.
      &lt;/figcaption&gt;
    &lt;/figure&gt;
    </pre>
    </div>

    <h2>Audio &amp; Video</h2>

    <h3 style="margin-top:20px;">Audio &lt;audio&gt;</h3>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Used to embed sound files.</li>
      <li>Can provide controls, autoplay, loop, and mute options.</li>
    </ul>

    <p style="margin-top:10px;">
    &lt;source&gt; → allows multiple formats for browser compatibility.
    </p>

    <p>
    controls → shows play/pause/volume buttons.
    </p>

    <h4 style="margin-top:15px;">Other attributes:</h4>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>autoplay → starts automatically (may be blocked by browsers)</li>
      <li>loop → repeats audio</li>
      <li>muted → starts muted</li>
    </ul>

    <h4 style="margin-top:15px;">Example</h4>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;audio controls&gt;
      &lt;source
        src="audio/song.mp3"
        type="audio/mpeg"
      &gt;

      Your browser does not support the audio element.
    &lt;/audio&gt;
    </pre>
    </div>

    <h4 style="margin-top:15px;">Output</h4>

    <div class="output" style="margin-top:10px;">
      <audio controls>
        <source src="audio/song.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div> 

    <h2 style="margin-top:15px;">Video &lt;video&gt;</h2>

    <p>
    Embeds video files directly in HTML.
    </p>

    <h4 style="margin-top:15px;">Attributes:</h4>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>controls → play/pause, volume, timeline</li>
      <li>autoplay → play automatically</li>
      <li>loop → repeat video</li>
      <li>muted → start muted</li>
      <li>poster → image shown before video plays</li>
    </ul>

    <h4 style="margin-top:15px;">Example</h4>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;video
      controls
      width="400"
      poster="poster.jpg"
    &gt;
      &lt;source
        src="video/demo.mp4"
        type="video/mp4"
      &gt;

      Your browser does not support the video tag.
    &lt;/video&gt;
    </pre>
    </div>

    <h4 style="margin-top:15px;">Output</h4>

    <div class="output" style="margin-top:10px;">
      <video controls width="400">
        <source src="video/demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div> 

    <h2 style="margin-top:15px;">Captions &amp; Subtitles &lt;track&gt;</h2>

    <p>
    &lt;track&gt; is used inside &lt;video&gt; to provide captions, subtitles, or descriptions.
    </p>

    <h4 style="margin-top:15px;">Attributes:</h4>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>kind → subtitles, captions, descriptions, chapters, metadata</li>
      <li>srclang → language code (en, es)</li>
      <li>label → user-friendly language name</li>
    </ul>

    <p style="margin-top:10px;">
    Format → usually .vtt (WebVTT) stands for Web Video Text Tracks.
    </p>

    <h4 style="margin-top:15px;">Example</h4>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;video controls&gt;

      &lt;source
        src="movie.mp4"
        type="video/mp4"
      &gt;

      &lt;track
        src="captions.vtt"
        kind="subtitles"
        srclang="en"
        label="English"
      &gt;

    &lt;/video&gt;
    </pre>
    </div> 

    <h2 style="margin-top:15px;">&lt;iframe&gt;</h2>

    <p>
    &lt;iframe&gt; stands for Inline Frame — it allows you to embed another webpage or external content inside your current HTML document.
    </p>

    <p>
    This creates a small window inside your page that displays another web page.
    </p>

    <h4 style="margin-top:15px;">Attributes:</h4>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>src → embed URL of the video</li>
      <li>allowfullscreen → allows fullscreen mode</li>
      <li>title → important for accessibility</li>
    </ul>

    <h4 style="margin-top:15px;">Example</h4>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/VIDEO_ID"
      title="YouTube video player"
      allowfullscreen&gt;
    &lt;/iframe&gt;
    </pre>
    </div>

    <h4 style="margin-top:15px;">Output</h4>

    <div class="output" style="margin-top:10px;">
      <p>
        The above code embeds a YouTube video inside the webpage.
      </p>
    </div>
    `,
  },
  {
    title: "Lists & Tables",
    content: ` 
      <h2>Lists</h2>

      <h3 style="margin-bottom:5px; margin-top:15px;">Ordered Lists &lt;ol&gt;</h3>

      <ul style="padding-left: 20px;">
        <li>
          Display items in a specific order (numbers, letters, roman numerals).
        </li>

        <li>
          Useful for instructions, steps, or ranked items.
        </li>
      </ul>

      <h4 style="margin-top:10px;">Example</h4>

      <div class="code" style="margin-top:8px;">
        &lt;ol&gt;<br>
        &nbsp;&nbsp;&lt;li&gt;Install VS Code&lt;/li&gt;<br>
        &nbsp;&nbsp;&lt;li&gt;Create an HTML File&lt;/li&gt;<br>
        &nbsp;&nbsp;&lt;li&gt;Run in Browser&lt;/li&gt;<br>
        &lt;/ol&gt;
      </div>

      <h4 style="margin-bottom:5px;">Output</h4>

      <div class="output">
        <ol style="margin-left:20px;">
          <li>Install VS Code</li>
          <li>Create an HTML File</li>
          <li>Run in Browser</li>
        </ol>
      </div>

      <h4 style="margin-bottom:10px; margin-top:15px;">Customization with type Attribute</h4>

      <table style="width:100%; border-collapse: collapse;">
        <tr>
          <th style="border:1px solid #ccc; padding:8px;">type</th>
          <th style="border:1px solid #ccc; padding:8px;">Output</th>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">1 (default)</td>
          <td style="border:1px solid #ccc; padding:8px;">1, 2, 3…</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">A</td>
          <td style="border:1px solid #ccc; padding:8px;">A, B, C…</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">a</td>
          <td style="border:1px solid #ccc; padding:8px;">a, b, c…</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">I</td>
          <td style="border:1px solid #ccc; padding:8px;">I, II, III…</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">i</td>
          <td style="border:1px solid #ccc; padding:8px;">i, ii, iii…</td>
        </tr>
      </table>

      <h4 style="margin-top:10px;">Example</h4>

      <div class="code" style="margin-top:8px;">
          &lt;ol type="A"&gt;<br>
          &nbsp;&nbsp;&lt;li&gt;HTML&lt;/li&gt;<br>
          &nbsp;&nbsp;&lt;li&gt;CSS&lt;/li&gt;<br>
          &nbsp;&nbsp;&lt;li&gt;JavaScript&lt;/li&gt;<br>
          &lt;/ol&gt;
      </div>

      <h4 style="margin-bottom:5px;">Output</h4>

      <div class="output">
        <ol type="A" style="margin-left:20px;">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>
      </div> 

      <h3 style="margin-bottom:5px; margin-top:15px;">Unordered Lists &lt;ul&gt;</h3>

      <ul style="padding-left: 20px;">
        <li>
          Display items without specific order (bullets by default).
        </li>

        <li>
          Useful for menus, features, checklists.
        </li>
      </ul>

      <p style="margin-top:10px;">
        Customization with type (deprecated) or CSS (recommended).
      </p>
      <div class="code" style="margin-top:8px;">
          ul { <br>
            &nbsp;&nbsp; list-style-type: circle;  /* disc, circle, square, none */ <br>
          }
      </div>

      <h4 style="margin-top:10px;">Example</h4>

      <div class="code" style="margin-top:8px;">
        &lt;ul&gt;<br>
         &nbsp;&nbsp;&lt;li&gt;HTML&lt;/li&gt;<br>
          &nbsp;&nbsp;&lt;li&gt;CSS&lt;/li&gt;<br>
          &nbsp;&nbsp;&lt;li&gt;JavaScript&lt;/li&gt;<br>
        &lt;/ul&gt;
      </div>

      <h4 style="margin-bottom:5px;">Output</h4>

      <div class="output">
        <ul style="margin-left:20px;">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div> 

      <h3 style="margin-top:15px; margin-bottom:5px;">&lt;dl&gt; — Definition List</h3>

      <p>
        Container for a list of terms and definitions.
      </p>

      <h3>&lt;dt&gt; — Definition Term</h3>

      <p>
        Represents the term being defined.
      </p>

      <h3>&lt;dd&gt; — Definition Description</h3>

      <p>
        Provides the explanation or definition of the <code>&lt;dt&gt;</code> term.
      </p>

      <h4 style="margin-top:10px;">Example</h4>

      <div class="code" style="margin-top:8px;">
        &lt;dl&gt;<br>
          &nbsp;&nbsp;&lt;dt&gt;HTML&lt;/dt&gt;<br>
          &nbsp;&nbsp;&lt;dd&gt;HyperText Markup Language&lt;/dd&gt;<br><br>
          &nbsp;&nbsp;&lt;dt&gt;CSS&lt;/dt&gt;<br>
          &nbsp;&nbsp;&lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;<br>
        &lt;/dl&gt;
      </div>

      <h4 style="margin-bottom:5px;">Output</h4>

      <div class="output">
        <dl style="margin-left:5px;">
          <dt><strong>HTML</strong></dt>
          <dd>HyperText Markup Language</dd>

          <dt style="margin-top:10px;"><strong>CSS</strong></dt>
          <dd>Cascading Style Sheets</dd>
        </dl>
      </div>

      <h2 style="margin-top:30px;">Table</h2>

      <p>
        Tables are used to display tabular data — data organized in rows and columns.
      </p>

      <h3 style="margin-bottom:5px;">Table Elements</h3>

      <table style="width:100%; border-collapse: collapse;">
        <tr>
          <th style="border:1px solid #ccc; padding:8px;">Tag</th>
          <th style="border:1px solid #ccc; padding:8px;">Purpose</th>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">&lt;table&gt;</td>
          <td style="border:1px solid #ccc; padding:8px;">Container for the table</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">&lt;tr&gt;</td>
          <td style="border:1px solid #ccc; padding:8px;">Table row</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">&lt;td&gt;</td>
          <td style="border:1px solid #ccc; padding:8px;">Table data cell</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">&lt;th&gt;</td>
          <td style="border:1px solid #ccc; padding:8px;">Table header cell (bold &amp; centered by default)</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">&lt;caption&gt;</td>
          <td style="border:1px solid #ccc; padding:8px;">Table title / description</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">&lt;thead&gt;</td>
          <td style="border:1px solid #ccc; padding:8px;">Table header section (optional)</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">&lt;tbody&gt;</td>
          <td style="border:1px solid #ccc; padding:8px;">Table body section (optional)</td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">&lt;tfoot&gt;</td>
          <td style="border:1px solid #ccc; padding:8px;">Table footer section (optional)</td>
        </tr>
      </table>

      <h3 style="margin-top:10px;">Example</h3>

      <div class="code" style="margin-top:8px;">
      <pre>
      &lt;table&gt;
        &lt;tr&gt;
          &lt;th&gt;Name&lt;/th&gt;
          &lt;th&gt;Age&lt;/th&gt;
        &lt;/tr&gt;

        &lt;tr&gt;
          &lt;td&gt;Devendra&lt;/td&gt;
          &lt;td&gt;25&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/table&gt;
      </pre>
      </div>

      <h4 style="margin-bottom:5px;">Output</h4>

      <div class="output">
        <table border="1" style="border-collapse: collapse;">
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Devendra</td>
            <td>25</td>
          </tr>
        </table>
      </div>

      <h3 style="margin-top:20px; margin-bottom:5px;">Table Headers</h3>

      <ul style="padding-left:20px;">
        <li>Use &lt;th&gt; for column or row headers.</li>
        <li>Helps accessibility and semantic structure.</li>
      </ul>

      <p style="margin-top:5px;">
        The scope attribute on &lt;th&gt; tells screen readers and assistive technologies what the header refers to:
      </p>

      <h4 style="margin-top:10px;">Example</h4>

      <div class="code" style="margin-top:8px;">
      <pre>
      &lt;table&gt;
        &lt;tr&gt;
          &lt;th scope="col"&gt;Name&lt;/th&gt;
          &lt;th scope="col"&gt;Age&lt;/th&gt;
        &lt;/tr&gt;

        &lt;tr&gt;
          &lt;td&gt;Devendra&lt;/td&gt;
          &lt;td&gt;25&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/table&gt;
      </pre>
      </div>

      <h3 style="margin-top:15px; margin-bottom:5px;">Table Caption</h3>

      <ul style="padding-left:20px;">
        <li>&lt;caption&gt; adds a title or description of the table.</li>
        <li>Improves accessibility (screen readers announce it).</li>
      </ul>

      <h4 style="margin-top:10px;">Example</h4>

      <div class="code" style="margin-top:8px;">
      <pre>
      &lt;table&gt;
        &lt;caption&gt;Student Information&lt;/caption&gt;

        &lt;tr&gt;
          &lt;th&gt;Name&lt;/th&gt;
          &lt;th&gt;Age&lt;/th&gt;
        &lt;/tr&gt;

        &lt;tr&gt;
          &lt;td&gt;Devendra&lt;/td&gt;
          &lt;td&gt;25&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/table&gt;
      </pre>
      </div>

      <h4 style="margin-bottom:5px;">Output</h4>

      <div class="output">
        <table border="1" style="border-collapse: collapse;">
          <caption style="white-space: nowrap;">Student Information</caption>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Devendra</td>
            <td>25</td>
          </tr>
        </table>
      </div>

      <h3 style="margin-top:20px;">Merging Cells</h3>

      <p>
        Column span (colspan) → merge multiple columns into one cell.
      </p>
      <div class="code">
      <pre>
      &lt;table&gt;
        &lt;tr&gt;
          &lt;th colspan="2"&gt;Student Details&lt;/th&gt;
        &lt;/tr&gt;

        &lt;tr&gt;
          &lt;td&gt;Name&lt;/td&gt;
          &lt;td&gt;Devendra&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/table&gt;
      </pre>
      </div>

      <p>
        Row span (rowspan) → merge multiple rows into one cell.
      </p>  

      <div class="code">
      <pre>
      &lt;table&gt;
        &lt;tr&gt;
          &lt;td rowspan="2"&gt;HTML&lt;/td&gt;
          &lt;td&gt;Basics&lt;/td&gt;
        &lt;/tr&gt;

        &lt;tr&gt;
          &lt;td&gt;Advanced&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/table&gt;
      </pre>
      </div>

      <h3 style="margin-bottom:5px;">Semantic Sections</h3>

      <ul style="padding-left:20px;">
        <li>&lt;thead&gt; → contains header rows</li>
        <li>&lt;tbody&gt; → contains body rows</li>
        <li>&lt;tfoot&gt; → contains footer rows (e.g., totals)</li>
      </ul>

      <h4 style="margin-top:10px;">Example</h4>

      <div class="code" style="margin-top:8px;">
      <pre>
      &lt;table&gt;

        &lt;thead&gt;
          &lt;tr&gt;
            &lt;th&gt;Product&lt;/th&gt;
            &lt;th&gt;Price&lt;/th&gt;
          &lt;/tr&gt;
        &lt;/thead&gt;

        &lt;tbody&gt;
          &lt;tr&gt;
            &lt;td&gt;Laptop&lt;/td&gt;
            &lt;td&gt;50000&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/tbody&gt;

        &lt;tfoot&gt;
          &lt;tr&gt;
            &lt;td&gt;Total&lt;/td&gt;
            &lt;td&gt;50000&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/tfoot&gt;

      &lt;/table&gt;
      </pre>
      </div>
    `,
  }, 
  {
    title: "Forms",
    content: `
      <h2 style="margin-bottom:10px;">Forms &amp; User Input</h2>

      <h3 style="margin-top:20px;">&lt;form&gt; Basics</h3>

      <ul style="padding-left:20px; margin-top:10px;">
        <li>
          &lt;form&gt; is a container for user input controls (text fields, checkboxes, buttons, etc.)
        </li>

        <li>
          Used to collect user data and submit it to a server.
        </li>
      </ul>

      <p style="margin-top:10px;">
        <strong>action</strong> → URL where the form data is sent.
      </p>

      <p>
        <strong>method</strong> → HTTP method (GET or POST).
      </p>

      <h4 style="margin-top:20px;">Example</h4>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;form
        action="/submit"
        method="POST"
      &gt;

        &lt;label for="username"&gt;
          Username
        &lt;/label&gt;

        &lt;input
          type="text"
          id="username"
          name="username"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;label for="password"&gt;
          Password
        &lt;/label&gt;

        &lt;input
          type="password"
          id="password"
          name="password"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;button type="submit"&gt;
          Submit
        &lt;/button&gt;

      &lt;/form&gt;
      </pre>
      </div>

      <h4 style="margin-top:20px;">Output</h4>

      <div class="output" style="margin-top:10px;">
        <form>
          <label for="demoUser">Username</label>
          <br>

          <input
            type="text"
            id="demoUser"
            placeholder="Enter username"
          >

          <br><br>

          <label for="demoPass">Password</label>
          <br>

          <input
            type="password"
            id="demoPass"
            placeholder="Enter password"
          >

          <br><br>

          <button type="button">
            Submit
          </button>
        </form>
      </div>

      <h2 style="margin-bottom:10px; margin-top:15px">Input Types</h2>

      <table style="width:100%; border-collapse:collapse; margin-top:10px;">
        <tr>
          <th style="border:1px solid #ccc; padding:8px;">Type</th>
          <th style="border:1px solid #ccc; padding:8px;">Purpose</th>
          <th style="border:1px solid #ccc; padding:8px;">Example</th>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">text</td>
          <td style="border:1px solid #ccc; padding:8px;">Single-line text</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="text" name="username"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">password</td>
          <td style="border:1px solid #ccc; padding:8px;">Hidden text</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="password" name="pwd"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">email</td>
          <td style="border:1px solid #ccc; padding:8px;">Email address</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="email" name="email"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">number</td>
          <td style="border:1px solid #ccc; padding:8px;">Numeric input</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="number" name="age" min="1" max="100"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">date</td>
          <td style="border:1px solid #ccc; padding:8px;">Date picker</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="date" name="dob"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">file</td>
          <td style="border:1px solid #ccc; padding:8px;">File upload</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="file" name="resume"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">checkbox</td>
          <td style="border:1px solid #ccc; padding:8px;">Select one/more options</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="checkbox" name="agree"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">radio</td>
          <td style="border:1px solid #ccc; padding:8px;">Select one option</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="radio" name="gender" value="male"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">url</td>
          <td style="border:1px solid #ccc; padding:8px;">URL input</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="url" name="website"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">tel</td>
          <td style="border:1px solid #ccc; padding:8px;">Phone number</td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="tel" name="phone"&gt;
          </td>
        </tr>
      </table>

      <h3 style="margin-top:25px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;form&gt;

        &lt;input
          type="text"
          placeholder="Username"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;input
          type="password"
          placeholder="Password"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;input
          type="email"
          placeholder="Email"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;input
          type="number"
          placeholder="Age"
          min="1"
          max="100"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;input
          type="date"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;input
          type="file"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;label&gt;
          &lt;input type="checkbox"&gt;
          I agree
        &lt;/label&gt;

        &lt;br&gt;&lt;br&gt;

        &lt;label&gt;
          &lt;input
            type="radio"
            name="gender"
          &gt;
          Male
        &lt;/label&gt;

        &lt;label&gt;
          &lt;input
            type="radio"
            name="gender"
          &gt;
          Female
        &lt;/label&gt;

        &lt;br&gt;&lt;br&gt;

        &lt;input
          type="url"
          placeholder="Website"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;input
          type="tel"
          placeholder="Phone Number"
        &gt;

      &lt;/form&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <form>

      <input
      type="text"
      placeholder="Username"
      >

      <br><br>

      <input
      type="password"
      placeholder="Password"
      >

      <br><br>

      <input
      type="email"
      placeholder="Email"
      >

      <br><br>

      <input
      type="number"
      placeholder="Age"
      min="1"
      max="100"
      >

      <br><br>

      <input
      type="date"
      >

      <br><br>

      <input
      type="file"
      >

      <br><br>

      <label>
      <input type="checkbox">
      I agree
      </label>

      <br><br>

      <label>
      <input
      type="radio"
      name="gender"
      >
      Male
      </label>

      <label style="margin-left:15px;">
      <input
      type="radio"
      name="gender"
      >
      Female
      </label>

      <br><br>

      <input
      type="url"
      placeholder="Website"
      >

      <br><br>

      <input
      type="tel"
      placeholder="Phone Number"
      >

      </form>

      </div>

      <h2 style="margin-bottom:10px; margin-top:20px">Labels &lt;label&gt;</h2>

      <ul style="padding-left:20px; margin-top:10px;">
        <li>Provides a clickable text for input fields.</li>
        <li>Improves accessibility.</li>
      </ul>

      <p style="margin-top:10px;">
      <strong>for</strong> attribute → connects label to input using input's <strong>id</strong>.
      </p>

      <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;form&gt;

        &lt;label
          for="username"
        &gt;
          Username
        &lt;/label&gt;

        &lt;br&gt;

        &lt;input
          type="text"
          id="username"
          name="username"
        &gt;

      &lt;/form&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <form>

      <label for="demoUsername">
      Username
      </label>

      <br>

      <input
      type="text"
      id="demoUsername"
      placeholder="Enter username"
      >

      </form>

      </div> 

      <h2 style="margin-bottom:10px; margin-top:20px">Grouping Inputs: &lt;fieldset&gt; &amp; &lt;legend&gt;</h2>

      <ul style="padding-left:20px; margin-top:10px;">
        <li>&lt;fieldset&gt; → groups related inputs visually and semantically.</li>
        <li>&lt;legend&gt; → describes the group.</li>
      </ul>

      <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;form&gt;

        &lt;fieldset&gt;

          &lt;legend&gt;
            Personal Information
          &lt;/legend&gt;

          &lt;label
            for="name"
          &gt;
            Name
          &lt;/label&gt;

          &lt;br&gt;

          &lt;input
            type="text"
            id="name"
            name="name"
          &gt;

          &lt;br&gt;&lt;br&gt;

          &lt;label
            for="email"
          &gt;
            Email
          &lt;/label&gt;

          &lt;br&gt;

          &lt;input
            type="email"
            id="email"
            name="email"
          &gt;

        &lt;/fieldset&gt;

      &lt;/form&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <form>

      <fieldset>

      <legend>
      Personal Information
      </legend>

      <label for="demoName">
      Name
      </label>

      <br>

      <input
      type="text"
      id="demoName"
      placeholder="Enter your name"
      >

      <br><br>

      <label for="demoEmail">
      Email
      </label>

      <br>

      <input
      type="email"
      id="demoEmail"
      placeholder="Enter your email"
      >

      </fieldset>

      </form>

      </div>

      <h2 style="margin-bottom:10px; margin-top:20px">Dropdowns &lt;select&gt; &amp; &lt;option&gt;</h2>

      <p style="margin-top:10px;">
      &lt;optgroup&gt; → group options under a label.
      </p>

      <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;form&gt;

        &lt;label
          for="course"
        &gt;
          Select Course
        &lt;/label&gt;

        &lt;br&gt;

        &lt;select
          id="course"
          name="course"
        &gt;

          &lt;optgroup
            label="Frontend"
          &gt;

            &lt;option&gt;
              HTML
            &lt;/option&gt;

            &lt;option&gt;
              CSS
            &lt;/option&gt;

            &lt;option&gt;
              JavaScript
            &lt;/option&gt;

          &lt;/optgroup&gt;

          &lt;optgroup
            label="Backend"
          &gt;

            &lt;option&gt;
              Node.js
            &lt;/option&gt;

            &lt;option&gt;
              Django
            &lt;/option&gt;

          &lt;/optgroup&gt;

        &lt;/select&gt;

      &lt;/form&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <form>

      <label for="demoCourse">
      Select Course
      </label>

      <br>

      <select id="demoCourse">

      <optgroup label="Frontend">
      <option>HTML</option>
      <option>CSS</option>
      <option>JavaScript</option>
      </optgroup>

      <optgroup label="Backend">
      <option>Node.js</option>
      <option>Django</option>
      </optgroup>

      </select>

      </form>

      </div> 

      <h2 style="margin-bottom:10px; margin-top:20px">Multi-line Text &lt;textarea&gt;</h2>

      <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;form&gt;

        &lt;label
          for="message"
        &gt;
          Message
        &lt;/label&gt;

        &lt;br&gt;

        &lt;textarea
          id="message"
          name="message"
          rows="5"
          cols="40"
          placeholder="Enter your message"
        &gt;
        &lt;/textarea&gt;

      &lt;/form&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <form>

      <label for="demoMessage">
      Message
      </label>

      <br>

      <textarea
      id="demoMessage"
      rows="5"
      cols="40"
      placeholder="Enter your message"
      ></textarea>

      </form>

      </div>

      <h2 style="margin-bottom:10px; margin-top:20px">Form Attributes</h2>

      <table style="width:100%; border-collapse:collapse; margin-top:10px;">
        <tr>
          <th style="border:1px solid #ccc; padding:8px;">Attribute</th>
          <th style="border:1px solid #ccc; padding:8px;">Purpose</th>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            action
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            URL to send form data
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            method
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            HTTP method (GET / POST)
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            autocomplete
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            Enable/disable browser autofill (on / off)

            <br><br>

            <code>
            &lt;form action="/submit"
            autocomplete="on"&gt;.....&lt;/form&gt;
            </code>
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            novalidate
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            Skip HTML5 validation on submit
          </td>
        </tr>

      </table>

      <h3 style="margin-top:25px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;form
        action="/submit"
        method="POST"
        autocomplete="on"
      &gt;

        &lt;label
          for="username"
        &gt;
          Username
        &lt;/label&gt;

        &lt;br&gt;

        &lt;input
          type="text"
          id="username"
          name="username"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;button
          type="submit"
        &gt;
          Submit
        &lt;/button&gt;

      &lt;/form&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <form>

      <label for="demoUser">
      Username
      </label>

      <br>

      <input
      type="text"
      id="demoUser"
      placeholder="Enter Username"
      >

      <br><br>

      <button>
      Submit
      </button>

      </form>

      </div> 

      <h3 style="margin-bottom:10px; margin-top:20px">Example using <code>novalidate</code></h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;form
        action="/submit"
        method="POST"
        novalidate
      &gt;

        &lt;input
          type="email"
          placeholder="Email"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;button
          type="submit"
        &gt;
          Submit
        &lt;/button&gt;

      &lt;/form&gt;
      </pre>
      </div>

      <p style="margin-top:15px;">
      <strong>Note:</strong> When <code>novalidate</code> is used, the browser skips built-in HTML5 validation before submitting the form.
      </p>

      <h2 style="margin-bottom:10px;">Validation Attributes</h2>

      <table style="width:100%; border-collapse:collapse; margin-top:10px;">
        <tr>
          <th style="border:1px solid #ccc; padding:8px;">Attribute</th>
          <th style="border:1px solid #ccc; padding:8px;">Purpose</th>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            required
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            Field must be filled
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            pattern
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            Regex pattern to match input
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            min / max
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            Min/max value for number/date
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            minlength / maxlength
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            Min/max character length
          </td>
        </tr>

      </table>

      <h3 style="margin-top:25px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;form&gt;

        &lt;label
          for="username"
        &gt;
          Username
        &lt;/label&gt;

        &lt;br&gt;

        &lt;input
          type="text"
          id="username"
          required
          minlength="3"
          maxlength="20"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;label
          for="age"
        &gt;
          Age
        &lt;/label&gt;

        &lt;br&gt;

        &lt;input
          type="number"
          id="age"
          min="1"
          max="100"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;label
          for="email"
        &gt;
          Email
        &lt;/label&gt;

        &lt;br&gt;

        &lt;input
          type="email"
          id="email"
          required
          pattern=".+@.+\..+"
        &gt;

        &lt;br&gt;&lt;br&gt;

        &lt;button
          type="submit"
        &gt;
          Submit
        &lt;/button&gt;

      &lt;/form&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <form>

      <label for="demoUsername">
      Username
      </label>

      <br>

      <input
      type="text"
      id="demoUsername"
      placeholder="Enter username"
      required
      minlength="3"
      maxlength="20"
      >

      <br><br>

      <label for="demoAge">
      Age
      </label>

      <br>

      <input
      type="number"
      id="demoAge"
      placeholder="Enter age"
      min="1"
      max="100"
      >

      <br><br>

      <label for="demoEmail">
      Email
      </label>

      <br>

      <input
      type="email"
      id="demoEmail"
      placeholder="Enter email"
      required
      pattern=".+@.+\..+"
      >

      <br><br>

      <button type="submit">
      Submit
      </button>

      </form>

      </div> 

      <h3 style="margin-top:20px">Validation Attribute Examples</h3>

      <table style="width:100%; border-collapse:collapse; margin-top:10px;">
        <tr>
          <th style="border:1px solid #ccc; padding:8px;">Attribute</th>
          <th style="border:1px solid #ccc; padding:8px;">Example</th>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            required
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="text" required&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            pattern
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="text" pattern="[A-Za-z]{3,}"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            min / max
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="number" min="1" max="100"&gt;
          </td>
        </tr>

        <tr>
          <td style="border:1px solid #ccc; padding:8px;">
            minlength / maxlength
          </td>
          <td style="border:1px solid #ccc; padding:8px;">
            &lt;input type="text" minlength="3" maxlength="20"&gt;
          </td>
        </tr>

      </table>
    `,
  },
  {
    title: "Semantic HTML",
    content: ` 
    <h2 style="margin-bottom:10px;">Semantic HTML</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Semantic HTML means using HTML elements that describe their meaning or purpose.</li>

      <li>Non-semantic tags like &lt;div&gt; or &lt;span&gt; don't convey meaning.</li>
    </ul>

    <h3 style="margin-top:20px;">Importance of Semantic HTML</h3>

    <ol style="padding-left:20px; margin-top:10px;">

      <li style="margin-bottom:15px;">
        <strong>Accessibility</strong>

        <p style="margin-top:8px;">
          Screen readers and assistive devices can understand the page structure better.
        </p>
      </li>

      <li style="margin-bottom:15px;">
        <strong>SEO (Search Engine Optimization)</strong>

        <p style="margin-top:8px;">
          Search engines can index content accurately (what's main content, navigation, footer).
        </p>
      </li>

      <li style="margin-bottom:15px;">
        <strong>Maintainability</strong>

        <p style="margin-top:8px;">
          Easier for developers to read, maintain, and style.
        </p>
      </li>

      <li>
        <strong>Future-proofing</strong>

        <p style="margin-top:8px;">
          Browsers and tools can use semantic info to enhance UX.
        </p>
      </li>

    </ol> 

    <h2 style="margin-top:20px;">Structural Semantic Elements</h2>

    <table style="width:100%; border-collapse:collapse; margin-top:10px;">

    <tr>
    <th style="border:1px solid #ccc; padding:8px;">Element</th>
    <th style="border:1px solid #ccc; padding:8px;">Purpose</th>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;header&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Page or section header, usually contains logo, nav, or title
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;nav&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Navigation links
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;main&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Main content of the document (unique per page)
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;article&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Self-contained content, like blog post or news article
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;section&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Thematically grouped content
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;aside&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Side content, like a sidebar, related info, or ads
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;footer&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Footer content of page or section, like contact info, copyright
    </td>
    </tr>

    </table>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;body&gt;

      &lt;header&gt;
        Website Header
      &lt;/header&gt;

      &lt;nav&gt;
        Home | About | Contact
      &lt;/nav&gt;

      &lt;main&gt;

        &lt;section&gt;

          &lt;article&gt;

            HTML Semantic Elements

          &lt;/article&gt;

        &lt;/section&gt;

        &lt;aside&gt;

          Related Posts

        &lt;/aside&gt;

      &lt;/main&gt;

      &lt;footer&gt;

        © 2026 My Website

      &lt;/footer&gt;

    &lt;/body&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <header style="padding:10px;border:1px solid #ccc;">
    Website Header
    </header>

    <nav style="padding:10px;border:1px solid #ccc;border-top:none;">
    Home | About | Contact
    </nav>

    <main style="padding:10px;border:1px solid #ccc;border-top:none;">

    <section style="margin-bottom:15px;">

    <article style="padding:10px;border:1px solid #ddd;">
    HTML Semantic Elements
    </article>

    </section>

    <aside style="padding:10px;border:1px solid #ddd;">
    Related Posts
    </aside>

    </main>

    <footer style="padding:10px;border:1px solid #ccc;border-top:none;">
    © 2026 My Website
    </footer>

    </div> 

    <h2 style="margin-top:20px;">Inline Semantic Elements</h2>

    <table style="width:100%; border-collapse:collapse; margin-top:10px;">

    <tr>
    <th style="border:1px solid #ccc; padding:8px;">Element</th>
    <th style="border:1px solid #ccc; padding:8px;">Purpose</th>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;abbr&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Abbreviation or acronym
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;address&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Contact info (author or company)
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;time&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Date/time info, machine-readable if needed
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;code&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Computer code snippet
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;kbd&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    User keyboard input
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;samp&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Sample output from a program or system
    </td>
    </tr>

    </table>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;p&gt;

    &lt;abbr title="HyperText Markup Language"&gt;
    HTML
    &lt;/abbr&gt;

    is a markup language.

    &lt;/p&gt;

    &lt;address&gt;
    Email: info@example.com
    &lt;/address&gt;

    &lt;p&gt;

    Meeting on

    &lt;time datetime="2026-06-27"&gt;
    27 June 2026
    &lt;/time&gt;

    &lt;/p&gt;

    &lt;p&gt;

    Use

    &lt;code&gt;
    console.log()
    &lt;/code&gt;

    to print output.

    &lt;/p&gt;

    &lt;p&gt;

    Press

    &lt;kbd&gt;
    Ctrl + C
    &lt;/kbd&gt;

    to copy.

    &lt;/p&gt;

    &lt;p&gt;

    Output:

    &lt;samp&gt;
    Hello World
    &lt;/samp&gt;

    &lt;/p&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <p>
    <abbr title="HyperText Markup Language">HTML</abbr>
    is a markup language.
    </p>

    <address>
    Email: info@example.com
    </address>

    <p>
    Meeting on
    <time datetime="2026-06-27">27 June 2026</time>
    </p>

    <p>
    Use <code>console.log()</code> to print output.
    </p>

    <p>
    Press <kbd>Ctrl + C</kbd> to copy.
    </p>

    <p>
    Output:
    <samp>Hello World</samp>
    </p>

    </div>
    `,
  },
    {
    title: "Global Attribute",
    content: `
    <h2 style="margin-bottom:10px;">id Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Purpose: Uniquely identifies a single element in the document.</li>
      <li>Value must be unique (only one element can have a given id).</li>
      <li>Commonly used for JavaScript targeting, CSS styling, and anchor linking.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;h1 id="title"&gt;
      Welcome to HTML
    &lt;/h1&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <h1 id="title">
      Welcome to HTML
    </h1>

    </div>

    <h2 style="margin-top:30px;">class Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Used to group elements under a common name.</li>
      <li>Multiple elements can share the same class.</li>
      <li>A single element can also have multiple classes.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;p class="note"&gt;
      HTML is easy to learn.
    &lt;/p&gt;

    &lt;p class="note"&gt;
      CSS is used for styling.
    &lt;/p&gt;

    &lt;button class="btn primary"&gt;
      Submit
    &lt;/button&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <p class="note">
    HTML is easy to learn.
    </p>

    <p class="note">
    CSS is used for styling.
    </p>

    <button>
    Submit
    </button>

    </div>

    <h2 style="margin-top:30px;">title Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Used to provide extra information about an element.</li>
      <li>Shows as a tooltip when the user hovers over the element.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;button
    title="Click to submit the form"
    &gt;
    Submit
    &lt;/button&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button title="Click to submit the form">
    Submit
    </button>

    <p style="margin-top:10px;">
    Hover over the button to see the tooltip.
    </p>

    </div>

    <h2 style="margin-top:30px;">style Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Used to apply inline CSS styles directly to an element.</li>
      <li>Syntax: <strong>style="property: value;"</strong>.</li>
      <li>Generally used for quick styling, but CSS files or &lt;style&gt; tags are preferred for maintainability.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;p
    style="
    color:blue;
    font-size:20px;
    font-weight:bold;
    "
    &gt;
    Hello HTML
    &lt;/p&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <p
    style="
    color:blue;
    font-size:20px;
    font-weight:bold;
    "
    >
    Hello HTML
    </p>
    </div>

    <h2 style="margin-bottom:10px;">hidden Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Used to hide an element from the page (it will not be displayed).</li>
      <li>It's a boolean attribute → no value needed (<strong>hidden</strong> alone means true).</li>
      <li>Commonly used to toggle visibility dynamically using JavaScript.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;p hidden&gt;
      You cannot see this text.
    &lt;/p&gt;

    &lt;p&gt;
      This text is visible.
    &lt;/p&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <p hidden>
    You cannot see this text.
    </p>

    <p>
    This text is visible.
    </p>

    </div>

    <h2 style="margin-top:30px;">lang Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Specifies the language of the element's content.</li>
      <li>Important for screen readers, translation tools, and SEO.</li>
      <li>Usually placed in the <strong>&lt;html&gt;</strong> tag.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;html lang="en"&gt;

    &lt;p&gt;
      Welcome to HTML.
    &lt;/p&gt;

    &lt;/html&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <p>
    Welcome to HTML.
    </p>

    </div>

    <h2 style="margin-top:30px;">dir Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Defines the text direction.</li>
    </ul>

    <p><strong>Common values:</strong></p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>ltr</strong> → Left to right (default for most languages like English)</li>
      <li><strong>rtl</strong> → Right to left (for Arabic, Hebrew, etc.)</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;p dir="ltr"&gt;
      Hello World
    &lt;/p&gt;

    &lt;p dir="rtl"&gt;
      مرحبا بالعالم
    &lt;/p&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <p dir="ltr">
    Hello World
    </p>

    <p dir="rtl">
    مرحبا بالعالم
    </p>

    </div>

    <h2 style="margin-top:30px;">tabindex Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Controls the order of keyboard navigation (when pressing the Tab key).</li>
      <li>Works on any focusable element (like links, buttons, inputs, etc.).</li>
    </ul>

    <p><strong>Values:</strong></p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>0</strong> → element is focusable in natural order.</li>
      <li><strong>Positive number (e.g., 1, 2, 3)</strong> → defines custom tab order.</li>
      <li><strong>-1</strong> → element is focusable by JavaScript, but skipped in Tab order.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;button tabindex="2"&gt;
      Second
    &lt;/button&gt;

    &lt;button tabindex="1"&gt;
      First
    &lt;/button&gt;

    &lt;button tabindex="3"&gt;
      Third
    &lt;/button&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button tabindex="2">
    Second
    </button>

    <button tabindex="1">
    First
    </button>

    <button tabindex="3">
    Third
    </button>

    <p style="margin-top:10px;">
    Press the <strong>Tab</strong> key to move focus in the order:
    <strong>First → Second → Third</strong>.
    </p>

    </div>

    <h2 style="margin-top:30px;">contenteditable Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Makes an element's text editable directly in the browser.</li>
      <li>Boolean attribute (<strong>true</strong> or <strong>false</strong>).</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;p
    contenteditable="true"
    &gt;
    Click here and edit this text.
    &lt;/p&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <p
    contenteditable="true"
    style="
    border:1px solid #ccc;
    padding:10px;
    border-radius:5px;
    "
    >
    Click here and edit this text.
    </p>

    <p style="margin-top:10px;">
    Try typing inside the paragraph.
    </p>

    </div>

    <h2 style="margin-bottom:10px;">draggable Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Specifies whether an element is draggable (can be dragged using mouse).</li>
      <li>Boolean attribute (<strong>true</strong> or <strong>false</strong>).</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;img
    src="logo.png"
    alt="Logo"
    draggable="true"
    width="120"
    &gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <div
    draggable="true"
    style="
    display:inline-block;
    padding:12px;
    border:1px solid #ccc;
    border-radius:5px;
    cursor:grab;
    background:#f5f5f5;
    "
    >
    📦 Drag Me
    </div>

    <p style="margin-top:10px;">
    Try dragging the box.
    </p>

    </div>

    <h2 style="margin-top:30px;">data-* Attributes (Custom Data Attributes)</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Used to store custom data inside HTML elements.</li>
      <li>These are not shown to users but accessible in JavaScript.</li>
      <li>The syntax is: <strong>data-key="value"</strong></li>
      <li><strong>key</strong> can be any name you want.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;button
    data-id="101"
    data-course="HTML"
    &gt;
    View Course
    &lt;/button&gt;

    &lt;script&gt;

    const button =
    document.querySelector("button");

    console.log(
    button.dataset.id
    );

    console.log(
    button.dataset.course
    );

    &lt;/script&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button>
    View Course
    </button>

    <p style="margin-top:10px;">
    JavaScript can access:
    <strong>101</strong> and
    <strong>HTML</strong>.
    </p>

    </div>

    <h2 style="margin-top:30px;">spellcheck Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Tells the browser whether to check spelling or grammar in editable text.</li>
      <li>Works with <strong>&lt;input&gt;</strong>, <strong>&lt;textarea&gt;</strong>, and elements with <strong>contenteditable="true"</strong>.</li>
    </ul>

    <p><strong>Values:</strong></p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>true</strong> → Enable spell checking</li>
      <li><strong>false</strong> → Disable spell checking</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;textarea
    spellcheck="true"
    rows="4"
    cols="30"
    &gt;
    Type your text here...
    &lt;/textarea&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <textarea
    spellcheck="true"
    rows="4"
    cols="30"
    >
    Type your text here...
    </textarea>

    <p style="margin-top:10px;">
    If you type a misspelled word, the browser may underline it.
    </p>

    </div>

    <h2 style="margin-top:30px;">translate Attribute</h2>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Controls whether an element's text should be translated by translation tools (like Google Translate).</li>
    </ul>

    <p><strong>Values:</strong></p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>yes</strong> → allow translation</li>
      <li><strong>no</strong> → prevent translation</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;p translate="yes"&gt;
    Welcome to HTML.
    &lt;/p&gt;

    &lt;p translate="no"&gt;
    OpenAI
    &lt;/p&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <p translate="yes">
    Welcome to HTML.
    </p>

    <p translate="no">
    OpenAI
    </p>

    <p style="margin-top:10px;">
    Translation tools can translate the first paragraph but should leave <strong>OpenAI</strong> unchanged.
    </p>

    </div>
    `,
  },
    {
    title: "Accessibility(a11y)",
    content: `
      <h2 style="margin-bottom:10px;">Accessibility (a11y) in HTML</h2>

      <p style="margin-top:10px;">
      <strong>a11y</strong> = shorthand for <strong>"accessibility"</strong> (11 letters between "a" and "y").
      </p>

      <p>
      It means designing web pages that everyone can use — including people with disabilities,
      screen readers, or keyboard-only navigation.
      </p>

      <h2 style="margin-top:30px;">1. ARIA Roles</h2>

      <p style="margin-top:10px;">
      ARIA (Accessible Rich Internet Applications) provides attributes that define roles, states, and
      properties for better screen reader support.
      </p>

      <h3 style="margin-top:20px;">Common ARIA Roles</h3>

      <table
        border="1"
        style="
          border-collapse:collapse;
          margin-top:10px;
          width:100%;
          text-align:center;
        "
      >

        <tr>
          <th style="padding:10px;">Role</th>
          <th style="padding:10px;">Meaning</th>
        </tr>

        <tr>
          <td style="padding:10px;"><code>role="button"</code></td>
          <td style="padding:10px;">Tells assistive technology it acts like a button.</td>
        </tr>

        <tr>
          <td style="padding:10px;"><code>role="alert"</code></td>
          <td style="padding:10px;">Announces important messages immediately.</td>
        </tr>

        <tr>
          <td style="padding:10px;"><code>role="dialog"</code></td>
          <td style="padding:10px;">Marks a popup or modal dialog.</td>
        </tr>

        <tr>
          <td style="padding:10px;"><code>role="navigation"</code></td>
          <td style="padding:10px;">Defines a navigation section.</td>
        </tr>

        <tr>
          <td style="padding:10px;"><code>role="banner"</code></td>
          <td style="padding:10px;">Header section of a page.</td>
        </tr>

      </table>

      <p style="margin-top:15px;">
      <strong>Use ARIA only when semantic HTML can't express meaning.</strong>
      </p>

      <p>
      For example, prefer <code>&lt;button&gt;</code> instead of
      <code>&lt;div role="button"&gt;</code>.
      </p>

      <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;div
      role="button"
      tabindex="0"
      &gt;
      Save
      &lt;/div&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <div
      role="button"
      tabindex="0"
      style="
      display:inline-block;
      padding:10px 20px;
      background:#007bff;
      color:white;
      border-radius:5px;
      cursor:pointer;
      "
      >
      Save
      </div>

      </div>

      <h2 style="margin-top:30px;">2. alt Text for Images</h2>

      <ul style="padding-left:20px; margin-top:10px;">
      <li>The <strong>alt</strong> attribute gives a text alternative for images.</li>
      <li>Screen readers read this when users can't see the image.</li>
      <li>It also appears if the image fails to load.</li>
      </ul>

      <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;img
      src="logo.png"
      alt="Company Logo"
      &gt;
      </pre>
      </div>

      <h2 style="margin-top:30px;">3. Labels for Forms</h2>

      <ul style="padding-left:20px; margin-top:10px;">
      <li>Every input should have a label describing its purpose.</li>
      <li>Helps both sighted users and screen readers.</li>
      </ul>

      <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;label for="email"&gt;
      Email
      &lt;/label&gt;

      &lt;input
      type="email"
      id="email"
      &gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <label for="demoEmail">
      Email
      </label>

      <br><br>

      <input
      type="email"
      id="demoEmail"
      placeholder="Enter email"
      >

      </div>

      <h2 style="margin-top:30px;">4. Keyboard Navigation (tabindex)</h2>

      <ul style="padding-left:20px; margin-top:10px;">
      <li>Allows users to navigate using the keyboard (Tab key).</li>
      <li>Default focusable elements:
      <strong>&lt;a&gt;</strong>,
      <strong>&lt;button&gt;</strong>,
      <strong>&lt;input&gt;</strong>, etc.
      </li>
      <li>Use <strong>tabindex</strong> to include custom focusable elements.</li>
      </ul>

      <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;div
      tabindex="0"
      &gt;
      Focusable Box
      &lt;/div&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <div
      tabindex="0"
      style="
      border:1px solid #ccc;
      padding:12px;
      border-radius:5px;
      display:inline-block;
      "
      >
      Focusable Box
      </div>

      <p style="margin-top:10px;">
      Press the <strong>Tab</strong> key to focus this box.
      </p>

      </div>

      <h2 style="margin-top:30px;">5. Screen Reader Compatibility</h2>

      <ul style="padding-left:20px; margin-top:10px;">
      <li>Screen readers read semantic HTML, not visuals.</li>
      <li>Use proper elements:
      <strong>&lt;header&gt;</strong>,
      <strong>&lt;nav&gt;</strong>,
      <strong>&lt;main&gt;</strong>,
      <strong>&lt;footer&gt;</strong>.
      </li>
      <li>Add ARIA attributes for dynamic content.</li>
      </ul>

      <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;header&gt;
      Header
      &lt;/header&gt;

      &lt;nav&gt;
      Navigation
      &lt;/nav&gt;

      &lt;main&gt;
      Main Content
      &lt;/main&gt;

      &lt;footer&gt;
      Footer
      &lt;/footer&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <header class="code" style="padding:10px;">
      Header
      </header>

      <nav class="code" style="padding:10px; margin-top:5px;">
      Navigation
      </nav>

      <main class="code" style="padding:10px; margin-top:5px;">
      Main Content
      </main>

      <footer class="code" style="padding:10px; margin-top:5px;">
      Footer
      </footer>

      </div>
    `,
  },
  {
    title: "Advanced Feature",
    content: `
    <h2 style="margin-bottom:10px;">&lt;canvas&gt;</h2>

    <p style="margin-top:10px;">
    The &lt;canvas&gt; tag in HTML is used to draw graphics. It provides an empty drawing area in your webpage that you can manipulate using JavaScript. such as:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Shapes (lines, circles, rectangles)</li>
      <li>Images</li>
      <li>Animations</li>
      <li>Charts</li>
      <li>Games</li>
    </ul>

    <div class="code" style="margin-top:15px;">
    <pre>
    &lt;canvas
      id="myCanvas"
      width="300"
      height="200"
    &gt;
    &lt;/canvas&gt;
    </pre>
    </div>

    <p style="margin-top:15px;">
    This creates a blank canvas area of 300×200 pixels.
    </p>

    <p>
    Default size (if not specified): 300×150 pixels
    </p>

    <p>
    By itself, &lt;canvas&gt; shows nothing — you must use JavaScript to draw inside it.
    </p>

    <h3>Example: Drawing a Rectangle</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;canvas
      id="myCanvas"
      width="300"
      height="200"
      style="border:1px solid #000;"
    &gt;
    &lt;/canvas&gt;

    &lt;script&gt;

    const canvas =
    document.getElementById("myCanvas");

    const ctx =
    canvas.getContext("2d");

    ctx.fillRect(
      50,
      50,
      150,
      80
    );

    &lt;/script&gt;
    </pre>
    </div>

    <p style="margin-top:10px;">
    A rectangle will be drawn at position (50, 50) with a width of 150px and a height of 80px using JavaScript.
    </p>

    </div>

    <h3 style="margin-top:20px;">Canvas Drawing Methods</h3>

    <p style="margin-top:10px;">
    You get an object that gives you drawing methods like:
    </p>

    <table style="width:100%; border-collapse:collapse; margin-top:10px;">

    <tr>
    <th style="border:1px solid #ccc; padding:8px;">Method</th>
    <th style="border:1px solid #ccc; padding:8px;">Description</th>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    fillRect(x, y, w, h)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Fills a rectangle
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    strokeRect(x, y, w, h)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Draws only the outline
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    clearRect(x, y, w, h)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Clears part of the canvas
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    beginPath() / moveTo() / lineTo()
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Draw lines
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    arc(x, y, r, start, end)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Draw circles or arcs
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    fillText(text, x, y)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Draw text
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    drawImage(img, x, y)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Draw image
    </td>
    </tr>

    </table>

    <h3 style="margin-top:25px;">Example: Draw a Circle</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;canvas
    id="circleCanvas"
    width="300"
    height="200"
    style="border:1px solid #000;"
    &gt;
    &lt;/canvas&gt;

    &lt;script&gt;

    const canvas =
    document.getElementById("circleCanvas");

    const ctx =
    canvas.getContext("2d");

    ctx.beginPath();

    ctx.arc(
    150,
    100,
    50,
    0,
    2 * Math.PI
    );

    ctx.fill();

    &lt;/script&gt;
    </pre>
    </div>

    <p style="margin-top:10px;">
    A filled circle is drawn at the center of the canvas.
    </p>

    </div>

    <h3 style="margin-top:25px;">Example: Draw Image on Canvas</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;canvas
    id="imageCanvas"
    width="300"
    height="200"
    &gt;
    &lt;/canvas&gt;

    &lt;script&gt;

    const canvas =
    document.getElementById("imageCanvas");

    const ctx =
    canvas.getContext("2d");

    const img =
    new Image();

    img.src = "image.jpg";

    img.onload = function(){

    ctx.drawImage(
    img,
    20,
    20,
    150,
    100
    );

    };

    &lt;/script&gt;
    </pre>
    </div>

    <p style="margin-top:10px;">
    The image <strong>image.jpg</strong> is drawn on the canvas after it finishes loading.
    </p>

    </div>

    <h3 style="margin-top:25px;">Example: Simple Animation</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;canvas
    id="animationCanvas"
    width="300"
    height="100"
    &gt;
    &lt;/canvas&gt;

    &lt;script&gt;

    const canvas =
    document.getElementById("animationCanvas");

    const ctx =
    canvas.getContext("2d");

    let x = 0;

    function animate(){

    ctx.clearRect(
    0,
    0,
    300,
    100
    );

    ctx.fillRect(
    x,
    30,
    50,
    40
    );

    x++;

    requestAnimationFrame(
    animate
    );

    }

    animate();

    &lt;/script&gt;
    </pre>
    </div>

    <p style="margin-top:10px;">
    A rectangle continuously moves from left to right across the canvas.
    </p>

    </div>

    <h3 style="margin-top:25px;">CSS Animation vs Canvas Animation</h3>

    <table style="width:100%; border-collapse:collapse; margin-top:10px;">

    <tr>
    <th style="border:1px solid #ccc; padding:8px;">Feature</th>
    <th style="border:1px solid #ccc; padding:8px;">CSS Animation</th>
    <th style="border:1px solid #ccc; padding:8px;">Canvas Animation</th>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">Type</td>
    <td style="border:1px solid #ccc; padding:8px;">
    Style-based animation (changes CSS properties)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Code-based animation (draws each frame manually)
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">Control</td>
    <td style="border:1px solid #ccc; padding:8px;">
    Limited — mainly movement, fade, rotation, scale
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Full control — physics, collisions, particles, dynamic drawing
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">Elements</td>
    <td style="border:1px solid #ccc; padding:8px;">
    Animates DOM elements (like &lt;div&gt;, &lt;img&gt;, &lt;p&gt;)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Animates pixels inside a drawing area (&lt;canvas&gt;)
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">Performance</td>
    <td style="border:1px solid #ccc; padding:8px;">
    Great for UI transitions
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Better for heavy graphics, games, or visual effects
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">Ease of Use</td>
    <td style="border:1px solid #ccc; padding:8px;">
    Simple (keyframes or transitions)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    More complex (requires JavaScript coding)
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">Interactivity</td>
    <td style="border:1px solid #ccc; padding:8px;">
    Hard to control by user input (e.g., mouse movement)
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Easy — you can react to user input dynamically
    </td>
    </tr>
    </table>

    <h2 style="margin-bottom:10px; margin-top:20px;">&lt;svg&gt;</h2>

    <p style="margin-top:10px;">
    &lt;svg&gt; stands for <strong>Scalable Vector Graphics</strong>.
    </p>

    <p>
    It's an XML-based language used to draw shapes, text, and images directly in HTML, using vector graphics instead of pixels.
    </p>

    <p>
    That means it uses mathematical paths (lines, curves, points) — so images are infinitely scalable (no blur when zoomed).
    </p>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="200"
    height="200"
    &gt;

      &lt;circle
        cx="100"
        cy="100"
        r="70"
        fill="blue"
        stroke="black"
        stroke-width="3"
      /&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="200" height="200">
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="blue"
        stroke="black"
        stroke-width="3">
      </circle>
    </svg>

    </div>

    <p style="margin-top:20px;">
    This draws a blue circle with a black border inside the page.
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>cx</strong>, <strong>cy</strong> → Center coordinates</li>
      <li><strong>r</strong> → Radius</li>
      <li><strong>fill</strong> → Inside color</li>
      <li><strong>stroke</strong> → Border color</li>
      <li><strong>stroke-width</strong> → Border thickness</li>
    </ul>

    <h3 style="margin-top:25px;">Common SVG Elements</h3>

    <table style="width:100%; border-collapse:collapse; margin-top:10px;">

    <tr>
    <th style="border:1px solid #ccc; padding:8px;">Element</th>
    <th style="border:1px solid #ccc; padding:8px;">Description</th>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;circle&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Draws a circle
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;rect&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Draws a rectangle
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;line&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Draws a straight line
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;ellipse&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Like a stretched circle
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;polygon&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Multi-sided shape
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;path&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Complex custom shapes (most powerful)
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;text&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Adds text inside SVG
    </td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">
    &lt;g&gt;
    </td>
    <td style="border:1px solid #ccc; padding:8px;">
    Groups multiple shapes together
    </td>
    </tr>
    </table>
    
    <h2 style="margin-bottom:10px; margin-top:20px;">&lt;rect&gt; — Rectangle</h2>

    <p style="margin-top:10px;">
    Attributes:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>x, y</strong> → top-left corner position</li>
      <li><strong>width, height</strong> → size</li>
      <li><strong>fill</strong> → color inside</li>
      <li><strong>stroke</strong> → border color</li>
      <li><strong>stroke-width</strong> → border thickness</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="250"
    height="150"
    &gt;

      &lt;rect
        x="40"
        y="30"
        width="150"
        height="80"
        fill="skyblue"
        stroke="black"
        stroke-width="3"
      /&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="250" height="150">
      <rect
        x="40"
        y="30"
        width="150"
        height="80"
        fill="skyblue"
        stroke="black"
        stroke-width="3">
      </rect>
    </svg>

    </div>

    <h2 style="margin-top:30px;">&lt;ellipse&gt; — Oval or Stretched Circle</h2>

    <p style="margin-top:10px;">
    Attributes:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>cx, cy</strong> → center</li>
      <li><strong>rx</strong> → horizontal radius</li>
      <li><strong>ry</strong> → vertical radius</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="250"
    height="150"
    &gt;

      &lt;ellipse
        cx="125"
        cy="75"
        rx="80"
        ry="45"
        fill="orange"
        stroke="black"
        stroke-width="3"
      /&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="250" height="150">
      <ellipse
        cx="125"
        cy="75"
        rx="80"
        ry="45"
        fill="orange"
        stroke="black"
        stroke-width="3">
      </ellipse>
    </svg>

    </div>

    <h2 style="margin-top:30px;">&lt;line&gt; — Straight Line</h2>

    <p style="margin-top:10px;">
    Attributes:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>x1, y1</strong> → start point</li>
      <li><strong>x2, y2</strong> → end point</li>
      <li><strong>stroke</strong> → line color</li>
      <li><strong>stroke-width</strong> → thickness</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="250"
    height="150"
    &gt;

      &lt;line
        x1="20"
        y1="20"
        x2="220"
        y2="120"
        stroke="red"
        stroke-width="4"
      /&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="250" height="150">
      <line
        x1="20"
        y1="20"
        x2="220"
        y2="120"
        stroke="red"
        stroke-width="4">
      </line>
    </svg>
    </div>

    <h2 style="margin-bottom:10px; margin-top:20px;">&lt;polygon&gt; — Multi-sided Shape (Closed)</h2>

    <p style="margin-top:10px;">
    Attributes:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>points</strong> → list of x,y coordinates (automatically connects last to first)</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="250"
    height="180"
    &gt;

      &lt;polygon
        points="125,20 220,150 30,150"
        fill="gold"
        stroke="black"
        stroke-width="3"
      /&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="250" height="180">
      <polygon
        points="125,20 220,150 30,150"
        fill="gold"
        stroke="black"
        stroke-width="3">
      </polygon>
    </svg>

    </div>

    <h2 style="margin-top:30px;">&lt;polyline&gt; — Multi-line (Open)</h2>

    <p style="margin-top:10px;">
    Similar to &lt;polygon&gt;, but doesn't close automatically.
    </p>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="250"
    height="180"
    &gt;

      &lt;polyline
        points="20,120 80,40 140,120 200,40"
        fill="none"
        stroke="blue"
        stroke-width="4"
      /&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="250" height="180">
      <polyline
        points="20,120 80,40 140,120 200,40"
        fill="none"
        stroke="blue"
        stroke-width="4">
      </polyline>
    </svg>

    </div>

    <h2 style="margin-top:30px;">&lt;path&gt; — Custom Complex Shape</h2>

    <p style="margin-top:10px;">
    Explanation:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>M</strong> = Move to (start position)</li>
      <li><strong>Q</strong> = Quadratic curve (smooth curve)</li>
      <li>
        You can use many commands:
        <ul style="padding-left:20px; margin-top:8px;">
          <li>M (move), L (line), C (curve), Z (close path), etc.</li>
        </ul>
      </li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="250"
    height="180"
    &gt;

      &lt;path
        d="M50 120 Q125 20 200 120"
        fill="none"
        stroke="red"
        stroke-width="3"
      /&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="250" height="180">
      <path
        d="M50 120 Q125 20 200 120"
        fill="none"
        stroke="red"
        stroke-width="3">
      </path>
    </svg>

    </div>

    <h2 style="margin-top:30px;">&lt;text&gt; — Text in SVG</h2>

    <p style="margin-top:10px;">
    Attributes:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li><strong>x, y</strong> → position</li>
      <li><strong>font-size, fill</strong> → text style</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="250"
    height="100"
    &gt;

      &lt;text
        x="30"
        y="60"
        font-size="28"
        fill="green"
      &gt;
        Hello SVG
      &lt;/text&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="250" height="100">
      <text
        x="30"
        y="60"
        font-size="28"
        fill="green">
        Hello SVG
      </text>
    </svg>

    </div>

    <h2 style="margin-top:30px;">&lt;g&gt; — Grouping Elements</h2>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="220"
    height="180"
    &gt;

      &lt;g&gt;

        &lt;circle
          cx="110"
          cy="60"
          r="35"
          fill="orange"
        /&gt;

        &lt;rect
          x="75"
          y="105"
          width="70"
          height="40"
          fill="steelblue"
        /&gt;

      &lt;/g&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="220" height="180">

    <g>

    <circle
    cx="110"
    cy="60"
    r="35"
    fill="orange">
    </circle>

    <rect
    x="75"
    y="105"
    width="70"
    height="40"
    fill="steelblue">
    </rect>

    </g>

    </svg>

    </div>

    <h2 style="margin-top:30px;">&lt;image&gt; — Add Bitmap Image Inside SVG</h2>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;svg
    width="300"
    height="200"
    &gt;

      &lt;image
        href="image.jpg"
        x="20"
        y="20"
        width="200"
        height="120"
      /&gt;

    &lt;/svg&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <svg width="300" height="200" style="border:1px solid #ccc;">
      <text x="50" y="100" font-size="16" fill="gray">
        image.jpg
      </text>
    </svg>

    <p style="margin-top:10px; margin-top:20px;">
    The image <strong>image.jpg</strong> is displayed inside the SVG.
    </p>
    </div>

    <h2 style="margin-bottom:10px;">&lt;progress&gt; — Task Progress Indicator</h2>

    <p style="margin-top:10px;">
    Represents how much of a task is completed (like file upload, download progress, etc.)
    </p>

    <p>
    Use when: You're showing progress toward completion of a known or unknown total task.
    </p>

    <p>
    <strong>(Unknown progress):</strong> Shows an indeterminate spinner-like bar (browser default style).
    </p>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;progress&gt;
    &lt;/progress&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;progress
    value="70"
    max="100"
    &gt;
    &lt;/progress&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <progress value="70" max="100"></progress>

    </div>

    <h2 style="margin-top:30px;">&lt;meter&gt; — Measurement within a range</h2>

    <p style="margin-top:10px;">
    Represents a scalar value within a known range, like temperature, score, rating, or disk usage.
    </p>

    <p>
    Use when: You want to show a measurement, not progress.
    </p>

    <table style="width:100%; border-collapse:collapse; margin-top:10px;">

    <tr>
    <th style="border:1px solid #ccc; padding:8px;">Attribute</th>
    <th style="border:1px solid #ccc; padding:8px;">Description</th>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">value</td>
    <td style="border:1px solid #ccc; padding:8px;">Current value</td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">min</td>
    <td style="border:1px solid #ccc; padding:8px;">Minimum value</td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">max</td>
    <td style="border:1px solid #ccc; padding:8px;">Maximum value</td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">low</td>
    <td style="border:1px solid #ccc; padding:8px;">Lower range threshold</td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">high</td>
    <td style="border:1px solid #ccc; padding:8px;">Upper range threshold</td>
    </tr>

    <tr>
    <td style="border:1px solid #ccc; padding:8px;">optimum</td>
    <td style="border:1px solid #ccc; padding:8px;">The best or ideal value</td>
    </tr>

    </table>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;meter
    value="75"
    min="0"
    max="100"
    low="30"
    high="80"
    optimum="100"
    &gt;
    &lt;/meter&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <meter
    value="75"
    min="0"
    max="100"
    low="30"
    high="80"
    optimum="100">
    </meter>

    </div>

    <h2 style="margin-top:30px;">&lt;details&gt; Tag</h2>

    <ul style="padding-left:20px; margin-top:10px;">
    <li>Acts like a container that can be expanded or collapsed.</li>
    <li>By default, it is collapsed.</li>
    <li>When the user clicks the summary/title, the hidden content becomes visible.</li>
    </ul>

    <h2 style="margin-top:25px;">&lt;summary&gt; Tag</h2>

    <ul style="padding-left:20px; margin-top:10px;">
    <li>Defines the visible heading (label) for the &lt;details&gt; element.</li>
    <li>This is what the user clicks to show/hide the content.</li>
    </ul>

    <h3 style="margin-top:20px;">Default Open State</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;details open&gt;

      &lt;summary&gt;
        HTML
      &lt;/summary&gt;

      &lt;p&gt;
        HTML stands for
        HyperText Markup Language.
      &lt;/p&gt;

    &lt;/details&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;details&gt;

      &lt;summary&gt;
        What is HTML?
      &lt;/summary&gt;

      &lt;p&gt;
        HTML is the standard
        markup language for
        creating web pages.
      &lt;/p&gt;

    &lt;/details&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <details>
    <summary>What is HTML?</summary>

    <p>
    HTML is the standard
    markup language for
    creating web pages.
    </p>

    </details>

    </div>

    <h2 style="margin-top:30px;">&lt;dialog&gt;</h2>

    <p style="margin-top:10px;">
    &lt;dialog&gt; is an HTML5 element used to create native modal and non-modal dialog boxes (like popups, alerts, confirmation boxes) without needing external libraries or JavaScript-heavy code.
    </p>

    <h3 style="margin-top:20px;">What &lt;dialog&gt; Does</h3>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>Creates a popup window inside the webpage.</li>

    <li>Can be shown/hidden using JavaScript (or with the <strong>open</strong> attribute).</li>

    <li>
    Can behave as:
    <ul style="padding-left:20px; margin-top:8px;">
    <li>Modal dialog → blocks background interaction</li>
    <li>Non-modal dialog → does not block background</li>
    </ul>
    </li>

    </ul>

    <h3 style="margin-top:20px;">Example (Using JavaScript)</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;button
      onclick="myDialog.showModal()"
      &gt;
      Open Dialog
      &lt;/button&gt;

      &lt;dialog id="myDialog"&gt;

        &lt;h3&gt;
          Welcome
        &lt;/h3&gt;

        &lt;p&gt;
          This is a dialog box.
        &lt;/p&gt;

        &lt;button
        onclick="myDialog.close()"
        &gt;
          Close
        &lt;/button&gt;

      &lt;/dialog&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">
        <button onclick="dialogDemo.showModal()">
        Open Dialog
        </button>
        <dialog id="dialogDemo" 
        style="
          position:fixed;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          padding:20px;
          border:none;
          border-radius:10px;
          box-shadow:0 4px 15px rgba(0,0,0,.3);
          width:90%;
          max-width:400px;
          "
        >
          <h3>Welcome</h3>

          <p>
          This is a dialog box.
          </p>

          <button onclick="dialogDemo.close()">
          Close
          </button>
         </dialog>
       </div>
    </div>

    <h2 style="margin-bottom:10px; margin-top:20px;">&lt;template&gt; Tag</h2>

    <p style="margin-top:10px;">
    &lt;template&gt; is an invisible container used to define HTML code that should not render immediately, but can be cloned and inserted later with JavaScript.
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>✅ Browser does NOT display it</li>
      <li>✅ Content is stored but inactive until used</li>
      <li>✅ Useful for repeating UI, dynamic lists, reusable components, etc.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;button
    onclick="showCard()"
    &gt;
    Show Card
    &lt;/button&gt;

    &lt;template id="cardTemplate"&gt;

      &lt;div
        style="border:1px solid #ccc;
              padding:10px;
              margin-top:10px;"
      &gt;

        &lt;h3&gt;
          HTML
        &lt;/h3&gt;

        &lt;p&gt;
          HTML stands for
          HyperText Markup Language.
        &lt;/p&gt;

      &lt;/div&gt;

    &lt;/template&gt;

    &lt;div id="container"&gt;
    &lt;/div&gt;

    &lt;script&gt;

    function showCard(){

    const template =
    document.getElementById("cardTemplate");

    const clone =
    template.content.cloneNode(true);

    document
    .getElementById("container")
    .appendChild(clone);

    }

    &lt;/script&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button onclick="showTemplateCard()">
    Show Card
    </button>

    <template id="demoTemplate">

    <div style="border:1px solid #ccc;padding:10px;margin-top:10px;">
    <h3>HTML</h3>
    <p>HTML stands for HyperText Markup Language.</p>
    </div>

    </template>

    <div id="templateContainer"></div>

    <script>
    function showTemplateCard(){

    const template =
    document.getElementById("demoTemplate");

    const clone =
    template.content.cloneNode(true);

    document
    .getElementById("templateContainer")
    .appendChild(clone);

    }
    </script>

    </div>


    <h2 style="margin-bottom:10px; margin-top:20px;">&lt;slot&gt; Tag (Web Components)</h2>

      <p style="margin-top:10px;">
      A slot is like an empty placeholder inside a custom component where other HTML content can be inserted.
      </p>

      <p>
      It is used only inside Web Components, not normal HTML.
      </p>

          <h3 style="margin-top:20px;">Example</h3>

      <div class="code" style="margin-top:10px;">
      <pre>
      &lt;my-card&gt;

        &lt;h2&gt;
          HTML Course
        &lt;/h2&gt;

      &lt;/my-card&gt;

      &lt;script&gt;

      class MyCard extends HTMLElement {

        connectedCallback() {

          this.innerHTML = \`
            &lt;div
            style="
              border:1px solid #ccc;
              padding:15px;
              border-radius:5px;
            "
            &gt;

              &lt;slot&gt;
                Default Title
              &lt;/slot&gt;

            &lt;/div&gt;
          \`;

        }

      }

      customElements.define(
        "my-card",
        MyCard
      );

      &lt;/script&gt;
      </pre>
      </div>

      <h3 style="margin-top:20px;">Output</h3>

      <div class="output" style="margin-top:10px;">

      <div style="border:1px solid #ccc;padding:15px;border-radius:5px;">
      <h2>HTML Course</h2>
      </div>

      </div>

      <h3 style="margin-top:25px;">How It Works (Step by Step)</h3>

      <ol style="padding-left:20px; margin-top:10px;">

      <li style="margin-bottom:10px;">
      We create our own HTML tag named
      <strong>&lt;my-card&gt;</strong>.
      </li>

      <li style="margin-bottom:10px;">
      Inside JavaScript,
      <strong>customElements.define("my-card", MyCard)</strong>
      tells the browser what the
      <strong>&lt;my-card&gt;</strong> element should display.
      </li>

      <li style="margin-bottom:10px;">
      The component contains a
      <strong>&lt;slot&gt;</strong>.
      Think of it as an empty placeholder.
      </li>

      <li style="margin-bottom:10px;">
      Whatever is written inside
      <strong>&lt;my-card&gt;...&lt;/my-card&gt;</strong>

      replaces the
      <strong>&lt;slot&gt;</strong>.
      </li>

      <li style="margin-bottom:10px;">
      In this example, the content is:

      <strong>&lt;h2&gt;HTML Course&lt;/h2&gt;</strong>

      So the browser inserts it into the slot.
      </li>

      <li>
      If no content is provided inside
      <strong>&lt;my-card&gt;</strong>,
      the slot displays its default content:
      <strong>Default Title</strong>.
      </li>

      </ol>
`,
  },
  {
    title: "HTML APIs & Integrations",
    content: ` 

    <h2 style="margin-bottom:10px;">Why is it called an HTML API?</h2>

    <p style="margin-top:10px;">
    When HTML5 was introduced, it wasn't just about adding new HTML elements like:
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;video&gt;
    &lt;audio&gt;
    &lt;canvas&gt;
    </code></pre>
    </div>

    <p style="margin-top:15px;">
    It also introduced browser features that JavaScript could access. These features became known as <strong>HTML5 APIs</strong>.
    </p>

    <p style="margin-top:10px;">
    Some examples are:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Geolocation API</li>
      <li>Drag &amp; Drop API</li>
      <li>Web Storage API (localStorage, sessionStorage)</li>
      <li>Web Workers API</li>
      <li>History API</li>
      <li>File API</li>
      <li>Fetch API</li>
    </ul>

    <p style="margin-top:15px;">
    Although these APIs are accessed using <strong>JavaScript</strong>, they were introduced as part of the <strong>HTML5 specification</strong>, which is why they are commonly called <strong>HTML5 APIs</strong>.
    </p>

    <h2 style="margin-top:30px;">Modern Terminology</h2>

    <p style="margin-top:10px;">
    Today, developers usually say <strong>Web APIs</strong> instead of <strong>HTML5 APIs</strong>.
    </p>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    "
    >

    <tr>
    <th style="padding:10px;">Old Name</th>
    <th style="padding:10px;">Modern Name</th>
    </tr>

    <tr>
    <td style="padding:10px;">HTML5 Geolocation API</td>
    <td style="padding:10px;">Web Geolocation API</td>
    </tr>

    <tr>
    <td style="padding:10px;">HTML5 Drag &amp; Drop API</td>
    <td style="padding:10px;">Drag &amp; Drop API</td>
    </tr>

    <tr>
    <td style="padding:10px;">HTML5 Storage API</td>
    <td style="padding:10px;">Web Storage API</td>
    </tr>

    <tr>
    <td style="padding:10px;">HTML5 History API</td>
    <td style="padding:10px;">History API</td>
    </tr>

    </table>

    <h3 style="margin-top:25px;">Key Point</h3>

    <div
    style="
    margin-top:10px;
    padding:15px;
    border-left:4px solid #4CAF50;
    "
    >

    <strong>Remember:</strong>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>HTML elements are written using HTML tags (e.g., <code>&lt;video&gt;</code>, <code>&lt;canvas&gt;</code>).</li>
      <li>Web APIs are browser features accessed through JavaScript (e.g., <code>navigator.geolocation</code>, <code>localStorage</code>, <code>history</code>).</li>
      <li>These APIs are called <strong>HTML5 APIs</strong> because they were introduced with HTML5, even though they are used through JavaScript.</li>
    </ul>

    </div>

    <h2 style="margin-top:20px;">Geolocation API</h2>

    <p style="margin-top:10px;">
    The Geolocation API allows a web page to access the user’s geographical location — such as their latitude, longitude, and accuracy — with the user’s permission.
    </p>

    <p>
    It’s part of HTML5 and works via the <strong>navigator.geolocation</strong> object.
    </p>

    <h3 style="margin-top:20px;">How It Works</h3>

    <ol style="padding-left:20px; margin-top:10px;">

    <li style="margin-bottom:10px;">
    When <strong>getCurrentPosition()</strong> is called:
    <ul style="padding-left:20px; margin-top:10px;">
    <li>Browser asks the user for permission.</li>
    <li>If allowed, it retrieves the GPS location (via GPS, Wi-Fi, or IP address).</li>
    </ul>
    </li>

    <li>
    The data returned in <strong>position.coords</strong> includes:
    <ul style="padding-left:20px; margin-top:10px;">
    <li>latitude</li>
    <li>longitude</li>
    <li>accuracy (in meters)</li>
    <li>altitude (if available)</li>
    <li>speed (if available)</li>
    <li>timestamp</li>
    </ul>
    </li>

    </ol>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    &lt;button
    onclick="getLocation()"
    &gt;
    Get My Location
    &lt;/button&gt;

    &lt;p id="output"&gt;
    &lt;/p&gt;

    &lt;script&gt;

    function getLocation() {

    if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
    showPosition,
    showError
    );

    } else {

    document.getElementById("output").innerText =
    "Geolocation is not supported by this browser.";

    }

    }

    function showPosition(position) {

    const lat =
    position.coords.latitude;

    const lon =
    position.coords.longitude;

    document.getElementById("output").innerText =
    "Latitude: " + lat + ", Longitude: " + lon;

    function showError(error) {

    switch (error.code) {

    case error.PERMISSION_DENIED:

    alert(
    "User denied the request for Geolocation."
    );

    break;

    case error.POSITION_UNAVAILABLE:

    alert(
    "Location information is unavailable."
    );

    break;

    case error.TIMEOUT:

    alert(
    "The request to get user location timed out."
    );

    break;

    default:

    alert(
    "An unknown error occurred."
    );

    }

    }

    &lt;/script&gt;
    </pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button onclick="getLocationDemo()">
    Get My Location
    </button>

    <p id="demoLocation" style="margin-top:10px;"></p>

    <script>
    function getLocationDemo(){

    if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(
    showPositionDemo,

    function(){

    document.getElementById("demoLocation").innerHTML =
    "Permission denied or location unavailable.";

    }

    );

    }else{

    document.getElementById("demoLocation").innerHTML =
    "Geolocation is not supported.";

    }

    }

    function showPositionDemo(position) {

    const lat =
    position.coords.latitude;

    const lon =
    position.coords.longitude;

    document.getElementById("demoLocation").innerHTML =
    "Latitude: " + lat + "<br>Longitude: " + lon;

    }
    </script>

    </div>

    <h2 style="margin-top:30px;">Tracking User's Movement (Live Updates)</h2>

    <p style="margin-top:10px;">
    Use <strong>watchPosition()</strong> to keep receiving updates as the user moves.
    </p>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre>
    navigator.geolocation.watchPosition(

    function(position){

    console.log(
    position.coords.latitude
    );

    console.log(
    position.coords.longitude
    );

    }

    );
    </pre>
    </div>

    <h3 style="margin-top:20px;">Explanation</h3>

    <ul style="padding-left:20px; margin-top:10px;">
    <li><strong>watchPosition()</strong> continuously monitors the user's location.</li>
    <li>Whenever the location changes, the callback function is called automatically.</li>
    <li>Useful for navigation apps, fitness tracking, and live location sharing.</li>
    </ul>

    <h2 style="margin-bottom:10px; margin-top:20px;">Drag &amp; Drop API</h2>

    <p style="margin-top:10px;">
    It enables elements in the browser to be:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Draggable (moved by the user)</li>
      <li>Droppable (receiving the dragged item)</li>
    </ul>
    <h2 style="margin-top:30px;">Event Flow Summary</h2>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    "
    >

    <tr>
    <th style="padding:10px;">Event</th>
    <th style="padding:10px;">Fired When</th>
    <th style="padding:10px;">Example Handler</th>
    </tr>

    <tr>
    <td style="padding:10px;"><code>dragstart</code></td>
    <td style="padding:10px;">User starts dragging</td>
    <td style="padding:10px;"><code>event.dataTransfer.setData()</code></td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>drag</code></td>
    <td style="padding:10px;">While dragging</td>
    <td style="padding:10px;">For visual feedback</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>dragenter</code></td>
    <td style="padding:10px;">Drag enters drop zone</td>
    <td style="padding:10px;">Highlight zone</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>dragover</code></td>
    <td style="padding:10px;">Drag is over drop zone</td>
    <td style="padding:10px;"><code>event.preventDefault()</code></td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>dragleave</code></td>
    <td style="padding:10px;">Drag leaves drop zone</td>
    <td style="padding:10px;">Remove highlight</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>drop</code></td>
    <td style="padding:10px;">Item is dropped</td>
    <td style="padding:10px;">Handle dropped data</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>dragend</code></td>
    <td style="padding:10px;">Dragging stops</td>
    <td style="padding:10px;">Cleanup</td>
    </tr>

    </table>

    <h2 style="margin-top:30px;">Example</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;div
    id="box"
    draggable="true"
    ondragstart="drag(event)"
    &gt;
    Drag Me
    &lt;/div&gt;

    &lt;div
    id="dropZone"
    ondragover="allowDrop(event)"
    ondrop="drop(event)"
    &gt;
    Drop Here
    &lt;/div&gt;

    &lt;script&gt;

    function allowDrop(event){

    event.preventDefault();

    }

    function drag(event){

    event.dataTransfer.setData(
    "text",
    event.target.id
    );

    }

    function drop(event){

    event.preventDefault();

    const data =
    event.dataTransfer.getData("text");

    event.target.appendChild(
    document.getElementById(data)
    );

    }

    &lt;/script&gt;
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Output</h2>

    <div class="output" style="margin-top:10px;">

    <div
    id="dragBox"
    draggable="true"
    ondragstart="dragDemo(event)"
    style="
    width:100px;
    padding:12px;
    text-align:center;
    background:#4CAF50;
    color:white;
    border-radius:5px;
    cursor:grab;
    margin-bottom:15px;
    "
    >
    Drag Me
    </div>

    <div
    id="dropDemo"
    ondragover="allowDropDemo(event)"
    ondrop="dropDemo(event)"
    style="
    width:250px;
    height:120px;
    border:2px dashed #999;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:8px;
    "
    >
    Drop Here
    </div>

    <script>

    function allowDropDemo(event){

    event.preventDefault();

    }

    function dragDemo(event){

    event.dataTransfer.setData(
    "text",
    event.target.id
    );

    }

    function dropDemo(event){

    event.preventDefault();

    const data =
    event.dataTransfer.getData("text");

    event.currentTarget.appendChild(
    document.getElementById(data)
    );

    }

    </script>

    </div>
    <h2 style="margin-top:30px;">How It Works</h2>

    <ol style="padding-left:20px; margin-top:10px;">

    <li style="margin-bottom:10px;">
    <strong>draggable="true"</strong> → makes the element draggable.
    </li>

    <li style="margin-bottom:10px;">
    <strong>dragstart</strong> → triggered when dragging begins (used to store data).
    </li>

    <li style="margin-bottom:10px;">
    <strong>dragover</strong> → must prevent default to allow dropping.
    </li>

    <li>
    <strong>drop</strong> → triggered when the dragged item is dropped.
    </li>

    </ol>

    <h2 style="margin-bottom:10px; margin-top:20px;">History API</h2>

    <p style="margin-top:10px;">
    The <strong>History API</strong> allows JavaScript to interact with the browser's session history without reloading the page.
    </p>

    <p>
    It lets developers:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
      <li>Navigate backward and forward.</li>
      <li>Add new entries to the browser history.</li>
      <li>Modify the current history entry.</li>
      <li>Create Single Page Applications (SPAs) without full page reloads.</li>
    </ul>

    <p style="margin-top:15px;">
    The History API is available through the <strong>window.history</strong> object.
    </p>

    <h2 style="margin-top:30px;">Common Methods</h2>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>
    <th style="padding:10px;">Method</th>
    <th style="padding:10px;">Purpose</th>
    </tr>

    <tr>
    <td style="padding:10px;"><code>back()</code></td>
    <td style="padding:10px;">Go to previous page</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>forward()</code></td>
    <td style="padding:10px;">Go to next page</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>go()</code></td>
    <td style="padding:10px;">Move backward or forward by number of pages</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>pushState()</code></td>
    <td style="padding:10px;">Add a new history entry</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>replaceState()</code></td>
    <td style="padding:10px;">Replace current history entry</td>
    </tr>

    </table>

    <h2 style="margin-top:30px;">history.length</h2>

    <p style="margin-top:10px;">
    Returns the total number of pages in the browser session history.
    </p>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code">
    <pre><code>
    console.log(history.length);
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">history.back()</h2>

    <p style="margin-top:10px;">
    Returns to the previous page.
    </p>

    <p>
    Equivalent to pressing the browser's <strong>Back</strong> button.
    </p>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;button
    onclick="history.back()"
    &gt;
    Go Back
    &lt;/button&gt;
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button onclick="history.back()">
    Go Back
    </button>

    </div>
    <h2 style="margin-top:30px;">history.forward()</h2>

    <p style="margin-top:10px;">
    Moves to the next page.
    </p>

    <p>
    Equivalent to pressing the browser's <strong>Forward</strong> button.
    </p>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;button
    onclick="history.forward()"
    &gt;
    Go Forward
    &lt;/button&gt;
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button onclick="history.forward()">
    Go Forward
    </button>

    </div>
    <h2 style="margin-top:30px;">history.go()</h2>

    <p style="margin-top:10px;">
    Moves through the browser history.
    </p>

    <p>
    Parameter:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">
    <li><strong>Negative number</strong> → Move backward.</li>
    <li><strong>Positive number</strong> → Move forward.</li>
    <li><strong>0</strong> → Reload the current page.</li>
    </ul>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;button onclick="history.go(-1)"&gt;
    Go Back One Page
    &lt;/button&gt;

    &lt;button onclick="history.go(1)"&gt;
    Go Forward One Page
    &lt;/button&gt;

    &lt;button onclick="history.go(0)"&gt;
    Reload Page
    &lt;/button&gt;
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button onclick="history.go(-1)">
    Go Back One Page
    </button>

    <button onclick="history.go(1)">
    Go Forward One Page
    </button>

    <button onclick="history.go(0)">
    Reload Page
    </button>

    </div>
    <h2 style="margin-top:30px;">history.pushState()</h2>

    <p style="margin-top:10px;">
    Adds a new entry to the browser history without reloading the page.
    </p>

    <p>
    It is commonly used in Single Page Applications (SPAs) to change the URL dynamically.
    </p>

    <h3 style="margin-top:20px;">Syntax</h3>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    history.pushState(
    state,
    title,
    url
    );
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;button
    onclick="addHistory()"
    &gt;
    Go to About
    &lt;/button&gt;

    &lt;script&gt;

    function addHistory(){

    history.pushState(

    { page: "about" },

    "",

    "/about"

    );

    }

    &lt;/script&gt;
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button onclick="addHistoryDemo()">
    Go to About
    </button>

    <p id="pushStateMsg" style="margin-top:10px;"></p>

    <script>

    function addHistoryDemo(){

    history.pushState(

    { page:"about" },

    "",

    "/about"

    );

    document.getElementById("pushStateMsg").innerHTML =
    "URL changed without reloading the page.";

    }

    </script>

    </div>
    <h2 style="margin-top:30px;">history.replaceState()</h2>

    <p style="margin-top:10px;">
    Replaces the current history entry without creating a new one.
    </p>

    <p>
    Unlike <strong>pushState()</strong>, it does not add a new history record.
    </p>

    <h3 style="margin-top:20px;">Syntax</h3>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    history.replaceState(
    state,
    title,
    url
    );
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;button
    onclick="replaceHistory()"
    &gt;
    Replace Current URL
    &lt;/button&gt;

    &lt;script&gt;

    function replaceHistory(){

    history.replaceState(

    { page: "profile" },

    "",

    "/profile"

    );

    }

    &lt;/script&gt;
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output" style="margin-top:10px;">

    <button onclick="replaceHistoryDemo()">
    Replace Current URL
    </button>

    <p id="replaceStateMsg" style="margin-top:10px;"></p>

    <script>

    function replaceHistoryDemo(){

    history.replaceState(

    { page:"profile" },

    "",

    "/profile"

    );

    document.getElementById("replaceStateMsg").innerHTML =
    "Current history entry replaced without reloading the page.";

    }

    </script>

    </div>

    <h2 style="margin-bottom:10px;">Web Storage API (localStorage &amp; sessionStorage)</h2>

    <p style="margin-top:10px;">
    Web Storage provides a way to store <strong>key–value</strong> data in the browser without expiry (<strong>localStorage</strong>) or until the tab closes (<strong>sessionStorage</strong>).
    </p>

    <p>
    It is synchronous and much simpler than cookies.
    </p>

    <p>
    Both <strong>localStorage</strong> and <strong>sessionStorage</strong> store data as <strong>key–value pairs</strong>.
    </p>

    <p>
    A <strong>key</strong> is the name used to identify the data, and the <strong>value</strong> is the data associated with that key.
    </p>

    <div
    style="
    margin-top:15px;
    padding:15px; 
    border-left:4px solid #4CAF50;
    "
    >

    <strong>Example:</strong>

    <ul style="padding-left:20px; margin-top:10px;">
    <li>Key → <code>"username"</code></li>
    <li>Value → <code>"Devendra"</code></li>
    </ul>

    </div>

    <h2 style="margin-top:30px;">1. localStorage</h2>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>Data is permanent (stays even after the browser is closed).</li>

    <li>Saved per domain.</li>

    <li>Maximum storage size is approximately <strong>5–10 MB</strong> (depends on the browser).</li>

    <li>Only stores strings.</li>

    <li>Data is shared across all tabs and windows of the same website.</li>

    <li>Commonly used to store user preferences, themes, language settings, and shopping cart data.</li>

    </ul>

    <h2 style="margin-top:30px;">Example: localStorage.setItem()</h2>

    <p style="margin-top:10px;">
    Stores data in the browser.
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    localStorage.setItem(
    "userName",
    "Devendra"
    );
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Explanation</h3>

    <p>
    Key = <code>"userName"</code>
    </p>

    <p>
    Value = <code>"Devendra"</code>
    </p>

    <h2 style="margin-top:30px;">Example: localStorage.getItem()</h2>

    <p style="margin-top:10px;">
    Retrieves stored data using its key.
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    const name =
    localStorage.getItem("userName");

    console.log(name);
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output">
    Devendra
    </div>

    <h2 style="margin-top:30px;">Example: localStorage.removeItem()</h2>

    <p style="margin-top:10px;">
    Removes a specific item from storage.
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    localStorage.removeItem(
    "userName"
    );
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: localStorage.clear()</h2>

    <p style="margin-top:10px;">
    Removes all stored data.
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    localStorage.clear();
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: Store an Object</h2>

    <p style="margin-top:10px;">
    Web Storage stores only strings. To store an object, convert it into JSON using <code>JSON.stringify()</code>.
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    const user = {

    name: "Devendra",

    age: 25,

    city: "Delhi"

    };

    localStorage.setItem(
    "user",
    JSON.stringify(user)
    );
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: Retrieve an Object</h2>

    <p style="margin-top:10px;">
    Use <code>JSON.parse()</code> to convert the JSON string back into an object.
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    const user = JSON.parse(

    localStorage.getItem("user")

    );

    console.log(user.name);

    console.log(user.age);

    console.log(user.city);
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output">

    Devendra

    <br>

    25

    <br>

    Delhi

    </div>

    <h2 style="margin-top:30px;">2. sessionStorage</h2>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>Data lasts only for the current tab/session.</li>

    <li>When you close the tab, the data is deleted automatically.</li>

    <li>Other tabs cannot access the sessionStorage of another tab.</li>

    <li>Uses the same methods as localStorage.</li>

    <li>Useful for temporary data such as multi-step forms, OTP verification, or temporary user information.</li>

    </ul>

    <h2 style="margin-top:30px;">Example: sessionStorage.setItem()</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    sessionStorage.setItem(
    "userName",
    "Devendra"
    );
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: sessionStorage.getItem()</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    const name =
    sessionStorage.getItem(
    "userName"
    );

    console.log(name);
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: sessionStorage.removeItem()</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    sessionStorage.removeItem(
    "userName"
    );
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: sessionStorage.clear()</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    sessionStorage.clear();
    </code></pre>
    </div>

    <h2 style="margin-bottom:10px; margin-top:20px;">Cookies</h2>

    <p style="margin-top:10px;">
    Cookies are small pieces of data stored by the browser as <strong>key–value pairs</strong>.
    </p>

    <p>
    Unlike <strong>localStorage</strong> and <strong>sessionStorage</strong>, cookies are automatically sent to the server with every HTTP request.
    </p>

    <p>
    They are commonly used for login sessions, authentication, user preferences, and tracking users.
    </p>

    <h2 style="margin-top:30px;">How Cookies Work</h2>

    <ol style="padding-left:20px; margin-top:10px;">

    <li style="margin-bottom:10px;">
    A website creates a cookie and stores it in the browser.
    </li>

    <li style="margin-bottom:10px;">
    The browser saves the cookie.
    </li>

    <li style="margin-bottom:10px;">
    Whenever the user visits the same website again, the browser automatically sends the cookie to the server.
    </li>

    <li>
    The server reads the cookie and identifies the user or retrieves stored information.
    </li>

    </ol>

    <h2 style="margin-top:30px;">Cookie Format</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    key=value
    </code></pre>
    </div>

    <p style="margin-top:10px;">
    Example:
    </p>

    <div class="code">
    <pre><code>
    username=Devendra
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Common Cookie Attributes</h2>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>
    <th style="padding:10px;">Attribute</th>
    <th style="padding:10px;">Purpose</th>
    </tr>

    <tr>
    <td style="padding:10px;"><code>expires</code></td>
    <td style="padding:10px;">Sets the expiration date.</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>max-age</code></td>
    <td style="padding:10px;">Sets the lifetime in seconds.</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>path</code></td>
    <td style="padding:10px;">Defines where the cookie is available.</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>domain</code></td>
    <td style="padding:10px;">Defines which domain can access the cookie.</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>secure</code></td>
    <td style="padding:10px;">Cookie is sent only over HTTPS.</td>
    </tr>

    <tr>
    <td style="padding:10px;"><code>SameSite</code></td>
    <td style="padding:10px;">Helps protect against CSRF attacks.</td>
    </tr>

    </table>

    <h2 style="margin-top:30px;">Example: Create a Cookie</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    document.cookie =
    "userName=Devendra";
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: Create a Cookie with Expiry</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    document.cookie =
    "userName=Devendra;
    expires=Fri, 31 Dec 2027 12:00:00 UTC;
    path=/";
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: Read Cookies</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    console.log(
    document.cookie
    );
    </code></pre>
    </div>

    <h3 style="margin-top:20px;">Output</h3>

    <div class="output">

    userName=Devendra

    </div>

    <h2 style="margin-top:30px;">Example: Update a Cookie</h2>

    <p style="margin-top:10px;">
    Create another cookie with the same name but a different value.
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    document.cookie =
    "userName=Rahul";
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: Delete a Cookie</h2>

    <p style="margin-top:10px;">
    Set the expiration date to a past date.
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    document.cookie =
    "userName=;
    expires=Thu, 01 Jan 1970 00:00:00 UTC;
    path=/";
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Storage Comparison</h2>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>
    <th style="padding:10px;">Feature</th>
    <th style="padding:10px;">localStorage</th>
    <th style="padding:10px;">sessionStorage</th>
    <th style="padding:10px;">Cookies</th>
    </tr>

    <tr>
    <td style="padding:10px;">Storage Size</td>
    <td style="padding:10px;">~5–10 MB</td>
    <td style="padding:10px;">~5–10 MB</td>
    <td style="padding:10px;">~4 KB</td>
    </tr>

    <tr>
    <td style="padding:10px;">Lifetime</td>
    <td style="padding:10px;">Permanent</td>
    <td style="padding:10px;">Until tab closes</td>
    <td style="padding:10px;">Until expiry date</td>
    </tr>

    <tr>
    <td style="padding:10px;">Sent to Server</td>
    <td style="padding:10px;">❌ No</td>
    <td style="padding:10px;">❌ No</td>
    <td style="padding:10px;">✅ Yes</td>
    </tr>

    <tr>
    <td style="padding:10px;">Accessible in Other Tabs</td>
    <td style="padding:10px;">✅ Yes</td>
    <td style="padding:10px;">❌ No</td>
    <td style="padding:10px;">✅ Yes</td>
    </tr>

    <tr>
    <td style="padding:10px;">Stores Only Strings</td>
    <td style="padding:10px;">✅ Yes</td>
    <td style="padding:10px;">✅ Yes</td>
    <td style="padding:10px;">✅ Yes</td>
    </tr>
    </table>

    <h2 style="margin-bottom:10px; margin-top:20px;">Web Workers</h2>

    <p style="margin-top:10px;">
    A <strong>Web Worker</strong> is a background helper in the browser.
    </p>

    <p>
    It runs JavaScript in a <strong>separate thread</strong>, not in the <strong>main UI thread</strong>.
    </p>

    <h2 style="margin-top:30px;">Why do we need Web Workers?</h2>

    <p style="margin-top:10px;">
    Normally, JavaScript runs on one thread only → the <strong>main thread</strong>.
    </p>

    <p>
    If you do something heavy like:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>Big calculations</li>

    <li>Image processing</li>

    <li>Loops with millions of iterations</li>

    <li>Data compression</li>

    <li>Fetching and processing large JSON data</li>

    </ul>

    <p style="margin-top:10px;">
    The browser's UI can become slow or completely freeze until the task finishes.
    </p>

    <h2 style="margin-top:30px;">Without Web Workers</h2>

    <div
    style="
    margin-top:10px;
    padding:15px; 
    border:1px solid #ccc;
    font-family:monospace;
    white-space:pre;
    overflow-x:auto;
    ">
    Browser

    ┌────────────────────────────────────┐
    │          Main Thread               │
    ├────────────────────────────────────┤
    │ UI Rendering                       │
    │ Button Clicks                      │
    │ DOM Updates                        │
    │ JavaScript                         │
    │ Heavy Calculation                  │
    └────────────────────────────────────┘

    Result:
    ❌ UI becomes slow or freezes.
    </div>

    <h2 style="margin-top:30px;">With Web Workers</h2>

    <div
    style="
    margin-top:10px;
    padding:15px; 
    border:1px solid #ccc;
    font-family:monospace;
    white-space:pre;
    overflow-x:auto;
    ">
    Browser

    ┌───────────────────────┐
    │     Main Thread       │
    ├───────────────────────┤
    │ UI Rendering          │
    │ DOM Updates           │
    │ Button Clicks         │
    │ Light JavaScript      │
    └───────────────────────┘
              │
              │ Sends Task
              ▼
    ┌───────────────────────┐
    │     Web Worker        │
    ├───────────────────────┤
    │ Heavy Calculation     │
    │ Image Processing      │
    │ JSON Processing       │
    │ Background Tasks      │
    └───────────────────────┘
              │
              │ Returns Result
              ▼
    Main Thread updates the UI.

    Result:
    ✅ Smooth UI
    ✅ No freezing
    </div>

    <h2 style="margin-top:30px;">JavaScript is Single-Threaded</h2>

    <p style="margin-top:10px;">
    Normally, JavaScript executes on only one thread called the <strong>Main Thread</strong>.
    </p>

    <p>
    Everything happens in this thread:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>UI rendering</li>

    <li>Button clicks</li>

    <li>DOM updates</li>

    <li>Executing JavaScript</li>

    </ul>

    <p>
    Since everything shares the same thread, a long-running JavaScript task blocks everything else.
    </p>

    <h2 style="margin-top:30px;">Then How Does a Web Worker Run on Another Thread?</h2>

    <p style="margin-top:10px;">
    A Web Worker does <strong>not</strong> come from JavaScript itself.
    </p>

    <p>
    Instead, JavaScript asks the browser to create one.
    </p>

    <p>
    The browser engine creates a completely separate system thread and runs the worker there.
    </p>

    <div
    style="
    margin-top:15px;
    padding:15px; 
    border-left:4px solid #2196F3;
    font-family:monospace;
    white-space:pre;
    overflow-x:auto;
    ">
    JavaScript

          │

          │ new Worker()

          ▼

    Browser Engine

          │

    Creates a New Thread

          ▼

    Web Worker
    </div>

    <h2 style="margin-top:30px;">Who Creates the Second Thread?</h2>

    <p style="margin-top:10px;">
    The browser engine creates the second thread.
    </p>

    <p>
    <strong>Not JavaScript.</strong>
    </p>

    <p>
    <strong>Not HTML.</strong>
    </p>

    <p>
    <strong>Not the DOM.</strong>
    </p>

    <p>
    JavaScript simply requests a worker by using:
    </p>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    const worker = new Worker(
    "worker.js"
    );
    </code></pre>
    </div>

    <p style="margin-top:10px;">
    After this, the browser creates another thread automatically.
    </p>

    <h2 style="margin-top:30px;">Chrome Internally</h2>

    <ul style="padding-left:20px; margin-top:10px;">

    <li><strong>V8</strong> → JavaScript Engine</li>

    <li><strong>Blink</strong> → Rendering Engine</li>

    </ul>

    <p>
    When JavaScript creates a worker:
    </p>

    <div
    style="
    margin-top:15px;
    padding:15px; 
    border:1px solid #ccc;
    font-family:monospace;
    white-space:pre;
    overflow-x:auto;
    ">
    JavaScript

          │

    new Worker()

          │

          ▼

    V8 Engine

          │

    Requests

          ▼

    Blink / Operating System

          │

    Creates

          ▼

    New System Thread

          │

    Runs

          ▼

    worker.js
    </div>

    <h2 style="margin-top:30px;">Remember</h2>

    <div
    style="
    margin-top:10px;
    padding:15px; 
    border-left:4px solid #4CAF50;
    ">

    <ul style="padding-left:20px;">

    <li>JavaScript is single-threaded by default.</li>

    <li>A Web Worker runs JavaScript in a separate thread.</li>

    <li>The browser engine creates the worker thread.</li>

    <li>Heavy tasks should be moved to a Web Worker.</li>

    <li>The main thread stays responsive while the worker performs background tasks.</li>

    <li>A Web Worker cannot directly access the DOM.</li>

    </ul>

    </div>

    <h2 style="margin-bottom:10px; margin-top:20px;">File API</h2>

    <p style="margin-top:10px;">
    The <strong>File API</strong> allows JavaScript to access files selected by the user from their computer.
    </p>

    <p>
    It lets web applications read the contents of files without uploading them to a server.
    </p>

    <p>
    For security reasons, browsers <strong>cannot access files automatically</strong>. The user must explicitly choose a file.
    </p>

    <h2 style="margin-top:30px;">Why do we need the File API?</h2>

    <p style="margin-top:10px;">
    The File API is useful when your website needs to work with user-selected files.
    </p>

    <p>
    Common use cases:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>Uploading profile pictures</li>

    <li>Reading text files</li>

    <li>Previewing images before upload</li>

    <li>Uploading PDFs or documents</li>

    <li>Reading CSV or Excel files</li>

    <li>Importing JSON files</li>

    <li>Drag & Drop file uploads</li>

    </ul>

    <h2 style="margin-top:30px;">How It Works</h2>

    <div
    style="
    margin-top:10px;
    padding:15px; 
    border:1px solid #ccc;
    font-family:monospace;
    white-space:pre;
    overflow-x:auto;
    ">
    User

      │

    Selects File

      │

      ▼

    &lt;input type="file"&gt;

      │

      ▼

    File Object

      │

      ▼

    JavaScript

      │

      ▼

    Read File Content
    </div>


    <h2 style="margin-top:30px;">Important Objects</h2>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>

    <th style="padding:10px;">Object</th>

    <th style="padding:10px;">Purpose</th>

    </tr>

    <tr>

    <td style="padding:10px;"><code>File</code></td>

    <td style="padding:10px;">Represents a selected file.</td>

    </tr>

    <tr>

    <td style="padding:10px;"><code>FileList</code></td>

    <td style="padding:10px;">Collection of selected files.</td>

    </tr>

    <tr>

    <td style="padding:10px;"><code>FileReader</code></td>

    <td style="padding:10px;">Reads the contents of a file.</td>

    </tr>

    <tr>

    <td style="padding:10px;"><code>Blob</code></td>

    <td style="padding:10px;">Represents raw binary data.</td>

    </tr>

    </table>

    <h2 style="margin-top:30px;">Selecting a File</h2>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;input
    type="file"
    &gt;
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Selecting Multiple Files</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;input
    type="file"
    multiple
    &gt;
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">accept Attribute</h2>

    <p style="margin-top:10px;">
    The <code>accept</code> attribute limits which file types the user can select.
    </p>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>

    <th style="padding:10px;">Value</th>

    <th style="padding:10px;">Allows</th>

    </tr>

    <tr>

    <td style="padding:10px;">image/*</td>

    <td style="padding:10px;">All images</td>

    </tr>

    <tr>

    <td style="padding:10px;">video/*</td>

    <td style="padding:10px;">All videos</td>

    </tr>

    <tr>

    <td style="padding:10px;">audio/*</td>

    <td style="padding:10px;">All audio files</td>

    </tr>

    <tr>

    <td style="padding:10px;">.pdf</td>

    <td style="padding:10px;">PDF files</td>

    </tr>

    <tr>

    <td style="padding:10px;">.txt</td>

    <td style="padding:10px;">Text files</td>

    </tr>

    </table>

    Example

    <div class="code" style="margin-top:10px;">
    <pre><code>
    &lt;input
    type="file"
    accept="image/*"
    &gt;
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Accessing the Selected File</h2>

    <div class="code" style="margin-top:10px;">
    <pre><code>
    const input =

    document.querySelector(
    "input"
    );

    const file =

    input.files[0];
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">File Properties</h2>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>

    <th style="padding:10px;">Property</th>

    <th style="padding:10px;">Description</th>

    </tr>

    <tr>

    <td style="padding:10px;">name</td>

    <td style="padding:10px;">File name</td>

    </tr>

    <tr>

    <td style="padding:10px;">size</td>

    <td style="padding:10px;">Size in bytes</td>

    </tr>

    <tr>

    <td style="padding:10px;">type</td>

    <td style="padding:10px;">MIME type</td>

    </tr>

    <tr>

    <td style="padding:10px;">lastModified</td>

    <td style="padding:10px;">Last modified time</td>

    </tr>

    </table>

    <h2 style="margin-top:30px;">Example: Display File Information</h2>

    <div class="code">
    <pre><code>
    &lt;input
    type="file"
    id="fileInput"
    &gt;

    &lt;script&gt;

    const input =

    document.getElementById(
    "fileInput"
    );

    input.onchange = function(){

    const file =
    this.files[0];

    console.log(file.name);

    console.log(file.size);

    console.log(file.type);

    };

    &lt;/script&gt;
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">FileReader</h2>

    <p style="margin-top:10px;">
    The <strong>FileReader</strong> object is used to read the contents of a file.
    </p>

    <h2 style="margin-top:30px;">Common Methods</h2>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>

    <th style="padding:10px;">Method</th>

    <th style="padding:10px;">Description</th>

    </tr>

    <tr>

    <td style="padding:10px;">readAsText()</td>

    <td style="padding:10px;">Reads a text file.</td>

    </tr>

    <tr>

    <td style="padding:10px;">readAsDataURL()</td>

    <td style="padding:10px;">Reads file as Base64.</td>

    </tr>

    <tr>

    <td style="padding:10px;">readAsArrayBuffer()</td>

    <td style="padding:10px;">Reads binary data.</td>

    </tr>

    </table>

    <h2 style="margin-top:30px;">Example: Read a Text File</h2>

    <div class="code">
    <pre><code>
    &lt;input
    type="file"
    id="fileInput"
    &gt;

    &lt;script&gt;

    const input =

    document.getElementById(
    "fileInput"
    );

    input.onchange = function(){

    const file =
    this.files[0];

    const reader =

    new FileReader();

    reader.onload = function(){

    console.log(
    reader.result
    );

    };

    reader.readAsText(
    file
    );

    };

    &lt;/script&gt;
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Example: Preview an Image</h2>

    <div class="code">
    <pre><code>
    &lt;input
    type="file"
    id="imageInput"
    accept="image/*"
    &gt;

    &lt;img id="preview"&gt;

    &lt;script&gt;

    const input =

    document.getElementById(
    "imageInput"
    );

    const image =

    document.getElementById(
    "preview"
    );

    input.onchange = function(){

    const file =
    this.files[0];

    const reader =

    new FileReader();

    reader.onload = function(){

    image.src =
    reader.result;

    };

    reader.readAsDataURL(
    file
    );

    };

    &lt;/script&gt;
    </code></pre>
    </div>

    <h2 style="margin-top:30px;">Blob</h2>

    <p style="margin-top:10px;">
    A <strong>Blob</strong> (Binary Large Object) represents raw binary data.
    </p>

    <p>
    Images, videos, PDFs, and files are internally represented as Blob objects.
    </p>

    Example

    <div class="code">
    <pre><code>
    const blob =

    new Blob(

    ["Hello World"],

    {
    type:"text/plain"
    }

    );
    </code></pre>
    </div>

    <h2 style="margin-bottom:10px;">Embedding External Content in HTML</h2>

    <p style="margin-top:10px;">
    HTML provides tags to display external content inside a web page.
    </p>

    <p>
    You can embed:
    </p>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>Videos</li>

    <li>Maps</li>

    <li>Another website</li>

    <li>PDF files</li>

    <li>Media players</li>

    <li>Online tools</li>

    </ul>

    <p>
    The three main tags used are:
    </p>

    <ol style="padding-left:20px; margin-top:10px;">

    <li><code>&lt;iframe&gt;</code></li>

    <li><code>&lt;embed&gt;</code></li>

    <li><code>&lt;object&gt;</code></li>

    </ol> 

    <h2 style="margin-top:20px;">&lt;iframe&gt; — Inline Frame</h2>

    <p style="margin-top:10px;">
    The <code>&lt;iframe&gt;</code> tag is the most commonly used element for embedding external content.
    </p>

    <p>
    It loads an entire HTML document or webpage inside a small window on your page.
    </p>

    <h3 style="margin-top:20px;">Uses</h3>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>Embedding YouTube videos</li>

    <li>Google Maps</li>

    <li>External websites</li>

    <li>Payment forms (Stripe, Razorpay)</li>

    <li>Advertisements (Google Ads, Facebook Ads)</li>

    </ul>

    <h3 style="margin-top:20px;">Important Attributes</h3>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>

    <th style="padding:10px;">Attribute</th>

    <th style="padding:10px;">Purpose</th>

    </tr>

    <tr>

    <td style="padding:10px;">src</td>

    <td style="padding:10px;">URL of the page to display.</td>

    </tr>

    <tr>

    <td style="padding:10px;">width</td>

    <td style="padding:10px;">Width of the iframe.</td>

    </tr>

    <tr>

    <td style="padding:10px;">height</td>

    <td style="padding:10px;">Height of the iframe.</td>

    </tr>

    <tr>

    <td style="padding:10px;">title</td>

    <td style="padding:10px;">Accessibility description.</td>

    </tr>

    <tr>

    <td style="padding:10px;">allowfullscreen</td>

    <td style="padding:10px;">Allows fullscreen mode.</td>

    </tr>

    <tr>

    <td style="padding:10px;">loading="lazy"</td>

    <td style="padding:10px;">Loads the iframe only when needed.</td>

    </tr>

    </table>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code">
    <pre><code>
    &lt;iframe

    src="https://example.com"

    width="500"

    height="300"

    title="Example Website"

    &gt;

    &lt;/iframe&gt;
    </code></pre>
    </div>

    <h2 style="margin-top:20px;">&lt;embed&gt; — Embedding Non-HTML Content</h2>

    <p style="margin-top:10px;">
    The <code>&lt;embed&gt;</code> tag is used to embed external files directly into a webpage.
    </p>

    <p>
    Unlike <code>&lt;iframe&gt;</code>, it does not load an entire webpage.
    </p>

    <h3 style="margin-top:20px;">Uses</h3>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>PDF files</li>

    <li>Audio files</li>

    <li>Video files</li>

    <li>SVG images</li>

    <li>Flash content (legacy)</li>

    </ul>

    <h3 style="margin-top:20px;">Important Attributes</h3>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>

    <th style="padding:10px;">Attribute</th>

    <th style="padding:10px;">Purpose</th>

    </tr>

    <tr>

    <td style="padding:10px;">src</td>

    <td style="padding:10px;">Path of the file.</td>

    </tr>

    <tr>

    <td style="padding:10px;">type</td>

    <td style="padding:10px;">MIME type of the file.</td>

    </tr>

    <tr>

    <td style="padding:10px;">width</td>

    <td style="padding:10px;">Width.</td>

    </tr>

    <tr>

    <td style="padding:10px;">height</td>

    <td style="padding:10px;">Height.</td>

    </tr>

    </table>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code">
    <pre><code>
    &lt;embed

    src="resume.pdf"

    type="application/pdf"

    width="600"

    height="400"

    &gt;
    </code></pre>
    </div>

    <h2 style="margin-top:20px;">&lt;object&gt; — General Purpose Embedding</h2>

    <p style="margin-top:10px;">
    The <code>&lt;object&gt;</code> tag is a flexible element used to embed different types of external resources.
    </p>

    <p>
    It can display files and also provide fallback content if the browser cannot display the file.
    </p>

    <h3 style="margin-top:20px;">Uses</h3>

    <ul style="padding-left:20px; margin-top:10px;">

    <li>PDF files</li>

    <li>Images</li>

    <li>Videos</li>

    <li>Flash (legacy)</li>

    <li>External webpages (rare)</li>

    </ul>

    <h3 style="margin-top:20px;">Important Attributes</h3>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>

    <th style="padding:10px;">Attribute</th>

    <th style="padding:10px;">Purpose</th>

    </tr>

    <tr>

    <td style="padding:10px;">data</td>

    <td style="padding:10px;">Resource to display.</td>

    </tr>

    <tr>

    <td style="padding:10px;">type</td>

    <td style="padding:10px;">File MIME type.</td>

    </tr>

    <tr>

    <td style="padding:10px;">width</td>

    <td style="padding:10px;">Width.</td>

    </tr>

    <tr>

    <td style="padding:10px;">height</td>

    <td style="padding:10px;">Height.</td>

    </tr>

    </table>

    <h3 style="margin-top:20px;">Example</h3>

    <div class="code">
    <pre><code>
    &lt;object

    data="resume.pdf"

    type="application/pdf"

    width="600"

    height="400"

    &gt;

    PDF not supported.

    &lt;/object&gt;
    </code></pre>
    </div>

    <h2>Comparison</h2>

    <table
    border="1"
    style="
    border-collapse:collapse;
    width:100%;
    margin-top:10px;
    text-align:center;
    ">

    <tr>

    <th style="padding:10px;">Feature</th>

    <th style="padding:10px;">&lt;iframe&gt;</th>

    <th style="padding:10px;">&lt;embed&gt;</th>

    <th style="padding:10px;">&lt;object&gt;</th>

    </tr>

    <tr>

    <td style="padding:10px;">Embeds Webpages</td>

    <td style="padding:10px;">✅ Yes</td>

    <td style="padding:10px;">❌ No</td>

    <td style="padding:10px;">⚠ Rarely</td>

    </tr>

    <tr>

    <td style="padding:10px;">Embeds PDF</td>

    <td style="padding:10px;">✅ Yes</td>

    <td style="padding:10px;">✅ Yes</td>

    <td style="padding:10px;">✅ Yes</td>

    </tr>

    <tr>

    <td style="padding:10px;">Embeds Images</td>

    <td style="padding:10px;">❌</td>

    <td style="padding:10px;">✅</td>

    <td style="padding:10px;">✅</td>

    </tr>

    <tr>

    <td style="padding:10px;">Fallback Content</td>

    <td style="padding:10px;">❌</td>

    <td style="padding:10px;">❌</td>

    <td style="padding:10px;">✅</td>

    </tr>

    <tr>

    <td style="padding:10px;">Most Common Today</td>

    <td style="padding:10px;">⭐⭐⭐⭐⭐</td>

    <td style="padding:10px;">⭐⭐</td>

    <td style="padding:10px;">⭐⭐</td>

    </tr>

    </table>

    <h2 style="margin-bottom:10px; margin-top:20px;">Fetch API</h2>

<p style="margin-top:10px;">
The <strong>Fetch API</strong> is a browser-provided Web API used to communicate with a server over the internet.
</p>

<p>
It allows you to:
</p>

<ul style="padding-left:20px; margin-top:10px;">

<li>Get data from a server.</li>

<li>Send data to a server.</li>

<li>Update existing data.</li>

<li>Delete data from a server.</li>

</ul>

<p>
Fetch is the modern replacement for the older <code>XMLHttpRequest (XHR)</code> API.
</p> 

<h2>Why do we need Fetch API?</h2>

<p style="margin-top:10px;">
Most websites don't store all their data inside HTML.
</p>

<p>
Instead, they request data from a server whenever it's needed.
</p>

<p>
Examples:
</p>

<ul style="padding-left:20px;">

<li>Login</li>

<li>Displaying products</li>

<li>Loading user profiles</li>

<li>Weather information</li>

<li>News websites</li>

<li>Social media posts</li>

</ul>

<p>
All of these use HTTP requests, and the Fetch API is one way to make those requests.
</p> 

<h2>How Fetch Works</h2>

<div
style="
margin-top:10px;
padding:15px; 
border:1px solid #ccc;
font-family:monospace;
white-space:pre;
overflow-x:auto;
">

Browser

     │

fetch()

     │

     ▼

Server

     │

Processes Request

     │

Returns Response

     ▼

Browser receives the data

</div>
 

<h2 style="margin-top:20px;">Basic Syntax</h2>

<div class="code">
<pre><code>
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data);

});
</code></pre>
</div>

<h2>Understanding the Syntax</h2>

<table
border="1"
style="
width:100%;
border-collapse:collapse;
text-align:center;
margin-top:10px;
">

<tr>

<th style="padding:10px;">Part</th>

<th style="padding:10px;">Meaning</th>

</tr>

<tr>

<td style="padding:10px;">fetch()</td>

<td style="padding:10px;">Makes an HTTP request.</td>

</tr>

<tr>

<td style="padding:10px;">response</td>

<td style="padding:10px;">Server's reply.</td>

</tr>

<tr>

<td style="padding:10px;">response.json()</td>

<td style="padding:10px;">Converts JSON into a JavaScript object.</td>

</tr>

<tr>

<td style="padding:10px;">data</td>

<td style="padding:10px;">Actual data received from the server.</td>

</tr>

</table> 

<h2 style="margin-top:20px;">Example: GET Request</h2>

<p>
GET is used to retrieve data.
</p>

<div class="code">
<pre><code>
fetch(

"https://jsonplaceholder.typicode.com/users"

)

.then(response =>

response.json()

)

.then(data => {

console.log(data);

});
</code></pre>
</div>
 

<h2>HTTP Methods</h2>

<table
border="1"
style="
width:100%;
border-collapse:collapse;
text-align:center;
margin-top:10px;
">

<tr>

<th style="padding:10px;">Method</th>

<th style="padding:10px;">Purpose</th>

</tr>

<tr>

<td style="padding:10px;">GET</td>

<td style="padding:10px;">Retrieve data.</td>

</tr>

<tr>

<td style="padding:10px;">POST</td>

<td style="padding:10px;">Create new data.</td>

</tr>

<tr>

<td style="padding:10px;">PUT</td>

<td style="padding:10px;">Replace existing data.</td>

</tr>

<tr>

<td style="padding:10px;">PATCH</td>

<td style="padding:10px;">Update part of existing data.</td>

</tr>

<tr>

<td style="padding:10px;">DELETE</td>

<td style="padding:10px;">Delete data.</td>

</tr>

</table>
 

<h2 style="margin-top:20px;">POST Request</h2>

<p>
POST sends new data to the server.
</p>

<div class="code">
<pre><code>
fetch(

"https://jsonplaceholder.typicode.com/posts",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

title:"HTML",

author:"Devendra"

})

}

)

.then(response =>

response.json()

)

.then(data =>

console.log(data)

);
</code></pre>
</div> 

<h2>PUT Request</h2>

<p>
PUT replaces an existing resource.
</p>

<div class="code">
<pre><code>
fetch(

"https://jsonplaceholder.typicode.com/posts/1",

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

title:"Updated Title"

})

}

);
</code></pre>
</div>
 

<h2>PATCH Request</h2>

<p>
PATCH updates only specific fields.
</p>

<div class="code">
<pre><code>
fetch(

"https://jsonplaceholder.typicode.com/posts/1",

{

method:"PATCH",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

title:"New Title"

})

}

);
</code></pre>
</div> 

<h2>DELETE Request</h2>

<div class="code">
<pre><code>
fetch(

"https://jsonplaceholder.typicode.com/posts/1",

{

method:"DELETE"

}

);
</code></pre>
</div>
 

<h2>Headers</h2>

<p>
Headers provide additional information about the request.
</p>

Example:

<div class="code">
<pre><code>
headers:{

"Content-Type":"application/json",

Authorization:"Bearer TOKEN"

}
</code></pre>
</div>
 

<h2>Sending JSON Data</h2>

<p>
JavaScript objects must be converted into JSON before sending.
</p>

<div class="code">
<pre><code>
body:

JSON.stringify({

name:"Devendra",

age:25

})
</code></pre>
</div>
 

<h2>Receiving JSON</h2>

<div class="code">
<pre><code>
response.json()
</code></pre>
</div>

<p>
Converts JSON into a JavaScript object.
</p>
 

<h2>Error Handling</h2>

<div class="code">
<pre><code>
fetch(url)

.then(response=>{

if(!response.ok){

throw new Error(

"Request Failed"

);

}

return response.json();

})

.then(data=>{

console.log(data);

})

.catch(error=>{

console.log(error);

});
</code></pre>
</div>

 

    `,
  },
];

export default htmlData;
