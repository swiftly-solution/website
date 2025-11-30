---
title: EventDemoSkip
---

# Interface EventDemoSkip

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventDemoSkip.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "demo_skip"

```csharp
public interface EventDemoSkip : IGameEvent<EventDemoSkip>
```

#### Implements

- [IGameEvent<EventDemoSkip>](/docs/api/gameevents/igameeventt)

## Properties

### PlaybackTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventDemoSkip.cs#L23)

current playback tick
<br />
type: long

```csharp
int PlaybackTick { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SkiptoTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventDemoSkip.cs#L30)

tick we're going to
<br />
type: long

```csharp
int SkiptoTick { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

