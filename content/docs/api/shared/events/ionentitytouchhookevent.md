---
title: IOnEntityTouchHookEvent
---

```csharp
public interface IOnEntityTouchHookEvent
```

## Properties

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L25)

```csharp
CBaseEntity Entity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)

### OtherEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L30)

```csharp
CBaseEntity OtherEntity { get; }
```

#### Property Value

- [CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)

### TouchType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Events/EventParams/IOnEntityTouchHookEvent.cs#L35)

```csharp
EntityTouchType TouchType { get; }
```

#### Property Value

- [EntityTouchType](/docs/api/shared/schemadefinitions/entitytouchtype)

