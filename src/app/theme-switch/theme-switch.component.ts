import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent {
  private static readonly DARK_THEME_BLUE_CLASS = 'dark-blue-theme';
  private static readonly DARK_THEME_PURPLE_CLASS = 'dark-purple-theme';
  private static readonly LIGHT_DEFAULT_CLASS = 'light-default-theme';
  private static readonly LIGHT_DEEP_PURPLE_CLASS = 'light-deep-purple-theme';
  private static readonly themes: string[] = [
    ThemeSwitchComponent.LIGHT_DEFAULT_CLASS,
    ThemeSwitchComponent.DARK_THEME_BLUE_CLASS,
    ThemeSwitchComponent.DARK_THEME_PURPLE_CLASS,
    ThemeSwitchComponent.LIGHT_DEEP_PURPLE_CLASS,
  ];
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'dark';

  public theme: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = this.document.documentElement.classList.contains(
      ThemeSwitchComponent.DARK_THEME_BLUE_CLASS
    )
      ? ThemeSwitchComponent.DARK_THEME_DARK
      : ThemeSwitchComponent.DARK_THEME_LIGHT;
  }

  public selectLightDefaultTheme(): void {
    this.removeThemes();
    this.document.documentElement.classList.add(
      ThemeSwitchComponent.LIGHT_DEFAULT_CLASS
    );
    this.theme = ThemeSwitchComponent.LIGHT_DEFAULT_CLASS;
  }

  public selectLightDeepPurpleTheme(): void {
    this.removeThemes();
    this.document.documentElement.classList.add(
      ThemeSwitchComponent.LIGHT_DEEP_PURPLE_CLASS
    );
    this.theme = ThemeSwitchComponent.LIGHT_DEEP_PURPLE_CLASS;
  }

  public selectDarkBlueTheme(): void {
    this.removeThemes();
    this.document.documentElement.classList.add(
      ThemeSwitchComponent.DARK_THEME_BLUE_CLASS
    );
    this.theme = ThemeSwitchComponent.DARK_THEME_BLUE_CLASS;
  }

  public selectDarkPurpleTheme(): void {
    this.removeThemes();
    this.document.documentElement.classList.add(
      ThemeSwitchComponent.DARK_THEME_PURPLE_CLASS
    );
    this.theme = ThemeSwitchComponent.DARK_THEME_PURPLE_CLASS;
  }

  public removeThemes(): void {
    for (let item of ThemeSwitchComponent.themes) {
      this.document.documentElement.classList.remove(item);
    }
  }
}
