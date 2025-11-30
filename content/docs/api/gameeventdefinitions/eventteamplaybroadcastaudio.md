---
title: EventTeamplayBroadcastAudio
---

# Interface EventTeamplayBroadcastAudio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventTeamplayBroadcastAudio.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "teamplay_broadcast_audio"
emits a sound to everyone on a team

```csharp
public interface EventTeamplayBroadcastAudio : IGameEvent<EventTeamplayBroadcastAudio>
```

#### Implements

- [IGameEvent<EventTeamplayBroadcastAudio>](/docs/api/gameevents/igameeventt)

## Properties

### Sound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventTeamplayBroadcastAudio.cs#L31)

name of the sound to emit
<br />
type: string

```csharp
string Sound { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Team

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventTeamplayBroadcastAudio.cs#L24)

unique team id
<br />
type: byte

```csharp
byte Team { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

