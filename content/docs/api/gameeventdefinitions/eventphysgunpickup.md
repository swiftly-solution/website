---
title: EventPhysgunPickup
---

# Interface EventPhysgunPickup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPhysgunPickup.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "physgun_pickup"

```csharp
public interface EventPhysgunPickup : IGameEvent<EventPhysgunPickup>
```

#### Implements

- [IGameEvent<EventPhysgunPickup>](/docs/api/gameevents/igameeventt)

## Properties

### Target

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPhysgunPickup.cs#L23)

entity picked up
<br />
type: ehandle

```csharp
nint Target { get; set; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

