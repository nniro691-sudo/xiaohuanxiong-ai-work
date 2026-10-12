import css from './moduleEntrance.css?raw';
import { observeModuleEntrance } from './moduleEntrance';
const modules = {
  courses: '.player, .now-playing, .side-catalog, .teacher-card, .course-image-cards > a, .related .section-heading, .related .course-card',
  certification: '.section-title, .cert-banner, .price-card, .cert-brief, .value-fold, .cert-flow-content, .cert-courses'
};
export function withDetailEntrance(html, page) {
  // Run after the document and mobile tab relocation scripts have initialized.
  const script = '(' + observeModuleEntrance.toString() + ')(' + JSON.stringify(modules[page]) + ');';
  return html.replace('</head>', '<style>' + css + '</style></head>')
    .replace('</body>', '<script>' + script + '</script></body>');
}
