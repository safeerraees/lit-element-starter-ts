/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

@customElement('apimatic-widget')
export class APIMaticWidget extends LitElement {
  static styles = css`
    .icon {
      cursor: pointer;
      display: inline-block !important;
    }
  `;

  @property({type: String})
  apiKey = '';
  @property({type: String})
  platforms = '';
  @property({type: Boolean})
  sdkDocs = false;

  render() {
    const platformsArray = this.platforms.split(',');
    const dotNet =
      platformsArray.find((el) => el.trim() === 'dotNet') !== undefined;
    const java =
      platformsArray.find((el) => el.trim() === 'java') !== undefined;
    const python =
      platformsArray.find((el) => el.trim() === 'python') !== undefined;
    const php = platformsArray.find((el) => el.trim() === 'php') !== undefined;
    const ruby =
      platformsArray.find((el) => el.trim() === 'ruby') !== undefined;
    const ts = platformsArray.find((el) => el.trim() === 'ts') !== undefined;

    return html`
      ${dotNet
        ? html`<div
            id="cs_net_standard_lib"
            @click=${this._onClick}
            class=${classMap({icon: true})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25.2"
            >
              <defs>
                <style>
                  .aDotNet {
                    fill: #00a4ef;
                  }
                </style>
              </defs>
              <path
                class="aDotNet"
                d="M0,2.293l6.6-.9,0,6.364L.006,7.8Zm6.595,6.2.005,6.37L.005,13.955V8.449Zm.8-7.215L16.142,0V7.677l-8.748.069Zm8.75,7.275,0,7.643L7.394,14.96,7.382,8.537Z"
              />
            </svg>
          </div>`
        : ''}
      ${java
        ? html`<div
            id="java_eclipse_jre_lib"
            @click=${this._onClick}
            class=${classMap({icon: true})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 22 25"
            >
              <defs>
                <style>
                  .aJava {
                    fill: #e4463f;
                  }
                </style>
              </defs>
              <path
                class="aJava"
                d="M15.96,15.706a.262.262,0,0,0,.06-.076c3.01-1.493,1.618-2.927.647-2.734a2.368,2.368,0,0,0-.344.089.542.542,0,0,1,.257-.19C18.5,12.15,19.979,14.7,15.96,15.706Zm-1.754-4.539c.9,1.213-1.063,2.181-1.063,2.181a1.092,1.092,0,0,0,.2-1.616c-2.623-2.885,2.869-4.194,2.869-4.2C12.716,9.474,13.362,10.035,14.206,11.167ZM12.625,8.448c-2.6,1.964-.594,3.083,0,4.363-1.52-1.31-2.636-2.463-1.888-3.536,1.1-1.575,4.142-2.339,3.47-4.868C14.206,4.408,15.872,6,12.625,8.448Zm-1.835,4.391s-2.915.662-1.032.9a22.9,22.9,0,0,0,3.857-.04c1.207-.1,2.418-.3,2.418-.3a5.272,5.272,0,0,0-.733.375c-2.961.743-8.68.4-7.034-.363A5.739,5.739,0,0,1,10.789,12.839Zm.142,3.87a9.6,9.6,0,0,0,3.321-.134,5.969,5.969,0,0,0,.884.411c-3.141,1.285-7.108-.075-4.642-.733C10.495,16.253,9.882,16.593,10.931,16.708Zm-.457-1.542a13.574,13.574,0,0,0,4.286-.2,1.914,1.914,0,0,0,.66.384c-3.8,1.06-8.026.084-5.309-.778C10.111,14.576,9.424,15.062,10.474,15.166ZM9.255,17.451a2.3,2.3,0,0,0-.554.059c-.337.07-1.411.4-.838.637,1.592.661,7.324.5,9.137-.021.953-.276.5-.633.5-.633,1.661.716-3.609,2.153-10.011,1.162C5.141,18.291,8.618,17.023,9.255,17.451Zm6.873,1.709c2.186-.392,2.388-.887,2.388-.887-.105,1.305-4.542,1.58-7.43,1.4a5.049,5.049,0,0,1-2.268-.409A24.846,24.846,0,0,0,16.128,19.161Z"
                transform="translate(-6.684 -4.408)"
              />
            </svg>
          </div>`
        : ''}
      ${php
        ? html`<div
            id="php_generic_lib_v2"
            @click=${this._onClick}
            class=${classMap({icon: true})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 16"
            >
              <defs>
                <style>
                  .aPHP {
                    fill: #8f9ed7;
                  }
                </style>
              </defs>
              <path
                class="aPHP"
                d="M12.679,9.989c-4.582,0-8.3,1.861-8.3,4.157S8.1,18.3,12.679,18.3s8.3-1.861,8.3-4.157S17.261,9.989,12.679,9.989ZM10.52,14.955a1.636,1.636,0,0,1-.66.337,3.306,3.306,0,0,1-.925.062H8.086L7.851,16.7H6.859l.885-4.565H9.65a1.6,1.6,0,0,1,1.255.461,1.4,1.4,0,0,1,.237,1.253,1.974,1.974,0,0,1-.623,1.109Zm2.894.4.391-1.936a.57.57,0,0,0-.049-.477.686.686,0,0,0-.494-.138h-.786l-.507,2.551h-.984l.885-4.43h.984l-.236,1.208H13.5a1.715,1.715,0,0,1,1.142.3.847.847,0,0,1,.188.876l-.411,2.046Zm5.467-1.5a1.946,1.946,0,0,1-.623,1.1,1.629,1.629,0,0,1-.66.337,3.308,3.308,0,0,1-.925.062h-.85L15.589,16.7H14.6l.885-4.565h1.907a1.6,1.6,0,0,1,1.255.461A1.419,1.419,0,0,1,18.881,13.853ZM17.013,12.8h-.679l-.37,1.879h.6a1.487,1.487,0,0,0,.893-.188,1.136,1.136,0,0,0,.4-.727.866.866,0,0,0-.09-.733,1.012,1.012,0,0,0-.754-.231Zm-7.738,0H8.6l-.37,1.879h.6a1.487,1.487,0,0,0,.893-.188,1.132,1.132,0,0,0,.4-.727.866.866,0,0,0-.09-.733,1.012,1.012,0,0,0-.753-.231Z"
                transform="translate(-4.382 -9.989)"
              />
            </svg>
          </div>`
        : ''}
      ${python
        ? html`<div
            id="python_generic_lib"
            @click=${this._onClick}
            class=${classMap({icon: true})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25"
            >
              <defs>
                <style>
                  .aPython {
                    fill: #3b8fc6;
                  }
                </style>
              </defs>
              <path
                class="aPython"
                d="M12.644,14.291H16.42A1.9,1.9,0,0,0,18.3,12.368V8.809a2.092,2.092,0,0,0-1.885-1.943,11.977,11.977,0,0,0-1.967-.153,10.747,10.747,0,0,0-1.788.153c-1.6.279-1.871.864-1.871,1.943v1.385h3.755v.512H9.335a2.355,2.355,0,0,0-2.362,1.9,6.842,6.842,0,0,0,0,3.78c.269,1.107.91,1.877,2.009,1.877H10.27V16.589a2.379,2.379,0,0,1,2.374-2.3Zm-.237-5.007a.712.712,0,1,1,.709-.71A.71.71,0,0,1,12.406,9.284ZM22.091,12.6c-.272-1.081-.79-1.9-1.891-1.9H18.817v1.661a2.387,2.387,0,0,1-2.4,2.307H12.644a1.943,1.943,0,0,0-1.855,1.962V20.2c0,1.013.874,1.609,1.873,1.9a6.341,6.341,0,0,0,3.762,0c.952-.272,1.876-.821,1.876-1.9V18.771H14.543v-.512H20.2c1.1,0,1.509-.739,1.891-1.877a6.29,6.29,0,0,0,0-3.78Zm-5.433,7.119a.712.712,0,1,1-.709.71.71.71,0,0,1,.709-.71Z"
                transform="translate(-6.707 -6.714)"
              />
            </svg>
          </div>`
        : ''}
      ${ruby
        ? html`<div
            id="ruby_generic_lib"
            @click=${this._onClick}
            class=${classMap({icon: true})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25"
            >
              <defs>
                <style>
                  .aRuby {
                    fill: #f6213a;
                  }
                </style>
              </defs>
              <path
                class="aRuby"
                d="M10.664,20.19l9.8,1.32-3.315-5.444L10.664,20.19ZM21.393,10l-.868,1.287q-1.49,2.211-2.978,4.422c-.055.082-.127.147-.049.273q1.439,2.343,2.864,4.694a6.289,6.289,0,0,0,.5.731q.29-5.7.578-11.4L21.393,10ZM8.305,14.868a.237.237,0,0,0,.209.041c.92-.447,1.845-.882,2.745-1.364a4.315,4.315,0,0,0,.772-.668q1.255-1.135,2.508-2.274a.6.6,0,0,0,.142-.151c.3-.578.595-1.16.9-1.758-.363-.135-.709-.267-1.058-.387a.257.257,0,0,0-.173.044c-.808.445-1.633.867-2.416,1.353a7.994,7.994,0,0,0-1.057.913c-.559.5-1.118,1.008-1.669,1.52a2.812,2.812,0,0,0-.393.455c-.376.541-.742,1.089-1.124,1.654.214.218.408.426.615.62Zm3.361-.74-1.382,5.76,6.494-4.128-5.112-1.632Zm9.165-4.111-5.52.91,1.873,4.494,3.647-5.4Zm-9.088,3.721,5.01,1.6L14.9,10.89l-3.157,2.847ZM8.375,15.979c-.595,1.4-1.169,2.757-1.753,4.135l3.34-.1ZM10,19.058l.041-.009c.4-1.645.808-3.278,1.217-4.987L8.58,15.436c.457,1.171.944,2.407,1.421,3.623ZM20.158,9.75q-.8-.209-1.6-.417c-.767-.2-1.535-.4-2.3-.6-.1-.025-.165-.041-.221.072-.271.548-.55,1.091-.826,1.636a.4.4,0,0,0-.013.081l4.96-.741V9.75ZM17.064,8.5,21.41,9.691l-.718-2.019-3.622.793Zm-6.695,12a12.827,12.827,0,0,0-1.636,0c-.449.008-.9.025-1.346.038a.18.18,0,0,0-.139.06l11.124,1.015.007-.049-3.566-.48c-1.481-.2-2.96-.419-4.445-.588ZM6.694,18.852q.717-1.641,1.433-3.281a.2.2,0,0,0-.049-.272c-.2-.189-.387-.392-.606-.617L6.6,18.943l.032.015A.7.7,0,0,0,6.694,18.852ZM16.112,8.215c.805-.2,1.623-.365,2.436-.544.052-.011.1-.028.156-.043L18.7,7.589,15.2,8.052a1.32,1.32,0,0,0,.908.163Z"
                transform="translate(-6.597 -7.589)"
              />
            </svg>
          </div>`
        : ''}
      ${ts
        ? html`<div
            id="ts_generic_lib"
            @click=${this._onClick}
            class=${classMap({icon: true})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="50"
              viewBox="0 0 256 282"
              preserveAspectRatio="xMinYMin meet"
            >
              <g fill="#8CC84B">
                <path
                  d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"
                />
                <path
                  d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"
                />
              </g>
            </svg>
          </div>`
        : ''}
      ${this.sdkDocs
        ? html`<div
            id="cs_net_standard_lib"
            @click=${this._onClick}
            class=${classMap({icon: true})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25.2"
            >
              <defs>
                <style>
                  .aDotNet {
                    fill: #00a4ef;
                  }
                </style>
              </defs>
              <path
                class="aDotNet"
                d="M0,2.293l6.6-.9,0,6.364L.006,7.8Zm6.595,6.2.005,6.37L.005,13.955V8.449Zm.8-7.215L16.142,0V7.677l-8.748.069Zm8.75,7.275,0,7.643L7.394,14.96,7.382,8.537Z"
              />
            </svg>
          </div>`
        : ''}
    `;
  }

  private async _onClick(event: Event) {
    try {
      const template = (event.currentTarget as Element).id;
      if (!template) {
        return;
      }
      const url = `https://www.apimatic.io/api/api-entities/${this.apiKey}/portal-artifacts/sdks/generated-file?template=${template}`;

      const response = await fetch(url);

      const contentHeader = response.headers.get('content-disposition');
      const name =
        contentHeader === null ? template : contentHeader.split('=')[1];

      this.saveData(await response.blob(), name);
    } catch (e) {
      console.log('error', e);
    }
  }

  private saveData = (function () {
    const a = document.createElement('a');
    document.body.appendChild(a) as Element;
    // a.style = "display: none";
    return function (blob: Blob, fileName: string) {
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    };
  })();
}

declare global {
  interface HTMLElementTagNameMap {
    'apimatic-widget': APIMaticWidget;
  }
}
