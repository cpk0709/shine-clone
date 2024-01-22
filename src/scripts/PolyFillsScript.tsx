/* eslint-disable max-len */
// https://github.com/nuxodin/ie11CustomProperties
export const ieCustomPropertyFix = (
  <script
    key="ieCustomPropertyFix"
    dangerouslySetInnerHTML={{
      __html:
        'window.MSInputMethodContext && document.documentMode && document.write(\'\\x3Cscript src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js">\\x3C/script>\');',
    }}
  ></script>
);

// https://scottjehl.github.io/picturefill/
export const iePicturefill = (
  <>
    <script
      key="iePicturefillShiv"
      dangerouslySetInnerHTML={{
        __html: `// Picture element HTML5 shiv
    window.MSInputMethodContext && document.documentMode && document.createElement("picture");`,
      }}
    ></script>
    <script
      key="iePicturefill"
      dangerouslySetInnerHTML={{
        __html:
          'window.MSInputMethodContext && document.documentMode && document.write(\'\\x3Cscript async src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.min.js">\\x3C/script>\');',
      }}
    ></script>
  </>
);
