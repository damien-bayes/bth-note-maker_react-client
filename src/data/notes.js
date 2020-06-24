/**
 * Notes (Seeds)
 *
 * File: /src/configs/dexie.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 * 
 * @see: https://www.lipsum.com/feed/html
 */

// eslint-disable-next-line
"use strict";

export default [
  {
    id: 1,
    name: 'Duis mi libero',
    content: `
# Duis mi libero
Duis mi libero, vehicula vel erat quis, consectetur bibendum ex. Nullam enim lorem, vehicula in posuere at, elementum ut leo. Pellentesque in est pharetra, egestas velit nec, feugiat augue. Aenean ac eros non neque fermentum sagittis nec eu purus. Donec ut diam ipsum. Quisque interdum imperdiet orci. Nam in volutpat nisl, eu auctor metus.
- Maecenas ultricies vestibulum condimentum;
- Quisque semper;
- Aliquam tincidunt, ex eget porttitor fermentum;
`,
    created_at: +new Date(),
    updated_at: +new Date()
  },
  {
    id: 2,
    name: 'Sed ipsum tortor',
    content: `
# Sed ipsum tortor
Ultricies non hendrerit ut, tincidunt quis sapien. Suspendisse odio est, viverra nec tempus lacinia.  
Praesent varius ante vitae ipsum euismod, at ornare velit feugiat. Nulla nec felis pellentesque, feugiat ipsum id, ornare tellus. Cras venenatis hendrerit orci ac imperdiet. Suspendisse potenti. Cras semper auctor pellentesque.  
Nulla nec est luctus, pellentesque eros at, pellentesque mi. Nam interdum dui, ac commodo neque ultrices ut. Donec nunc risus, elementum nec sapien pretium, blandit aliquet ligula. Quisque posuere convallis erat, at dapibus justo ornare sit amet. Curabitur dignissim quam ligula, ac vulputate purus congue non. Sed lorem est, tempor eget convallis a, volutpat vitae ex.
    `,
    created_at: +new Date(),
    updated_at: +new Date()
  },
  {
    id: 3,
    name: 'Nulla maximus dictum dui et ultricies',
    content: `
# Nulla maximus dictum dui et ultricies
Sed suscipit eros et ex ultricies, quis imperdiet felis lacinia.
## Pellentesque in sem id enim ultrices rhoncus
Praesent at condimentum lorem. Phasellus elementum est ut leo consectetur pretium. Maecenas quis nulla vel ipsum euismod faucibus sed et lacus. Aliquam quis enim in nibh scelerisque egestas eget ut dolor. Donec luctus mi enim, a scelerisque erat consequat a. Sed sollicitudin nulla purus, ac aliquet felis lobortis sed. Fusce interdum, arcu vel accumsan rutrum, nisi magna rhoncus leo, iaculis venenatis eros nibh nec elit. Curabitur at fermentum odio. Ut aliquam felis sit amet dolor sagittis bibendum. Morbi finibus est purus. Nam cursus lectus eu mollis volutpat.
    `,
    created_at: +new Date(),
    updated_at: +new Date()
  }
]