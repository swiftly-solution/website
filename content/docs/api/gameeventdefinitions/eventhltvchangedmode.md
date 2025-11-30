---
title: EventHltvChangedMode
---

# Interface EventHltvChangedMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChangedMode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "hltv_changed_mode"

```csharp
public interface EventHltvChangedMode : IGameEvent<EventHltvChangedMode>
```

#### Implements

- [IGameEvent<EventHltvChangedMode>](/docs/api/gameevents/igameeventt)

## Properties

### NewMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChangedMode.cs#L26)

type: long

```csharp
int NewMode { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ObsTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChangedMode.cs#L31)

type: long

```csharp
int ObsTarget { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OldMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvChangedMode.cs#L21)

type: long

```csharp
int OldMode { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

