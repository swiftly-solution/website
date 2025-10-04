---
title: IOnEntityTakeDamageEvent
---

```csharp
public interface IOnEntityTakeDamageEvent
```

## Properties

**Entity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTakeDamageEvent.cs#L16)

```csharp
CEntityInstance Entity { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)

**Info** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTakeDamageEvent.cs#L21)

```csharp
ref CTakeDamageInfo Info { get; }
```

#### Property Value

- [CTakeDamageInfo](/docs/api/shared/natives/ctakedamageinfo)

**Result** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTakeDamageEvent.cs#L26)

```csharp
HookResult Result { get; set; }
```

#### Property Value

- [HookResult](/docs/api/shared/misc/hookresult)

