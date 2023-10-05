import { css } from "lit-element";

export const uiForm = css`
  :host {
  }
  :host > * {
    font-weight: bold;
    padding: 10px;
    border: 2px solid currentColor;
    box-sizing: border-box;

    line-height: 24px;

    display: flex;
    align-content: center;
    gap: 10px;
  }
  :host button {
    cursor: pointer;
  }
  :host > *:disabled {
    cursor: not-allowed;
  }
  :host > *:focus,
  :host > *:hover {
    filter: brightness(110%) saturate(140%);
  }
  :host > *:focus-visible {
    outline-offset: 2px;
    outline: 2px solid #f00;
  }
  :host *.round {
    border-radius: 40px;
  }
`;