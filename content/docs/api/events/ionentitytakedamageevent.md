---
title: IOnEntityTakeDamageEvent
---

# Interface IOnEntityTakeDamageEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTakeDamageEvent.cs#L11)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Called when an entity takes damage.

```csharp
public interface IOnEntityTakeDamageEvent
```

## Properties

### DamageResult

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTakeDamageEvent.cs#L26)

The damage result.

```csharp
ref CTakeDamageResult DamageResult { get; }
```

#### Property Value

- [CTakeDamageResult](/docs/api/natives/ctakedamageresult)

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTakeDamageEvent.cs#L16)

The entity that took damage.

```csharp
CEntityInstance Entity { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)

### Info

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTakeDamageEvent.cs#L21)

The damage info.

```csharp
ref CTakeDamageInfo Info { get; }
```

#### Property Value

- [CTakeDamageInfo](/docs/api/natives/ctakedamageinfo)

### Result

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTakeDamageEvent.cs#L31)

If return <xref href="SwiftlyS2.Shared.Misc.HookResult.Stop" data-throw-if-not-resolved="false"></xref>, the damage will not be applied.

```csharp
HookResult Result { get; set; }
```

#### Property Value

- [HookResult](/docs/api/misc/hookresult)

