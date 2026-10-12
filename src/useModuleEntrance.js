import { useEffect } from 'react';
import { observeModuleEntrance } from './moduleEntrance';
import './moduleEntrance.css';
const homeModules = '.hero-inner, .entry, .section-heading, .case-panel, .scenario-panel:not(.scenario-feature-marquee), .scenario-feature-marquee > h3, .scenario-feature-marquee .scenario-marquee-window, .course-card, .cert-editorial-heading, .certification-card, .footer-inner';
export function useModuleEntrance(selector = homeModules) {
  useEffect(() => observeModuleEntrance(selector), [selector]);
}
