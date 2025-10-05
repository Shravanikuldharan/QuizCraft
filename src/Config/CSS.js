const CSS = {
  css: {
    easy: [
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets",
      },
      {
        question: "Which property is used to change the text color in CSS?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: "color",
      },
      {
        question: "Which symbol is used for class selectors in CSS?",
        options: ["#", ".", "*", "&"],
        answer: ".",
      },
      {
        question: "Which property sets the background color?",
        options: ["background-color", "bgcolor", "color", "background"],
        answer: "background-color",
      },
      {
        question: "How do you select all <p> elements in CSS?",
        options: ["p {}", "#p {}", ".p {}", "*p {}"],
        answer: "p {}",
      },
      {
        question: "Which property is used to set the font size?",
        options: ["font-size", "text-size", "size", "font"],
        answer: "font-size",
      },
      {
        question: "Which value makes an element invisible but still takes space?",
        options: ["hidden", "none", "invisible", "visibility: hidden"],
        answer: "visibility: hidden",
      },
      {
        question: "Which property is used to add space inside an element?",
        options: ["margin", "padding", "border", "spacing"],
        answer: "padding",
      },
      {
        question: "Which property is used to add space outside an element?",
        options: ["margin", "padding", "border", "spacing"],
        answer: "margin",
      },
      {
        question: "Which property is used to set the border color?",
        options: ["border-color", "color", "border-style", "border-width"],
        answer: "border-color",
      },
      {
        question: "Which property is used to make text bold?",
        options: ["font-weight", "bold", "font-style", "text-bold"],
        answer: "font-weight",
      },
      {
        question: "Which property is used to align text to the center?",
        options: ["text-align", "align", "center", "font-align"],
        answer: "text-align",
      },
      {
        question: "Which selector targets all elements?",
        options: ["*", "all", "#", "."],
        answer: "*",
      },
      {
        question: "Which property is used to set the width of an element?",
        options: ["width", "size", "element-width", "max-width"],
        answer: "width",
      },
      {
        question: "Which property is used to set the height of an element?",
        options: ["height", "size", "element-height", "max-height"],
        answer: "height",
      },
    ],
    medium: [
      {
        question: "Which property is used to create rounded corners?",
        options: ["border-radius", "corner-radius", "round-corner", "border-style"],
        answer: "border-radius",
      },
      {
        question: "Which property is used to add shadow to text?",
        options: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
        answer: "text-shadow",
      },
      {
        question: "Which property is used to add shadow to a box?",
        options: ["box-shadow", "text-shadow", "shadow", "border-shadow"],
        answer: "box-shadow",
      },
      {
        question: "Which property is used to change the cursor on hover?",
        options: ["cursor", "pointer", "hover-cursor", "mouse-cursor"],
        answer: "cursor",
      },
      {
        question: "Which property is used to set the maximum width?",
        options: ["max-width", "width", "min-width", "size"],
        answer: "max-width",
      },
      {
        question: "Which property is used to set the minimum height?",
        options: ["min-height", "height", "max-height", "size"],
        answer: "min-height",
      },
      {
        question: "Which property is used to float an element to the right?",
        options: ["float: right", "align: right", "position: right", "right: float"],
        answer: "float: right",
      },
      {
        question: "Which property is used to position an element absolutely?",
        options: ["position: absolute", "absolute: position", "pos: abs", "position: fixed"],
        answer: "position: absolute",
      },
      {
        question: "Which property is used to hide overflow content?",
        options: ["overflow: hidden", "hide: overflow", "content-hide", "overflow: none"],
        answer: "overflow: hidden",
      },
      {
        question: "Which property is used to set the z-index?",
        options: ["z-index", "index", "layer", "zlayer"],
        answer: "z-index",
      },
      {
        question: "Which property is used to set the opacity?",
        options: ["opacity", "transparent", "alpha", "visibility"],
        answer: "opacity",
      },
      {
        question: "Which property is used to display an element as a flex container?",
        options: ["display: flex", "flex: display", "container: flex", "flexbox"],
        answer: "display: flex",
      },
      {
        question: "Which property is used to align items in a flex container?",
        options: ["align-items", "flex-align", "item-align", "align"],
        answer: "align-items",
      },
      {
        question: "Which property is used to justify content in a flex container?",
        options: ["justify-content", "content-justify", "flex-justify", "justify"],
        answer: "justify-content",
      },
      {
        question: "Which property is used to set the grid template columns?",
        options: ["grid-template-columns", "template-columns", "columns-template", "grid-columns"],
        answer: "grid-template-columns",
      },
    ],
    hard: [
      {
        question: "Which property is used to create a CSS animation?",
        options: ["animation", "animate", "transition", "keyframes"],
        answer: "animation",
      },
      {
        question: "Which property is used to set the timing function of a transition?",
        options: ["transition-timing-function", "timing-function", "animation-timing", "transition-function"],
        answer: "transition-timing-function",
      },
      {
        question: "Which property is used to delay the start of an animation?",
        options: ["animation-delay", "delay", "transition-delay", "start-delay"],
        answer: "animation-delay",
      },
      {
        question: "Which property is used to repeat an animation?",
        options: ["animation-iteration-count", "repeat", "animation-repeat", "iteration-count"],
        answer: "animation-iteration-count",
      },
      {
        question: "Which property is used to set the direction of an animation?",
        options: ["animation-direction", "direction", "animation-way", "transition-direction"],
        answer: "animation-direction",
      },
      {
        question: "Which property is used to set the fill mode of an animation?",
        options: ["animation-fill-mode", "fill-mode", "animation-mode", "transition-fill-mode"],
        answer: "animation-fill-mode",
      },
      {
        question: "Which property is used to set the play state of an animation?",
        options: ["animation-play-state", "play-state", "animation-state", "transition-play-state"],
        answer: "animation-play-state",
      },
      {
        question: "Which property is used to set the transition property?",
        options: ["transition-property", "property", "transition", "property-transition"],
        answer: "transition-property",
      },
      {
        question: "Which property is used to set the transition duration?",
        options: ["transition-duration", "duration", "animation-duration", "transition-time"],
        answer: "transition-duration",
      },
      {
        question: "Which property is used to set the transition delay?",
        options: ["transition-delay", "delay", "animation-delay", "transition-wait"],
        answer: "transition-delay",
      },
      {
        question: "Which property is used to set the transition timing function?",
        options: ["transition-timing-function", "timing-function", "animation-timing", "transition-function"],
        answer: "transition-timing-function",
      },
      {
        question: "Which property is used to set the grid template rows?",
        options: ["grid-template-rows", "template-rows", "rows-template", "grid-rows"],
        answer: "grid-template-rows",
      },
      {
        question: "Which property is used to set the grid gap?",
        options: ["grid-gap", "gap", "grid-spacing", "spacing"],
        answer: "grid-gap",
      },
      {
        question: "Which property is used to set the grid area?",
        options: ["grid-area", "area", "grid-zone", "zone"],
        answer: "grid-area",
      },
      {
        question: "Which property is used to set the grid column start?",
        options: ["grid-column-start", "column-start", "grid-start", "start-column"],
        answer: "grid-column-start",
      },
    ],
  },
};

export default CSS;
