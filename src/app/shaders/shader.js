export const vertex = /*glsl*/ `
varying vec2 vUv;
// uniform vec2 uDelta;
// uniform float uAmplitude;
float PI = 3.141592653589793238;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragment = /*glsl*/ `
varying vec2 vUv;
void main() {
    vec4 bgColor = vec4(0.121, 0.121, 0.125, 1.0);
    gl_FragColor = bgColor;
    // gl_FragColor = vec4(1., 0., 0., 1.);
}
`;
