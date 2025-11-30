---
title: Menus
---

# Namespace SwiftlyS2.Shared.Menus

- [MenuConfiguration](/docs/api/menus/menuconfiguration) - Defines configuration settings that control menu behavior.
- [MenuEventArgs](/docs/api/menus/menueventargs) - Provides event data for menu-related events.
- [MenuManagerEventArgs](/docs/api/menus/menumanagereventargs) - Provides event data for menu manager events.
- [MenuOptionClickEventArgs](/docs/api/menus/menuoptionclickeventargs) - Provides event data for menu option click events.
- [MenuOptionEventArgs](/docs/api/menus/menuoptioneventargs) - Provides event data for menu option events.
- [MenuOptionFormattingEventArgs](/docs/api/menus/menuoptionformattingeventargs) - Provides event data for menu option HTML formatting events.
- [MenuOptionValidatingEventArgs](/docs/api/menus/menuoptionvalidatingeventargs) - Provides event data for menu option validation events.
- [MenuOptionValueChangedEventArgs<T>](/docs/api/menus/menuoptionvaluechangedeventargst) - Event arguments for when a menu option's value changes.

- [MenuKeybindOverrides](/docs/api/menus/menukeybindoverrides) - Custom key bindings for menu actions.
Each property can be set to override the default bindings, or left null to use defaults.
- [MenuManagerConfiguration](/docs/api/menus/menumanagerconfiguration) - Configuration settings that control menu behavior, appearance, and player interaction.

- [IMenuAPI](/docs/api/menus/imenuapi) - Represents an interactive menu that can be displayed to players.
- [IMenuBuilderAPI](/docs/api/menus/imenubuilderapi) - Provides a fluent builder interface for creating and configuring menus.
All methods support chaining for convenient menu construction.
- [IMenuDesignAPI](/docs/api/menus/imenudesignapi)
- [IMenuManagerAPI](/docs/api/menus/imenumanagerapi) - Central manager for creating and controlling all player menus.
- [IMenuOption](/docs/api/menus/imenuoption) - Represents a menu option that can be displayed and interacted with by players.

- [KeyBind](/docs/api/menus/keybind)
- [MenuOptionScrollStyle](/docs/api/menus/menuoptionscrollstyle) - Defines how the menu scrolls when navigating between options.
- [MenuOptionTextSize](/docs/api/menus/menuoptiontextsize) - Defines the available text size options for menu items.
- [MenuOptionTextStyle](/docs/api/menus/menuoptiontextstyle) - Defines the horizontal text overflow behavior for menu options.

- [AsyncEventHandler<TEventArgs>](/docs/api/menus/asynceventhandlert) - Represents an asynchronous event handler that returns a ValueTask.

