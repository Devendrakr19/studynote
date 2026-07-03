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
    content: "<h1>HTML Paragraph</h1><p>Paragraph tag is used for text.</p>",
  },
];

export default htmlData;
