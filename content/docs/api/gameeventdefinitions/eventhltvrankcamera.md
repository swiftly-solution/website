---
title: EventHltvRankCamera
---

# Interface EventHltvRankCamera

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvRankCamera.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "hltv_rank_camera"
a camera ranking

```csharp
public interface EventHltvRankCamera : IGameEvent<EventHltvRankCamera>
```

#### Implements

- [IGameEvent<EventHltvRankCamera>](/docs/api/gameevents/igameeventt)

## Properties

### Index

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvRankCamera.cs#L24)

fixed camera index
<br />
type: byte

```csharp
byte Index { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Rank

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvRankCamera.cs#L31)

ranking, how interesting is this camera view
<br />
type: float

```csharp
float Rank { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Target

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventHltvRankCamera.cs#L38)

best/closest target entity
<br />
type: player_controller

```csharp
int Target { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

