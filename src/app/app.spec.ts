import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render author name in header', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1.sitename')?.textContent).toContain('Alan Daniel Canaviri Conde');
  });

  it('should filter portfolio projects by category', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.setFilter('web');
    expect(app.filteredProjects.length).toBe(2);
    app.setFilter('mobile-iot');
    expect(app.filteredProjects.length).toBe(3);
    app.setFilter('redes');
    expect(app.filteredProjects.length).toBe(1);
    app.setFilter('all');
    expect(app.filteredProjects.length).toBe(6);
  });
});
