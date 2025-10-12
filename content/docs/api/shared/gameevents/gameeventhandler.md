---
title: GameEventHandler
---

```csharp
[AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
public class GameEventHandler : Attribute
```

#### Inheritance

#### Inherited Members

## Constructors

### GameEventHandler(HookMode)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/GameEventHandlerAttribute.cs#L10)

```csharp
public GameEventHandler(HookMode hookMode)
```

#### Parameters

- **hookMode**: [HookMode](/docs/api/shared/misc/hookmode)

## Properties

### HookMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/GameEvents/GameEventHandlerAttribute.cs#L8)

```csharp
public HookMode HookMode { get; set; }
```

#### Property Value

- [HookMode](/docs/api/shared/misc/hookmode)

